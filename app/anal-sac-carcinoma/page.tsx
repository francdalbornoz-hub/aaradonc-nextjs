import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (ASAC survival with
// surgery + adjuvant/hypofractionated/stereotactic radiation; nodal disease).
const REFERENCES: Reference[] = [
  { authors: 'McQuown B, et al.', year: '2016', title: 'Treatment of advanced canine anal sac adenocarcinoma with hypofractionated radiation therapy: 77 cases', source: 'Vet Comp Oncol' },
  { authors: 'Swan M, et al.', year: '2021', title: 'Pilot study evaluating the feasibility of stereotactic body radiation therapy for canine anal sac adenocarcinoma', source: 'Vet Radiol Ultrasound' },
  { authors: 'Williams J, et al.', year: '2021', title: 'Minimal late radiation toxicity and transient early toxicity following postoperative definitive-intent radiation therapy for canine anal sac adenocarcinoma', source: 'Vet Radiol Ultrasound' },
  { authors: 'Faletti A, et al.', year: '2024', title: 'Stereotactic radiotherapy for advanced canine anal sac adenocarcinoma: an exploratory study', source: 'Vet Radiol Ultrasound' },
]

const pageSeo = getPageSeo('/anal-sac-carcinoma')

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

export default function AnalSacCarcinomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Anal sac carcinoma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Anal sac adenocarcinoma radiation therapy for dogs — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Anal Sac Adenocarcinoma</span>
          </nav>
          <div className="cond-hero__tag">Anal Sac Adenocarcinoma · ASAC · Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Anal sac carcinoma<br />radiation therapy for dogs<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Anal sac adenocarcinoma is locally invasive and frequently spreads to regional lymph
            nodes. Radiation combined with surgery can improve local control — and can relieve
            urethral or rectal compression when lymph node disease becomes symptomatic.
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
            <div className="cond-editorial__kicker-text">Understanding Anal Sac Adenocarcinoma in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Local and regional control<br /><em>require more than surgery alone.</em>
          </h2>
          <p className="cond-editorial__lead">
            Anal sac adenocarcinoma is staged by tumor size and lymph node involvement — and many
            dogs have sublumbar lymph node involvement at diagnosis. Surgery can remove the
            primary tumor and accessible nodes, but radiation plays a critical role in treating
            residual microscopic disease and managing lymph node recurrence.
          </p>
          <p className="cond-editorial__body">
            The initial presentation is often incidental — a mass found on rectal palpation during
            a routine exam — or driven by signs of local disease: difficulty defecating, perianal
            swelling, or scooting. The association with hypercalcemia means that blood work
            revealing elevated calcium in an older dog should always prompt evaluation of the
            anal sacs, even if no mass is clinically obvious.
          </p>
          <h3 className="cond-editorial__h3">Sublumbar lymph nodes — the critical target</h3>
          <p className="cond-editorial__body">
            The sublumbar (internal iliac) lymph nodes are the primary regional draining nodes for
            ASAC and are frequently involved at diagnosis. When enlarged, they can compress the
            colon and urethra — causing constipation, difficulty urinating, and significant pain.
            Radiation to these nodes can decompress these structures and restore function, even
            when surgical removal is not feasible or complete.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Hypercalcemia with anal sac cancer needs prompt veterinary attention.</strong> PTHrP-mediated
              hypercalcemia can cause kidney failure if left untreated. It typically resolves once
              the tumor is effectively treated. If your dog has elevated calcium, timely evaluation
              and treatment of the primary tumor is essential.
            </div>
          </div>
          <h3 className="cond-editorial__h3">The role of radiation in ASAC</h3>
          <p className="cond-editorial__body">
            Adjuvant radiation after surgery targets the primary surgical bed and any residual
            lymph node disease, to help reduce the risk of local recurrence. For cases where lymph
            nodes cannot be fully resected, palliative radiation to the sublumbar region relieves
            compression, restores defecation and urination, and improves quality of life
            meaningfully. Radiation is also used as the primary local treatment in inoperable cases.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every ASAC case —
              CT imaging, calcium levels, surgical reports — before designing the radiation plan.
              Every case is discussed with your oncologist and primary vet.
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
            Refer a patient with<br /><em>anal sac carcinoma.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate radiation with
            surgery and systemic therapy throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
