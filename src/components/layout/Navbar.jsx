import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { personalInfo } from '@data/portfolio'

const navItems = [
  { label: 'Home',      href: '#home'      },
  { label: 'About',     href: '#about'     },
  { label: 'Services',  href: '#services'  },
  { label: 'Portfolio', href: '#projects'  },
  { label: 'Pricing',   href: '#pricing'   },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let cur = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-[200] h-16 flex items-center justify-between px-6 md:px-12
      transition-all duration-300
      ${scrolled
        ? 'bg-[rgba(4,11,20,0.92)] backdrop-blur-xl border-b border-[rgba(0,166,251,0.12)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
        : 'bg-transparent'
      }`}>

      <a href="#home" className="text-xl font-extrabold tracking-tight flex items-center gap-1.5">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00a6fb] to-[#00e5ff]
          flex items-center justify-center text-[#040b14] text-xs font-black">PZ</div>
        <span className="gradient-text">Pungki</span>
        <span className="text-[#f0f6ff] font-light hidden sm:inline">Zaki</span>
      </a>

      <ul className="hidden md:flex items-center gap-0.5">
        {navItems.map(item => {
          const isActive = active === item.href.replace('#', '')
          return (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all
                  ${isActive
                    ? 'text-[#00a6fb] bg-[rgba(0,166,251,0.08)]'
                    : 'text-[#7a8fa6] hover:text-[#f0f6ff] hover:bg-[rgba(255,255,255,0.04)]'
                  }`}>
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>

      <div className="flex items-center gap-2.5">
        <a href={personalInfo.cvLink} download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold
            bg-gradient-to-r from-[#00a6fb] to-[#00e5ff] text-[#040b14]
            hover:shadow-[0_0_20px_rgba(0,166,251,0.5)] hover:-translate-y-px transition-all">
          <Download size={12} strokeWidth={2.5} /> Download CV
        </a>
        <a href={personalInfo.whatsappLink} target="_blank" rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold
            border border-[rgba(0,166,251,0.3)] text-[#f0f6ff]
            hover:border-[#00a6fb] hover:bg-[rgba(0,166,251,0.08)] transition-all">
          💬 Hire Me
        </a>
        <button className="md:hidden p-1 text-[#7a8fa6]" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-[rgba(4,11,20,0.97)] backdrop-blur-xl
          border-b border-[rgba(0,166,251,0.12)] flex flex-col p-4 gap-1 md:hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-[#7a8fa6]
                hover:text-[#f0f6ff] hover:bg-[rgba(0,166,251,0.08)] transition-all">
              {item.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            <a href={personalInfo.cvLink} download
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold
                bg-gradient-to-r from-[#00a6fb] to-[#00e5ff] text-[#040b14]">
              <Download size={13} /> CV
            </a>
            <a href={personalInfo.whatsappLink} target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold
                border border-[rgba(0,166,251,0.3)] text-[#f0f6ff]">
              💬 Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
