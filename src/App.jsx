import { useEffect } from 'react'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'
import ScrollTopButton from '@components/ui/ScrollTopButton'

// Sections
import Hero from '@sections/Hero'
import StatsBar from '@sections/StatsBar'
import About from '@sections/About'
import Skills from '@sections/Skills'
import Services from '@sections/Services'
import HowItWorks from '@sections/HowItWorks'
import Projects from '@sections/Projects'
import Pricing from '@sections/Pricing'
import Testimonials from '@sections/Testimonials'
import FAQ from '@sections/FAQ'
import Contact from '@sections/Contact'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    document.querySelectorAll('.fi').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#040b14] font-poppins text-[#f0f6ff] overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <Services />
      <HowItWorks />
      <Projects />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </div>
  )
}
