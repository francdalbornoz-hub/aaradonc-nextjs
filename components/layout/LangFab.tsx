'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { langFromPath, counterpartPath } from '@/lib/i18n'
import { TargetFlag } from '@/components/ui/Flags'

/**
 * Floating language switch — a circular flag button fixed at the bottom-left.
 * Shows the flag of the language you switch TO: Spain flag on English pages,
 * US flag on Spanish pages. Mirrors the header language switcher.
 */
export default function LangFab() {
  const pathname = usePathname()
  const lang = langFromPath(pathname)
  const href = counterpartPath(pathname)
  const toSpanish = lang === 'en'
  const label = toSpanish ? 'Ver en español' : 'View in English'
  const tip = toSpanish ? 'Español' : 'English'

  return (
    <Link
      href={href}
      className="lang-fab"
      aria-label={label}
      hrefLang={toSpanish ? 'es' : 'en'}
    >
      <TargetFlag currentLang={lang} size={34} />
      <span className="lang-fab__tip" aria-hidden="true">{tip}</span>
    </Link>
  )
}
