import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (adjuvant RT after
// incomplete excision; 1-year local control ~85–90% for grade II/low-grade MCT).
const REFERENCES: Reference[] = [
  { authors: 'Lejeune A, et al.', year: '2015', title: 'Aggressive local therapy combined with systemic chemotherapy provides long-term control in grade II stage 2 canine mast cell tumours', source: 'Vet Comp Oncol' },
  { authors: 'Al-Sarraf R, et al.', year: '1996', title: 'A prospective study of radiation therapy for the treatment of grade 2 mast cell tumors in 32 dogs', source: 'J Vet Intern Med' },
  { authors: 'Mason SL, et al.', year: '2020', title: 'Outcomes of adjunctive radiation therapy for the treatment of mast cell tumors in dogs and assessment of toxicity: a multicentre observational study', source: 'Vet Comp Oncol' },
  { authors: 'Chaffin K, Thrall DE', year: '2002', title: 'Results of radiation therapy in 19 dogs with cutaneous mast cell tumor and regional lymph node metastasis', source: 'Vet Radiol Ultrasound' },
  { authors: 'Hahn KA, King GK, Carreras JK', year: '2004', title: 'Efficacy of radiation therapy for incompletely resected grade III mast cell tumors in dogs: 31 cases', source: 'J Am Vet Med Assoc. 224(1):79' },
]

const pageSeo = getPageSeoEs('/mast-cell-tumors')

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

export default function MastCellTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para mastocitomas">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-golden.jpg"
            alt="Radioterapia para mastocitomas en perros · AARADONC, Palm Beach, Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Mastocitomas</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para mastocitomas · Perros · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para mastocitomas<br />en perros
          </h1>
          <p className="cond-hero__sub">
            Los mastocitomas son el cáncer de piel más frecuente en perros. Cuando la cirugía
            deja márgenes incompletos, o cuando la ubicación no permite una extirpación amplia, la
            radioterapia ayuda a reducir el riesgo de recidiva y a prolongar el tiempo libre de
            enfermedad.
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
            <div className="cond-editorial__kicker-text">Mastocitomas en perros</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            La radioterapia como<br /><em>complemento de la cirugía</em>
          </h2>
          <p className="cond-editorial__lead">
            Los mastocitomas son muy variables: algunos se mantienen poco activos durante
            años; otros crecen de forma agresiva y hacen metástasis temprano. Después de la cirugía,
            el informe de histopatología es fundamental: si muestra márgenes incompletos o estrechos, la radioterapia posquirúrgica puede reducir el riesgo de recidiva local.
          </p>
          <p className="cond-editorial__body">
            La ubicación del tumor suele determinar el margen quirúrgico que es posible obtener. Los
            tumores del hocico, los dedos, el prepucio, la región perianal y la parte distal de las
            extremidades a menudo no pueden extirparse con los márgenes recomendados de 2–3 cm sin
            una afectación funcional o estética importante. En estas zonas, la radioterapia complementa
            la cirugía: elimina las células tumorales que pueden quedar en los márgenes.
          </p>
          <h3 className="cond-editorial__h3">El grado importa, y también el momento</h3>
          <p className="cond-editorial__body">
            Los mastocitomas de grado II (intermedio) de Patnaik y de bajo grado de Kiupel son
            los que cuentan con más respaldo científico para la radioterapia posquirúrgica. Se han
            reportado tasas de control local a 1 año del 85–90 % cuando la radioterapia se realiza tras
            una extirpación incompleta. En los mastocitomas de alto grado, el control local también es
            importante, pero, por su mayor riesgo de metástasis, suele indicarse además un tratamiento
            sistémico. La radioterapia suele comenzar una vez que la herida quirúrgica ha cicatrizado.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              Que queden células tumorales en los bordes del tejido extirpado no significa que la
              cirugía haya fracasado. Este dato ayuda a decidir cómo continuar el tratamiento. La radioterapia
              posquirúrgica puede reducir el riesgo de que el tumor vuelva a crecer en la misma zona,
              especialmente donde es difícil retirar más tejido.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Mastocitomas inoperables</h3>
          <p className="cond-editorial__body">
            Cuando la cirugía no es posible, por la ubicación del tumor, su tamaño o la decisión de la
            familia, la radioterapia puede usarse como tratamiento local principal. La radioterapia con
            intención curativa o los protocolos paliativos pueden lograr una reducción tumoral
            importante, alivio de los signos clínicos y control local sin cirugía.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              mastocitoma (grado, márgenes, estadiamiento y estado del tratamiento sistémico)
              antes de diseñar la radioterapia. Cada tratamiento se coordina con tu oncólogo y tu
              veterinario habitual.
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
            Derivar un paciente con<br /><em>mastocitoma</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Revisamos los informes de
            patología quirúrgica y coordinamos la radioterapia con tu equipo de oncología.
          </p>
          <Link href={esPath('/for-veterinarians')} className="cond-cta__btn-secondary">Información para veterinarios derivantes →</Link>
        </div>
      </div>
    </>
  )
}
