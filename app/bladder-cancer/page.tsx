import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (TCC/urothelial
// carcinoma; multimodal RT + systemic therapy; IMRT/IGRT and adaptive RT).
const REFERENCES: Reference[] = [
  { authors: 'Nolan MW, et al.', year: '2012', title: 'Intensity-modulated and image-guided radiation therapy for treatment of genitourinary carcinomas in dogs', source: 'J Vet Intern Med' },
  { authors: 'Ahrens M, et al.', year: '2024', title: 'Radiation toxicity grading after chemoradiotherapy of canine urinary tract carcinomas', source: 'Vet Comp Oncol' },
  { authors: 'Nieset JR, et al.', year: '2014', title: 'Comparison of adaptive radiotherapy techniques for external radiation therapy of canine bladder cancer', source: 'Vet Radiol Ultrasound' },
]

const pageSeo = getPageSeo('/bladder-cancer')

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

export default function BladderCancerPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Bladder cancer radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Bladder cancer radiation therapy for dogs — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/pet-cancer">Pet Cancer</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Bladder Cancer</span>
          </nav>
          <div className="cond-hero__tag">Bladder Cancer · TCC / Urothelial Carcinoma · Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Bladder cancer radiation<br />therapy for dogs<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Transitional cell carcinoma (TCC) is the most common bladder tumor in dogs. Complete
            surgical removal is often not possible. Radiation therapy — combined with systemic therapy —
            reduces local tumor burden, relieves urinary symptoms, and meaningfully extends
            quality of life.
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
            <div className="cond-editorial__kicker-text">Understanding Bladder Cancer in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            When surgery cannot cure it,<br /><em>multimodal therapy extends life.</em>
          </h2>
          <p className="cond-editorial__lead">
            Transitional cell carcinoma most often arises at the trigone of the bladder — the
            region where the ureters and urethra converge. Complete surgical resection at this
            location usually requires removing the entire bladder, which is rarely
            feasible. The goal of treatment shifts accordingly: maximize tumor control, relieve
            urinary symptoms, and extend quality of life for as long as possible.
          </p>
          <p className="cond-editorial__body">
            The most common signs — blood in the urine (hematuria), frequent urination, straining
            to urinate, and recurrent urinary tract infections that don&apos;t respond to antibiotics —
            should prompt imaging evaluation. Ultrasound typically identifies a bladder mass; CT
            provides full staging including lymph node involvement and distant metastasis.
          </p>
          <h3 className="cond-editorial__h3">The role of radiation in bladder TCC</h3>
          <p className="cond-editorial__body">
            Palliative radiation therapy for bladder TCC reduces local tumor volume, relieves
            urinary obstruction, decreases hematuria, and may help prevent ureteral obstruction.
            Radiation is typically combined with piroxicam
            or meloxicam (NSAIDs, which have documented anti-tumor activity against TCC) and
            sometimes with vinblastine or mitoxantrone chemotherapy.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Recurrent urinary tract infections in dogs</strong> that don&apos;t resolve
              with appropriate antibiotics should raise suspicion for TCC. The tumor disrupts normal
              bladder mucosa and creates conditions that mimic UTI — which can delay diagnosis.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Precision planning for a challenging location</h3>
          <p className="cond-editorial__body">
            Radiation to the bladder trigone must spare adjacent structures — rectum, urethra, small
            intestine — while delivering therapeutic doses to the tumor. This requires precise CT
            simulation, conformal treatment planning, and careful dose-volume constraint management.
            At AARADONC, every bladder TCC plan is designed with adjacent organ protection as a
            primary objective.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally designs every bladder
              cancer treatment plan — integrating radiation with systemic therapy and coordinating
              with your oncologist and primary vet throughout treatment.
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
            Refer a patient with<br /><em>bladder cancer.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate radiation with
            your systemic oncology plan throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
