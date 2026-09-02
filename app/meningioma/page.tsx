import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (feline meningioma
// long-term control with SRS/SRT; 3D-CRT outcomes).
const REFERENCES: Reference[] = [
  { authors: 'Körner M, et al.', year: '2019', title: 'Radiation therapy for intracranial tumours in cats with neurological signs', source: 'J Feline Med Surg. 21(8):765' },
  { authors: 'Kelsey KL, Gieger TL, Nolan MW', year: '2018', title: 'Single fraction stereotactic radiation therapy (stereotactic radiosurgery) is a feasible method for treating intracranial meningiomas in dogs', source: 'Vet Radiol Ultrasound' },
  { authors: 'Berlato D, et al.', year: '2018', title: 'Canine meningiomas treated with three-dimensional conformal radiation therapy require magnetic resonance imaging restaging', source: 'Vet Radiol Ultrasound' },
]

const pageSeo = getPageSeo('/meningioma')

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
    q: 'What is a meningioma in dogs and cats?',
    a: 'Meningioma is a tumor arising from the meninges — the protective layers surrounding the brain and spinal cord. It is the most common intracranial tumor in cats and one of the most frequent in dogs. Meningiomas are typically slow-growing and well-defined, which makes them ideal candidates for radiation therapy — particularly stereotactic SRS/SRT.',
  },
  {
    q: 'Is meningioma curable in cats?',
    a: 'Meningioma is one of the more treatable brain tumors in cats. In cats, meningiomas are often well-encapsulated and surgically accessible, and surgery can achieve excellent long-term outcomes — frequently the best option. When surgery is not feasible, or for residual or recurrent disease, stereotactic radiation (SRS/SRT) provides effective local control with good quality of life. Dr. DiBernardi reviews each case to recommend the most appropriate approach.',
  },
  {
    q: 'What is the difference between surgery and radiation for meningioma?',
    a: 'It depends on the species and the individual tumor. In cats, meningiomas are frequently well-encapsulated and surgically accessible, and surgery can offer the best long-term outcomes. In dogs, meningiomas tend to be more infiltrative and complete surgical removal is often not feasible, so radiation frequently plays the primary role. Radiation therapy (especially SRS/SRT) is also used after incomplete resection or when surgery is not an option. Dr. DiBernardi will discuss the best approach for your pet.',
  },
  {
    q: 'How many radiation sessions does my pet need?',
    a: 'For most meningiomas, SRS/SRT is the preferred protocol — 1–5 sessions with submillimeter accuracy. Each session requires short general anesthesia (15–25 minutes) and your pet goes home the same day. Conventional CFRT (15–20 sessions daily) is used when the tumor is larger or when higher total dose is needed.',
  },
  {
    q: 'Does my pet need a referral?',
    a: 'No referral is required. Pet families may contact us directly. We coordinate with your primary care veterinarian and any neurologist or surgeon involved in your pet\'s care throughout the entire treatment process.',
  },
]

