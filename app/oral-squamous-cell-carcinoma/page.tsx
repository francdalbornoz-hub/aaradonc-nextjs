import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (definitive-intent
// radiation for canine oral/gingival SCC; local control for rostral tumors).
const REFERENCES: Reference[] = [
  { authors: 'van der Steen F, Zandvliet M', year: '2020', title: 'Treatment of canine oral papillary squamous cell carcinoma using definitive-intent radiation as a monotherapy: a case series', source: 'Vet Comp Oncol' },
  { authors: 'Mosca S, et al.', year: '2021', title: 'A possible role of coarse fractionated radiotherapy in the management of gingival squamous cell carcinoma in dogs: a retrospective study', source: 'J Vet Med Sci' },
  { authors: 'Børresen B, et al.', year: '2023', title: 'Evaluation of single-fraction high dose FLASH radiotherapy in a cohort of canine oral cancer patients', source: 'Front Oncol' },
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

const FAQ_ITEMS = [
  {
    q: 'What is oral squamous cell carcinoma in dogs and cats?',
    a: 'Oral squamous cell carcinoma (SCC) is a malignant tumor arising from the epithelial lining of the mouth — gums, tongue, tonsils, or palate. It is the most common oral malignancy in cats and one of the most frequent in dogs. Behavior differs significantly by species and location: in dogs, gingival SCC is often locally invasive but slow to metastasize, while feline oral SCC is highly aggressive with rapid local invasion and limited response to most treatments.',
  },
  {
    q: 'How does radiation help oral SCC in dogs?',
    a: 'In dogs, radiation therapy — used alone or combined with surgery — achieves meaningful local control for gingival and mandibular SCC. Radiation is particularly valuable when surgical margins are incomplete or when the tumor location makes full resection difficult. Definitive CFRT produces local control rates of 50–70% with good survival times for rostral mandibular tumors. Tonsil SCC, however, carries a worse prognosis and is typically managed palliatively.',
  },
  {
    q: 'Is radiation effective for oral SCC in cats?',
    a: 'Feline oral SCC is one of the most challenging cancers in veterinary oncology. Most tumors are diagnosed late, are deeply invasive at presentation, and respond poorly to surgery, chemotherapy, and radiation. That said, radiation — particularly palliative hypofractionated protocols — can provide meaningful pain relief and short-term disease control. Dr. DiBernardi provides an honest, individualized assessment for every cat presented with oral SCC.',
  },
  {
    q: 'What is the difference between radiation alone vs. radiation + surgery for oral SCC?',
    a: 'For dogs, combined surgery and radiation achieves the best outcomes: surgery removes gross tumor and radiation eliminates microscopic residual disease. For tumors where surgery would be too disfiguring or the location prevents complete resection, radiation alone is the primary treatment. Dr. DiBernardi reviews CT imaging and surgical reports to determine which approach gives the best chance of durable control.',
  },
  {
    q: 'How many radiation sessions are needed?',
    a: 'Definitive CFRT involves 16–20 daily sessions Monday through Friday. Palliative protocols (4–6 sessions) are available for cases where curative intent is not the goal — particularly for cats with oral SCC, where quality of life and pain control are the primary objectives. Both are delivered under short general anesthesia with same-day discharge.',
  },
]

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
            <div className="cond-hero__stat-label">Most common oral malignancy in cats</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">50–<em>70</em>%</div>
            <div className="cond-hero__stat-label">Local control rate with CFRT for rostral mandibular SCC in dogs</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">4–<em>20</em></div>
            <div className="cond-hero__stat-label">Sessions — palliative or definitive based on goals</div>
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
            <div className="cond-editorial__kicker-text">Understanding Oral SCC in Dogs and Cats</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Oral SCC in dogs vs. cats —<br /><em>two very different diseases.</em>
          </h2>
          <p className="cond-editorial__lead">
            Oral squamous cell carcinoma behaves differently in dogs and cats — in prognosis,
            location, and response to treatment. Understanding this distinction is essential
            before setting treatment expectations. Dr. DiBernardi provides an honest, individualized
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
            the primary treatment when complete resection is not feasible. Definitive CFRT for
            gingival and mandibular SCC achieves local control in 50–70% of dogs with rostral
            tumors, with good quality of life throughout. Tonsil SCC carries a significantly worse
            prognosis and is typically approached palliatively.
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
            drooling, difficulty eating, and facial swelling. The prognosis is poor regardless of
            treatment — most cats survive 2–4 months even with aggressive therapy. Palliative
            radiation (4–6 sessions) can provide meaningful pain control, reduce tumor burden,
            and improve quality of life. An honest conversation about goals of care is central
            to every feline oral SCC consultation at AARADONC.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every oral SCC
              case and provides a clear, honest prognosis before any treatment begins. Treatment
              goals — curative intent vs. quality-of-life focus — are established together with
              the pet family at the outset.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">50–<em>70</em>%</div>
          <div className="cond-bridge__label">Local control with CFRT for rostral mandibular SCC in dogs</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">4–<em>6</em></div>
          <div className="cond-bridge__label">Palliative sessions for cats — pain control and QoL</div>
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
            Honest goals.<br /><em>Precise treatment.</em>
          </h2>
          <p className="bajada">
            Every oral SCC case at AARADONC starts with a complete specialist review — CT imaging,
            staging, and a frank conversation about goals of care. Dr. DiBernardi designs
            every plan personally, with treatment intent established clearly from the start.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT before every session confirms tumor and patient positioning — especially important in the oral cavity, where adjacent structures (mandible, palate, tongue, salivary glands) require precise dose management.' },
              { title: 'Definitive CFRT for dogs with curative intent.', text: '16–20 fractionated sessions deliver precise cumulative doses to the oral tumor volume — used as primary treatment or adjuvant after surgery with incomplete margins.' },
              { title: 'Palliative radiation for cats and select dogs.', text: '4–6 session hypofractionated protocols prioritize pain control, tumor reduction, and quality of life over total dose — the appropriate approach for feline oral SCC and advanced canine disease.' },
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
            Protocol chosen by <em>species, location, and goals.</em>
          </h3>
          {[
            { tag: 'Dogs — Curative Intent', name: 'CFRT', sessions: '16–20 sessions', note: 'Adjuvant or primary · daily Mon–Fri · outpatient', href: '/radiation-therapy#cfrt', dark: true },
            { tag: 'Cats & Palliative Cases', name: 'Palliative Radiation', sessions: '4–6 sessions', note: 'Pain relief · QoL focus · outpatient', href: '/radiation-therapy#palliative', dark: false },
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
            Get a specialist review.<br /><em>Same-day response.</em>
          </div>
          <p className="cond-cta__text">
            Dr. DiBernardi personally reviews every case. Tell us about your pet and we&apos;ll
            respond the same day with a clear, honest recommendation.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer a patient with<br /><em>oral SCC.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive same-day acknowledgment. We coordinate directly with
            your practice throughout treatment and provide full written reports.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
