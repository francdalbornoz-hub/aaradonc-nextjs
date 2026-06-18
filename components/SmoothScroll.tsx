'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.8,
      wheelMultiplier: 0.9,
      smoothWheel: true,
    })

    // Lenis needs to handle anchor links — stop native scroll-behavior
    // so it can intercept hash navigation too
    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -88, duration: 1.6 })
    }

    document.addEventListener('click', handleAnchorClick)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return null
}
