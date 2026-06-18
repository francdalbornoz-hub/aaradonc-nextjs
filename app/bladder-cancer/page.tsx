import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'

const pageSeo = getPageSeo('/bladder-cancer')

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
    q: 'What is bladder cancer in dogs?',
    a: 'Transitional cell carcinoma (TCC), also called urothelial carcinoma, is the most common bladder tumor in dogs. It typically arises at the trigone — the neck of the bladder where the ureters enter — making complete surgical removal essentially impossible. TCC is locally invasive and has moderate metastatic potential, most commonly to lymph nodes and lungs.',
  },
  {
    q: 'Can bladder cancer in dogs be cured?',
    a: 'Complete cure is rarely achievable for TCC because of its trigone location, which prevents complete surgical resection. The goal of treatment is prolonged, high-quality survival. Dogs managed with NSAIDs (piroxicam or meloxicam), chemotherapy, and radiation in appropriate combinations regularly achieve median survival times of 6–12 months with good quality of life.',
  },
  {
    q: 'When is radiation used for bladder cancer?',
    a: 'Radiation is used palliatively for bladder TCC to reduce local tumor burden, relieve urinary obstruction, decrease hematuria, and improve quality of life. It can also be used to treat urethral or prostatic extension of TCC. Radiation is typically combined with systemic therapy — NSAIDs and/or chemotherapy — for the best outcomes.',
  },
  {
    q: 'What are the risks of radiation for bladder cancer?',
    a: 'Radiation to the bladder and trigone area requires careful treatment planning to limit dose to the adjacent rectum, urethra, and intestinal segments. Late radiation effects — including cystitis and urethral stricture — are possible and are minimized through precise dose delivery and fractionation. Dr. DiBernardi designs every plan with adjacent organ protection as a primary constraint.',
  },
  {
    q: 'Does my dog need a referral?',
    a: 'No referral is required. Pet owners can contact us directly. We coordinate with your primary care veterinarian and any oncologist managing systemic therapy throughout the process.',
  },
]

export default function BladderCancerPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Bladder cancer radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Bladder cancer radiation therapy for dogs — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Bladder Cancer</span>
          </nav>
          <div className="cond-hero__tag">Bladder Cancer · TCC / Urothelial Carcinoma · Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Bladder cancer radiation<br />therapy for dogs<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Transitional cell carcinoma (TCC) is the most common bladder tumor in dogs. Surgery
            cannot remove it completely. Radiation therapy — combined with systemic therapy —
            reduces local tumor burden, relieves urinary symptoms, and meaningfully extends
            quality of life.
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
            <div className="cond-hero__stat-val">6–<em>12</em>mo</div>
            <div className="cond-hero__stat-label">Median survival with multimodal treatment</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">Trigone<em> loc.</em></div>
            <div className="cond-hero__stat-label">Most TCC arises here — making surgery non-curative</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">3–<em>5</em></div>
            <div className="cond-hero__stat-label">Sessions with palliative radiation protocols</div>
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
            <div className="cond-editorial__kicker-text">Understanding Bladder Cancer in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            When surgery cannot cure it,<br /><em>multimodal therapy extends life.</em>
          </h2>
          <p className="cond-editorial__lead">
            Transitional cell carcinoma arises almost always at the trigone of the bladder — the
            region where the ureters and urethra converge. Complete surgical resection at this
            location is essentially impossible without removing the entire bladder, which is rarely
            feasible. The goal of treatment shifts accordingly: maximize tumor control, relieve
            urinary symptoms, and extend quality of life for as long as possible.
          </p>
          <p className="cond-editorial__body">
            The most common signs — blood in the urine (hematuria), frequent urination, straining
            to urinate, and recurrent urinary tract infections that don&apos;t respond to antibiotics —
            should prompt imaging evaluation. Ultrasound typically identifies a bladder mass; CT
            provides full staging including lymph node involvement and distant metastasis.
          </p>
          <h3 className="cond-editorial__h3">The role of radiation in bladder TCC</h3>
          <p className="cond-editorial__body">
            Palliative radiation therapy for bladder TCC reduces local tumor volume, relieves
            urinary obstruction, decreases hematuria, and can prevent ureteral obstruction that
            would otherwise cause kidney failure. Radiation is typically combined with piroxicam
            or meloxicam (NSAIDs, which have documented anti-tumor activity against TCC) and
            sometimes with vinblastine or mitoxantrone chemotherapy.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Recurrent urinary tract infections in dogs</strong> that don&apos;t resolve
              with appropriate antibiotics should raise suspicion for TCC. The tumor disrupts normal
              bladder mucosa and creates conditions that mimic UTI — causing many TCC cases to go
              undiagnosed for months before the mass is identified.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Precision planning for a challenging location</h3>
          <p className="cond-editorial__body">
            Radiation to the bladder trigone must spare adjacent structures — rectum, urethra, small
            intestine — while delivering therapeutic doses to the tumor. This requires precise CT
            simulation, conformal treatment planning, and careful dose-volume constraint management.
            At AARADONC, every bladder TCC plan is designed with adjacent organ protection as a
            primary objective.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally designs every bladder
              cancer treatment plan — integrating radiation with systemic therapy and coordinating
              with your oncologist and primary vet throughout treatment.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">6–<em>12</em>mo</div>
          <div className="cond-bridge__label">Median survival with multimodal therapy (RT + systemic)</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">3–<em>5</em></div>
          <div className="cond-bridge__label">Sessions with palliative radiation protocols</div>
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
            Precision targeting<br /><em>for a difficult location.</em>
          </h2>
          <p className="bajada">
            Bladder TCC treatment at AARADONC begins with a complete staging review — CT of abdomen
            and thorax, urinalysis, and systemic treatment history. Dr. DiBernardi designs a
            conformal radiation plan that maximizes tumor dose while strictly limiting exposure to
            adjacent bowel, rectum, and urethra.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT imaging before every session confirms bladder and tumor position — critical for this anatomical location where adjacent organ protection is the primary constraint.' },
              { title: 'Palliative radiation as the primary RT approach.', text: '3–5 session protocols reduce tumor burden, relieve obstruction, and decrease hematuria — integrated with NSAID and chemotherapy as indicated.' },
              { title: 'Multimodal coordination.', text: 'Dr. DiBernardi coordinates radiation with your oncologist\'s systemic treatment plan — NSAIDs, vinblastine, or mitoxantrone — for the best combined outcome.' },
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
            Palliative radiation — <em>quality of life is the goal.</em>
          </h3>
          {[
            { tag: 'Primary — Tumor Control & QoL', name: 'Palliative Radiation', sessions: '3–5 sessions', note: 'Tumor reduction · obstruction relief · outpatient', href: '/radiation-therapy/#palliative', dark: true },
            { tag: 'Combined with Systemic Therapy', name: 'CFRT (select cases)', sessions: '16–20 sessions', note: 'Higher cumulative dose · combined with chemo/NSAIDs', href: '/radiation-therapy/#cfrt', dark: false },
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
            Refer a patient with<br /><em>bladder cancer.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive same-day acknowledgment. We coordinate radiation with
            your systemic oncology plan throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
