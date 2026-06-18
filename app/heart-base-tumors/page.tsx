import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'

const pageSeo = getPageSeo('/heart-base-tumors')

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
    q: 'What is a heart base tumor in dogs?',
    a: 'Heart base tumors arise from chemoreceptor cells near the aorta and pulmonary artery — these are called chemodectomas or aortic body tumors. They are locally invasive but slow-growing and rarely metastasize. Brachycephalic breeds (Boxers, Boston Terriers, Bulldogs) are significantly overrepresented. Cardiac hemangiosarcoma, which arises from the right atrium, is the other primary cardiac tumor and has very different biology and prognosis.',
  },
  {
    q: 'Why is surgery not possible for most heart base tumors?',
    a: 'Chemodectomas arise at the base of the heart, intimately associated with the aorta, pulmonary artery, and major cardiac structures. Surgical resection carries prohibitive cardiovascular risk in most cases. Radiation therapy targets the tumor precisely without requiring open-chest surgery, making it the only meaningful local treatment option for the vast majority of patients.',
  },
  {
    q: 'How well do heart base tumors respond to radiation?',
    a: 'Chemodectomas are radiation-responsive tumors. Multiple case series have documented tumor shrinkage and stabilization with radiation therapy, with median survival times of 12–24 months reported in dogs treated with stereotactic or conventional radiation. Because these tumors grow slowly, even stable disease with good quality of life represents a meaningful outcome.',
  },
  {
    q: 'What protocols are used for heart base tumors?',
    a: 'SRS/SRT (stereotactic radiation) is well-suited for heart base tumors — it delivers high, precise doses in 1–5 sessions with submillimeter accuracy, minimizing radiation to the adjacent heart, great vessels, and lungs. CFRT (16–20 sessions) is also used. The choice depends on tumor size, location relative to critical structures, and cardiac status.',
  },
  {
    q: 'What are the signs of a heart base tumor?',
    a: 'Many heart base tumors are found incidentally on cardiac imaging during workup for an unrelated condition. When symptomatic, signs include coughing, exercise intolerance, respiratory distress, syncope (fainting), and pericardial effusion (fluid around the heart causing cardiac tamponade). Pericardial effusion is the most common acute presentation and is managed with pericardiocentesis before radiation planning.',
  },
]

