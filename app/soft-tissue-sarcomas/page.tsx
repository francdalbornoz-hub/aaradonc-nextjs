import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeo } from '@/lib/seo-config'
import FAQAccordion from '@/components/ui/FAQAccordion'

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

const TUMOR_TYPES = [
  {
    species: 'Dogs & Cats — Most common STS',
    name: 'Peripheral Nerve Sheath Tumor (PNST)',
    desc: 'Also called hemangiopericytoma in older literature. The most common STS in dogs. Locally invasive, rarely metastatic. Adjuvant radiation after incomplete excision is strongly recommended — reduces recurrence from >50% to under 15% in most studies.',
    tag: '★ Strongest RT evidence',
    href: '/soft-tissue-sarcomas',
  },
  {
    species: 'Dogs primarily · Cats (injection sites)',
    name: 'Fibrosarcoma',
    desc: 'Malignant tumor of fibroblasts. Oral, appendicular, and injection-site variants. Infiltrates along fascial planes well beyond palpable borders. Combined surgery and radiation consistently outperforms surgery alone. Cats: always treated under the FISS multimodal protocol.',
    tag: 'Surgery + RT combination',
    href: '/fibrosarcoma',
  },
  {
    species: 'Cats — Injection sites',
    name: 'Vaccine-Associated Sarcoma (FISS)',
    desc: 'Feline injection-site sarcoma — one of the most aggressive STS variants in veterinary oncology. Multimodal treatment (surgery + radiation + chemotherapy) is the standard of care. Post-surgical RT is always recommended for FISS regardless of margin status.',
    tag: 'Multimodal protocol always',
    href: '/vaccine-associated-sarcoma',
  },
  {
    species: 'Dogs & Cats',
    name: 'Myxosarcoma & Liposarcoma',
    desc: 'Myxosarcoma arises from myxoid connective tissue; liposarcoma from adipose. Both are locally invasive with low metastatic potential. Wide surgical excision is the primary treatment — adjuvant RT indicated when margins are incomplete or at constrained anatomical sites.',
    tag: 'Adjuvant RT for incomplete margins',
    href: '/soft-tissue-sarcomas',
  },
  {
    species: 'Dogs primarily',
    name: 'Infiltrative Lipoma',
    desc: 'Benign in cell type but locally invasive — infiltrates muscle and fascia, making complete excision difficult. Recurrence after surgery alone is common. Radiation is the most effective adjuvant treatment for incompletely excised infiltrative lipoma, particularly at the limbs.',
    tag: 'RT changes recurrence outcomes',
    href: '/soft-tissue-sarcomas',
  },
  {
    species: 'Also evaluated',
    name: 'Other Soft Tissue Sarcomas',
    desc: 'Synovial cell sarcoma · Rhabdomyosarcoma · Leiomyosarcoma · Undifferentiated sarcoma · Malignant mesenchymoma. Each case reviewed individually for radiation candidacy based on histology, grade, and location.',
    tag: 'Individualized review',
    href: null,
  },
]

