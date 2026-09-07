'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import type Lenis from 'lenis'

// Offset para que las anclas no queden tapadas por el header fijo.
const ANCHOR_OFFSET = 96

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Salto a un ancla respetando el offset del header. Sirve para ambos modos:
    // con Lenis (suave) o nativo (movimiento reducido).
    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      const lenis = lenisRef.current
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -ANCHOR_OFFSET, duration: 1.2 })
      } else {
        const y =
          (el as HTMLElement).getBoundingClientRect().top +
          window.scrollY -
          ANCHOR_OFFSET
        window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' })
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // Movimiento reducido: nada de Lenis, scroll nativo del navegador.
    if (reduced) {
      return () => document.removeEventListener('click', handleAnchorClick)
    }

    let frame = 0
    let cancelled = false

    // Import dinámico: Lenis no bloquea la carga inicial ni el primer paint.
    import('lenis').then(({ default: LenisCtor }) => {
      if (cancelled) return
      const lenis = new LenisCtor({
        // lerp da un suavizado ágil e independiente del frame-rate (como CORV).
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        // Sin smooth en touch: mantiene el gesto nativo del móvil.
        syncTouch: false,
      })
      lenisRef.current = lenis

      const raf = (time: number) => {
        lenis.raf(time)
        frame = requestAnimationFrame(raf)
      }
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      document.removeEventListener('click', handleAnchorClick)
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  // Cada ruta nueva arranca arriba. Lenis mantiene su propia posición, así que
  // reseteamos al cambiar de ruta — salvo cuando se navega a un ancla.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) return
    const lenis = lenisRef.current
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])

  return null
}
