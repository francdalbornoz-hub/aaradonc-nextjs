import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (feline meningioma
// long-term control with SRS/SRT; 3D-CRT outcomes).
const REFERENCES: Reference[] = [
  { authors: 'Körner M, et al.', year: '2019', title: 'Radiation therapy for intracranial tumours in cats with neurological signs', source: 'J Feline Med Surg. 21(8):765' },
  { authors: 'Kelsey KL, Gieger TL, Nolan MW', year: '2018', title: 'Single fraction stereotactic radiation therapy (stereotactic radiosurgery) is a feasible method for treating intracranial meningiomas in dogs', source: 'Vet Radiol Ultrasound' },
  { authors: 'Berlato D, et al.', year: '2018', title: 'Canine meningiomas treated with three-dimensional conformal radiation therapy require magnetic resonance imaging restaging', source: 'Vet Radiol Ultrasound' },
]

const pageSeo = getPageSeo('/meningioma')

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

export default function MeningiomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Meningioma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-hero.webp"
            alt="Meningioma radiation therapy for cats and dogs — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/brain-tumors">Brain Tumors</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Meningioma</span>
          </nav>
          <div className="cond-hero__tag">Meningioma Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Radiation therapy<br />for meningioma<br /><em>in pets — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Meningioma is the most common brain tumor in cats — and one of the more treatable. In cats,
            meningiomas are often surgically accessible, and surgery can offer the best long-term
            outcomes. When surgery is not feasible, radiation therapy delivers targeted
            treatment.
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
            <div className="cond-editorial__kicker-text">Understanding Meningioma in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            A treatable brain tumor —<br /><em>with surgery, radiation, or both.</em>
          </h2>
          <p className="cond-editorial__lead">
            Meningioma arises from the meninges — the membranes enveloping the brain and spinal cord.
            It grows slowly and remains well-defined.
            In cats, it is the most common intracranial tumor. In dogs, it typically occurs in older,
            large-breed animals and grows along the brain&apos;s surface.
          </p>
          <p className="cond-editorial__body">
            Common presenting signs include seizures, behavioral changes, circling, head pressing,
            loss of coordination, and vision changes. Because the skull limits expansion, even a
            slowly growing tumor eventually compresses surrounding brain tissue — producing symptoms
            that escalate quickly once they begin.
          </p>
          <h3 className="cond-editorial__h3">The roles of surgery and radiation</h3>
          <p className="cond-editorial__body">
            In cats, meningiomas are frequently well-encapsulated and surgically accessible — surgery
            can achieve excellent long-term outcomes and is often the best option. In dogs, meningiomas
            tend to be more infiltrative and complete resection is often not feasible, so radiation
            frequently plays the primary role. Radiation therapy targets the tumor volume
            precisely and is also valuable after incomplete resection or when surgery is
            not an option. Dr. DiBernardi reviews each case to recommend the most appropriate approach.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              When surgery is not feasible, cats treated with radiation therapy often maintain good quality of life.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What imaging is required before treatment</h3>
          <p className="cond-editorial__body">
            MRI is the gold standard for meningioma diagnosis and treatment planning — it defines
            tumor boundaries, location relative to critical structures, and degree of brain compression.
            CT may also be used for radiation planning. Dr. DiBernardi reviews all imaging personally
            before designing each treatment plan, selecting the appropriate protocol based on
            tumor size, location, and clinical picture.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every meningioma
              case before treatment begins. The protocol is chosen based on your pet&apos;s imaging
              and clinical history.
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
            Refer a patient with<br /><em>meningioma.</em>
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
