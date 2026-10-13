import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (adjuvant radiation
// after incomplete STS excision; local control with fractionated protocols).
const REFERENCES: Reference[] = [
  { authors: 'Kung MBJ, et al.', year: '2014', title: 'Hypofractionated radiation therapy for the treatment of microscopic canine soft tissue sarcoma', source: 'Vet Comp Oncol' },
  { authors: 'Mayer MN, Treuil PL, LaRue SM', year: '2009', title: 'Radiotherapy and surgery for feline soft tissue sarcoma', source: 'Vet Radiol Ultrasound' },
]

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/soft-tissue-sarcomas')

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


// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SoftTissueSarcomasPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="cond-hero" aria-label="Soft tissue sarcomas hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Soft tissue sarcoma radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/pet-cancer">Pet Cancer</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Soft Tissue Sarcomas</span>
          </nav>
          <div className="cond-hero__tag">Soft Tissue Sarcoma Treatment · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Soft tissue sarcoma<br />radiation therapy for<br /><em>pets in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Soft tissue sarcomas can extend beyond their visible borders. Surgery alone may leave
            microscopic disease behind, especially with narrow or incomplete margins. Adjuvant
            radiation after incomplete excision significantly reduces the risk
            of local recurrence.
          </p>
          <div className="cond-hero__ctas">
            <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          EDITORIAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" />
            <div className="cond-editorial__kicker-text">Understanding Soft Tissue Sarcomas &amp; Radiation in Dogs &amp; Cats</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            The tumor may look contained.<br /><em>Often, it isn&apos;t.</em>
          </h2>
          <p className="cond-editorial__lead">
            Soft tissue sarcomas are a group of malignant tumors arising from connective tissue —
            fat, muscle, fascia, nerves, and blood vessels. In dogs and cats, STS most commonly
            appears as a firm subcutaneous or deep mass on the trunk, limbs, or head and neck. Their
            defining characteristic: microscopic tumor cells can extend beyond the
            palpable margin.
          </p>
          <p className="cond-editorial__body">
            This biological behavior makes complete surgical excision technically demanding even for
            experienced surgeons — and at anatomically constrained sites like the distal limb,
            digits, face, or perineum, truly wide margins are often impossible.
          </p>
          <h3 className="cond-editorial__h3">Why adjuvant radiation changes outcomes</h3>
          <p className="cond-editorial__body">
            Post-surgical radiation targets the entire surgical bed — including the at-risk tissue
            surrounding it — delivering dose precisely to the zone where microscopic STS cells remain
            after excision. Adjuvant radiation after incomplete excision significantly reduces the
            risk of local recurrence.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              <strong>Timing is critical.</strong> Post-surgical radiation usually starts once the
              surgical wound has healed — early referral, ideally as soon as the pathology report is
              available, helps us plan it on time. If you know margins will be challenging,
              contact us before surgery.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Grade matters — but incomplete margins matter more</h3>
          <p className="cond-editorial__body">
            High-grade STS (grade II–III) carries elevated recurrence risk even with apparently clean
            margins, and adjuvant radiation is often recommended. For
            grade I STS with truly wide, clean margins, the benefit of radiation is more nuanced —
            Dr. DiBernardi reviews each case individually to determine whether the expected recurrence
            risk justifies a full radiation course. There is no universal answer: the decision is made
            with the full clinical picture in hand.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> reviews pathology, margin status,
              mitotic index, and all available imaging before recommending a protocol for every STS
              case. Pre-surgical consultation is available when radiation planning benefits from
              knowing the surgical approach in advance.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TUMOR TYPES
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          BRIDGE STATS
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          HOW WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}


      <References items={REFERENCES} />

      {/* ══════════════════════════════════════════════════════════════════════
          DUAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">For Pet Families</div>
          <div className="cond-cta__title">
            Incomplete margins?<br /><em>Don&apos;t wait.</em>
          </div>
          <p className="cond-cta__text">
            Post-surgical radiation for soft tissue sarcoma usually starts once the surgical wound
            has healed — early referral helps plan it on time. Request a consultation and Dr. DiBernardi will review the pathology personally.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians &amp; Surgeons</div>
          <div className="cond-cta__title">
            Refer an STS case —<br /><em>pre- or post-surgical.</em>
          </div>
          <p className="cond-cta__text">
            Send pathology, surgical notes, and imaging. We acknowledge all referrals promptly.
            Pre-surgical consultation available when RT
            planning benefits from coordinating with the surgical approach.
          </p>
          <Link href="/contact-referrers" className="cond-cta__btn-secondary">Submit a Referral →</Link>
        </div>
      </div>
    </>
  )
}
