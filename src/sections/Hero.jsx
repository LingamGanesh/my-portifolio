import { useState, useEffect } from "react";
import React from "react";
import profilePic from "../assets/images/profile/profile.png";

const NAV_LINKS = ["About", "Work", "Skills", "Projects", "Services", "Contact"];

const ROLES = [
  "Frontend Developer",
  "Backend Engineer",
  "Full Stack Engineer",
  "React Specialist",
  "Node.js Developer",
];

const SOCIALS = [
  {
    label: "GitHub", href: "https://github.com/",
    hover: "hover:text-white hover:border-white/30 hover:bg-white/10",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: "LinkedIn", href: "https://linkedin.com/",
    hover: "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "Twitter", href: "https://twitter.com/",
    hover: "hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: "Instagram", href: "https://instagram.com/",
    hover: "hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
];

/* ─── All CSS injected in one <style> tag ─── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Outfit:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap');

  .f-display { font-family: 'Syncopate', sans-serif; }
  .f-serif   { font-family: 'Cormorant Garamond', Georgia, serif; }
  .f-body    { font-family: 'Outfit', sans-serif; }
  .hero-h    { font-size: clamp(1.55rem, 3.8vw, 3.2rem); line-height: 1.1; letter-spacing: 0.04em; }

  /* Gradient text */
  .grad-name {
    background: linear-gradient(110deg, #ff2d78 0%, #ff9f43 48%, #b94eff 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .grad-india {
    background: linear-gradient(90deg, #FF9933 0%, #fff 50%, #138808 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  /* ── Hero container — plain, no border effect ── */
  .hero-box {
    position: relative;
    border-radius: 0;
    background: #000;
  }
  .hero-inner {
    position: relative;
    z-index: 1;
    background: #000;
    min-height: 100%;
  }

  /* ── Minimal dark/white scroll indicator ── */
  .scroll-wrap  { display:flex; flex-direction:column; align-items:center; gap:8px; }
  .scroll-lbl   { font-family:'Outfit',sans-serif; font-size:0.44rem; font-weight:500; letter-spacing:0.4em; text-transform:uppercase; color:rgba(255,255,255,0.22); }

  /* Outer track — very dark, thin */
  .scroll-track {
    position:relative; width:1px; height:64px;
    background: rgba(255,255,255,0.08);
    border-radius:99px; overflow:hidden;
  }

  /* White beam travelling down — no color, just white/dark */
  .scroll-track::before {
    content:''; position:absolute; top:-100%; left:0; width:100%; height:55%;
    background: linear-gradient(180deg,
      transparent           0%,
      rgba(255,255,255,0)   8%,
      rgba(255,255,255,0.9) 40%,
      rgba(255,255,255,0.6) 65%,
      rgba(255,255,255,0)  100%
    );
    border-radius:99px;
    animation: beamDown 2.2s ease-in-out infinite;
  }

  /* Soft wide white glow behind beam */
  .scroll-track::after {
    content:''; position:absolute; top:-100%; left:50%; transform:translateX(-50%);
    width:8px; height:55%;
    background: linear-gradient(180deg,
      transparent            0%,
      rgba(255,255,255,0)    8%,
      rgba(255,255,255,0.18) 40%,
      rgba(255,255,255,0.08) 65%,
      rgba(255,255,255,0)   100%
    );
    border-radius:99px; filter:blur(3px);
    animation: beamDown 2.2s ease-in-out infinite;
  }

  @keyframes beamDown {
    0%   { top:-100%; opacity:0; }
    10%  { opacity:1; }
    80%  { opacity:1; }
    100% { top:110%;  opacity:0; }
  }

  /* Small white dot at bottom */
  .scroll-dot {
    width:3px; height:3px; border-radius:50%;
    background: rgba(255,255,255,0.5);
    box-shadow: 0 0 4px 1px rgba(255,255,255,0.2);
    animation: dotFade 2.2s ease-in-out infinite;
    margin-top:-4px;
  }
  @keyframes dotFade {
    0%,15% { opacity:0; transform:scale(0.5); }
    75%    { opacity:0.7; transform:scale(1); }
    100%   { opacity:0; transform:scale(0.7); }
  }

  /* ── Button ── */
  .btn-sweep { position:relative; overflow:hidden; transition:box-shadow 0.35s ease; }
  .btn-sweep::before {
    content:''; position:absolute; inset:0;
    background:linear-gradient(90deg,#ff2d78,#b94eff);
    transform:scaleX(0); transform-origin:left;
    transition:transform 0.38s cubic-bezier(0.4,0,0.2,1);
    z-index:0; border-radius:inherit;
  }
  .btn-sweep:hover::before { transform:scaleX(1); }
  .btn-sweep:hover { box-shadow:0 0 32px rgba(255,45,120,0.55),0 0 70px rgba(185,78,255,0.2); }
  .btn-sweep > * { position:relative; z-index:1; }

  /* ── Nav ── */
  .nav-lnk { position:relative; transition:color 0.25s ease; }
  .nav-lnk::after {
    content:''; position:absolute; bottom:-4px; left:0;
    width:0; height:1px; background:#ff2d78;
    box-shadow:0 0 7px #ff2d78; transition:width 0.3s ease;
  }
  .nav-lnk:hover { color:#fff !important; }
  .nav-lnk:hover::after { width:100%; }

  /* ── Avatar rings ── */
  @keyframes spinRing { to { transform:rotate(360deg); } }
  @keyframes glowAv   { 0%{opacity:0.33;transform:rotate(0deg) scale(0.96);} 100%{opacity:0.65;transform:rotate(360deg) scale(1.05);} }
  .spin-ring { animation:spinRing 3.6s linear infinite; }
  .glow-ring { animation:spinRing 3.6s linear infinite, glowAv 2.8s ease-in-out infinite alternate; }

  /* ── Fade-up stagger ── */
  @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
  .au0{animation:fadeUp 0.8s 0.00s ease both;}
  .au1{animation:fadeUp 0.8s 0.12s ease both;}
  .au2{animation:fadeUp 0.8s 0.24s ease both;}
  .au3{animation:fadeUp 0.8s 0.36s ease both;}
  .au4{animation:fadeUp 0.8s 0.48s ease both;}
  .au5{animation:fadeUp 0.8s 0.60s ease both;}
  .au6{animation:fadeUp 0.8s 0.72s ease both;}

  /* ── Role text ── */
  @keyframes roleIn  { from{opacity:0;transform:translateY(10px);}  to{opacity:1;transform:translateY(0);} }
  @keyframes roleOut { from{opacity:1;transform:translateY(0);}     to{opacity:0;transform:translateY(-10px);} }
  .role-in  { animation:roleIn  0.4s ease both; }
  .role-out { animation:roleOut 0.32s ease both; }

  /* ── Cursor blink ── */
  @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
  .cursor-blink::after { content:'|'; margin-left:3px; color:#ff2d78; font-style:normal; animation:blink 1s step-end infinite; }

  /* ── Accent bar ── */
  .accent-bar { display:inline-block; width:32px; height:2px; background:linear-gradient(90deg,#ff2d78,#b94eff); border-radius:2px; box-shadow:0 0 8px rgba(255,45,120,0.5); }
`;

function NeonScrollIndicator() {
  return (
    <div className="scroll-wrap">
      <span className="scroll-lbl">scroll</span>
      <div className="scroll-track" />
      <div className="scroll-dot" />
    </div>
  );
}

export default function Hero() {
 const [scrolled, setScrolled] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleClass, setRoleClass] = useState("role-in");

   useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);


  useEffect(() => {
    const id = setInterval(() => {
      setRoleClass("role-out");
      setTimeout(() => { setRoleIdx(i => (i + 1) % ROLES.length); setRoleClass("role-in"); }, 360);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{CSS}</style>

     
      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-5 py-5 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-gradient-to-b from-black/75 to-transparent"
      }`}>
        <ul className="flex flex-wrap justify-center gap-5 sm:gap-8 list-none m-0 p-0 mt-5">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                className="nav-lnk f-body text-[0.64rem] font-semibold tracking-[0.22em] uppercase text-white/38 no-underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
        {/* ── Bottom rule ── */}
        <div className="rule" style={{ marginTop: "clamp(56px,8vw,96px)" }} />

      {/* ── HERO WRAPPER — the racing neon border lives here ── */}
      <div className="hero-box min-h-screen mx-2 sm:mx-4 lg:mx-8 mt-2 mb-2">
        <div className="hero-inner">
          <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 lg:px-14 xl:px-20 pt-24 pb-16">

            <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-10 lg:gap-16 items-center">

              {/* ══ RIGHT — Avatar (mobile: top) ══ */}
              <div className="au6 flex flex-col items-center gap-6 order-1 md:order-2">

                {/* Avatar */}
                <div className="relative flex-shrink-0" style={{ width: 240, height: 240 }}>
                  <div className="glow-ring absolute rounded-full" style={{
                    inset: -22, opacity: 0.38, filter: "blur(20px)",
                    background: "conic-gradient(from 0deg,#ff2d78,#b94eff,#00ff88,#ff6a00,#ff2d78)",
                  }} />
                  <div className="spin-ring absolute rounded-full" style={{
                    inset: -5, filter: "blur(2.5px) brightness(1.3)",
                    background: "conic-gradient(from 0deg,#ff2d78,#ff1744,#ff6a00,#ffcc00,#b94eff,#00ff88,#00bfff,#ff2d78)",
                  }} />
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-center justify-center" style={{
                    background: "linear-gradient(145deg,#1c1c1c,#0f0f0f)",
                    border: "5px solid #080808",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.9), inset 0 2px 6px rgba(255,255,255,0.05)",
                  }}>
                    <img src={profilePic} alt="Lingam Ganesh" className="w-full h-full object-cover" /> 
                    <div style={{ opacity: 0.14, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    </div>
                  </div>
                </div>

                {/* Name tag */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <p className="f-display" style={{ fontSize: "0.56rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Lingam Ganesh</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 24, height: 1, background: "rgba(255,45,120,0.4)" }} />
                    <p className="f-body" style={{ fontSize: "0.48rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.15)" }}>Full Stack Engineer</p>
                    <div style={{ width: 24, height: 1, background: "rgba(185,78,255,0.4)" }} />
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  {SOCIALS.map(({ label, href, hover, svg }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/30 transition-all duration-300 ${hover}`}>
                      {svg}
                    </a>
                  ))}
                </div>

                <p className="f-body" style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.16)", marginTop: -8 }}>Let's connect</p>

                <div className="flex gap-2" style={{ opacity: 0.13 }}>
                  {[1, 0.75, 0.55, 0.35, 0.2].map((o, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-white" style={{ opacity: o }} />
                  ))}
                </div>
              </div>

              {/* ══ LEFT — Text (mobile: bottom) ══ */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 order-2 md:order-1">

                {/* Eyebrow */}
                <div className="au0 flex items-center gap-3 justify-center md:justify-start">
                  <span className="accent-bar" />
                  <p className="f-body" style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
                    Welcome to My World
                  </p>
                </div>

                {/* Heading */}
                <h1 className="au1 f-display hero-h font-bold uppercase text-white w-full">
                  Hello,{" "}
                  <span style={{ fontWeight: 400, fontSize: "0.7em", color: "rgba(255,255,255,0.4)" }}>I'm</span>
                  <br />
                  <span className="grad-name">Lingam Ganesh</span>
                </h1>

                {/* Rotating role */}
                <div className="au2 overflow-hidden" style={{ height: 36, display: "flex", alignItems: "center", minWidth: 240 }}>
                  <p className={`f-serif cursor-blink ${roleClass}`}
                    style={{ fontSize: "clamp(1.1rem,2.2vw,1.4rem)", fontWeight: 300, fontStyle: "italic", letterSpacing: "0.04em", color: "rgba(255,255,255,0.56)" }}>
                    {ROLES[roleIdx]}
                  </p>
                </div>

                {/* Subtitle */}
                <p className="au2 f-body" style={{ fontSize: "0.76rem", fontWeight: 300, letterSpacing: "0.08em", color: "rgba(255,255,255,0.34)", marginTop: -8 }}>
                  Professional &amp; Ambitious Developer
                </p>

                {/* Location */}
                <p className="au3 f-body" style={{ fontSize: "0.76rem", fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.26)" }}>
                  Based in <span className="grad-india" style={{ fontWeight: 600, textTransform: "none", fontSize: "0.82rem", letterSpacing: "normal" }}>India</span>
                </p>

                {/* Divider */}
                <div className="au3 hidden md:block" style={{ width: 64, height: 1, background: "linear-gradient(90deg,#ff2d78,transparent)" }} />

                {/* CTA */}
                <div className="au4 w-full sm:w-auto flex justify-center md:justify-start">
                  <a href="#" download
                    className="btn-sweep f-body inline-flex items-center justify-center gap-3 px-8 py-3.5 w-full sm:w-auto max-w-[280px] sm:max-w-none border border-[#ff2d78] text-white uppercase no-underline cursor-pointer"
                    style={{ borderRadius: 3, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.22em", boxShadow: "0 0 16px rgba(255,45,120,0.2)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    <span>Get Resume</span>
                  </a>
                </div>

                {/* Neon scroll indicator */}
                <div className="au5 flex justify-center md:justify-start mt-1">
                  <NeonScrollIndicator />
                </div>

              </div>
            </div>   
          </section>
           {/* ── Bottom rule ── */}
        <div className="rule" style={{ marginTop: "clamp(56px,8vw,96px)" }} />

        </div>
      </div>
    </div>
  );
}