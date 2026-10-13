import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (definitive/
// stereotactic radiation for pituitary macroadenomas; survival and outcomes).
const REFERENCES: Reference[] = [
  { authors: 'Rapastella S, et al.', year: '2023', title: 'Effect of pituitary-dependent hypercortisolism on the survival of dogs treated with radiotherapy for pituitary macroadenomas', source: 'J Vet Intern Med' },
  { authors: 'Mayer MN, Treuil PL', year: '2007', title: 'Radiation therapy for pituitary tumors in the dog and cat', source: 'Can Vet J. 48:316' },
  { authors: 'Wormhoudt TL, et al.', year: '2018', title: 'Stereotactic radiation therapy for the treatment of functional pituitary adenomas associated with feline acromegaly', source: 'J Vet Intern Med' },
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
            Radiation therapy targets the tumor directly — controlling its growth and the neurological
            signs it causes.
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
            <div className="cond-editorial__kicker-text">Understanding Pituitary Tumors in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            One tumor, two problems —<br /><em>radiation targets the tumor.</em>
          </h2>
          <p className="cond-editorial__lead">
            The pituitary gland sits at the base of the brain. Tumors here — whether microadenomas or
            macroadenomas — affect two systems simultaneously: they compress brain structures as they
            grow, and they produce excess hormones that disrupt the body&apos;s regulation. Radiation
            targets the tumor to control its growth and the neurological signs it causes.
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
            before significant neurological damage has occurred — produces better outcomes.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Cushing&apos;s disease that is difficult to control medically</strong> may signal
              a growing pituitary macroadenoma. MRI evaluation is warranted when hormonal control
              becomes unpredictable — the tumor may be compressing the hypothalamus and affecting
              feedback regulation, and radiation may be the next step.
            </div>
          </div>
          <h3 className="cond-editorial__h3">What radiation achieves for pituitary tumors</h3>
          <p className="cond-editorial__body">
            Radiation controls local tumor growth and relieves intracranial compression. Its effect
            on hormone levels varies between patients, so medical management of Cushing&apos;s disease
            usually continues and is adjusted over time. Median survival times of 12–20 months have
            been reported in dogs treated with radiation for pituitary macroadenoma. Many dogs show
            neurological improvement after treatment.
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



      <References items={REFERENCES} />

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
