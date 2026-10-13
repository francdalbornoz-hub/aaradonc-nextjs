import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'

const pageSeo = getPageSeo('/dog-cancer')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: { canonical: pageSeo.canonical },
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const CANCER_TYPES = [
  { num: '01', name: 'Nasal Tumors', href: '/nasal-tumors', desc: 'Among the strongest indications for radiation in dogs. Carcinomas and sarcomas of the nasal cavity respond well — radiation is the established standard of care and significantly extends survival.', tag: 'SBRT · Curative intent', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10"/><path d="M12 8v4"/><path d="M15 5l-3 3-3-3"/><circle cx="18" cy="6" r="3"/></svg> },
  { num: '02', name: 'Brain Tumors', href: '/brain-tumors', desc: 'Meningiomas and gliomas are often treated with radiation therapy.', tag: 'SRS/SRT · CFRT', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg> },
  { num: '03', name: 'Mast Cell Tumors', href: '/mast-cell-tumors', desc: 'Highly effective for local control after incomplete surgical excision. Radiation significantly reduces recurrence rates.', tag: 'CFRT · Curative Intent', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
  { num: '04', name: 'Soft Tissue Sarcoma', href: '/soft-tissue-sarcomas', desc: 'Adjuvant radiation after incomplete resection significantly reduces the risk of local recurrence.', tag: 'CFRT · Adjuvant', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { num: '05', name: 'Bone Cancer (OSA)', href: '/osteosarcoma', desc: 'Palliative radiation provides meaningful pain relief and improved mobility for osteosarcoma. Many dogs show improvement in comfort within the first few sessions.', tag: 'Palliative', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a3 3 0 0 1 0 6"/><path d="M6 8a3 3 0 0 0 0 6"/><line x1="8" y1="11" x2="16" y2="11"/></svg> },
  { num: '06', name: 'Lymphoma', href: '/lymphoma', desc: 'Targeted radiation protocols, often combined with chemotherapy, play an important role in multimodal treatment planning — particularly for localized or relapsed cases.', tag: 'CFRT · Palliative', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
]

const PROTOCOLS = [
  { id: 'cfrt', eyebrow: 'Curative Intent', title: 'CFRT', sessions: '10–20 · Mon–Thu', intent: 'Curative', bestFor: 'Brain · MCT · STS', desc: 'Used for many solid tumors, in curative or adjuvant settings. Fractionation allows healthy tissue to recover between sessions.', href: '/radiation-therapy/#cfrt', featured: false },
  { id: 'srs', eyebrow: 'Stereotactic · High Dose', title: 'SRS / SRT', sessions: '1–5 total', intent: 'High-dose, tumor-targeted', bestFor: 'Brain tumors · Focal lesions', desc: 'High-dose radiation targeted to the tumor in as few as one session. Ideal for small, well-defined tumors — high accuracy with fewer anesthetic events.', href: '/radiation-therapy/#srs-srt', featured: true },
  { id: 'pal', eyebrow: 'Comfort-Focused', title: 'Palliative Radiation', sessions: '3–6 · weekly', intent: 'Pain relief · QoL', bestFor: 'OSA · Advanced disease', desc: 'Focused on quality of life. Particularly effective for bone cancer — many dogs show improvement in comfort within the first few sessions.', href: '/radiation-therapy/#palliative', featured: false },
]

export default function DogCancerPage() {
  return (
    <>
      <div id="no-footer-cta" style={{ display: 'none' }} aria-hidden="true" />
      {/* HERO */}
      <section className="sp-hero" aria-label="Dog cancer treatment hero">
        <div className="sp-hero__bg">
          <Image src="/images/dog-golden.jpg" alt="Dog receiving cancer treatment — AARADONC Palm Beach Florida" fill style={{ objectFit: 'cover', objectPosition: 'center 25%' }} priority />
        </div>
        <div className="sp-hero__overlay" />
        <div className="sp-hero__content">
          <div className="sp-hero__left">
            <div className="sp-hero__label">Dog Cancer Treatment · Palm Beach County, Florida</div>
            <h1 className="sp-hero__h1">
              Dog cancer<br />
              <em>radiation therapy</em><br />
              treatment in Florida.
            </h1>
            <p className="sp-hero__sub">When your dog is diagnosed with cancer, the right specialist makes a real difference. AARADONC is Florida&apos;s only center 100% dedicated to radiation oncology — offering board-certified expertise, advanced technology, and a personalized treatment plan for every patient.</p>
            <div className="sp-hero__ctas">
              <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation</Link>
              <Link href="#cancer-types" className="cta-secundario" style={{ color: 'rgba(255,255,255,.8)', borderColor: 'rgba(255,255,255,.2)' }}>See What We Treat ↓</Link>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="sp-editorial" aria-labelledby="editorial-heading">
        <div className="sp-editorial__main">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Why Choose Radiation for Dog Cancer Treatment in Florida</div>
          <div id="editorial-heading" className="sp-editorial__quote">
            Advanced dog cancer treatment in Florida — the <em>same precision technology</em> used in human oncology, adapted and delivered by a specialist dedicated exclusively to radiation.
          </div>
          <p className="sp-editorial__body" style={{ marginBottom: 20 }}>At AARADONC, we are Florida&apos;s only center 100% focused on veterinary radiation oncology. That means every aspect of how we work — our equipment, our protocols, our team — is designed around one thing: veterinary radiation oncology.</p>
          <p className="sp-editorial__body" style={{ marginBottom: 20 }}>Every dog cancer treatment plan is built from scratch for that specific patient — accounting for tumor type and location, overall health, staging, and what matters most to your family. Dr. DiBernardi personally reviews every case, bringing dual board certification in radiation oncology and medical oncology to each decision.</p>
          <p className="sp-editorial__body">Radiation therapy is not the right answer for every dog — but when it is, the outcomes can be significant. In our first conversation, we explain what is realistic, what to expect, and how we&apos;ll support you and your dog through every step of treatment.</p>
        </div>
        <div className="sp-editorial__img">
          <div className="sp-editorial__img-wrap">
            <Image src="/images/couple-with-dog.webp" alt="Pet families with their dog at Animal Alliance Radiation Oncology" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* CANCER TYPES */}
      <section className="seccion seccion--gris" id="cancer-types" aria-labelledby="types-heading">
        <div className="contenedor">
          <div className="sp-section-header">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Cancers We Treat</div>
              <h2 id="types-heading" className="titulo-seccion" style={{ marginBottom: 0 }}>Common canine cancers<br />that respond to <em>radiation.</em></h2>
            </div>
            <p className="bajada" style={{ marginBottom: 0 }}>Radiation therapy is one of the most effective tools for many of the cancers dogs develop. Below are the most common — along with the protocol typically recommended for each.</p>
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
          <Image src="/images/linac-room.webp" alt="Veterinary radiation therapy room at AARADONC" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="sp-proto-section__overlay" />
        <div className="sp-proto-section__inner contenedor">
          <div className="sp-section-header">
            <div>
              <div className="eyebrow eyebrow--claro" style={{ marginBottom: 16 }}>Treatment Protocols</div>
              <h2 id="protocols-heading" className="titulo-seccion" style={{ color: '#fff', marginBottom: 0 }}>The right protocol for<br /><em style={{ color: '#7EC8E3' }}>your dog&apos;s cancer.</em></h2>
            </div>
            <p className="bajada" style={{ color: 'rgba(255,255,255,.55)', marginBottom: 0 }}>Protocol selection is made by our Radiation Oncologist after reviewing the complete case — cancer type, location, staging, and your goals as a family. There is no one-size-fits-all approach.</p>
          </div>
          <div className="sp-protos">
            {PROTOCOLS.map((p) => (
              <Link key={p.id} href={p.href} className={`sp-proto${p.featured ? ' sp-proto--featured' : ''}`}>
                <div className="sp-proto__inner">
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
          <div className="sp-cta__title">Your dog deserves<br />a <em>specialist opinion.</em></div>
          <p className="sp-cta__text">Dr. DiBernardi will personally review your dog&apos;s case and provide a clear recommendation.</p>
          <Link href="/contact-pet-owners" className="sp-cta__btn-light">Request a Consultation →</Link>
        </div>
        <div className="sp-cta__col sp-cta__col--b">
          <div className="sp-cta__pretitle">For Veterinarians</div>
          <div className="sp-cta__title">Refer a canine<br /><em>oncology case.</em></div>
          <p className="sp-cta__text">We acknowledge all referrals promptly. Full written reports throughout treatment. Direct communication with our radiation oncologist throughout the case.</p>
          <Link href="/contact-referrers" className="sp-cta__btn-dark">Submit a Referral →</Link>
        </div>
      </div>
    </>
  )
}
