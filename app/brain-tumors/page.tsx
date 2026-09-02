import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (intracranial
// tumors respond to definitive/stereotactic radiation; meningioma in cats).
const REFERENCES: Reference[] = [
  { authors: 'Schwarz P, et al.', year: '2018', title: 'Comparative evaluation of a novel, moderately hypofractionated radiation protocol in 56 dogs with symptomatic intracranial neoplasia', source: 'J Vet Intern Med' },
  { authors: 'Treggiari E, et al.', year: '2016', title: 'Retrospective comparison of three-dimensional conformal radiation therapy vs. prednisolone alone in 30 cases of canine infratentorial brain tumors', source: 'Vet Radiol Ultrasound' },
  { authors: 'Kelsey KL, Gieger TL, Nolan MW', year: '2018', title: 'Single fraction stereotactic radiation therapy (stereotactic radiosurgery) is a feasible method for treating intracranial meningiomas in dogs', source: 'Vet Radiol Ultrasound' },
]

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/brain-tumors')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: { canonical: pageSeo.canonical },
  openGraph: {
    title: pageSeo.title,
    description: pageSeo.description,
    url: pageSeo.canonical,
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'What are the most common brain tumors in dogs and cats?',
    a: 'Meningiomas, gliomas, and choroid plexus tumors are the most frequently diagnosed intracranial tumors. Meningiomas are the most common in cats and are highly responsive to radiation therapy. Gliomas are more common in dogs, particularly brachycephalic breeds.',
  },
  {
    q: 'Is radiation therapy safe for brain tumors in pets?',
    a: 'Yes. Radiation therapy is the standard of care for most brain tumors in pets. Each session is delivered under short general anesthesia — your pet feels nothing during treatment. Modern stereotactic techniques target the tumor with submillimeter precision while protecting surrounding healthy brain tissue.',
  },
  {
    q: 'How many sessions does my pet need?',
    a: 'It depends on the protocol selected. SRS/SRT (stereotactic) requires just 1–5 sessions and is often the preferred choice for well-defined brain tumors. Conventional fractionated radiation therapy (CFRT) involves 15–20 sessions. Our Radiation Oncologist determines the best approach after reviewing your pet\'s imaging and case.',
  },
  {
    q: 'What results can we expect from radiation for a brain tumor?',
    a: 'Results vary by tumor type. Meningiomas in cats treated with SRS/SRT consistently achieve median survival times of 24+ months with excellent quality of life. Many pets show significant neurological improvement within weeks of completing radiation. Gliomas and other tumors also respond, though outcomes depend on grade and location.',
  },
  {
    q: 'Does my pet need a referral to see you?',
    a: 'No referral is required. Pet families may contact us directly. We welcome both self-referred cases and cases referred by veterinarians. We will coordinate with your primary care veterinarian throughout the entire process.',
  },
]

