import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import { CONTACT_INFO } from '@/lib/nav-config'
import FormReferralCompact from '@/components/forms/FormReferralCompact'
import FAQAccordion from '@/components/ui/FAQAccordion'
import ProtocolCards from '@/components/sections/ProtocolCards'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/for-veterinarians')

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const FAQ_ITEMS = [
  {
    q: 'Do pet families need a referral from me to contact AARADONC?',
    a: <>No. <strong>Pet families can contact us directly.</strong> However, when you refer a patient, we coordinate everything with your practice — keeping you fully informed and involved throughout the process.</>,
  },
  {
    q: 'What information should I include in the referral?',
    a: <>Send whatever you have. Ideally: <strong>histopathology report, available imaging (CT/MRI/X-ray), recent clinical notes, and staging information.</strong> If you don&apos;t have everything, send what you have — we will coordinate the rest.</>,
  },
  {
    q: 'How quickly will I hear back after submitting a referral?',
    a: <><strong>Same day.</strong> Dr. DiBernardi personally reviews every referral and we acknowledge receipt the same day. A consultation is typically scheduled <strong>within the week</strong> — sooner for urgent cases.</>,
  },
  {
    q: 'Will I receive updates on my patient during treatment?',
    a: <>Yes. You receive a <strong>full written consultation report</strong> after the initial appointment, and <strong>regular updates throughout treatment.</strong> After treatment concludes, a comprehensive case summary is sent to your practice.</>,
  },
  {
    q: 'Does AARADONC take over primary care of the patient?',
    a: <>No. Our role is <strong>exclusively radiation oncology.</strong> Your patient <strong>returns to your practice</strong> for all other care. We complement your team — we don&apos;t replace the relationship you&apos;ve built.</>,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ForVeterinariansPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO — split with inline form
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="hero hero--vet" aria-label="For veterinarians hero">
        <div className="hero__inner hero__inner--split">

          {/* Left: text */}
          <div className="hero__split-text">
            <div className="hero__eyebrow">
              <div className="hero__dot" aria-hidden="true" />
              <span>For Referring Veterinarians · Palm Beach County, FL</span>
            </div>
            <h1 className="hero__h1">
              A radiation oncology partner<br />your patients can <em>count on.</em>
            </h1>
            <p className="hero__bajada">
              We work exclusively in veterinary radiation oncology — so your patients get
              specialist care and you stay fully informed at every step.
            </p>
            <div className="hero__acciones">
              <a href="#referral-form" className="cta-primario">Submit a Referral →</a>
              <Link href="/radiation-therapy" className="cta-secundario">View Our Protocols</Link>
            </div>
            <div className="hero__badges" style={{ marginTop: 36 }}>
              {[
                'Board-Certified Radiation Oncologist on site',
                'Same-Day Referral Response',
                'Detailed Written Reports for Every Case',
                'A True Extension of Your Practice',
              ].map((b) => (
                <div key={b} className="hero__badge">
                  {CHECK_ICON}
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right: quick referral form card */}
          <div className="hero__split-form">
            <div className="vet-hero-form">
              <div className="vet-hero-form__header">
                <div className="vet-hero-form__dot" aria-hidden="true" />
                <span className="vet-hero-form__label">Quick Referral</span>
              </div>
              <div className="vet-hero-form__title">Submit a Patient Referral</div>
              <p className="vet-hero-form__sub">We respond same day — no paperwork required.</p>
              <FormReferralCompact />
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          POSITIONING STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="pos-strip">
        <div className="pos-strip__inner">
          <p className="pos-strip__text">
            <strong>Florida&apos;s only center 100% dedicated to veterinary radiation oncology</strong> —
            Dr. DiBernardi personally reviews every referral and responds the same day.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          OUR APPROACH — full-bleed split (photo left, blue right)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="vet-approach" aria-labelledby="approach-heading">
        {/* Left: photo */}
        <div className="vet-approach__photo">
          <Image
            src="/images/dr-dibernardi.webp"
            alt="Dr. DiBernardi, board-certified veterinary radiation oncologist"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        {/* Right: blue content */}
        <div className="vet-approach__content">
          <div className="eyebrow eyebrow--claro">Our Approach</div>
          <h2 id="approach-heading" className="vet-approach__h2">
            A referral, not<br />a <em>replacement.</em>
          </h2>
          <p className="vet-approach__text">
            We work alongside your practice. Your patient comes to us for radiation,
            and returns to you for everything else. You remain the primary vet —
            we&apos;re the specialist partner.
          </p>
          <div className="vet-approach__list">
            {[
              'You are copied on all case communications',
              'We never solicit your clients for non-oncology care',
              'Post-treatment care returns to your clinic',
              'Available for case discussions before you refer',
            ].map((item) => (
              <div key={item} className="vet-approach__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7EC8E3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
          <a href="#referral-form" className="cta-primario" style={{ marginTop: 36, display: 'inline-flex' }}>
            Submit a Referral →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHY REFER TO US
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="why-refer-heading">
        <div className="contenedor">
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow">Why Refer to AARADONC</div>
            <h2 id="why-refer-heading" className="titulo-seccion">
              A specialist partner.<br /><em>Not a replacement.</em>
            </h2>
            <p className="bajada">
              Our role is exclusively radiation oncology. We integrate seamlessly into
              your patient&apos;s care plan — keeping you informed, involved, and in the lead.
            </p>
          </div>
          <div className="rt-why__grid" style={{ marginTop: 52 }}>
            {[
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: 'Dedicated Specialist',
                text: <><strong>Board-certified radiation oncologist with over 20 years of clinical experience</strong> in veterinary radiation oncology. Every referral is personally reviewed by Dr. DiBernardi — not delegated.</>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                title: 'Same-Day Response',
                text: <>We acknowledge every referral <strong>the same day</strong> and schedule a consultation within the week. For urgent cases, <strong>we move faster.</strong> Time matters — our process reflects that.</>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
                title: 'Full Written Reports',
                text: <>You receive a <strong>complete consultation report</strong> after the initial appointment, regular updates throughout treatment, and a <strong>comprehensive case summary</strong> when treatment concludes.</>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
                title: 'A True Extension of Your Practice',
                text: <>Our scope is <strong>exclusively radiation oncology.</strong> Your patient returns to your practice for all primary care. The relationship you&apos;ve built with your client <strong>stays exactly where it belongs.</strong></>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                title: 'Advanced Technology',
                text: <><strong>Varian TrueBeam® linear accelerator</strong> — the same platform used in leading human cancer centers. IGRT, VMAT/RapidArc, high-resolution MLC, multiple energies. <strong>Shorter anesthesia time for every patient.</strong></>,
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                title: 'Direct Oncologist Access',
                text: <>You have <strong>direct access to Dr. DiBernardi</strong> throughout the case — not a receptionist, not a coordinator. Questions and case updates handled <strong>directly between colleagues.</strong></>,
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="rt-why-card">
                <div className="rt-why-card__icon" aria-hidden="true">{icon}</div>
                <div className="rt-why-card__title">{title}</div>
                <p className="rt-why-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW IT WORKS — 4 steps
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--gris" aria-labelledby="vet-process-heading">
        <div className="contenedor">
          <div className="proceso__intro">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>How It Works</div>
            <h2 id="vet-process-heading" className="titulo-seccion">
              From referral to treatment.<br /><em>Four simple steps.</em>
            </h2>
            <p className="bajada">
              A coordinated process designed to keep you informed at every step
              and ensure your patient receives care without delay.
            </p>
          </div>
          <div className="proceso__pasos" role="list">

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#7EC8E3,#5bb5d5)', color: '#0B1F44' }} aria-hidden="true">1</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Submit the Referral</div>
                <p className="paso__texto">Complete the form with your patient&apos;s basic info, diagnosis, and any available imaging or notes. A call or email works too — we adapt to how your practice prefers to communicate.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#3B8AE8,#1A6FD4)', color: '#fff' }} aria-hidden="true">2</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Same-Day Case Review</div>
                <p className="paso__texto">Dr. DiBernardi personally reviews every referral the same day. You receive an acknowledgment the same day and a consultation is scheduled within the week — often sooner for urgent cases.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#1A4FBF,#0D3B8E)', color: '#fff' }} aria-hidden="true">3</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Consultation &amp; Treatment Plan</div>
                <p className="paso__texto">We meet with the pet family and review all available records. A full written consultation report — including protocol recommendation and rationale — is sent directly to your practice.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#0B1F44,#071232)', color: '#7EC8E3' }} aria-hidden="true">4</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Ongoing Communication</div>
                <p className="paso__texto">Regular written updates throughout treatment. Direct oncologist access by phone or email. A final case summary after treatment concludes — keeping you fully informed as the primary care veterinarian.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TREATMENT PROTOCOLS — shared ProtocolCards component
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" aria-label="Treatment Protocols">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Treatment Protocols</div>
            <h2 className="titulo-seccion titulo-seccion--claro">
              Three protocols.<br /><em>One right choice</em> for your patient.
            </h2>
          </div>
          <div style={{ marginTop: 52 }}>
            <ProtocolCards showFooter={false} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="vet-faq-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Common Questions</div>
            <h2 id="vet-faq-heading" className="titulo-seccion">
              What veterinarians<br /><em>ask us most.</em>
            </h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          REFERRAL FORM — premium dark design
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="referral-form" className="vet-form-section" aria-labelledby="form-heading">
        <div className="vet-form-section__inner">

          {/* Left: info */}
          <div className="vet-form-section__info">
            <div className="eyebrow eyebrow--claro">Submit a Referral</div>
            <h2 id="form-heading" className="vet-form-section__h2">
              Ready to refer<br /><em>a patient?</em>
            </h2>
            <p className="vet-form-section__sub">
              Fill in the basics — name, clinic, and patient info. We will acknowledge
              same day and schedule a consultation within the week.
            </p>

            <div className="vet-form-section__contacts">
              <a href={CONTACT_INFO.phoneHref} className="vet-form-contact">
                <div className="vet-form-contact__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="vet-form-contact__label">Phone</div>
                  <div className="vet-form-contact__val">{CONTACT_INFO.phone}</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="vet-form-contact">
                <div className="vet-form-contact__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="vet-form-contact__label">Email</div>
                  <div className="vet-form-contact__val">{CONTACT_INFO.email}</div>
                </div>
              </a>
            </div>

            <div className="vet-form-section__checklist">
              <div className="vet-form-section__checklist-title">What to include</div>
              {[
                'Histopathology or biopsy report',
                'Available imaging (CT, MRI, X-ray)',
                'Recent clinical notes and staging',
                "Don't have all of these? Send what you have.",
              ].map((item) => (
                <div key={item} className="vet-form-section__check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7EC8E3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="vet-form-section__card">
            <FormReferralCompact />
          </div>

        </div>
      </section>
    </>
  )
}
