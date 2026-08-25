import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import { CONTACT_INFO } from '@/lib/nav-config'
import ProtocolCards from '@/components/sections/ProtocolCards'
import FormContact from '@/components/forms/FormContact'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources grounding the radiation-therapy claims on this page
// (technique, safety, and toxicity in companion-animal radiation oncology).
const REFERENCES: Reference[] = [
  { authors: 'Farrelly J, et al.', year: '2017', title: 'Retrospective analysis of non-radiation complications in dogs undergoing radiation therapy', source: 'Vet Radiol Ultrasound' },
  { authors: 'Soukup A, et al.', year: '2018', title: 'A prospective pilot study on early toxicity from a simultaneously integrated boost technique for canine nasal tumors', source: 'Vet Comp Oncol' },
  { authors: 'Bley CR, et al.', year: '2022', title: 'Dose- and volume-limiting late toxicity of FLASH radiotherapy in cats with squamous cell carcinoma', source: 'Clin Cancer Res' },
]

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/radiation-therapy')

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

const FAQ_ITEMS = [
  {
    q: 'Will my pet be in pain during radiation therapy?',
    a: <>No. Each session is delivered under <strong>short general anesthesia</strong> — your pet is <strong>completely unconscious and feels nothing during treatment.</strong> Recovery is quick, and most pets are <strong>alert, eating, and comfortable within a few hours</strong> of returning home.</>,
  },
  {
    q: 'How many sessions will my dog or cat need?',
    a: <>It depends on the protocol selected. <strong>Palliative radiation: 3–5 sessions.</strong> Conventional fractionated radiation therapy: <strong>15–20 sessions.</strong> Stereotactic treatment: <strong>just 1–5 high-precision sessions.</strong> Our Radiation Oncologist determines the right approach after a thorough personal case review.</>,
  },
  {
    q: 'How do I get started with a consultation?',
    a: <>You can <strong>reach out directly by phone, email, or through our contact form</strong> — no referral required. We recommend bringing your pet&apos;s most recent medical records, imaging (if available), and any pathology reports. Our team coordinates with your veterinary care team throughout the entire process.</>,
  },
  {
    q: 'What are the side effects of pet radiation therapy?',
    a: <>Side effects are <strong>localized to the treatment area</strong> and are typically mild — temporary skin changes, mild fatigue, or localized irritation depending on the tumor site. Our team monitors your pet closely throughout treatment and <strong>manages any reactions promptly.</strong> Advanced planning <strong>minimizes unnecessary exposure to healthy tissue.</strong></>,
  },
  {
    q: 'Is radiation therapy available for both dogs and cats?',
    a: <>Yes. We provide veterinary radiation therapy for <strong>both dogs and cats.</strong> Treatment planning accounts for each species&apos; unique anatomy and physiology. Radiation therapy for cats requires careful dose and fractionation adjustments — expertise our team brings from <strong>over 20 years of dedicated practice in veterinary radiation oncology.</strong></>,
  },
  {
    q: 'What happens after radiation therapy is complete?',
    a: <>After completing treatment, your pet returns to the care of your veterinarian. We provide a <strong>detailed written treatment summary</strong> — including the protocol delivered, any reactions observed, and recommendations for follow-up care. <strong>Ongoing communication between our team and yours continues as needed.</strong></>,
  },
]

const CONDITIONS = [
  { label: 'Brain Tumors', href: '/brain-tumors' },
  { label: 'Spinal Tumors', href: '/spinal-tumors' },
  { label: 'Nasal Tumors', href: '/nasal-tumors' },
  { label: 'Oral Tumors', href: '/oral-tumors' },
  { label: 'Soft Tissue Sarcoma', href: '/soft-tissue-sarcomas' },
  { label: 'Mast Cell Tumors', href: '/mast-cell-tumors' },
  { label: 'Osteosarcoma', href: '/osteosarcoma' },
  { label: 'Lymphoma', href: '/lymphoma' },
  { label: 'Oral Melanoma', href: '/oral-melanoma' },
  { label: 'Anal Sac Carcinoma', href: '/anal-sac-carcinoma' },
  { label: 'Bladder Cancer', href: '/bladder-cancer' },
  { label: 'Meningioma', href: '/meningioma' },
  { label: 'Other tumor types — ask us →', href: '/contact-pet-owners', accent: true },
]

