import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/nav-config'

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

// ─── Footer nav columns ───────────────────────────────────────────────────────

const FOOTER_NAV = [
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

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-label="Site footer">

      {/* ── CTA strip ───────────────────────────────────────────────────────── */}
      <div className="footer-cta">
        <div className="footer-cta__inner">
          <div className="footer-cta__copy">
            <p className="footer-cta__label">Promptly. Always.</p>
            <h2 className="footer-cta__heading">
              Ready to take the next step<br />
              for your pet?
            </h2>
          </div>
          <div className="footer-cta__actions">
            <Link href="/contact-pet-owners" className="footer-btn footer-btn--primary">
              Request a Consultation
            </Link>
            <Link href="/contact-referrers" className="footer-btn footer-btn--secondary">
              Refer a Patient
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main footer ─────────────────────────────────────────────────────── */}
      <div className="footer-main">
        <div className="footer-main__inner">

          {/* Brand column */}
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="Animal Alliance Radiation Oncology — Home">
              <div className="logo__main">Animal <em>Alliance</em></div>
              <div className="logo__sub">Radiation Oncology · Palm Beach</div>
            </Link>
            <p className="footer-brand__tagline">
              The only center 100% dedicated to<br />
              Radiation Oncology in Florida.
            </p>
            <p className="footer-brand__cert">
              Board Certified Radiation Oncologist ON SITE
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
                <h3 className="footer-nav__heading">{col.heading}</h3>
                <ul className="footer-nav__list" role="list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="footer-nav__link">
                        {link.label}
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
            © {currentYear} Animal Alliance Radiation Oncology. All rights reserved.
          </p>
          <div className="footer-bottom__links">
            <Link href="/privacy-policy" className="footer-bottom__link">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms-of-use" className="footer-bottom__link">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
