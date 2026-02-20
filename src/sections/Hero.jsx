import { useState, useEffect } from "react";
import profilePic from "../assets/images/profile/profile.png";

const ROLES = [
  "Full Stack Engineer",
  "MERN Developer",
  "Frontend Developer",
  "React Specialist",
  "Node.js Developer",
];

const SOCIALS = [
  {
    label: "GitHub", href: "https://github.com/LingamGanesh",
    hover: "hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 hover:bg-slate-100 dark:hover:bg-white/10",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: "LinkedIn", href: "https://www.linkedin.com/in/lingam-ganesh/",
    hover: "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-50 dark:hover:bg-blue-400/10",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "Twitter", href: "https://twitter.com/",
    hover: "hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-50 dark:hover:bg-sky-400/10",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
  .hero-f-display { font-family:'Syne',sans-serif; }
  .hero-f-serif   { font-family:'DM Serif Display',Georgia,serif; }
  .hero-f-body    { font-family:'DM Sans',sans-serif; }

  @keyframes hero-roleIn  { from{opacity:0;transform:translateY(8px);}  to{opacity:1;transform:translateY(0);} }
  @keyframes hero-roleOut { from{opacity:1;transform:translateY(0);}    to{opacity:0;transform:translateY(-8px);} }
  .hero-role-in  { animation:hero-roleIn  0.36s ease both; }
  .hero-role-out { animation:hero-roleOut 0.26s ease both; }

  @keyframes hero-blink { 0%,100%{opacity:1} 50%{opacity:0} }
  .hero-cursor::after { content:'|'; margin-left:2px; color:#3b82f6; font-style:normal; animation:hero-blink 1.1s step-end infinite; }

  @keyframes hero-fadeUp { from{opacity:0;transform:translateY(22px);} to{opacity:1;transform:translateY(0);} }
  .hau0{animation:hero-fadeUp 0.7s 0.00s ease both;}
  .hau1{animation:hero-fadeUp 0.7s 0.12s ease both;}
  .hau2{animation:hero-fadeUp 0.7s 0.22s ease both;}
  .hau3{animation:hero-fadeUp 0.7s 0.32s ease both;}
  .hau4{animation:hero-fadeUp 0.7s 0.44s ease both;}
  .hau5{animation:hero-fadeUp 0.7s 0.56s ease both;}
  .hau6{animation:hero-fadeUp 0.7s 0.66s ease both;}

  @keyframes hero-ring { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
  .hero-ring-spin { animation:hero-ring 9s linear infinite; }
  .hero-ring-glow { animation:hero-ring 9s linear infinite; }

  .hero-btn-resume { position:relative; overflow:hidden; transition:box-shadow 0.35s ease,color 0.22s ease,border-color 0.22s ease; }
  .hero-btn-resume::before { content:''; position:absolute; inset:0; background:linear-gradient(90deg,#3b82f6,#6d28d9); transform:scaleX(0); transform-origin:left; transition:transform 0.38s cubic-bezier(0.4,0,0.2,1); z-index:0; border-radius:inherit; }
  .hero-btn-resume:hover::before { transform:scaleX(1); }
  .hero-btn-resume:hover { color:#fff !important; border-color:transparent !important; box-shadow:0 0 28px rgba(59,130,246,0.45),0 6px 24px rgba(109,40,217,0.2); }
  .hero-btn-resume > * { position:relative; z-index:1; }

  .hero-scroll-track { position:relative; width:1px; height:54px; border-radius:99px; overflow:hidden; background:rgba(100,116,139,0.2); }
  .dark .hero-scroll-track { background:rgba(255,255,255,0.1); }
  .hero-scroll-track::before { content:''; position:absolute; top:-100%; left:0; width:100%; height:55%; background:linear-gradient(180deg,transparent 0%,rgba(59,130,246,0) 8%,rgba(59,130,246,0.9) 45%,rgba(59,130,246,0) 100%); border-radius:99px; animation:hero-beam 2.4s ease-in-out infinite; }
  @keyframes hero-beam { 0%{top:-100%;opacity:0;} 10%{opacity:1;} 85%{opacity:1;} 100%{top:110%;opacity:0;} }
`;

export default function Hero() {
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [roleClass, setRoleClass] = useState("hero-role-in");

  useEffect(() => {
    const id = setInterval(() => {
      setRoleClass("hero-role-out");
      setTimeout(() => { setRoleIdx(i => (i + 1) % ROLES.length); setRoleClass("hero-role-in"); }, 300);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    /*
      ✅ NO inline style background here.
      bg-white / dark:bg-[#06091a] handles the theme switch via Tailwind.
      This will change when <html class="dark"> is toggled.
    */
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
        bg-white dark:bg-[#06091a] transition-colors duration-500 "
    >
      <style>{CSS}</style>

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-52 -left-52 w-[680px] h-[680px] rounded-full bg-blue-500 opacity-[0.025] dark:opacity-[0.07] blur-[130px]" />
        <div className="absolute top-1/2 -right-52 w-[520px] h-[520px] rounded-full bg-violet-500 opacity-[0.02] dark:opacity-[0.055] blur-[110px]" />
      </div>

      {/*
        ── INCREASED TOP PADDING: pt-40 sm:pt-44 lg:pt-48 ──
        This gives more breathing room below the navbar
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-20 sm:pt-24 lg:pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-14 lg:gap-24 items-center">

          {/* ══ LEFT: Text content ══ */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1">

           {/* Eyebrow */}
<div className="hau0 hidden md:flex items-center gap-3 justify-center md:justify-start">
  <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
  <span className="hero-f-body text-[0.62rem] font-semibold tracking-[0.38em] uppercase text-slate-500 dark:text-slate-400">
    Welcome · Portfolio 2026
  </span>
</div>

            {/*
              ── LARGE NAME: clamp(3.4rem, 8vw, 6.5rem) ──
              Split into two lines for more impact
            */}
            <h1 className="hau1 hero-f-display font-extrabold leading-[1.0] tracking-tight w-full"
              style={{ fontSize: "clamp(3.4rem, 8vw, 6.5rem)" }}>
              <span className="block hero-f-body font-light text-slate-400 dark:text-white/30"
                style={{ fontSize: "clamp(0.9rem,2.2vw,1.25rem)", letterSpacing: "0.12em", marginBottom: "0.6rem" }}>
                Hello, I'm
              </span>
              <span style={{
                background: "linear-gradient(115deg, #2563eb 0%, #5b21b6 50%, #9333ea 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                display: "block", lineHeight: 1.02,
              }}>
                Lingam
              </span>
              <span style={{
                background: "linear-gradient(115deg, #3b82f6 0%, #7c3aed 55%, #a855f7 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                display: "block", lineHeight: 1.02,
              }}>
                Ganesh
              </span>
            </h1>

            {/* Rotating role */}
            <div className="hau2 overflow-hidden flex items-center justify-center md:justify-start" style={{ height: 48 }}>
              <p className={`hero-f-serif hero-cursor ${roleClass} text-slate-600 dark:text-slate-300`}
                style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.75rem)", fontWeight: 400, fontStyle: "italic" }}>
                {ROLES[roleIdx]}
              </p>
            </div>

            {/* Description */}
            <p className="hau3 hero-f-body max-w-lg text-[0.92rem] sm:text-[0.98rem] leading-relaxed font-normal text-slate-500 dark:text-slate-400">
              Building interactive, responsive web applications with clean code and modern tooling.
              Passionate about great user experiences from frontend to backend.
            </p>

            <div className="hau3 hidden md:block w-16 h-px bg-gradient-to-r from-blue-400/50 to-transparent" />

            {/* Resume CTA */}
            <div className="hau4">
              <a href="/resume.pdf" download="Lingam_Ganesh_Resume.pdf"
                className="hero-btn-resume hero-f-body inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl border-2 border-blue-500/65 dark:border-blue-500/50 text-blue-600 dark:text-blue-400 text-[0.74rem] font-semibold tracking-[0.16em] uppercase no-underline cursor-pointer"
                style={{ boxShadow: "0 0 14px rgba(59,130,246,0.1)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="hau5 mt-3">
              <div className="flex flex-col items-center gap-2">
                <span className="hero-f-body text-[0.42rem] font-semibold tracking-[0.4em] uppercase text-slate-400 dark:text-slate-500">scroll</span>
                <div className="hero-scroll-track" />
                <div className="w-[3px] h-[3px] rounded-full bg-blue-400/60 -mt-1" />
              </div>
            </div>
          </div>

          {/* Eyebrow */}
<div className="hau0 flex items-center gap-3 justify-center md:justify-start sm:flex md:hidden">
  <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
  <span className="hero-f-body text-[0.62rem] font-semibold tracking-[0.38em] uppercase text-slate-500 dark:text-slate-400">
    Welcome · Portfolio 2026
  </span>
</div>

          {/* ══ RIGHT: Profile image ══ */}
          <div className="hau6 flex flex-col items-center gap-5 order-1 md:order-2">
            <div className="relative flex-shrink-0 w-[170px] h-[170px] md:w-[200px] md:h-[200px] lg:w-[270px] lg:h-[270px]">
              {/* Ambient glow */}
              <div className="hero-ring-glow absolute rounded-full"
                style={{ inset: "-20px", opacity: 0.28, filter: "blur(20px)", background: "conic-gradient(from 0deg,#3b82f6,#7c3aed,#a855f7,#3b82f6)" }} />
              {/* Hard ring */}
              <div className="hero-ring-spin absolute rounded-full"
                style={{ inset: "-3px", padding: "3px", background: "conic-gradient(from 0deg,#3b82f6,#4f46e5,#7c3aed,#a855f7,#3b82f6)", borderRadius: "50%", filter: "blur(0.5px) brightness(1.1)" }} />
              {/* Image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden"
                style={{ border: "4px solid #06091a", boxShadow: "0 0 0 1px rgba(59,130,246,0.12),0 16px 48px rgba(0,0,0,0.5)" }}>
                <img src={profilePic} alt="Lingam Ganesh" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Name tag */}
            <div className="text-center">
              <p className="hero-f-display text-[0.58rem] font-bold tracking-[0.28em] uppercase text-slate-400/60 dark:text-white/20">Lingam Ganesh</p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="w-5 h-px bg-blue-400/30" />
                <p className="hero-f-body text-[0.5rem] tracking-[0.2em] uppercase text-slate-400/50 dark:text-white/15">Full Stack Engineer</p>
                <div className="w-5 h-px bg-violet-400/30" />
              </div>
            </div>

            {/* Socials — hidden on md */}
            {/* Socials — hide on phones */}
<div className="flex sm:flex lg:flex items-center gap-2.5 flex-wrap justify-center">
  {SOCIALS.map(({ label, href, hover, svg }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 text-slate-400 dark:text-white/30 transition-all duration-300 ${hover}`}
    >
      {svg}
    </a>
  ))}
</div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.07] to-transparent" />
    </section>
  );
}