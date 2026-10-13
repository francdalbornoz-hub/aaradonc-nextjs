'use client'

import { useEffect } from 'react'

/**
 * Scroll-reveal — auto-descubre los bloques de cada sección de <main> y los
 * revela al entrar en viewport. Marca DESPUÉS de hidratar (en useEffect), así
 * no rompe la hidratación de React. Para no producir parpadeo, solo oculta lo
 * que arranca BAJO el fold; lo que ya está en pantalla se deja visible.
 *
 * SEO-safe: el HTML se sirve visible; si el JS falla o se pidió movimiento
 * reducido, no se oculta nada.
 *
 * Además aplica el efecto "zoom-settle" a los contenedores de imagen (la
 * imagen entra con un leve zoom y se asienta al revelarse).
 *
 * Va dentro de PageTransition con key={pathname} → se re-monta por ruta.
 */
const IMG_WRAP_SELECTOR =
  '.tech__visual-img,.sp-editorial__img,.vet-approach__photo,.rt-intro__visual,.pc-timeline__card-img,.onc-hero__photo'

export default function Reveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const main =
      document.getElementById('main-content') ?? document.querySelector('main')
    if (!main) return

    const isHero = (el: HTMLElement) => /hero/i.test(el.className)
    const targets: HTMLElement[] = []

    // 1) Bloques de sección (fade-up escalonado)
    let sections = Array.from(main.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement && !isHero(el)
    )
    if (sections.length === 1 && sections[0].children.length > 1) {
      sections = Array.from(sections[0].children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement && !isHero(el)
      )
    }
    sections.forEach((section) => {
      const inner =
        section.querySelector<HTMLElement>(':scope > .contenedor') ??
        section.querySelector<HTMLElement>(':scope > .cond-editorial') ??
        section
      const kids = Array.from(inner.children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement
      )
      const group = kids.length >= 2 && kids.length <= 14 ? kids : [section]
      group.forEach((el, i) => {
        el.style.setProperty('--i', String(i))
        targets.push(el)
      })
    })

    // 2) Contenedores de imagen (fade-up + zoom-settle)
    Array.from(main.querySelectorAll<HTMLElement>(IMG_WRAP_SELECTOR)).forEach((w) => {
      w.classList.add('img-zoom')
      if (!targets.includes(w)) targets.push(w)
    })

    if (targets.length === 0) return

    // 3) Ocultar solo lo que arranca bajo el fold (evita parpadeo arriba)
    const foldLine = window.innerHeight * 0.9
    const hidden = targets.filter((el) => el.getBoundingClientRect().top > foldLine)
    if (hidden.length === 0) return
    hidden.forEach((el) => el.classList.add('reveal'))

    // 4) Observar la entrada en viewport
    const onIntersect: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        obs.unobserve(entry.target)
      })
    }
    const options = { rootMargin: '0px 0px -10% 0px' }
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
