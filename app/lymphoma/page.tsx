import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (nasal lymphoma in
// cats is highly radiation-responsive; survival with radiation ± chemotherapy).
const REFERENCES: Reference[] = [
  { authors: 'Haney SM, et al.', year: '2009', title: 'Survival analysis of 97 cats with nasal lymphoma: a multi-institutional retrospective study (1986–2006)', source: 'J Vet Intern Med' },
  { authors: 'Reczynska AI, LaRue SM, et al.', year: '2022', title: 'Outcome of stereotactic body radiation for treatment of nasal and nasopharyngeal lymphoma in 32 cats', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeo('/lymphoma')

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

export default function LymphomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Lymphoma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-patient.jpg"
            alt="Lymphoma radiation therapy for dogs and cats — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/pet-cancer">Pet Cancer</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Lymphoma</span>
          </nav>
          <div className="cond-hero__tag">Lymphoma Radiation Therapy · Dogs &amp; Cats · Florida</div>
          <h1 className="cond-hero__h1">
            Lymphoma radiation<br />therapy for pets<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Lymphoma is the most common cancer in cats and one of the most common in dogs.
            Radiation plays a critical role in localized forms — particularly nasal, mediastinal,
            and spinal lymphoma — providing targeted local control.
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
            <div className="cond-editorial__kicker-text">Understanding Lymphoma in Pets</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Targeted local control<br /><em>for localized lymphoma.</em>
          </h2>
          <p className="cond-editorial__lead">
            Lymphoma is a systemic disease — but some forms are highly localized. For these,
            radiation provides precise local control that complements chemotherapy. Nasal lymphoma in cats, mediastinal masses causing breathing difficulty,
            and spinal lymphoma compressing the cord are all situations where radiation changes
            the outcome.
          </p>
          <p className="cond-editorial__body">
            The biology of lymphoma varies enormously by anatomic site, cell type (B-cell vs.
            T-cell), and grade. High-grade multicentric lymphoma requires chemotherapy as the
            primary treatment. But localized anatomic lymphoma — confined to the nasal cavity,
            mediastinum, spine, or skin — may respond well to radiation, alone or with chemotherapy.
          </p>
          <h3 className="cond-editorial__h3">Nasal lymphoma in cats — a standout case</h3>
          <p className="cond-editorial__body">
            Nasal lymphoma is the most common nasal tumor in cats and one of the most
            radiation-responsive cancers in veterinary medicine. With radiation — alone or combined
            with chlorambucil or CHOP-based chemotherapy — median survival of around 1–1.5 years has
            been reported. Many cats maintain excellent quality of life throughout.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Not all lymphoma is the same.</strong> Before any treatment recommendation,
              Dr. DiBernardi reviews the full workup — histopathology, immunophenotyping, anatomic
              site, staging — to determine whether and how radiation should be integrated into the
              overall treatment plan.
            </div>
          </div>
          <h3 className="cond-editorial__h3">When radiation changes the course</h3>
          <p className="cond-editorial__body">
            For mediastinal lymphoma causing respiratory compromise, radiation can reduce tumor
            bulk quickly. For spinal lymphoma causing
            progressive paresis, radiation can decompress the spinal cord and allow neurological
            recovery. These are situations where radiation plays a central role, not just a complementary one.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> holds dual board certification in
              radiation oncology and medical oncology — meaning she evaluates the full systemic
              and local picture before any treatment recommendation.
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
            Refer a patient with<br /><em>lymphoma.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate directly with
            your practice and any oncology team managing the systemic component.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