const INFO_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrainTumorsPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="cond-hero" aria-label="Brain tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-hero.webp"
            alt="Veterinary brain tumor radiation therapy — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/pet-cancer">Pet Cancer</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Brain Tumors</span>
          </nav>
          <div className="cond-hero__tag">Brain Tumor Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Brain tumor radiation<br />therapy for pets<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Radiation therapy is often a primary treatment option for most brain tumors in dogs and
            cats. At AARADONC, treatment is delivered by a board-certified Radiation Oncologist at
            Florida&apos;s only center 100% dedicated to veterinary radiation oncology.
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
            <div className="cond-hero__stat-val">2<em>x</em></div>
            <div className="cond-hero__stat-label">Median survival with radiation vs. supportive care alone</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">1–<em>5</em></div>
            <div className="cond-hero__stat-label">Sessions with SRS/SRT stereotactic protocol</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">60<em>%+</em></div>
            <div className="cond-hero__stat-label">Of patients show neurological improvement after RT</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          POSITIONING STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="pos-strip">
        <div className="pos-strip__inner">
          <p className="pos-strip__text">
            <strong>&ldquo;The only center 100% dedicated to Radiation Oncology in Florida&rdquo;</strong>
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          EDITORIAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" aria-hidden="true" />
            <div className="cond-editorial__kicker-text">Understanding Brain Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Why brain tumors in pets<br />are <em>different — and treatable.</em>
          </h2>
          <p className="cond-editorial__lead">
            Brain tumors can be a challenging diagnosis in veterinary oncology — but fortunately, many
            brain tumors are responsive to radiation therapy. For dogs and cats, radiation therapy is not
            a last resort — it may be the primary treatment.
          </p>
          <p className="cond-editorial__body">
            The most common brain tumor types in the dog and cat are meningiomas, gliomas, and choroid
            plexus tumors. Because the skull is a fixed space, even gradual growth may produce
            neurological symptoms which seem to appear suddenly and worsen quickly.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>In cats, meningiomas are often surgically accessible</strong>, and surgery can
              achieve the best long-term outcomes. When surgery is not feasible, stereotactic radiation
              (SRS/SRT) offers an effective alternative for local control and quality of life. Surgery
              may also be appropriate to obtain a diagnosis, reduce tumor volume, or relieve pressure —
              though complete surgical removal is not always possible.
            </div>
          </div>
          <h3 className="cond-editorial__h3">When neurological symptoms appear</h3>
          <p className="cond-editorial__body">
            Signs of a brain tumor may include seizures, changes in behavior or personality, circling
            or altered awareness, head tilt, loss of coordination, weakness, vision changes, and
            difficulty walking. Neurological signs can progress as a tumor grows — early evaluation
            allows your veterinary team to determine the diagnosis, assess treatment options, and
            establish an appropriate plan before additional neurological function is lost.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              Every brain tumor case at AARADONC is personally evaluated by{' '}
              <strong>Dr. Lisa DiBernardi, DACVR-RO</strong> — our onsite board-certified Radiation
              Oncologist. We provide specialized radiation oncology consultation, treatment planning,
              prognosis, and clear communication and guidance.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RELATED TUMOR TYPES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="cond-types" aria-labelledby="types-heading">
        <div className="cond-types__inner">
          <div className="cond-types__header">
            <div className="eyebrow-label">Brain Tumor Types We Treat</div>
            <h2 id="types-heading" className="titulo-seccion">Common brain tumors<br />in dogs and cats.</h2>
            <p className="cond-types__sub">
              Each tumor type responds differently to radiation. Dr. DiBernardi selects the protocol —
              SRS/SRT or CFRT — based on tumor type, size, location, and your pet&apos;s overall health.
            </p>
          </div>
          <div className="cond-types__grid">
            {[
              { href: '/meningioma', species: 'Dogs & Cats', name: 'Meningioma', desc: 'Most common intracranial tumor in cats. Arises from the meninges surrounding the brain. In cats, often surgically accessible; stereotactic radiation (SRS/SRT) is an effective option when surgery is not feasible.', tag: 'SRS/SRT · or surgery' },
              { href: '/glioma', species: 'Primarily Dogs', name: 'Glioma', desc: 'Includes astrocytomas and oligodendrogliomas. More common in brachycephalic breeds. Radiation is the primary treatment — surgery is often not feasible.', tag: 'Radiation as primary Tx' },
              { href: '/pituitary-tumors', species: 'Dogs & Cats', name: 'Pituitary Tumors', desc: 'Can cause neurological signs and hormonal disorders. Radiation targets the tumor directly, controlling both structural and hormonal effects.', tag: 'Hormonal + neurological control' },
              { href: '/spinal-tumors', species: 'Dogs & Cats', name: 'Spinal Tumors', desc: 'Intramedullary and extramedullary spinal tumors causing progressive weakness or paralysis. Radiation can relieve compression and restore function.', tag: 'Nerve preservation' },
              { href: null, species: 'Dogs & Cats', name: 'Brain Stem Tumors', desc: 'Tumors of the brainstem — among the most delicate to treat. Stereotactic RT allows precise targeting with minimal exposure to adjacent structures.', tag: 'Precision targeting critical' },
              { href: null, species: 'Ask us', name: 'Other brain tumors', desc: 'Every case is unique. Our Radiation Oncologist evaluates all intracranial tumor types and determines whether radiation therapy is appropriate.', tag: 'Case-by-case evaluation' },
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

      {/* ══════════════════════════════════════════════════════════════════════
          BRIDGE STATS
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">2<em>x</em></div>
          <div className="cond-bridge__label">Median survival with radiation vs. supportive care alone</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">60<em>%+</em></div>
          <div className="cond-bridge__label">Patients show neurological improvement after RT</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">1–<em>5</em></div>
          <div className="cond-bridge__label">Sessions with SRS/SRT — outpatient, same-day home</div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-treat" id="how-we-treat">
        <div className="cond-treat__left">
          <div className="eyebrow">Treatment at AARADONC</div>
          <h2 className="titulo-seccion">
            Precision radiation.<br /><em>Tailored to your pet.</em>
          </h2>
          <p className="bajada">
            Brain tumor treatment at AARADONC begins with a complete specialist review. Dr. DiBernardi
            personally evaluates every case — imaging, pathology, and clinical history — before
            recommending a protocol. Every treatment plan is built from scratch.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Our Varian TrueBeam® linear accelerator performs Cone Beam CT imaging before every session — confirming exact tumor position before delivering radiation. Daily image guidance is especially critical for brain tumors.' },
              { title: 'SRS/SRT for most brain tumors.', text: 'Stereotactic radiation is the preferred protocol for most brain tumors — 1–5 sessions, submillimeter accuracy, outpatient. Delivered with VMAT/RapidArc for shorter anesthesia time.' },
              { title: 'Quality assurance at every step.', text: 'Before each session, our team verifies positioning, dosimetry, and delivery accuracy. Precision is confirmed, not assumed.' },
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
            SRS/SRT is the <em>preferred protocol</em> for most brain tumors.
          </h3>
          {[
            { tag: 'Preferred — Most Brain Tumors', name: 'SRS / SRT', sessions: '1–5 sessions', note: 'Submillimeter precision · outpatient · same-day home', href: '/radiation-therapy#srs-srt', dark: true },
            { tag: 'Also Available', name: 'CFRT', sessions: '15–20 sessions', note: 'Curative intent · daily Mon–Fri · outpatient', href: '/radiation-therapy#cfrt', dark: false },
          ].map(({ tag, name, sessions, note, href, dark }) => (
            <Link key={name} href={href} style={{
              background: dark ? 'linear-gradient(135deg, #0D3B8E, #1a4fbf)' : '#fff',
              border: dark ? 'none' : '1.5px solid rgba(13,59,142,.1)',
              borderRadius: 16, padding: '28px 32px',
              display: 'flex', flexDirection: 'column', gap: 12,
              textDecoration: 'none', transition: 'transform .3s',
              boxShadow: dark ? '0 12px 40px rgba(13,59,142,.3)' : '0 4px 16px rgba(13,59,142,.07)',
            }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: dark ? 'rgba(126,200,227,.7)' : '#1A4FBF' }}>{tag}</div>
              <div style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontSize: 22, fontWeight: 800, color: dark ? '#fff' : '#0B1F44' }}>{name}</div>
              <div style={{ background: dark ? 'rgba(0,0,0,.15)' : '#EEF2FF', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: dark ? '#fff' : '#0B1F44' }}>{sessions}</div>
                <div style={{ fontSize: 12, color: dark ? 'rgba(255,255,255,.5)' : '#4A6080' }}>{note}</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: dark ? '#7EC8E3' : '#1A4FBF' }}>Learn more →</div>
            </Link>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════════════════
          CTA DUAL
      ══════════════════════════════════════════════════════════════════════ */}
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
            Refer a patient with<br /><em>a brain tumor.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate directly with
            your practice throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
