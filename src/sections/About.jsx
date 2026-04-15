import { personalInfo } from '@data/portfolio'
import SectionHeader from '@components/ui/SectionHeader'

const highlights = [
  { icon: '🎯', title: 'Detail-Oriented',  sub: 'Pixel-perfect UI'        },
  { icon: '⚡', title: 'Fast Learner',      sub: 'Adaptif & growth mindset' },
  { icon: '🤝', title: 'Team Player',       sub: 'Collaborative & komunikatif'},
  { icon: '🚀', title: 'Always Improving',  sub: 'Up-to-date dengan tren'   },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Who Am I"
          title="About"
          titleHighlight="Me"
          subtitle="Kenalan lebih dekat — passion, perjalanan, dan apa yang saya bawa ke setiap project."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo col */}
          <div className="relative fi d1">
            <div className="rounded-2xl overflow-hidden border border-[rgba(0,166,251,0.15)]
              bg-[rgba(7,17,32,0.85)] aspect-[4/5] flex items-end justify-center relative">
              {personalInfo.photo ? (
                <img src={personalInfo.photo} alt={personalInfo.name}
                  className="w-full h-full object-cover object-top absolute inset-0" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[rgba(0,166,251,0.3)]">
                  <svg width="60" height="60" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="28" r="16" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 70c0-16.569 13.431-30 30-30s30 13.431 30 30" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-xs text-[#7a8fa6]">Your Photo Here</span>
                </div>
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,11,20,0.85)] to-transparent" />
              {/* Bottom tag */}
              <div className="relative z-10 w-full p-4 m-4 rounded-xl
                bg-[rgba(4,11,20,0.85)] border border-[rgba(0,166,251,0.15)]
                backdrop-blur-xl flex justify-between items-center">
                <div>
                  <div className="text-xs text-[#7a8fa6]">Current Focus</div>
                  <div className="text-sm font-bold text-[#f0f6ff]">Frontend Development</div>
                </div>
                <span className="text-2xl">⚛️</span>
              </div>
            </div>
            {/* Corner badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full
              bg-gradient-to-br from-[#00a6fb] to-[#00e5ff]
              flex flex-col items-center justify-center text-[#040b14]
              shadow-[0_0_20px_rgba(0,166,251,0.4)]">
              <span className="text-lg font-black leading-none">1+</span>
              <span className="text-[0.5rem] font-semibold">YRS EXP</span>
            </div>
          </div>

          {/* Text col */}
          <div className="flex flex-col gap-5 fi d2">
            {personalInfo.about.map((para, i) => (
              <p key={i} className="text-sm text-[#7a8fa6] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: para }} />
            ))}

            <div className="grid grid-cols-2 gap-3 mt-2">
              {highlights.map(({ icon, title, sub }, i) => (
                <div key={title}
                  className={`glass-card rounded-xl p-4 flex items-center gap-3
                    hover:border-[rgba(0,166,251,0.35)] hover:-translate-y-0.5 transition-all fi d${i + 3}`}>
                  <div className="w-9 h-9 rounded-lg bg-[rgba(0,166,251,0.1)] flex items-center justify-center text-lg flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#f0f6ff]">{title}</div>
                    <div className="text-xs text-[#7a8fa6]">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
