import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

const pageSeo = getPageSeo('/nasal-carcinoma')

// Peer-reviewed sources supporting the claims on this page (SBRT as standard,
// 1–5 session protocol, 12–19 month median survival). Verified against the
// clinic's approved literature base.
const REFERENCES: Reference[] = [
  { authors: 'Fox-Alvarez S, Shiomitsu K, Lejeune AT, Szivek A, Kubicek L', year: '2020', title: 'Outcome of intensity-modulated radiation therapy–based stereotactic radiation therapy for treatment of canine nasal carcinomas', source: 'Vet Radiol Ultrasound' },
  { authors: 'Mayer MN, et al.', year: '2019', title: 'Outcomes and adverse effects associated with stereotactic body radiation therapy in dogs with nasal tumors: 28 cases (2011–2016)', source: 'J Am Vet Med Assoc. 254(5):602' },
  { authors: 'Gieger TL, Nolan MW', year: '2018', title: 'Linac-based stereotactic radiation therapy for canine non-lymphomatous nasal tumours: 29 cases (2013–2016)', source: 'Vet Comp Oncol' },
  { authors: 'Hunley DW, Mauldin GN, Shiomitsu K, Mauldin GE', year: '2010', title: 'Clinical outcome in dogs with nasal tumors treated with intensity-modulated radiation therapy', source: 'Can Vet J. 51:293' },
  { authors: 'Czichon F, Rohrer Bley C, Meier V', year: '2021', title: 'Relative tumor volume has prognostic relevance in canine sinonasal tumors treated with radiation therapy: a retrospective study', source: 'PLoS ONE' },
  { authors: 'Fu D-R, et al.', year: '2023', title: 'Retrospective comparison of side effects and outcomes of three-dimensional conformal vs. intensity-modulated radiation therapy for canine nasal tumors', source: 'Front Vet Sci. 10:1011949' },
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

const FAQ_ITEMS = [
  {
    q: 'What is nasal carcinoma in dogs?',
    a: 'Nasal carcinoma — most commonly adenocarcinoma — is a malignant epithelial tumor arising within the nasal cavity or sinuses. It is the most common nasal tumor in dogs and tends to occur in older, large-breed dogs. It grows locally and can invade bone, the orbit, and occasionally the brain. Distant metastasis is less common early in disease.',
  },
  {
    q: 'Why is radiation the primary treatment — not surgery?',
    a: 'The nasal cavity\'s complex anatomy — proximity to the brain, orbits, and hard palate — makes complete surgical resection very difficult and often disfiguring without meaningful survival benefit. Radiation therapy targets the tumor volume precisely within this confined space, achieving local control that surgery cannot. Multiple studies confirm that SBRT (stereotactic radiation therapy) produces significantly longer survival than rhinotomy alone.',
  },
  {
    q: 'What survival time can we expect with radiation for nasal carcinoma?',
    a: 'Dogs treated with SBRT for nasal adenocarcinoma consistently achieve median survival times of 12–19 months. Approximately 30–40% of dogs survive 2 years or more. Cats with nasal carcinoma also respond well to radiation, with good local control in most cases. Results are best when treatment begins before significant bone invasion or brain involvement.',
  },
  {
    q: 'How many radiation sessions are required?',
    a: 'The number of sessions depends on the protocol your Radiation Oncologist selects. SBRT (stereotactic radiation therapy) delivers treatment in just 1–5 high-precision sessions; palliative protocols (3–5 sessions) are available for pets where curative intent is not the goal. Each session requires short general anesthesia (15–20 minutes) and the pet is discharged the same day.',
  },
  {
    q: 'What workup is needed before starting radiation?',
    a: 'CT imaging of the skull and thorax is standard — CT defines tumor extent, bone involvement, and surgical resectability, and chest CT screens for lung metastasis. Biopsy with histopathology confirms carcinoma subtype and rules out other diagnoses. Dr. DiBernardi reviews the complete workup before finalizing the treatment plan.',
  },
]

export default function NasalCarcinomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Nasal carcinoma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Nasal carcinoma radiation therapy for dogs — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/nasal-tumors">Nasal Tumors</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Nasal Carcinoma</span>
          </nav>
          <div className="cond-hero__tag">Nasal Carcinoma Radiation Therapy · Primarily Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Radiation therapy<br />for nasal carcinoma<br /><em>in dogs — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Nasal adenocarcinoma is the most common nasal tumor in dogs — and one of the most
            radiation-responsive. SBRT is the established standard of care, with consistent
            survival results that surgery alone cannot match.
          </p>
          <div className="cond-hero__ctas">
            <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation</Link>
          </div>
          <div className="cond-hero__badges">
            <div className="cond-hero__badge">Board Certified Radiation Oncologist on site</div>
            <div className="cond-hero__badge">Palm Beach County, FL</div>
            <div className="cond-hero__badge">Same-week consultations</div>
          </div>
        </div>
      </section>

      <div className="pos-strip">
        <div className="pos-strip__inner">
          <p className="pos-strip__text">
            <strong>&ldquo;The only center 100% dedicated to Radiation Oncology in Florida&rdquo;</strong>
          </p>
        </div>
      </div>

      <section style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" aria-hidden="true" />
            <div className="cond-editorial__kicker-text">Understanding Nasal Carcinoma in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Why radiation therapy is the primary treatment<br /><em>— not surgery.</em>
          </h2>
          <p className="cond-editorial__lead">
            Nasal adenocarcinoma arises within the nasal cavity — a space bounded by bone on all sides
            and adjacent to the brain, orbits, and hard palate. This anatomy, which makes surgery
            extremely difficult, actually works in radiation&apos;s favor: the tumor sits in a
            well-defined location that can be precisely and repeatedly targeted.
          </p>
          <p className="cond-editorial__body">
            The most common presenting signs — unilateral nosebleed (epistaxis), nasal discharge, facial
            swelling, and difficulty breathing through one nostril — often appear months before the
            diagnosis is confirmed. By the time histopathology confirms carcinoma, the tumor has
            typically invaded adjacent bone. Radiation therapy addresses this with the precision that
            surgery cannot safely provide.
          </p>
          <h3 className="cond-editorial__h3">What the evidence shows</h3>
          <p className="cond-editorial__body">
            Multiple prospective and retrospective studies in veterinary oncology have documented that
            SBRT produces median survival times of 12–19 months in dogs with nasal
            carcinoma — consistently longer than rhinotomy (3–6 months) or supportive care alone.
            The addition of chemotherapy in select cases may further improve outcomes.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Early diagnosis matters.</strong> Dogs diagnosed before significant brain
              involvement or bilateral nasal invasion consistently achieve better survival with
              radiation. Unilateral nosebleed in a dog over 8 should prompt immediate specialist
              evaluation — not watchful waiting.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What CT reveals — and why it changes treatment</h3>
          <p className="cond-editorial__body">
            CT imaging of the skull is essential before any treatment decision. It maps exact tumor
            extent, bone destruction, cribriform plate involvement, and orbital invasion — information
            that determines the radiation field and influences prognosis. CT of the thorax is also
            performed to evaluate for pulmonary metastasis, which is uncommon early but relevant to
            treatment planning.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every CT scan and
              histopathology report before designing the treatment plan. Every nasal carcinoma case is
              different — and every plan reflects that.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">12–<em>19</em>mo</div>
          <div className="cond-bridge__label">Median survival — consistently longer than supportive care alone</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">Same<em> day</em></div>
          <div className="cond-bridge__label">Home after each session — outpatient treatment</div>
        </div>
      </div>


      <section className="seccion" aria-labelledby="faq-heading">
        <div className="contenedor">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Common Questions</div>
            <h2 id="faq-heading" className="titulo-seccion">
              What pet families<br /><em>ask us most.</em>
            </h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
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
            Dr. DiBernardi personally reviews every case. Tell us about your dog and we&apos;ll
            respond promptly with a clear, honest recommendation.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer a patient with<br /><em>nasal carcinoma.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate directly with
            your practice throughout treatment and provide full written reports.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
