import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (TCC/urothelial
// carcinoma; multimodal RT + systemic therapy; IMRT/IGRT and adaptive RT).
const REFERENCES: Reference[] = [
  { authors: 'Nolan MW, et al.', year: '2012', title: 'Intensity-modulated and image-guided radiation therapy for treatment of genitourinary carcinomas in dogs', source: 'J Vet Intern Med' },
  { authors: 'Ahrens M, et al.', year: '2024', title: 'Radiation toxicity grading after chemoradiotherapy of canine urinary tract carcinomas', source: 'Vet Comp Oncol' },
  { authors: 'Nieset JR, et al.', year: '2014', title: 'Comparison of adaptive radiotherapy techniques for external radiation therapy of canine bladder cancer', source: 'Vet Radiol Ultrasound' },
]

const pageSeo = getPageSeoEs('/bladder-cancer')

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: pageSeo.alternates,
  openGraph: { title: pageSeo.title, description: pageSeo.description, url: pageSeo.canonical },
}

const INFO_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

export default function BladderCancerPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para cáncer de vejiga">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Radioterapia para cáncer de vejiga en perros · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/pet-cancer')}>Cáncer en mascotas</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Cáncer de vejiga</span>
          </nav>
          <div className="cond-hero__tag">Cáncer de vejiga · CCT / carcinoma urotelial · Perros · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />cáncer de vejiga<br /><em>en perros</em>
          </h1>
          <p className="cond-hero__sub">
            El carcinoma de células de transición (CCT) es el tumor de vejiga más frecuente en perros.
            A menudo no es posible extirparlo por completo con cirugía. La radioterapia, combinada con
            tratamiento sistémico, puede reducir el volumen del tumor, aliviar los signos urinarios y
            ayudar a mantener la calidad de vida durante más tiempo.
          </p>
          <div className="cond-hero__ctas">
            <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" aria-hidden="true" />
            <div className="cond-editorial__kicker-text">El cáncer de vejiga en perros</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Cuando la cirugía no es posible,<br /><em>otros tratamientos pueden ayudar</em>
          </h2>
          <p className="cond-editorial__lead">
            El carcinoma de células de transición suele originarse en el trígono de la vejiga, la zona
            donde convergen los uréteres y la uretra. En esta ubicación, extirparlo por completo suele
            requerir retirar toda la vejiga, algo que pocas veces es viable. Por eso, el objetivo del
            tratamiento es lograr el mayor control posible del tumor, aliviar los signos urinarios y
            mantener la calidad de vida.
          </p>
          <p className="cond-editorial__body">
            Ante signos como sangre en la orina (hematuria), micciones frecuentes, esfuerzo al orinar o
            infecciones urinarias que no mejoran con antibióticos, conviene hacer estudios de imagen. La
            ecografía suele identificar la masa en la
            vejiga; la tomografía computarizada aporta un estadiamiento completo, que incluye la
            afectación de los ganglios linfáticos y las metástasis a distancia.
          </p>
          <h3 className="cond-editorial__h3">El papel de la radioterapia en el CCT de vejiga</h3>
          <p className="cond-editorial__body">
            La radioterapia paliativa en el CCT de vejiga puede reducir el volumen del tumor, aliviar la
            obstrucción urinaria, disminuir la hematuria y ayudar a prevenir la obstrucción de los
            uréteres. Suele combinarse con piroxicam o meloxicam (antiinflamatorios no esteroideos con
            actividad antitumoral documentada frente al CCT) y, a veces, con quimioterapia con
            vinblastina o mitoxantrona.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Si tu perro tiene infecciones urinarias que se repiten</strong> y no mejoran con
              antibióticos, conviene descartar un CCT. El tumor altera la mucosa normal
              de la vejiga y crea condiciones que imitan una infección urinaria, lo que puede retrasar
              el diagnóstico.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Planificación cuidadosa para una ubicación compleja</h3>
          <p className="cond-editorial__body">
            La radioterapia en el trígono vesical debe proteger las estructuras cercanas (recto, uretra
            e intestino delgado) y, a la vez, administrar dosis terapéuticas al tumor. Para eso se
            realiza una tomografía de planificación y se controla con cuidado la dosis que recibe cada
            órgano. 
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              cáncer de vejiga, combina la radioterapia con el tratamiento sistémico y se coordina con
              tu oncólogo y tu veterinario habitual durante todo el proceso.
            </div>
          </div>
        </div>
      </section>



      <References items={REFERENCES} lang="es" />

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">Para familias</div>
          <div className="cond-cta__title">
            Evaluación de una especialista<br /><em>con respuesta rápida</em>
          </div>
          <p className="cond-cta__text">
            Cuéntanos sobre tu perro y te
            responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>cáncer de vejiga</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos la
            radioterapia con tu tratamiento oncológico sistémico durante todo el proceso.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}
