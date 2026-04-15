import { useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'
import { personalInfo } from '@data/portfolio'

const socialLinks = [
  { label: 'GitHub',    href: personalInfo.githubLink,    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
  { label: 'LinkedIn',  href: personalInfo.linkedinLink,  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'WhatsApp', href: personalInfo.whatsappLink, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> },
  { label: 'Email',    href: `mailto:${personalInfo.email}`, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
]

function TypingText({ phrases }) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = phrases[phraseIdx]
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), 2400)
      } else {
        setText(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
        if (charIdx - 1 === 0) { setDeleting(false); setPhraseIdx(p => (p + 1) % phrases.length) }
      }
    }, deleting ? 40 : 85)
    return () => clearTimeout(t)
  }, [charIdx, deleting, phraseIdx, phrases])
  return (
    <span>
      <span className="text-[#00e5ff] font-semibold">{text}</span>
      <span className="inline-block w-[2px] h-[0.85em] bg-[#00e5ff] ml-[2px] align-middle"
        style={{ boxShadow: '0 0 8px #00e5ff', animation: 'heroCursorBlink 1s step-end infinite' }} />
    </span>
  )
}

export default function Hero() {
  const onSocHover = (e, on) => {
    Object.assign(e.currentTarget.style, on
      ? { background: '#00a6fb', color: '#040b14', boxShadow: '0 0 20px rgba(0,166,251,.5)', transform: 'translateY(-3px)' }
      : { background: 'rgba(0,166,251,.07)', color: '#00a6fb', boxShadow: 'none', transform: 'translateY(0)' })
  }
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <style>{`
        @keyframes heroCursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes heroRingCW      { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes heroRingCCW     { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes heroGlow        { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
        @keyframes heroBadgeUp     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes heroBadgeDown   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(9px)} }
        @keyframes heroBadgeMid    { 0%,100%{transform:translateY(-50%)} 50%{transform:translateY(calc(-50% + 6px))} }
        @keyframes heroGrid        { 0%{background-position:0 0} 100%{background-position:50px 50px} }
        @keyframes heroShimmer     { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes heroDot         { 0%,100%{transform:scale(1);opacity:.8} 50%{transform:scale(1.6);opacity:1} }
        @keyframes heroBounce      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        .hero-name-shimmer {
          background: linear-gradient(105deg,#f0f6ff 0%,#f0f6ff 28%,#00e5ff 50%,#f0f6ff 72%,#f0f6ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: heroShimmer 5s linear infinite;
        }
        @media(max-width:900px){
          .hero-grid-inner { grid-template-columns:1fr !important; text-align:center; }
          .hero-photo-stage { width:270px !important; height:270px !important; }
          .hero-photo-circle { width:240px !important; height:240px !important; }
          .hero-float-badge { display:none !important; }
          .hero-row-center { justify-content:center !important; }
          .hero-desc-max { margin-left:auto !important; margin-right:auto !important; }
        }
      `}</style>

      {/* Ambient glow bg */}
      <div className="absolute inset-0 pointer-events-none" style={{background:`radial-gradient(ellipse 70% 70% at 15% 50%,rgba(0,166,251,.09) 0%,transparent 65%),radial-gradient(ellipse 50% 60% at 85% 45%,rgba(0,229,255,.06) 0%,transparent 60%)`}} />
      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:`linear-gradient(rgba(0,166,251,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,166,251,.04) 1px,transparent 1px)`,backgroundSize:'50px 50px',animation:'heroGrid 20s linear infinite',maskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 30%,transparent 100%)',WebkitMaskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 30%,transparent 100%)'}} />

      <div className="hero-grid-inner max-w-6xl mx-auto w-full relative z-10"
        style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem',alignItems:'center',minHeight:'calc(100vh - 64px)',padding:'3rem 2rem'}}>

        {/* ── LEFT: Photo ── */}
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="hero-photo-stage" style={{position:'relative',width:'420px',height:'420px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {/* Dashed orbit */}
            <div style={{position:'absolute',inset:'-44px',borderRadius:'50%',border:'1px dashed rgba(0,229,255,.12)',animation:'heroRingCCW 30s linear infinite'}} />
            {/* Mid orbit + dots */}
            <div style={{position:'absolute',inset:'-22px',borderRadius:'50%',border:'1px solid rgba(0,166,251,.18)',animation:'heroRingCW 18s linear infinite'}}>
              <div style={{position:'absolute',top:'-4px',left:'50%',transform:'translateX(-50%)',width:'8px',height:'8px',borderRadius:'50%',background:'#00a6fb',boxShadow:'0 0 10px #00a6fb,0 0 20px rgba(0,166,251,.5)',animation:'heroDot 2s ease-in-out infinite'}} />
              <div style={{position:'absolute',bottom:'-4px',left:'50%',transform:'translateX(-50%)',width:'6px',height:'6px',borderRadius:'50%',background:'#00e5ff',boxShadow:'0 0 8px #00e5ff',animation:'heroDot 2s ease-in-out infinite 1s'}} />
            </div>
            {/* Conic ring */}
            <div style={{position:'absolute',inset:'-6px',borderRadius:'50%',background:'conic-gradient(#00a6fb 0deg,#00e5ff 90deg,#e040fb 180deg,#00a6fb 360deg)',padding:'2px',animation:'heroRingCW 7s linear infinite'}}>
              <div style={{width:'100%',height:'100%',borderRadius:'50%',background:'#040b14'}} />
            </div>
            {/* Glow aura */}
            <div style={{position:'absolute',inset:'-10px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,166,251,.3) 0%,rgba(0,229,255,.1) 40%,transparent 70%)',filter:'blur(24px)',animation:'heroGlow 3.5s ease-in-out infinite'}} />

            {/* Photo circle */}
            <div className="hero-photo-circle" style={{position:'relative',zIndex:5,width:'380px',height:'380px',borderRadius:'50%',overflow:'hidden',border:'3px solid rgba(0,166,251,.45)',background:'linear-gradient(145deg,#0a1929,#071120)',boxShadow:'0 0 0 1px rgba(0,229,255,.08),0 0 40px rgba(0,166,251,.38),0 0 90px rgba(0,166,251,.14),inset 0 0 40px rgba(0,166,251,.06)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              {personalInfo.photo
                ? <img src={personalInfo.photo} alt={personalInfo.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top center'}} />
                : <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'.75rem',color:'rgba(0,166,251,.35)'}}>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="28" r="16" stroke="currentColor" strokeWidth="1.5"/><path d="M10 70c0-16.569 13.431-30 30-30s30 13.431 30 30" stroke="currentColor" strokeWidth="1.5"/></svg>
                    <span style={{fontSize:'.75rem',color:'#7a8fa6',textAlign:'center'}}>Taruh foto di <code style={{color:'#00a6fb'}}>public/photo.jpg</code></span>
                  </div>
              }
              <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'linear-gradient(145deg,rgba(0,166,251,.1) 0%,transparent 50%,rgba(0,229,255,.06) 100%)',pointerEvents:'none'}} />
            </div>

            {/* Badge: React */}
            <div className="hero-float-badge" style={{position:'absolute',top:'24px',left:'-16px',zIndex:20,background:'rgba(4,11,20,.92)',border:'1px solid rgba(0,166,251,.3)',borderRadius:'14px',padding:'.6rem 1rem',display:'flex',alignItems:'center',gap:'.65rem',backdropFilter:'blur(16px)',boxShadow:'0 8px 32px rgba(0,0,0,.5)',animation:'heroBadgeUp 4s ease-in-out infinite',whiteSpace:'nowrap'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'9px',background:'rgba(0,229,255,.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem'}}>⚛️</div>
              <div><div style={{fontSize:'.85rem',fontWeight:700,color:'#f0f6ff',lineHeight:1.1}}>React.js</div><div style={{fontSize:'.63rem',color:'#7a8fa6'}}>Main Stack</div></div>
            </div>

            {/* Badge: Open */}
            <div className="hero-float-badge" style={{position:'absolute',bottom:'28px',right:'-24px',zIndex:20,background:'rgba(4,11,20,.92)',border:'1px solid rgba(52,211,153,.3)',borderRadius:'14px',padding:'.6rem 1rem',display:'flex',alignItems:'center',gap:'.65rem',backdropFilter:'blur(16px)',boxShadow:'0 8px 32px rgba(0,0,0,.5)',animation:'heroBadgeDown 5s ease-in-out infinite',whiteSpace:'nowrap'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'9px',background:'rgba(52,211,153,.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem'}}>✅</div>
              <div><div style={{fontSize:'.85rem',fontWeight:700,color:'#34d399',lineHeight:1.1}}>Open to Work</div><div style={{fontSize:'.63rem',color:'#7a8fa6'}}>& Freelance</div></div>
            </div>

            {/* Badge: Projects */}
            <div className="hero-float-badge" style={{position:'absolute',top:'50%',right:'-28px',zIndex:20,background:'rgba(4,11,20,.92)',border:'1px solid rgba(129,140,248,.3)',borderRadius:'14px',padding:'.6rem 1rem',display:'flex',alignItems:'center',gap:'.65rem',backdropFilter:'blur(16px)',boxShadow:'0 8px 32px rgba(0,0,0,.5)',animation:'heroBadgeMid 4.5s ease-in-out infinite',whiteSpace:'nowrap'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'9px',background:'rgba(129,140,248,.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem'}}>🚀</div>
              <div><div style={{fontSize:'.85rem',fontWeight:700,color:'#818cf8',lineHeight:1.1}}>10+ Projects</div><div style={{fontSize:'.63rem',color:'#7a8fa6'}}>Delivered</div></div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text ── */}
        <div style={{display:'flex',flexDirection:'column'}}>

          {/* Status badges */}
          <div className="hero-row-center" style={{display:'flex',gap:'.6rem',flexWrap:'wrap',marginBottom:'1.5rem'}}>
            <span style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'.35rem .9rem',borderRadius:'100px',background:'rgba(0,166,251,.1)',border:'1px solid rgba(0,166,251,.25)',fontSize:'.73rem',fontWeight:600,color:'#00a6fb'}}>
              <span style={{width:'6px',height:'6px',borderRadius:'50%',display:'inline-block',background:'#00a6fb',boxShadow:'0 0 6px #00a6fb',animation:'heroDot 1.5s ease-in-out infinite'}} />
              💼 Open to Job
            </span>
            <span style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'.35rem .9rem',borderRadius:'100px',background:'rgba(52,211,153,.08)',border:'1px solid rgba(52,211,153,.25)',fontSize:'.73rem',fontWeight:600,color:'#34d399'}}>
              <span style={{width:'6px',height:'6px',borderRadius:'50%',display:'inline-block',background:'#34d399',boxShadow:'0 0 6px #34d399',animation:'heroDot 1.5s ease-in-out infinite .5s'}} />
              🚀 Open for Freelance
            </span>
          </div>

          <p style={{fontSize:'1.05rem',fontWeight:300,color:'#7a8fa6',marginBottom:'.3rem'}}>Hello, I'm</p>

          <h1 className="hero-name-shimmer" style={{fontSize:'clamp(3rem,5.5vw,5rem)',fontWeight:800,lineHeight:1.0,letterSpacing:'-.04em',marginBottom:'.75rem'}}>
            {personalInfo.firstName}<br />{personalInfo.lastName}
          </h1>

          <p style={{fontSize:'clamp(1rem,2vw,1.22rem)',fontWeight:400,color:'#7a8fa6',marginBottom:'1.5rem',display:'flex',alignItems:'center',gap:'.4rem',flexWrap:'wrap'}}>
            And I'm a&nbsp;<TypingText phrases={personalInfo.taglines} />
          </p>

          <p className="hero-desc-max" style={{fontSize:'.97rem',color:'#7a8fa6',lineHeight:1.9,maxWidth:'460px',marginBottom:'2rem',fontWeight:300}}>
            {personalInfo.description}
          </p>

          {/* Socials */}
          <div className="hero-row-center" style={{display:'flex',gap:'.6rem',marginBottom:'2rem'}}>
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                style={{width:'42px',height:'42px',borderRadius:'11px',display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,166,251,.07)',border:'1px solid rgba(0,166,251,.18)',color:'#00a6fb',textDecoration:'none',transition:'all .25s ease'}}
                onMouseEnter={e=>onSocHover(e,true)} onMouseLeave={e=>onSocHover(e,false)}>
                {icon}
              </a>
            ))}
          </div>

          {/* CTA — clear 3-level hierarchy */}
          <div className="hero-row-center" style={{display:'flex',gap:'.85rem',flexWrap:'wrap',alignItems:'center'}}>
            <a href="#services"
              style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'.85rem 2rem',borderRadius:'11px',background:'linear-gradient(135deg,#00a6fb,#00e5ff)',color:'#040b14',fontSize:'.92rem',fontWeight:700,textDecoration:'none',boxShadow:'0 4px 24px rgba(0,166,251,.35)',transition:'all .3s ease'}}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 0 30px rgba(0,166,251,.6),0 0 60px rgba(0,229,255,.2)';e.currentTarget.style.transform='translateY(-2px)'}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow='0 4px 24px rgba(0,166,251,.35)';e.currentTarget.style.transform='translateY(0)'}}>
              🚀 Lihat Layanan
            </a>
            <a href="#pricing"
              style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'.85rem 1.75rem',borderRadius:'11px',background:'rgba(0,166,251,.07)',border:'1.5px solid rgba(0,166,251,.35)',color:'#f0f6ff',fontSize:'.92rem',fontWeight:600,textDecoration:'none',transition:'all .3s ease'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='#00a6fb';e.currentTarget.style.background='rgba(0,166,251,.13)';e.currentTarget.style.transform='translateY(-2px)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(0,166,251,.35)';e.currentTarget.style.background='rgba(0,166,251,.07)';e.currentTarget.style.transform='translateY(0)'}}>
              💰 Cek Harga
            </a>
            <a href="#contact"
              style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'.85rem 1.1rem',borderRadius:'11px',color:'#7a8fa6',fontSize:'.88rem',textDecoration:'none',transition:'all .2s ease',border:'1px solid transparent'}}
              onMouseEnter={e=>{e.currentTarget.style.color='#00a6fb';e.currentTarget.style.borderColor='rgba(0,166,251,.2)'}}
              onMouseLeave={e=>{e.currentTarget.style.color='#7a8fa6';e.currentTarget.style.borderColor='transparent'}}>
              💬 Hubungi →
            </a>
          </div>

          <div style={{display:'flex',alignItems:'center',gap:'8px',marginTop:'2.75rem',color:'#475569'}}>
            <ArrowDown size={13} style={{animation:'heroBounce 1.5s ease-in-out infinite'}} />
            <span style={{fontSize:'.74rem',letterSpacing:'.06em'}}>Scroll untuk lihat lebih</span>
          </div>
        </div>
      </div>
    </section>
  )
}
