import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (feline meningioma
// long-term control with SRS/SRT; 3D-CRT outcomes).
const REFERENCES: Reference[] = [
  { authors: 'Körner M, et al.', year: '2019', title: 'Radiation therapy for intracranial tumours in cats with neurological signs', source: 'J Feline Med Surg. 21(8):765' },
  { authors: 'Kelsey KL, Gieger TL, Nolan MW', year: '2018', title: 'Single fraction stereotactic radiation therapy (stereotactic radiosurgery) is a feasible method for treating intracranial meningiomas in dogs', source: 'Vet Radiol Ultrasound' },
  { authors: 'Berlato D, et al.', year: '2018', title: 'Canine meningiomas treated with three-dimensional conformal radiation therapy require magnetic resonance imaging restaging', source: 'Vet Radiol Ultrasound' },
]

const pageSeo = getPageSeoEs('/meningioma')

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

export default function MeningiomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para meningioma">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-hero.webp"
            alt="Radioterapia para meningioma en perros y gatos · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/brain-tumors')}>Tumores cerebrales</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Meningioma</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para meningioma · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia<br />para meningioma<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            El meningioma es el tumor cerebral más frecuente en los gatos. Según el caso, se trata con cirugía, con radioterapia o con ambas.
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
            <div className="cond-editorial__kicker-text">El meningioma en mascotas</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Un tumor que crece<br /><em>sobre el cerebro</em>
          </h2>
          <p className="cond-editorial__lead">
            El meningioma se origina en las meninges, las membranas que recubren el cerebro y la médula
            espinal. Suele crecer lentamente y, en los gatos, estar bien delimitado.
            En los perros, es más habitual en animales mayores de razas grandes y crece sobre la superficie del cerebro.
          </p>
          <p className="cond-editorial__body">
            Los signos más habituales incluyen convulsiones, cambios de comportamiento, caminar en
            círculos, presionar la cabeza contra superficies, pérdida de coordinación y cambios en la
            visión. Como el cráneo limita la expansión, incluso un tumor de crecimiento lento puede
            comprimir el tejido cerebral que lo rodea, y los signos pueden agravarse en poco tiempo
            una vez que aparecen.
          </p>
          <h3 className="cond-editorial__h3">El papel de la cirugía y de la radioterapia</h3>
          <p className="cond-editorial__body">
            En los gatos, los meningiomas suelen estar bien delimitados y pueden operarse; muchas
            veces, la cirugía es la mejor opción y logra muy buenos resultados a largo plazo. En los
            perros, tienden a extenderse hacia el tejido que los rodea y a menudo no pueden extirparse
            por completo, por lo que la radioterapia suele tener el papel principal. También es útil
            después de una extirpación incompleta o cuando no es posible operar. La Dra. DiBernardi
            revisa cada caso para recomendar el abordaje más adecuado.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              Cuando la cirugía no es posible, los gatos tratados con radioterapia suelen mantener una buena calidad de vida.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Qué estudios de imagen se necesitan antes del tratamiento</h3>
          <p className="cond-editorial__body">
            La resonancia magnética es el estudio de referencia para diagnosticar el meningioma y
            planificar el tratamiento: define los bordes del tumor, su ubicación respecto de
            estructuras críticas y el grado de compresión del cerebro. También puede usarse la
            tomografía computarizada para planificar la radioterapia. La Dra. DiBernardi analiza estos
            estudios para indicar el protocolo según el tamaño y la ubicación del tumor y el estado de
            tu mascota.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              meningioma (estudios de imagen e historia clínica) antes de indicar el protocolo.
            </div>
          </div>
        </div>
      </section>



      <References items={REFERENCES} lang="es" />

      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">Para las familias</div>
          <div className="cond-cta__title">
            Evaluación de una especialista<br /><em>Respuesta rápida</em>
          </div>
          <p className="cond-cta__text">
            Cuéntanos sobre tu mascota y te
            responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios derivantes</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>meningioma</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Nos coordinamos
            directamente con tu clínica durante todo el tratamiento y te enviamos informes completos.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}
