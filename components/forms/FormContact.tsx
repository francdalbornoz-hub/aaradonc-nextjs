'use client'

import { useState, type FormEvent } from 'react'
import { submitForm } from '@/lib/submit-form'

type Species = 'dog' | 'cat' | 'other' | ''

// Sentinel value submitted when the visitor has no confirmed diagnosis yet.
// Keeps the field meaningful in the notification email while removing the
// friction of forcing a diagnosis they may not have.
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

type Props = { variant?: 'light' | 'dark' }

export default function FormContact({ variant = 'light' }: Props) {
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
      await submitForm('New Consultation Request — Pet Family', data)
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
      aria-label="Request consultation form"
    >
      <input
        type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ display: 'none' }} name="website"
        value={data.website} onChange={(e) => update('website', e.target.value)}
      />

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fc-name">Full Name *</label></div>
        <input id="fc-name" type="text" name="fullName" autoComplete="name" required
          placeholder="Your name"
          value={data.fullName} onChange={(e) => update('fullName', e.target.value)} />
      </div>

      <div className="ff-column-2">
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fc-phone">Phone *</label></div>
          <input id="fc-phone" type="tel" name="phone" autoComplete="tel" required
            placeholder="(561) 000-0000"
            value={data.phone} onChange={(e) => update('phone', e.target.value)} />
        </div>
        <div className="ff-el-group">
          <div className="ff-el-input--label"><label htmlFor="fc-email">Email *</label></div>
          <input id="fc-email" type="email" name="email" autoComplete="email" required
            placeholder="your@email.com"
            value={data.email} onChange={(e) => update('email', e.target.value)} />
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label>Pet Type</label></div>
        <div className="ff-el-form-check">
          {(['dog', 'cat', 'other'] as const).map((v) => (
            <label key={v} className="ff-el-form-check-label">
              <input type="radio" className="ff-el-form-check-input" name="species"
                value={v} checked={data.species === v}
                onChange={() => update('species', v)} />
              {v === 'dog' ? 'Dog' : v === 'cat' ? 'Cat' : 'Other'}
            </label>
          ))}
        </div>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fc-diagnosis">Diagnosis / Tumor Type</label></div>
        <input id="fc-diagnosis" type="text" name="diagnosis"
          placeholder="e.g. Brain tumor, Mast cell tumor"
          value={data.diagnosis === NO_DIAGNOSIS ? '' : data.diagnosis}
          disabled={data.diagnosis === NO_DIAGNOSIS}
          onChange={(e) => update('diagnosis', e.target.value)} />
        <label className="ff-el-form-check-label" style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <input type="checkbox" className="ff-el-form-check-input"
            checked={data.diagnosis === NO_DIAGNOSIS}
            onChange={(e) => update('diagnosis', e.target.checked ? NO_DIAGNOSIS : '')} />
          I don&apos;t have a diagnosis yet
        </label>
      </div>

      <div className="ff-el-group">
        <div className="ff-el-input--label"><label htmlFor="fc-message">Message (optional)</label></div>
        <textarea id="fc-message" name="message" rows={3}
          placeholder="Any additional information or questions..."
          value={data.message} onChange={(e) => update('message', e.target.value)} />
      </div>

      {status === 'success' && (
        <div className="ff-response-message ff_success_response" role="status">
          Thank you. We&apos;ll be in touch promptly.
        </div>
      )}
      {status === 'error' && (
        <div className="ff-response-message ff_failed_response" role="alert">
          Something went wrong. Please call us directly or email info@aaradonc.com.
        </div>
      )}

      <button type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Request a Consultation →'}
      </button>

      <div className="ff-el-tc">
        We respond promptly. No pressure, no commitment.
      </div>
    </form>
  )
}
