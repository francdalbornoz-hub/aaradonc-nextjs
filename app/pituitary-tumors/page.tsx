import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (definitive/
// stereotactic radiation for pituitary macroadenomas; survival and outcomes).
const REFERENCES: Reference[] = [
  { authors: 'Rapastella S, et al.', year: '2023', title: 'Effect of pituitary-dependent hypercortisolism on the survival of dogs treated with radiotherapy for pituitary macroadenomas', source: 'J Vet Intern Med' },
  { authors: 'Mayer MN, Treuil PL', year: '2007', title: 'Radiation therapy for pituitary tumors in the dog and cat', source: 'Can Vet J. 48:316' },
  { authors: 'Wormhoudt TL, et al.', year: '2018', title: 'Stereotactic radiation therapy for the treatment of functional pituitary adenomas', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeo('/pituitary-tumors')

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
    q: 'What is a pituitary tumor in dogs and cats?',
    a: 'Pituitary tumors arise from the pituitary gland at the base of the brain. They are classified as microadenomas (small, non-invasive) or macroadenomas (large, with neurological compression). In dogs, pituitary-dependent Cushing\'s disease (hyperadrenocorticism) is caused by a pituitary adenoma secreting excess ACTH. As the tumor grows larger — a macroadenoma — it compresses surrounding brain tissue and causes neurological signs in addition to hormonal effects.',
  },
  {
    q: 'Why is radiation used for pituitary tumors?',
    a: 'Radiation therapy targets the pituitary tumor directly, controlling both structural growth and hormonal overproduction. For macroadenomas causing neurological signs, radiation is often the primary treatment — reversing or halting neurological deficits while simultaneously controlling cortisol excess. For dogs with Cushing\'s disease from a macroadenoma, RT reduces ACTH secretion and improves hormonal control, often allowing a reduction in medical management.',
  },
  {
    q: 'What are the results of radiation for pituitary macroadenomas?',
    a: 'Dogs with pituitary macroadenomas treated with definitive radiation consistently achieve median survival times of 12–20 months, with many surviving 2 years or more. Neurological improvement is seen in the majority of treated dogs — often within weeks. Hormonal improvement (reduced cortisol, better Cushing\'s control) follows in most cases. Results in cats are similarly favorable.',
  },
  {
    q: 'Does my dog need to stop Cushing\'s medication during radiation?',
    a: 'Not necessarily. Medical management of Cushing\'s disease (trilostane, mitotane) is typically continued during radiation therapy. Dr. DiBernardi coordinates with your internal medicine specialist or primary veterinarian to optimize hormonal management throughout the radiation course. After treatment is complete, medication doses often require adjustment as the tumor shrinks.',
  },
  {
    q: 'How many sessions does radiation for a pituitary tumor require?',
    a: 'The protocol depends on tumor size and definition. SRS/SRT (1–5 sessions) is preferred for smaller, well-defined pituitary tumors. CFRT (15–20 sessions) is used for larger macroadenomas. Both are delivered under short general anesthesia with same-day discharge.',
  },
]

export default function PituitaryTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Pituitary tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Pituitary tumor radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/brain-tumors">Brain Tumors</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Pituitary Tumors</span>
          </nav>
          <div className="cond-hero__tag">Pituitary Tumor Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Radiation therapy<br />for pituitary tumors<br /><em>in pets — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Pituitary macroadenomas cause both neurological compression and hormonal overproduction.
            Radiation therapy targets the tumor directly — controlling growth, reversing neurological
            deficits, and improving hormonal regulation simultaneously.
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
            <div className="cond-hero__stat-val">12–<em>20</em>mo</div>
            <div className="cond-hero__stat-label">Median survival with definitive radiation for macroadenoma</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">2<em>x</em></div>
            <div className="cond-hero__stat-label">Goals addressed simultaneously — neurological + hormonal</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">1–<em>20</em></div>
            <div className="cond-hero__stat-label">Sessions — SRS/SRT or CFRT based on tumor size</div>
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
            <div className="cond-editorial__kicker-text">Understanding Pituitary Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            One tumor, two problems —<br /><em>radiation addresses both.</em>
          </h2>
          <p className="cond-editorial__lead">
            The pituitary gland sits at the base of the brain. Tumors here — whether microadenomas or
            macroadenomas — affect two systems simultaneously: they compress brain structures as they
            grow, and they produce excess hormones that disrupt the body&apos;s regulation. Radiation
            therapy is uniquely positioned to address both problems with a single, well-targeted treatment course.
          </p>
          <p className="cond-editorial__body">
            In dogs, pituitary tumors are the most common cause of Cushing&apos;s disease
            (hyperadrenocorticism) — a hormonal disorder characterized by increased thirst, urination,
            pot-belly appearance, hair loss, and skin changes. When the tumor grows large enough to
            become a macroadenoma, neurological signs emerge: seizures, behavioral changes, circling,
            visual deficits, and incoordination.
          </p>
          <h3 className="cond-editorial__h3">When to consider radiation</h3>
          <p className="cond-editorial__body">
            Dogs with pituitary-dependent Cushing&apos;s disease managed medically but showing
            neurological signs — or dogs with a confirmed pituitary macroadenoma on MRI — are
            candidates for radiation therapy. RT is also considered when medical management of
            Cushing&apos;s becomes difficult due to escalating tumor size. Early intervention —
            before significant neurological damage has occurred — consistently produces better outcomes.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Cushing&apos;s disease that is difficult to control medically</strong> may signal
              a growing pituitary macroadenoma. MRI evaluation is warranted when hormonal control
              becomes unpredictable — the tumor may be compressing the hypothalamus and affecting
              feedback regulation, making radiation the most effective next step.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What radiation achieves for pituitary tumors</h3>
          <p className="cond-editorial__body">
            Radiation controls local tumor growth, relieves intracranial compression, and reduces
            ACTH secretion — leading to improved hormonal control and neurological stabilization.
            Most dogs treated with definitive radiation for pituitary macroadenoma achieve median
            survivals of 12–20 months. Neurological improvement is typically seen within weeks of
            completing treatment, and hormonal improvement often allows reduction in medical management.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> coordinates radiation planning with
              your internal medicine specialist — ensuring hormonal management is optimized
              throughout the treatment course and adjusted appropriately as the tumor responds.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">12–<em>20</em>mo</div>
          <div className="cond-bridge__label">Median survival for pituitary macroadenoma with RT</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">Neuro<em> + Hormonal</em></div>
          <div className="cond-bridge__label">Both addressed simultaneously with targeted radiation</div>
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
            Precision targeting<br /><em>at the base of the brain.</em>
          </h2>
          <p className="bajada">
            Pituitary tumor treatment at AARADONC begins with a complete case review — MRI,
            hormonal workup, neurological status, and current medical management. Dr. DiBernardi
            designs every plan personally and coordinates with your primary team throughout.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT before every session confirms exact positioning for the pituitary target — a structure adjacent to the optic chiasm, hypothalamus, and brainstem, where precision is non-negotiable.' },
              { title: 'SRS/SRT for well-defined tumors.', text: '1–5 ablative sessions with VMAT/RapidArc deliver high-precision doses to the pituitary tumor while protecting adjacent critical structures. Outpatient — same-day home.' },
              { title: 'CFRT for large macroadenomas.', text: '15–20 fractionated sessions allow dose escalation for larger tumors while protecting surrounding brain tissue through dose fractionation.' },
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
            SRS/SRT or CFRT — chosen by <em>tumor size and imaging.</em>
          </h3>
          {[
            { tag: 'Preferred — Well-Defined Pituitary Tumors', name: 'SRS / SRT', sessions: '1–5 sessions', note: 'Submillimeter precision · outpatient · same-day home', href: '/radiation-therapy#srs-srt', dark: true },
            { tag: 'Standard — Large Macroadenomas', name: 'CFRT', sessions: '15–20 sessions', note: 'Fractionated dose · full tumor coverage · outpatient', href: '/radiation-therapy#cfrt', dark: false },
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
            Refer a patient with<br /><em>a pituitary tumor.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate radiation with
            your internal medicine team throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
