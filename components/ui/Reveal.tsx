'use client'

import { useEffect } from 'react'

/**
 * Scroll-reveal — portado del sistema de la web de CORV, adaptado a AARADONC.
 *
 * REGLA CRÍTICA (SEO / crawlers de IA): el HTML se sirve VISIBLE. Este
 * componente agrega la clase `.reveal` (que oculta) por JS solo si
 * IntersectionObserver existe y el usuario no pidió movimiento reducido. Si el
 * JS falla, el contenido se ve igual.
 *
 * No requiere markup nuevo: descubre los bloques de cada sección de <main>
 * automáticamente y les aplica un reveal escalonado. Igual respeta
 * `[data-reveal]` explícito si algún día se quiere control fino.
 *
 * Solo oculta lo que está BAJO el fold al montar, así lo que ya está en
 * pantalla no parpadea. Cada elemento se revela una sola vez.
 */
export default function Reveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const main =
      document.getElementById('main-content') ?? document.querySelector('main')
    if (!main) return

    // ── 1) Resolver los elementos a revelar ──────────────────────────────────
    const targets: HTMLElement[] = []
    const isHero = (el: HTMLElement) => /hero/i.test(el.className)

    const explicit = Array.from(
      main.querySelectorAll<HTMLElement>('[data-reveal]')
    )

    if (explicit.length > 0) {
      explicit.forEach((el, i) => {
        if (!el.style.getPropertyValue('--i')) el.style.setProperty('--i', String(i))
        targets.push(el)
      })
    } else {
      // Auto. <main> envuelve el contenido en el div de PageTransition, así que
      // bajamos un nivel si el primer nivel es un único wrapper.
      let sections = Array.from(main.children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement && !isHero(el)
      )
      if (sections.length === 1 && sections[0].children.length > 1) {
        sections = Array.from(sections[0].children).filter(
          (el): el is HTMLElement => el instanceof HTMLElement && !isHero(el)
        )
      }

      sections.forEach((section) => {
        // El contenedor interno típico; si no hay, la propia sección.
        const inner =
          section.querySelector<HTMLElement>(':scope > .contenedor') ??
          section.querySelector<HTMLElement>(':scope > .cond-editorial') ??
          section
        const kids = Array.from(inner.children).filter(
          (el): el is HTMLElement => el instanceof HTMLElement
        )
        // Si el contenedor tiene un puñado de bloques, se escalonan; si no,
        // se revela la sección entera como una sola unidad.
        const group = kids.length >= 2 && kids.length <= 14 ? kids : [section]
        group.forEach((el, i) => {
          el.style.setProperty('--i', String(i))
          targets.push(el)
        })
      })
    }

    if (targets.length === 0) return

    // ── 2) Ocultar solo lo que arranca bajo el fold (evita parpadeo arriba) ──
    const foldLine = window.innerHeight * 0.9
    const hidden = targets.filter(
      (el) => el.getBoundingClientRect().top > foldLine
    )
    if (hidden.length === 0) return
    hidden.forEach((el) => el.classList.add('reveal'))

    // ── 3) Observar la entrada en viewport ───────────────────────────────────
    const onIntersect: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        el.classList.add('is-visible')
        el.style.willChange = 'transform, opacity'
        el.addEventListener(
          'transitionend',
          () => {
            el.style.willChange = ''
          },
          { once: true }
        )
        obs.unobserve(el)
      })
    }

    const options = { rootMargin: '0px 0px -10% 0px' }
    // Un bloque más alto que el viewport nunca alcanza un ratio alto: se observa
    // con threshold 0 para que no quede oculto para siempre.
    const standard = new IntersectionObserver(onIntersect, { ...options, threshold: 0.15 })
    const tall = new IntersectionObserver(onIntersect, { ...options, threshold: 0 })

    hidden.forEach((el) => {
      const isTall = el.offsetHeight > window.innerHeight * 0.8
      ;(isTall ? tall : standard).observe(el)
    })

    return () => {
      standard.disconnect()
      tall.disconnect()
    }
  }, [])

  return null
}
