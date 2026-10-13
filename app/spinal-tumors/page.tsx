import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (stereotactic and
// fractionated radiation for spinal/vertebral and CNS tumors).
const REFERENCES: Reference[] = [
  { authors: 'Swift KE, LaRue SM', year: '2017', title: 'Outcome of 9 dogs treated with stereotactic radiation therapy for primary or metastatic vertebral osteosarcoma', source: 'Vet Comp Oncol' },
]

const pageSeo = getPageSeo('/spinal-tumors')

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

export default function SpinalTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Spinal tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-hero.webp"
            alt="Spinal tumor radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Spinal Tumors</span>
          </nav>
          <div className="cond-hero__tag">Spinal Tumor Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Spinal tumor radiation<br />therapy for pets<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Spinal tumors cause progressive neurological compromise — weakness, paralysis, and pain.
            Radiation therapy can relieve spinal cord compression, slow progression and may improve
            function when surgery is not possible or incomplete.
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
            <div className="cond-editorial__kicker-text">Understanding Spinal Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            When the spine is the problem,<br />precision matters <em>most.</em>
          </h2>
          <p className="cond-editorial__lead">
            Spinal tumors compress or invade the spinal cord — producing progressive weakness,
            incoordination, and pain that worsens as the tumor grows. The spinal cord&apos;s
            sensitivity to radiation requires high-precision targeting. At AARADONC, this
            is exactly what our technology provides.
          </p>
          <p className="cond-editorial__body">
            Spinal tumors in dogs and cats are classified by where they arise relative to the spinal
            cord: extradural (outside the dural sac — most often vertebral tumors or metastatic
            disease), intradural-extramedullary (within the dural sac but outside the cord — includes
            meningiomas and nerve sheath tumors), and intramedullary (within the cord itself).
            Each type has different surgical accessibility and radiation responsiveness.
          </p>
          <h3 className="cond-editorial__h3">Why radiation therapy is often the primary option</h3>
          <p className="cond-editorial__body">
            Many spinal tumors — particularly intramedullary masses and tumors at surgically
            challenging vertebral levels — cannot be safely removed without risk of permanent
            neurological damage. Radiation therapy can treat these tumors, delivering therapeutic doses to the tumor while
            respecting the adjacent spinal cord&apos;s tolerance limits.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Timing is critical for spinal tumors.</strong> Progressive neurological
              deficits — weakness, ataxia, paresis — indicate worsening spinal cord compression.
              Once paralysis is complete or damage becomes permanent, radiation cannot restore
              function. Early treatment gives the best chance of neurological recovery.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Precision for the spine</h3>
          <p className="cond-editorial__body">
            Radiation therapy can be an option for well-defined spinal tumors,
            delivering high doses while limiting dose to the spinal cord — and may improve
            neurological function.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every spinal
              tumor case — MRI and CT imaging, neurological status, and treatment history — before
              designing the radiation plan.
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
            Refer a patient with<br /><em>a spinal tumor.</em>
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
