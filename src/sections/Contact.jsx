import { useState } from 'react'
import { personalInfo } from '@data/portfolio'
import SectionHeader from '@components/ui/SectionHeader'
import { Mail, MessageSquare, Linkedin, Github, ArrowRight, Send } from 'lucide-react'

const contactItems = [
  { icon: Mail,          bg: 'bg-[rgba(0,166,251,0.1)]',  label: 'Email',     value: () => personalInfo.email,     href: () => `mailto:${personalInfo.email}` },
  { icon: MessageSquare, bg: 'bg-[rgba(74,222,128,0.1)]', label: 'WhatsApp',  value: () => personalInfo.whatsapp,  href: () => personalInfo.whatsappLink },
  { icon: Linkedin,      bg: 'bg-[rgba(0,229,255,0.1)]',  label: 'LinkedIn',  value: () => personalInfo.linkedin,  href: () => personalInfo.linkedinLink },
  { icon: Github,        bg: 'bg-[rgba(139,92,246,0.1)]', label: 'GitHub',    value: () => personalInfo.github,    href: () => personalInfo.githubLink },
]

const perks = [
  'Full-time / Part-time',
  'Remote / Hybrid / On-site',
  'Startup & Corporate',
  'Open for Freelance Project',
]

const projectTypes = ['Landing Page', 'Company Profile', 'Toko Online', 'Web App / Dashboard', 'Redesign', 'Lainnya']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Halo Pungki! Saya ingin konsultasi website.\n\n` +
      `*Nama:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Jenis Project:* ${form.type || '-'}\n` +
      `*Pesan:* ${form.message}`
    )
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Get In Touch"
          title="Mulai"
          titleHighlight="Diskusi"
          subtitle="Punya project dalam pikiran? Atau ingin melamar kerja bareng tim saya? Hubungi sekarang!"
        />

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: Contact form ── */}
          <div className="fi d1">
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px
                bg-gradient-to-r from-transparent via-[rgba(0,166,251,0.5)] to-transparent" />

              <h3 className="text-lg font-extrabold text-[#f0f6ff] mb-1">Kirim Pesan 📨</h3>
              <p className="text-xs text-[#7a8fa6] mb-5">Pesan akan dikirim via WhatsApp untuk respons lebih cepat.</p>

              {sent && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.25)]
                  text-xs text-[#4ade80] flex items-center gap-2">
                  ✅ Pesan berhasil dikirim via WhatsApp!
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#7a8fa6] font-medium">Nama *</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      placeholder="Nama Anda"
                      className="px-4 py-2.5 rounded-xl text-sm text-[#f0f6ff] placeholder-[#7a8fa6]
                        bg-[rgba(255,255,255,0.04)] border border-[rgba(0,166,251,0.15)]
                        focus:outline-none focus:border-[rgba(0,166,251,0.5)] focus:bg-[rgba(0,166,251,0.04)]
                        transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#7a8fa6] font-medium">Email *</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="email@anda.com"
                      className="px-4 py-2.5 rounded-xl text-sm text-[#f0f6ff] placeholder-[#7a8fa6]
                        bg-[rgba(255,255,255,0.04)] border border-[rgba(0,166,251,0.15)]
                        focus:outline-none focus:border-[rgba(0,166,251,0.5)] focus:bg-[rgba(0,166,251,0.04)]
                        transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#7a8fa6] font-medium">Jenis Project</label>
                  <select
                    name="type" value={form.type} onChange={handleChange}
                    className="px-4 py-2.5 rounded-xl text-sm text-[#f0f6ff]
                      bg-[rgba(7,17,32,0.9)] border border-[rgba(0,166,251,0.15)]
                      focus:outline-none focus:border-[rgba(0,166,251,0.5)]
                      transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-[#071120]">Pilih jenis project...</option>
                    {projectTypes.map(t => (
                      <option key={t} value={t} className="bg-[#071120]">{t}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#7a8fa6] font-medium">Pesan *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required
                    rows={4} placeholder="Ceritakan kebutuhan Anda, referensi yang diinginkan, atau pertanyaan apapun..."
                    className="px-4 py-3 rounded-xl text-sm text-[#f0f6ff] placeholder-[#7a8fa6]
                      bg-[rgba(255,255,255,0.04)] border border-[rgba(0,166,251,0.15)]
                      focus:outline-none focus:border-[rgba(0,166,251,0.5)] focus:bg-[rgba(0,166,251,0.04)]
                      transition-all resize-none"
                  />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl
                    text-sm font-bold text-[#040b14]
                    bg-gradient-to-r from-[#00a6fb] to-[#00e5ff]
                    hover:shadow-[0_0_25px_rgba(0,166,251,0.5)] hover:-translate-y-0.5
                    transition-all duration-300 active:translate-y-0">
                  <Send size={14} strokeWidth={2.5} />
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* ── RIGHT: Info + Links ── */}
          <div className="flex flex-col gap-5 fi d2">
            {/* Availability */}
            <div className="glass-card rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px
                bg-gradient-to-r from-transparent via-[rgba(0,166,251,0.4)] to-transparent" />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3
                bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.25)]
                text-xs font-semibold text-[#4ade80]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] cursor-blink" />
                Available Now
              </div>
              <h3 className="text-lg font-extrabold text-[#f0f6ff] mb-2">Siap Berkolaborasi! 🤝</h3>
              <ul className="flex flex-col gap-2">
                {perks.map(p => (
                  <li key={p} className="flex items-center gap-2.5 text-xs text-[#7a8fa6]">
                    <div className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center
                      bg-[rgba(0,166,251,0.1)] border border-[rgba(0,166,251,0.2)]
                      text-[#00a6fb] text-[0.6rem]">✓</div>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col gap-2.5">
              {contactItems.map(({ icon: Icon, bg, label, value, href }) => (
                <a key={label} href={href()} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 glass-card rounded-xl px-4 py-3
                    text-[#7a8fa6] hover:border-[rgba(0,166,251,0.4)] hover:text-[#f0f6ff]
                    hover:translate-x-1 hover:bg-[rgba(0,166,251,0.04)] transition-all group">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-widest text-[#7a8fa6] mb-0.5">{label}</div>
                    <div className="text-xs font-medium truncate">{value()}</div>
                  </div>
                  <ArrowRight size={14} className="text-[#7a8fa6] group-hover:translate-x-1 group-hover:text-[#00a6fb] transition-all flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
