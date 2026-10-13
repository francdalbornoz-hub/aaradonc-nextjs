import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageSeoEs } from '@/lib/seo-config'
import { esPath } from '@/lib/i18n'
import References, { type Reference } from '@/components/ui/References'

// Peer-reviewed sources supporting the claims on this page (melanoma is
// radiosensitive to large-fraction protocols; survival by stage with RT ±
// chemotherapy).
const REFERENCES: Reference[] = [
  { authors: 'Baja AJ, et al.', year: '2022', title: 'A retrospective study of 101 dogs with oral melanoma treated with a weekly or biweekly 6 Gy × 6 radiotherapy protocol', source: 'Vet Comp Oncol' },
  { authors: 'Cancedda S, et al.', year: '2014', title: 'Efficacy and side effects of radiation therapy in comparison with radiation therapy and temozolomide in the treatment of measurable oral canine melanoma', source: 'Vet Comp Oncol' },
  { authors: 'Cunha SC, et al.', year: '2018', title: 'Radiation therapy for oral melanoma in dogs: a retrospective study', source: 'Ciência Rural. 48(4)' },
  { authors: 'Bateman KE, et al.', year: '1994', title: 'Radiation therapy for the treatment of canine oral melanoma', source: 'J Vet Intern Med' },
]

const pageSeo = getPageSeoEs('/oral-melanoma')

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

export default function OralMelanomaPage() {
  return (
    <>
      <section className="cond-hero" aria-label="Radioterapia para melanoma oral">
        <div className="cond-hero__bg">
          <Image
            src="/images/dog-cat-hero.jpg"
            alt="Radioterapia para melanoma oral en perros · AARADONC, Palm Beach, Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
        </div>
        <div className="cond-hero__overlay" aria-hidden="true" />
        <div className="cond-hero__left">
          <nav className="cond-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link href={esPath('/')}>Inicio</Link><span>/</span>
            <Link href={esPath('/oral-tumors')}>Tumores orales</Link><span>/</span>
            <span style={{ color: 'rgba(255,255,255,.55)' }}>Melanoma oral</span>
          </nav>
          <div className="cond-hero__tag">Radioterapia para melanoma oral · Perros · Florida</div>
          <h1 className="cond-hero__h1">
            Radioterapia para<br />melanoma oral<br /><em>en perros</em>
          </h1>
          <p className="cond-hero__sub">
            El melanoma oral es el tumor maligno más frecuente en la boca de los perros. La
            radioterapia ayuda a controlarlo localmente.
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
            <div className="cond-editorial__kicker-text">El melanoma oral en perros</div>
          </div>
          <h2 id="editorial-heading" className="cond-editorial__h2">
            Control local con radioterapia
          </h2>
          <p className="cond-editorial__lead">
            El melanoma oral crece rápido y hace metástasis temprano a los ganglios linfáticos regionales y a órganos a distancia, como los pulmones. Por eso, el tratamiento local por sí
            solo rara vez es suficiente. La radioterapia ayuda a controlar el tumor en la boca, y tu
            oncólogo puede hablar contigo de otras opciones de tratamiento.
          </p>
          <p className="cond-editorial__body">
            El melanoma oral se origina con más frecuencia en la encía, el paladar duro y la mucosa de
            los labios. Crece rápido y a menudo invade el hueso cercano. Los primeros signos (hinchazón de la cara, dificultad para comer, mal aliento o saliva con sangre) suelen aparecer cuando
            el tumor ya tiene un tamaño considerable. Por eso conviene hacer el estadiamiento y
            comenzar el tratamiento una vez confirmado el diagnóstico.
          </p>
          <h3 className="cond-editorial__h3">Por qué el melanoma responde bien a la radioterapia</h3>
          <p className="cond-editorial__body">
            A diferencia de otros tumores, que responden mejor a muchas dosis pequeñas, el melanoma es
            especialmente sensible a dosis más altas por sesión. Por eso, en muchos casos se logra un
            buen control local con menos sesiones, lo que significa menos anestesias y un tratamiento
            más corto. La
            radioterapia con intención curativa también es una opción y puede indicarse en casos
            seleccionados.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              <strong>El estadio importa.</strong> Antes del tratamiento se realizan de rutina una
              tomografía computarizada de cráneo y tórax y una punción con aguja fina de los ganglios
              linfáticos regionales. El estadiamiento define el pronóstico y ayuda a planificar el
              tratamiento.
            </div>
          </div>
          <h3 className="cond-editorial__h3">Qué esperar del tratamiento</h3>
          <p className="cond-editorial__body">
            La radioterapia para el melanoma oral se realiza con anestesia general y tu perro vuelve a
            casa el mismo día. En general, los pacientes toleran bien el tratamiento. El efecto
            secundario más frecuente es una reacción aguda de la mucosa de la boca, que es temporal. La respuesta del tumor (una reducción visible del tamaño y menos molestias) suele notarse en las
            semanas posteriores a terminar las sesiones.
          </p>
          <div className="cond-editorial__fact">
            <div className="cond-editorial__fact-icon" aria-hidden="true">{INFO_ICON}</div>
            <div className="cond-editorial__fact-text">
              En AARADONC, la <strong>Dra. Lisa DiBernardi</strong> revisa personalmente la
              tomografía de estadiamiento, la histopatología y la historia clínica de cada caso antes de indicar el protocolo.
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
            Derivar un paciente con<br /><em>melanoma oral</em>
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
