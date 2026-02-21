import { useState, useEffect, useRef } from "react";

const Svg = {
  HTML: () => <svg viewBox="0 0 32 32" width="24" height="24"><path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#E44D26"/><path d="M16 27.6V4H24.1L22 26.1z" fill="#F16529"/><path d="M11 14H16v-3H8.4l.8 8.6H16v-3h-4.4zm1 5H9l.4 4.2L16 25v-3.2l-3.7-.9z" fill="#EBEBEB"/><path d="M20.8 14H16v3h4.5l-.5 5.5L16 23.5v3.2l6.5-1.8L23.5 9H16v3h4.9z" fill="#fff"/></svg>,
  CSS: () => <svg viewBox="0 0 32 32" width="24" height="24"><path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#1572B6"/><path d="M16 27.6V4H24.1L22 26.1z" fill="#33A9DC"/><path d="M11 14H16v-3H8.4l.8 8.6H16v-3h-4.4zm1 5H9l.4 4.2L16 25v-3.2l-3.7-.9z" fill="#EBEBEB"/><path d="M20.8 14H16v3h4.5l-.5 5.5L16 23.5v3.2l6.5-1.8L23.5 9H16v3h4.9z" fill="#fff"/></svg>,
  JS: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="3" fill="#F7DF1E"/><path d="M19.5 25.3c.6 1 1.4 1.7 2.8 1.7 1.2 0 2-.6 2-1.4 0-1-.8-1.3-2.1-1.9l-.7-.3c-2.1-.9-3.4-2-3.4-4.4 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.7 4.2 2.4l-2.3 1.5c-.5-.9-1-1.3-1.9-1.3s-1.4.5-1.4 1.3c0 .9.6 1.3 1.9 1.8l.7.3c2.4 1 3.8 2.1 3.8 4.5 0 2.6-2 4-4.7 4-2.6 0-4.3-1.2-5.1-2.9zm-9.5.3c.4.7.8 1.3 1.7 1.3s1.4-.3 1.4-1.7v-9.5h3.1v9.5c0 2.8-1.6 4-4 4-2.2 0-3.4-1.1-4-2.5z" fill="#323330"/></svg>,
  React: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.4"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 16 16)"/></svg>,
  Tailwind: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M16 7c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.4 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C19.5 8.2 18.4 7 16 7zm-5 7c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.4 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2-2.2-4.4-2.2z" fill="#38BDF8"/></svg>,
  Bootstrap: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="6" fill="#7952B3"/><path d="M10 8h7.5c3 0 5 1.5 5 4 0 1.6-.8 2.8-2.2 3.4 1.8.5 3 2 3 3.8 0 2.8-2.2 4.8-5.5 4.8H10V8zm3 4.5v3h3.5c1.2 0 2-.6 2-1.5s-.8-1.5-2-1.5H13zm0 6v3.5H17c1.3 0 2.2-.7 2.2-1.8s-.9-1.7-2.2-1.7H13z" fill="#fff"/></svg>,
  Node: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M16 3L4 10v12l12 7 12-7V10z" fill="#339933"/><path d="M16 7.5l8.5 5v9L16 26.5 7.5 21.5v-9z" fill="#1d2b1d"/><text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="monospace" fontWeight="bold">node</text></svg>,
  Express: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="4" fill="#111"/><text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="6" fontFamily="monospace" fontWeight="bold">express</text></svg>,
  MongoDB: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M16 3c0 0-7 9-7 15a7 7 0 0014 0c0-6-7-15-7-15z" fill="#13AA52"/><line x1="16" y1="22" x2="16" y2="28" stroke="#13AA52" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  Git: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="5" fill="#F05032"/><path d="M29 14.6L17.4 3c-.9-.9-2.4-.9-3.3 0l-2.3 2.3 2.9 2.9c.7-.3 1.5-.1 2 .5.6.6.7 1.4.4 2l2.8 2.8c.7-.3 1.5-.1 2 .5.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.6-.6-.8-1.5-.5-2.2L15.8 12v8.2c.4.2.8.5 1.1.8.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.9-.9-.9-2.4 0-3.3.4-.4.9-.7 1.4-.8V11.7c-.5-.2-1-.5-1.4-.8-.6-.6-.8-1.5-.5-2.2L10.3 5.8 3 13.1c-.9.9-.9 2.4 0 3.3L14.6 28c.9.9 2.4.9 3.3 0L29 17.9c.9-.9.9-2.3 0-3.3z" fill="#fff"/></svg>,
  GitHub: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><path d="M16 3C8.8 3 3 8.8 3 16c0 5.8 3.8 10.7 9 12.4.7.1.9-.3.9-.6v-2.1c-3.7.8-4.5-1.8-4.5-1.8-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.9-1.7-2.9-.3-6-1.5-6-6.6 0-1.5.5-2.7 1.4-3.6-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.7 1.4 1.1-.3 2.2-.5 3.4-.5s2.3.2 3.4.5c2.6-1.8 3.7-1.4 3.7-1.4.7 1.8.3 3.2.1 3.5.9.9 1.4 2.1 1.4 3.6 0 5.1-3.1 6.3-6.1 6.6.5.4.9 1.2.9 2.5v3.7c0 .4.2.7.9.6C25.2 26.7 29 21.8 29 16c0-7.2-5.8-13-13-13z"/></svg>,
  Vercel: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><polygon points="16,4 30,28 2,28"/></svg>,
  Postman: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><circle cx="16" cy="16" r="13" fill="#FF6C37"/><circle cx="16" cy="16" r="7" fill="#fff"/><circle cx="19" cy="13" r="2.5" fill="#FF6C37"/><line x1="10" y1="22" x2="17.5" y2="14.5" stroke="#FF6C37" strokeWidth="2" strokeLinecap="round"/></svg>,
  REST: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><circle cx="7" cy="16" r="3.5" fill="#00bfff"/><circle cx="25" cy="8" r="3.5" fill="#00bfff"/><circle cx="25" cy="24" r="3.5" fill="#00bfff"/><line x1="10" y1="16" x2="22" y2="9" stroke="#00bfff" strokeWidth="1.5" opacity=".6"/><line x1="10" y1="16" x2="22" y2="23" stroke="#00bfff" strokeWidth="1.5" opacity=".6"/></svg>,
  SQL: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><ellipse cx="16" cy="9" rx="10" ry="4" fill="#00758F"/><path d="M6 9v5c0 2.2 4.5 4 10 4s10-1.8 10-4V9" fill="#00758F"/><path d="M6 14v5c0 2.2 4.5 4 10 4s10-1.8 10-4v-5" fill="#F29111"/></svg>,
  VSCode: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M23.5 3.5L13 13.7 8.5 9.5 3 12v8l5.5 2.5L13 18.3l10.5 10.2L29 25V7z" fill="#007ACC"/></svg>,
  JWT: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><rect width="32" height="32" rx="4" fill="#111"/><rect x="14.5" y="6" width="3" height="20" fill="#00b9f1"/><rect x="6" y="14.5" width="20" height="3" fill="#d63aff"/><circle cx="10.5" cy="10.5" r="2" fill="#fb015b"/><circle cx="21.5" cy="21.5" r="2" fill="#fb015b"/></svg>,
  Python: () => (
  <svg viewBox="0 0 32 32" width="24" height="24" fill="none">
    <rect width="32" height="32" rx="4" fill="#111" /><path
      d="M16 4c-5 0-4.7 2.2-4.7 2.2v2.3h4.8v.7H9.2S4 9 4 16c0 7 4.6 6.8 4.6 6.8h2.7v-3.8s-.1-4.6 4.5-4.6h7.7s4.3.1 4.3-4.3V8.3S28 4 22.9 4H16zm-2.7 2.3a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z"
      fill="#3776AB" /><path
      d="M16 28c5 0 4.7-2.2 4.7-2.2v-2.3h-4.8v-.7h6.9S28 23 28 16c0-7-4.6-6.8-4.6-6.8h-2.7v3.8s.1 4.6-4.5 4.6H8.5S4.2 17.5 4.2 22v1.7S4 28 9.1 28H16zm2.7-2.3a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6z"
      fill="#FFD43B"/>
  </svg>
),
};

