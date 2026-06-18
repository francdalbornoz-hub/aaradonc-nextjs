import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeo('/osteosarcoma')

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

const TUMOR_TYPES = [
  {
    species: 'Dogs primarily · Cats',
    name: 'Appendicular Osteosarcoma',
    desc: 'The most common form — affecting the long bones of the limbs. Distal radius and proximal humerus in dogs are the most frequent sites. Palliative radiation is the standard non-surgical treatment for pain management.',
    tag: '★ Palliative RT first-line',
    href: '/osteosarcoma',
  },
  {
    species: 'Dogs & Cats',
    name: 'Axial Osteosarcoma',
    desc: 'OSA of the skull, spine, ribs, or pelvis. Surgery is rarely feasible. Radiation — palliative or curative-intent CFRT — is the primary treatment modality. Each axial case is evaluated individually based on location and extent.',
    tag: 'Radiation as primary treatment',
    href: '/osteosarcoma',
  },
  {
    species: 'Dogs & Cats',
    name: 'Chondrosarcoma',
    desc: 'Arises from cartilage — most commonly on the ribs, nasal cavity, or flat bones. Less aggressive than OSA but locally invasive. Radiation is indicated for unresectable cases or after incomplete excision.',
    tag: 'Radiation for unresectable cases',
  },
  {
    species: 'Also evaluated',
    name: 'Other Primary Bone Tumors',
    desc: 'Fibrosarcoma of bone · Hemangiosarcoma of bone · Multilobular osteochondrosarcoma of the skull. Each case reviewed individually for radiation candidacy based on type, location, and extent.',
    tag: 'Individualized review',
    href: null,
  },
]

