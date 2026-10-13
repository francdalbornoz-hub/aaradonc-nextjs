import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (ASAC survival with
// surgery + adjuvant/hypofractionated/stereotactic radiation; nodal disease).
const REFERENCES: Reference[] = [
  { authors: 'McQuown B, et al.', year: '2016', title: 'Treatment of advanced canine anal sac adenocarcinoma with hypofractionated radiation therapy: 77 cases', source: 'Vet Comp Oncol' },
  { authors: 'Swan M, et al.', year: '2021', title: 'Pilot study evaluating the feasibility of stereotactic body radiation therapy for canine anal sac adenocarcinoma', source: 'Vet Radiol Ultrasound' },
  { authors: 'Williams J, et al.', year: '2021', title: 'Minimal late radiation toxicity and transient early toxicity following postoperative definitive-intent radiation therapy for canine anal sac adenocarcinoma', source: 'Vet Radiol Ultrasound' },
  { authors: 'Faletti A, et al.', year: '2024', title: 'Stereotactic radiotherapy for advanced canine anal sac adenocarcinoma: an exploratory study', source: 'Vet Radiol Ultrasound' },
]

const pageSeo = getPageSeoEs('/anal-sac-carcinoma')

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

export default function AnalSacCarcinomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para carcinoma de sacos anales">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Radioterapia para adenocarcinoma de sacos anales en perros · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/pet-cancer')}>Cáncer en mascotas</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Adenocarcinoma de los sacos anales</span>
          </nav>
          <div className="cond-hero__tag">Adenocarcinoma de los sacos anales · Perros · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />carcinoma de sacos anales<br /><em>en perros</em>
          </h1>
          <p className="cond-hero__sub">
            El adenocarcinoma de los sacos anales es localmente invasivo y con frecuencia se disemina a
            los ganglios linfáticos regionales. La radioterapia combinada con cirugía puede mejorar el
            control local y aliviar la compresión de la uretra o del recto cuando los ganglios afectados
            causan signos clínicos.
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
            <div className="cond-editorial__kicker-text">El adenocarcinoma de los sacos anales en perros</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Control local y regional<br /><em>con cirugía y radioterapia</em>
          </h2>
          <p className="cond-editorial__lead">
            El adenocarcinoma de los sacos anales se estadifica según el tamaño del tumor y la
            afectación de los ganglios linfáticos, y muchos perros ya tienen afectados los ganglios
            sublumbares en el momento del diagnóstico. La cirugía puede extirpar el tumor primario y
            los ganglios accesibles, y la radioterapia ayuda a eliminar las células tumorales que pueden quedar y a tratar la recidiva en los ganglios.
          </p>
          <p className="cond-editorial__body">
            A menudo, el tumor se descubre por casualidad (una masa detectada en la palpación rectal
            durante un control de rutina) o por signos como dificultad para defecar, inflamación
            alrededor del ano o que el perro se arrastre sentado. Como este tumor puede elevar el calcio
            en sangre (hipercalcemia), si un análisis de tu perro muestra el calcio alto, conviene
            revisar los sacos anales, aunque no haya una masa evidente.
          </p>
          <h3 className="cond-editorial__h3">El tratamiento de los ganglios sublumbares</h3>
          <p className="cond-editorial__body">
            Los ganglios sublumbares (ilíacos internos) son los principales ganglios de drenaje regional
            de este tumor y con frecuencia están afectados en el momento del diagnóstico. Cuando
            aumentan de tamaño, pueden comprimir el colon y la uretra, y causar estreñimiento,
            dificultad para orinar y dolor importante. La radioterapia en esta zona puede aliviar la compresión y ayudar a recuperar la función, incluso cuando la
            extirpación quirúrgica no es viable o no puede ser completa.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>La hipercalcemia que causa este tumor necesita atención veterinaria sin demora, porque puede dañar los riñones.</strong> En
              general, se corrige cuando se trata el tumor.
            </div>
          </div>
          <h3 className="cond-editorial__h3">El papel de la radioterapia en el carcinoma de los sacos anales</h3>
          <p className="cond-editorial__body">
            La radioterapia posquirúrgica trata el lecho quirúrgico del tumor primario y cualquier
            enfermedad residual en los ganglios, para ayudar a reducir el riesgo de recidiva local.
            Cuando los ganglios no pueden extirparse por completo, la radioterapia paliativa en la
            región sublumbar puede aliviar la compresión, ayudar a que tu perro vuelva a orinar y
            defecar con normalidad y mejorar su calidad de vida. La radioterapia también se utiliza como
            tratamiento local principal en los casos inoperables.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              carcinoma de los sacos anales (tomografía, niveles de calcio e informes quirúrgicos) antes
              de diseñar la radioterapia. Cada caso se analiza con tu oncólogo y tu veterinario
              habitual.
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
            Derivar un paciente con<br /><em>carcinoma de los sacos anales</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos la
            radioterapia con la cirugía y el tratamiento sistémico durante todo el proceso.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}
