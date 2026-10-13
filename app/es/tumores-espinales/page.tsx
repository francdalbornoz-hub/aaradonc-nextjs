import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (stereotactic and
// fractionated radiation for spinal/vertebral and CNS tumors).
const REFERENCES: Reference[] = [
  { authors: 'Swift KE, LaRue SM', year: '2017', title: 'Outcome of 9 dogs treated with stereotactic radiation therapy for primary or metastatic vertebral osteosarcoma', source: 'Vet Comp Oncol' },
]

const pageSeo = getPageSeoEs('/spinal-tumors')

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

export default function SpinalTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para tumores espinales">
        <div className="cond-hero__bg">
          <Image
            src="/images/cat-hero.webp"
            alt="Radioterapia para tumores espinales en perros y gatos · AARADONC, Palm Beach, Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Tumores espinales</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para tumores espinales · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />tumores espinales<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            Los tumores espinales pueden causar dolor y debilidad. Cuando no es posible operar o la extirpación es incompleta, la radioterapia puede aliviar la compresión de la médula espinal y frenar el avance del tumor.
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
            <div className="cond-editorial__kicker-text">Los tumores espinales en mascotas</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Un tratamiento que protege<br /><em>la médula espinal</em>
          </h2>
          <p className="cond-editorial__lead">
            Los tumores espinales comprimen o invaden la médula espinal y causan debilidad progresiva,
            falta de coordinación y dolor, que empeoran a medida que el tumor crece. Como la médula
            espinal es sensible a la radiación, el tratamiento debe aplicarse con gran exactitud. En
            AARADONC contamos con la tecnología para hacerlo.
          </p>
          <p className="cond-editorial__body">
            Los tumores espinales en perros y gatos se clasifican según dónde se originan respecto de la
            médula espinal: extradurales (fuera del saco dural; en su mayoría tumores vertebrales o
            enfermedad metastásica), intradurales-extramedulares (dentro del saco dural pero fuera de la
            médula; incluyen meningiomas y tumores de la vaina nerviosa) e intramedulares (dentro de la
            propia médula). Cada tipo tiene distinta accesibilidad quirúrgica y distinta respuesta a la
            radioterapia.
          </p>
          <h3 className="cond-editorial__h3">Por qué la radioterapia suele ser la opción principal</h3>
          <p className="cond-editorial__body">
            Muchos tumores espinales, sobre todo las masas intramedulares y los tumores ubicados en
            segmentos vertebrales de difícil acceso quirúrgico, no pueden operarse sin
            riesgo de daño neurológico permanente. En estos casos, la radioterapia trata el tumor sin superar la dosis que tolera la médula espinal.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>En los tumores espinales, el momento en el que se realiza el tratamiento es importante.</strong> Los déficits
              neurológicos progresivos (debilidad, ataxia, paresia) indican que la compresión de la
              médula espinal está empeorando. Si la parálisis ya es completa, es poco probable recuperar
              la función. Por eso conviene consultar sin demora cuando aparecen los primeros signos.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Radioterapia en la columna</h3>
          <p className="cond-editorial__body">
            La radioterapia puede ser una opción para tumores espinales bien delimitados:
            administra dosis altas al tumor, limita la dosis que recibe la médula espinal y puede
            mejorar la función neurológica.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              tumor espinal (resonancia magnética, tomografía computarizada, estado neurológico y
              tratamientos previos) antes de diseñar la radioterapia.
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
            Derivar un paciente con<br /><em>un tumor espinal</em>
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
