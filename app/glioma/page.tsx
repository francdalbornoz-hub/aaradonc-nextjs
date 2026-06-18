import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'

const pageSeo = getPageSeo('/glioma')

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
    q: 'What is a glioma in dogs?',
    a: 'Gliomas are brain tumors arising from glial cells — the support cells of the nervous system. They include astrocytomas, oligodendrogliomas, and mixed gliomas. Gliomas are more common in dogs than cats, particularly in brachycephalic breeds such as Boxers, Bulldogs, and Boston Terriers. They tend to be infiltrative — meaning they grow into surrounding brain tissue rather than remaining well-defined — which makes surgical resection very difficult.',
  },
  {
    q: 'Can radiation treat a glioma in dogs?',
    a: 'Yes. Radiation therapy is the primary treatment for most gliomas in dogs. Because complete surgical resection is rarely possible, radiation — either CFRT or SRS/SRT depending on tumor characteristics — is used to control local tumor growth, reduce neurological symptoms, and extend survival. Dogs treated with definitive radiation typically achieve median survivals of 6–14 months depending on tumor grade and location.',
  },
  {
    q: 'What protocol is used for glioma — CFRT or SRS/SRT?',
    a: 'Both protocols are used for glioma, and the choice depends on tumor size, grade, and definition on MRI. SRS/SRT (1–5 sessions) is preferred for smaller, well-defined tumors where ablative doses can be safely delivered. CFRT (15–20 sessions) is used when the tumor is larger, less defined, or when dose fractionation is needed to protect adjacent structures. Dr. DiBernardi determines the appropriate protocol after reviewing your dog\'s imaging.',
  },
  {
    q: 'What are the signs of glioma in dogs?',
    a: 'Signs depend on the location of the tumor within the brain but typically include seizures (particularly new-onset seizures in a middle-aged to older dog), behavioral changes, circling, head pressing, weakness or incoordination, and vision changes. Brachycephalic breeds over 5–6 years old presenting with new seizures should be evaluated for an intracranial cause promptly.',
  },
  {
    q: 'Does my dog need a referral to be seen?',
    a: 'No referral is required. Pet owners can contact us directly. We coordinate with your primary care veterinarian and any neurologist involved in the diagnosis throughout treatment. MRI imaging is typically needed before consultation — if not yet done, we can advise on imaging centers.',
  },
]

