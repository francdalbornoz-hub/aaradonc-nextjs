import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (feline injection-
// site / vaccine-associated sarcoma treated with surgery + radiation).
const REFERENCES: Reference[] = [
  { authors: 'Cronin K, et al.', year: '1998', title: 'Radiation therapy and surgery for fibrosarcoma in 33 cats', source: 'Vet Radiol Ultrasound' },
  { authors: 'Mayer MN, Treuil PL, LaRue SM', year: '2009', title: 'Radiotherapy and surgery for feline soft tissue sarcoma', source: 'Vet Radiol Ultrasound' },
]

const pageSeo = getPageSeoEs('/vaccine-associated-sarcoma')

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

export default function VaccineAssociatedSarcomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para sarcoma asociado al punto de inyección">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-patient.jpg"
            alt="Radioterapia para sarcoma asociado al punto de inyección en gatos · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/cat-cancer')}>Cáncer en gatos</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Sarcoma asociado al punto de inyección</span>
          </nav>
          <div className="cond-hero__tag">Sarcoma asociado al punto de inyección · Gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para sarcoma<br />asociado al punto de inyección<br /><em>en gatos</em>
          </h1>
          <p className="cond-hero__sub">
            El sarcoma asociado al punto de inyección es uno de los cánceres más complejos en gatos: es
            localmente agresivo y tiende a reaparecer cuando se trata solo con cirugía. Junto con la
            cirugía, la radioterapia es parte del tratamiento estándar y reduce el riesgo de recidiva.
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
            <div className="cond-editorial__kicker-text">El sarcoma asociado al punto de inyección en gatos</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Cirugía y radioterapia,<br /><em>juntas</em>
          </h2>
          <p className="cond-editorial__lead">
            El sarcoma asociado al punto de inyección invade músculo, fascia y tejidos cercanos mucho
            más allá de lo que se puede ver o palpar. La radioterapia elimina las células tumorales que pueden quedar después de la cirugía.
          </p>
          <p className="cond-editorial__body">
            Este sarcoma se asocia a una respuesta inflamatoria en los puntos de inyección: con mayor
            frecuencia, vacunas y, rara vez, otros productos inyectados. Es un tumor agresivo: crece
            rápido, se extiende a lo largo de la fascia y puede llegar a los márgenes quirúrgicos
            incluso con una extirpación amplia. Las guías actuales recomiendan márgenes amplios, que a
            menudo son difíciles de lograr sin afectar estructuras importantes.
          </p>
          <h3 className="cond-editorial__h3">Radioterapia antes o después de la cirugía</h3>
          <p className="cond-editorial__body">
            La radioterapia antes de la cirugía (neoadyuvante) reduce el volumen del tumor y puede
            permitir márgenes más amplios. La radioterapia posquirúrgica (adyuvante) trata el lecho
            quirúrgico, donde pueden quedar células tumorales. Se utilizan ambos enfoques; el orden depende del tamaño del tumor, su
            ubicación y la planificación quirúrgica. La Dra. DiBernardi analiza en cada caso cuál es el
            orden más adecuado.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Cualquier bulto en un sitio donde tu gato recibió una inyección</strong> debe
              evaluarse pronto. Se aplica la regla 3-2-1: toda masa que persista más de 3 meses, mida
              más de 2 cm o siga creciendo 4 semanas después de la inyección debe biopsiarse sin demora.
              Un diagnóstico temprano, antes de que el tumor deje de ser operable, mejora el pronóstico.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Qué muestra la tomografía y por qué importa</h3>
          <p className="cond-editorial__body">
            Antes del tratamiento se necesita una tomografía computarizada del sitio primario y del
            tórax. La tomografía define la extensión real de la infiltración del tumor, que suele ser
            mayor de lo que se palpa, y ayuda a descartar metástasis pulmonares.
            Esta información influye directamente en la planificación quirúrgica, el diseño de los
            campos de radioterapia y el pronóstico.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              sarcoma asociado al punto de inyección (tomografía, resultados de la biopsia y planificación
              quirúrgica) para coordinar la radioterapia con la cirugía y lograr el mejor
              control local posible.
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
            Cuéntanos sobre tu gato y te
            responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>sarcoma asociado al punto de inyección</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos la
            radioterapia con tu equipo quirúrgico y enviamos informes completos durante
            todo el tratamiento.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}
