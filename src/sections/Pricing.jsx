import { pricing, personalInfo } from '@data/portfolio'
import SectionHeader from '@components/ui/SectionHeader'
import { Check, X, MessageCircle } from 'lucide-react'

const colorMap = {
  blue: {
    badge: 'bg-[rgba(0,166,251,0.1)] border-[rgba(0,166,251,0.2)] text-[#00a6fb]',
    btn: 'border border-[rgba(0,166,251,0.35)] text-[#f0f6ff] hover:border-[#00a6fb] hover:bg-[rgba(0,166,251,0.08)]',
    check: 'text-[#00a6fb]',
    topBar: 'from-[#00a6fb] to-[#00e5ff]',
  },
  cyan: {
    badge: 'bg-[rgba(0,229,255,0.1)] border-[rgba(0,229,255,0.2)] text-[#00e5ff]',
    btn: 'bg-gradient-to-r from-[#00a6fb] to-[#00e5ff] text-[#040b14] hover:shadow-[0_0_25px_rgba(0,166,251,0.5)]',
    check: 'text-[#00e5ff]',
    topBar: 'from-[#00a6fb] via-[#00e5ff] to-[#00a6fb]',
  },
  pink: {
    badge: 'bg-[rgba(224,64,251,0.1)] border-[rgba(224,64,251,0.2)] text-[#e040fb]',
    btn: 'border border-[rgba(224,64,251,0.35)] text-[#f0f6ff] hover:border-[#e040fb] hover:bg-[rgba(224,64,251,0.06)]',
    check: 'text-[#e040fb]',
    topBar: 'from-[#e040fb] to-[#00a6fb]',
  },
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-24 px-6 md:px-12 bg-[rgba(0,166,251,0.02)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Paket Layanan"
          title="Pilih Paket yang"
          titleHighlight="Tepat"
          subtitle="Semua paket bisa dikustomisasi sesuai kebutuhan. Tidak yakin mana yang cocok? Konsultasi gratis dulu!"
        />

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pricing.map((pkg, i) => {
            const c = colorMap[pkg.color]
            return (
              <div key={pkg.name}
                className={`relative glass-card rounded-2xl overflow-hidden
                  transition-all duration-300 fi d${i + 1}
                  ${pkg.popular
                    ? 'border-[rgba(0,166,251,0.4)] shadow-[0_0_50px_rgba(0,166,251,0.12)] md:-translate-y-3'
                    : 'hover:border-[rgba(0,166,251,0.3)] hover:-translate-y-1'
                  }`}>

                {/* Top color bar */}
                <div className={`h-0.5 bg-gradient-to-r ${c.topBar}`} />

                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full
                      bg-gradient-to-r from-[#00a6fb] to-[#00e5ff] text-[#040b14]">
                      ⭐ Terpopuler
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl border ${c.badge}`}>
                      {pkg.icon}
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-[#f0f6ff]">{pkg.name}</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#7a8fa6] leading-relaxed mb-5">{pkg.desc}</p>

                  {/* Price */}
                  <div className="mb-6 pb-5 border-b border-[rgba(255,255,255,0.05)]">
                    <div className="text-xs text-[#7a8fa6] mb-1">{pkg.price}</div>
                    <div className={`text-xl font-extrabold ${c.check}`}>{pkg.highlight}</div>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 mb-6">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-[#7a8fa6]">
                        <Check size={13} className={`flex-shrink-0 mt-0.5 ${c.check}`} />
                        {f}
                      </li>
                    ))}
                    {pkg.notIncluded.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-[rgba(122,143,166,0.5)]">
                        <X size={13} className="flex-shrink-0 mt-0.5 text-[rgba(122,143,166,0.4)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href={personalInfo.whatsappLink} target="_blank" rel="noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold
                      transition-all duration-200 hover:-translate-y-0.5 ${c.btn}`}>
                    <MessageCircle size={14} />
                    Konsultasi Sekarang
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-[#7a8fa6] mt-8 fi">
          💡 Semua harga bersifat estimasi dan dapat menyesuaikan dengan kompleksitas project.
          <br />Konsultasi gratis — tidak ada biaya apapun sebelum deal disepakati.
        </p>
      </div>
    </section>
  )
}