const FAQ_ITEMS = [
  {
    q: 'Can radiation cure osteosarcoma in dogs or cats?',
    a: "For appendicular osteosarcoma (limb bones), palliative radiation is not curative — it focuses on pain control and quality of life. For axial osteosarcoma (skull, spine, ribs), curative-intent radiation with CFRT may be appropriate and can achieve meaningful local control. Dr. DiBernardi will discuss realistic goals and expected outcomes for your pet's specific osteosarcoma at the consultation.",
  },
  {
    q: 'How quickly does radiation relieve osteosarcoma pain?',
    a: 'Most pets begin showing meaningful osteosarcoma pain reduction within 24–72 hours of the first palliative radiation session. Over 90% of treated pets show a positive response. The effect typically provides several months of improved comfort, and in some cases the protocol can be repeated if the initial response was good.',
  },
  {
    q: 'How many radiation sessions does osteosarcoma treatment require?',
    a: "The standard palliative osteosarcoma protocol involves 3–5 sessions, delivered once or twice per week, completing the full course in 2–4 weeks. Each session is outpatient — brief anesthesia and your pet goes home the same day. The low session count minimizes total anesthetic exposure and disruption to your pet's routine.",
  },
  {
    q: 'My pet is not a surgical candidate for osteosarcoma. Is radiation still an option?',
    a: "Yes. Palliative radiation is specifically designed for osteosarcoma cases where surgery is not indicated — whether due to age, body condition, concurrent disease, tumor location, or owner preference. It does not require prior or planned surgery. Many pets who receive palliative RT for osteosarcoma return to comfortable, mobile daily life for several additional months.",
  },
  {
    q: 'Does radiation work for osteosarcoma in cats?',
    a: 'Yes. Osteosarcoma in cats is treated with the same evidence-based radiation protocols used in dogs. Feline appendicular osteosarcoma often carries a better prognosis than in dogs. Axial osteosarcoma in cats — including spinal and skull tumors — is evaluated individually for palliative or curative-intent radiation.',
  },
  {
    q: 'Do I need a referral to consult about osteosarcoma treatment?',
    a: "Whether you've been referred by your veterinarian or are reaching out directly — both are welcome. If you have radiographs, CT images, or pathology confirming osteosarcoma, bring them to the consultation. We work collaboratively with your veterinarian and any other specialists already involved in your pet's care.",
  },
]

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
            Osteosarcoma is the most aggressive bone tumor in dogs and cats. When surgery is not an
            option — or quality of life is the priority — radiation therapy delivers meaningful pain
            relief and extended survival without amputation.
          </p>
          <div className="cond-hero__ctas">
            <Link href="/contact-pet-owners" className="cta-primario">Request a Consultation</Link>
            <Link
              href="#how-we-treat"
              className="cta-secundario"
              style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              See Treatment Options ↓
            </Link>
          </div>
          <div className="cond-hero__badges">
            <div className="cond-hero__badge">Board Certified Radiation Oncologist on site</div>
            <div className="cond-hero__badge">Palm Beach County, FL</div>
            <div className="cond-hero__badge">Palliative &amp; curative options</div>
          </div>
        </div>
        <div className="cond-hero__stats">
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val"><em>90</em>%+</div>
            <div className="cond-hero__stat-label">Of pets show significant pain reduction after palliative RT for osteosarcoma</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">4–<em>7</em>mo</div>
            <div className="cond-hero__stat-label">Additional median survival with palliative radiation + medical management</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">3–<em>5</em></div>
            <div className="cond-hero__stat-label">Sessions required for the full palliative protocol</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val"><em>Only</em></div>
            <div className="cond-hero__stat-label">Center 100% dedicated to radiation oncology in Florida</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          POSITIONING STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="pos-strip">
        <div className="pos-strip__inner">
          <span className="pos-strip__text">&ldquo;The only center 100% dedicated to Radiation Oncology in Florida&rdquo;</span>
        </div>
      </div>

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
            bisphosphonates is the most effective non-surgical option for osteosarcoma pain management.
          </p>
          <p className="cond-editorial__body">
            Palliative radiation for osteosarcoma reduces tumor-associated inflammation and slows local
            bone destruction — the primary drivers of pain. Over 90% of treated pets show meaningful
            pain reduction, often within 24–72 hours of the first session. This is not curative, but
            the improvement in comfort and mobility is clinically significant and well-documented.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              <strong>Palliative radiation for osteosarcoma</strong> typically involves 3–5 sessions
              delivered once or twice per week — a schedule that minimizes total anesthetic exposure
              and disruption to your pet&apos;s routine. Most pets remain comfortable and mobile
              throughout treatment.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Axial osteosarcoma — when radiation therapy is the primary treatment</h3>
          <p className="cond-editorial__body">
            For osteosarcoma of the skull, spine, ribs, or pelvis, surgery is rarely feasible.
            Radiation — both palliative and sometimes curative-intent CFRT — becomes the primary
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
      <section className="cond-types" aria-labelledby="types-heading">
        <div className="cond-types__inner">
          <div className="cond-types__header">
            <div className="eyebrow-label">Osteosarcoma Types We Treat</div>
            <h2 id="types-heading" className="titulo-seccion">
              Osteosarcoma by location<br />in dogs and cats.
            </h2>
            <p className="cond-types__sub">
              The location of osteosarcoma determines treatment options. Appendicular OSA (limb bones)
              and axial OSA (skull, spine, ribs, pelvis) require different radiation approaches.
              Dr. DiBernardi evaluates each case individually.
            </p>
          </div>
          <div className="cond-types__grid">
            {TUMOR_TYPES.map((t) =>
              t.href ? (
                <Link key={t.name} href={t.href} className={`cond-type-card${!t.href ? ' cond-type-card--muted' : ''}`}>
                  <div className="cond-type-card__species">{t.species}</div>
                  <div className="cond-type-card__name">{t.name}</div>
                  <div className="cond-type-card__desc">{t.desc}</div>
                  <div className="cond-type-card__tag">{t.tag}</div>
                  <div className="cond-type-card__link">Learn more →</div>
                </Link>
              ) : (
                <div key={t.name} className="cond-type-card cond-type-card--muted">
                  <div className="cond-type-card__species">{t.species}</div>
                  <div className="cond-type-card__name">{t.name}</div>
                  <div className="cond-type-card__desc">{t.desc}</div>
                  <div className="cond-type-card__tag">{t.tag}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BRIDGE STATS
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-bridge" role="list" aria-label="Key statistics">
        <div className="cond-bridge__stat" role="listitem">
          <div className="cond-bridge__val"><em>90</em>%+</div>
          <div className="cond-bridge__label">Of pets show significant osteosarcoma pain reduction after palliative RT</div>
        </div>
        <div className="cond-bridge__stat" role="listitem">
          <div className="cond-bridge__val">3–<em>5</em></div>
          <div className="cond-bridge__label">Sessions total — minimal disruption to your pet&apos;s routine</div>
        </div>
        <div className="cond-bridge__stat" role="listitem">
          <div className="cond-bridge__val">Days</div>
          <div className="cond-bridge__label">Time to meaningful osteosarcoma pain relief after first session</div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-treat" id="how-we-treat">
        <div className="cond-treat__left">
          <div className="eyebrow" style={{ marginBottom: 8 }}>How We Treat Osteosarcoma</div>
          <h2 className="titulo-seccion" style={{ marginBottom: 16 }}>
            Pain relief first.<br /><em>Quality of life always.</em>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--texto-suave)', lineHeight: 1.8, margin: '0 0 24px' }}>
            For most osteosarcoma cases, palliative radiation is the recommended protocol.
            Curative-intent CFRT may be indicated for select axial osteosarcoma in dogs and cats.
            Dr. DiBernardi reviews every case individually before recommending a plan.
          </p>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
            <Image
              src="/images/team-workstation.webp"
              alt="Veterinary radiation oncologist reviewing osteosarcoma case at AARADONC Florida"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontSize: 13, color: 'var(--texto-suave)', lineHeight: 1.6, margin: 0 }}>
            Radiographic and CT imaging is used to assess osteosarcoma extent, cortical involvement,
            and pathologic fracture risk before treatment planning.
          </p>
        </div>
        <div className="cond-treat__right">
          {/* Palliative — primary card */}
          <Link href="/palliative-veterinary-radiation-therapy-florida" className="cond-proto-card cond-proto-card--primary">
            <div className="cond-proto-card__glow" aria-hidden="true" />
            <div className="cond-proto-card__eyebrow">★ First-line for osteosarcoma pain</div>
            <div className="cond-proto-card__title">Palliative Radiation</div>
            <div className="cond-proto-card__specs">
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Sessions</div>
                <div className="cond-proto-card__spec-val">3–5 total</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Schedule</div>
                <div className="cond-proto-card__spec-val">1–2x per week</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Intent</div>
                <div className="cond-proto-card__spec-val">Pain relief · QoL</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Best for</div>
                <div className="cond-proto-card__spec-val">Appendicular · Axial OSA</div>
              </div>
            </div>
            <p className="cond-proto-card__desc">
              The most effective non-surgical option for osteosarcoma pain management. Reduces
              tumor-associated inflammation and bone destruction — over 90% of pets respond within
              days of the first session.
            </p>
            <div className="cond-proto-card__link">
              Learn about Palliative Radiation{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </Link>
          {/* CFRT — secondary card */}
          <Link href="/cfrt-veterinary-radiation-therapy-florida" className="cond-proto-card cond-proto-card--secondary">
            <div className="cond-proto-card__eyebrow">For select axial osteosarcoma cases</div>
            <div className="cond-proto-card__title">CFRT</div>
            <div className="cond-proto-card__specs">
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Sessions</div>
                <div className="cond-proto-card__spec-val">16–20 daily</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Schedule</div>
                <div className="cond-proto-card__spec-val">Mon–Fri</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Intent</div>
                <div className="cond-proto-card__spec-val">Curative intent</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Best for</div>
                <div className="cond-proto-card__spec-val">Axial OSA · Skull · Spine</div>
              </div>
            </div>
            <p className="cond-proto-card__desc">
              Definitive fractionated RT for axial osteosarcoma where surgery is not feasible. Aims
              for durable local control at anatomically challenging sites in dogs and cats.
            </p>
            <div className="cond-proto-card__link">
              Learn about CFRT{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" aria-labelledby="faq-heading">
        <div className="contenedor" style={{ maxWidth: 820 }}>
          <div className="eyebrow-label" style={{ marginBottom: 8 }}>Frequently Asked Questions</div>
          <h2 id="faq-heading" className="titulo-seccion" style={{ marginBottom: 40 }}>
            Osteosarcoma treatment —<br />what pet owners ask us most.
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DUAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">For Pet Owners</div>
          <div className="cond-cta__title">
            Your pet doesn&apos;t have to live<br /><em>with osteosarcoma pain.</em>
          </div>
          <p className="cond-cta__text">
            Palliative radiation for osteosarcoma can make a real difference in your dog&apos;s or
            cat&apos;s comfort and mobility within days. Whether you&apos;ve been referred by your
            veterinarian or are reaching out directly — request a consultation and Dr. DiBernardi
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
            Palliative RT for osteosarcoma is most effective when started before pain becomes severe.
            We acknowledge all referrals the same day and coordinate directly with your existing pain
            management protocol.
          </p>
          <Link href="/contact-referrers" className="cond-cta__btn-secondary">Submit a Referral →</Link>
        </div>
      </div>
    </>
  )
}
