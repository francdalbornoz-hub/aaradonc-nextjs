import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (radiation as
// primary treatment for canine gliomas; reported median survival by protocol).
const REFERENCES: Reference[] = [
  { authors: 'Debreuque M, et al.', year: '2020', title: 'Definitive-intent uniform megavoltage fractionated radiotherapy protocol for presumed canine intracranial gliomas: retrospective analysis of survival and prognostic factors in 38 cases (2013–2019)', source: 'BMC Vet Res' },
  { authors: 'Treggiari E, et al.', year: '2016', title: 'Retrospective comparison of three-dimensional conformal radiation therapy vs. prednisolone alone in 30 cases of canine infratentorial brain tumors', source: 'Vet Radiol Ultrasound' },
  { authors: 'Schwarz P, et al.', year: '2018', title: 'Comparative evaluation of a novel, moderately hypofractionated radiation protocol in 56 dogs with symptomatic intracranial neoplasia', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeo('/glioma')

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

export default function GliomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Glioma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Glioma radiation therapy for dogs — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/brain-tumors">Brain Tumors</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Glioma</span>
          </nav>
          <div className="cond-hero__tag">Glioma Radiation Therapy · Primarily Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Radiation therapy<br />for glioma<br /><em>in dogs — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Gliomas are infiltrative brain tumors that are very difficult to remove completely with surgery.
            Radiation therapy is the primary treatment — targeting the tumor volume precisely to
            control growth, reduce seizures, and extend quality of life.
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
            <div className="cond-editorial__kicker-text">Understanding Glioma in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Infiltrative by nature —<br /><em>radiation therapy is the primary answer.</em>
          </h2>
          <p className="cond-editorial__lead">
            Gliomas differ from meningiomas in one critical way: they grow into brain tissue rather
            than compressing it from the outside. This infiltrative growth pattern makes complete
            surgical resection very difficult — which is why radiation
            therapy is the cornerstone of treatment.
          </p>
          <p className="cond-editorial__body">
            Gliomas occur most frequently in brachycephalic breeds — Boxers, English Bulldogs, Boston
            Terriers, French Bulldogs — typically in middle-aged to older dogs. New-onset
            seizures in a brachycephalic dog over 5 years old should trigger immediate MRI evaluation
            to rule out an intracranial mass.
          </p>
          <h3 className="cond-editorial__h3">What radiation achieves — and what to expect</h3>
          <p className="cond-editorial__body">
            Radiation therapy for glioma controls local tumor progression, reduces intracranial
            pressure, and can reduce seizure frequency.
            Many dogs show neurological improvement after treatment.
            Published studies report median survival of around 2 years in dogs treated with radiation therapy (e.g., 698 days in Debreuque et al., 2020).
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Brachycephalic breeds have a well-documented predisposition to glioma.</strong>{' '}
              Boxers, Bulldogs, and Boston Terriers account for a disproportionate number of canine
              glioma cases. If your brachycephalic dog develops new neurological signs or seizures
              after age 5, prompt MRI evaluation is essential.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Choosing the right protocol</h3>
          <p className="cond-editorial__body">
            The radiation protocol for glioma depends on tumor characteristics seen on MRI — tumor
            size, definition, and location. Dr. DiBernardi selects the optimal approach after full
            case review.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every glioma case —
              MRI, staging, neurological status — before designing the treatment plan. No generalized
              protocols. Every plan is built for your dog specifically.
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
            Refer a patient with<br /><em>glioma.</em>
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
