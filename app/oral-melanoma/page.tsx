import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (melanoma is
// radiosensitive to large-fraction protocols; survival by stage with RT ±
// chemotherapy).
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
            Oral melanoma is the most common malignant oral tumor in dogs. Radiation therapy provides
            local control of the tumor.
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
            <div className="cond-editorial__kicker-text">Understanding Oral Melanoma in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Local control with radiation.
          </h2>
          <p className="cond-editorial__lead">
            Oral melanoma grows quickly and metastasizes early — to regional lymph nodes and distant
            sites including the lungs. This is why local treatment alone is rarely enough. Radiation
            provides local control, and your oncologist can discuss additional treatment options with
            you.
          </p>
          <p className="cond-editorial__body">
            Oral melanoma arises most commonly from the gingiva, hard palate, and labial mucosa.
            It grows rapidly and often invades adjacent bone. The first warning signs —
            facial swelling, difficulty eating, halitosis, or bloody saliva — often appear when
            the tumor is already at a significant size. Rapid progression means that staging and
            treatment should begin as soon as the diagnosis is confirmed.
          </p>
          <h3 className="cond-editorial__h3">Why radiation therapy is highly effective for melanoma</h3>
          <p className="cond-editorial__body">
            Unlike some tumors that respond best to many small radiation doses, melanoma is
            particularly sensitive to larger radiation doses. This means
            meaningful local control can often be achieved with fewer treatments — fewer anesthetic events
            and a shorter treatment course. Definitive radiation therapy is also an option and may be preferred in
            select cases.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Stage matters.</strong> CT imaging of the skull and thorax, plus fine-needle
              aspirate of regional lymph nodes, is standard before treatment. Staging determines
              prognosis and helps plan treatment.
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



      <References items={REFERENCES} />

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">For Pet Families</div>
          <div className="cond-cta__title">
            Get a specialist review.<br /><em>Prompt response.</em>
          </div>
          <p className="cond-cta__text">
            Dr. DiBernardi personally reviews every case. Tell us about your dog and we&apos;ll
            respond promptly with a clear recommendation.
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
