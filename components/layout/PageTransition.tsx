'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Reveal from '@/components/ui/Reveal'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Remove and re-add the class so the animation retriggers on every navigation
    el.classList.remove('page-enter')
    // Force reflow so the browser registers the removal before re-adding
    void el.offsetHeight
    el.classList.add('page-enter')
  }, [pathname])

  return (
    <div ref={ref} className="page-enter">
      {/* key={pathname} → el reveal re-descubre los bloques de la ruta nueva */}
      <Reveal key={pathname} />
      {children}
    </div>
  )
}
