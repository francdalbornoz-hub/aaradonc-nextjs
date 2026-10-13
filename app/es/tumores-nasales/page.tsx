import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

const pageSeo = getPageSeoEs('/nasal-tumors')

// Peer-reviewed sources supporting the claims on this page (SBRT as standard,
// 1–5 session protocol, 12–19 month median survival). Verified against the
// clinic's approved literature base.
const REFERENCES: Reference[] = [
  { authors: 'Mayer MN, et al.', year: '2019', title: 'Outcomes and adverse effects associated with stereotactic body radiation therapy in dogs with nasal tumors: 28 cases (2011–2016)', source: 'J Am Vet Med Assoc. 254(5):602' },
  { authors: 'Gieger TL, Nolan MW', year: '2018', title: 'Linac-based stereotactic radiation therapy for canine non-lymphomatous nasal tumours: 29 cases (2013–2016)', source: 'Vet Comp Oncol' },
  { authors: 'Fox-Alvarez S, Shiomitsu K, Lejeune AT, Szivek A, Kubicek L', year: '2020', title: 'Outcome of intensity-modulated radiation therapy–based stereotactic radiation therapy for treatment of canine nasal carcinomas', source: 'Vet Radiol Ultrasound' },
  { authors: 'Czichon F, Rohrer Bley C, Meier V', year: '2021', title: 'Relative tumor volume has prognostic relevance in canine sinonasal tumors treated with radiation therapy: a retrospective study', source: 'PLoS ONE' },
  { authors: 'Fu D-R, et al.', year: '2023', title: 'Retrospective comparison of side effects and outcomes of three-dimensional conformal vs. intensity-modulated radiation therapy in the palliative-intent treatment (4 Gy × 5 daily fractions) of canine intranasal tumors (2010–2017)', source: 'Front Vet Sci. 10:1011949' },
  { authors: 'Hunley DW, Mauldin GN, Shiomitsu K, Mauldin GE', year: '2010', title: 'Clinical outcome in dogs with nasal tumors treated with intensity-modulated radiation therapy', source: 'Can Vet J. 51:293' },
]

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

export default function NasalTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para tumores nasales">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Radioterapia para tumores nasales en perros y gatos · AARADONC, Palm Beach, Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Tumores nasales</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para tumores nasales · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />tumores nasales<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            Los tumores nasales están entre los que mejor responden a la radioterapia. En perros, es
            el tratamiento estándar.
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
            <div className="cond-editorial__kicker-text">Tumores nasales en mascotas</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Un tumor de difícil<br /><em>acceso quirúrgico</em>
          </h2>
          <p className="cond-editorial__lead">
            Los adenocarcinomas, carcinomas y sarcomas de la cavidad nasal y de los senos paranasales suelen responder bien a la radioterapia, que en estos tumores es el tratamiento de referencia (gold
            standard).
          </p>
          <p className="cond-editorial__body">
            Los tumores nasales crecen dentro de la estructura rígida de la cavidad nasal, rodeada de
            hueso y cercana al cerebro, las órbitas y el paladar. Por esta anatomía, extirparlos por
            completo con cirugía es casi imposible sin alterar de forma importante la cara o sin riesgo
            neurológico. En cambio, la radioterapia puede aplicarse con exactitud en esa zona bien
            definida.
          </p>
          <h3 className="cond-editorial__h3">Por qué la radioterapia es el tratamiento principal de los tumores nasales</h3>
          <p className="cond-editorial__body">
            La radioterapia se asocia con una sobrevida más larga que el tratamiento de soporte solo.
            En estudios publicados se han reportado medianas de sobrevida de aproximadamente 13 a 19
            meses en perros tratados con radioterapia. En general, la calidad de vida se mantiene bien
            durante todo el proceso.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Si tu perro tiene más de 8 años y sangra por la nariz (epistaxis)</strong>,
              conviene descartar un tumor nasal: es uno de los signos más tempranos y frecuentes.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Qué esperar durante el tratamiento</h3>
          <p className="cond-editorial__body">
            Las sesiones son ambulatorias y se hacen con anestesia general. Los efectos secundarios agudos son temporales y se pueden
            controlar. Muchos pacientes mantienen su actividad y su apetito normales durante todo el
            tratamiento.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente la
              tomografía computarizada, el estadiamiento y la histopatología de cada caso antes de indicar el protocolo.
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
            Cuéntanos sobre tu mascota y te responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>un tumor nasal</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos directamente
            con tu clínica durante todo el tratamiento.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}
