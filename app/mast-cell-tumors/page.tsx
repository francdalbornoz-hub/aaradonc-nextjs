import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
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

const FAQ_ITEMS = [
  {
    q: 'What is a mast cell tumor in dogs?',
    a: 'Mast cell tumors (MCTs) are the most common malignant skin tumor in dogs. They arise from mast cells — immune cells normally found in the skin — and range from low-grade, slow-growing tumors to high-grade, aggressive lesions with significant metastatic potential. Grade and location are the primary determinants of prognosis and treatment intensity.',
  },
  {
    q: 'When is radiation used for mast cell tumors?',
    a: 'Radiation is recommended when surgical margins are incomplete or narrow following excision (adjuvant CFRT), when the tumor is located where wide surgical margins are not achievable — muzzle, digit, prepuce, perianal region — or when the tumor is inoperable. Adjuvant radiation after incomplete excision significantly reduces local recurrence and extends disease-free survival.',
  },
  {
    q: 'What results can radiation achieve for mast cell tumors?',
    a: 'For dogs receiving adjuvant CFRT after incomplete excision of Patnaik Grade II or Kiupel Low-Grade MCT, 1-year local control rates exceed 85–90% in most studies. Even for high-grade tumors, radiation improves local control significantly compared to surgery alone. Palliative radiation can also provide meaningful tumor reduction and symptom relief for inoperable cases.',
  },
  {
    q: 'Does my dog need chemotherapy in addition to radiation?',
    a: 'It depends on the grade and staging. Low-grade MCTs with incomplete margins often benefit from radiation alone. High-grade MCTs have significant metastatic risk and typically require systemic therapy — tyrosine kinase inhibitors (toceranib/masitinib) or chemotherapy — in addition to local control. Dr. DiBernardi coordinates with your oncologist to integrate radiation and systemic treatment appropriately.',
  },
  {
    q: 'How many radiation sessions are required?',
    a: 'Definitive adjuvant CFRT typically involves 16–20 sessions over 3–4 weeks. Each session is performed under short general anesthesia and the dog goes home the same day. Palliative protocols for inoperable cases require 3–5 sessions.',
  },
]

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
            <a href="#how-we-treat" className="cta-secundario" style={{ color: 'rgba(255,255,255,.8)', borderColor: 'rgba(255,255,255,.2)' }}>
              See Treatment Options ↓
            </a>
          </div>
          <div className="cond-hero__badges">
            <div className="cond-hero__badge">Board Certified Radiation Oncologist on site</div>
            <div className="cond-hero__badge">Palm Beach County, FL</div>
            <div className="cond-hero__badge">Same-week consultations</div>
          </div>
        </div>
        <div className="cond-hero__stats" aria-label="Key statistics">
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">#<em>1</em></div>
            <div className="cond-hero__stat-label">Most common malignant skin tumor in dogs</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">85–<em>90</em>%</div>
            <div className="cond-hero__stat-label">1-year local control with adjuvant CFRT after incomplete excision</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">16–<em>20</em></div>
            <div className="cond-hero__stat-label">Sessions for adjuvant CFRT — outpatient, same-day home</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">Same<em> day</em></div>
            <div className="cond-hero__stat-label">Home after every session — outpatient treatment</div>
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
            base for adjuvant radiation. 1-year local control rates of 85–90% are consistently
            reported when CFRT follows incomplete excision. High-grade tumors benefit from local
            control as well, but require attention to systemic therapy because of their significant
            metastatic risk. Radiation should begin as soon as possible after wound healing from
            surgery — delay increases recurrence risk.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Incomplete surgical margins are not a failure</strong> — they are information.
              Adjuvant radiation after incomplete excision routinely achieves better long-term local
              control than re-excision alone, particularly in anatomically constrained locations.
              Many dogs with incomplete-margin MCT go on to live years with no local recurrence.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Inoperable mast cell tumors</h3>
          <p className="cond-editorial__body">
            When surgery is not possible — due to tumor location, size, or the owner&apos;s preference
            — radiation can be used as the primary local treatment. Definitive CFRT or palliative
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

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">85–<em>90</em>%</div>
          <div className="cond-bridge__label">1-year local control with adjuvant CFRT after incomplete margins</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">16–<em>20</em></div>
          <div className="cond-bridge__label">Outpatient sessions for adjuvant CFRT</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">Same<em> day</em></div>
          <div className="cond-bridge__label">Home after every session — outpatient treatment</div>
        </div>
      </div>

      <div className="cond-treat" id="how-we-treat">
        <div className="cond-treat__left">
          <div className="eyebrow">Treatment at AARADONC</div>
          <h2 className="titulo-seccion">
            Adjuvant radiation.<br /><em>Protecting the surgical result.</em>
          </h2>
          <p className="bajada">
            Mast cell tumor treatment at AARADONC begins with a complete review of surgical pathology,
            grade, margins, and staging. Dr. DiBernardi designs the radiation field to cover the
            surgical bed and achieve the local control that surgery alone could not provide.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'CT simulation for precise field definition.', text: 'The surgical bed and any residual gross disease are mapped by CT, allowing precise targeting of at-risk tissue while sparing normal skin.' },
              { title: 'Adjuvant CFRT after incomplete margins.', text: '16–20 daily sessions target the surgical bed — reducing local recurrence rates from >50% to <15% in appropriately treated cases.' },
              { title: 'Palliative RT for inoperable cases.', text: '3–5 session protocols achieve meaningful tumor reduction and symptom relief when surgery is not an option.' },
            ].map(({ title, text }) => (
              <div key={title} className="rt-bullet">
                <div className="rt-bullet__dot" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="rt-bullet__text"><strong>{title}</strong> {text}</p>
              </div>
            ))}
          </div>
          <Link href="/radiation-therapy" style={{ color: '#1A4FBF', fontWeight: 600, fontSize: 15 }}>
            Learn more about our protocols →
          </Link>
        </div>
        <div className="cond-treat__right">
          <div className="eyebrow" style={{ color: '#1A4FBF' }}>Protocol Options</div>
          <h3 className="titulo-seccion" style={{ fontSize: 24, marginBottom: 24 }}>
            CFRT is the <em>standard after incomplete excision.</em>
          </h3>
          {[
            { tag: 'Primary — Adjuvant Post-Surgical', name: 'CFRT', sessions: '16–20 sessions', note: 'Daily Mon–Fri · outpatient · same-day home', href: '/radiation-therapy/#cfrt', dark: true },
            { tag: 'Inoperable Disease', name: 'Palliative Radiation', sessions: '3–5 sessions', note: 'Tumor reduction · symptom relief · outpatient', href: '/radiation-therapy/#palliative', dark: false },
          ].map(({ tag, name, sessions, note, href, dark }) => (
            <Link key={name} href={href} className={`cond-proto-card${dark ? ' cond-proto-card--dark' : ''}`}>
              <div className="cond-proto-card__tag">{tag}</div>
              <div className="cond-proto-card__name">{name}</div>
              <div className="cond-proto-card__sessions">
                <div className="cond-proto-card__sessions-val">{sessions}</div>
                <div className="cond-proto-card__sessions-note">{note}</div>
              </div>
              <div className="cond-proto-card__cta">Learn more →</div>
            </Link>
          ))}
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
