import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (nasal lymphoma in
// cats is highly radiation-responsive; survival with radiation ± chemotherapy).
const REFERENCES: Reference[] = [
  { authors: 'Haney SM, et al.', year: '2009', title: 'Survival analysis of 97 cats with nasal lymphoma: a multi-institutional retrospective study (1986–2006)', source: 'J Vet Intern Med' },
  { authors: 'Reczynska AI, LaRue SM, et al.', year: '2022', title: 'Outcome of stereotactic body radiation for treatment of nasal and nasopharyngeal lymphoma in 32 cats', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeo('/lymphoma')

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
    q: 'What is lymphoma in dogs and cats?',
    a: 'Lymphoma is a cancer of lymphocytes — white blood cells — that can originate in lymph nodes, the spleen, gastrointestinal tract, mediastinum, nasal cavity, skin, or the central nervous system. It is the most common cancer in cats and one of the most common in dogs. Lymphoma is highly heterogeneous: subtype, location, immunophenotype, and grade all significantly affect prognosis and treatment.',
  },
  {
    q: 'When is radiation used for lymphoma?',
    a: 'Radiation plays a specific role in localized forms of lymphoma — where the disease is confined to one or a few regions rather than systemically disseminated. Nasal lymphoma in cats responds exceptionally well to radiation with or without chemotherapy. Mediastinal lymphoma may benefit from radiation to reduce the thoracic mass. Spinal lymphoma causing cord compression is treated with radiation for decompression. CNS lymphoma is also managed with radiation.',
  },
  {
    q: 'Is radiation used instead of chemotherapy?',
    a: 'In most cases, radiation is used alongside chemotherapy, not instead of it. For localized nasal or mediastinal lymphoma, radiation may be used as the primary local treatment with chemotherapy addressing systemic disease. For multi-site lymphoma, chemotherapy is the foundation of treatment, and radiation may be added for specific sites with bulky disease or neurological compromise.',
  },
  {
    q: 'How well does nasal lymphoma in cats respond to radiation?',
    a: 'Nasal lymphoma in cats is one of the most radiation-responsive cancers in veterinary medicine. With radiation — alone or combined with chemotherapy — median survival times of 1–2 years are commonly reported, and some cats achieve sustained long-term remission. Quality of life is typically excellent during and after treatment.',
  },
  {
    q: 'Does my pet need a referral to see you?',
    a: 'No referral is required. Pet families can contact us directly. We collaborate closely with your primary care veterinarian and any oncologist managing the systemic component of your pet\'s lymphoma.',
  },
]

export default function LymphomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Lymphoma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-patient.jpg"
            alt="Lymphoma radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Lymphoma</span>
          </nav>
          <div className="cond-hero__tag">Lymphoma Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Lymphoma radiation<br />therapy for pets<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Lymphoma is the most common cancer in cats and one of the most common in dogs.
            Radiation plays a critical role in localized forms — particularly nasal, mediastinal,
            and spinal lymphoma — achieving local control that chemotherapy alone cannot match.
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
            <div className="cond-hero__stat-label">Most common cancer in cats</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">1–<em>2</em>yr</div>
            <div className="cond-hero__stat-label">Median survival for nasal lymphoma in cats with radiation</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">High<em> CR</em></div>
            <div className="cond-hero__stat-label">Complete response rate for localized lymphoma with CFRT</div>
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
            <div className="cond-editorial__kicker-text">Understanding Lymphoma in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Radiation targets what<br /><em>chemotherapy cannot reach alone.</em>
          </h2>
          <p className="cond-editorial__lead">
            Lymphoma is a systemic disease — but some forms are highly localized. For these,
            radiation provides the precision local control that systemic chemotherapy cannot
            replicate. Nasal lymphoma in cats, mediastinal masses causing breathing difficulty,
            and spinal lymphoma compressing the cord are all situations where radiation changes
            the outcome.
          </p>
          <p className="cond-editorial__body">
            The biology of lymphoma varies enormously by anatomic site, cell type (B-cell vs.
            T-cell), and grade. High-grade multicentric lymphoma requires chemotherapy as the
            primary treatment. But localized anatomic lymphoma — confined to the nasal cavity,
            mediastinum, spine, or skin — often responds best to a combination of local radiation
            and systemic chemotherapy, with outcomes significantly better than either alone.
          </p>
          <h3 className="cond-editorial__h3">Nasal lymphoma in cats — a standout case</h3>
          <p className="cond-editorial__body">
            Nasal lymphoma is the most common nasal tumor in cats and one of the most
            radiation-responsive cancers in veterinary medicine. With radiation — alone or combined
            with chlorambucil or CHOP-based chemotherapy — median survival times of 1–2 years are
            commonly reported. Many cats maintain excellent quality of life throughout. This is one
            of the best-prognosis cancer diagnoses a cat can receive.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Not all lymphoma is the same.</strong> Before any treatment recommendation,
              Dr. DiBernardi reviews the full workup — histopathology, immunophenotyping, anatomic
              site, staging — to determine whether and how radiation should be integrated into the
              overall treatment plan.
            </div>
          </div>
          <h3 className="cond-editorial__h3">When radiation changes the course</h3>
          <p className="cond-editorial__body">
            For mediastinal lymphoma causing respiratory compromise, emergency radiation can reduce
            tumor bulk rapidly — often within the first 1–2 fractions. For spinal lymphoma causing
            progressive paresis, radiation can decompress the spinal cord and allow neurological
            recovery. These are situations where radiation is not just complementary — it is urgent.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> holds dual board certification in
              radiation oncology and medical oncology — meaning she evaluates the full systemic
              and local picture before any treatment recommendation. Every lymphoma case benefits
              from this integrated perspective.
            </div>
          </div>
        </div>
      </section>

      <section className="cond-types" aria-labelledby="types-heading">
        <div className="cond-types__inner">
          <div className="cond-types__header">
            <div className="eyebrow-label">Lymphoma Forms Where Radiation Plays a Role</div>
            <h2 id="types-heading" className="titulo-seccion">Localized lymphoma<br />that responds to <em>radiation.</em></h2>
            <p className="cond-types__sub">
              Radiation is most impactful in anatomically localized lymphoma. The cases below
              represent the forms where radiation is part of the standard treatment approach.
            </p>
          </div>
          <div className="cond-types__grid">
            {[
              { href: null, species: 'Primarily Cats', name: 'Nasal Lymphoma', desc: 'The most common nasal tumor in cats. Radiation ± chemotherapy achieves remission rates and survival times among the best of any feline cancer.', tag: '★ Excellent prognosis with RT' },
              { href: null, species: 'Dogs & Cats', name: 'Mediastinal Lymphoma', desc: 'A large mediastinal mass can cause respiratory distress requiring urgent treatment. Radiation rapidly reduces tumor volume — often improving breathing within 1–2 fractions.', tag: 'Urgent · CFRT · Palliative' },
              { href: null, species: 'Dogs & Cats', name: 'Spinal Lymphoma', desc: 'Epidural lymphoma causing spinal cord compression responds to radiation. Early treatment is critical to achieve neurological recovery before permanent damage occurs.', tag: 'Neurological urgency' },
              { href: null, species: 'Dogs & Cats', name: 'CNS Lymphoma', desc: 'Central nervous system lymphoma — brain or spinal involvement — is treated with whole-brain radiation or focal RT depending on distribution and response to chemotherapy.', tag: 'CFRT · Palliative' },
              { href: null, species: 'Dogs', name: 'Cutaneous Lymphoma', desc: 'Epitheliotropic (cutaneous) lymphoma is a T-cell form confined to the skin. Radiation provides effective local palliation for isolated, symptomatic skin lesions.', tag: 'Palliative · Focal RT' },
              { href: null, species: 'Ask us', name: 'Other lymphoma sites', desc: 'Every lymphoma case is evaluated individually. Dr. DiBernardi determines whether and how radiation integrates into your pet\'s overall treatment plan.', tag: 'Case-by-case evaluation' },
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
          <div className="cond-bridge__val">1–<em>2</em>yr</div>
          <div className="cond-bridge__label">Median survival for feline nasal lymphoma with radiation</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">High<em> CR</em></div>
          <div className="cond-bridge__label">Complete response rate for localized lymphoma with CFRT</div>
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
            Precision radiation<br /><em>integrated with your team.</em>
          </h2>
          <p className="bajada">
            Lymphoma treatment at AARADONC begins with a complete review of pathology, immunophenotyping,
            staging, and systemic treatment history. Dr. DiBernardi personally designs the radiation
            component and coordinates with your oncologist for full multimodal planning.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Complete staging review.', text: 'Anatomic site, immunophenotype, grade, and systemic extent all inform how and whether radiation should be integrated.' },
              { title: 'CFRT for localized disease.', text: 'Definitive CFRT achieves high complete response rates for nasal, mediastinal, and other anatomically confined lymphoma.' },
              { title: 'Palliative RT for urgent or bulky disease.', text: 'Rapid tumor reduction with 3–5 session palliative protocols — especially useful for mediastinal or spinal compression cases.' },
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
            CFRT or palliative RT — chosen by <em>site and urgency.</em>
          </h3>
          {[
            { tag: 'Localized Disease — Curative Intent', name: 'CFRT', sessions: '16–20 sessions', note: 'Daily Mon–Fri · outpatient · same-day home', href: '/radiation-therapy/#cfrt', dark: true },
            { tag: 'Bulky Disease / Comfort-Focused', name: 'Palliative Radiation', sessions: '3–5 sessions', note: 'Rapid tumor reduction · symptom relief · outpatient', href: '/radiation-therapy/#palliative', dark: false },
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
            Refer a patient with<br /><em>lymphoma.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive same-day acknowledgment. We coordinate directly with
            your practice and any oncology team managing the systemic component.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
