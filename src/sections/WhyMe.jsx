import SectionHeader from '@components/ui/SectionHeader'

const reasons = [
  {
    icon: '⚡',
    title: 'Pengerjaan Cepat & Tepat Waktu',
    desc: 'Saya menghargai waktu klien. Setiap project dikerjakan dengan timeline yang jelas dan selalu selesai sesuai deadline yang disepakati.',
    highlight: 'On-time delivery',
  },
  {
    icon: '💬',
    title: 'Komunikasi Aktif & Transparan',
    desc: 'Update progress rutin, responsif di WhatsApp, dan terbuka untuk revisi. Anda selalu tahu perkembangan project Anda.',
    highlight: 'Responsif 24 jam',
  },
  {
    icon: '🎨',
    title: 'Desain Modern & Professional',
    desc: 'Bukan template biasa. Setiap website saya rancang custom sesuai brand dan kebutuhan bisnis klien — tampil premium tanpa harga premium.',
    highlight: 'Custom design',
  },
  {
    icon: '📱',
    title: 'Mobile-First & Responsive',
    desc: 'Website tampil sempurna di HP, tablet, maupun desktop. Di era sekarang, >60% pengunjung datang dari mobile.',
    highlight: 'All devices',
  },
  {
    icon: '🔧',
    title: 'Revisi Hingga Puas',
    desc: 'Saya tidak akan meninggalkan project sampai Anda benar-benar puas dengan hasilnya. Revisi termasuk dalam setiap paket.',
    highlight: 'Free revisi',
  },
  {
    icon: '🚀',
    title: 'Siap Deploy & Go Live',
    desc: 'Tidak hanya coding — saya bantu hingga website Anda live di internet, termasuk setup domain, hosting, dan SSL gratis.',
    highlight: 'Full support',
  },
]

export default function WhyMe() {
  return (
    <section id="why-me" className="relative z-10 py-24 px-6 md:px-12 bg-[rgba(0,166,251,0.02)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Kenapa Pilih Saya"
          title="Why"
          titleHighlight="Choose Me?"
          subtitle="Banyak developer di luar sana — ini yang membedakan saya dan membuat klien selalu kembali lagi."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div key={r.title}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden group
                hover:border-[rgba(0,166,251,0.4)] hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(0,166,251,0.06)]
                transition-all duration-300 fi d${(i % 3) + 1}`}>

              {/* Glow top-right */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full
                bg-[radial-gradient(circle,rgba(0,166,251,0.1),transparent)]
                group-hover:opacity-150 transition-opacity" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl mb-4
                bg-gradient-to-br from-[rgba(0,166,251,0.15)] to-[rgba(0,229,255,0.06)]
                border border-[rgba(0,166,251,0.2)]
                flex items-center justify-center text-2xl
                group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3
                bg-[rgba(0,166,251,0.08)] border border-[rgba(0,166,251,0.18)]
                text-[0.65rem] font-bold uppercase tracking-wider text-[#00a6fb]">
                ✦ {r.highlight}
              </div>

              <h3 className="text-sm font-bold text-[#f0f6ff] mb-2 leading-snug">{r.title}</h3>
              <p className="text-xs text-[#7a8fa6] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