const TABS = [
    { id:"languages", label:"Languages", emoji:"🧠", accent:"#f59e0b", rgb:"245,158,11",
    skills:[{n:"HTML5",S:Svg.HTML},{n:"CSS3",S:Svg.CSS},{n:"JavaScript",S:Svg.JS},{n:"SQL",S:Svg.SQL},{ n: "Python", S: Svg.Python }] },
  { id:"frontend",  label:"Frontend",  emoji:"🎨", accent:"#3b82f6", rgb:"59,130,246",
    skills:[{n:"React.js",S:Svg.React},{n:"Tailwind",S:Svg.Tailwind},{n:"Bootstrap",S:Svg.Bootstrap},{n:"REST APIs",S:Svg.REST},{n:"JWT Auth",S:Svg.JWT}] },
  { id:"backend",   label:"Backend",   emoji:"⚙️", accent:"#10b981", rgb:"16,185,129",
    skills:[{n:"Node.js",S:Svg.Node},{n:"Express.js",S:Svg.Express}] },
  { id:"databases", label:"Databases", emoji:"🗄️", accent:"#8b5cf6", rgb:"139,92,246",
    skills:[{n:"MongoDB",S:Svg.MongoDB},{n:"SQL",S:Svg.SQL}] },
  { id:"tools",     label:"Tools",     emoji:"🛠️", accent:"#06b6d4", rgb:"6,182,212",
    skills:[{n:"Git",S:Svg.Git},{n:"GitHub",S:Svg.GitHub},{n:"Postman",S:Svg.Postman},{n:"VS Code",S:Svg.VSCode},{n:"Vercel",S:Svg.Vercel}] },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
  .sk-f-display { font-family:'Syne',sans-serif; }
  .sk-f-body    { font-family:'DM Sans',sans-serif; }
`;

function SkillCard({ n, S, accent, rgb }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl cursor-default relative overflow-hidden transition-all duration-200"
      style={{
        border: `1px solid ${hov ? accent+"55" : ""}`,
        transform: hov ? "translateY(-4px) scale(1.05)" : "none",
      }}
      /* Use className for bg so Tailwind dark: works */
    >
      <div
        className={`relative z-10 w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200
          border-slate-200 dark:border-white/10
          bg-slate-100 dark:bg-white/5
          text-slate-600 dark:text-white/60`}
        style={{
          borderColor: hov ? `rgba(${rgb},0.5)` : undefined,
          background: hov ? `rgba(${rgb},0.12)` : undefined,
          boxShadow: hov ? `0 0 14px rgba(${rgb},0.4)` : undefined,
        }}
      >
        <S />
      </div>
      <span className="relative z-10 text-[0.78rem] font-medium text-center text-slate-600 dark:text-white/55 transition-colors duration-200"
        style={{ color: hov ? "#fff" : undefined }}>
        {n}
      </span>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("frontend");
  const panelRef = useRef(null);
  const r1 = useRef(null), r2 = useRef(null);
  const tab   = TABS.find(t => t.id === active);
  const total = TABS.reduce((s, t) => s + t.skills.length, 0);

  function fadePanel() {
    const el = panelRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.opacity    = "0";
    el.style.transform  = "translateY(12px)";
    r1.current = requestAnimationFrame(() => {
      r2.current = requestAnimationFrame(() => {
        el.style.transition = "opacity 0.28s ease,transform 0.28s ease";
        el.style.opacity    = "1";
        el.style.transform  = "translateY(0)";
      });
    });
  }

  useEffect(() => {
    fadePanel();
    return () => { cancelAnimationFrame(r1.current); cancelAnimationFrame(r2.current); };
  }, [active]);

  const cols = typeof window !== "undefined"
    ? window.innerWidth < 400 ? 3 : window.innerWidth < 640 ? 4 : window.innerWidth < 900 ? 5 : 6
    : 5;

  return (
    
    <section
      id="skills"
      className="bg-white dark:bg-[#06091a] text-slate-900 dark:text-white transition-colors duration-500"
    >
      <style>{CSS}</style>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
            <span className="sk-f-body text-[0.6rem] font-semibold tracking-[0.44em] uppercase text-slate-500 dark:text-slate-400">What I work with</span>
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
          </div>
          <h2 className="sk-f-display font-extrabold uppercase tracking-tight text-slate-900 dark:text-white" style={{ fontSize:"clamp(2.6rem,7vw,5.5rem)" }}>
            Skills
          </h2>
          <div className="sk-f-display font-extrabold uppercase select-none text-slate-900/[0.03] dark:text-white/[0.025]"
            style={{ fontSize:"clamp(3rem,11vw,8rem)", lineHeight:0.86, marginTop:-4 }} aria-hidden>STACK</div>
          <p className="sk-f-body text-[0.88rem] font-light text-slate-500 dark:text-slate-400 mt-2">
            Technologies I use to ship fast, scalable and maintainable products.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {TABS.map(t => {
            const on = active === t.id;
            return (
              <button key={t.id} onClick={() => setActive(t.id)}
                className="sk-f-body flex items-center gap-2 px-4 py-2 rounded-full text-[0.68rem] font-semibold tracking-[0.08em] uppercase cursor-pointer outline-none transition-all duration-200 border"
                style={{
                  border: `1px solid ${on ? t.accent : ""}`,
                  background: on ? `rgba(${t.rgb},0.14)` : "",
                  color: on ? "#fff" : "",
                  boxShadow: on ? `0 0 14px rgba(${t.rgb},0.3)` : "none",
                }}
              >
                <span className={`text-sm ${!on ? "opacity-70" : ""}`}>{t.emoji}</span>
                <span className={on ? "text-white" : "text-slate-600 dark:text-slate-400"}>{t.label}</span>
                <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full"
                  style={{ background: on ? `rgba(${t.rgb},0.25)` : "", color: on ? t.accent : "" }}
                >{t.skills.length}</span>
              </button>
            );
          })}
        </div>

        {/* Active tab label */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-2 h-2 rounded-full" style={{ background: tab.accent, boxShadow: `0 0 6px ${tab.accent}` }} />
          <span className="sk-f-body text-[0.65rem] font-bold tracking-[0.2em] uppercase" style={{ color: tab.accent }}>
            {tab.emoji} {tab.label}
          </span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.07]" />
          <span className="sk-f-body text-[0.65rem] text-slate-400 dark:text-white/22">{tab.skills.length} skills</span>
        </div>

        {/* Panel */}
        <div ref={panelRef} className="rounded-2xl p-5 border transition-colors duration-500"
          style={{
            borderColor: `rgba(${tab.rgb},0.2)`,
            background: `linear-gradient(140deg,rgba(${tab.rgb},0.04) 0%,transparent 100%)`,
          }}>
          <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cols},minmax(0,1fr))` }}>
            {tab.skills.map(({ n, S }) => (
              <SkillCard key={n} n={n} S={S} accent={tab.accent} rgb={tab.rgb} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-14 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
          <span className="sk-f-body text-[0.62rem] tracking-[0.28em] uppercase text-slate-400 dark:text-white/15">{total} technologies & counting</span>
          <div className="h-px w-14 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
        </div>

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.07] to-transparent" />
      </div>
    </section>
  );
}