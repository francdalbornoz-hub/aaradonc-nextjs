import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (melanoma is
// radiosensitive to large-fraction protocols; survival by stage with RT ±
// immunotherapy/chemotherapy).
const REFERENCES: Reference[] = [
  { authors: 'Baja AJ, et al.', year: '2022', title: 'A retrospective study of 101 dogs with oral melanoma treated with a weekly or biweekly 6 Gy × 6 radiotherapy protocol', source: 'Vet Comp Oncol' },
  { authors: 'Cancedda S, et al.', year: '2014', title: 'Efficacy and side effects of radiation therapy in comparison with radiation therapy and temozolomide in the treatment of measurable oral canine melanoma', source: 'Vet Comp Oncol' },
  { authors: 'Cunha SC, et al.', year: '2018', title: 'Radiation therapy for oral melanoma in dogs: a retrospective study', source: 'Ciência Rural. 48(4)' },
  { authors: 'Bateman KE, et al.', year: '1994', title: 'Radiation therapy for the treatment of canine oral melanoma', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeo('/oral-melanoma')

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
    q: 'What is oral melanoma in dogs?',
    a: 'Oral melanoma is the most common malignant oral tumor in dogs. It arises from melanocytes in the oral mucosa and tends to behave aggressively — with rapid local growth, bone invasion, and a high rate of lymph node and distant metastasis. Despite its aggressive nature, local control with radiation therapy combined with immunotherapy has significantly improved outcomes.',
  },
  {
    q: 'Why is radiation recommended for oral melanoma?',
    a: 'Oral melanoma is radiosensitive — it responds well to large-fraction radiation protocols. Radiation is typically used to achieve local control while immunotherapy (melanoma vaccine) addresses systemic disease. This multimodal approach has produced the most meaningful survival improvements in the veterinary literature.',
  },
  {
    q: 'How many radiation sessions are needed?',
    a: 'Palliative hypofractionated protocols (4–6 large fractions) are commonly used for oral melanoma and achieve excellent local control with fewer anesthetic events. Definitive CFRT (16–20 sessions) may be used in select cases. Dr. DiBernardi determines the appropriate protocol based on tumor stage, extent of bone involvement, and your goals.',
  },
  {
    q: 'What survival time can we expect?',
    a: 'Median survival for dogs with oral melanoma treated with radiation and immunotherapy ranges from 10–14 months for Stage I/II disease. Stage III (lymph node positive) carries a shorter median survival but radiation still provides meaningful local control. Early treatment — before significant bone invasion or distant metastasis — consistently produces better outcomes.',
  },
  {
    q: 'Does staging matter for melanoma treatment?',
    a: 'Yes. WHO staging (tumor size, lymph node involvement, distant metastasis) significantly influences prognosis and treatment recommendations. CT of the skull and thorax, and fine-needle aspirate of regional lymph nodes, are standard before starting radiation. Dr. DiBernardi reviews all staging information before finalizing the plan.',
  },
]

export default function OralMelanomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Oral melanoma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Oral melanoma radiation therapy for dogs — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Oral Melanoma</span>
          </nav>
          <div className="cond-hero__tag">Oral Melanoma Radiation Therapy · Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Radiation therapy<br />for oral melanoma<br /><em>in dogs — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Oral melanoma is the most common malignant oral tumor in dogs. Radiation therapy achieves
            excellent local control — particularly when combined with immunotherapy to address the
            systemic component that surgery alone cannot reach.
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
            <div className="cond-hero__stat-label">Most common malignant oral tumor in dogs</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">10–<em>14</em>mo</div>
            <div className="cond-hero__stat-label">Median survival with radiation + immunotherapy (Stage I/II)</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">4–<em>6</em></div>
            <div className="cond-hero__stat-label">Sessions with hypofractionated palliative protocol</div>
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
            <div className="cond-editorial__kicker-text">Understanding Oral Melanoma in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Local control with radiation.<br /><em>Systemic control with immunotherapy.</em>
          </h2>
          <p className="cond-editorial__lead">
            Oral melanoma grows quickly and metastasizes early — to regional lymph nodes and distant
            sites including the lungs. This is why local treatment alone is rarely enough. Radiation
            controls the primary tumor; immunotherapy addresses microscopic systemic disease.
            Together, this multimodal approach has produced the most meaningful survival improvements
            documented in veterinary oncology for this diagnosis.
          </p>
          <p className="cond-editorial__body">
            Oral melanoma arises most commonly from the gingiva, hard palate, and labial mucosa.
            It grows rapidly and invades adjacent bone in most cases. The first warning signs —
            facial swelling, difficulty eating, halitosis, or bloody saliva — often appear when
            the tumor is already at a significant size. Rapid progression means that staging and
            treatment should begin as soon as the diagnosis is confirmed.
          </p>
          <h3 className="cond-editorial__h3">Why radiation therapy is highly effective for melanoma</h3>
          <p className="cond-editorial__body">
            Unlike some tumors that require daily low-dose fractionation to respond, melanoma is
            particularly sensitive to large-fraction hypofractionated radiation. This means
            meaningful local control can often be achieved in 4–6 sessions rather than 16–20 —
            fewer anesthetic events and a shorter treatment window, without compromising efficacy.
            Definitive CFRT is also an option and may be preferred in select cases.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Stage matters.</strong> CT imaging of the skull and thorax, plus fine-needle
              aspirate of regional lymph nodes, is standard before treatment. Staging determines
              prognosis and informs whether immunotherapy should be added to the radiation plan.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What to expect from treatment</h3>
          <p className="cond-editorial__body">
            Radiation for oral melanoma is delivered under short general anesthesia and the dog
            goes home the same day. Most patients tolerate treatment well. Acute oral mucosal
            reactions are the most common side effect and are temporary. Tumor response — visible
            shrinkage and reduced discomfort — typically becomes apparent within weeks of completing
            the radiation course.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally designs every oral
              melanoma treatment plan — reviewing staging CT, histopathology, and clinical history
              before selecting the protocol. Every plan is built for that specific patient.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">10–<em>14</em>mo</div>
          <div className="cond-bridge__label">Median survival with radiation + immunotherapy (Stage I/II)</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">4–<em>6</em></div>
          <div className="cond-bridge__label">Sessions with hypofractionated palliative protocol</div>
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
            Local control starts<br /><em>with radiation.</em>
          </h2>
          <p className="bajada">
            Oral melanoma treatment at AARADONC begins with complete staging — CT skull and thorax,
            lymph node evaluation — followed by a personalized protocol designed by Dr. DiBernardi.
            Every plan accounts for stage, tumor extent, and your goals.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Complete staging before treatment.', text: 'CT imaging and lymph node evaluation define stage, guide target volume, and determine whether immunotherapy should be combined with radiation.' },
              { title: 'Hypofractionated palliative protocol.', text: 'Melanoma responds well to large-fraction radiation — 4–6 sessions achieve excellent local control with fewer anesthetic events.' },
              { title: 'Definitive CFRT when appropriate.', text: 'For select cases, 16–20 session CFRT provides maximum local tumor control with precise fractionation.' },
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
            Palliative RT is the <em>most common</em> approach for oral melanoma.
          </h3>
          {[
            { tag: 'Primary — Local Control', name: 'Palliative Radiation', sessions: '4–6 sessions', note: 'Hypofractionated · outpatient · same-day home', href: '/radiation-therapy/#palliative', dark: true },
            { tag: 'Also Available — Select Cases', name: 'CFRT', sessions: '16–20 sessions', note: 'Curative intent · daily Mon–Fri · outpatient', href: '/radiation-therapy/#cfrt', dark: false },
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
            Dr. DiBernardi personally reviews every case. Tell us about your dog and we&apos;ll
            respond promptly with a clear, honest recommendation.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer a patient with<br /><em>oral melanoma.</em>
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
