import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (chemodectoma /
// aortic body tumors are radiation-responsive; SBRT/SRT and 3D-CRT outcomes).
const REFERENCES: Reference[] = [
  { authors: 'Kruckman-Gatesy JC, et al.', year: '2020', title: 'A retrospective analysis of stereotactic body radiation therapy for canine heart base tumors', source: 'J Vet Cardiol' },
  { authors: 'Magestro L, et al.', year: '2018', title: 'Stereotactic body radiation therapy for heart base tumors in six dogs', source: 'J Vet Cardiol' },
  { authors: 'Maeda S, et al.', year: '2020', title: 'Three-dimensional conformal radiation therapy for canine aortic body tumour: 6 cases', source: 'J Small Anim Pract' },
]

const pageSeo = getPageSeo('/heart-base-tumors')

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

export default function HeartBaseTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Heart base tumor radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/linac-room.webp"
            alt="Heart base tumor radiation therapy for dogs — AARADONC Palm Beach Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Heart Base Tumors</span>
          </nav>
          <div className="cond-hero__tag">Heart Base Tumor · Chemodectoma · Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Heart base tumor radiation<br />therapy for dogs<br /><em>in Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Heart base tumors are rarely removable with surgery. Radiation therapy is
            an important local treatment option and can be combined with procedures such as
            pericardiectomy — targeting the tumor with precision while
            protecting the adjacent heart, aorta, and lungs.
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
            <div className="cond-editorial__kicker-text">Understanding Heart Base Tumors in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            When surgery is not possible,<br /><em>radiation therapy is an important option.</em>
          </h2>
          <p className="cond-editorial__lead">
            Chemodectomas of the heart base are intimately adherent to the aorta, pulmonary artery,
            and the heart itself. Surgical resection — already technically demanding — carries
            prohibitive cardiovascular risk in nearly all cases. Radiation therapy is an important
            local treatment option and can be combined with procedures such as pericardiectomy:
            case series document tumor stabilization, with a median survival of about 13 months after SBRT (Kruckman-Gatesy et al., 2020).
          </p>
          <p className="cond-editorial__body">
            Chemodectomas are slow-growing tumors that arise from chemoreceptor cells in the aortic
            body near the heart base. They grow locally and rarely metastasize — which means the
            main challenge is usually local.
          </p>
          <h3 className="cond-editorial__h3">Pericardial effusion — the most common acute presentation</h3>
          <p className="cond-editorial__body">
            Many dogs with heart base tumors present first with pericardial effusion — fluid
            accumulation around the heart that impairs cardiac filling. This is managed
            acutely with pericardiocentesis (drainage). Once the effusion is controlled,
            CT imaging and cardiac evaluation guide radiation planning. Radiation can reduce
            tumor volume and decrease recurrent effusion — sometimes eliminating the need
            for repeated pericardiocentesis.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Brachycephalic breeds are at significantly higher risk.</strong> Boxers
              account for the largest proportion of chemodectoma diagnoses, with Boston Terriers
              and Bulldogs also overrepresented. Any brachycephalic dog with unexplained
              exercise intolerance, syncope, or respiratory distress should have a cardiac
              evaluation including echocardiography.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Why precision matters most here</h3>
          <p className="cond-editorial__body">
            The heart base is surrounded by radiation-sensitive structures —
            the heart, aorta, pulmonary artery, lungs, and esophagus. Treatment planning requires
            strict dose constraints on all adjacent organs while delivering adequate dose to the
            tumor volume. This is exactly the kind of case where precise, image-guided delivery is
            especially valuable.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally designs every heart base
              tumor treatment plan — with CT and cardiac evaluation integrated before radiation
              planning begins. This is a case where specialist expertise and technology quality
              are not optional.
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
            Refer a patient with<br /><em>a heart base tumor.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive prompt acknowledgment. We coordinate with your
            cardiologist and primary vet throughout the treatment process.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
