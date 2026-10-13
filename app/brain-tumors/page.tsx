import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
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
          </div>
        </div>
      </section>

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
              achieve the best long-term outcomes. When surgery is not feasible, radiation therapy
              offers an effective alternative for local control and quality of life. Surgery
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
              prognosis, and clear communication and guidance. Our goal is straightforward: precise
              treatment, thoughtful planning, and the best possible quality of life for your family.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RELATED TUMOR TYPES
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          BRIDGE STATS
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          HOW WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}


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
            respond promptly with a clear recommendation.
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
