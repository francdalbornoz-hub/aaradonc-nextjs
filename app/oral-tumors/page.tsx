import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (radiation for oral
// melanoma, squamous cell carcinoma, and oral soft-tissue sarcoma / epulis).
const REFERENCES: Reference[] = [
  { authors: 'Baja AJ, et al.', year: '2022', title: 'A retrospective study of 101 dogs with oral melanoma treated with a weekly or biweekly 6 Gy × 6 radiotherapy protocol', source: 'Vet Comp Oncol' },
  { authors: 'van der Steen F, Zandvliet M', year: '2020', title: 'Treatment of canine oral papillary squamous cell carcinoma using definitive-intent radiation as a monotherapy: a case series', source: 'Vet Comp Oncol' },
  { authors: 'Lawrence J, et al.', year: '2008', title: 'Four-fraction radiation therapy for macroscopic soft tissue sarcomas in 16 dogs', source: 'J Am Anim Hosp Assoc' },
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

const FAQ_ITEMS = [
  {
    q: 'What are the most common oral tumors in dogs and cats?',
    a: 'In dogs, the most common oral tumors are oral melanoma, squamous cell carcinoma (SCC), fibrosarcoma, and acanthomatous ameloblastoma (epulis). In cats, SCC is by far the most common oral tumor and tends to be highly aggressive. Tumor type determines prognosis, treatment approach, and the role radiation plays.',
  },
  {
    q: 'When is radiation recommended for oral tumors?',
    a: 'Radiation is recommended when surgery leaves positive or narrow margins (post-surgical CFRT), when the tumor is not surgically resectable due to location or extent, or when palliative symptom control is the primary goal. For oral melanoma, radiation is often the primary local treatment — combined with immunotherapy in some protocols.',
  },
  {
    q: 'Can radiation cure an oral tumor?',
    a: 'For some tumor types — particularly acanthomatous epulis and some cases of fibrosarcoma treated with CFRT — curative intent is realistic. For oral melanoma, radiation achieves excellent local control, though systemic disease remains a concern. For oral SCC, radiation combined with other modalities can extend meaningful survival, though cure is less common.',
  },
  {
    q: 'How many sessions does oral tumor radiation take?',
    a: 'Definitive CFRT for curative intent involves 16–20 daily sessions over 3–4 weeks. Palliative protocols involve 3–5 sessions when quality of life is the primary goal. The protocol is determined by Dr. DiBernardi based on tumor type, staging, surgical history, and your goals.',
  },
  {
    q: 'Does my pet need a referral?',
    a: 'No referral is required. Pet families may contact us directly. We welcome self-referred cases and collaborate with your primary care veterinarian throughout treatment.',
  },
]

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
            Oral tumors are the fourth most common cancer in dogs. Radiation plays a critical role —
            as post-surgical treatment to eliminate microscopic disease, as primary therapy when
            surgery is not feasible, or as palliative care to relieve pain and restore function.
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
            <div className="cond-hero__stat-val">#<em>4</em></div>
            <div className="cond-hero__stat-label">Most common cancer site in dogs</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">6<em>mo+</em></div>
            <div className="cond-hero__stat-label">Median survival for oral melanoma with radiation + immunotherapy</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">90<em>%+</em></div>
            <div className="cond-hero__stat-label">Local control for acanthomatous epulis with CFRT</div>
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
            <div className="cond-editorial__kicker-text">Understanding Oral Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Radiation plays a critical role<br />in <em>oral tumor management.</em>
          </h2>
          <p className="cond-editorial__lead">
            Oral tumors in dogs and cats span a wide range of histologies — each with different biology,
            behavior, and response to treatment. What they share is the challenge of location: the
            oral cavity&apos;s proximity to critical structures makes surgery complex, and wide surgical
            margins are rarely achievable. Radiation addresses this directly.
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
            — has excellent outcomes with CFRT. Treatment planning at AARADONC begins with identifying
            exactly what the tumor is before deciding how to treat it.
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

      <section className="cond-types" aria-labelledby="types-heading">
        <div className="cond-types__inner">
          <div className="cond-types__header">
            <div className="eyebrow-label">Oral Tumor Types We Treat</div>
            <h2 id="types-heading" className="titulo-seccion">Common oral tumors<br />in dogs and cats.</h2>
            <p className="cond-types__sub">
              Each oral tumor type has different biology, behavior, and treatment priorities.
              Dr. DiBernardi selects the protocol based on histopathology, CT staging, surgical history, and your goals.
            </p>
          </div>
          <div className="cond-types__grid">
            {[
              { href: '/oral-melanoma', species: 'Dogs', name: 'Oral Melanoma', desc: 'The most common malignant oral tumor in dogs. Radiation achieves excellent local control — typically combined with immunotherapy for systemic disease.', tag: 'Palliative · Local control' },
              { href: '/oral-squamous-cell-carcinoma', species: 'Dogs & Cats', name: 'Squamous Cell Carcinoma', desc: 'SCC is the most common oral tumor in cats and the second most common in dogs. Radiation provides meaningful local control, especially when surgery is not feasible.', tag: 'CFRT · Palliative' },
              { href: '/fibrosarcoma', species: 'Dogs', name: 'Fibrosarcoma', desc: 'Locally aggressive and prone to recurrence after surgery. CFRT post-resection significantly reduces recurrence rates and extends disease-free intervals.', tag: 'Post-surgical CFRT' },
              { href: null, species: 'Dogs', name: 'Acanthomatous Epulis', desc: 'While not technically malignant, acanthomatous epulis invades bone aggressively. CFRT achieves >90% long-term local control — often without surgery.', tag: '★ Excellent response to CFRT' },
              { href: null, species: 'Dogs', name: 'Osteosarcoma of the jaw', desc: 'Oral osteosarcoma carries a different prognosis than appendicular OSA. Radiation is used post-surgically or palliatively for unresectable cases.', tag: 'Post-surgical · Palliative' },
              { href: null, species: 'Ask us', name: 'Other oral tumors', desc: 'Every oral tumor case is evaluated individually. Our Radiation Oncologist reviews all oral cavity tumor types and determines the appropriate treatment approach.', tag: 'Case-by-case evaluation' },
            ].map(({ href, species, name, desc, tag }) => (
              href ? (
                <Link key={name} href={href} className="cond-type-card">
                  <div className="cond-type-card__species">{species}</div>
                  <div className="cond-type-card__name">{name}</div>
                  <div className="cond-type-card__desc">{desc}</div>
                  <div className="cond-type-card__tag">{tag}</div>
                  <div className="cond-type-card__link">Learn more →</div>
                </Link>
              ) : (
                <div key={name} className="cond-type-card cond-type-card--muted">
                  <div className="cond-type-card__species">{species}</div>
                  <div className="cond-type-card__name">{name}</div>
                  <div className="cond-type-card__desc">{desc}</div>
                  <div className="cond-type-card__tag">{tag}</div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">90<em>%+</em></div>
          <div className="cond-bridge__label">Local control for acanthomatous epulis with CFRT</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">3–<em>5</em></div>
          <div className="cond-bridge__label">Sessions for palliative protocols — pain relief, function</div>
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
            Precision radiation.<br /><em>Tailored to your pet.</em>
          </h2>
          <p className="bajada">
            Oral tumor treatment at AARADONC begins with a complete specialist review. Dr. DiBernardi
            personally evaluates histopathology, CT imaging, surgical reports, and your goals before
            recommending a protocol. No two plans are the same.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'CT simulation and target definition.', text: 'CT-guided planning maps the gross tumor volume and surgical bed with precision — ensuring the right tissue is treated and critical structures are spared.' },
              { title: 'Post-surgical CFRT.', text: 'When surgical margins are incomplete or narrow, adjuvant CFRT significantly reduces local recurrence and extends disease-free survival.' },
              { title: 'Palliative radiation for pain relief.', text: 'When curative intent is not the goal, 3–5 session protocols reduce tumor burden, relieve oral pain, and restore your pet\'s ability to eat and function.' },
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
            Protocol is chosen <em>by tumor type</em> and your goals.
          </h3>
          {[
            { tag: 'Curative Intent — Post-surgical', name: 'CFRT', sessions: '16–20 sessions', note: 'Daily Mon–Fri · outpatient · same-day home', href: '/radiation-therapy/#cfrt', dark: true },
            { tag: 'Comfort-Focused Option', name: 'Palliative Radiation', sessions: '3–5 sessions', note: 'Pain relief · function restoration · outpatient', href: '/radiation-therapy/#palliative', dark: false },
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
