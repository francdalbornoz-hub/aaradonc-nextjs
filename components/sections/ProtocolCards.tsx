import Link from 'next/link'
import { esPath, type Lang } from '@/lib/i18n'

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

const PROTOCOLS_EN: Protocol[] = [
  {
    id: 'cfrt',
    name: 'CFRT',
    subtitle: 'Curative or Adjuvant Treatment',
    stats: [
      { label: 'Sessions', value: '10–20' },
      { label: 'Schedule', value: 'Mon–Thu' },
      { label: 'Duration', value: '3–5 weeks' },
    ],
    description:
      'The most common protocol for post-surgical cases, spinal and brain tumors. Each session is outpatient — your pet goes home the same day.',
    ctaLabel: 'Learn about CFRT',
    ctaHref: '/radiation-therapy#cfrt',
  },
  {
    id: 'srs-srt',
    name: 'SRS / SRT',
    subtitle: 'Stereotactic · High dose',
    featured: true,
    stats: [
      { label: 'Sessions', value: '1–5' },
      { label: 'Schedule', value: 'Daily or every other day' },
      { label: 'Targeting', value: 'Tumor-focused' },
    ],
    description:
      'High-dose stereotactic radiation is targeted to the tumor in fewer sessions. Typically used for small, well-defined tumors when a shorter treatment course is helpful.',
    ctaLabel: 'Learn about SRS / SRT',
    ctaHref: '/radiation-therapy#srs-srt',
  },
  {
    id: 'palliative',
    name: 'Palliative',
    subtitle: 'Improve quality of life · Alleviate pain',
    stats: [
      { label: 'Sessions', value: '3–6' },
      { label: 'Schedule', value: 'Weekly' },
      { label: 'Intent', value: 'Comfort · Control' },
    ],
    description:
      'Lower-intensity radiation focused on pain relief, improvement of function, and tumor control. Maximize quality of life for advanced or inoperable disease. Fewer sessions, weekly schedule — meaningful improvement without an intensive treatment course.',
    ctaLabel: 'Learn about Palliative Radiation',
    ctaHref: '/radiation-therapy#palliative',
  },
]

const PROTOCOLS_ES: Protocol[] = [
  {
    id: 'cfrt',
    name: 'CFRT',
    subtitle: 'Intención curativa o posquirúrgica',
    stats: [
      { label: 'Sesiones', value: '10–20' },
      { label: 'Frecuencia', value: 'Lunes a jueves' },
      { label: 'Duración', value: '3–5 semanas' },
    ],
    description:
      'Es el protocolo más utilizado después de una cirugía y en tumores cerebrales y espinales. Las sesiones son ambulatorias: tu mascota vuelve a casa el mismo día.',
    ctaLabel: 'Más información sobre CFRT →',
    ctaHref: '/radiation-therapy#cfrt',
  },
  {
    id: 'srs-srt',
    name: 'SRS / SRT',
    subtitle: 'Radioterapia estereotáctica · Dosis altas',
    featured: true,
    stats: [
      { label: 'Sesiones', value: '1–5' },
      { label: 'Frecuencia', value: 'Diaria o en días alternos' },
      { label: 'Dosis', value: 'Alta y localizada' },
    ],
    description:
      'Concentra dosis altas de radiación en el tumor en pocas sesiones. Suele indicarse en tumores pequeños y bien delimitados, cuando conviene acortar el tratamiento.',
    ctaLabel: 'Más información sobre SRS / SRT →',
    ctaHref: '/radiation-therapy#srs-srt',
  },
  {
    id: 'palliative',
    name: 'Paliativa',
    subtitle: 'Mejorar la calidad de vida · Aliviar el dolor',
    stats: [
      { label: 'Sesiones', value: '3–6' },
      { label: 'Frecuencia', value: 'Semanal' },
      { label: 'Objetivo', value: 'Bienestar · Control' },
    ],
    description:
      'Radioterapia de menor intensidad para aliviar el dolor, frenar el crecimiento del tumor y mejorar la calidad de vida. Con una sesión por semana, no requiere un tratamiento intensivo.',
    ctaLabel: 'Más información sobre la radioterapia paliativa →',
    ctaHref: '/radiation-therapy#palliative',
  },
]

const FOOTER_TEXT = {
  en: {
    note: 'Not sure which protocol applies? Every case is reviewed personally by Dr. DiBernardi — pet families and referring veterinarians are welcome to reach out directly.',
    cta: 'Learn more about our radiation therapy →',
  },
  es: {
    note: '¿Tienes dudas sobre qué protocolo corresponde? La Dra. DiBernardi revisa personalmente cada caso. Escríbenos o llámanos.',
    cta: 'Más información sobre la radioterapia →',
  },
} as const

// ─── Component ────────────────────────────────────────────────────────────────

interface ProtocolCardsProps {
  /** Show the footer note + "Learn more" CTA — true on home, false on RT page */
  showFooter?: boolean
  /** Language — English pages omit it (default 'en'); /es pages pass 'es' */
  lang?: Lang
}

export default function ProtocolCards({ showFooter = true, lang = 'en' }: ProtocolCardsProps) {
  const PROTOCOLS = lang === 'es' ? PROTOCOLS_ES : PROTOCOLS_EN
  const ft = FOOTER_TEXT[lang]
  const localizeHref = (href: string) => {
    if (lang === 'en') return href
    const [base, hash] = href.split('#')
    const mapped = esPath(base.replace(/\/$/, '') || '/')
    return hash ? `${mapped}#${hash}` : mapped
  }

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
          <p>{ft.note}</p>
          <Link href={localizeHref('/radiation-therapy')} className="protocols__footer-cta">
            {ft.cta}
          </Link>
        </div>
      )}
    </div>
  )
}
