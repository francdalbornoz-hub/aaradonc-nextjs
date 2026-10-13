// Circular flag icons (inline SVG, clipped to a circle via border-radius).
// Used by the language switcher in the header and the floating language button.

interface FlagProps {
  size?: number
  className?: string
}

const circle = (size: number): React.CSSProperties => ({
  borderRadius: '50%',
  display: 'block',
  flexShrink: 0,
  width: size,
  height: size,
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)',
})

/** Spain — simplified (red / yellow / red horizontal bands). */
export function FlagES({ size = 22, className }: FlagProps) {
  return (
    <svg viewBox="0 0 24 24" style={circle(size)} className={className} role="img" aria-label="España">
      <rect width="24" height="24" fill="#C60B1E" />
      <rect y="6" width="24" height="12" fill="#FFC400" />
    </svg>
  )
}

/** United States — simplified (13 stripes + blue canton with stars). */
export function FlagUS({ size = 22, className }: FlagProps) {
  const h = 24 / 13
  const stripes = Array.from({ length: 13 }, (_, i) => (
    <rect key={i} y={i * h} width="24" height={h} fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'} />
  ))
  // Star grid inside the canton (7 stripes tall ≈ 12.92, 10 wide).
  const stars: React.ReactNode[] = []
  const cols = 5
  const rows = 4
  const cantonW = 10
  const cantonH = h * 7
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (cantonW / (cols + 1)) * (c + 1)
      const y = (cantonH / (rows + 1)) * (r + 1)
      stars.push(<circle key={`${r}-${c}`} cx={x} cy={y} r="0.6" fill="#fff" />)
    }
  }
  return (
    <svg viewBox="0 0 24 24" style={circle(size)} className={className} role="img" aria-label="United States">
      {stripes}
      <rect width={cantonW} height={cantonH} fill="#3C3B6E" />
      {stars}
    </svg>
  )
}

/** Renders the flag of the target language (the one you switch TO). */
export function TargetFlag({ currentLang, size, className }: { currentLang: 'en' | 'es'; size?: number; className?: string }) {
  return currentLang === 'es'
    ? <FlagUS size={size} className={className} />
    : <FlagES size={size} className={className} />
}
