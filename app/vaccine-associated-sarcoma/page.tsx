import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (feline injection-
// site / vaccine-associated sarcoma treated with surgery + radiation).
const REFERENCES: Reference[] = [
  { authors: 'Cronin K, et al.', year: '1998', title: 'Radiation therapy and surgery for fibrosarcoma in 33 cats', source: 'Vet Radiol Ultrasound' },
  { authors: 'Mayer MN, Treuil PL, LaRue SM', year: '2009', title: 'Radiotherapy and surgery for feline soft tissue sarcoma', source: 'Vet Radiol Ultrasound' },
]

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
            multimodal standard of care that significantly reduces the risk of recurrence.
          </p>
          <div className="cond-hero__ctas">
            <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" aria-hidden="true" />
            <div className="cond-editorial__kicker-text">Understanding Vaccine-Associated Sarcoma in Cats</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Surgery and radiation,<br /><em>together.</em>
          </h2>
          <p className="cond-editorial__lead">
            Vaccine-associated sarcoma infiltrates beyond its visible margins — invading muscle,
            fascia, and adjacent tissue far beyond what can be seen or palpated. This is why surgery
            alone is often followed by recurrence. Radiation treats the microscopic disease beyond
            the surgical margins, reducing the risk of local recurrence.
          </p>
          <p className="cond-editorial__body">
            VAS is associated with an inflammatory response at injection sites — most commonly
            vaccines, and rarely other injected materials. The resulting sarcoma is biologically aggressive:
            it grows rapidly, extends along fascial planes, and can reach surgical margins even with
            aggressive resection. Current guidelines recommend wide surgical margins, which are
            often difficult to achieve without significant morbidity.
          </p>
          <h3 className="cond-editorial__h3">Pre-operative vs. post-operative radiation</h3>
          <p className="cond-editorial__body">
            Neoadjuvant (pre-operative) radiation reduces tumor volume before surgery, potentially
            allowing wider margins and sterilizing the invasive periphery. Post-operative (adjuvant)
            radiation therapy targets the surgical bed where microscopic residual disease persists. Both
            approaches are used; the sequence depends on tumor size, location and surgical planning.
            Dr. DiBernardi discusses the optimal sequence for each case
            individually.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Any lump at a prior injection site</strong> in a cat should be evaluated
              promptly. The &quot;3-2-1 rule&quot;: any mass that persists for more than 3 months,
              is larger than 2 cm, or is growing 4 weeks after injection should be biopsied
              immediately. Early diagnosis — before the tumor becomes unresectable — is key to a better outcome.
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



      <References items={REFERENCES} />

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">For Pet Families</div>
          <div className="cond-cta__title">
            Get a specialist review.<br /><em>Prompt response.</em>
          </div>
          <p className="cond-cta__text">
            Dr. DiBernardi personally reviews every case. Tell us about your cat and we&apos;ll
            respond promptly with a clear recommendation.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer a patient with<br /><em>vaccine-associated sarcoma.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate radiation with
            your surgical team and provide full written reports throughout treatment.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
