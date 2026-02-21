import { memo } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


/* ── CSS: animations & font utilities only (no @import here) ── */
const CSS = `
  .ft-serif   { font-family: 'Cormorant Garamond', Georgia, serif; }
  .ft-display { font-family: 'Syne', sans-serif; }
  .ft-body    { font-family: 'DM Sans', sans-serif; }

  .ft-nav-link { position: relative; display: inline-block; }
  .ft-nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: currentColor;
    transition: width 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ft-nav-link:hover::after { width: 100%; }

  .ft-icon-btn {
    transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1),
                color 0.22s ease,
                border-color 0.22s ease,
                background 0.22s ease;
  }
  .ft-icon-btn:hover { transform: translateY(-4px) scale(1.1); }

  @keyframes ft-avail {
    0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.55); }
    50%      { box-shadow: 0 0 0 5px rgba(74,222,128,0); }
  }
  .ft-avail { animation: ft-avail 2.2s ease-in-out infinite; }

  @keyframes ft-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .ft-marquee {
    display: flex;
    width: max-content;
    animation: ft-scroll 30s linear infinite;
  }
  .ft-marquee:hover { animation-play-state: paused; }

  @keyframes ft-shine {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  .ft-gradient-name {
    background: linear-gradient(
      110deg,
      #3b82f6 0%, #7c3aed 30%, #a855f7 48%,
      #3b82f6 52%, #7c3aed 70%, #a855f7 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ft-shine 5s linear infinite;
  }

  .ft-cta-arrow { transition: transform 0.3s ease; }
  .ft-cta:hover .ft-cta-arrow { transform: translateX(5px); }

  .ft-cta-line { transition: width 0.38s ease; }
  .ft-cta:hover .ft-cta-line { width: 44px !important; }
`;

/* ── Static data — defined outside component, never recreated ── */
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/LingamGanesh",
    Icon: FaGithub,
    hoverClass:
      "hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/8",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/lingam-ganesh",
    Icon: FaLinkedin,
    hoverClass:
      "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300/50 dark:hover:border-blue-400/30 hover:bg-blue-50 dark:hover:bg-blue-400/8",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    Icon: FaTwitter,
    hoverClass:
      "hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-300/50 dark:hover:border-sky-400/30 hover:bg-sky-50 dark:hover:bg-sky-400/8",
  },
];

const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

/* Duplicated for seamless marquee loop */
const MARQUEE_ITEMS = [
  "Full Stack Engineer", "React Specialist", "Node.js Developer",
  "MERN Stack", "Open to Work", "Based in India",
  "Full Stack Engineer", "React Specialist", "Node.js Developer",
  "MERN Stack", "Open to Work", "Based in India",
];

