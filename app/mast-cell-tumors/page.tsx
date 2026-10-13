import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (adjuvant RT after
// incomplete excision; 1-year local control ~85–90% for grade II/low-grade MCT).
const REFERENCES: Reference[] = [
  { authors: 'Lejeune A, et al.', year: '2015', title: 'Aggressive local therapy combined with systemic chemotherapy provides long-term control in grade II stage 2 canine mast cell tumours', source: 'Vet Comp Oncol' },
  { authors: 'Al-Sarraf R, et al.', year: '1996', title: 'A prospective study of radiation therapy for the treatment of grade 2 mast cell tumors in 32 dogs', source: 'J Vet Intern Med' },
  { authors: 'Mason SL, et al.', year: '2020', title: 'Outcomes of adjunctive radiation therapy for the treatment of mast cell tumors in dogs and assessment of toxicity: a multicentre observational study', source: 'Vet Comp Oncol' },
  { authors: 'Chaffin K, Thrall DE', year: '2002', title: 'Results of radiation therapy in 19 dogs with cutaneous mast cell tumor and regional lymph node metastasis', source: 'Vet Radiol Ultrasound' },
  { authors: 'Hahn KA, King GK, Carreras JK', year: '2004', title: 'Efficacy of radiation therapy for incompletely resected grade III mast cell tumors in dogs: 31 cases', source: 'J Am Vet Med Assoc. 224(1):79' },
]

const pageSeo = getPageSeo('/mast-cell-tumors')

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

export default function MastCellTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Mast cell tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Mast cell tumor radiation therapy for dogs — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/pet-cancer">Pet Cancer</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Mast Cell Tumors</span>
          </nav>
          <div className="cond-hero__tag">Mast Cell Tumor Radiation Therapy · Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Mast cell tumor radiation<br />therapy for dogs<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Mast cell tumors are the most common skin cancer in dogs. When surgery leaves incomplete
            margins — or the location makes wide excision impossible — radiation therapy significantly
            reduces recurrence and extends disease-free survival.
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
            <div className="cond-editorial__kicker-text">Understanding Mast Cell Tumors in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Incomplete margins after surgery<br /><em>are not the end of treatment.</em>
          </h2>
          <p className="cond-editorial__lead">
            Mast cell tumors are highly variable — some behave indolently for years; others grow
            aggressively and metastasize early. The most critical local control decision comes
            after surgery: when histopathology reveals incomplete or narrow margins, adjuvant
            radiation can prevent local recurrence in the majority of cases.
          </p>
          <p className="cond-editorial__body">
            The location of a mast cell tumor frequently determines how wide a surgical margin
            is achievable. Tumors on the muzzle, digits, prepuce, perianal region, and distal
            limbs often cannot be excised with the recommended 2–3 cm margins without causing
            significant functional or cosmetic compromise. In these locations, radiation therapy
            becomes the essential complement to surgery — treating the microscopic disease
            remaining at the margins with precision.
          </p>
          <h3 className="cond-editorial__h3">Grade matters — and so does timing</h3>
          <p className="cond-editorial__body">
            Patnaik Grade II (intermediate) and Kiupel Low-Grade MCTs have the strongest evidence
            base for adjuvant radiation. 1-year local control rates of 85–90% have been
            reported when radiation therapy follows incomplete excision. High-grade tumors benefit from local
            control as well, but require attention to systemic therapy because of their significant
            metastatic risk. Radiation usually begins once the surgical wound has healed.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Incomplete surgical margins are not a failure</strong> — they are information.
              Adjuvant radiation after incomplete excision provides long-term local control in most
              dogs, particularly in anatomically constrained locations.
              Many dogs with incomplete-margin MCT go on to live years with no local recurrence.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Inoperable mast cell tumors</h3>
          <p className="cond-editorial__body">
            When surgery is not possible — due to tumor location, size, or the owner&apos;s preference
            — radiation can be used as the primary local treatment. Definitive radiation therapy or palliative
            protocols can achieve meaningful tumor reduction, symptom relief, and local control
            without surgery.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every mast cell
              tumor case — grade, margins, staging, and systemic treatment status — before designing
              the radiation plan. Every plan is coordinated with your oncologist and primary vet.
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
            Dr. DiBernardi personally reviews every case. Tell us about your dog and we&apos;ll
            respond promptly with a clear recommendation.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer a patient with<br /><em>a mast cell tumor.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We review the surgical pathology
            and coordinate radiation with your oncology team.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
