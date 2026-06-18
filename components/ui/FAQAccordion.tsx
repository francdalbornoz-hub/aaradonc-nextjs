'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'

interface FAQItem {
  q: string
  a: ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className = 'rt-faq' }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className={className}>
      {items.map((item, i) => (
        <div key={i} className={`rt-faq-item${open === i ? ' rt-faq-item--open' : ''}`}>
          <button
            className="rt-faq__q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="rt-faq__q-num" aria-hidden="true">{i + 1}</span>
            <span className="rt-faq__q-text">{item.q}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {open === i && (
            <div className="rt-faq__a">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
