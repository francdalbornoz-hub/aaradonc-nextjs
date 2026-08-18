import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

const pageSeo = getPageSeo('/nasal-tumors')

// Peer-reviewed sources supporting the claims on this page (SBRT as standard,
// 1–5 session protocol, 12–19 month median survival). Verified against the
// clinic's approved literature base.
const REFERENCES: Reference[] = [
  { authors: 'Mayer MN, et al.', year: '2019', title: 'Outcomes and adverse effects associated with stereotactic body radiation therapy in dogs with nasal tumors: 28 cases (2011–2016)', source: 'J Am Vet Med Assoc. 254(5):602' },
  { authors: 'Gieger TL, Nolan MW', year: '2018', title: 'Linac-based stereotactic radiation therapy for canine non-lymphomatous nasal tumours: 29 cases (2013–2016)', source: 'Vet Comp Oncol' },
  { authors: 'Fox-Alvarez S, Shiomitsu K, Lejeune AT, Szivek A, Kubicek L', year: '2020', title: 'Outcome of intensity-modulated radiation therapy–based stereotactic radiation therapy for treatment of canine nasal carcinomas', source: 'Vet Radiol Ultrasound' },
  { authors: 'Czichon F, Rohrer Bley C, Meier V', year: '2021', title: 'Relative tumor volume has prognostic relevance in canine sinonasal tumors treated with radiation therapy: a retrospective study', source: 'PLoS ONE' },
  { authors: 'Fu D-R, et al.', year: '2023', title: 'Retrospective comparison of side effects and outcomes of three-dimensional conformal vs. intensity-modulated radiation therapy for canine nasal tumors', source: 'Front Vet Sci. 10:1011949' },
  { authors: 'Hunley DW, Mauldin GN, Shiomitsu K, Mauldin GE', year: '2010', title: 'Clinical outcome in dogs with nasal tumors treated with intensity-modulated radiation therapy', source: 'Can Vet J. 51:293' },
]

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
    q: 'What are the signs of a nasal tumor in dogs or cats?',
    a: 'The most common signs are epistaxis (nosebleed), chronic nasal discharge (often bloody or mucoid), facial swelling, sneezing, and difficulty breathing through one nostril. In later stages, facial deformity or signs of brain involvement may occur. Epistaxis in dogs over 8 years old should always prompt a specialist evaluation.',
  },
  {
    q: 'Is radiation the standard of care for nasal tumors?',
    a: 'Yes. Radiation therapy is the established primary treatment for nasal tumors in dogs and cats. Multiple studies have shown that SBRT (stereotactic radiation therapy) produces significantly longer median survival than supportive care alone. Surgery alone is rarely curative due to the complex anatomy of the nasal cavity.',
  },
  {
    q: 'How many sessions does nasal tumor radiation take?',
    a: 'The number of sessions depends on the protocol your Radiation Oncologist selects. SBRT (stereotactic radiation therapy) delivers treatment in just 1–5 high-precision sessions, while palliative protocols use 3–5 sessions for pets where quality of life is the primary goal. Each session is performed under short general anesthesia and the pet goes home the same day.',
  },
  {
    q: 'What survival times can we expect?',
    a: 'Dogs with nasal tumors treated with SBRT consistently achieve median survival times of 12–19 months, with a meaningful percentage surviving 2 years or more. Cats with nasal lymphoma treated with radiation and chemotherapy can achieve remission of 1–2+ years. Results depend on tumor histology, staging, and timing of diagnosis.',
  },
  {
    q: 'Does my pet need a referral?',
    a: 'No referral is required. Pet families can contact us directly. We coordinate with your primary care veterinarian throughout treatment and provide full written reports at every stage.',
  },
]

