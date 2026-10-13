import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (fibrosarcoma is an
// infiltrative soft-tissue sarcoma; surgery + adjuvant radiation for control).
const REFERENCES: Reference[] = [
  { authors: 'Cronin K, et al.', year: '1998', title: 'Radiation therapy and surgery for fibrosarcoma in 33 cats', source: 'Vet Radiol Ultrasound' },
  { authors: 'Kung MBJ, et al.', year: '2014', title: 'Hypofractionated radiation therapy for the treatment of microscopic canine soft tissue sarcoma', source: 'Vet Comp Oncol' },
]

const pageSeo = getPageSeo('/fibrosarcoma')

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

export default function FibrosarcomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Fibrosarcoma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Fibrosarcoma radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/oral-tumors">Oral Tumors</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Fibrosarcoma</span>
          </nav>
          <div className="cond-hero__tag">Fibrosarcoma Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Radiation therapy<br />for fibrosarcoma<br /><em>in pets — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Fibrosarcomas are infiltrative tumors, and complete surgical margins are often
            difficult to achieve. Adjuvant radiation therapy after surgery is the standard of care —
            reducing local recurrence and extending disease-free survival significantly.
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
            <div className="cond-editorial__kicker-text">Understanding Fibrosarcoma in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Surgery and radiation, working together.
          </h2>
          <p className="cond-editorial__lead">
            Fibrosarcomas are defined by their infiltrative growth pattern — microscopic tumor
            extensions reach well beyond what the surgeon can see or feel. This is why even
            an apparently complete resection may leave microscopic disease, and why adjuvant radiation
            is often recommended. Radiation treats the microscopic disease that may remain after surgery.
          </p>
          <p className="cond-editorial__body">
            In dogs, fibrosarcoma most frequently arises in the oral cavity — gingiva, hard palate,
            and maxilla — where the proximity to bone makes complete resection particularly
            challenging. Subcutaneous and extremity fibrosarcomas also occur. In cats, oral
            fibrosarcoma is less common than SCC, but injection-site fibrosarcoma (vaccine-associated
            sarcoma) is a well-recognized and highly aggressive entity treated with a specialized
            surgical + radiation approach.
          </p>
          <h3 className="cond-editorial__h3">Adjuvant vs. definitive radiation</h3>
          <p className="cond-editorial__body">
            Adjuvant radiation therapy — delivered after surgery — is the standard approach when
            resection is performed but margins are narrow or incomplete. This is the most common
            scenario for oral fibrosarcoma. Definitive radiation therapy is used as the primary
            treatment when surgery is not feasible due to tumor size, location, or the pet&apos;s
            overall health.
            Both achieve meaningful local control.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Incomplete surgical margins are the norm for oral fibrosarcoma</strong> — not a
              surgical failure. The infiltrative nature of the tumor means microscopic extension
              beyond the visible mass is expected. Radiation therapy is planned with this in mind,
              targeting a margin around the surgical bed to capture any remaining cells.
            </div>
          </div>
          <h3 className="cond-editorial__h3">CT is essential before any treatment decision</h3>
          <p className="cond-editorial__body">
            CT imaging defines the true extent of fibrosarcoma — bone involvement, vascular proximity,
            regional lymph node status, and the feasibility of surgical resection. This information
            directly shapes the radiation field and the treatment plan. Dr. DiBernardi reviews
            all imaging personally and coordinates with the surgical team when combined therapy
            is planned.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every fibrosarcoma
              case — imaging, pathology, and surgical reports — before designing the radiation plan.
              Adjuvant and definitive protocols are both available. No generalized approaches.
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
            Refer a patient with<br /><em>fibrosarcoma.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate radiation with
            your surgical team throughout treatment and provide full written reports.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
