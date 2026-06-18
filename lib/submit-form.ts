/**
 * AARADONC — Form submission helper (Web3Forms)
 *
 * Static-export friendly: the browser POSTs directly to Web3Forms, so no API
 * route / backend is needed (required for Hostinger shared hosting).
 *
 * All three site forms (FormContact, FormReferral, FormReferralCompact) share a
 * SINGLE access key and the same destination inbox (info@aaradonc.com). They are
 * told apart by the `subject` each one passes in.
 *
 * Setup:
 *   1. Create a free access key at https://web3forms.com (destination: info@aaradonc.com)
 *   2. Add it to .env.local:  NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

type FieldValue = string | number | boolean | null | undefined
type FormPayload = Record<string, FieldValue | Record<string, FieldValue>>

/** Render a single value for the email body. */
function render(value: FieldValue): string {
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  return value == null ? '' : String(value)
}

/**
 * Flattens one level of nesting (e.g. the referral `diagnostics` object) into
 * "parent.child" keys, and drops the `website` honeypot field.
 */
function flatten(data: FormPayload): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [key, value] of Object.entries(data)) {
    if (key === 'website') continue // honeypot — never send
    if (value && typeof value === 'object') {
      for (const [childKey, childValue] of Object.entries(value)) {
        out[`${key}.${childKey}`] = render(childValue)
      }
    } else {
      out[key] = render(value)
    }
  }
  return out
}

/**
 * Submits a form to Web3Forms. Resolves on success; throws on any failure so
 * the caller's catch can show the error state.
 */
export async function submitForm(subject: string, data: FormPayload): Promise<void> {
  if (!ACCESS_KEY) {
    throw new Error('NEXT_PUBLIC_WEB3FORMS_KEY is not set')
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject,
      from_name: 'AARADONC Website',
      ...flatten(data),
    }),
  })

  const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
  if (!res.ok || !json?.success) {
    throw new Error(json?.message ?? 'Form submission failed')
  }
}