export default function HeartBaseTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Heart base tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/linac-room.webp"
            alt="Heart base tumor radiation therapy for dogs — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Heart Base Tumors</span>
          </nav>
          <div className="cond-hero__tag">Heart Base Tumor · Chemodectoma · Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Heart base tumor radiation<br />therapy for dogs<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Chemodectomas of the heart base are not surgically accessible. Radiation therapy is
            the only meaningful local treatment option — targeting the tumor with precision while
            protecting the adjacent heart, aorta, and lungs.
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
            <div className="cond-hero__stat-label">Median survival with radiation for chemodectoma</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">1–<em>5</em></div>
            <div className="cond-hero__stat-label">Sessions with SRS/SRT stereotactic protocol</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">Brachys<em> only</em></div>
            <div className="cond-hero__stat-label">Boxers, Boston Terriers, Bulldogs — highest risk breeds</div>
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
            <div className="cond-editorial__kicker-text">Understanding Heart Base Tumors in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            When surgery is not possible,<br /><em>radiation therapy is the treatment.</em>
          </h2>
          <p className="cond-editorial__lead">
            Chemodectomas of the heart base are intimately adherent to the aorta, pulmonary artery,
            and the heart itself. Surgical resection — already technically demanding — carries
            prohibitive cardiovascular risk in nearly all cases. Radiation therapy is the only
            meaningful local treatment option, and it works: multiple case series document tumor
            stabilization and meaningful survival extension.
          </p>
          <p className="cond-editorial__body">
            Chemodectomas are slow-growing tumors that arise from chemoreceptor cells in the aortic
            body near the heart base. They grow locally and rarely metastasize — which means a dog
            with a chemodectoma has no systemic cancer burden, just a local problem in a difficult
            location. This is a situation where radiation therapy, delivered with sufficient
            precision, can convert a fatal diagnosis into a manageable chronic condition.
          </p>
          <h3 className="cond-editorial__h3">Pericardial effusion — the most common acute presentation</h3>
          <p className="cond-editorial__body">
            Many dogs with heart base tumors present first with pericardial effusion — fluid
            accumulation around the heart that impairs cardiac filling. This is managed
            acutely with pericardiocentesis (drainage). Once the effusion is controlled,
            CT imaging and cardiac evaluation guide radiation planning. Radiation can reduce
            tumor volume and decrease recurrent effusion — sometimes eliminating the need
            for repeated pericardiocentesis.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Brachycephalic breeds are at significantly higher risk.</strong> Boxers
              account for the largest proportion of chemodectoma diagnoses, with Boston Terriers
              and Bulldogs also overrepresented. Any brachycephalic dog with unexplained
              exercise intolerance, syncope, or respiratory distress should have a cardiac
              evaluation including echocardiography.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Why precision matters most here</h3>
          <p className="cond-editorial__body">
            The heart base is surrounded by the most radiation-sensitive structures in the body —
            the heart, aorta, pulmonary artery, lungs, and esophagus. Treatment planning requires
            strict dose constraints on all adjacent organs while delivering adequate dose to the
            tumor volume. This is exactly the kind of case where stereotactic precision (SRS/SRT)
            demonstrates its greatest advantage over conventional techniques.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally designs every heart base
              tumor treatment plan — with CT and cardiac evaluation integrated before radiation
              planning begins. This is a case where specialist expertise and technology quality
              are not optional.
            </div>
          </div>
        </div>
      </section>

      <section className="cond-types" aria-labelledby="types-heading">
        <div className="cond-types__inner">
          <div className="cond-types__header">
            <div className="eyebrow-label">Cardiac Tumor Types We Treat</div>
            <h2 id="types-heading" className="titulo-seccion">Primary cardiac tumors<br />in dogs — <em>and their differences.</em></h2>
            <p className="cond-types__sub">
              The two most common primary cardiac tumors in dogs have very different biology,
              location, and prognosis. Understanding which tumor type is present is essential
              to any treatment discussion.
            </p>
          </div>
          <div className="cond-types__grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {[
              { href: null, species: 'Boxers & Brachycephalic Breeds', name: 'Chemodectoma (Aortic Body Tumor)', desc: 'Slow-growing, rarely metastatic. Arises at the heart base from chemoreceptor cells. Not surgically accessible — radiation therapy is the primary treatment option. Median survival 12–24 months with radiation therapy.', tag: '★ Radiation-responsive · SRS/SRT preferred' },
              { href: null, species: 'German Shepherds & Large Breeds', name: 'Cardiac Hemangiosarcoma', desc: 'Arises from the right atrium or auricle. Highly aggressive with rapid growth and high metastatic potential. Prognosis is more guarded than chemodectoma. Radiation and chemotherapy may be used palliatively.', tag: 'Palliative · Poor prognosis' },
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
          <div className="cond-bridge__val">12–<em>24</em>mo</div>
          <div className="cond-bridge__label">Median survival for chemodectoma with radiation</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">1–<em>5</em></div>
          <div className="cond-bridge__label">Sessions with SRS/SRT — maximum precision at the heart base</div>
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
            Precision where the<br /><em>stakes are highest.</em>
          </h2>
          <p className="bajada">
            Heart base tumor treatment at AARADONC begins with CT imaging and cardiac evaluation.
            Dr. DiBernardi designs the radiation plan to maximize dose to the tumor while applying
            strict dose constraints to the adjacent heart, great vessels, and lungs.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT imaging before every session is non-negotiable for heart base tumors — the adjacent aorta, pulmonary artery, and heart demand the highest possible positioning accuracy.' },
              { title: 'SRS/SRT — preferred for heart base tumors.', text: '1–5 sessions with submillimeter precision using VMAT/RapidArc — maximum dose to the tumor, strictly limited exposure to the heart and great vessels.' },
              { title: 'CFRT for select cases.', text: '16–20 session CFRT is also used when tumor geometry or cardiac status makes stereotactic delivery less appropriate.' },
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
            SRS/SRT is the <em>preferred protocol</em> for heart base tumors.
          </h3>
          {[
            { tag: 'Preferred — Chemodectoma', name: 'SRS / SRT', sessions: '1–5 sessions', note: 'Submillimeter precision · outpatient · same-day home', href: '/radiation-therapy/#srs-srt', dark: true },
            { tag: 'Also Available', name: 'CFRT', sessions: '16–20 sessions', note: 'Select cases · outpatient · daily Mon–Fri', href: '/radiation-therapy/#cfrt', dark: false },
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
            Dr. DiBernardi personally reviews every case. Tell us about your dog and we&apos;ll
            respond the same day with a clear, honest recommendation.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer a patient with<br /><em>a heart base tumor.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive same-day acknowledgment. We coordinate with your
            cardiologist and primary vet throughout the treatment process.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
