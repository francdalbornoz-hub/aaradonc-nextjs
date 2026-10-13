import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (adjuvant radiation
// after incomplete STS excision; local control with fractionated protocols).
const REFERENCES: Reference[] = [
  { authors: 'Kung MBJ, et al.', year: '2014', title: 'Hypofractionated radiation therapy for the treatment of microscopic canine soft tissue sarcoma', source: 'Vet Comp Oncol' },
  { authors: 'Mayer MN, Treuil PL, LaRue SM', year: '2009', title: 'Radiotherapy and surgery for feline soft tissue sarcoma', source: 'Vet Radiol Ultrasound' },
]

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeoEs('/soft-tissue-sarcomas')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: pageSeo.alternates,
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
      <section className="cond-hero" aria-label="Radioterapia para sarcomas de tejidos blandos">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Radioterapia para sarcomas de tejidos blandos en perros y gatos · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/pet-cancer')}>Cáncer en mascotas</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Sarcomas de tejidos blandos</span>
          </nav>
          <div className="cond-hero__tag">Tratamiento del sarcoma de tejidos blandos · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para sarcomas<br />de tejidos blandos<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            Los sarcomas de tejidos blandos pueden extenderse más allá de sus bordes visibles. Aun después de la cirugía, pueden quedar células tumorales, sobre todo cuando los márgenes son estrechos
            o incompletos. En esos casos, la radioterapia posquirúrgica reduce el
            riesgo de recidiva local.
          </p>
          <div className="cond-hero__ctas">
            <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
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
            <div className="cond-editorial__kicker-text">Sarcomas de tejidos blandos y radioterapia en perros y gatos</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            El tumor puede parecer delimitado,<br /><em>pero muchas veces no lo está</em>
          </h2>
          <p className="cond-editorial__lead">
            Los sarcomas de tejidos blandos son un grupo de tumores malignos que se originan en el
            tejido conectivo: grasa, músculo, fascia, nervios y vasos sanguíneos. En perros y gatos, el
            sarcoma de tejidos blandos suele aparecer como una masa firme, subcutánea o profunda, en el
            tronco, las extremidades o la cabeza y el cuello. Su rasgo característico es que las células
            tumorales microscópicas pueden extenderse más allá del borde que se palpa.
          </p>
          <p className="cond-editorial__body">
            Por eso, extirparlo por completo es técnicamente exigente. En zonas con poco margen anatómico, como la
            parte distal de las extremidades, los dedos, la cara o el periné, muchas veces no es posible
            obtener márgenes realmente amplios.
          </p>
          <h3 className="cond-editorial__h3">Qué aporta la radioterapia posquirúrgica</h3>
          <p className="cond-editorial__body">
            La radioterapia posquirúrgica trata todo el lecho quirúrgico, incluido el tejido en riesgo
            que lo rodea, y concentra la dosis en la zona donde pueden quedar células tumorales
            tras la extirpación. Después de una extirpación incompleta, reduce el riesgo de recidiva
            local.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              <strong>El momento importa.</strong> La radioterapia posquirúrgica suele comenzar una vez
              que la herida quirúrgica ha cicatrizado. Derivar el caso pronto, idealmente en cuanto esté
              disponible el informe de patología, nos ayuda a planificarla a tiempo. Si sabes que los
              márgenes serán difíciles, contáctanos antes de la cirugía.
            </div>
          </div>
          <h3 className="cond-editorial__h3">El grado importa, pero los márgenes incompletos importan más</h3>
          <p className="cond-editorial__body">
            Los sarcomas de alto grado (grado II–III) tienen un riesgo de recidiva elevado incluso con
            márgenes aparentemente limpios, y con frecuencia se recomienda radioterapia posquirúrgica.
            En los sarcomas de grado I con márgenes realmente amplios y limpios, el beneficio de la
            radioterapia es menos claro: la Dra. DiBernardi evalúa cada caso de forma individual para
            decidir si conviene indicar radioterapia. 
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa los informes de patología, el
              estado de los márgenes, el índice mitótico y todos los estudios de imagen disponibles antes
              de recomendar un protocolo en cada caso de sarcoma de tejidos blandos. También ofrecemos
              una consulta antes de la cirugía cuando conocer de antemano el abordaje quirúrgico ayuda a
              planificar la radioterapia.
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


      <References items={REFERENCES} lang="es" />

      {/* ══════════════════════════════════════════════════════════════════════
          DUAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">Para familias</div>
          <div className="cond-cta__title">
            ¿Márgenes incompletos?<br /><em>Consúltanos pronto</em>
          </div>
          <p className="cond-cta__text">
            Consultar pronto ayuda a planificar la radioterapia a tiempo. Agenda una consulta y la
            Dra. DiBernardi revisará personalmente los informes de patología.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios y cirujanos</div>
          <div className="cond-cta__title">
            Derivar un sarcoma de tejidos blandos,<br /><em>antes o después de la cirugía</em>
          </div>
          <p className="cond-cta__text">
            Envía los informes de patología, las notas quirúrgicas y los estudios de imagen, y nos comunicamos contigo en cuanto los recibamos. Si lo necesitas, coordinamos una consulta antes de la cirugía para planificar juntos la radioterapia.
          </p>
          <Link href={esPath('/contact-referrers')} className="cond-cta__btn-secondary">Derivar un paciente →</Link>
        </div>
      </div>
    </>
  )
}
