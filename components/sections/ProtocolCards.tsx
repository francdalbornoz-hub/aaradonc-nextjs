import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProtocolStat {
  label: string
  value: string
}

interface Protocol {
  id: string
  name: string
  subtitle: string
  badge?: string
  featured?: boolean
  stats: ProtocolStat[]
  description: string
  ctaLabel: string
  ctaHref: string
}

// ─── Protocol data — extracted from source-content ───────────────────────────
// Order per global hierarchy: CFRT (1) → SRS/SRT featured (2) → Palliative (3)

const PROTOCOLS: Protocol[] = [
  {
    id: 'cfrt',
    name: 'CFRT',
    subtitle: 'Curative · Adjuvant intent',
    stats: [
      { label: 'Sessions', value: '16–20' },
      { label: 'Schedule', value: 'Mon–Fri' },
      { label: 'Duration', value: '3–4 weeks' },
    ],
    description:
      'Standard fractionated radiation for curative or adjuvant intent. The most common protocol for post-surgical cases, oral tumors, nasal tumors, and brain tumors. Each session is outpatient — your pet goes home the same day.',
    ctaLabel: 'Learn about CFRT',
    ctaHref: '/radiation-therapy#cfrt',
  },
  {
    id: 'srs-srt',
    name: 'SRS / SRT',
    subtitle: 'Stereotactic · High-dose precision',
    badge: '★ Most Requested',
    featured: true,
    stats: [
      { label: 'Sessions', value: '1–5' },
      { label: 'Schedule', value: 'Every other day' },
      { label: 'Precision', value: 'Submillimeter' },
    ],
    description:
      'High-dose stereotactic radiation delivered with submillimeter accuracy in fewer sessions. Preferred for brain tumors, spinal tumors, and cases where maximum precision and minimal treatment time matter most.',
    ctaLabel: 'Learn about SRS / SRT',
    ctaHref: '/radiation-therapy#srs-srt',
  },
  {
    id: 'palliative',
    name: 'Palliative',
    subtitle: 'Quality of life · Symptom relief',
    stats: [
      { label: 'Sessions', value: '3–5' },
      { label: 'Schedule', value: 'Weekly' },
      { label: 'Intent', value: 'Comfort · Control' },
    ],
    description:
      'Lower-intensity radiation focused on pain relief, tumor control, and quality of life for advanced or inoperable disease. Fewer sessions, weekly schedule — meaningful improvement without an intensive treatment course.',
    ctaLabel: 'Learn about Palliative Radiation',
    ctaHref: '/radiation-therapy#palliative',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

interface ProtocolCardsProps {
  /** Show the footer note + "Learn more" CTA — true on home, false on RT page */
  showFooter?: boolean
}

export default function ProtocolCards({ showFooter = true }: ProtocolCardsProps) {
  return (
    <div className="protocols">
      <div className="protocols__grid">
        {PROTOCOLS.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className={`proto-card${p.featured ? ' proto-card--featured' : ''}`}
            aria-label={`${p.name} protocol`}
          >
            {p.badge && (
              <div className="proto-card__badge">{p.badge}</div>
            )}
            <div className="proto-card__head">
              <h3 className="proto-card__name">{p.name}</h3>
              <p className="proto-card__subtitle">{p.subtitle}</p>
            </div>

            <div className="proto-card__stats">
              {p.stats.map((s) => (
                <div key={s.label} className="proto-stat">
                  <span className="proto-stat__value">{s.value}</span>
                  <span className="proto-stat__label">{s.label}</span>
                </div>
              ))}
            </div>

            <p className="proto-card__desc">{p.description}</p>
          </article>
        ))}
      </div>

      {showFooter && (
        <div className="protocols__footer">
          <p>
            Not sure which protocol applies? Every case is reviewed personally by Dr. DiBernardi —
            pet families and referring veterinarians are welcome to reach out directly.
          </p>
          <Link href="/radiation-therapy" className="protocols__footer-cta">
            Learn more about our radiation therapy →
          </Link>
        </div>
      )}
    </div>
  )
}