/* ── Footer ── */
const Footer = memo(function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="
      relative overflow-hidden
      bg-white dark:bg-[#04070f]
      transition-colors duration-500
    ">
      <style>{CSS}</style>

      {/* ── AMBIENT GLOWS (dark mode) ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[380px] rounded-full bg-blue-600  blur-[120px] opacity-0 dark:opacity-[0.05] transition-opacity duration-500" />
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[340px] rounded-full bg-violet-600 blur-[100px] opacity-0 dark:opacity-[0.045] transition-opacity duration-500" />
      </div>

      {/* ── TOP RULE + GLOW DOT ── */}
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent transition-colors duration-500" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-400"
          style={{ boxShadow: "0 0 10px 3px rgba(96,165,250,0.65)" }}
          aria-hidden
        />
      </div>

      {/*
        ── MARQUEE BAND ──
        hidden on xs (phones) → visible from sm upward.
        Prevents horizontal overflow on 375px screens and avoids
        unnecessary GPU compositing on low-end mobile hardware.
      */}
      <div className="
        hidden sm:block
        overflow-hidden py-3 select-none
        border-b border-slate-100 dark:border-white/[0.04]
        transition-colors duration-500
      " aria-hidden>
        <div className="ft-marquee">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="ft-display flex items-center gap-5 pr-5 text-[0.52rem] font-semibold tracking-[0.4em] uppercase text-slate-200 dark:text-white/[0.09]"
            >
              {item}
              <span className="text-[6px] opacity-60">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="
        relative z-10 max-w-7xl mx-auto
        px-4 sm:px-8 lg:px-14 xl:px-20
        pt-12 sm:pt-16 pb-8
      ">

        {/* ── PRIMARY GRID ── */}
        <div className="
          grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px]
          gap-10 sm:gap-12 lg:gap-16
          items-start pb-10 sm:pb-14
        ">

          {/* ═══ LEFT: Editorial statement ═══ */}
          <div className="flex flex-col gap-5 sm:gap-6">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-px bg-blue-500/50 dark:bg-blue-400/50" />
              <span className="ft-body text-[0.56rem] font-semibold tracking-[0.46em] uppercase text-slate-400 dark:text-white/25">
                Let's work together
              </span>
            </div>

            {/* Big serif headline — clamp for fluid scaling phone → desktop */}
            <h2
              className="ft-serif leading-[1.06] text-slate-900 dark:text-white transition-colors duration-500"
              style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.8rem)", fontWeight: 300 }}
            >
              Building digital{" "}
              <em style={{ fontStyle: "italic" }}>experiences</em>
              <br className="hidden xs:block" />
              {" "}that{" "}
              <span className="ft-gradient-name" style={{ fontWeight: 600 }}>
                leave a mark.
              </span>
            </h2>

            {/* Description */}
            <p
              className="ft-body font-light leading-relaxed max-w-sm text-slate-400 dark:text-white/28"
              style={{ fontSize: "clamp(0.78rem, 1.8vw, 0.88rem)" }}
            >
              Available for freelance projects, full-time roles, and
              collaborations that push the boundaries of what the web can do.
            </p>

            {/* CTA */}
            <a href="#contact" className="ft-cta group inline-flex items-center gap-3 no-underline w-fit mt-1">
              <div className="ft-cta-line h-px bg-blue-500/60 dark:bg-blue-400/50" style={{ width: 28 }} />
              <span className="ft-body text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-blue-600 dark:text-blue-400 transition-colors duration-300">
                Start a conversation
              </span>
              <svg
                className="ft-cta-arrow flex-shrink-0"
                width="12" height="12" viewBox="0 0 24 24"
                fill="none" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#3b82f6" strokeWidth="2"/>
              </svg>
            </a>

          </div>

          {/* ═══ RIGHT: Logo + socials + badge ═══ */}
          <div className="flex flex-col items-start lg:items-end gap-6 sm:gap-7">

            {/* Logo */}
            <div className="flex flex-col items-start lg:items-end gap-1">
              <a href="#home" className="group flex items-center gap-1.5 no-underline" aria-label="Back to top">
                <span className="font-mono text-[1.35rem] sm:text-[1.4rem] font-bold leading-none text-blue-500 dark:text-blue-400 group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {"<"}
                </span>
                <span className="
                  ft-display font-black tracking-[0.22em] uppercase
                  text-[0.88rem] sm:text-[0.95rem]
                  bg-gradient-to-r from-slate-800 via-slate-600 to-slate-500
                  dark:from-white dark:via-slate-200 dark:to-slate-400
                  bg-clip-text text-transparent
                  group-hover:from-blue-700 group-hover:via-slate-600 group-hover:to-slate-500
                  dark:group-hover:from-blue-200 dark:group-hover:via-white dark:group-hover:to-slate-300
                  transition-all duration-500
                ">Ganesh</span>
                <span className="font-mono text-[1.35rem] sm:text-[1.4rem] font-bold leading-none text-violet-500 dark:text-violet-400 group-hover:text-violet-400 dark:group-hover:text-violet-300 transition-colors duration-300">
                  {"/>"}
                </span>
              </a>
              <span className="ft-body text-[0.5rem] font-medium tracking-[0.22em] uppercase text-slate-400/55 dark:text-white/18">
                Full Stack Engineer
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`
                    ft-icon-btn
                    flex items-center justify-center
                    w-9 h-9 sm:w-10 sm:h-10
                    rounded-full
                    border border-slate-200 dark:border-white/[0.07]
                    text-slate-400 dark:text-white/25
                    text-[0.9rem] sm:text-[0.95rem]
                    transition-all duration-300
                    ${hoverClass}
                  `}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="
              flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full
              border border-green-200/60 dark:border-green-500/[0.18]
              bg-green-50 dark:bg-green-500/[0.07]
              transition-colors duration-500
            ">
              <span
                className="ft-avail w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"
                style={{ boxShadow: "0 0 6px 1px rgba(74,222,128,0.75)" }}
              />
              <span className="ft-body text-[0.56rem] sm:text-[0.58rem] font-semibold tracking-[0.14em] uppercase text-green-600 dark:text-green-400">
                Open to opportunities
              </span>
            </div>

            {/* Location */}
            <p className="ft-body text-[0.62rem] font-light tracking-[0.14em] uppercase text-slate-400/60 dark:text-white/18 flex items-center gap-2">
              <svg
                width="10" height="10" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"
                className="flex-shrink-0 text-blue-400/60"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              India · Open to Remote
            </p>

          </div>
        </div>

        {/* ── DIVIDER WITH DIAMOND ── */}
        <div className="flex items-center gap-4 mb-7 sm:mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-slate-100 dark:from-white/[0.04] to-slate-200/80 dark:to-white/[0.07] transition-colors duration-500" />
          <span className="ft-serif text-[0.55rem] text-slate-300 dark:text-white/[0.1] select-none">◆</span>
          <div className="flex-1 h-px bg-gradient-to-l from-slate-100 dark:from-white/[0.04] to-slate-200/80 dark:to-white/[0.07] transition-colors duration-500" />
        </div>

        {/* ── BOTTOM: Nav + Credits ── */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-4">

          {/* Nav — tighter horizontal gap on phones, no overflow */}
          <nav
            className="flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-5 gap-y-2.5"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="ft-nav-link ft-body font-medium tracking-[0.2em] uppercase text-slate-400 dark:text-white/22 hover:text-slate-700 dark:hover:text-white/65 transition-colors duration-300 no-underline"
                style={{ fontSize: "clamp(0.56rem, 1.2vw, 0.62rem)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Tagline + copyright */}
          <div className="flex flex-col items-center sm:items-end gap-1 flex-shrink-0">
            <p
              className="ft-serif font-light italic text-slate-400 dark:text-white/18 transition-colors duration-500 text-center sm:text-right"
              style={{ fontSize: "clamp(0.72rem, 1.5vw, 0.82rem)" }}
            >
              Designed &amp; built with{" "}
              <span className="not-italic text-red-400/70 dark:text-red-400/50">♥</span>
              {" "}by{" "}
              <span className="ft-display not-italic font-bold text-[0.72rem] tracking-[0.08em] bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Lingam Ganesh
              </span>
            </p>
            <p className="ft-body text-[0.58rem] font-light tracking-[0.1em] text-slate-300 dark:text-white/[0.1] transition-colors duration-500">
              &copy; {year} · All rights reserved
            </p>
          </div>

        </div>
      </div>

      {/* ── BOTTOM ACCENT RULE ── */}
      <div className="
        h-[2px]
        bg-gradient-to-r
        from-blue-500/25 via-violet-500/35 to-blue-500/25
        dark:from-blue-500/18 dark:via-violet-500/25 dark:to-blue-500/18
        transition-colors duration-500
      " />
    </footer>
  );
});

export default Footer;