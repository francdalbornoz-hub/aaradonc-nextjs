'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { submitForm } from '@/lib/submit-form'
import { esPath, type Lang } from '@/lib/i18n'

type Species = 'dog' | 'cat' | 'other' | ''

type CompactData = {
  website: string
  vetName: string; clinic: string; phone: string; email: string
  patientName: string; species: Species; diagnosis: string; notes: string
}

const INITIAL: CompactData = {
  website: '', vetName: '', clinic: '', phone: '', email: '',
  patientName: '', species: '', diagnosis: '', notes: '',
}

const STRINGS = {
  en: {
    aria: 'Quick patient referral form',
    referringDvm: 'Referring DVM *', clinic: 'Clinic *', phone: 'Phone *', email: 'Email *',
    patientName: 'Patient Name', species: 'Species', dog: 'Dog', cat: 'Cat', other: 'Other',
    diagnosis: 'Diagnosis / Tumor Type', notes: 'Notes',
    success: 'Referral received. Dr. DiBernardi will follow up promptly.',
    error: 'Something went wrong. Please call us directly or email info@aaradonc.com.',
    submit: 'Submit Referral →', submitting: 'Submitting…',
    detailedPre: 'Need to send full clinical history with margins, chemo protocol, and diagnostics?',
    detailedLink: 'Use the detailed referral form →',
    subject: 'New Patient Referral — Veterinarian (Quick Form)',
    phVet: 'Dr. Jane Smith', phClinic: 'Palm Beach Animal Clinic', phPhone: '(561) 000-0000',
    phEmail: 'you@yourclinic.com', phPatient: 'e.g. Max',
    phDx: 'e.g. Nasal adenocarcinoma, Mast cell tumor grade II',
    phNotes: 'Staging, prior treatments, imaging available, urgency...',
  },
  es: {
    aria: 'Formulario rápido de derivación',
    referringDvm: 'Veterinario derivante *', clinic: 'Clínica *', phone: 'Teléfono *', email: 'Correo electrónico *',
    patientName: 'Nombre del paciente', species: 'Especie', dog: 'Perro', cat: 'Gato', other: 'Otro',
    diagnosis: 'Diagnóstico o tipo de tumor', notes: 'Notas',
    success: 'Recibimos la derivación. La Dra. DiBernardi se comunicará contigo a la brevedad.',
    error: 'No pudimos enviar el formulario. Llámanos o escríbenos a info@aaradonc.com.',
    submit: 'Enviar derivación →', submitting: 'Enviando…',
    detailedPre: '¿Quieres enviar la historia clínica completa, con márgenes, protocolo de quimioterapia y estudios?',
    detailedLink: 'Usar el formulario de derivación completo →',
    subject: 'New Patient Referral — Veterinarian (Quick Form) (ES)',
    phVet: 'Dra. Juana Pérez', phClinic: 'Clínica Veterinaria Palm Beach', phPhone: '(561) 000-0000',
    phEmail: 'tu@clinica.com', phPatient: 'Ej.: Max',
    phDx: 'Ej.: adenocarcinoma nasal, mastocitoma grado II',
    phNotes: 'Estadiamiento, tratamientos previos, estudios de imagen disponibles, urgencia…',
  },
} as const

export default function FormReferralCompact({ lang = 'en' }: { lang?: Lang }) {
  const t = STRINGS[lang]
  const detailedHref = lang === 'es' ? esPath('/contact-referrers') : '/contact-referrers'
  const [data, setData] = useState<CompactData>(INITIAL)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function update<K extends keyof CompactData>(key: K, value: CompactData[K]) {
    setData((d) => ({ ...d, [key]: value }))
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (data.website) return
    setSubmitting(true); setStatus('idle')
    try {
      await submitForm(t.subject, data)
      setStatus('success'); setData(INITIAL)
    } catch { setStatus('error') } finally { setSubmitting(false) }
  }

  return (
    <form className="aaradonc-form aaradonc-form--light" onSubmit={handleSubmit} noValidate aria-label={t.aria}>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} name="website"
        value={data.website} onChange={(e) => update('website', e.target.value)} />

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="frc-vet">{t.referringDvm}</label></div>
          <input id="frc-vet" type="text" name="vetName" autoComplete="name" required placeholder={t.phVet}
            value={data.vetName} onChange={(e) => update('vetName', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="frc-clinic">{t.clinic}</label></div>
          <input id="frc-clinic" type="text" name="clinic" required placeholder={t.phClinic}
            value={data.clinic} onChange={(e) => update('clinic', e.target.value)} />
        </div>
      </div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="frc-phone">{t.phone}</label></div>
          <input id="frc-phone" type="tel" name="phone" autoComplete="tel" required placeholder={t.phPhone}
            value={data.phone} onChange={(e) => update('phone', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="frc-email">{t.email}</label></div>
          <input id="frc-email" type="email" name="email" autoComplete="email" required placeholder={t.phEmail}
            value={data.email} onChange={(e) => update('email', e.target.value)} />
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="frc-patient">{t.patientName}</label></div>
        <input id="frc-patient" type="text" name="patientName" placeholder={t.phPatient}
          value={data.patientName} onChange={(e) => update('patientName', e.target.value)} />
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>{t.species}</label></div>
        <div className="ff-el-form-check">
          {(['dog', 'cat', 'other'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="species"
                value={v} checked={data.species === v} onChange={() => update('species', v)} />
              {v === 'dog' ? t.dog : v === 'cat' ? t.cat : t.other}
            </label>
          ))}
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="frc-diagnosis">{t.diagnosis}</label></div>
        <input id="frc-diagnosis" type="text" name="diagnosis" placeholder={t.phDx}
          value={data.diagnosis} onChange={(e) => update('diagnosis', e.target.value)} />
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="frc-notes">{t.notes}</label></div>
        <textarea id="frc-notes" name="notes" rows={3} placeholder={t.phNotes}
          value={data.notes} onChange={(e) => update('notes', e.target.value)} />
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
        {submitting ? t.submitting : t.submit}
      </button>

      <div className="ff-el-tc" style={{ marginTop: 12 }}>
        {t.detailedPre}{' '}
        <Link href={detailedHref} style={{ color: '#1A4FBF', fontWeight: 600, textDecoration: 'underline' }}>
          {t.detailedLink}
        </Link>
      </div>
    </form>
  )
}
