interface PositioningStripProps {
  text?: string
}

export default function PositioningStrip({
  text = 'The only center 100% dedicated to Radiation Oncology in Florida, providing pet families with expert answers and referring veterinarians with a trusted radiation oncology partner.',
}: PositioningStripProps) {
  return (
    <div className="pos-strip" aria-label="Positioning statement">
      <div className="pos-strip__inner">
        <p className="pos-strip__text">{text}</p>
      </div>
    </div>
  )
}
