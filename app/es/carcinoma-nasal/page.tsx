import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

const pageSeo = getPageSeoEs('/nasal-carcinoma')

// Peer-reviewed sources supporting the claims on this page (SBRT as standard,
// 1–5 session protocol, 12–19 month median survival). Verified against the
// clinic's approved literature base.
const REFERENCES: Reference[] = [
  { authors: 'Fox-Alvarez S, Shiomitsu K, Lejeune AT, Szivek A, Kubicek L', year: '2020', title: 'Outcome of intensity-modulated radiation therapy–based stereotactic radiation therapy for treatment of canine nasal carcinomas', source: 'Vet Radiol Ultrasound' },
  { authors: 'Mayer MN, et al.', year: '2019', title: 'Outcomes and adverse effects associated with stereotactic body radiation therapy in dogs with nasal tumors: 28 cases (2011–2016)', source: 'J Am Vet Med Assoc. 254(5):602' },
  { authors: 'Gieger TL, Nolan MW', year: '2018', title: 'Linac-based stereotactic radiation therapy for canine non-lymphomatous nasal tumours: 29 cases (2013–2016)', source: 'Vet Comp Oncol' },
  { authors: 'Hunley DW, Mauldin GN, Shiomitsu K, Mauldin GE', year: '2010', title: 'Clinical outcome in dogs with nasal tumors treated with intensity-modulated radiation therapy', source: 'Can Vet J. 51:293' },
  { authors: 'Czichon F, Rohrer Bley C, Meier V', year: '2021', title: 'Relative tumor volume has prognostic relevance in canine sinonasal tumors treated with radiation therapy: a retrospective study', source: 'PLoS ONE' },
  { authors: 'Fu D-R, et al.', year: '2023', title: 'Retrospective comparison of side effects and outcomes of three-dimensional conformal vs. intensity-modulated radiation therapy in the palliative-intent treatment (4 Gy × 5 daily fractions) of canine intranasal tumors (2010–2017)', source: 'Front Vet Sci. 10:1011949' },
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

export default function NasalCarcinomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para carcinoma nasal">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Radioterapia para carcinoma nasal en perros · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/nasal-tumors')}>Tumores nasales</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Carcinoma nasal</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para carcinoma nasal · Principalmente perros · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />carcinoma nasal<br /><em>en perros</em>
          </h1>
          <p className="cond-hero__sub">
            El adenocarcinoma nasal es el tumor nasal más frecuente en perros y uno de los que mejor
            responden a la radioterapia, que es el tratamiento de primera elección en estos casos y muestra resultados consistentes en distintos estudios publicados.
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
            <div className="cond-editorial__kicker-text">El carcinoma nasal en perros</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Por qué la radioterapia es<br /><em>el tratamiento principal</em>
          </h2>
          <p className="cond-editorial__lead">
            El adenocarcinoma nasal se origina dentro de la cavidad nasal, un espacio rodeado de hueso
            y cercano al cerebro, las órbitas y el paladar duro. Esta anatomía hace muy difícil la
            cirugía; en cambio, la radioterapia puede aplicarse con exactitud sobre el tumor en cada sesión.
          </p>
          <p className="cond-editorial__body">
            Los signos más frecuentes (sangrado por una sola fosa nasal o epistaxis, secreción nasal, hinchazón de la cara y dificultad para respirar por una fosa nasal) suelen aparecer meses
            antes de que se confirme el diagnóstico. Cuando la histopatología confirma el carcinoma, en
            general el tumor ya invadió el hueso cercano.
          </p>
          <h3 className="cond-editorial__h3">Qué muestran los estudios</h3>
          <p className="cond-editorial__body">
            Estudios retrospectivos publicados reportan medianas de sobrevida de aproximadamente 13 a 19
            meses en perros tratados con radioterapia. En casos seleccionados, sumar quimioterapia puede
            mejorar los resultados.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>El diagnóstico temprano importa.</strong> Los perros diagnosticados antes de que
              haya un compromiso cerebral importante o invasión de ambas fosas nasales suelen lograr una
              sobrevida más larga con radioterapia. Si tu perro tiene más de 8 años y sangra por una
              fosa nasal, conviene consultar pronto con tu veterinario.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Qué muestra la tomografía y por qué cambia el tratamiento</h3>
          <p className="cond-editorial__body">
            La tomografía computarizada del cráneo es necesaria antes de decidir cualquier tratamiento.
            Muestra la extensión exacta del tumor, la destrucción ósea, el compromiso de la lámina
            cribosa y la invasión de la órbita: información que define el campo de radiación e influye
            en el pronóstico. También se realiza una tomografía de tórax para descartar metástasis
            pulmonares, poco frecuentes en etapas tempranas, pero importantes para planificar el tratamiento.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada
              tomografía y cada informe de histopatología antes de diseñar el tratamiento. 
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
            Cuéntanos sobre tu perro y te responderemos a la brevedad con una recomendación clara.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios</div>
          <div className="cond-cta__title">
            Derivar un paciente con<br /><em>carcinoma nasal</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos directamente
            con tu clínica durante todo el tratamiento y enviamos informes completos.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}
