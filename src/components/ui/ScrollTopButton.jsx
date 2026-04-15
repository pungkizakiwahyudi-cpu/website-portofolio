import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center
        bg-gradient-to-br from-[#00a6fb] to-[#00e5ff] text-[#040b14]
        shadow-[0_4px_20px_rgba(0,166,251,0.4)]
        hover:shadow-[0_8px_30px_rgba(0,166,251,0.5)] hover:-translate-y-1
        transition-all duration-300
        ${show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  )
}
