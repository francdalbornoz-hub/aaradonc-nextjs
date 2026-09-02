import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (fibrosarcoma is an
// infiltrative soft-tissue sarcoma; surgery + adjuvant radiation for control).
const REFERENCES: Reference[] = [
  { authors: 'Cronin K, et al.', year: '1998', title: 'Radiation therapy and surgery for fibrosarcoma in 33 cats', source: 'Vet Radiol Ultrasound' },
  { authors: 'Lawrence J, et al.', year: '2008', title: 'Four-fraction radiation therapy for macroscopic soft tissue sarcomas in 16 dogs', source: 'J Am Anim Hosp Assoc' },
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

const FAQ_ITEMS = [
  {
    q: 'What is fibrosarcoma in dogs and cats?',
    a: 'Fibrosarcoma is a malignant tumor arising from fibroblasts — the cells that form connective tissue. It occurs in dogs and cats in several locations: the oral cavity (gingiva, hard palate), subcutaneous tissue, and extremities. Fibrosarcomas are locally invasive with a tendency to infiltrate surrounding tissue and bone, making complete surgical resection difficult. Metastatic rate is moderate — most cases fail locally before distant spread.',
  },
  {
    q: 'Why is radiation important for fibrosarcoma?',
    a: 'Because fibrosarcomas are infiltrative and surgical margins are frequently incomplete — particularly for oral and facial locations — radiation therapy plays a critical role in achieving local disease control. Adjuvant CFRT after surgery with incomplete margins significantly reduces local recurrence rates and extends disease-free survival. For unresectable tumors, radiation as the primary treatment can achieve meaningful local control.',
  },
  {
    q: 'What are the results of radiation for fibrosarcoma?',
    a: 'Results depend on location and whether surgery was performed. For oral fibrosarcoma in dogs treated with surgery plus CFRT, median survival times of 12–24 months are reported for rostral tumors. Subcutaneous fibrosarcomas treated with surgery and adjuvant radiation achieve local control rates of 60–75%. Radiation alone for unresectable disease provides meaningful palliation and delays progression.',
  },
  {
    q: 'Is fibrosarcoma the same as vaccine-associated sarcoma in cats?',
    a: 'Vaccine-associated sarcoma (VAS) in cats is a type of fibrosarcoma — specifically a highly aggressive injection-site sarcoma with distinct biological behavior. VAS is treated with an aggressive surgery + radiation approach (often neoadjuvant radiation before surgery) due to its propensity for rapid local recurrence. Non-injection-site fibrosarcomas in cats follow a more standard protocol. AARADONC has a dedicated page for vaccine-associated sarcoma.',
  },
  {
    q: 'How many radiation sessions are needed for fibrosarcoma?',
    a: 'Definitive or adjuvant CFRT involves 16–20 daily sessions delivered Monday through Friday. Each session requires short general anesthesia and your pet is discharged the same day. For cases where curative intent is not the primary goal, palliative protocols (4–6 sessions) are also available.',
  },
]

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
            Fibrosarcomas are infiltrative tumors where incomplete surgical margins are the rule,
            not the exception. Adjuvant CFRT after surgery is the standard of care — reducing
            local recurrence and extending disease-free survival significantly.
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
            <div className="cond-hero__stat-val">12–<em>24</em>mo</div>
            <div className="cond-hero__stat-label">Median survival for oral fibrosarcoma with surgery + RT</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">60–<em>75</em>%</div>
            <div className="cond-hero__stat-label">Local control with surgery + adjuvant CFRT</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">16–<em>20</em></div>
            <div className="cond-hero__stat-label">Sessions of adjuvant or definitive CFRT</div>
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
            <div className="cond-editorial__kicker-text">Understanding Fibrosarcoma in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Surgery leaves cells behind.<br /><em>Radiation eliminates them.</em>
          </h2>
          <p className="cond-editorial__lead">
            Fibrosarcomas are defined by their infiltrative growth pattern — microscopic tumor
            extensions reach well beyond what the surgeon can see or feel. This is why even
            an apparently complete resection is rarely truly complete, and why adjuvant radiation
            is not optional. It is the treatment that eliminates what surgery leaves behind.
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
            Adjuvant CFRT — delivered after surgery — is the standard approach when resection
            is performed but margins are narrow or incomplete. This is the most common scenario
            for oral fibrosarcoma. Definitive CFRT is used as the primary treatment when surgery
            is not feasible due to tumor size, location, or the pet&apos;s overall health.
            Both achieve meaningful local control — adjuvant radiation produces the best outcomes
            when combined with surgical debulking.
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

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">12–<em>24</em>mo</div>
          <div className="cond-bridge__label">Median survival — oral fibrosarcoma with surgery + RT</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">16–<em>20</em></div>
          <div className="cond-bridge__label">Sessions of adjuvant or definitive CFRT</div>
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
            Adjuvant radiation —<br /><em>standard of care for fibrosarcoma.</em>
          </h2>
          <p className="bajada">
            Fibrosarcoma treatment at AARADONC starts with a complete staging review — CT imaging,
            biopsy results, surgical history, and margins. Dr. DiBernardi designs the radiation
            field to cover the surgical bed plus appropriate margins, maximizing local control
            while protecting adjacent structures.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT before every session confirms patient and tumor positioning — essential for oral and head/neck fibrosarcomas where adjacent bone, teeth, and salivary glands require precise dose management.' },
              { title: 'Adjuvant CFRT after surgery.', text: '16–20 fractionated sessions targeting the surgical bed plus margin — the standard approach when resection has been performed. Delivered daily Mon–Fri, outpatient, same-day home.' },
              { title: 'Definitive CFRT for unresectable disease.', text: 'When surgery is not feasible, CFRT as the primary treatment achieves meaningful local control and extends progression-free survival significantly.' },
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
            CFRT — <em>adjuvant or definitive.</em>
          </h3>
          {[
            { tag: 'Standard — Adjuvant or Primary', name: 'CFRT', sessions: '16–20 sessions', note: 'Post-surgical or primary · daily Mon–Fri · outpatient', href: '/radiation-therapy#cfrt', dark: true },
            { tag: 'Comfort-Focused Option', name: 'Palliative Radiation', sessions: '4–6 sessions', note: 'Symptom relief · QoL focus · outpatient', href: '/radiation-therapy#palliative', dark: false },
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
            Dr. DiBernardi personally reviews every case. Tell us about your pet and we&apos;ll
            respond promptly with a clear, honest recommendation.
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
