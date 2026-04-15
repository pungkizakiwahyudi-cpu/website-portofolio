import { useEffect, useRef } from 'react'
import { skills } from '@data/portfolio'
import Badge from '@components/ui/Badge'
import SectionHeader from '@components/ui/SectionHeader'

function SkillCard({ skill, delay }) {
  const cardRef = useRef(null)
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll('.prog-bar').forEach(b => b.classList.add('go'))
        obs.unobserve(el)
      }
    }, { threshold: 0.25 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const topColor = { blue: '#00a6fb', cyan: '#00e5ff', pink: '#e040fb' }[skill.color] || '#00a6fb'

  return (
    <div ref={cardRef}
      className={`skill-card-wrap glass-card rounded-2xl p-6 relative overflow-hidden
        hover:border-[rgba(0,166,251,0.4)] hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(0,166,251,0.07)]
        transition-all duration-300 fi ${delay} group`}>
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100
        origin-left transition-transform duration-300"
        style={{ background: `linear-gradient(90deg, ${topColor}, transparent)` }} />

      <div className="w-12 h-12 rounded-xl bg-[rgba(0,166,251,0.1)] border border-[rgba(0,166,251,0.2)]
        flex items-center justify-center text-2xl mb-4">{skill.icon}</div>
      <h3 className="text-sm font-bold text-[#f0f6ff] mb-0.5">{skill.title}</h3>
      <p className="text-xs text-[#7a8fa6] mb-4">{skill.subtitle}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {skill.pills.map(p => <Badge key={p.label} label={p.label} color={p.color} />)}
      </div>

      <div className="flex flex-col gap-3">
        {skill.bars.map(b => (
          <div key={b.name}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-[#7a8fa6]">{b.name}</span>
              <span className="text-[#00e5ff] font-semibold">{b.pct}%</span>
            </div>
            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="prog-bar h-full rounded-full"
                style={{ width: `${b.pct}%`, background: 'linear-gradient(90deg,#00a6fb,#00e5ff)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-12 bg-[rgba(0,166,251,0.02)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="My Expertise"
          title="Skills &"
          titleHighlight="Technologies"
          subtitle="Teknologi yang saya gunakan sehari-hari untuk membangun produk web yang modern dan berkualitas tinggi."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <SkillCard key={s.title} skill={s} delay={`d${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
