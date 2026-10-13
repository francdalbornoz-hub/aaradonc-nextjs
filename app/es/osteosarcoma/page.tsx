import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// ─── SEO ──────────────────────────────────────────────────────────────────────

const pageSeo = getPageSeoEs('/osteosarcoma')

// Peer-reviewed sources supporting the claims on this page (>90% palliative
// response, 3–5 session protocol, survival ranges). Verified against the
// clinic's approved literature base.
const REFERENCES: Reference[] = [
  { authors: 'Coomer AR, et al.', year: '2009', title: 'Radiation therapy for canine appendicular osteosarcoma', source: 'Vet Comp Oncol' },
  { authors: 'Martin TW, Griffin L, Custis J, et al.', year: '2021', title: 'Outcome and prognosis for canine appendicular osteosarcoma treated with stereotactic body radiation therapy in 123 dogs', source: 'Vet Comp Oncol' },
  { authors: 'Ramirez O III, Dodge RK, Page RL, et al.', year: '1999', title: 'Palliative radiotherapy of appendicular osteosarcoma in 95 dogs', source: 'Vet Radiol Ultrasound. 40(5):517' },
  { authors: 'Duffy ME, Anderson CL, Choy K, Fidel JL', year: '2018', title: 'Metronomic administration of lomustine following palliative radiation therapy for appendicular osteosarcoma in dogs', source: 'Can Vet J. 59:136' },
  { authors: 'Swift KE, LaRue SM', year: '2017', title: 'Outcome of 9 dogs treated with stereotactic radiation therapy for primary or metastatic vertebral osteosarcoma', source: 'Vet Comp Oncol' },
]

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: pageSeo.alternates,
  openGraph: {
    title: pageSeo.title,
    description: pageSeo.description,
    url: pageSeo.canonical,
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────


// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OsteosarcomaPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="cond-hero" aria-label="Radioterapia para osteosarcoma">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Radioterapia para osteosarcoma en perros y gatos · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/pet-cancer')}>Cáncer en mascotas</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Osteosarcoma</span>
          </nav>
          <div className="cond-hero__tag">Tratamiento del osteosarcoma · Perros y gatos · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />osteosarcoma<br /><em>en perros y gatos</em>
          </h1>
          <p className="cond-hero__sub">
            El osteosarcoma es el tumor óseo primario más frecuente en perros. Cuando la cirugía no es
            una opción, o cuando la prioridad es el bienestar, la radioterapia puede aliviar el dolor y
            mejorar la calidad de vida sin necesidad de amputar.
          </p>
          <div className="cond-hero__ctas">
            <Link href={esPath('/contact-pet-owners')} className="cta-primario">Agendar una consulta →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          EDITORIAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="seccion" style={{ background: '#fff' }} aria-labelledby="editorial-heading">
        <div className="cond-editorial">
          <div className="cond-editorial__kicker">
            <div className="cond-editorial__kicker-line" />
            <div className="cond-editorial__kicker-text">El osteosarcoma en perros y gatos</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Un tumor óseo doloroso,{' '}
            <em>con opciones para aliviarlo</em>
          </h2>
          <p className="cond-editorial__lead">
            El osteosarcoma representa más del 85 % de los tumores óseos primarios en perros. Es
            doloroso, destruye el hueso localmente y evoluciona rápido.
          </p>
          <p className="cond-editorial__body">
            En perros, el osteosarcoma afecta con mayor frecuencia los huesos largos (radio distal,
            húmero proximal, fémur distal y tibia proximal), sobre todo en razas grandes y gigantes. El
            tumor destruye el hueso desde adentro, y el dolor aumenta a medida que el hueso se
            debilita. El osteosarcoma también aparece en gatos, en los que la forma apendicular suele
            tener mejor pronóstico que en perros. El osteosarcoma axial, que afecta el cráneo, la
            columna, las costillas o la pelvis, plantea desafíos propios en ambas especies.
          </p>
          <h3 className="cond-editorial__h3">Tratamiento del osteosarcoma sin amputación</h3>
          <p className="cond-editorial__body">
            La amputación con quimioterapia sigue siendo el tratamiento estándar del osteosarcoma
            apendicular en perros cuando es posible, con una mediana de sobrevida de 10–12 meses. Pero
            no todas las mascotas son candidatas a cirugía, ya sea por la edad, otras enfermedades
            ortopédicas, la condición corporal o la decisión de la familia. En estos casos, la
            radioterapia paliativa combinada con analgésicos y bisfosfonatos es una opción eficaz para
            controlar el dolor sin cirugía.
          </p>
          <p className="cond-editorial__body">
            La radioterapia paliativa para el osteosarcoma reduce la inflamación asociada al tumor y
            frena la destrucción ósea local, que son las principales causas del dolor. Muchos perros
            muestran un alivio claro del dolor, a menudo en las primeras sesiones. No es un tratamiento
            curativo, pero la mejora en el bienestar y la movilidad está bien documentada.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              <strong>La radioterapia paliativa para el osteosarcoma</strong> requiere pocas sesiones, todas ambulatorias, y casi no altera la rutina de tu mascota.
              Muchas mascotas se mantienen cómodas y con movilidad durante todo el tratamiento.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Cuando el osteosarcoma afecta el cráneo, la columna o la pelvis</h3>
          <p className="cond-editorial__body">
            En el osteosarcoma del cráneo, la columna, las costillas o la pelvis, la cirugía rara vez es
            posible. La radioterapia, paliativa y a veces con intención curativa, pasa a ser el
            tratamiento principal. En AARADONC, los casos de osteosarcoma axial se evalúan de forma
            individual, y el protocolo se indica según la ubicación del tumor, su extensión y el estado
            del paciente.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> trabaja junto a tu veterinario
              para combinar la radioterapia con los analgésicos y bisfosfonatos que tu mascota ya
              recibe.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TUMOR TYPES
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          BRIDGE STATS
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════════════
          HOW WE TREAT
      ══════════════════════════════════════════════════════════════════════ */}


      <References items={REFERENCES} lang="es" />

      {/* ══════════════════════════════════════════════════════════════════════
          DUAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="cond-cta">
        <div className="cond-cta__col cond-cta__col--owners">
          <div className="cond-cta__label">Para familias</div>
          <div className="cond-cta__title">
            Opciones para aliviar<br /><em>el dolor del osteosarcoma</em>
          </div>
          <p className="cond-cta__text">
            La radioterapia paliativa para el osteosarcoma puede mejorar el bienestar y la movilidad de tu perro o tu gato. Agenda una consulta y la Dra. DiBernardi revisará
            personalmente el caso.
          </p>
          <Link href={esPath('/contact-pet-owners')} className="cond-cta__btn-primary">Agendar una consulta →</Link>
        </div>
        <div className="cond-cta__col cond-cta__col--vets">
          <div className="cond-cta__label">Para veterinarios</div>
          <div className="cond-cta__title">
            Derivar un caso<br /><em>de osteosarcoma</em>
          </div>
          <p className="cond-cta__text">
            Envía la derivación y nos comunicamos contigo en cuanto la recibamos. Coordinamos la radioterapia con el protocolo de control del dolor que ya estás aplicando.
          </p>
          <Link href={esPath('/contact-referrers')} className="cond-cta__btn-secondary">Derivar un paciente →</Link>
        </div>
      </div>
    </>
  )
}
