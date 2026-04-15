import { services } from '@data/portfolio'
import SectionHeader from '@components/ui/SectionHeader'

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="What I Offer"
          title="My"
          titleHighlight="Services"
          subtitle="Layanan yang saya tawarkan untuk membantu bisnis dan individu mewujudkan ide digital mereka."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title}
              className={`glass-card rounded-2xl p-8 text-center relative overflow-hidden
                hover:border-[rgba(0,166,251,0.4)] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300
                fi d${i + 1} group`}>
              {/* bg glow top-right */}
              <div className="absolute w-28 h-28 rounded-full -top-8 -right-8 pointer-events-none
                bg-[radial-gradient(circle,rgba(0,166,251,0.1),transparent)]" />
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4
                bg-gradient-to-br from-[rgba(0,166,251,0.15)] to-[rgba(0,229,255,0.08)]
                border border-[rgba(0,166,251,0.2)]
                flex items-center justify-center text-2xl
                group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-sm font-bold text-[#f0f6ff] mb-2">{s.title}</h3>
              <p className="text-xs text-[#7a8fa6] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