export default function NasalTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Nasal tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Nasal tumor radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/pet-cancer">Pet Cancer</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Nasal Tumors</span>
          </nav>
          <div className="cond-hero__tag">Nasal Tumor Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Nasal tumor radiation<br />therapy for pets<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Nasal tumors are among the most radiation-responsive cancers in veterinary oncology.
            Radiation is not a last resort — it is the established standard of care and the best
            chance for long-term control.
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
            <div className="cond-hero__stat-val">12–<em>19</em>mo</div>
            <div className="cond-hero__stat-label">Median survival with SBRT</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">Same<em> day</em></div>
            <div className="cond-hero__stat-label">Home after every session — outpatient treatment</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">Only<em> 1</em></div>
            <div className="cond-hero__stat-label">Center 100% dedicated to radiation oncology in Florida</div>
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
            <div className="cond-editorial__kicker-text">Understanding Nasal Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            The most radiation-responsive<br />tumor in veterinary <em>oncology.</em>
          </h2>
          <p className="cond-editorial__lead">
            Nasal tumors — adenocarcinomas, carcinomas, and sarcomas of the nasal cavity and sinuses —
            are among the most predictably responsive cancers to radiation therapy. For these tumors,
            radiation therapy is the gold standard, not a last resort.
          </p>
          <p className="cond-editorial__body">
            Nasal tumors grow within the rigid architecture of the nasal cavity, bounded by bone and in
            proximity to the brain, orbits, and palate. This anatomy makes complete surgical removal
            nearly impossible without significant disfigurement or neurological risk. What anatomy
            limits for surgery, it enables for radiation — the tumor sits in a well-defined location
            that can be precisely targeted.
          </p>
          <h3 className="cond-editorial__h3">Why radiation outperforms surgery for nasal tumors</h3>
          <p className="cond-editorial__body">
            Multiple studies in veterinary oncology have consistently shown that definitive radiation
            therapy produces significantly longer median survival times than supportive care
            alone. Dogs and cats treated with SBRT regularly achieve median survival of 12–19 months,
            with a meaningful percentage living 2 years or more. Quality of life is typically
            well-preserved throughout.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Epistaxis (nosebleeds) in dogs over 8 years old</strong> should always prompt
              evaluation for nasal tumors. It is one of the earliest and most consistent warning
              signs — and early diagnosis correlates directly with better radiation outcomes.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What to expect during treatment</h3>
          <p className="cond-editorial__body">
            Nasal radiation is delivered as outpatient sessions under short general anesthesia —
            typically 15–20 minutes — and the animal goes home the
            same day. Acute side effects are manageable and temporary, and most patients maintain
            normal activity and appetite throughout the treatment course.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally designs every nasal tumor
              treatment plan — reviewing CT imaging, staging, and histopathology before selecting the
              protocol. No two plans are identical.
            </div>
          </div>
        </div>
      </section>

      <section className="cond-types" aria-labelledby="types-heading">
        <div className="cond-types__inner">
          <div className="cond-types__header">
            <div className="eyebrow-label">Nasal Tumor Types We Treat</div>
            <h2 id="types-heading" className="titulo-seccion">Common nasal tumors<br />in dogs and cats.</h2>
            <p className="cond-types__sub">
              Nasal tumors vary by histology and location. Dr. DiBernardi selects the protocol
              based on tumor type, CT staging, and your pet&apos;s overall health.
            </p>
          </div>
          <div className="cond-types__grid">
            {[
              { href: '/nasal-carcinoma', species: 'Primarily Dogs', name: 'Nasal Carcinoma', desc: 'Adenocarcinoma is the most common nasal tumor in dogs. Highly responsive to SBRT. Diagnosis requires CT staging and histopathology.', tag: '★ Most radiation-responsive' },
              { href: null, species: 'Dogs & Cats', name: 'Nasal Squamous Cell Carcinoma', desc: 'SCC of the nasal planum and nasal cavity responds well to radiation. Cats with nasal SCC are candidates for both definitive and palliative protocols.', tag: 'Radiation · Palliative' },
              { href: null, species: 'Primarily Cats', name: 'Nasal Lymphoma', desc: 'The most common nasal tumor in cats. Radiation combined with chemotherapy achieves excellent local control and long-term remission in many cases.', tag: 'Radiation + Chemo' },
              { href: null, species: 'Dogs', name: 'Nasal Sarcoma', desc: 'Chondrosarcomas and fibrosarcomas of the nasal cavity are less common but respond to radiation when surgery is not feasible or incomplete.', tag: 'Radiation · Post-surgical' },
              { href: null, species: 'Dogs', name: 'Nasal Transitional Carcinoma', desc: 'A rare but radiation-responsive nasal tumor variant. Treated with the same definitive SBRT approach as other carcinomas.', tag: 'SBRT · Definitive' },
              { href: null, species: 'Ask us', name: 'Other nasal tumors', desc: 'Every case is evaluated individually. Our Radiation Oncologist reviews all nasal cavity tumor types and determines whether radiation therapy is appropriate.', tag: 'Case-by-case evaluation' },
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
          <div className="cond-bridge__val">12–<em>19</em>mo</div>
          <div className="cond-bridge__label">Median survival with SBRT</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">Same<em> day</em></div>
          <div className="cond-bridge__label">Home after each session — outpatient treatment</div>
        </div>
      </div>

      <div className="cond-treat" id="how-we-treat">
        <div className="cond-treat__left">
          <div className="eyebrow">Treatment at AARADONC</div>
          <h2 className="titulo-seccion">
            Precision radiation.<br /><em>Tailored to your pet.</em>
          </h2>
          <p className="bajada">
            Nasal tumor treatment at AARADONC begins with a complete specialist review. Dr. DiBernardi
            personally evaluates every case — CT imaging, histopathology, staging — before recommending
            a protocol. Every treatment plan is built from scratch.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT imaging before every session confirms exact tumor position. Daily image guidance is especially important for nasal tumors given proximity to the brain, orbits, and critical structures.' },
              { title: 'SBRT as the standard of care.', text: 'SBRT (stereotactic radiation therapy) with VMAT/RapidArc delivers precise, targeted doses in fewer sessions — shorter anesthesia time, maximizing tumor control while protecting the brain, eyes, and nasal structures.' },
              { title: 'Palliative option available.', text: 'When curative treatment is not the goal, 3–5 session palliative protocols relieve symptoms and improve quality of life meaningfully.' },
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
            SBRT is the <em>standard of care</em> for nasal tumors.
          </h3>
          {[
            { tag: 'Primary — Curative Intent', name: 'SBRT', sessions: '1–5 sessions', note: 'Stereotactic · high-precision · outpatient · same-day home', href: '/radiation-therapy/#srs-srt', dark: true },
            { tag: 'Comfort-Focused Option', name: 'Palliative Radiation', sessions: '3–5 sessions', note: 'Symptom relief · quality of life · outpatient', href: '/radiation-therapy/#palliative', dark: false },
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
            Refer a patient with<br /><em>a nasal tumor.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive same-day acknowledgment. We coordinate directly with
            your practice throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
