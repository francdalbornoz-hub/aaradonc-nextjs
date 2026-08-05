import type { Metadata } from 'next'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import { CONTACT_INFO } from '@/lib/nav-config'
import FormReferral from '@/components/forms/FormReferral'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/contact-referrers')

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

export default function ContactReferrersPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="ct-hero" aria-label="Referral page hero">
        {/* Animated SVG background */}
        <div className="ct-hero__bg" aria-hidden="true">
          <svg viewBox="0 0 1440 560" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="crOrb1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7EC8E3" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#7EC8E3" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="crOrb2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1a4fbf" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#1a4fbf" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="1240" cy="120" r="280" fill="url(#crOrb2)" style={{ animation: 'ct-pulse-orb 7s ease-in-out infinite' }}/>
            <circle cx="200" cy="400" r="240" fill="url(#crOrb1)" style={{ animation: 'ct-pulse-orb 9s ease-in-out infinite 2s' }}/>
            <circle cx="720" cy="560" r="200" fill="url(#crOrb2)" style={{ animation: 'ct-pulse-orb 11s ease-in-out infinite 1s' }}/>
            <g style={{ animation: 'ct-rotate-slow 28s linear infinite', transformOrigin: '1260px 140px' }}>
              <ellipse cx="1260" cy="140" rx="160" ry="55" fill="none" stroke="#7EC8E3" strokeWidth="0.8" strokeDasharray="6 4" opacity="0.5"/>
            </g>
            <g style={{ animation: 'ct-rotate-rev 22s linear infinite', transformOrigin: '1260px 140px' }}>
              <ellipse cx="1260" cy="140" rx="160" ry="55" fill="none" stroke="#7EC8E3" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.35" transform="rotate(60,1260,140)"/>
            </g>
            <circle cx="1260" cy="140" r="8" fill="#7EC8E3" opacity="0.7" style={{ animation: 'ct-pulse-orb 4s ease-in-out infinite' }}/>
            <g style={{ animation: 'ct-rotate-rev 32s linear infinite', transformOrigin: '180px 380px' }}>
              <ellipse cx="180" cy="380" rx="130" ry="44" fill="none" stroke="#7EC8E3" strokeWidth="0.7" strokeDasharray="5 5" opacity="0.4"/>
            </g>
            <circle cx="180" cy="380" r="6" fill="#7EC8E3" opacity="0.6" style={{ animation: 'ct-pulse-orb 5s ease-in-out infinite 1s' }}/>
          </svg>
        </div>

        <div className="ct-hero__inner">
          <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center', marginBottom: 24 }}>
            For Veterinarians · Loxahatchee, FL
          </div>
          <h1 className="ct-hero__h1">
            Refer a Patient.<br /><em>We respond</em><br />same day. Always.
          </h1>
          <p className="ct-hero__sub">
            Submit your patient&apos;s information below and Dr. DiBernardi will
            follow up the same day to coordinate next steps with you.
          </p>
          <div className="ct-hero__pills">
            <div className="ct-hero__pill">
              <span className="ct-hero__pill-dot" aria-hidden="true" />
              Same-day response
            </div>
            <div className="ct-hero__pill">
              <span className="ct-hero__pill-dot" aria-hidden="true" />
              Board Certified Radiation Oncologist
            </div>
            <div className="ct-hero__pill">
              <span className="ct-hero__pill-dot" aria-hidden="true" />
              Confidential &amp; secure
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          QUICK INFO STRIP — phone, email, location, response
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="crf-info-strip">
        <div className="crf-info-strip__inner">
          {/* GTM: phone_click */}
          <a href={CONTACT_INFO.phoneHref} className="crf-info-card">
            <div className="crf-info-card__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <div className="crf-info-card__label">Phone</div>
              <div className="crf-info-card__val">{CONTACT_INFO.phone}</div>
            </div>
          </a>

          <a href={`mailto:${CONTACT_INFO.email}`} className="crf-info-card">
            <div className="crf-info-card__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <div className="crf-info-card__label">Email</div>
              <div className="crf-info-card__val">{CONTACT_INFO.email}</div>
            </div>
          </a>

          <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener" className="crf-info-card">
            <div className="crf-info-card__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div className="crf-info-card__label">Location</div>
              <div className="crf-info-card__val">{CONTACT_INFO.address}</div>
            </div>
          </a>

          <div className="crf-info-card">
            <div className="crf-info-card__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <div className="crf-info-card__label">Response</div>
              <div className="crf-info-card__val">Same day. Always.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          FORM SECTION — centered card with the long referral form
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="crf-section" aria-label="Referral form">
        <div className="crf-shell">
          <Link href="/for-veterinarians" className="crf-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to For Veterinarians
          </Link>

          <div className="crf-form-card">
            <div className="crf-form-header">
              <div>
                <h2 className="crf-form-header__title">
                  Referral <em>Request</em>
                </h2>
                <p className="crf-form-header__sub">
                  Please complete the sections relevant to your case. Fields
                  marked * are required. All information is treated with full
                  confidentiality.
                </p>
              </div>
              <div className="crf-form-header__badge">
                Same-day response
              </div>
            </div>

            {/* GTM: form_submit / referral */}
            <FormReferral />
          </div>

          <div className="crf-tip-card">
            <div className="crf-tip-card__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div>
              <h3 className="crf-tip-card__title">Sending medical records and imaging</h3>
              <p className="crf-tip-card__text">
                Email histopathology reports, imaging (CT, MRI, X-ray), and any
                relevant medical history to{' '}
                <a href={`mailto:${CONTACT_INFO.email}`} className="crf-tip-card__email">
                  {CONTACT_INFO.email}
                </a>
                . For urgent cases, call us directly at{' '}
                <a href={CONTACT_INFO.phoneHref} className="crf-tip-card__email">
                  {CONTACT_INFO.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

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
          PET FAMILIES CTA STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{
        background: 'linear-gradient(90deg, #1240a8 0%, #1A4FBF 50%, #1240a8 100%)',
        borderTop: '1px solid rgba(126,200,227,.15)',
        borderBottom: '1px solid rgba(0,0,0,.15)',
        padding: '20px 56px',
      }}>
        <div style={{ maxWidth: 1408, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,.85)', fontWeight: 500 }}>
            <strong style={{ fontWeight: 700 }}>Are you a pet family?</strong>{' '}
            Use our consultation form — we respond the same day with clarity and no pressure.
          </p>
          <Link
            href="/contact-pet-owners"
            className="cta-primario"
            style={{ padding: '13px 28px', fontSize: 15, flexShrink: 0 }}
          >
            Request a Consultation →
          </Link>
        </div>
      </div>
    </>
  )
}
