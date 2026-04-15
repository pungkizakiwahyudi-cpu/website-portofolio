import { howItWorks, personalInfo } from '@data/portfolio'
import SectionHeader from '@components/ui/SectionHeader'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Cara Kerja"
          title="Proses"
          titleHighlight="Pengerjaan"
          subtitle="Transparan dari awal sampai akhir. Begini alur kerja saya bersama klien."
        />

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px
            bg-gradient-to-r from-transparent via-[rgba(0,166,251,0.3)] to-transparent" />
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <div key={item.step} className={`flex flex-col items-center text-center fi d${i + 1}`}>
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center
                    bg-[rgba(7,17,32,0.9)] border border-[rgba(0,166,251,0.2)]
                    shadow-[0_0_30px_rgba(0,166,251,0.08)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,166,251,0.05)] to-transparent" />
                    <span className="text-3xl relative z-10">{item.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full
                    bg-gradient-to-br from-[#00a6fb] to-[#00e5ff]
                    flex items-center justify-center text-[#040b14] text-xs font-black">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#f0f6ff] mb-2">{item.title}</h3>
                <p className="text-xs text-[#7a8fa6] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 fi">
          <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,166,251,0.2)]
            bg-[rgba(7,17,32,0.85)] backdrop-blur-xl p-8 md:p-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,166,251,0.04)] via-transparent to-[rgba(0,229,255,0.04)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,166,251,0.5)] to-transparent" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#00a6fb] mb-3">Konsultasi Gratis</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#f0f6ff] tracking-tight mb-3">
                Siap wujudkan website impian Anda?
              </h3>
              <p className="text-sm text-[#7a8fa6] mb-7 max-w-lg mx-auto leading-relaxed">
                Ceritakan kebutuhan Anda — konsultasi awal gratis dan tanpa komitmen apapun.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href={personalInfo.whatsappLink} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold
                    bg-gradient-to-r from-[#00a6fb] to-[#00e5ff] text-[#040b14]
                    hover:shadow-[0_0_25px_rgba(0,166,251,0.5)] hover:-translate-y-0.5 transition-all">
                  💬 Chat WhatsApp Sekarang
                </a>
                <a href="#pricing"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold
                    border border-[rgba(0,166,251,0.3)] text-[#f0f6ff]
                    hover:border-[#00a6fb] hover:bg-[rgba(0,166,251,0.08)] hover:-translate-y-0.5 transition-all">
                  💰 Lihat Paket Harga
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
