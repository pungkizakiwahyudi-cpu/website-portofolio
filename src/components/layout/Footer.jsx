import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@data/portfolio'

const socials = [
  { icon: Github,   href: personalInfo.githubLink,   label: 'GitHub'   },
  { icon: Linkedin, href: personalInfo.linkedinLink, label: 'LinkedIn' },
  { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,166,251,0.12)] py-7 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-[#7a8fa6]">
          © 2025 <span className="text-[#00a6fb] font-semibold">{personalInfo.name}</span> · Designed & Built with ❤️
        </p>
        <div className="flex gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center
                bg-[rgba(0,166,251,0.07)] border border-[rgba(0,166,251,0.15)]
                text-[#7a8fa6] hover:bg-[#00a6fb] hover:text-[#040b14]
                hover:-translate-y-0.5 transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
