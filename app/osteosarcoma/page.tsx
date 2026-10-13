import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/osteosarcoma')

// Peer-reviewed sources supporting the claims on this page (>90% palliative
// response, 3–5 session protocol, survival ranges). Verified against the
// clinic's approved literature base.
const REFERENCES: Reference[] = [
  { authors: 'Coomer AR, et al.', year: '2009', title: 'Radiation therapy for canine appendicular osteosarcoma', source: 'Vet Comp Oncol' },
  { authors: 'Martin TW, Griffin L, Custis J, et al.', year: '2021', title: 'Outcome and prognosis for canine appendicular osteosarcoma treated with stereotactic body radiation therapy in 123 dogs', source: 'Vet Comp Oncol' },
  { authors: 'Ramirez O III, Dodge RK, Page RL, et al.', year: '1999', title: 'Palliative radiotherapy of appendicular osteosarcoma in 95 dogs', source: 'Vet Radiol Ultrasound. 40(5):517' },
  { authors: 'Duffy ME, Anderson CL, Choy K, Fidel JL', year: '2018', title: 'Metronomic administration of lomustine following palliative radiation therapy for appendicular osteosarcoma in dogs', source: 'Can Vet J. 59:136' },
  { authors: 'Swift KE, LaRue SM', year: '2017', title: 'Outcome of 9 dogs treated with stereotactic radiation therapy for primary or metastatic vertebral osteosarcoma', source: 'Vet Comp Oncol' },
]

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

export default function OsteosarcomaPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="cond-hero" aria-label="Osteosarcoma hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Osteosarcoma treatment for dogs and cats — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Osteosarcoma</span>
          </nav>
          <div className="cond-hero__tag">Osteosarcoma Treatment · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Osteosarcoma<br />radiation therapy<br /><em>for pets in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Osteosarcoma is the most common primary bone tumor in dogs. When surgery is not an
            option — or quality of life is the priority — radiation therapy can deliver meaningful pain
            relief and better quality of life without amputation.
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
            <div className="cond-editorial__kicker-text">Understanding Osteosarcoma in Dogs &amp; Cats</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Osteosarcoma: the most common bone tumor in pets —{' '}
            <em>and radiation helps.</em>
          </h2>
          <p className="cond-editorial__lead">
            Osteosarcoma (OSA) accounts for over 85% of primary bone tumors in dogs. It is painful,
            locally destructive, and fast-moving. Radiation therapy — palliative or curative-intent —
            offers real, measurable improvement in pain and quality of life when surgery is not the
            right path.
          </p>
          <p className="cond-editorial__body">
            In dogs, osteosarcoma most commonly affects the long bones — distal radius, proximal
            humerus, distal femur, and proximal tibia — particularly in large and giant breeds. The
            tumor destroys bone from within, causing escalating pain as the cortex weakens.
            Osteosarcoma also occurs in cats, where appendicular OSA tends to carry a better prognosis
            than in dogs. Axial osteosarcoma — affecting the skull, spine, ribs, or pelvis — presents
            unique challenges in both species.
          </p>
          <h3 className="cond-editorial__h3">Osteosarcoma treatment without amputation</h3>
          <p className="cond-editorial__body">
            Amputation with chemotherapy remains the standard of care for appendicular osteosarcoma in
            dogs when feasible, offering median survival of 10–12 months. But not every pet is a
            surgical candidate — due to age, concurrent orthopedic disease, body condition, or owner
            preference. For these cases, palliative radiation combined with analgesics and
            bisphosphonates is an effective non-surgical option for osteosarcoma pain management.
          </p>
          <p className="cond-editorial__body">
            Palliative radiation for osteosarcoma reduces tumor-associated inflammation and slows local
            bone destruction — the primary drivers of pain. Most dogs show meaningful pain relief,
            often within the first few sessions. This is not curative, but
            the improvement in comfort and mobility is clinically significant and well-documented.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              <strong>Palliative radiation for osteosarcoma</strong> is delivered as a short
              outpatient course — a schedule that minimizes total anesthetic exposure
              and disruption to your pet&apos;s routine. Most pets remain comfortable and mobile
              throughout treatment.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Axial osteosarcoma — when radiation therapy is the primary treatment</h3>
          <p className="cond-editorial__body">
            For osteosarcoma of the skull, spine, ribs, or pelvis, surgery is rarely feasible.
            Radiation — both palliative and sometimes curative-intent radiation therapy — becomes the primary
            treatment modality. Axial osteosarcoma cases at AARADONC are evaluated individually, with
            protocol selection based on tumor location, extent, and patient status.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> works closely with your veterinarian on
              a coordinated osteosarcoma management plan — combining radiation with the analgesic and
              bisphosphonate protocol already in place for your pet.
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
            Your pet doesn&apos;t have to live<br /><em>with osteosarcoma pain.</em>
          </div>
          <p className="cond-cta__text">
            Palliative radiation for osteosarcoma can make a real difference in your dog&apos;s or
            cat&apos;s comfort and mobility. Request a consultation and Dr. DiBernardi
            will review the case personally.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians</div>
          <div className="cond-cta__title">
            Refer an osteosarcoma<br /><em>case today.</em>
          </div>
          <p className="cond-cta__text">
            We acknowledge all referrals promptly and coordinate directly with your existing pain
            management protocol.
          </p>
          <Link href="/contact-referrers" className="cond-cta__btn-secondary">Submit a Referral →</Link>
        </div>
      </div>
    </>
  )
}
