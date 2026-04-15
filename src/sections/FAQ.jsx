import { useState } from 'react'
import { faqs, personalInfo } from '@data/portfolio'
import SectionHeader from '@components/ui/SectionHeader'
import { ChevronDown } from 'lucide-react'

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-300
        ${isOpen ? 'border-[rgba(0,166,251,0.35)]' : 'hover:border-[rgba(0,166,251,0.2)]'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-[#00a6fb]' : 'text-[#f0f6ff]'}`}>
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-[#7a8fa6] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00a6fb]' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-xs text-[#7a8fa6] leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="faq" className="relative z-10 py-24 px-6 md:px-12 bg-[rgba(0,166,251,0.02)]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="FAQ"
          title="Pertanyaan yang"
          titleHighlight="Sering Ditanyakan"
          subtitle="Ada pertanyaan lain? Jangan ragu hubungi saya langsung via WhatsApp."
        />

        <div className="flex flex-col gap-3 fi">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center fi">
          <p className="text-sm text-[#7a8fa6] mb-4">Masih ada pertanyaan lain?</p>
          <a href={personalInfo.whatsappLink} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold
              bg-gradient-to-r from-[#00a6fb] to-[#00e5ff] text-[#040b14]
              hover:shadow-[0_0_25px_rgba(0,166,251,0.5)] hover:-translate-y-0.5 transition-all">
            💬 Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
