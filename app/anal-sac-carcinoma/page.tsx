import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
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

const FAQ_ITEMS = [
  {
    q: 'What is anal sac adenocarcinoma in dogs?',
    a: 'Anal sac adenocarcinoma (ASAC) is a malignant tumor arising from the apocrine glands of the anal sacs in dogs. It is the most clinically significant perianal tumor — locally invasive and with a high rate of lymph node metastasis, particularly to the sublumbar (internal iliac) lymph nodes. A unique feature is its association with hypercalcemia in approximately 25–50% of cases, caused by tumor secretion of a parathyroid hormone-related protein.',
  },
  {
    q: 'When is radiation recommended for anal sac adenocarcinoma?',
    a: 'Radiation is recommended for several scenarios: post-surgical treatment when margins are incomplete or sublumbar lymph nodes cannot be fully resected, as palliative treatment for inoperable or recurrent disease, and for treatment of sublumbar lymph node metastasis causing urethral or rectal compression. Radiation combined with surgery provides significantly better local control than surgery alone.',
  },
  {
    q: 'What outcomes can we expect with radiation?',
    a: 'Dogs with ASAC treated with surgery plus adjuvant radiation have reported median survival times of 18–24 months in some series — significantly longer than surgery alone. For cases with sublumbar lymph node involvement, radiation to the nodes can relieve compression, restore defecation and urination, and meaningfully extend functional quality of life.',
  },
  {
    q: 'What is the significance of hypercalcemia with anal sac cancer?',
    a: 'Hypercalcemia — elevated blood calcium — occurs in approximately 25–50% of dogs with ASAC and is caused by tumor-secreted PTHrP (parathyroid hormone-related protein). It can cause significant systemic signs including lethargy, polyuria/polydipsia, and cardiac arrhythmias. Hypercalcemia typically resolves with tumor treatment. Untreated, it can cause kidney failure and be life-threatening.',
  },
  {
    q: 'How many radiation sessions are required?',
    a: 'The protocol depends on the clinical situation. Adjuvant CFRT after surgery involves 16–20 daily sessions. Palliative radiation for symptomatic lymph node disease or inoperable primary disease involves 3–5 sessions. Dr. DiBernardi determines the appropriate approach based on staging, surgical history, and your goals.',
  },
]

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
            nodes. Radiation combined with surgery provides the best local control — and can relieve
            urethral or rectal compression when lymph node disease becomes symptomatic.
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
            <div className="cond-editorial__kicker-text">Understanding Anal Sac Adenocarcinoma in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Local and regional control<br /><em>require more than surgery alone.</em>
          </h2>
          <p className="cond-editorial__lead">
            Anal sac adenocarcinoma is staged by tumor size and lymph node involvement — and over
            half of dogs have sublumbar lymph node metastasis at diagnosis. Surgery can remove the
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
              <strong>Hypercalcemia with anal sac cancer is an emergency.</strong> PTHrP-mediated
              hypercalcemia can cause kidney failure if left untreated. It typically resolves once
              the tumor is effectively treated. If your dog has elevated calcium, timely evaluation
              and treatment of the primary tumor is essential.
            </div>
          </div>
          <h3 className="cond-editorial__h3">The role of radiation in ASAC</h3>
          <p className="cond-editorial__body">
            Adjuvant radiation after surgery targets the primary surgical bed and any residual
            lymph node disease, reducing local recurrence significantly. For cases where lymph
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

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">18–<em>24</em>mo</div>
          <div className="cond-bridge__label">Median survival with surgery + adjuvant radiation</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">3–<em>20</em></div>
          <div className="cond-bridge__label">Sessions — palliative or adjuvant CFRT depending on goal</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">Same<em> day</em></div>
          <div className="cond-bridge__label">Home after every session — outpatient treatment</div>
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
