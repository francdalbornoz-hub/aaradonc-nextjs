'use client'

import { useState, type FormEvent } from 'react'
import { submitForm } from '@/lib/submit-form'
import type { Lang } from '@/lib/i18n'

type Species = 'dog' | 'cat' | 'other' | ''

// Sentinel value submitted when the visitor has no confirmed diagnosis yet.
// Kept in English so the clinic's notification inbox stays consistent
// regardless of the page language.
const NO_DIAGNOSIS = "Don't have a diagnosis yet"

type ContactData = {
  website: string  // honeypot
  fullName: string
  phone: string
  email: string
  species: Species
  diagnosis: string
  message: string
}

const INITIAL: ContactData = {
  website: '', fullName: '', phone: '', email: '',
  species: '', diagnosis: '', message: '',
}

const STRINGS = {
  en: {
    aria: 'Request consultation form',
    fullName: 'Full Name *', fullNamePh: 'Your name',
    phone: 'Phone *', phonePh: '(561) 000-0000',
    email: 'Email *', emailPh: 'your@email.com',
    petType: 'Pet Type', dog: 'Dog', cat: 'Cat', other: 'Other',
    diagnosis: 'Diagnosis / Tumor Type', diagnosisPh: 'e.g. Brain tumor, Mast cell tumor',
    noDiagnosis: "I don't have a diagnosis yet",
    message: 'Message (optional)', messagePh: 'Any additional information or questions...',
    success: "Thank you. We'll be in touch promptly.",
    error: 'Something went wrong. Please call us directly or email info@aaradonc.com.',
    submit: 'Request a Consultation →', sending: 'Sending…',
    tc: 'We respond promptly.',
    subject: 'New Consultation Request — Pet Family',
  },
  es: {
    aria: 'Formulario de solicitud de consulta',
    fullName: 'Nombre completo *', fullNamePh: 'Tu nombre',
    phone: 'Teléfono *', phonePh: '(561) 000-0000',
    email: 'Correo electrónico *', emailPh: 'tu@email.com',
    petType: 'Tipo de mascota', dog: 'Perro', cat: 'Gato', other: 'Otro',
    diagnosis: 'Diagnóstico o tipo de tumor', diagnosisPh: 'Por ejemplo: tumor cerebral, mastocitoma',
    noDiagnosis: 'Mi mascota aún no tiene un diagnóstico',
    message: 'Mensaje (opcional)', messagePh: 'Cuéntanos tus dudas o agrega información sobre tu mascota…',
    success: 'Gracias. Te responderemos a la brevedad.',
    error: 'No pudimos enviar tu mensaje. Por favor, llámanos o escríbenos a info@aaradonc.com.',
    submit: 'Agendar una consulta →', sending: 'Enviando…',
    tc: 'Te responderemos a la brevedad.',
    subject: 'New Consultation Request — Pet Family (ES)',
  },
} as const

type Props = { variant?: 'light' | 'dark'; lang?: Lang }

export default function FormContact({ variant = 'light', lang = 'en' }: Props) {
  const t = STRINGS[lang]
  const [data, setData] = useState<ContactData>(INITIAL)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function update<K extends keyof ContactData>(key: K, value: ContactData[K]) {
    setData((d) => ({ ...d, [key]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (data.website) return
    setSubmitting(true)
    setStatus('idle')
    try {
      await submitForm(t.subject, data)
      setStatus('success')
      setData(INITIAL)
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      className={`aaradonc-form aaradonc-form--${variant}`}
      onSubmit={handleSubmit}
      noValidate
      aria-label={t.aria}
    >
      <input
        type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ display: 'none' }} name="website"
        value={data.website} onChange={(e) => update('website', e.target.value)}
      />

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fc-name">{t.fullName}</label></div>
        <input id="fc-name" type="text" name="fullName" autoComplete="name" required
          placeholder={t.fullNamePh}
          value={data.fullName} onChange={(e) => update('fullName', e.target.value)} />
      </div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fc-phone">{t.phone}</label></div>
          <input id="fc-phone" type="tel" name="phone" autoComplete="tel" required
            placeholder={t.phonePh}
            value={data.phone} onChange={(e) => update('phone', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fc-email">{t.email}</label></div>
          <input id="fc-email" type="email" name="email" autoComplete="email" required
            placeholder={t.emailPh}
            value={data.email} onChange={(e) => update('email', e.target.value)} />
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>{t.petType}</label></div>
        <div className="ff-el-form-check">
          {(['dog', 'cat', 'other'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="species"
                value={v} checked={data.species === v}
                onChange={() => update('species', v)} />
              {v === 'dog' ? t.dog : v === 'cat' ? t.cat : t.other}
            </label>
          ))}
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fc-diagnosis">{t.diagnosis}</label></div>
        <input id="fc-diagnosis" type="text" name="diagnosis"
          placeholder={t.diagnosisPh}
          value={data.diagnosis === NO_DIAGNOSIS ? '' : data.diagnosis}
          disabled={data.diagnosis === NO_DIAGNOSIS}
          onChange={(e) => update('diagnosis', e.target.value)} />
        <label className="ff-el-form-check-label" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <input type="checkbox" className="ff-el-form-check-input"
            checked={data.diagnosis === NO_DIAGNOSIS}
            onChange={(e) => update('diagnosis', e.target.checked ? NO_DIAGNOSIS : '')} />
          {t.noDiagnosis}
        </label>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fc-message">{t.message}</label></div>
        <textarea id="fc-message" name="message" rows={3}
          placeholder={t.messagePh}
          value={data.message} onChange={(e) => update('message', e.target.value)} />
      </div>

      {status === 'success' && (
        <div className="ff-response-message ff_success_response" role="status">
          {t.success}
        </div>
      )}
      {status === 'error' && (
        <div className="ff-response-message ff_failed_response" role="alert">
          {t.error}
        </div>
      )}

      <button type="submit" disabled={submitting}>
        {submitting ? t.sending : t.submit}
      </button>

      <div className="ff-el-tc">
        {t.tc}
      </div>
    </form>
  )
}