const FAQ_ITEMS = [
  {
    q: 'My dog just had a soft tissue sarcoma removed and the margins were incomplete. What should I do?',
    a: "Contact a radiation oncologist as soon as possible — ideally within 2 weeks of receiving the pathology report. Post-surgical radiation for STS is most effective when started within 4–6 weeks of surgery, before the surgical bed reorganizes. Bring the pathology report, surgical notes, and any imaging. Dr. DiBernardi will review the case and give you a clear recommendation on whether adjuvant RT is indicated and what outcomes to expect.",
  },
  {
    q: 'The pathology says "grade I" STS with complete margins. Does my dog still need radiation?',
    a: "Not automatically. Grade I STS with truly wide, complete margins has a lower recurrence risk than higher-grade tumors with incomplete margins. However, \"complete\" margins in STS are often narrower than they appear — STS cells extend along fascial planes that may not be captured in standard margin assessment. Dr. DiBernardi reviews each grade I case individually to determine whether the expected recurrence risk at that specific location and tumor size justifies a radiation course.",
  },
  {
    q: 'Can radiation replace surgery for soft tissue sarcomas?',
    a: "In most cases, surgery remains the primary local treatment for STS — radiation is most effective as an adjuvant after excision. Definitive radiation without surgery is an option for inoperable STS or cases where surgery would cause unacceptable functional deficits, but outcomes are generally less durable than combined surgery + radiation. Dr. DiBernardi evaluates each case to determine the optimal approach based on tumor location, size, and the owner's treatment goals.",
  },
  {
    q: 'My cat has a vaccine-associated sarcoma. Is the treatment the same as for other soft tissue sarcomas?',
    a: "No — FISS is treated as a distinct entity with a more aggressive multimodal protocol. Post-surgical radiation is always recommended for vaccine-associated sarcoma regardless of margin status, because FISS has a demonstrated tendency to recur even after apparently complete excision. Chemotherapy is also typically incorporated. Dr. DiBernardi evaluates all feline injection-site sarcomas under the FISS-specific protocol.",
  },
  {
    q: 'How many radiation sessions does STS treatment require?',
    a: 'Adjuvant CFRT for soft tissue sarcoma involves 16–20 outpatient sessions, Mon–Fri over 3–4 weeks. Each session is brief — short anesthesia and your pet goes home the same day. The total number of sessions is determined by tumor location, protocol, and treatment plan design.',
  },
  {
    q: 'Do I need a referral to consult about STS radiation?',
    a: "Whether you've been referred by your surgeon or are reaching out directly — both are welcome. Bring the pathology report, surgical notes, and any pre- or post-operative imaging to the consultation. We work collaboratively with surgeons and primary care vets throughout the process and provide written updates at every milestone.",
  },
]

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
            Soft tissue sarcomas extend far beyond their visible borders. Surgery alone leaves
            microscopic disease behind in most cases — and local recurrence is the rule, not the
            exception. Adjuvant radiation after incomplete excision reduces recurrence by more than
            70% and is the standard of care for STS in dogs and cats.
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
            <div className="cond-hero__badge">Adjuvant RT · Post-surgical standard</div>
          </div>
        </div>
        <div className="cond-hero__stats">
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val"><em>70</em>%+</div>
            <div className="cond-hero__stat-label">Reduction in local recurrence with adjuvant RT after incomplete STS excision</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">2–<em>3</em>cm</div>
            <div className="cond-hero__stat-label">STS extends beyond visible tumor borders — clean margins are rarely achievable</div>
          </div>
          <div className="cond-hero__stat">
            <div className="cond-hero__stat-val">4–<em>6</em>wk</div>
            <div className="cond-hero__stat-label">Optimal window to start post-surgical radiation after STS excision</div>
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
            <div className="cond-editorial__kicker-text">Understanding Soft Tissue Sarcomas &amp; Radiation in Dogs &amp; Cats</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            The tumor looks contained.<br /><em>It never is.</em>
          </h2>
          <p className="cond-editorial__lead">
            Soft tissue sarcomas are a group of malignant tumors arising from connective tissue —
            fat, muscle, fascia, nerves, and blood vessels. In dogs and cats, STS most commonly
            appears as a firm subcutaneous or deep mass on the trunk, limbs, or head and neck. Their
            defining characteristic: microscopic tumor cells extend 2–3 centimeters beyond the
            palpable tumor margin in virtually every case.
          </p>
          <p className="cond-editorial__body">
            This biological behavior makes complete surgical excision technically demanding even for
            experienced surgeons — and at anatomically constrained sites like the distal limb,
            digits, face, or perineum, truly wide margins are often impossible. A soft tissue sarcoma
            that appears to have been fully removed almost always leaves microscopic residual disease
            in the surgical bed. Without adjuvant treatment, local recurrence is expected in the
            majority of cases within 6–12 months.
          </p>
          <h3 className="cond-editorial__h3">Why adjuvant radiation changes outcomes</h3>
          <p className="cond-editorial__body">
            Post-surgical radiation targets the entire surgical bed — including the at-risk tissue
            surrounding it — delivering dose precisely to the zone where microscopic STS cells remain
            after excision. Multiple veterinary oncology studies document a reduction in local
            recurrence of more than 70% when adjuvant radiation follows incomplete STS excision,
            compared to surgery alone. The combination of surgery and radiation also consistently
            produces longer disease-free intervals than re-excision without radiation.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              <strong>Timing is critical.</strong> Post-surgical radiation for STS should begin
              within 4–6 weeks of surgery, before scar tissue matures and the surgical bed
              reorganizes. Early referral — ideally as soon as the pathology report is available —
              is always in the patient&apos;s best interest. If you know margins will be challenging,
              contact us before surgery.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Grade matters — but incomplete margins matter more</h3>
          <p className="cond-editorial__body">
            High-grade STS (grade II–III) carries elevated recurrence risk even with apparently clean
            margins, and adjuvant radiation is recommended regardless of reported margin width. For
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
      <section className="cond-types" aria-labelledby="types-heading">
        <div className="cond-types__inner">
          <div className="cond-types__header">
            <div className="eyebrow-label">Soft Tissue Sarcoma Types We Treat</div>
            <h2 id="types-heading" className="titulo-seccion">
              STS in dogs and cats —<br />by tumor type.
            </h2>
            <p className="cond-types__sub">
              Soft tissue sarcoma is not a single disease — it&apos;s a family of tumors with
              distinct biology, behavior, and radiation response. Dr. DiBernardi reviews histology
              and grade for every case before recommending a protocol.
            </p>
          </div>
          <div className="cond-types__grid">
            {TUMOR_TYPES.map((t) =>
              t.href ? (
                <Link key={t.name} href={t.href} className="cond-type-card">
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
          <div className="cond-bridge__val"><em>70</em>%+</div>
          <div className="cond-bridge__label">Reduction in local STS recurrence with adjuvant RT vs. surgery alone</div>
        </div>
        <div className="cond-bridge__stat" role="listitem">
          <div className="cond-bridge__val">4–<em>6</em>wk</div>
          <div className="cond-bridge__label">Optimal post-surgical window — refer before scar tissue matures</div>
        </div>
        <div className="cond-bridge__stat" role="listitem">
          <div className="cond-bridge__val">Same<em>-day</em></div>
          <div className="cond-bridge__label">Referral acknowledgment — we prioritize post-surgical timing</div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          HOW WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-treat" id="how-we-treat">
        <div className="cond-treat__left">
          <div className="eyebrow" style={{ marginBottom: 8 }}>How We Treat Soft Tissue Sarcomas</div>
          <h2 className="titulo-seccion" style={{ marginBottom: 16 }}>
            Pathology in hand.<br /><em>Plan built around it.</em>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--texto-suave)', lineHeight: 1.8, margin: '0 0 24px' }}>
            Every STS radiation plan at AARADONC starts with a full review of the pathology report,
            grade, margin status, mitotic index, and imaging. Dr. DiBernardi determines the optimal
            protocol for each dog or cat individually — adjuvant CFRT is the standard for most cases.
          </p>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
            <Image
              src="/images/team-workstation.webp"
              alt="Veterinary radiation oncologist reviewing soft tissue sarcoma case at AARADONC Florida"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontSize: 13, color: 'var(--texto-suave)', lineHeight: 1.6, margin: 0 }}>
            Surgical margin status and tumor grade on histopathology are the foundation of every STS
            radiation plan at AARADONC.
          </p>
        </div>
        <div className="cond-treat__right">
          {/* CFRT — primary card */}
          <Link href="/radiation-therapy/#cfrt" className="cond-proto-card cond-proto-card--primary">
            <div className="cond-proto-card__glow" aria-hidden="true" />
            <div className="cond-proto-card__eyebrow">★ Standard post-surgical STS protocol</div>
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
                <div className="cond-proto-card__spec-val">Adjuvant · Curative</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Best for</div>
                <div className="cond-proto-card__spec-val">All STS · Post-surgical</div>
              </div>
            </div>
            <p className="cond-proto-card__desc">
              The standard adjuvant protocol for incomplete STS excision in dogs and cats. Targets
              the full surgical bed and at-risk margins to eliminate microscopic residual disease.
              16–20 outpatient sessions over 3–4 weeks.
            </p>
            <div className="cond-proto-card__link">
              Learn about CFRT{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </Link>
          {/* Palliative — secondary card */}
          <Link href="/radiation-therapy/#palliative" className="cond-proto-card cond-proto-card--secondary">
            <div className="cond-proto-card__eyebrow">Inoperable or recurrent STS</div>
            <div className="cond-proto-card__title">Palliative Radiation</div>
            <div className="cond-proto-card__specs">
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Sessions</div>
                <div className="cond-proto-card__spec-val">3–5 total</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Schedule</div>
                <div className="cond-proto-card__spec-val">Weekly</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Intent</div>
                <div className="cond-proto-card__spec-val">Tumor control · QoL</div>
              </div>
              <div className="cond-proto-card__spec">
                <div className="cond-proto-card__spec-key">Best for</div>
                <div className="cond-proto-card__spec-val">Inoperable · Recurrent STS</div>
              </div>
            </div>
            <p className="cond-proto-card__desc">
              For soft tissue sarcomas that cannot be surgically removed, or recurrent STS where
              re-excision is not an option. Achieves local tumor control and reduces mass effect with
              fewer sessions.
            </p>
            <div className="cond-proto-card__link">
              Learn about Palliative Radiation{' '}
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
            Soft tissue sarcoma radiation —<br />what pet families ask us most.
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

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
            Post-surgical radiation for soft tissue sarcoma is most effective within 4–6 weeks of
            surgery. Whether you&apos;ve been referred by your veterinarian or are reaching out
            directly, request a consultation and Dr. DiBernardi will review the pathology personally.
          </p>
          <Link href="/contact-pet-owners" className="cond-cta__btn-primary">Request a Consultation →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">For Veterinarians &amp; Surgeons</div>
          <div className="cond-cta__title">
            Refer an STS case —<br /><em>pre- or post-surgical.</em>
          </div>
          <p className="cond-cta__text">
            Send pathology, surgical notes, and imaging. We prioritize post-surgical STS cases and
            acknowledge all referrals the same day. Pre-surgical consultation available when RT
            planning benefits from coordinating with the surgical approach.
          </p>
          <Link href="/contact-referrers" className="cond-cta__btn-secondary">Submit a Referral →</Link>
        </div>
      </div>
    </>
  )
}
