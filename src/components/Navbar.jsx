/*
  File: src/components/Navbar.jsx
*/

import { useState, useEffect, useRef, useCallback } from "react";
import { Sun, Moon, LayoutGrid, X } from "lucide-react";
import { useTheme } from "./Themecontext";

const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

function NavLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        relative group px-1 py-1
        text-[0.7rem] font-semibold tracking-[0.22em] uppercase
        transition-colors duration-300 no-underline
        ${active
          ? "text-slate-900 dark:text-white"
          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }
      `}
    >
      {label}
      <span className={`
        absolute -bottom-0.5 left-0 h-[1.5px]
        bg-gradient-to-r from-blue-500 via-blue-400 to-violet-500
        shadow-[0_0_8px_rgba(96,165,250,0.7)]
        transition-all duration-500 ease-out
        ${active ? "w-full" : "w-0 group-hover:w-full"}
      `}/>
    </a>
  );
}

function MobileDropdown({ open, onClose }) {
  return (
    <div className={`
      absolute top-full right-0 mt-3 w-48 rounded-2xl overflow-hidden
      border border-slate-200/80 dark:border-white/10
      bg-white/90 dark:bg-[#060d1f]/92
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.7)]
      transition-all duration-300 ease-out origin-top-right
      ${open
        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      }
    `}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      <nav className="flex flex-col py-2 px-1">
        {NAV_LINKS.slice(1).map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
            className={`
              group flex items-center gap-3 px-4 py-3 rounded-xl
              text-[0.7rem] font-semibold tracking-[0.2em] uppercase no-underline
              text-slate-600 dark:text-slate-400
              hover:text-slate-900 dark:hover:text-white
              hover:bg-slate-100 dark:hover:bg-white/5
              transition-all duration-300
              ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
            `}
          >
            <span className="
              w-1.5 h-1.5 rounded-full flex-shrink-0
              bg-blue-300/40 dark:bg-blue-400/30
              group-hover:bg-blue-500 dark:group-hover:bg-blue-400
              group-hover:shadow-[0_0_6px_rgba(96,165,250,0.9)]
              transition-all duration-300
            "/>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
    </div>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const dropdownRef = useRef(null);
  const menuBtnRef  = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = NAV_LINKS
        .map(({ href }) => {
          const el = document.querySelector(href);
          return el ? { href, top: el.getBoundingClientRect().top } : null;
        })
        .filter(Boolean)
        .filter(({ top }) => top <= 100)
        .at(-1);
      if (current) setActiveLink(current.href);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleOutsideClick = useCallback((e) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(e.target) &&
      menuBtnRef.current  && !menuBtnRef.current.contains(e.target)
    ) setMobileOpen(false);
  }, []);

  useEffect(() => {
    document[mobileOpen ? "addEventListener" : "removeEventListener"]
      ("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobileOpen, handleOutsideClick]);

  /* icon button — slightly smaller on mobile */
  const iconBtn = `
    relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden
    flex items-center justify-center flex-shrink-0
    border border-slate-200 dark:border-white/10
    bg-slate-100/80 dark:bg-white/5
    hover:bg-slate-200 dark:hover:bg-white/10
    text-slate-500 dark:text-slate-400
    hover:text-slate-900 dark:hover:text-white
    transition-all duration-300 cursor-pointer
  `;

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-500 ease-out
      ${scrolled
        ? `bg-white/82 dark:bg-[#06091a]/85
           backdrop-blur-2xl
           border-b border-slate-200/70 dark:border-white/[0.06]
           shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]`
        : "bg-transparent border-b border-transparent"
      }
    `}>
      {/* Top shimmer line when scrolled */}
      <div className={`
        absolute top-0 left-0 right-0 h-px
        bg-gradient-to-r from-transparent via-blue-400/25 to-transparent
        transition-opacity duration-500
        ${scrolled ? "opacity-100" : "opacity-0"}
      `}/>

     
      <nav className="
        max-w-7xl mx-auto flex items-center justify-between
        px-3.5 sm:px-8 lg:px-12
        h-[52px] sm:h-16 lg:h-[72px]
      ">

        {/* Logo — slightly smaller text on phones */}
        <a href="#home" className="relative group flex items-center gap-1 sm:gap-1.5 no-underline">
          <span className="
            font-mono text-blue-500 dark:text-blue-400 font-bold leading-none
            text-[1.1rem] sm:text-xl
            group-hover:text-blue-400 dark:group-hover:text-blue-300
            transition-colors duration-300
          ">{"<"}</span>

          <span className="
            font-black tracking-[0.2em] uppercase
            text-[0.75rem] sm:text-[0.85rem] lg:text-[0.92rem]
            bg-gradient-to-r from-slate-800 via-slate-700 to-slate-500
            dark:from-white dark:via-slate-200 dark:to-slate-400
            bg-clip-text text-transparent
            group-hover:from-blue-700 group-hover:via-slate-700 group-hover:to-slate-500
            dark:group-hover:from-blue-200 dark:group-hover:via-white dark:group-hover:to-slate-200
            transition-all duration-500
          ">Ganesh</span>

          <span className="
            font-mono text-violet-500 dark:text-violet-400 font-bold leading-none
            text-[1.1rem] sm:text-xl
            group-hover:text-violet-400 dark:group-hover:text-violet-300
            transition-colors duration-300
          ">{"/>"}</span>

          <span className="
            absolute -bottom-1 left-0 right-0 h-px
            bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-violet-400/0
            scale-x-0 group-hover:scale-x-100
            transition-transform duration-500 origin-center
          "/>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={activeLink === link.href}
              onClick={() => setActiveLink(link.href)}
            />
          ))}
        </div>

        {/* Right controls — tighter gap on mobile */}
        <div className="flex items-center gap-2 sm:gap-2.5">

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className={`
              ${iconBtn}
              hover:shadow-[0_0_14px_rgba(96,165,250,0.2)]
              dark:hover:shadow-[0_0_14px_rgba(96,165,250,0.28)]
            `}
          >
            <span className={`absolute transition-all duration-500 ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}>
              <Sun size={14} strokeWidth={2} />
            </span>
            <span className={`absolute transition-all duration-500 ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}>
              <Moon size={14} strokeWidth={2} />
            </span>
          </button>

          {/* Mobile menu */}
          <div className="relative md:hidden" ref={dropdownRef}>
            <button
              ref={menuBtnRef}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open navigation"
              className={`
                ${iconBtn}
                hover:shadow-[0_0_14px_rgba(167,139,250,0.2)]
                dark:hover:shadow-[0_0_14px_rgba(167,139,250,0.28)]
              `}
            >
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}>
                <LayoutGrid size={14} strokeWidth={2} />
              </span>
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}>
                <X size={14} strokeWidth={2} />
              </span>
            </button>
            <MobileDropdown open={mobileOpen} onClose={() => setMobileOpen(false)} />
          </div>

        </div>
      </nav>
    </header>
  );
}