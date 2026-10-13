'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getContactInfo } from '@/lib/nav-config'
import { langFromPath, esPath, type Lang } from '@/lib/i18n'
import { CONDITION_PATHS } from '@/lib/seo-config'

// Condition pages (EN + ES) already carry their own dual "For Pet Families /
// For Veterinarians" CTA block, so the global footer CTA strip is hidden there
// to avoid stacking three CTAs. Built from the single source of condition paths.
const CONDITION_PATH_SET: ReadonlySet<string> = new Set(
  CONDITION_PATHS.flatMap((p) => [p, esPath(p)])
)

// ─── Icons ────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82A16 16 0 0 0 16 16.91l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

// ─── Footer nav columns (EN source; ES localized at render) ──────────────────

interface FooterCol {
  heading: string
  links: { label: string; href: string }[]
}

const FOOTER_NAV: FooterCol[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Radiation Therapy', href: '/radiation-therapy/' },
      { label: 'CFRT', href: '/radiation-therapy/#cfrt' },
      { label: 'SRS / SRT', href: '/radiation-therapy/#srs-srt' },
      { label: 'Palliative Radiation', href: '/radiation-therapy/#palliative' },
    ],
  },
  {
    heading: 'Conditions',
    links: [
      { label: 'Brain Tumors', href: '/brain-tumors' },
      { label: 'Nasal Tumors', href: '/nasal-tumors' },
      { label: 'Osteosarcoma', href: '/osteosarcoma' },
      { label: 'Soft Tissue Sarcomas', href: '/soft-tissue-sarcomas' },
      { label: 'Mast Cell Tumors', href: '/mast-cell-tumors' },
      { label: 'Oral Tumors', href: '/oral-tumors' },
      { label: 'Lymphoma', href: '/lymphoma' },
      { label: 'View all conditions →', href: '/radiation-therapy#conditions' },
    ],
  },
  {
    heading: 'Pet Families',
    links: [
      { label: 'Pet Cancer', href: '/pet-cancer' },
      { label: 'Dog Cancer', href: '/dog-cancer' },
      { label: 'Cat Cancer', href: '/cat-cancer' },
      { label: 'Request a Consultation', href: '/contact-pet-owners' },
    ],
  },
  {
    heading: 'Veterinarians',
    links: [
      { label: 'For Veterinarians', href: '/for-veterinarians' },
      { label: 'Refer a Patient', href: '/contact-referrers' },
      { label: 'Our Radiation Oncologist', href: '/radiation-oncologist' },
    ],
  },
]

// EN → ES for footer headings + link labels.
const ES_FOOTER: Record<string, string> = {
  'Services': 'Servicios',
  'Conditions': 'Tipos de tumores',
  'Pet Families': 'Familias',
  'Veterinarians': 'Veterinarios',
  'Radiation Therapy': 'Radioterapia',
  'Palliative Radiation': 'Radioterapia paliativa',
  'Brain Tumors': 'Tumores cerebrales',
  'Nasal Tumors': 'Tumores nasales',
  'Soft Tissue Sarcomas': 'Sarcomas de tejidos blandos',
  'Mast Cell Tumors': 'Mastocitomas',
  'Oral Tumors': 'Tumores orales',
  'Lymphoma': 'Linfoma',
  'View all conditions →': 'Ver todos los tipos de tumores →',
  'Pet Cancer': 'Cáncer en mascotas',
  'Dog Cancer': 'Cáncer en perros',
  'Cat Cancer': 'Cáncer en gatos',
  'Request a Consultation': 'Agendar una consulta',
  'For Veterinarians': 'Para veterinarios',
  'Refer a Patient': 'Derivar un paciente',
  'Our Radiation Oncologist': 'Nuestra radiooncóloga',
}

