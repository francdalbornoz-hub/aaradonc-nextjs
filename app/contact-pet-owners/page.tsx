import type { Metadata } from 'next'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import { CONTACT_INFO } from '@/lib/nav-config'
import FormContact from '@/components/forms/FormContact'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/contact-pet-owners')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: { canonical: pageSeo.canonical },
  openGraph: {
    title: pageSeo.title,
    description: pageSeo.description,
    url: pageSeo.canonical,
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPetOwnersPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="ct-hero" aria-label="Contact page hero">
        {/* Animated SVG background */}
        <div className="ct-hero__bg" aria-hidden="true">
          <svg viewBox="0 0 1440 560" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="ctOrb1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7EC8E3" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#7EC8E3" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="ctOrb2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1a4fbf" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#1a4fbf" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="200" cy="120" r="280" fill="url(#ctOrb2)" style={{ animation: 'ct-pulse-orb 7s ease-in-out infinite' }}/>
            <circle cx="1240" cy="400" r="240" fill="url(#ctOrb1)" style={{ animation: 'ct-pulse-orb 9s ease-in-out infinite 2s' }}/>
            <circle cx="720" cy="560" r="200" fill="url(#ctOrb2)" style={{ animation: 'ct-pulse-orb 11s ease-in-out infinite 1s' }}/>
            <g style={{ animation: 'ct-rotate-slow 28s linear infinite', transformOrigin: '180px 140px' }}>
              <ellipse cx="180" cy="140" rx="160" ry="55" fill="none" stroke="#7EC8E3" strokeWidth="0.8" strokeDasharray="6 4" opacity="0.5"/>
            </g>
            <g style={{ animation: 'ct-rotate-rev 22s linear infinite', transformOrigin: '180px 140px' }}>
              <ellipse cx="180" cy="140" rx="160" ry="55" fill="none" stroke="#7EC8E3" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.35" transform="rotate(60,180,140)"/>
            </g>
            <circle cx="180" cy="140" r="8" fill="#7EC8E3" opacity="0.7" style={{ animation: 'ct-pulse-orb 4s ease-in-out infinite' }}/>
            <g style={{ animation: 'ct-rotate-rev 32s linear infinite', transformOrigin: '1260px 380px' }}>
              <ellipse cx="1260" cy="380" rx="130" ry="44" fill="none" stroke="#7EC8E3" strokeWidth="0.7" strokeDasharray="5 5" opacity="0.4"/>
            </g>
            <circle cx="1260" cy="380" r="6" fill="#7EC8E3" opacity="0.6" style={{ animation: 'ct-pulse-orb 5s ease-in-out infinite 1s' }}/>
            <g style={{ animation: 'ct-drift 18s ease-in-out infinite' }}>
              <path d="M660,40 C680,90 700,130 680,175 C660,220 640,260 660,305 C680,350 700,390 680,435 C660,478 640,518 660,560" fill="none" stroke="#7EC8E3" strokeWidth="1.3" strokeDasharray="400" strokeDashoffset="0" opacity="0.5" style={{ animation: 'ct-helix 12s linear infinite' }}/>
              <path d="M700,40 C680,90 660,130 680,175 C700,220 720,260 700,305 C680,350 660,390 680,435 C700,478 720,518 700,560" fill="none" stroke="#a8dcf0" strokeWidth="1.3" strokeDasharray="400" strokeDashoffset="-200" opacity="0.4" style={{ animation: 'ct-helix 12s linear infinite' }}/>
            </g>
          </svg>
        </div>

        <div className="ct-hero__inner">
          <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center', marginBottom: 24 }}>
            For Pet Owners · Loxahatchee, FL
          </div>
          <h1 className="ct-hero__h1">
            Get in touch.<br /><em>We respond</em><br />same day. Always.
          </h1>
          <div className="ct-hero__pills">
            <div className="ct-hero__pill">
              <span className="ct-hero__pill-dot" aria-hidden="true" />
              Same-day response
            </div>
            <div className="ct-hero__pill">
              <span className="ct-hero__pill-dot" aria-hidden="true" />
              Board Certified Radiation Oncologist on site
            </div>
            <div className="ct-hero__pill">
              <span className="ct-hero__pill-dot" aria-hidden="true" />
              Palm Beach County, FL
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN GRID — Form + Info
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="ct-main">
        {/* Left: Form */}
        <div className="ct-form-col">
          <div className="eyebrow" style={{ marginBottom: 20 }}>For Pet Owners</div>
          <div className="ct-form__title">
            Request a <em>Consultation</em>
          </div>
          <p className="ct-form__sub">
            Tell us about your pet and we will get back to you the same day — with clarity and no pressure.
          </p>
          {/* GTM: form_submit / consultation */}
          <FormContact variant="light" />
        </div>

        {/* Right: Contact info */}
        <div className="ct-info-col" aria-label="Contact information">
          <div className="ct-info__section">
            <div className="ct-info__section-title">Contact Information</div>
            <div className="ct-info__items">
              {/* GTM: phone_click */}
              <a href={CONTACT_INFO.phoneHref} className="ct-info__item">
                <div className="ct-info__item-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info__item-label">Phone</div>
                  <div className="ct-info__item-val">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="ct-info__item">
                <div className="ct-info__item-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info__item-label">Email</div>
                  <div className="ct-info__item-val">{CONTACT_INFO.email}</div>
                </div>
              </a>

              <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener" className="ct-info__item">
                <div className="ct-info__item-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="ct-info__item-label">Location</div>
                  <div className="ct-info__item-val">{CONTACT_INFO.address}</div>
                </div>
              </a>
            </div>
          </div>

          <div className="ct-info__divider" aria-hidden="true" />

          <div className="ct-info__section">
            <div className="ct-info__section-title">Hours</div>
            <div className="ct-hours">
              <div className="ct-hour">
                <span className="ct-hour__day">Monday – Friday</span>
                <span className="ct-hour__time">8:00 AM – 5:00 PM</span>
              </div>
              <div className="ct-hour">
                <span className="ct-hour__day">Saturday</span>
                <span className="ct-hour__time">Closed</span>
              </div>
              <div className="ct-hour">
                <span className="ct-hour__day">Sunday</span>
                <span className="ct-hour__time">Closed</span>
              </div>
              <div className="ct-hour">
                <span className="ct-hour__day">Consultations</span>
                <span className="ct-hour__badge">Same-week available</span>
              </div>
            </div>
          </div>

          <div className="ct-info__divider" aria-hidden="true" />

          <div className="ct-info__section">
            <div className="ct-info__section-title">Response Time</div>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', lineHeight: 1.65 }}>
              We respond to all inquiries{' '}
              <span style={{ color: 'rgba(255,255,255,.85)', fontWeight: 600 }}>the same day.</span>{' '}
              For urgent cases, call us directly.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MAP PLACEHOLDER
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="ct-map" aria-label="Location map placeholder">
        <div className="ct-map__inner">
          <div className="ct-map__pin" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div className="ct-map__label">Animal Alliance Radiation Oncology</div>
          <div className="ct-map__address">
            <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener">
              {CONTACT_INFO.address}
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          REFERRING VETS CTA STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{
        background: 'linear-gradient(90deg, #1240a8 0%, #1A4FBF 50%, #1240a8 100%)',
        borderTop: '1px solid rgba(126,200,227,.15)',
        borderBottom: '1px solid rgba(0,0,0,.15)',
        padding: '20px 56px',
      }}>
        <div style={{ maxWidth: 1408, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.85)', fontWeight: 500 }}>
            <strong style={{ fontWeight: 700 }}>Are you a veterinarian?</strong>{' '}
            Use our dedicated referral form for faster processing.
          </p>
          <Link
            href="/contact-referrers"
            className="cta-primario"
            style={{ padding: '13px 28px', fontSize: 15, flexShrink: 0 }}
          >
            Refer a Patient →
          </Link>
        </div>
      </div>
    </>
  )
}
