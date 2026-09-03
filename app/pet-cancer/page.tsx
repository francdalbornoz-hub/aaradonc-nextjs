import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo, ORGANIZATION } from '@/lib/seo-config'
import { CONTACT_INFO } from '@/lib/nav-config'
import FormContact from '@/components/forms/FormContact'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources grounding the radiation-therapy context on this page.
const REFERENCES: Reference[] = [
  { authors: 'Farrelly J, et al.', year: '2017', title: 'Retrospective analysis of non-radiation complications in dogs undergoing radiation therapy', source: 'Vet Radiol Ultrasound' },
  { authors: 'Bley CR, et al.', year: '2022', title: 'Dose- and volume-limiting late toxicity of FLASH radiotherapy in cats with squamous cell carcinoma', source: 'Clin Cancer Res' },
  { authors: 'Fonti N, et al.', year: '2026', title: 'Factors influencing malignant tumor development in cats from a multicenter retrospective study', source: 'Sci Rep' },
]

const pageSeo = getPageSeo('/pet-cancer')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: { canonical: pageSeo.canonical },
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const WHY_CARDS = [
  { title: 'Board-Certified Specialist', text: 'Our radiation oncologist holds dual board certification and brings over 20 years of dedicated clinical experience.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
  { title: 'Personalized Plans', text: 'Every treatment plan is designed specifically for your pet\'s tumor type, size, location, and quality-of-life goals.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
  { title: 'Collaborative Care', text: 'We work closely with your veterinarian and any other specialists involved — full reports, open communication, always.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { title: 'Quality of Life First', text: 'Radiation therapy is typically outpatient, low-disruption, and designed to keep your pet comfortable throughout treatment.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
]

const CONDITIONS = [
  { title: 'Brain Tumors', text: 'Radiation is one of the most effective treatments for intracranial tumors in dogs and cats, often producing significant improvement in neurological signs.', href: '/brain-tumors', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg> },
  { title: 'Nasal Tumors', text: 'Nasal tumors are among the most radiation-responsive cancers in veterinary medicine. Radiation is the treatment of choice.', href: '/nasal-tumors', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: 'Bone Cancer (OSA)', text: 'Palliative radiation provides meaningful pain relief and improved quality of life for dogs with osteosarcoma.', href: '/osteosarcoma', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m18 8-1.5-1.5"/><path d="m5.5 20.5 11-11"/><path d="m6 8 1.5-1.5"/><path d="m18.5 20.5-11-11"/><circle cx="5.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><circle cx="5.5" cy="18.5" r="2.5"/></svg> },
  { title: 'Soft Tissue Sarcoma', text: 'Post-surgical radiation significantly reduces local recurrence rates for soft tissue sarcomas with incomplete or close margins.', href: '/soft-tissue-sarcomas', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/></svg> },
  { title: 'Lymphoma', text: 'Targeted radiation plays an important role in certain lymphoma presentations, particularly for localized disease or as part of a broader treatment strategy.', href: '/lymphoma', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="5"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(120 12 12)"/></svg> },
  { title: 'Other Tumor Types', text: 'Oral tumors, spinal tumors, head and neck tumors, post-surgical radiation and more — contact us to discuss your pet\'s specific diagnosis.', href: '/contact-pet-owners', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
]

const PROTOCOLS = [
  { title: 'Conventional Fractionated RT', tag: 'Full Course', text: 'Multiple smaller daily sessions — typically 15 to 20 treatments — that maximize tumor control while minimizing long-term side effects. The gold standard for curative-intent cases.', href: '/radiation-therapy/#cfrt', featured: false },
  { title: 'SRS / SRT', tag: '★ Most Searched', text: '1 to 5 ultra-precise, high-dose sessions. Ideal for small, well-defined tumors — extreme accuracy in the fewest anesthetic events possible.', href: '/radiation-therapy/#srs-srt', featured: true },
  { title: 'Palliative Radiation', tag: 'Comfort-Focused', text: 'Fewer, larger sessions aimed at reducing pain, slowing progression, and improving quality of life. Ideal when comfort is the primary goal.', href: '/radiation-therapy/#palliative', featured: false },
]

const STEPS = [
  { num: 1, title: 'First Contact', text: 'Call or email us. We\'ll listen and let you know quickly whether radiation therapy could help your pet — no pressure, no obligation.', tags: ['Promptly. Always.'] },
  { num: 2, title: 'Medical Review & Consultation', text: 'We review your pet\'s imaging, pathology, and full history. You\'ll receive a clear, honest recommendation — no jargon, no pressure.', tags: ['In-person', 'Remote consultation available'] },
  { num: 3, title: 'Personalized Treatment Plan', text: 'Our Radiation Oncologist designs a custom plan using advanced imaging and dosimetry. The right protocol is selected based on your pet\'s specific cancer, anatomy, and goals.', tags: ['CFRT', 'Palliative Radiation', 'SRS / SRT'] },
  { num: 4, title: 'Treatment & Ongoing Care', text: 'Outpatient sessions, regular check-ins, and complete coordination with your veterinarian — from first treatment to final follow-up and beyond.', tags: ['1–20 sessions', 'Outpatient', 'Vet coordination'] },
]

const phone = ORGANIZATION.telephone || CONTACT_INFO.phone
const phoneHref = `tel:${phone.replace(/\D/g, '')}`
const email = process.env.NEXT_PUBLIC_EMAIL || 'info@aaradonc.com'

export default function PetCancerPage() {
  return (
    <>
      <div id="no-footer-cta" style={{ display: 'none' }} aria-hidden="true" />
      {/* HERO */}
      <section className="hero" aria-label="Pet cancer treatment hero">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__dot" />
            <span>Veterinary Radiation Oncology · Palm Beach County, FL</span>
          </div>
          <h1 className="hero__h1">
            Radiation therapy<br />for <em>pet cancer</em> —<br />precision that matters.
          </h1>
          <p className="hero__bajada">Pet cancer is one of the most challenging diagnoses a family can face. Radiation therapy for dogs and cats targets tumors with precision — protecting healthy tissue, preserving quality of life, and giving your pet the best possible chance. At Animal Alliance, veterinary radiation oncology is all we do.</p>
          <div className="hero__acciones">
            <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation →</Link>
            <Link href="/radiation-therapy" className="cta-secundario">How Radiation Works</Link>
          </div>
          <div className="hero__trust-line">
            <div className="htl-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Board-Certified Radiation Oncologist
            </div>
            <div className="htl-sep" />
            <div className="htl-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Prompt Response. Always.
            </div>
            <div className="htl-sep" />
            <div className="htl-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Royal Palm Beach · No Referral Needed
            </div>
          </div>
        </div>
      </section>

      {/* POS STRIP */}
      <div className="pos-strip">
        <div className="pos-strip__inner">
          <p className="pos-strip__text"><strong>The only center 100% dedicated to Radiation Oncology in Florida</strong> — exclusively focused on advanced, personalized pet cancer treatment through radiation therapy.</p>
        </div>
      </div>

      {/* WHY ALLIANCE */}
      <section className="seccion" aria-labelledby="why-heading">
        <div className="contenedor">
          <div className="pc-why__grid">
            <div>
              <div className="eyebrow">Why Animal Alliance</div>
              <h2 id="why-heading" className="titulo-seccion">Exclusively radiation therapy.<br /><em>Completely focused</em> on your pet.</h2>
              <p className="bajada">We do one thing: treat cancer in dogs and cats with radiation therapy. That single focus means every protocol, every piece of equipment, every clinical decision is built around the highest standard of veterinary radiation oncology available.</p>
              <div className="pc-why__cards">
                {WHY_CARDS.map((c) => (
                  <div key={c.title} className="pc-card">
                    <div className="pc-card__icon">{c.icon}</div>
                    <div className="pc-card__title">{c.title}</div>
                    <p className="pc-card__text">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pc-why__panel">
              <div className="pc-why__overlay">
                <div className="pc-why__badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  Florida&apos;s only center 100% dedicated to radiation oncology
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="seccion seccion--gris" aria-labelledby="conditions-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Cancers We Treat</div>
            <h2 id="conditions-heading" className="titulo-seccion">Radiation therapy for<br /><em>many types of pet cancer.</em></h2>
            <p className="bajada" style={{ margin: '0 auto' }}>From brain tumors to soft tissue sarcomas, pet cancer responds well to radiation therapy across a wide range of diagnoses. We treat both dogs and cats.</p>
          </div>
          <div className="pc-cond__grid">
            {CONDITIONS.map((c) => (
              <Link key={c.title} href={c.href} className="pc-cond-card">
                <div className="pc-cond-card__icon">{c.icon}</div>
                <div className="pc-cond-card__title">{c.title}</div>
                <p className="pc-cond-card__text">{c.text}</p>
                <div className="pc-cond-card__link">Learn more <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLS */}
      <section className="seccion seccion--azul" aria-labelledby="protocols-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center' }}>Treatment Protocols</div>
            <h2 id="protocols-heading" className="titulo-seccion titulo-seccion--claro">Three protocols.<br /><em>One right choice</em> for your pet.</h2>
            <p className="bajada bajada--claro" style={{ margin: '0 auto' }}>The right approach depends on tumor type, size, location, and your goals. Our Radiation Oncologist selects the protocol after reviewing your pet&apos;s complete case.</p>
          </div>
          <div className="pc-proto__grid">
            {PROTOCOLS.map((p) => (
              <Link key={p.title} href={p.href} className={`pc-proto-card${p.featured ? ' pc-proto-card--featured' : ''}`}>
                <span className={`pc-proto-card__tag${p.featured ? ' pc-proto-card__tag--featured' : ''}`}>{p.tag}</span>
                <div className="pc-proto-card__title">{p.title}</div>
                <p className="pc-proto-card__text">{p.text}</p>
                <div className="pc-proto-card__link">Learn more <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,.25)', marginTop: 28 }}>Protocol selection is determined by our Radiation Oncologist after reviewing your pet&apos;s complete case.</p>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="seccion" aria-labelledby="process-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>What to Expect</div>
            <h2 id="process-heading" className="titulo-seccion">From diagnosis<br />to <em>treatment.</em></h2>
            <p className="bajada" style={{ margin: '0 auto', textAlign: 'center' }}>Every patient journey is different. Here&apos;s how we walk alongside you, step by step.</p>
          </div>
          <div className="pc-timeline">
            <div className="pc-steps">
              {STEPS.map((s) => (
                <div key={s.num} className="pc-step">
                  <div className="pc-step__left">
                    <div className="pc-step__num">{s.num}</div>
                    <div className="pc-step__line" />
                  </div>
                  <div className="pc-step__body">
                    <div className="pc-step__title">{s.title}</div>
                    <p className="pc-step__text">{s.text}</p>
                    <div className="pc-step__tags">
                      {s.tags.map((t) => (
                        <span key={t} className="pc-step__tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="pc-timeline__card">
                <div className="pc-timeline__card-img">
                  <Image src="/images/team-workstation.webp" alt="Radiation treatment planning at Animal Alliance" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="pc-timeline__card-body">
                  <div className="pc-timeline__card-title">Every plan is <em>built for your pet.</em></div>
                  <p className="pc-timeline__card-text">No two pet cancer cases are the same. Our Radiation Oncologist reviews every case personally — anatomy, tumor type, staging, and your goals — before designing a treatment protocol.</p>
                  <div className="pc-timeline__card-protos">
                    {['CFRT', 'Palliative Radiation', 'SRS / SRT'].map((p) => (
                      <span key={p} className="pc-timeline__card-proto">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL BAND */}
      <div className="banda-emocional" role="complementary" aria-label="Encouragement">
        <div className="banda-emocional__overlay">
          <div className="banda-emocional__frase">
            A pet cancer diagnosis isn&apos;t the end.<br /><em>There are options worth exploring.</em>
          </div>
          <div className="banda-emocional__cta">
            <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation →</Link>
          </div>
        </div>
      </div>

      {/* FOR VETS + CONTACT — premium dark split */}
      <section className="pc-contact-section" id="contact" aria-labelledby="contact-heading">

        {/* Top: vet referral band */}
        <div className="pc-contact-vet">
          <div className="pc-contact-vet__inner">
            <div className="pc-contact-vet__left">
              <div className="eyebrow eyebrow--claro">For Referring Veterinarians</div>
              <div className="pc-contact-vet__title">A referral partner<br />you can <em>count on.</em></div>
              <p className="pc-contact-vet__text">We respond promptly, keep you fully informed, and return the patient to your care when radiation therapy is complete. Just Radiation Oncology — A True Extension of Your Practice.</p>
              <div className="pc-contact-vet__pills">
                {['Prompt acknowledgment', 'Full written reports', 'Direct oncologist access', 'You keep the patient'].map((p) => (
                  <div key={p} className="pc-contact-vet__pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7EC8E3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <Link href="/for-veterinarians" className="pc-contact-vet__btn">
              View Referral Information →
            </Link>
          </div>
        </div>

        {/* Bottom: contact + form */}
        <div className="pc-contact-main">
          <div className="pc-contact-main__inner">

            {/* Left: info */}
            <div className="pc-contact-info">
              <div className="eyebrow eyebrow--claro">Contact Us</div>
              <h2 id="contact-heading" className="pc-contact-info__h2">
                Let&apos;s talk about<br /><em>your pet&apos;s care.</em>
              </h2>
              <p className="pc-contact-info__sub">
                Have questions about pet cancer treatment? Ready to explore radiation therapy for your dog or cat?
                We respond promptly — Our Radiation Oncologist reviews every case personally.
              </p>

              <div className="pc-contact-info__items">
                <a href={phoneHref} className="pc-contact-info__item">
                  <div className="pc-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="pc-contact-info__label">Phone</div>
                    <div className="pc-contact-info__val">{phone}</div>
                  </div>
                </a>
                <a href={`mailto:${email}`} className="pc-contact-info__item">
                  <div className="pc-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="pc-contact-info__label">Email</div>
                    <div className="pc-contact-info__val">{email}</div>
                  </div>
                </a>
                <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noopener" className="pc-contact-info__item">
                  <div className="pc-contact-info__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="pc-contact-info__label">Location</div>
                    <div className="pc-contact-info__val">{CONTACT_INFO.address}</div>
                  </div>
                </a>
              </div>

              <div className="pc-contact-hours">
                <div className="pc-contact-hours__title">Hours of Operation</div>
                <div className="pc-contact-hours__row"><span>Monday – Thursday</span><span>8:00 AM – 5:00 PM</span></div>
                <div className="pc-contact-hours__row"><span>Friday – Sunday</span><span className="pc-contact-hours__closed">Closed</span></div>
              </div>
            </div>

            {/* Right: form card */}
            <div className="pc-contact-form">
              <div className="pc-contact-form__header">
                <div className="pc-contact-form__dot" aria-hidden="true" />
                <span className="pc-contact-form__label">Request a Consultation</span>
              </div>
              <div className="pc-contact-form__title">Let&apos;s talk about<br />your pet&apos;s options.</div>
              <p className="pc-contact-form__sub">Promptly. Always.</p>
              <FormContact variant="light" />
            </div>

          </div>
        </div>

      </section>

      <References items={REFERENCES} />
    </>
  )
}
