import { projects } from '@data/portfolio'
import Badge from '@components/ui/Badge'
import SectionHeader from '@components/ui/SectionHeader'
import { ExternalLink, Github } from 'lucide-react'

// ── Screenshot imports ──────────────────────────────────────
// Tambah import di sini setiap kali ada project baru dengan screenshot
import annahl from '@assets/images/annahl.png'

const imageMap = {
  annahl,
  // namafile: namafileImg,  ← contoh kalau mau tambah project baru
}

// ── Gradient mockup fallback ────────────────────────────────
const thumbGradient = {
  'pt-1': 'from-[#071a3e] via-[#0a2a5e] to-[#071a3e]',
  'pt-2': 'from-[#0d1b2a] via-[#1a1040] to-[#0d1b2a]',
  'pt-3': 'from-[#071520] via-[#0a2818] to-[#071520]',
}

// ── Browser mockup (dipakai kalau image: null) ──────────────
function BrowserMockup() {
  return (
    <div className="absolute inset-3 rounded-lg overflow-hidden border border-white/[0.08] bg-black/30">
      <div className="h-6 bg-black/50 border-b border-white/[0.05] flex items-center gap-1.5 px-2">
        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <div className="w-2 h-2 rounded-full bg-[#28ca41]" />
      </div>
      <div className="p-2 flex flex-col gap-1.5">
        <div className="h-2.5 rounded bg-[rgba(0,166,251,0.18)] w-1/3" />
        <div className="h-1.5 rounded bg-white/[0.06] w-4/5" />
        <div className="h-1.5 rounded bg-white/[0.06] w-full" />
        <div className="grid grid-cols-2 gap-1.5 mt-1">
          <div className="h-10 rounded-md bg-[rgba(0,166,251,0.1)] border border-[rgba(0,166,251,0.15)]" />
          <div className="h-10 rounded-md bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.12)]" />
        </div>
      </div>
    </div>
  )
}

// ── Thumbnail: screenshot asli atau fallback mockup ─────────
function ProjectThumb({ project }) {
  const src = project.image ? imageMap[project.image] : null

  if (src) {
    return (
      <div className="h-52 relative overflow-hidden bg-[#071120]">
        <img
          src={src}
          alt={`Screenshot ${project.title}`}
          className="w-full h-full object-cover object-top
            transition-transform duration-500 group-hover:scale-105"
        />
        {/* gradient bawah biar konten card tidak clash sama gambar */}
        <div className="absolute inset-0 bg-gradient-to-b
          from-transparent via-transparent to-[rgba(7,17,32,0.85)]" />
        {/* subtle overlay saat hover */}
        <div className="absolute inset-0 bg-[rgba(0,166,251,0.04)]
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  }

  return (
    <div className={`h-52 relative bg-gradient-to-br
      ${thumbGradient[project.thumb] || thumbGradient['pt-1']}`}>
      <BrowserMockup />
      <div className="absolute inset-0 bg-gradient-to-b
        from-transparent via-transparent to-[rgba(7,17,32,0.92)]" />
    </div>
  )
}

// ── Main section ────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-12 bg-[rgba(0,166,251,0.015)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="My Work"
          title="Selected"
          titleHighlight="Portfolio"
          subtitle="Beberapa project yang saya kerjakan — dari web app hingga company profile untuk klien nyata."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`glass-card rounded-2xl overflow-hidden group
                hover:border-[rgba(0,166,251,0.4)] hover:-translate-y-2
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,166,251,0.08)]
                transition-all duration-300 fi d${Math.min(i + 1, 6)}`}
            >
              {/* Thumbnail */}
              <ProjectThumb project={p} />

              {/* Card body */}
              <div className="p-5">

                {/* Nomor + kategori */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00a6fb]">
                    Project {p.id}
                  </span>
                  {p.category && (
                    <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full
                      bg-[rgba(0,166,251,0.08)] border border-[rgba(0,166,251,0.18)] text-[#7a8fa6]">
                      {p.category}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#f0f6ff] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-[#7a8fa6] leading-relaxed mb-3">
                  {p.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map(s => (
                    <Badge key={s.label} label={s.label} color={s.color} />
                  ))}
                </div>

                {/* Tombol aksi */}
                <div className="flex gap-2">
                  {/* Live Demo — selalu tampil */}
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg
                      bg-gradient-to-r from-[#00a6fb] to-[#00e5ff] text-[#040b14]
                      hover:shadow-[0_0_16px_rgba(0,166,251,0.4)] hover:-translate-y-px
                      transition-all duration-200"
                  >
                    <ExternalLink size={12} strokeWidth={2.5} />
                    Live Demo
                  </a>

                  {/* GitHub — hanya tampil kalau githubLink tidak null/kosong */}
                  {p.githubLink && (
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg
                        bg-white/[0.04] border border-[rgba(0,166,251,0.15)] text-[#7a8fa6]
                        hover:border-[rgba(0,166,251,0.35)] hover:text-[#f0f6ff]
                        transition-all duration-200"
                    >
                      <Github size={12} strokeWidth={2} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