export default function GliomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Glioma radiation therapy hero">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Glioma radiation therapy for dogs — AARADONC Palm Beach Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/brain-tumors">Brain Tumors</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Glioma</span>
          </nav>
          <div className="cond-hero__tag">Glioma Radiation Therapy · Primarily Dogs · Florida</div>
          <h1 className="cond-hero__h1">
            Radiation therapy<br />for glioma<br /><em>in dogs — Florida.</em>
          </h1>
          <p className="cond-hero__sub">
            Gliomas are infiltrative brain tumors that cannot be surgically removed in their entirety.
            Radiation therapy is the primary treatment — targeting the tumor volume precisely to
            control growth, reduce seizures, and extend quality of life.
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
            <div className="cond-hero__stat-val">6–<em>14</em>mo</div>
            <div className="cond-hero__stat-label">Median survival with definitive radiation therapy</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">2<em>x+</em></div>
            <div className="cond-hero__stat-label">Longer survival with RT vs. supportive care alone</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">1–<em>20</em></div>
            <div className="cond-hero__stat-label">Sessions — SRS/SRT or CFRT based on tumor profile</div>
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
            <div className="cond-editorial__kicker-text">Understanding Glioma in Dogs</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Infiltrative by nature —<br /><em>radiation therapy is the primary answer.</em>
          </h2>
          <p className="cond-editorial__lead">
            Gliomas differ from meningiomas in one critical way: they grow into brain tissue rather
            than compressing it from the outside. This infiltrative growth pattern makes surgical
            resection impossible without causing severe neurological damage — which is why radiation
            therapy is the cornerstone of treatment.
          </p>
          <p className="cond-editorial__body">
            Gliomas occur most frequently in brachycephalic breeds — Boxers, English Bulldogs, Boston
            Terriers, French Bulldogs — typically presenting between 5 and 9 years of age. New-onset
            seizures in a brachycephalic dog over 5 years old should trigger immediate MRI evaluation
            to rule out an intracranial mass.
          </p>
          <h3 className="cond-editorial__h3">What radiation achieves — and what to expect</h3>
          <p className="cond-editorial__body">
            Radiation therapy for glioma controls local tumor progression, reduces intracranial
            pressure, and in many dogs substantially reduces or eliminates seizure frequency.
            Most dogs show neurological improvement within 2–4 weeks of completing treatment.
            Median survival times of 6–14 months are consistently reported in dogs treated with
            definitive radiation — significantly longer than supportive care alone.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Brachycephalic breeds have a well-documented predisposition to glioma.</strong>{' '}
              Boxers, Bulldogs, and Boston Terriers account for a disproportionate number of canine
              glioma cases. If your brachycephalic dog develops new neurological signs or seizures
              after age 5, prompt MRI evaluation is essential.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Choosing between SRS/SRT and CFRT</h3>
          <p className="cond-editorial__body">
            The radiation protocol for glioma depends on tumor characteristics seen on MRI. Well-defined
            tumors may be candidates for SRS/SRT (1–5 sessions with ablative precision). Larger or
            more infiltrative tumors typically benefit from CFRT (15–20 fractionated sessions),
            which allows the total dose to be delivered safely over time while protecting surrounding
            brain tissue. Dr. DiBernardi selects the optimal approach after full case review.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              At AARADONC, <strong>Dr. Lisa DiBernardi</strong> personally reviews every glioma case —
              MRI, staging, neurological status — before designing the treatment plan. No generalized
              protocols. Every plan is built for your dog specifically.
            </div>
          </div>
        </div>
      </section>

      <div className="cond-bridge" aria-label="Key outcomes">
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">6–<em>14</em>mo</div>
          <div className="cond-bridge__label">Median survival with definitive radiation for glioma</div>
        </div>
        <div className="cond-bridge__stat">
          <div className="cond-bridge__val">SRS/<em>SRT</em></div>
          <div className="cond-bridge__label">Or CFRT — protocol chosen by tumor profile on MRI</div>
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
            Precision targeting<br /><em>for infiltrative tumors.</em>
          </h2>
          <p className="bajada">
            Glioma treatment at AARADONC starts with a complete case review — MRI, neurological
            history, breed, and clinical staging. Dr. DiBernardi selects between SRS/SRT and CFRT
            based on tumor size, definition, and location on imaging.
          </p>
          <div className="rt-bullets">
            {[
              { title: 'Varian TrueBeam® + IGRT.', text: 'Cone Beam CT before every session confirms exact tumor position — essential for brain targets where fractions of a millimeter determine what structures receive dose.' },
              { title: 'SRS/SRT for well-defined tumors.', text: '1–5 ablative sessions with VMAT/RapidArc technology — shorter anesthesia time per session, submillimeter accuracy, outpatient same-day home.' },
              { title: 'CFRT for infiltrative or large tumors.', text: '15–20 daily sessions allow dose escalation while protecting adjacent brain tissue through fractionation — the standard approach for higher-grade or diffuse gliomas.' },
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
            SRS/SRT or CFRT — chosen by <em>tumor profile on MRI.</em>
          </h3>
          {[
            { tag: 'Preferred — Well-Defined Gliomas', name: 'SRS / SRT', sessions: '1–5 sessions', note: 'Submillimeter precision · outpatient · same-day home', href: '/radiation-therapy#srs-srt', dark: true },
            { tag: 'Standard — Infiltrative or Large Tumors', name: 'CFRT', sessions: '15–20 sessions', note: 'Fractionated dose · brain tissue protection · outpatient', href: '/radiation-therapy#cfrt', dark: false },
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
            Refer a patient with<br /><em>glioma.</em>
          </div>
          <p className="cond-cta__text">
            Submit a referral and receive same-day acknowledgment. We coordinate directly with
            your practice throughout treatment and provide full written reports.
          </p>
          <Link href="/for-veterinarians" className="cond-cta__btn-secondary">Referral Information →</Link>
        </div>
      </div>
    </>
  )
}
