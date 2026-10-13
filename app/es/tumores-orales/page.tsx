import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (radiation for oral
// melanoma, squamous cell carcinoma, and oral soft-tissue sarcoma / epulis).
const REFERENCES: Reference[] = [
  { authors: 'Baja AJ, et al.', year: '2022', title: 'A retrospective study of 101 dogs with oral melanoma treated with a weekly or biweekly 6 Gy × 6 radiotherapy protocol', source: 'Vet Comp Oncol' },
  { authors: 'van der Steen F, Zandvliet M', year: '2020', title: 'Treatment of canine oral papillary squamous cell carcinoma using definitive-intent radiation as a monotherapy: a case series', source: 'Vet Comp Oncol' },
]

const pageSeo = getPageSeoEs('/oral-tumors')

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

export default function OralTumorsPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para tumores orales">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Radioterapia para tumores orales en perros y gatos · AARADONC, Palm Beach, Florida"
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
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Tumores orales</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para tumores orales · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />tumores orales<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            En los tumores orales, la radioterapia puede indicarse después de la cirugía, como tratamiento principal cuando no es posible operar o con fines paliativos, para aliviar el dolor y ayudar a que tu mascota vuelva a comer con normalidad.
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
            <div className="cond-editorial__kicker-text">Tumores orales en mascotas</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Muchos tipos de tumor,<br />una <em>ubicación compleja</em>
          </h2>
          <p className="cond-editorial__lead">
            Los tumores orales en perros y gatos incluyen muchos tipos histológicos, cada uno con su
            propia biología, comportamiento y respuesta al tratamiento. Lo que comparten es la
            dificultad de la ubicación: la boca está cerca de estructuras delicadas, lo que hace compleja
            la cirugía, y no siempre es posible lograr márgenes quirúrgicos amplios. Ahí la radioterapia
            puede ayudar.
          </p>
          <h3 className="cond-editorial__h3">Por qué el tipo de tumor importa más que su ubicación</h3>
          <p className="cond-editorial__body">
            El melanoma oral, el fibrosarcoma, el carcinoma de células escamosas y el épulis
            acantomatoso se comportan de forma muy distinta. El melanoma requiere considerar
            tratamientos sistémicos además del control local. El fibrosarcoma es localmente agresivo y
            tiende a recidivar. En gatos, el carcinoma de células escamosas es uno de los cánceres más
            difíciles de tratar en medicina veterinaria. El épulis acantomatoso, aunque es localmente
            invasivo, suele responder muy bien a la radioterapia. En AARADONC, la planificación
            empieza por confirmar el tipo de tumor.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>Los tumores orales en perros y gatos suelen detectarse tarde</strong>, porque las
              mascotas tienden a ocultar las molestias en la boca. El mal aliento, la dificultad para
              comer, la hinchazón de la cara o la sangre en la saliva son signos de alerta que conviene
              que tu veterinario evalúe sin demora.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Cuándo se indica la radioterapia</h3>
          <p className="cond-editorial__body">
            La radioterapia posquirúrgica reduce el riesgo de recidiva local en los tumores orales con
            márgenes incompletos o estrechos, algo frecuente por la anatomía de la boca. Cuando la
            cirugía no es posible o la familia decide no
            realizarla, la radioterapia como tratamiento principal puede lograr un buen control local y aliviar los signos en distintos tipos de tumor.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente cada caso de
              tumor oral (histopatología, tomografía computarizada e informes quirúrgicos) antes de recomendar un protocolo.
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
            Derivar un paciente con<br /><em>un tumor oral</em>
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
