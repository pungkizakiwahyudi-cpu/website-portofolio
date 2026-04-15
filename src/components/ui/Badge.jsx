const colorMap = {
  blue:   'text-[#00a6fb] border-[rgba(0,166,251,0.25)] bg-[rgba(0,166,251,0.07)]',
  cyan:   'text-[#00e5ff] border-[rgba(0,229,255,0.25)] bg-[rgba(0,229,255,0.06)]',
  pink:   'text-[#e879f9] border-[rgba(232,121,249,0.25)] bg-[rgba(232,121,249,0.06)]',
  green:  'text-[#4ade80] border-[rgba(74,222,128,0.25)] bg-[rgba(74,222,128,0.06)]',
  orange: 'text-[#fb923c] border-[rgba(251,146,60,0.25)] bg-[rgba(251,146,60,0.06)]',
}

export default function Badge({ label, color = 'blue' }) {
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all hover:brightness-110 hover:scale-105 ${colorMap[color]}`}>
      {label}
    </span>
  )
}