export default function MeningiomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Meningioma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-hero.webp"
            alt="Meningioma radiation therapy for cats and dogs — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/brain-tumors">Brain Tumors</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Meningioma</span>
          </nav>
          <div className="cond-hero__tag">Meningioma Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Radiation therapy<br />for meningioma<br /><em>in pets — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Meningioma is the most common brain tumor in cats — and one of the more treatable. In cats,
            meningiomas are often surgically accessible, and surgery can offer the best long-term
            outcomes. When surgery is not feasible, stereotactic radiation (SRS/SRT) delivers targeted
            treatment in just 1–5 sessions.
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
            <div className="cond-hero__stat-val">24<em>mo+</em></div>
            <div className="cond-hero__stat-label">Median survival for feline meningioma with surgery</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">#<em>1</em></div>
            <div className="cond-hero__stat-label">Most common brain tumor in cats — highly RT-responsive</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">1–<em>5</em></div>
            <div className="cond-hero__stat-label">Sessions with SRS/SRT — outpatient, same-day home</div>
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
            <div className="cond-editorial__kicker-text">Understanding Meningioma in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            The most treatable<br />brain tumor in veterinary oncology — <em>with radiation.</em>
          </h2>
          <p className="cond-editorial__lead">
            Meningioma arises from the meninges — the membranes enveloping the brain and spinal cord.
            It grows slowly and remains well-defined, which makes it ideal for stereotactic radiation.
            In cats, it is the most common intracranial tumor. In dogs, it typically occurs in older,
            large-breed animals and grows along the brain&apos;s surface.
          </p>
          <p className="cond-editorial__body">
            Common presenting signs include seizures, behavioral changes, circling, head pressing,
            loss of coordination, and vision changes. Because the skull limits expansion, even a
            slowly growing tumor eventually compresses surrounding brain tissue — producing symptoms
            that escalate quickly once they begin.
          </p>
          <h3 className="cond-editorial__h3">The roles of surgery and radiation</h3>
          <p className="cond-editorial__body">
            In cats, meningiomas are frequently well-encapsulated and surgically accessible — surgery
            can achieve excellent long-term outcomes and is often the best option. In dogs, meningiomas
            tend to be more infiltrative and complete resection is often not feasible, so radiation
            frequently plays the primary role. Stereotactic radiation (SRS/SRT) targets the tumor volume
            with ablative precision and is also valuable after incomplete resection or when surgery is
            not an option. Dr. DiBernardi reviews each case to recommend the most appropriate approach.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Feline meningioma is among the best prognosis cases in veterinary oncology.</strong>{' '}
              Cats treated with SRS/SRT often maintain excellent quality of life throughout — eating,
              grooming, and interacting normally — with durable tumor control lasting years, not months.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What imaging is required before treatment</h3>
          <p className="cond-editorial__body">
            MRI is the gold standard for meningioma diagnosis and treatment planning — it defines
            tumor boundaries, location relative to critical structures, and degree of brain compression.
            CT may also be used for radiation planning. Dr. DiBernardi reviews all imaging personally
            before designing each treatment plan, selecting between SRS/SRT and CFRT based on
            tumor size, location, and clinical picture.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every meningioma
              case before treatment begins. SRS/SRT is typically the first choice — but the protocol
              is always chosen based on your pet&apos;s specific imaging and clinical history.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">24<em>mo+</em></div>
          <div className="cond-bridge__label">Median survival for feline meningioma with surgery</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">1–<em>5</em></div>
          <div className="cond-bridge__label">Sessions with SRS/SRT — submillimeter precision</div>
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
            Stereotactic precision<br /><em>for meningioma.</em>
          </h2>
          <p className="bajada">
            Every meningioma case at AARADONC begins with a complete specialist review — MRI, staging,
            neurological status, and treatment history. Dr. DiBernardi personally designs the plan.
            SRS/SRT is the preferred approach for most meningiomas.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT before every session confirms exact tumor position — essential for intracranial targets where submillimeter accuracy protects adjacent brain structures. VMAT/RapidArc delivers treatment efficiently with shorter anesthesia time.' },
              { title: 'SRS/SRT — preferred for meningioma.', text: '1–5 sessions with ablative stereotactic doses achieve durable local control for most well-defined meningiomas. Outpatient — your pet goes home the same day.' },
              { title: 'CFRT for larger or post-surgical cases.', text: 'When the tumor is large, the surgical bed requires treatment, or a higher cumulative dose is needed, CFRT (15–20 sessions) provides the dose distribution required.' },
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
            SRS/SRT — <em>the standard for most meningiomas.</em>
          </h3>
          {[
            { tag: 'Preferred — Most Meningiomas', name: 'SRS / SRT', sessions: '1–5 sessions', note: 'Submillimeter precision · outpatient · same-day home', href: '/radiation-therapy#srs-srt', dark: true },
            { tag: 'Also Available', name: 'CFRT', sessions: '15–20 sessions', note: 'Larger tumors · post-surgical · daily outpatient', href: '/radiation-therapy#cfrt', dark: false },
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
            Refer a patient with<br /><em>meningioma.</em>
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
