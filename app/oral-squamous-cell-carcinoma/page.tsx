import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (definitive-intent
// radiation for canine oral/gingival SCC; local control for rostral tumors).
const REFERENCES: Reference[] = [
  { authors: 'van der Steen F, Zandvliet M', year: '2020', title: 'Treatment of canine oral papillary squamous cell carcinoma using definitive-intent radiation as a monotherapy: a case series', source: 'Vet Comp Oncol' },
  { authors: 'Mosca S, et al.', year: '2021', title: 'A possible role of coarse fractionated radiotherapy in the management of gingival squamous cell carcinoma in dogs: a retrospective study', source: 'J Vet Med Sci' },
  { authors: 'Brooks MB, et al.', year: '1988', title: 'Chemotherapy versus chemotherapy plus radiotherapy in the treatment of tonsillar squamous cell carcinoma in the dog', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeo('/oral-squamous-cell-carcinoma')

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

export default function OralSquamousCellCarcinomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Oral SCC radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Oral squamous cell carcinoma radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Oral SCC</span>
          </nav>
          <div className="cond-hero__tag">Oral SCC Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Oral squamous cell<br />carcinoma radiation<br /><em>therapy — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Oral SCC is the most common oral malignancy in cats and a frequent diagnosis in dogs.
            Radiation therapy — alone or combined with surgery — achieves local control for dog
            oral SCC, and provides meaningful palliative relief for cats.
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
            <div className="cond-editorial__kicker-text">Understanding Oral SCC in Dogs and Cats</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Oral SCC in dogs vs. cats —<br /><em>two very different diseases.</em>
          </h2>
          <p className="cond-editorial__lead">
            Oral squamous cell carcinoma behaves differently in dogs and cats — in prognosis,
            location, and response to treatment. Understanding this distinction is essential
            before setting treatment expectations. Dr. DiBernardi provides an individualized
            assessment for every patient presented with oral SCC.
          </p>
          <p className="cond-editorial__body">
            In dogs, gingival and mandibular SCC — particularly rostral (front) tumors — are locally
            invasive but relatively slow to metastasize. Surgery combined with radiation achieves
            durable local control for many dogs. In cats, oral SCC is one of the most aggressive
            cancers in veterinary oncology: typically diagnosed late, deeply invasive, and with
            limited response to most treatment modalities.
          </p>
          <h3 className="cond-editorial__h3">The role of radiation in dogs with oral SCC</h3>
          <p className="cond-editorial__body">
            For dogs, radiation is used adjuvantly after surgery when margins are incomplete, or as
            the primary treatment when complete resection is not feasible. Definitive radiation
            therapy for gingival and mandibular SCC can achieve durable local control in many dogs
            with rostral tumors, with good quality of life throughout. Tonsil SCC carries a
            significantly worse prognosis and is typically approached palliatively.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Location matters significantly in canine oral SCC.</strong> Rostral mandibular
              tumors respond better to radiation than caudal, tonsil, or sublingual lesions.
              CT imaging before treatment planning is essential to determine invasion depth,
              lymph node status, and the feasibility of surgical or combined approaches.
            </div>
          </div>
          <h3 className="cond-editorial__h3">The role of radiation in cats with oral SCC</h3>
          <p className="cond-editorial__body">
            Feline oral SCC is diagnosed most commonly as a sublingual or gingival mass causing
            drooling, difficulty eating, and facial swelling. The prognosis is guarded even with
            treatment. Palliative radiation can provide meaningful pain control, reduce tumor burden,
            and improve quality of life. A clear conversation about goals of care is central
            to every feline oral SCC consultation at AARADONC.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every oral SCC
              case and provides a clear prognosis before any treatment begins. Treatment
              goals — curative intent vs. quality-of-life focus — are established together with
              the pet family at the outset.
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
            Refer a patient with<br /><em>oral SCC.</em>
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
