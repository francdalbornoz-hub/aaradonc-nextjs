import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (radiation for oral
// melanoma, squamous cell carcinoma, and oral soft-tissue sarcoma / epulis).
const REFERENCES: Reference[] = [
  { authors: 'Baja AJ, et al.', year: '2022', title: 'A retrospective study of 101 dogs with oral melanoma treated with a weekly or biweekly 6 Gy × 6 radiotherapy protocol', source: 'Vet Comp Oncol' },
  { authors: 'van der Steen F, Zandvliet M', year: '2020', title: 'Treatment of canine oral papillary squamous cell carcinoma using definitive-intent radiation as a monotherapy: a case series', source: 'Vet Comp Oncol' },
]

const pageSeo = getPageSeo('/oral-tumors')

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

export default function OralTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Oral tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Oral tumor radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Oral Tumors</span>
          </nav>
          <div className="cond-hero__tag">Oral Tumor Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Oral tumor radiation<br />therapy for pets<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Radiation plays a critical role in oral tumor management —
            as post-surgical treatment to eliminate microscopic disease, as primary therapy when
            surgery is not feasible, or as palliative care to relieve pain and restore function.
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
            <div className="cond-editorial__kicker-text">Understanding Oral Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Radiation plays a critical role<br />in <em>oral tumor management.</em>
          </h2>
          <p className="cond-editorial__lead">
            Oral tumors in dogs and cats span a wide range of histologies — each with different biology,
            behavior, and response to treatment. What they share is the challenge of location: the
            oral cavity&apos;s proximity to critical structures makes surgery complex, and wide surgical
            margins can be difficult to achieve. Radiation addresses this directly.
          </p>
          <p className="cond-editorial__body">
            Radiation therapy is used in three distinct contexts for oral tumors: as post-surgical
            treatment to sterilize surgical margins and reduce local recurrence, as primary treatment
            when resection is not feasible, and as palliative therapy to relieve pain, reduce tumor
            burden, and restore a pet&apos;s ability to eat and function normally.
          </p>
          <h3 className="cond-editorial__h3">Why tumor type matters more than location</h3>
          <p className="cond-editorial__body">
            Oral melanoma, fibrosarcoma, squamous cell carcinoma, and acanthomatous epulis behave
            very differently. Melanoma requires systemic consideration in addition to local control.
            Fibrosarcoma is locally aggressive and recurrence-prone. SCC in cats is among the most
            challenging cancers in veterinary medicine. Acanthomatous epulis — while locally destructive
            — has excellent outcomes with radiation therapy. Treatment planning at AARADONC begins with
            identifying exactly what the tumor is before deciding how to treat it.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Oral tumors in dogs and cats are often detected late</strong> because pets
              instinctively hide oral discomfort. Halitosis, difficulty eating, facial swelling, or
              blood in the saliva are warning signs that warrant immediate veterinary evaluation.
            </div>
          </div>
          <h3 className="cond-editorial__h3">When radiation makes the difference</h3>
          <p className="cond-editorial__body">
            Post-surgical radiation significantly reduces local recurrence rates for oral tumors with
            incomplete or narrow margins — a situation that is common given the anatomical constraints
            of oral surgery in small patients. When surgery is not feasible or the owner chooses not
            to pursue it, radiation as the primary modality can achieve meaningful local control and
            symptom relief across multiple tumor types.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every oral tumor
              case — histopathology, CT imaging, surgical reports — before recommending a protocol.
              The right approach depends on the tumor, not a template.
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
            Refer a patient with<br /><em>an oral tumor.</em>
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
