import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (chemodectoma /
// aortic body tumors are radiation-responsive; SBRT/SRT and 3D-CRT outcomes).
const REFERENCES: Reference[] = [
  { authors: 'Kruckman-Gatesy JC, et al.', year: '2020', title: 'A retrospective analysis of stereotactic body radiation therapy for canine heart base tumors', source: 'J Vet Cardiol' },
  { authors: 'Magestro L, et al.', year: '2018', title: 'Stereotactic body radiation therapy for heart base tumors in six dogs', source: 'J Vet Cardiol' },
  { authors: 'Maeda S, et al.', year: '2020', title: 'Three-dimensional conformal radiation therapy for canine aortic body tumour: 6 cases', source: 'J Small Anim Pract' },
]

const pageSeo = getPageSeoEs('/heart-base-tumors')

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

export default function HeartBaseTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para tumores de la base del corazón">
        <div className="cond-hero__bg">
          <Image
            src="/images/linac-room.webp"
            alt="Radioterapia para tumores de la base del corazón en perros · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/pet-cancer')}>Cáncer en mascotas</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Tumores de la base del corazón</span>
          </nav>
          <div className="cond-hero__tag">Tumor de la base del corazón · Quimiodectoma · Perros · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para tumores de<br />la base del corazón en perros
          </h1>
          <p className="cond-hero__sub">
            Los tumores de la base del corazón rara vez pueden extirparse con cirugía. La radioterapia
            es una opción importante de tratamiento local y puede combinarse con procedimientos como
            la pericardiectomía. La dosis se concentra en el tumor y se protegen el corazón, la aorta y los
            pulmones cercanos.
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
            <div className="cond-editorial__kicker-text">Tumores de la base del corazón en perros</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Un tumor difícil de operar
          </h2>
          <p className="cond-editorial__lead">
            Los quimiodectomas de la base del corazón están íntimamente adheridos a la aorta, la arteria
            pulmonar y el propio corazón. Por eso, la cirugía es técnicamente muy exigente y suele
            implicar un riesgo cardiovascular muy alto. En estudios de casos tratados con radioterapia
            estereotáctica corporal (SBRT) se ha documentado la estabilización del tumor, con una
            mediana de sobrevida de alrededor de 13 meses (Kruckman-Gatesy et al., 2020).
          </p>
          <p className="cond-editorial__body">
            Los quimiodectomas son tumores de crecimiento lento que se originan en las células
            quimiorreceptoras del cuerpo aórtico, cerca de la base del corazón. Rara vez hacen
            metástasis: el principal problema es su crecimiento local.
          </p>
          <h3 className="cond-editorial__h3">El derrame pericárdico, la presentación aguda más frecuente</h3>
          <p className="cond-editorial__body">
            Muchos perros con tumores de la base del corazón llegan primero con derrame pericárdico:
            una acumulación de líquido alrededor del corazón que dificulta su llenado. En la fase aguda,
            se trata con pericardiocentesis (drenaje). Una vez controlado el derrame, la tomografía
            computarizada y la evaluación cardiológica orientan la planificación de la radioterapia. La
            radioterapia puede reducir el volumen del tumor y la frecuencia con que reaparece el derrame; en
            algunos casos, ya no hace falta repetir la pericardiocentesis.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Las razas braquicéfalas tienen un riesgo mucho mayor.</strong> Los bóxer concentran
              la mayor proporción de diagnósticos de quimiodectoma, y los Boston terrier y los bulldog
              también están sobrerrepresentados. Si tu perro es de raza braquicéfala y muestra
              intolerancia al ejercicio, desmayos (síncopes) o dificultad para respirar sin causa
              aparente, conviene consultar con tu veterinario para hacer una evaluación cardiológica
              con ecocardiografía.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Por qué la exactitud es tan importante en esta zona</h3>
          <p className="cond-editorial__body">
            La base del corazón está rodeada de estructuras sensibles a la radiación: el corazón, la
            aorta, la arteria pulmonar, los pulmones y el esófago. La planificación exige límites de
            dosis estrictos en todos los órganos cercanos y, a la vez, una dosis adecuada en el volumen
            tumoral. Es justamente el tipo de caso en el que la radioterapia guiada por imagen resulta
            más útil.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente la tomografía
              y la evaluación cardiológica de cada caso antes de planificar la radioterapia.
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
            Derivar un paciente con<br /><em>tumor de la base del corazón</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Nos coordinamos con el
            cardiólogo y el veterinario de cabecera durante todo el tratamiento.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}
