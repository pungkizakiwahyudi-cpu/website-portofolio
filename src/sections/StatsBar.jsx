import { useCountUp } from '@hooks/useScrollAnimation'
import { stats } from '@data/portfolio'

function StatItem({ value, suffix, label, delay }) {
  const ref = useCountUp(value)
  return (
    <div className={`flex flex-col items-center text-center gap-1 px-4 fi ${delay}
      border-r border-[rgba(0,166,251,0.15)] last:border-r-0`}>
      <div className="flex items-end gap-0.5">
        <span ref={ref} className="text-3xl font-black gradient-text leading-none">0</span>
        <span className="text-2xl font-black gradient-text leading-none">{suffix}</span>
      </div>
      <span className="text-xs text-[#7a8fa6] leading-tight">{label}</span>
    </div>
  )
}

export default function StatsBar() {
  const delays = ['d1','d2','d3','d4']
  return (
    <div className="relative z-10 bg-[rgba(7,17,32,0.9)] border-y border-[rgba(0,166,251,0.12)]
      py-7 px-6 md:px-12 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} delay={delays[i]} />
        ))}
      </div>
    </div>
  )
}
