import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/radiation-oncologist')

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

export default function RadiationOncologistPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO — split photo / content
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="onc-hero" aria-label="Dr. DiBernardi hero">
        {/* Photo */}
        <div className="onc-hero__photo">
          <Image
            src="/images/dr-dibernardi.webp"
            alt="Dr. Lisa DiBernardi — Veterinary Radiation Oncologist, AARADONC Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div className="onc-hero__name-float">
            <div className="onc-hero__name">Dr. Lisa DiBernardi</div>
            <div className="onc-hero__creds">DVM · DACVR-RO · Diplomate ACVIM (Oncology)</div>
          </div>
        </div>

        {/* Content */}
        <div className="onc-hero__content">
          <div className="onc-hero__inner">
            <div className="eyebrow eyebrow--claro" style={{ marginBottom: 24 }}>
              Our Radiation Oncologist · Royal Palm Beach, Florida
            </div>
            <h1 className="onc-hero__tagline">
              Board Certified<br /><em>Veterinary Radiation</em><br />Oncologist on site.
            </h1>
            <p className="onc-hero__intro">
              AARADONC is Florida&apos;s only center 100% dedicated to veterinary radiation oncology.
              Dr. Lisa DiBernardi brings over 20 years of specialized experience — delivering precision
              radiation therapy for dogs and cats with a deeply individualized approach to every case.
            </p>
            <div className="onc-hero__badges">
              <div className="onc-hero__badge">
                <div className="onc-hero__badge-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="onc-hero__badge-title">DACVR-RO — Radiation Oncology</div>
                  <div className="onc-hero__badge-sub">Diplomate, American College of Veterinary Radiology</div>
                </div>
              </div>
              <div className="onc-hero__badge">
                <div className="onc-hero__badge-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="onc-hero__badge-title">20+ Years of Clinical Experience</div>
                  <div className="onc-hero__badge-sub">Specialty referral hospitals · Zoological &amp; wildlife oncology</div>
                </div>
              </div>
              <div className="onc-hero__badge">
                <div className="onc-hero__badge-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <div className="onc-hero__badge-title">Board Certified — Medical Oncology</div>
                  <div className="onc-hero__badge-sub">Diplomate, American College of Veterinary Internal Medicine</div>
                </div>
              </div>
            </div>
            <div className="onc-hero__cta-row">
              <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation</Link>
              <Link href="/for-veterinarians" className="cta-secundario" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.22)' }}>
                Refer a Patient →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BIO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="bio-heading">
        <div className="contenedor">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Biography</div>
          <div className="onc-bio">
            <div className="onc-bio__text">
              <p>
                Dr. Lisa DiBernardi, DVM, is a board-certified veterinary radiation oncologist serving
                patients throughout Florida from AARADONC&apos;s dedicated center in Royal Palm Beach.
                With <strong>more than 20 years of experience</strong> in veterinary radiation oncology,
                she leads every aspect of radiation therapy planning and delivery — bringing advanced
                technology, clinical precision, and a genuinely individualized approach to each case.
              </p>
              <p>
                Dr. DiBernardi&apos;s primary certification is in{' '}
                <strong>radiation oncology (DACVR-RO)</strong> — the specialized credential for
                veterinary radiation therapy. She also holds an additional board certification in{' '}
                <strong>medical oncology (ACVIM)</strong>, a distinction that deepens her understanding
                of cancer biology and enables close collaboration with referring veterinarians, surgeons,
                and internal medicine specialists across Florida.
              </p>
              <p>
                Her career has spanned <strong>specialty referral hospitals</strong> and collaborative
                work with <strong>zoological and wildlife organizations</strong>, building the broad
                clinical perspective she brings to every patient today. At AARADONC, radiation oncology
                is not one service among many — it is the sole focus of the entire center.
              </p>
              <p>
                Pet families and referring veterinarians throughout Palm Beach County and across Florida
                choose Dr. DiBernardi for her expertise, her clear communication, and her commitment to
                building individualized treatment plans that prioritize both tumor control and quality of life.
              </p>
              <Link href="/contact-pet-owners" className="cta-primario" style={{ display: 'inline-flex', marginTop: 24 }}>
                Meet the Doctor — Request a Consultation
              </Link>
            </div>

            <div className="onc-bio__panel" aria-label="Credentials and clinical focus">
              <div className="onc-bio__stat">
                <div className="onc-bio__stat-val">20<span>+ yrs</span></div>
                <div className="onc-bio__stat-label">Dedicated to veterinary radiation oncology</div>
              </div>
              <div className="onc-bio__stat">
                <div className="onc-bio__stat-val">2<span>x</span></div>
                <div className="onc-bio__stat-label">Board certified — radiation oncology &amp; medical oncology</div>
              </div>
              <div className="onc-bio__card">
                <div className="onc-bio__card-title">Certifications</div>
                {[
                  { icon: 'check', text: 'DACVR-RO — Radiation Oncology' },
                  { icon: 'check', text: 'ACVIM — Medical Oncology (additional)' },
                  { icon: 'check', text: 'DVM' },
                ].map(({ text }) => (
                  <div key={text} className="onc-bio__card-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {text}
                  </div>
                ))}
              </div>
              <div className="onc-bio__card">
                <div className="onc-bio__card-title">Clinical Focus</div>
                {[
                  'CFRT · Palliative Radiation · SRS/SRT',
                  'Dogs & Cats · Small Animal Oncology',
                  'Zoological & Wildlife Oncology',
                ].map((text) => (
                  <div key={text} className="onc-bio__card-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PHILOSOPHY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="onc-philosophy" aria-labelledby="philosophy-heading">
        <div className="onc-philosophy__inner">
          <div className="eyebrow eyebrow--claro" style={{ justifyContent: 'center', marginBottom: 28 }}>
            Clinical Philosophy
          </div>
          <blockquote className="onc-philosophy__quote">
            &ldquo;Cancer treatment should never be <em>one-size-fits-all.</em> Each radiation therapy
            plan is carefully designed around the specific diagnosis, the patient&apos;s condition,
            and the goals of the family.&rdquo;
          </blockquote>
          <div className="onc-philosophy__attr">
            Dr. Lisa DiBernardi, DACVR-RO · AARADONC · Royal Palm Beach, Florida
          </div>
          <div className="onc-philosophy__pillars" role="list">
            <div className="onc-pillar" role="listitem">
              <div className="onc-pillar__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div className="onc-pillar__title">Precision-first</div>
              <p className="onc-pillar__text">
                Every radiation therapy plan is built with 3D CT-based simulation and individual
                dosimetry — delivering a targeted dose to the tumor while protecting surrounding
                healthy tissue.
              </p>
            </div>
            <div className="onc-pillar" role="listitem">
              <div className="onc-pillar__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="onc-pillar__title">Patient &amp; family centered</div>
              <p className="onc-pillar__text">
                Dr. DiBernardi takes time with every family to explain the treatment plan clearly,
                answer all questions, and ensure pet families feel informed and confident — at every
                step of the process.
              </p>
            </div>
            <div className="onc-pillar" role="listitem">
              <div className="onc-pillar__icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="onc-pillar__title">Collaborative by design</div>
              <p className="onc-pillar__text">
                Radiation oncology works best as part of a coordinated care team. Dr. DiBernardi
                works closely with referring veterinarians, surgeons, and internists throughout
                Florida to build cohesive, evidence-based treatment strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="onc-cta">
        <div className="onc-cta__col onc-cta__col--owners">
          <div className="onc-cta__pretitle">For Pet Families</div>
          <div className="onc-cta__title">
            Meet the Doctor.<br /><em>Start your consultation.</em>
          </div>
          <p className="onc-cta__text">
            Dr. DiBernardi will personally review your pet&apos;s case and provide a clear, honest
            recommendation — with same-day response.
          </p>
          <Link href="/contact-pet-owners" className="onc-cta__btn-primary">Meet the Doctor →</Link>
        </div>
        <div className="onc-cta__col onc-cta__col--vets">
          <div className="onc-cta__pretitle">For Veterinarians</div>
          <div className="onc-cta__title">
            Discuss a case<br />with <em>Dr. DiBernardi.</em>
          </div>
          <p className="onc-cta__text">
            Dr. DiBernardi is available for direct case discussions before you refer. Call or email
            to speak with her directly — no intermediaries.
          </p>
          <Link href="/for-veterinarians" className="onc-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
