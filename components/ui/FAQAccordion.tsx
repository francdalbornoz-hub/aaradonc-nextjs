'use client'

import type { ReactNode } from 'react'
import { isValidElement, useState } from 'react'

interface FAQItem {
  q: string
  a: ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

// Flatten any answer (plain string or JSX like <>…<strong>…</strong></>) into
// the plain text Schema.org FAQPage requires. Recurses through fragments and
// elements, collecting only their text content.
function nodeToPlainText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(nodeToPlainText).join('')
  if (isValidElement(node)) {
    return nodeToPlainText((node.props as { children?: ReactNode }).children)
  }
  return ''
}

export default function FAQAccordion({ items, className = 'rt-faq' }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0)

  // ── FAQPage structured data (JSON-LD) ──────────────────────────────────────
  // Built from the same items the accordion renders, so the schema can never
  // drift from the visible content. Powers rich results + GEO (AI answer
  // engines: ChatGPT, Perplexity, Google AI Overviews).
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: nodeToPlainText(item.q),
      acceptedAnswer: {
        '@type': 'Answer',
        text: nodeToPlainText(item.a),
      },
    })),
  }

  return (
    <div className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
