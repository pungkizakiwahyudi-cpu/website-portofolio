import { MessageCircle, ArrowRight } from 'lucide-react'
import { personalInfo } from '@data/portfolio'

const waMsg = encodeURIComponent('Halo Pungki, saya tertarik dengan layanan pembuatan website. Boleh kita diskusi?')
const waLink = `https://wa.me/6281234567890?text=${waMsg}`

export default function CTA() {
  return (
    <section className="relative z-10 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden fi">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#040b14] via-[#071a3e] to-[#040b14]" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(0,166,251,0.15) 0%, rgba(0,229,255,0.05) 50%, rgba(224,64,251,0.1) 100%)' }} />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-[rgba(0,166,251,0.25)]" />

          {/* Glow orbs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full
            bg-[radial-gradient(circle,rgba(0,166,251,0.2),transparent)] blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full
            bg-[radial-gradient(circle,rgba(0,229,255,0.15),transparent)] blur-3xl" />

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,166,251,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,166,251,1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
              bg-[rgba(0,166,251,0.1)] border border-[rgba(0,166,251,0.25)]
              text-xs font-bold uppercase tracking-widest text-[#00a6fb]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] cursor-blink" />
              Open for Project
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4
              text-[#f0f6ff]">
              Punya Ide Website? <br />
              <span className="gradient-text">Wujudkan Bersama Saya!</span>
            </h2>

            <p className="text-sm md:text-base text-[#7a8fa6] max-w-xl mx-auto leading-relaxed mb-10">
              Dari landing page sederhana hingga aplikasi web kompleks — saya siap membantu bisnis Anda tampil profesional di internet. Konsultasi pertama{' '}
              <span className="text-[#00e5ff] font-semibold">GRATIS</span>, tanpa komitmen!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold
                  bg-gradient-to-r from-[#00a6fb] to-[#00e5ff] text-[#040b14]
                  hover:shadow-[0_0_30px_rgba(0,229,255,0.5),0_0_60px_rgba(0,166,251,0.2)]
                  hover:-translate-y-1 transition-all duration-300 group">
                <MessageCircle size={17} strokeWidth={2.5} />
                Mulai Konsultasi Gratis
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold
                  border-[1.5px] border-[rgba(0,166,251,0.4)] text-[#f0f6ff]
                  hover:border-[#00a6fb] hover:bg-[rgba(0,166,251,0.08)]
                  hover:-translate-y-1 transition-all duration-300">
                Lihat Portfolio
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8
              border-t border-[rgba(255,255,255,0.06)]">
              {[
                { icon: '✅', text: 'Konsultasi Gratis' },
                { icon: '⚡', text: 'Proses Cepat'      },
                { icon: '🔄', text: 'Revisi Termasuk'   },
                { icon: '🛡️', text: 'Garansi 14 Hari'  },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-[#7a8fa6]">
                  <span>{icon}</span> {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
