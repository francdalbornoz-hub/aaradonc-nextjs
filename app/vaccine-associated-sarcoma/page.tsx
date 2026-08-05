import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'

const pageSeo = getPageSeo('/vaccine-associated-sarcoma')

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
    q: 'What is vaccine-associated sarcoma in cats?',
    a: 'Vaccine-associated sarcoma (VAS), also called feline injection-site sarcoma (FISS), is a locally aggressive malignant tumor that develops at the site of prior injections — most commonly vaccines, but also microchips and long-acting injectable medications. It is a serious diagnosis: VAS grows rapidly, infiltrates deeply into surrounding tissue, and recurs at high rates after surgery alone.',
  },
  {
    q: 'Why is radiation an essential part of treatment?',
    a: 'VAS is notoriously difficult to remove with adequate margins because it infiltrates far beyond its visible boundaries — often invading muscle, fascia, and adjacent bone. Surgery alone has local recurrence rates of 50–90%. Adding radiation therapy — pre-operatively to reduce tumor size and sterilize margins, or post-operatively to treat the surgical bed — significantly reduces recurrence rates and extends disease-free survival.',
  },
  {
    q: 'Should radiation be given before or after surgery?',
    a: 'Both approaches are used and have evidence supporting them. Pre-operative (neoadjuvant) radiation reduces tumor volume before surgery, potentially allowing wider resection margins and sterilizing the periphery. Post-operative (adjuvant) CFRT targets the surgical bed where microscopic disease remains. The sequencing depends on tumor size, location, and the surgical plan — Dr. DiBernardi discusses this specifically for each case.',
  },
  {
    q: 'What survival times can we expect for VAS?',
    a: 'With aggressive multimodal treatment — surgery plus radiation — median survival times of 12–24 months are reported in cats with VAS without evidence of metastasis. Without radiation, local recurrence occurs in the majority of cats within 6 months. Early intervention before the tumor becomes very large or unresectable consistently produces the best outcomes.',
  },
  {
    q: 'Does VAS metastasize?',
    a: 'Yes. VAS has a metastatic rate of approximately 20–25%, most commonly to the lungs and regional lymph nodes. CT of the thorax is standard before treatment to screen for pulmonary metastasis. The combination of aggressive local treatment (surgery + radiation) and systemic therapy (chemotherapy in select cases) is increasingly used in cats with high-risk VAS.',
  },
]

export default function VaccineAssociatedSarcomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Vaccine-associated sarcoma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-patient.jpg"
            alt="Vaccine-associated sarcoma radiation therapy for cats — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/cat-cancer">Cat Cancer</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Vaccine-Associated Sarcoma</span>
          </nav>
          <div className="cond-hero__tag">Vaccine-Associated Sarcoma · FISS · Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Vaccine-associated sarcoma<br />radiation therapy for cats<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Feline injection-site sarcoma is one of the most challenging cancers in cats — locally
            aggressive, prone to recurrence after surgery alone. Radiation is a critical part of the
            multimodal standard of care that dramatically reduces recurrence rates.
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
            <div className="cond-hero__stat-val">50–<em>90</em>%</div>
            <div className="cond-hero__stat-label">Local recurrence rate with surgery alone — without radiation</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">12–<em>24</em>mo</div>
            <div className="cond-hero__stat-label">Median survival with surgery + radiation (no metastasis)</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">16–<em>20</em></div>
            <div className="cond-hero__stat-label">Sessions with adjuvant CFRT — outpatient</div>
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
            <div className="cond-editorial__kicker-text">Understanding Vaccine-Associated Sarcoma in Cats</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Surgery alone is not enough.<br /><em>Radiation changes the outcome.</em>
          </h2>
          <p className="cond-editorial__lead">
            Vaccine-associated sarcoma infiltrates beyond its visible margins — invading muscle,
            fascia, and adjacent tissue far beyond what can be seen or palpated. This is why surgery
            alone fails so consistently. Radiation sterilizes the margins that surgery cannot take,
            dramatically reducing the local recurrence rate that would otherwise occur within months.
          </p>
          <p className="cond-editorial__body">
            VAS is triggered by an inflammatory response to injected materials — vaccine adjuvants,
            microchips, long-acting medications. The resulting sarcoma is biologically aggressive:
            it grows rapidly, extends along fascial planes, and can reach surgical margins even with
            aggressive resection. The Vaccine-Associated Feline Sarcoma Task Force established
            guidelines recommending 3 cm lateral and one fascial plane deep as minimum margins —
            guidelines that are rarely achievable without significant morbidity.
          </p>
          <h3 className="cond-editorial__h3">Pre-operative vs. post-operative radiation</h3>
          <p className="cond-editorial__body">
            Neoadjuvant (pre-operative) radiation reduces tumor volume before surgery, potentially
            allowing wider margins and sterilizing the invasive periphery. Post-operative (adjuvant)
            CFRT targets the surgical bed where microscopic residual disease persists. Both
            approaches are supported by evidence, and the choice depends on tumor size, location,
            and surgical planning. Dr. DiBernardi discusses the optimal sequence for each case
            individually.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Any lump at a prior injection site</strong> in a cat should be evaluated
              promptly. The &quot;3-2-1 rule&quot;: any mass that persists for more than 3 months,
              is larger than 2 cm, or is growing 4 weeks after injection should be biopsied
              immediately. Early diagnosis — before the tumor becomes unresectable — is the most
              important factor in outcome.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What CT reveals — and why it matters</h3>
          <p className="cond-editorial__body">
            CT of the primary site and thorax is essential before treatment. CT defines the true
            extent of tumor infiltration — often revealing invasion far beyond palpable boundaries —
            and screens for pulmonary metastasis. This information directly impacts surgical planning,
            radiation field design, and prognosis.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every VAS case —
              CT imaging, biopsy results, and surgical plans — to design a radiation strategy that
              integrates with surgery for the best possible local control.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">50–<em>90</em>%</div>
          <div className="cond-bridge__label">Local recurrence with surgery alone — radiation dramatically reduces this</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">12–<em>24</em>mo</div>
          <div className="cond-bridge__label">Median survival with multimodal treatment (no metastasis)</div>
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
            Radiation as part of<br /><em>the multimodal standard.</em>
          </h2>
          <p className="bajada">
            VAS treatment at AARADONC begins with CT staging and a detailed review of the biopsy.
            Dr. DiBernardi coordinates with the surgical team to plan radiation that maximizes local
            control — whether pre- or post-operatively — and integrates systemic therapy when indicated.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'CT staging before any treatment.', text: 'CT of the primary site and thorax defines true tumor extent and screens for pulmonary metastasis — essential for surgical and radiation planning.' },
              { title: 'Adjuvant CFRT after incomplete excision.', text: '16–20 daily sessions target the surgical bed, dramatically reducing the recurrence rate that surgery alone cannot prevent.' },
              { title: 'Neoadjuvant radiation when appropriate.', text: 'Pre-operative radiation can reduce tumor volume before surgery — potentially allowing wider margins and sterilizing the invasive periphery.' },
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
            CFRT is the <em>standard for VAS.</em>
          </h3>
          {[
            { tag: 'Primary — Adjuvant or Neoadjuvant', name: 'CFRT', sessions: '16–20 sessions', note: 'Daily Mon–Fri · outpatient · same-day home', href: '/radiation-therapy/#cfrt', dark: true },
            { tag: 'Inoperable or Recurrent Disease', name: 'Palliative Radiation', sessions: '3–5 sessions', note: 'Tumor control · quality of life · outpatient', href: '/radiation-therapy/#palliative', dark: false },
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

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">For Pet Families</div>
          <div className="cond-cta__title">
            Get a specialist review.<br /><em>Same-day response.</em>
          </div>
          <p className="cond-cta__text">
            Dr. DiBernardi personally reviews every case. Tell us about your cat and we&apos;ll
            respond the same day with a clear, honest recommendation.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer a patient with<br /><em>vaccine-associated sarcoma.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive same-day acknowledgment. We coordinate radiation with
            your surgical team and provide full written reports throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
