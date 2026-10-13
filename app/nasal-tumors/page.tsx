import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

const pageSeo = getPageSeo('/nasal-tumors')

// Peer-reviewed sources supporting the claims on this page (SBRT as standard,
// 1–5 session protocol, 12–19 month median survival). Verified against the
// clinic's approved literature base.
const REFERENCES: Reference[] = [
  { authors: 'Mayer MN, et al.', year: '2019', title: 'Outcomes and adverse effects associated with stereotactic body radiation therapy in dogs with nasal tumors: 28 cases (2011–2016)', source: 'J Am Vet Med Assoc. 254(5):602' },
  { authors: 'Gieger TL, Nolan MW', year: '2018', title: 'Linac-based stereotactic radiation therapy for canine non-lymphomatous nasal tumours: 29 cases (2013–2016)', source: 'Vet Comp Oncol' },
  { authors: 'Fox-Alvarez S, Shiomitsu K, Lejeune AT, Szivek A, Kubicek L', year: '2020', title: 'Outcome of intensity-modulated radiation therapy–based stereotactic radiation therapy for treatment of canine nasal carcinomas', source: 'Vet Radiol Ultrasound' },
  { authors: 'Czichon F, Rohrer Bley C, Meier V', year: '2021', title: 'Relative tumor volume has prognostic relevance in canine sinonasal tumors treated with radiation therapy: a retrospective study', source: 'PLoS ONE' },
  { authors: 'Fu D-R, et al.', year: '2023', title: 'Retrospective comparison of side effects and outcomes of three-dimensional conformal vs. intensity-modulated radiation therapy in the palliative-intent treatment (4 Gy × 5 daily fractions) of canine intranasal tumors (2010–2017)', source: 'Front Vet Sci. 10:1011949' },
  { authors: 'Hunley DW, Mauldin GN, Shiomitsu K, Mauldin GE', year: '2010', title: 'Clinical outcome in dogs with nasal tumors treated with intensity-modulated radiation therapy', source: 'Can Vet J. 51:293' },
]

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: { canonical: pageSeo.canonical },
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const INFO_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

export default function NasalTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Nasal tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Nasal tumor radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/pet-cancer">Pet Cancer</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Nasal Tumors</span>
          </nav>
          <div className="cond-hero__tag">Nasal Tumor Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Nasal tumor radiation<br />therapy for pets<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Nasal tumors are among the most radiation-responsive cancers in veterinary oncology.
            Radiation is not a last resort — it is the established standard of care for dogs.
          </p>
          <div className="cond-hero__ctas">
            <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" aria-hidden="true" />
            <div className="cond-editorial__kicker-text">Understanding Nasal Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Among the most radiation-responsive<br />tumors in veterinary <em>oncology.</em>
          </h2>
          <p className="cond-editorial__lead">
            Nasal tumors — adenocarcinomas, carcinomas, and sarcomas of the nasal cavity and sinuses —
            are among the most predictably responsive cancers to radiation therapy. For these tumors,
            radiation therapy is the gold standard, not a last resort.
          </p>
          <p className="cond-editorial__body">
            Nasal tumors grow within the rigid architecture of the nasal cavity, bounded by bone and in
            proximity to the brain, orbits, and palate. This anatomy makes complete surgical removal
            nearly impossible without significant disfigurement or neurological risk. What anatomy
            limits for surgery, it enables for radiation — the tumor sits in a well-defined location
            that can be precisely targeted.
          </p>
          <h3 className="cond-editorial__h3">Why radiation therapy is the main treatment for nasal tumors</h3>
          <p className="cond-editorial__body">
            Radiation therapy is associated with longer survival than supportive care alone. Dogs
            treated with radiation therapy have reported median survival of roughly 13–19 months in
            published studies. Quality of life is typically well-preserved throughout.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Epistaxis (nosebleeds) in dogs over 8 years old</strong> should always prompt
              evaluation for nasal tumors. It is one of the earliest and most consistent warning
              signs.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What to expect during treatment</h3>
          <p className="cond-editorial__body">
            Nasal radiation is delivered as outpatient sessions under short general anesthesia, and
            the animal goes home the same day. Acute side effects are manageable and temporary, and
            most patients maintain normal activity and appetite throughout the treatment course.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally designs every nasal tumor
              treatment plan — reviewing CT imaging, staging, and histopathology before selecting the
              protocol. No two plans are identical.
            </div>
          </div>
        </div>
      </section>



      <References items={REFERENCES} />

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">For Pet Families</div>
          <div className="cond-cta__title">
            Get a specialist review.<br /><em>Prompt response.</em>
          </div>
          <p className="cond-cta__text">
            Dr. DiBernardi personally reviews every case. Tell us about your pet and we&apos;ll
            respond promptly with a clear recommendation.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer a patient with<br /><em>a nasal tumor.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate directly with
            your practice throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
