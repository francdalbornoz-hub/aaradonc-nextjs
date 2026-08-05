import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'

const pageSeo = getPageSeo('/cat-cancer')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: { canonical: pageSeo.canonical },
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const CANCER_TYPES = [
  { num: '01', name: 'Nasal Tumors', href: '/nasal-tumors', desc: 'Adenocarcinomas and lymphomas of the nasal cavity are among the best-responding feline cancers. Radiation is the standard of care and can significantly extend survival and quality of life.', tag: 'CFRT · Curative Intent', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { num: '02', name: 'Brain Tumors', href: '/brain-tumors', desc: 'Meningiomas are common in older cats and respond well to stereotactic radiation. SRS/SRT can significantly extend neurological function in a minimal number of sessions.', tag: 'SRS/SRT · CFRT', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg> },
  { num: '03', name: 'Lymphoma', href: '/lymphoma', desc: 'The most common cancer in cats. Radiation combined with chemotherapy plays a critical role in localized lymphoma — particularly mediastinal, nasal, and spinal forms.', tag: 'CFRT · Palliative', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="5"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(120 12 12)"/></svg> },
  { num: '04', name: 'Vaccine-Site Sarcoma', href: '/vaccine-associated-sarcoma', desc: 'Injection-site sarcomas are aggressive and prone to local recurrence. Radiation therapy is a key component of the multimodal standard of care and significantly reduces recurrence rates.', tag: 'CFRT · Palliative', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m18 2 4 4"/><path d="m17 3-4 4L7 11l-4 4"/><path d="m14 14-1 1"/><path d="m3 21 6.5-1.5L18 11"/></svg> },
  { num: '05', name: 'Squamous Cell Carcinoma', href: '/oral-squamous-cell-carcinoma', desc: 'Oral and nasal SCC in cats responds well to radiation, especially when surgery alone is not feasible. Radiation can achieve meaningful local control and symptom relief.', tag: 'CFRT · Palliative', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
  { num: '06', name: 'Mammary Tumors', href: '/contact-pet-owners', desc: 'Feline mammary carcinomas are often aggressive and high-grade. Radiation therapy as part of a multimodal approach can reduce local recurrence and extend remission in appropriately selected cases.', tag: 'CFRT', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
]

const PROTOCOLS = [
  { id: 'cfrt', eyebrow: 'Curative Intent', title: 'CFRT', sessions: '16–20 daily', intent: 'Curative', bestFor: 'Nasal · Lymphoma · FISS', desc: 'Gold standard for nasal tumors, localized lymphoma, and vaccine-site sarcomas. Fractionated doses allow healthy tissue to recover while maintaining continuous tumor pressure.', href: '/radiation-therapy/#cfrt', featured: false },
  { id: 'srs', eyebrow: 'Stereotactic · High Precision', title: 'SRS / SRT', sessions: '1–5 total', intent: 'Precision ablative', bestFor: 'Brain tumors · Meningioma', desc: 'Ideal for feline meningiomas. Ultra-precise delivery in as few as one session — maximum accuracy with the fewest anesthetic events, important for older cats.', href: '/radiation-therapy/#srs-srt', featured: true },
  { id: 'pal', eyebrow: 'Comfort-Focused', title: 'Palliative Radiation', sessions: '3–5 total', intent: 'Pain relief · QoL', bestFor: 'Advanced disease · SCC', desc: 'When curative treatment is not the goal, palliative radiation reduces tumor burden, relieves pain, and can meaningfully improve a cat\'s comfort and daily life.', href: '/radiation-therapy/#palliative', featured: false },
]

export default function CatCancerPage() {
  return (
    <>
      <div id="no-footer-cta" style={{ display: 'none' }} aria-hidden="true" />
      {/* HERO */}
      <section className="sp-hero" aria-label="Cat cancer treatment hero">
        <div className="sp-hero__bg">
          <Image src="/images/cat-patient.jpg" alt="Cat cancer treatment — AARADONC Palm Beach Florida" fill style={{ objectFit: 'cover', objectPosition: 'center 25%' }} priority />
        </div>
        <div className="sp-hero__overlay" />
        <div className="sp-hero__content">
          <div className="sp-hero__left">
            <div className="sp-hero__label">Cat Cancer Treatment · Palm Beach County, Florida</div>
            <h1 className="sp-hero__h1">
              Cat cancer treatment<br />
              in Florida —<br />
              <em>precision radiation therapy.</em>
            </h1>
            <p className="sp-hero__sub">Cats hide illness instinctively — which means cancer is often caught late. AARADONC is Florida&apos;s only center 100% dedicated to radiation oncology, offering board-certified expertise and advanced treatment options for the most common feline cancers.</p>
            <div className="sp-hero__ctas">
              <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation</Link>
              <Link href="#cancer-types" className="cta-secundario" style={{ color: 'rgba(255,255,255,.8)', borderColor: 'rgba(255,255,255,.2)' }}>See What We Treat ↓</Link>
            </div>
          </div>
          <div className="sp-hero__panel">
            <div className="sp-hero__panel-title">Why it matters</div>
            <div className="sp-stat">
              <div className="sp-stat__val">1 <em>in 5</em></div>
              <div className="sp-stat__label">cats will develop cancer during their lifetime</div>
            </div>
            <div className="sp-stat__divider" />
            <div className="sp-stat">
              <div className="sp-stat__val">#<em>1</em></div>
              <div className="sp-stat__label">cause of death in cats over age 10</div>
            </div>
            <div className="sp-stat__divider" />
            <div className="sp-stat">
              <div className="sp-stat__val">50<em>%+</em></div>
              <div className="sp-stat__label">of feline cancers respond to radiation therapy</div>
            </div>
            <div className="sp-stat__divider" />
            <div className="sp-stat">
              <div className="sp-stat__val" style={{ fontSize: 28, lineHeight: 1.2 }}>Only<br /><em>center</em></div>
              <div className="sp-stat__label">100% dedicated to radiation oncology in Florida</div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="sp-editorial" aria-labelledby="editorial-heading">
        <div className="sp-editorial__sidebar">
          <div>
            <div className="sp-editorial__sidebar-title">How we work</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Outpatient — your cat goes home the same day', 'Sub-millimeter precision targeting', 'Curative and palliative options available', 'Coordination with your veterinarian', 'Same-week consultations available'].map((t) => (
                <div key={t} className="sp-editorial__pill">
                  <div className="sp-editorial__pill-dot" />
                  <div className="sp-editorial__pill-text">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ paddingTop: 28, borderTop: '1px solid rgba(13,59,142,.08)' }}>
            <div style={{ fontSize: 12, color: 'var(--texto-suave)', lineHeight: 1.6, marginBottom: 8 }}>Board-certified specialist on-site</div>
            <div style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontSize: 15, fontWeight: 700, color: 'var(--texto)' }}>Dr. Lisa DiBernardi</div>
            <div style={{ fontSize: 13, color: 'var(--azul-acento)', marginTop: 2 }}>DVM · DACVR-RO · ACVIM (Oncology)</div>
          </div>
        </div>
        <div className="sp-editorial__main">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Why Choose Radiation for Cat Cancer Treatment in Florida</div>
          <div id="editorial-heading" className="sp-editorial__quote">
            Cat cancer treatment in Florida requires a <em>specialist who understands feline biology</em> — not a generalist adapting canine protocols.
          </div>
          <p className="sp-editorial__body" style={{ marginBottom: 20 }}>At AARADONC, we are Florida&apos;s only center 100% dedicated to veterinary radiation oncology. Feline cancer is biologically distinct — radiation protocols for cats are designed around feline anatomy, tumor behavior, and the specific challenges of treating a species that conceals pain until disease is well advanced.</p>
          <p className="sp-editorial__body" style={{ marginBottom: 20 }}>Every cat cancer treatment plan is built from scratch for that specific patient. Dr. DiBernardi personally reviews every case, bringing dual board certification in radiation oncology and medical oncology to each decision — so your cat&apos;s plan reflects the full clinical picture, not a standardized approach.</p>
          <p className="sp-editorial__body">Our first conversation is always honest about prognosis and realistic expectations. Whether the goal is curative treatment or the best possible quality of life, we help you make the right decision — with full information and no pressure.</p>
        </div>
        <div className="sp-editorial__img">
          <div className="sp-editorial__img-wrap">
            <Image src="/images/vet-with-animal.webp" alt="Veterinary radiation oncologist with cat at Animal Alliance Radiation Oncology Florida" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* CANCER TYPES */}
      <section className="seccion seccion--gris" id="cancer-types" aria-labelledby="types-heading">
        <div className="contenedor">
          <div className="sp-section-header">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Cancers We Treat</div>
              <h2 id="types-heading" className="titulo-seccion" style={{ marginBottom: 0 }}>Common feline cancers<br />that respond to <em>radiation.</em></h2>
            </div>
            <p className="bajada" style={{ marginBottom: 0 }}>Radiation therapy is highly effective for several of the most common cancers in cats. Below are the most frequent — along with the protocol typically recommended for each.</p>
          </div>
          <div className="sp-grid">
            {CANCER_TYPES.map((c) => (
              <Link key={c.num} href={c.href} className="sp-card">
                <div className="sp-card__icon-wrap">{c.icon}</div>
                <div className="sp-card__num">{c.num}</div>
                <div className="sp-card__name">{c.name}</div>
                <p className="sp-card__desc">{c.desc}</p>
                <span className="sp-card__tag">{c.tag}</span>
                <div className="sp-card__link">Learn more <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLS */}
      <section className="sp-proto-section" aria-labelledby="protocols-heading">
        <div className="sp-proto-section__bg">
          <Image src="/images/linac-room.webp" alt="Veterinary radiation therapy at AARADONC" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="sp-proto-section__overlay" />
        <div className="sp-proto-section__inner contenedor">
          <div className="sp-section-header">
            <div>
              <div className="eyebrow eyebrow--claro" style={{ marginBottom: 16 }}>Treatment Protocols</div>
              <h2 id="protocols-heading" className="titulo-seccion" style={{ color: '#fff', marginBottom: 0 }}>The right protocol for<br /><em style={{ color: '#7EC8E3' }}>your cat&apos;s cancer.</em></h2>
            </div>
            <p className="bajada" style={{ color: 'rgba(255,255,255,.55)', marginBottom: 0 }}>Protocol selection is made by our Radiation Oncologist after a full case review — cancer type, location, staging, and your goals. Every cat&apos;s plan is different.</p>
          </div>
          <div className="sp-protos">
            {PROTOCOLS.map((p) => (
              <Link key={p.id} href={p.href} className={`sp-proto${p.featured ? ' sp-proto--featured' : ''}`}>
                <div className="sp-proto__inner">
                  {p.featured && <div className="sp-proto__badge-featured">★ Most Requested</div>}
                  <div className="sp-proto__eyebrow">{p.eyebrow}</div>
                  <div className="sp-proto__title">{p.title}</div>
                  <div className="sp-proto__specs">
                    <div className="sp-proto__spec"><span className="sp-proto__spec-key">Sessions</span><span className="sp-proto__spec-val">{p.sessions}</span></div>
                    <div className="sp-proto__spec"><span className="sp-proto__spec-key">Intent</span><span className="sp-proto__spec-val">{p.intent}</span></div>
                    <div className="sp-proto__spec"><span className="sp-proto__spec-key">Best for</span><span className="sp-proto__spec-val">{p.bestFor}</span></div>
                  </div>
                  <p className="sp-proto__desc">{p.desc}</p>
                  <div className="sp-proto__cta">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="sp-cta">
        <div className="sp-cta__col sp-cta__col--a">
          <div className="sp-cta__pretitle">For Pet Families</div>
          <div className="sp-cta__title">Your cat deserves<br />a <em>specialist opinion.</em></div>
          <p className="sp-cta__text">Whether you&apos;ve been referred by your veterinarian or are reaching out directly, Dr. DiBernardi will personally review your cat&apos;s case and provide a clear, honest recommendation.</p>
          <Link href="/contact-pet-owners" className="sp-cta__btn-light">Request a Consultation →</Link>
        </div>
        <div className="sp-cta__col sp-cta__col--b">
          <div className="sp-cta__pretitle">For Veterinarians</div>
          <div className="sp-cta__title">Refer a feline<br /><em>oncology case.</em></div>
          <p className="sp-cta__text">We acknowledge all referrals the same day. Full written reports throughout treatment. Direct oncologist access — no intermediaries.</p>
          <Link href="/contact-referrers" className="sp-cta__btn-dark">Submit a Referral →</Link>
        </div>
      </div>
    </>
  )
}