const CHROME = {
  en: {
    footerAria: 'Site footer',
    ctaLabel: 'Promptly. Always.',
    ctaHeadingA: 'Ready to take the next step',
    ctaHeadingB: 'for your pet?',
    requestConsult: 'Request a Consultation',
    referPatient: 'Refer a Patient',
    homeAria: 'Animal Alliance Radiation Oncology — Home',
    logoSub: 'Radiation Oncology · Palm Beach',
    taglineA: 'The only center 100% dedicated to',
    taglineB: 'Radiation Oncology in Florida.',
    cert: 'Board Certified Radiation Oncologist ON SITE',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },
  es: {
    footerAria: 'Pie de página',
    ctaLabel: 'Te respondemos a la brevedad',
    ctaHeadingA: '¿Tienes dudas sobre la radioterapia',
    ctaHeadingB: 'para tu mascota?',
    requestConsult: 'Agendar una consulta',
    referPatient: 'Derivar un paciente',
    homeAria: 'Ir al inicio de Animal Alliance Radiation Oncology',
    logoSub: 'Radioterapia veterinaria · Palm Beach',
    taglineA: 'El único centro de Florida dedicado',
    taglineB: 'exclusivamente a la radioterapia veterinaria.',
    cert: 'Atención directa de una radiooncóloga certificada',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
  },
} as const

function localizeHref(href: string, lang: Lang): string {
  if (lang === 'en') return href
  const [base, hash] = href.split('#')
  const clean = base === '/' ? '/' : base.replace(/\/$/, '')
  const mapped = esPath(clean)
  return hash ? `${mapped}#${hash}` : mapped
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const pathname = usePathname()
  const lang = langFromPath(pathname)
  const t = CHROME[lang]
  const CONTACT_INFO = getContactInfo(lang)
  const currentYear = new Date().getFullYear()

  const isConditionPage = CONDITION_PATH_SET.has(pathname.replace(/\/$/, '') || '/')
  const homeHref = lang === 'es' ? '/es' : '/'
  const consultHref = localizeHref('/contact-pet-owners', lang)
  const referHref = localizeHref('/contact-referrers', lang)
  const tl = (label: string) => (lang === 'es' ? ES_FOOTER[label] ?? label : label)

  return (
    <footer className="site-footer" aria-label={t.footerAria}>

      {/* ── CTA strip (hidden on condition pages — they have their own dual CTA) ─ */}
      {!isConditionPage && (
        <div className="footer-cta">
          <div className="footer-cta__inner">
            <div className="footer-cta__copy">
              <p className="footer-cta__label">{t.ctaLabel}</p>
              <h2 className="footer-cta__heading">
                {t.ctaHeadingA}<br />
                {t.ctaHeadingB}
              </h2>
            </div>
            <div className="footer-cta__actions">
              <Link href={consultHref} className="footer-btn footer-btn--primary">
                {t.requestConsult}
              </Link>
              <Link href={referHref} className="footer-btn footer-btn--secondary">
                {t.referPatient}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Main footer ─────────────────────────────────────────────────────── */}
      <div className="footer-main">
        <div className="footer-main__inner">

          {/* Brand column */}
          <div className="footer-brand">
            <Link href={homeHref} className="logo" aria-label={t.homeAria}>
              <div className="logo__main">Animal <em>Alliance</em></div>
              <div className="logo__sub">{t.logoSub}</div>
            </Link>
            <p className="footer-brand__tagline">
              {t.taglineA}<br />
              {t.taglineB}
            </p>
            <p className="footer-brand__cert">
              {t.cert}
            </p>

            {/* Contact info */}
            <div className="footer-contact">
              <a href={CONTACT_INFO.phoneHref} className="footer-contact__item">
                <PhoneIcon />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="footer-contact__item">
                <MailIcon />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener"
                className="footer-contact__item"
              >
                <MapPinIcon />
                <span>{CONTACT_INFO.address}</span>
              </a>
              <div className="footer-contact__item">
                <ClockIcon />
                <span>{CONTACT_INFO.hours}</span>
              </div>
            </div>

            {/* Social */}
            <div className="footer-social">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener"
                className="footer-social__link"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer-nav">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading} className="footer-nav__col">
                <h3 className="footer-nav__heading">{tl(col.heading)}</h3>
                <ul className="footer-nav__list" role="list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={localizeHref(link.href, lang)} className="footer-nav__link">
                        {tl(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────────── */}
      <div className="footer-bottom">
        <div className="footer-bottom__inner">
          <p className="footer-bottom__copy">
            © {currentYear} Animal Alliance Radiation Oncology. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
