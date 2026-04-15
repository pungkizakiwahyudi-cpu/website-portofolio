export default function SectionHeader({ label, title, titleHighlight, subtitle }) {
  return (
    <div className="text-center mb-14 fi">
      <div className="sec-label">{label}</div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-[#f0f6ff]">
        {title} <span className="gradient-text">{titleHighlight}</span>
      </h2>
      {subtitle && (
        <p className="text-[#7a8fa6] text-sm leading-relaxed max-w-lg mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