const BADGES = [
  'Board-Certified Radiation Oncologist on site',
  '3D CT-Based Treatment Planning',
  'Outpatient · Same-Day Home',
  'Same-Day Response',
]

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RadiationTherapyPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="hero" aria-label="Radiation therapy hero">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__dot" aria-hidden="true" />
            <span>Veterinary Radiation Therapy · Palm Beach County, FL</span>
          </div>
          <h1 className="hero__h1">
            Precision radiation therapy<br />for dogs and cats —<br /><em>delivered by a specialist.</em>
          </h1>
          <p className="hero__bajada">
            Radiation therapy is one of the most effective tools in veterinary oncology. At Animal Alliance,
            it&apos;s the only thing we do — and we do it with the expertise, technology, and personalized
            care your pet deserves.
          </p>
          <div className="hero__acciones">
            <a href="#contact" className="cta-primario">Request a Consultation →</a>
            <a href="#protocols" className="cta-secundario">See Our Protocols</a>
          </div>
          <div className="hero__badges">
            {BADGES.map((b) => (
              <div key={b} className="hero__badge">
                {CHECK_ICON}
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT IS RADIATION THERAPY
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="what-is" className="seccion" aria-labelledby="intro-heading">
        <div className="contenedor">
          <div className="rt-intro__grid">
            <div>
              <div className="eyebrow">What Is Veterinary Radiation Therapy?</div>
              <h2 id="intro-heading" className="titulo-seccion">
                Advanced, targeted treatment<br />for <em>pets with cancer.</em>
              </h2>
              <p className="bajada">
                Radiation therapy uses precisely focused high-energy beams to damage cancer cells
                and prevent them from growing. Each treatment plan is designed individually —
                tailored to the tumor type, location, and your pet&apos;s overall health and quality of life.
              </p>
              <div className="rt-bullets">
                {[
                  { title: 'Highly targeted.', text: 'Radiation is directed with precision at the tumor — advanced planning technology shapes the beam to protect surrounding healthy tissue.' },
                  { title: 'Outpatient.', text: 'Each session is delivered under short general anesthesia. Most pets go home within hours and resume normal activity quickly.' },
                  { title: 'Personalized.', text: 'No two tumors — and no two patients — are the same. Every plan is built from scratch based on your pet\'s specific case.' },
                  { title: 'Collaborative.', text: 'We work closely with your veterinarian throughout the entire process — coordinating care and keeping everyone fully informed.' },
                ].map(({ title, text }) => (
                  <div key={title} className="rt-bullet">
                    <div className="rt-bullet__dot" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p className="rt-bullet__text"><strong>{title}</strong> {text}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#contact" className="cta-azul-oscuro">
                  Talk to Our Radiation Oncologist →
                </a>
                <Link href="/for-veterinarians" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 600, color: '#1A4FBF', fontFamily: '\'Plus Jakarta Sans\', sans-serif' }}>
                  For Referring Vets →
                </Link>
              </div>
            </div>
            <div className="rt-intro__visual">
              <Image
                src="/images/linac-clinical.webp"
                alt="Veterinary radiation therapy treatment room at Animal Alliance"
                width={640}
                height={500}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="rt-intro__badge">
                <div className="rt-intro__badge-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="rt-intro__badge-text">
                  <strong>Board-Certified Specialist on site</strong>
                  <span>Dual board certification · 20+ years experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TECHNOLOGY — VARIAN TRUEBEAM
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" id="our-technology" aria-labelledby="tech-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 60px' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Our Technology</div>
            <h2 id="tech-heading" className="titulo-seccion titulo-seccion--claro">
              Varian TrueBeam —<br /><em>Human Cancer Center Technology</em> for Veterinary Patients.
            </h2>
            <p className="bajada bajada--claro" style={{ margin: '0 auto' }}>
              Our center is equipped with the <strong style={{ color: '#fff' }}>Varian TrueBeam® linear accelerator</strong>,
              an advanced radiation therapy platform used in leading human cancer centers around the world,
              adapted for veterinary radiation oncology. Precision, safety, and shorter anesthesia times —
              for every patient.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 52, alignItems: 'start', marginTop: 60 }}>

            {/* Equipment photo — 3:4 */}
            <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', aspectRatio: '3/4', boxShadow: '0 32px 80px rgba(0,0,0,.35), 0 0 0 1px rgba(126,200,227,.2)', flexShrink: 0 }}>
              <Image
                src="/images/linac-room.webp"
                alt="Varian TrueBeam linear accelerator at Animal Alliance Radiation Oncology"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', background: 'linear-gradient(to top, rgba(7,18,50,.9) 0%, transparent 100%)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#7EC8E3', marginBottom: 2 }}>Varian TrueBeam®</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Linear Accelerator · on site</div>
              </div>
            </div>

            {/* Tech cards 2×2 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {[
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>,
                  title: 'Image-Guided Radiation Therapy (IGRT)',
                  text: 'Every treatment begins with Cone Beam CT (CBCT) imaging to confirm accurate tumor positioning, allowing radiation to be delivered with exceptional precision while minimizing exposure to surrounding healthy tissue.',
                  note: 'Critical for: brain, nasal, spinal, and tumors near critical organs.',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
                  title: 'VMAT / RapidArc',
                  text: 'The machine rotates around the patient while continuously delivering radiation — highly conformal treatments, better tissue protection, shorter treatment times, and shorter anesthesia for our patients.',
                  note: 'Shorter anesthesia time is a key advantage for veterinary patients.',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                  title: 'Precision Beam Shaping – MLC',
                  text: "A high-resolution multileaf collimator (MLC) precisely shapes the radiation beam to match each tumor's unique geometry, enabling our advanced radiation therapy treatment techniques while minimizing radiation exposure to surrounding healthy tissue.",
                  note: 'Maximum dose to tumor, minimum exposure to healthy tissue.',
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                  title: 'Multiple Radiation Energies — Treating a Wide Range of Tumors',
                  text: 'Multiple beam energies allows precise treatment of both deep-seated and superficial tumors, including brain, nasal, spinal, oral, skin, and soft tissue cancers.',
                  note: 'Technology used in leading human cancer centers worldwide.',
                },
              ].map(({ icon, title, text, note }) => (
                <div key={title} style={{
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 16,
                  padding: '28px 24px',
                }}>
                  <div style={{ color: '#7EC8E3', marginBottom: 14 }}>{icon}</div>
                  <div style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.3 }}>{title}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: 10 }}>{text}</p>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#7EC8E3', lineHeight: 1.5 }}>{note}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 48, padding: '28px 32px', background: 'rgba(126,200,227,.08)', border: '1px solid rgba(126,200,227,.2)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, color: '#7EC8E3', marginBottom: 8 }}>Varian TrueBeam® — Key Benefits</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
                {['Varian TrueBeam® linear accelerator', 'IGRT — Cone Beam CT before every session', 'VMAT / RapidArc — shorter anesthesia', 'High-resolution MLC precision', 'Multiple photon & electron energies', 'Technology used in leading human cancer centers'].map((item) => (
                  <div key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,.75)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7EC8E3', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONDITIONS WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="conditions" className="seccion seccion--gris" aria-labelledby="conditions-heading">
        <div className="contenedor">
          <div style={{ maxWidth: 680 }}>
            <div className="eyebrow">Cancers We Treat</div>
            <h2 id="conditions-heading" className="titulo-seccion">
              Radiation therapy plays a key role<br />across <em>many cancer types.</em>
            </h2>
            <p className="bajada">
              From brain tumors to soft tissue sarcomas, radiation therapy is an effective option across
              a wide range of diagnoses in dogs and cats. Our Radiation Oncologist will evaluate whether
              radiation therapy is appropriate for your pet&apos;s specific case.
            </p>
          </div>
          <div className="rt-cond__grid">
            {CONDITIONS.map(({ label, href, accent }) => (
              <Link
                key={label}
                href={href}
                className="rt-cond-item"
                style={accent ? { borderColor: 'rgba(26,79,191,.2)', background: '#EEF2FF' } : undefined}
              >
                <div className="rt-cond-item__left">
                  <div
                    className="rt-cond-item__dot"
                    style={accent ? { background: '#1A4FBF' } : undefined}
                    aria-hidden="true"
                  />
                  <span
                    className="rt-cond-item__text"
                    style={accent ? { color: '#1A4FBF', fontWeight: 700 } : undefined}
                  >
                    {label}
                  </span>
                </div>
                <svg className="rt-cond-item__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TREATMENT INTENT
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="treatment-intent" className="seccion" aria-labelledby="intent-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Treatment Intent</div>
            <h2 id="intent-heading" className="titulo-seccion">
              When is radiation therapy<br /><em>the right approach?</em>
            </h2>
            <p className="bajada" style={{ margin: '0 auto' }}>
              Radiation therapy serves three distinct clinical goals. The intent —
              curative, adjuvant, or palliative — is determined by our Radiation
              Oncologist based on each patient&apos;s tumor type, stage, and quality-of-life priorities.
            </p>
          </div>

          <div className="rt-intent__grid">

            {/* Curative */}
            <div className="rt-intent-card">
              <div className="rt-intent-card__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Curative Intent
              </div>
              <div className="rt-intent-card__title">Primary Treatment</div>
              <p className="rt-intent-card__text">
                Radiation therapy is used as the <strong>primary or definitive treatment</strong> — often for tumors
                that are not surgically accessible, or where surgery alone cannot achieve adequate margins.
                The goal is <strong>long-term tumor control or remission.</strong>
              </p>
              <div className="rt-intent-card__pills">
                {['Brain tumors', 'Nasal tumors', 'Oral tumors'].map((p) => (
                  <span key={p} className="rt-intent-card__pill">{p}</span>
                ))}
              </div>
            </div>

            {/* Adjuvant — featured */}
            <div className="rt-intent-card rt-intent-card--featured">
              <div className="rt-intent-card__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Adjuvant Intent
              </div>
              <div className="rt-intent-card__title">After Surgery</div>
              <p className="rt-intent-card__text">
                When surgery removes most of the tumor but <strong>clean margins cannot be confirmed,</strong> radiation
                therapy targets any remaining microscopic disease — <strong>significantly reducing the risk of local
                recurrence</strong> and extending disease-free survival.
              </p>
              <div className="rt-intent-card__pills">
                {['Soft tissue sarcoma', 'Mast cell tumors', 'Post-surgical cases'].map((p) => (
                  <span key={p} className="rt-intent-card__pill">{p}</span>
                ))}
              </div>
            </div>

            {/* Palliative */}
            <div className="rt-intent-card">
              <div className="rt-intent-card__tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Palliative Intent
              </div>
              <div className="rt-intent-card__title">Comfort &amp; Quality of Life</div>
              <p className="rt-intent-card__text">
                When long-term tumor control is not the primary goal, radiation therapy can
                <strong> meaningfully reduce pain, tumor pressure, or bleeding</strong> — improving
                comfort and quality of life for pets with <strong>advanced or inoperable cancer.</strong>
              </p>
              <div className="rt-intent-card__pills">
                {['Bone pain', 'Inoperable tumors', 'Advanced-stage cancer'].map((p) => (
                  <span key={p} className="rt-intent-card__pill">{p}</span>
                ))}
              </div>
            </div>

          </div>

          <p style={{ textAlign: 'center', fontSize: 14, color: '#7A8FA6', marginTop: 40 }}>
            Intent shapes the protocol. Our Radiation Oncologist determines the right approach after reviewing your pet&apos;s complete case with your veterinarian.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROTOCOLS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" id="protocols" aria-labelledby="protocols-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Treatment Protocols</div>
            <h2 id="protocols-heading" className="titulo-seccion titulo-seccion--claro">
              Three protocols.<br /><em>One right choice</em> for your pet.
            </h2>
            <p className="bajada bajada--claro" style={{ margin: '0 auto' }}>
              Each protocol is selected by our Radiation Oncologist based on tumor type, location,
              stage, and quality-of-life goals — after a thorough, personalized case review.
            </p>
          </div>
          <div style={{ marginTop: 52 }}>
            <ProtocolCards showFooter={false} />
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,.25)', marginTop: 28 }}>
            Protocol selection is determined by our Radiation Oncologist after reviewing your pet&apos;s complete case.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          THE PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="process" className="seccion seccion--gris" aria-labelledby="process-heading">
        <div className="contenedor">
          <div className="proceso__intro">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>The Process</div>
            <h2 id="process-heading" className="titulo-seccion">
              What radiation therapy<br /><em>looks like for your pet.</em>
            </h2>
            <p className="bajada">
              From the first consultation to final follow-up — here&apos;s how the radiation therapy
              process works at Animal Alliance.
            </p>
          </div>
          <div className="proceso__pasos" role="list">

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#7EC8E3,#5bb5d5)', color: '#0B1F44' }} aria-hidden="true">1</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Case Review &amp; Consultation</div>
                <p className="paso__texto">Our Radiation Oncologist personally reviews your pet&apos;s imaging, pathology, and medical history. You receive a clear, honest recommendation — with no jargon and no pressure.</p>
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
                <div className="paso__titulo">CT Simulation &amp; Planning</div>
                <p className="paso__texto">A dedicated CT scan maps the tumor and surrounding anatomy in 3D. Our dosimetry software calculates the precise dose distribution — maximizing tumor control while protecting healthy tissue.</p>
              </div>
            </div>

            <div className="paso" role="listitem">
              <div className="paso__head">
                <div className="paso__numero" style={{ background: 'linear-gradient(135deg,#1A4FBF,#0D3B8E)', color: '#fff' }} aria-hidden="true">3</div>
                <div className="paso__icono" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4FBF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
              </div>
              <div className="paso__cuerpo">
                <div className="paso__titulo">Treatment Delivery</div>
                <p className="paso__texto">Each session is delivered under short general anesthesia. The radiation beam is shaped and directed at the tumor with submillimeter precision. Your pet goes home the same day.</p>
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
                <div className="paso__titulo">Follow-Up &amp; Coordination</div>
                <p className="paso__texto">We monitor your pet throughout treatment and keep your veterinarian fully informed at every step. After treatment, we provide a detailed written case summary.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DUAL AUDIENCE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--azul" aria-labelledby="dual-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 52px' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Who We Help</div>
            <h2 id="dual-heading" className="titulo-seccion titulo-seccion--claro">
              For families.<br />For <em>referring vets.</em>
            </h2>
          </div>
          <div className="rt-dual__grid">
            {/* Pet Families */}
            <div className="rt-dual-card" id="pet-owners">
              <span className="rt-dual-card__tag">For Pet Families</span>
              <div className="rt-dual-card__title">Your pet&apos;s care,<br />in specialist hands.</div>
              <p className="rt-dual-card__text">
                Whether you&apos;ve been referred by your veterinarian or are reaching out directly,
                we&apos;re here to help. Our Radiation Oncologist reviews every case personally and will
                guide you through all available options — with honesty and no pressure.
              </p>
              <div className="rt-dual-card__list">
                {['Personalized case review', 'Clear answers, no medical jargon', 'Same-day response', 'Coordinated care with your veterinary team'].map((item) => (
                  <div key={item} className="rt-dual-card__item">{CHECK_ICON}{item}</div>
                ))}
              </div>
              <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation →</Link>
            </div>

            {/* Veterinarians */}
            <div className="rt-dual-card" id="veterinarians">
              <span className="rt-dual-card__tag">For Veterinarians</span>
              <div className="rt-dual-card__title">A radiation oncology<br />partner you can trust.</div>
              <p className="rt-dual-card__text">
                We complement your care — not replace it. Our role is exclusively radiation oncology.
                Your patient returns to your practice with a full treatment summary and the relationship
                you&apos;ve built remains intact.
              </p>
              <div className="rt-dual-card__list">
                {['Same-day referral response', 'Detailed treatment reports and case summaries', 'Direct oncologist communication', 'Just Radiation Oncology — A True Extension of Your Practice'].map((item) => (
                  <div key={item} className="rt-dual-card__item">{CHECK_ICON}{item}</div>
                ))}
              </div>
              <Link href="/for-veterinarians" className="cta-secundario" style={{ borderColor: 'rgba(255,255,255,.3)' }}>
                Referral Information →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="seccion" aria-labelledby="faq-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Common Questions</div>
            <h2 id="faq-heading" className="titulo-seccion">
              What families ask us<br /><em>most often.</em>
            </h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <References items={REFERENCES} />

      {/* ══════════════════════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion seccion--gris" id="contact" aria-labelledby="contact-heading">
        <div className="contenedor">
          <div className="eyebrow">Get in Touch</div>
          <h2 id="contact-heading" className="titulo-seccion">
            Ready to explore<br /><em>your pet&apos;s options?</em>
          </h2>
          <div className="contacto__grid">
            <div>
              <p className="bajada">
                Have questions about radiation therapy for your dog or cat? Our Radiation Oncologist
                reviews every case personally. Reach out and we&apos;ll guide you through the next
                steps — with clarity and no pressure.
              </p>
              <div className="contacto__info">
                <a href={CONTACT_INFO.phoneHref} className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div><strong>Phone</strong><a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a></div>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div><strong>Email</strong><span>{CONTACT_INFO.email}</span></div>
                </a>
                <div className="contacto-item">
                  <div className="contacto-item__icono" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div><strong>Location</strong><a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener">{CONTACT_INFO.address}</a></div>
                </div>
              </div>
              <div className="horario">
                <div className="horario__titulo">Hours of Operation</div>
                <div className="horario__fila">
                  <span className="horario__dia">Monday – Friday</span>
                  <span className="horario__hora">8:00 AM – 5:00 PM</span>
                </div>
                <div className="horario__fila">
                  <span className="horario__dia">Saturday</span>
                  <span className="horario__hora horario__hora--cerrado">Closed</span>
                </div>
                <div className="horario__fila">
                  <span className="horario__dia">Sunday</span>
                  <span className="horario__hora horario__hora--cerrado">Closed</span>
                </div>
              </div>
            </div>
            <div className="contacto__form-wrap">
              <div className="form__titulo">Request a Consultation</div>
              <div className="form__subtitulo">We&apos;ll respond the same day.</div>
              <FormContact variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SAME DAY ALWAYS — POSITIONING STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="pos-strip">
        <div className="pos-strip__inner">
          <p className="pos-strip__text">
            <strong>The only center 100% dedicated to Radiation Oncology in Florida</strong> —
            exclusively focused on advanced veterinary radiation therapy for companion animals.
          </p>
        </div>
      </div>
    </>
  )
}
