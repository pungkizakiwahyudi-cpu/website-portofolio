import { testimonials } from '@data/portfolio'
import SectionHeader from '@components/ui/SectionHeader'

const avatarColors = {
  blue: 'from-[#00a6fb] to-[#00e5ff]',
  cyan: 'from-[#00e5ff] to-[#00a6fb]',
  pink: 'from-[#e040fb] to-[#00a6fb]',
}

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Kata Mereka"
          title="Testimoni"
          titleHighlight="Klien"
          subtitle="Kepuasan klien adalah prioritas utama saya. Ini yang mereka katakan."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden
                hover:border-[rgba(0,166,251,0.35)] hover:-translate-y-1
                transition-all duration-300 fi d${i + 1}`}>

              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-6xl font-black leading-none
                text-[rgba(0,166,251,0.07)] select-none">"</div>

              <div className="relative z-10">
                <StarRating count={t.rating} />
                <p className="text-sm text-[#7a8fa6] leading-relaxed my-4">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[t.avatarColor]}
                    flex items-center justify-center text-[#040b14] text-xs font-black flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#f0f6ff]">{t.name}</div>
                    <div className="text-xs text-[#7a8fa6]">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof note */}
        <div className="mt-10 text-center fi">
          <p className="text-xs text-[#7a8fa6]">
            * Testimoni dari klien nyata. Nama dan detail profil ditampilkan seizin klien.
          </p>
          <p className="text-xs text-[rgba(0,166,251,0.7)] mt-2">
            Ingin jadi klien berikutnya?{' '}
            <a href="#contact" className="text-[#00a6fb] underline underline-offset-2 hover:text-[#00e5ff] transition-colors">
              Hubungi saya sekarang →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
