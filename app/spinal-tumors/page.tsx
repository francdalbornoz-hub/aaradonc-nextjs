import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'

const pageSeo = getPageSeo('/spinal-tumors')

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
    q: 'What types of spinal tumors occur in dogs and cats?',
    a: 'Spinal tumors are classified by location: extradural (outside the dural sac — most common, often vertebral tumors or metastatic disease), intradural-extramedullary (within the dural sac but outside the spinal cord — meningiomas, nerve sheath tumors), and intramedullary (within the spinal cord itself — astrocytomas, ependymomas). Location determines which treatment approach is most appropriate.',
  },
  {
    q: 'When is radiation recommended for a spinal tumor?',
    a: 'Radiation is recommended when surgery is not possible due to tumor location or extent, when surgical resection is incomplete and residual disease requires treatment, or when the goal is palliative — relieving spinal cord compression, reducing pain, and restoring neurological function. For many spinal tumors, especially at surgically challenging locations, radiation is the primary treatment.',
  },
  {
    q: 'Can radiation improve my pet\'s neurological function?',
    a: 'Yes, in many cases. Radiation can reduce tumor volume and relieve spinal cord compression — which directly translates to neurological improvement. The degree of recovery depends on the severity and duration of neurological compromise before treatment and the tumor type. Early intervention — before permanent spinal cord damage occurs — consistently produces better outcomes.',
  },
  {
    q: 'What protocols are used for spinal tumors?',
    a: 'Both SRS/SRT and CFRT are used for spinal tumors, depending on tumor type, location, and whether surgery has been performed. SRS/SRT (1–5 sessions) is highly precise and preferred for well-defined tumors. CFRT (16–20 sessions) provides dose fractionation for tumors requiring prolonged treatment. Dr. DiBernardi determines the appropriate protocol after complete case review.',
  },
  {
    q: 'How soon after diagnosis should we start radiation?',
    a: 'As soon as possible. Neurological compromise from spinal cord compression tends to worsen progressively — and permanent damage can occur if decompression is delayed. Once a spinal tumor is confirmed on MRI or CT, radiation planning should begin promptly. We offer same-week consultations for urgent cases.',
  },
]

export default function SpinalTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Spinal tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-hero.webp"
            alt="Spinal tumor radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Spinal Tumors</span>
          </nav>
          <div className="cond-hero__tag">Spinal Tumor Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Spinal tumor radiation<br />therapy for pets<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Spinal tumors cause progressive neurological compromise — weakness, paralysis, and pain.
            Radiation therapy can relieve spinal cord compression, halt progression, and restore
            function when surgery is not possible or incomplete.
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
            <div className="cond-hero__stat-val">1–<em>5</em></div>
            <div className="cond-hero__stat-label">Sessions with SRS/SRT — submillimeter precision</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">60<em>%+</em></div>
            <div className="cond-hero__stat-label">Of patients show neurological improvement after radiation</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">Same<em> wk</em></div>
            <div className="cond-hero__stat-label">Consultations available for urgent neurological cases</div>
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
            <div className="cond-editorial__kicker-text">Understanding Spinal Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            When the spine is the problem,<br />precision matters <em>most.</em>
          </h2>
          <p className="cond-editorial__lead">
            Spinal tumors compress or invade the spinal cord — producing progressive weakness,
            incoordination, and pain that worsens as the tumor grows. The spinal cord&apos;s
            sensitivity to radiation requires submillimeter targeting accuracy. At AARADONC, this
            is exactly what our technology provides.
          </p>
          <p className="cond-editorial__body">
            Spinal tumors in dogs and cats are classified by where they arise relative to the spinal
            cord: extradural (outside the dural sac — most often vertebral tumors or metastatic
            disease), intradural-extramedullary (within the dural sac but outside the cord — includes
            meningiomas and nerve sheath tumors), and intramedullary (within the cord itself).
            Each type has different surgical accessibility and radiation responsiveness.
          </p>
          <h3 className="cond-editorial__h3">Why radiation therapy is often the primary option</h3>
          <p className="cond-editorial__body">
            Many spinal tumors — particularly intramedullary masses and tumors at surgically
            challenging vertebral levels — cannot be safely removed without risk of permanent
            neurological damage. Radiation therapy targets these tumors with precision that surgery
            cannot match in these locations, delivering therapeutic doses to the tumor while
            respecting the adjacent spinal cord&apos;s tolerance limits.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Timing is critical for spinal tumors.</strong> Progressive neurological
              deficits — weakness, ataxia, paresis — indicate worsening spinal cord compression.
              Once paralysis is complete or damage becomes permanent, radiation cannot restore
              function. Early treatment gives the best chance of neurological recovery.
            </div>
          </div>
          <h3 className="cond-editorial__h3">SRS/SRT — precision for the spine</h3>
          <p className="cond-editorial__body">
            Stereotactic radiation (SRS/SRT) is ideally suited for spinal tumors. It delivers
            ablative doses in 1–5 sessions with submillimeter accuracy, protecting the delicate
            spinal cord while maximizing tumor dose. For well-defined spinal tumors, SRS/SRT can
            achieve durable local control with minimal sessions and rapid treatment completion.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every spinal
              tumor case — MRI and CT imaging, neurological status, and treatment history — before
              designing the radiation plan. Precision here is not an option. It is the requirement.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">60<em>%+</em></div>
          <div className="cond-bridge__label">Patients show neurological improvement after radiation</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">1–<em>5</em></div>
          <div className="cond-bridge__label">Sessions with SRS/SRT — submillimeter spinal targeting</div>
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
            Submillimeter precision<br /><em>where it matters most.</em>
          </h2>
          <p className="bajada">
            Spinal tumor treatment at AARADONC starts with a complete specialist review — MRI and
            CT imaging, neurological status, treatment history. Dr. DiBernardi personally designs
            every plan, selecting between SRS/SRT and CFRT based on tumor type, location, and urgency.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT imaging before every session is especially critical for spinal tumors — the spinal cord\'s radiation tolerance demands submillimeter positioning accuracy at every fraction.' },
              { title: 'SRS/SRT for well-defined tumors.', text: '1–5 sessions with submillimeter accuracy using VMAT/RapidArc — maximum precision at the spinal cord, where tolerances are strictest.' },
              { title: 'CFRT for post-surgical or diffuse disease.', text: 'When the surgical bed requires treatment or the tumor is less well-defined, CFRT with daily IGRT provides the dose distribution and accuracy needed.' },
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
            SRS/SRT or CFRT — chosen by <em>tumor type and location.</em>
          </h3>
          {[
            { tag: 'Preferred — Well-Defined Spinal Tumors', name: 'SRS / SRT', sessions: '1–5 sessions', note: 'Submillimeter precision · outpatient · same-day home', href: '/srs-srt-veterinary-radiation-therapy-florida', dark: true },
            { tag: 'Also Available', name: 'CFRT', sessions: '16–20 sessions', note: 'Post-surgical or diffuse disease · outpatient', href: '/cfrt-veterinary-radiation-therapy-florida', dark: false },
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
              What pet owners<br /><em>ask us most.</em>
            </h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">For Pet Owners</div>
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
            Refer a patient with<br /><em>a spinal tumor.</em>
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
