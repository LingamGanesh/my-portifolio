import { useState, useEffect, useRef } from "react";

const Svg = {
  HTML: () => <svg viewBox="0 0 32 32" width="24" height="24"><path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#E44D26"/><path d="M16 27.6V4H24.1L22 26.1z" fill="#F16529"/><path d="M11 14H16v-3H8.4l.8 8.6H16v-3h-4.4zm1 5H9l.4 4.2L16 25v-3.2l-3.7-.9z" fill="#EBEBEB"/><path d="M20.8 14H16v3h4.5l-.5 5.5L16 23.5v3.2l6.5-1.8L23.5 9H16v3h4.9z" fill="#fff"/></svg>,
  CSS: () => <svg viewBox="0 0 32 32" width="24" height="24"><path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#1572B6"/><path d="M16 27.6V4H24.1L22 26.1z" fill="#33A9DC"/><path d="M11 14H16v-3H8.4l.8 8.6H16v-3h-4.4zm1 5H9l.4 4.2L16 25v-3.2l-3.7-.9z" fill="#EBEBEB"/><path d="M20.8 14H16v3h4.5l-.5 5.5L16 23.5v3.2l6.5-1.8L23.5 9H16v3h4.9z" fill="#fff"/></svg>,
  JS: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="3" fill="#F7DF1E"/><path d="M19.5 25.3c.6 1 1.4 1.7 2.8 1.7 1.2 0 2-.6 2-1.4 0-1-.8-1.3-2.1-1.9l-.7-.3c-2.1-.9-3.4-2-3.4-4.4 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.7 4.2 2.4l-2.3 1.5c-.5-.9-1-1.3-1.9-1.3s-1.4.5-1.4 1.3c0 .9.6 1.3 1.9 1.8l.7.3c2.4 1 3.8 2.1 3.8 4.5 0 2.6-2 4-4.7 4-2.6 0-4.3-1.2-5.1-2.9zm-9.5.3c.4.7.8 1.3 1.7 1.3s1.4-.3 1.4-1.7v-9.5h3.1v9.5c0 2.8-1.6 4-4 4-2.2 0-3.4-1.1-4-2.5z" fill="#323330"/></svg>,
  TS: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="3" fill="#3178C6"/><path d="M11.3 15.5H15v-2.2H5v2.2h3.7v9.9h2.6zm6.8 6.2v2.6c.9.5 2 .8 3.4.8 2.4 0 3.9-1.2 3.9-3.1 0-1.5-.9-2.4-2.7-3l-.9-.3c-1-.4-1.4-.7-1.4-1.3 0-.5.5-.9 1.3-.9.9 0 1.7.3 2.6 1v-2.4c-.8-.4-1.8-.6-2.9-.6-2.3 0-3.8 1.3-3.8 3.2 0 1.5.9 2.5 2.6 3l1 .4c1 .4 1.4.7 1.4 1.3 0 .6-.5 1-1.4 1-.9 0-1.9-.4-2.1-1.7z" fill="#fff"/></svg>,
  SQL: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><ellipse cx="16" cy="9" rx="10" ry="4" fill="#00758F"/><path d="M6 9v5c0 2.2 4.5 4 10 4s10-1.8 10-4V9" fill="#00758F"/><path d="M6 14v5c0 2.2 4.5 4 10 4s10-1.8 10-4v-5" fill="#F29111"/><text x="16" y="11" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="monospace" fontWeight="bold">SQL</text></svg>,
  Bash: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><rect width="32" height="32" rx="4" fill="#1a1a1a"/><path d="M7 11l6 5-6 5" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="14" y1="21" x2="23" y2="21" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/></svg>,
  React: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.4"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 16 16)"/></svg>,
  Next: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><circle cx="16" cy="16" r="14" fill="#111"/><path d="M10 22V10l14 16h-4L10 14v8z" fill="#fff"/><path d="M20 10h2.5v12" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>,
  Redux: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M21.1 9.2c.1-.4.1-.8.1-1.2 0-2.2-1.8-4-4-4S13.2 5.8 13.2 8c0 .4 0 .8.1 1.2C10.1 10 8 12.6 8 15.8c0 3.5 2.8 6.4 6.3 6.5v.3c0 1.5 1.2 2.6 2.7 2.6s2.7-1.2 2.7-2.6v-.3c3.5-.1 6.3-3 6.3-6.5 0-3.2-2.1-5.8-4.9-6.6zm-3.9 11.5v.9c0 .6-.5 1.1-1.2 1.1s-1.2-.5-1.2-1.1v-.9c-2.7-.4-4.8-2.7-4.8-5.5 0-3.1 2.5-5.6 5.7-5.6 3.1 0 5.7 2.5 5.7 5.6 0 2.8-2.1 5.1-4.2 5.5z" fill="#764ABC"/></svg>,
  Tailwind: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M16 7c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.4 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C19.5 8.2 18.4 7 16 7zm-5 7c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.4 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2-2.2-4.4-2.2z" fill="#38BDF8"/></svg>,
  Bootstrap: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="6" fill="#7952B3"/><path d="M10 8h7.5c3 0 5 1.5 5 4 0 1.6-.8 2.8-2.2 3.4 1.8.5 3 2 3 3.8 0 2.8-2.2 4.8-5.5 4.8H10V8zm3 4.5v3h3.5c1.2 0 2-.6 2-1.5s-.8-1.5-2-1.5H13zm0 6v3.5H17c1.3 0 2.2-.7 2.2-1.8s-.9-1.7-2.2-1.7H13z" fill="#fff"/></svg>,
  Responsive: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><rect x="2" y="6" width="22" height="15" rx="2" stroke="#b94eff" strokeWidth="1.8"/><rect x="26" y="10" width="4" height="11" rx="1" stroke="#b94eff" strokeWidth="1.5"/><line x1="8" y1="24" x2="18" y2="24" stroke="#b94eff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Axios: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><rect width="32" height="32" rx="4" fill="#7C4DFF" opacity=".18"/><text x="16" y="21" textAnchor="middle" fill="#9C6FFF" fontSize="9" fontFamily="monospace" fontWeight="bold">axios</text></svg>,
  REST: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><circle cx="7" cy="16" r="3.5" fill="#00bfff"/><circle cx="25" cy="8" r="3.5" fill="#00bfff"/><circle cx="25" cy="24" r="3.5" fill="#00bfff"/><line x1="10" y1="16" x2="22" y2="9" stroke="#00bfff" strokeWidth="1.5" opacity=".6"/><line x1="10" y1="16" x2="22" y2="23" stroke="#00bfff" strokeWidth="1.5" opacity=".6"/></svg>,
  JWT: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><rect width="32" height="32" rx="4" fill="#111"/><rect x="14.5" y="6" width="3" height="20" fill="#00b9f1"/><rect x="6" y="14.5" width="20" height="3" fill="#d63aff"/><circle cx="10.5" cy="10.5" r="2" fill="#fb015b"/><circle cx="21.5" cy="21.5" r="2" fill="#fb015b"/></svg>,
  Node: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M16 3L4 10v12l12 7 12-7V10z" fill="#339933"/><path d="M16 7.5l8.5 5v9L16 26.5 7.5 21.5v-9z" fill="#1d2b1d"/><text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="5" fontFamily="monospace" fontWeight="bold">node</text></svg>,
  Express: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="4" fill="#111"/><text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="6" fontFamily="monospace" fontWeight="bold">express</text></svg>,
  MongoDB: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M16 3c0 0-7 9-7 15a7 7 0 0014 0c0-6-7-15-7-15z" fill="#13AA52"/><path d="M16 6c0 0 4.5 7 4.5 12a4.5 4.5 0 01-9 0C11.5 13 16 6 16 6z" fill="#00684A"/><line x1="16" y1="22" x2="16" y2="28" stroke="#13AA52" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  Redis: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><ellipse cx="16" cy="23" rx="11" ry="3.5" fill="#A41E11"/><ellipse cx="16" cy="19" rx="11" ry="3.5" fill="#D82C20"/><ellipse cx="16" cy="15" rx="11" ry="3.5" fill="#FF6B6B"/><ellipse cx="16" cy="11" rx="11" ry="3.5" fill="#FF9090"/></svg>,
  Git: () => <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="5" fill="#F05032"/><path d="M29 14.6L17.4 3c-.9-.9-2.4-.9-3.3 0l-2.3 2.3 2.9 2.9c.7-.3 1.5-.1 2 .5.6.6.7 1.4.4 2l2.8 2.8c.7-.3 1.5-.1 2 .5.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.6-.6-.8-1.5-.5-2.2L15.8 12v8.2c.4.2.8.5 1.1.8.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.9-.9-.9-2.4 0-3.3.4-.4.9-.7 1.4-.8V11.7c-.5-.2-1-.5-1.4-.8-.6-.6-.8-1.5-.5-2.2L10.3 5.8 3 13.1c-.9.9-.9 2.4 0 3.3L14.6 28c.9.9 2.4.9 3.3 0L29 17.9c.9-.9.9-2.3 0-3.3z" fill="#fff"/></svg>,
  GitHub: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="#fff"><path d="M16 3C8.8 3 3 8.8 3 16c0 5.8 3.8 10.7 9 12.4.7.1.9-.3.9-.6v-2.1c-3.7.8-4.5-1.8-4.5-1.8-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.9-1.7-2.9-.3-6-1.5-6-6.6 0-1.5.5-2.7 1.4-3.6-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.7 1.4 1.1-.3 2.2-.5 3.4-.5s2.3.2 3.4.5c2.6-1.8 3.7-1.4 3.7-1.4.7 1.8.3 3.2.1 3.5.9.9 1.4 2.1 1.4 3.6 0 5.1-3.1 6.3-6.1 6.6.5.4.9 1.2.9 2.5v3.7c0 .4.2.7.9.6C25.2 26.7 29 21.8 29 16c0-7.2-5.8-13-13-13z"/></svg>,
  Postman: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><circle cx="16" cy="16" r="13" fill="#FF6C37"/><circle cx="16" cy="16" r="7" fill="#fff"/><circle cx="19" cy="13" r="2.5" fill="#FF6C37"/><line x1="10" y1="22" x2="17.5" y2="14.5" stroke="#FF6C37" strokeWidth="2" strokeLinecap="round"/></svg>,
  VSCode: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><path d="M23.5 3.5L13 13.7 8.5 9.5 3 12v8l5.5 2.5L13 18.3l10.5 10.2L29 25V7z" fill="#007ACC"/><path d="M3 12l5.5 8L3 20V12z" fill="#fff" opacity=".4"/></svg>,
  Vercel: () => <svg viewBox="0 0 32 32" width="24" height="24" fill="none"><polygon points="16,4 30,28 2,28" fill="#fff"/></svg>,
};

const TABS = [
  { id:"languages", label:"Languages", emoji:"🧠", accent:"#ff9f43", rgb:"255,159,67",
    skills:[{n:"HTML5",S:Svg.HTML},{n:"CSS3",S:Svg.CSS},{n:"JavaScript",S:Svg.JS},{n:"TypeScript",S:Svg.TS},{n:"SQL",S:Svg.SQL},{n:"Bash",S:Svg.Bash}] },
  { id:"frontend",  label:"Frontend",  emoji:"🎨", accent:"#ff2d78", rgb:"255,45,120",
    skills:[{n:"React.js",S:Svg.React},{n:"Next.js",S:Svg.Next},{n:"Redux",S:Svg.Redux},{n:"Tailwind",S:Svg.Tailwind},{n:"Bootstrap",S:Svg.Bootstrap},{n:"Responsive",S:Svg.Responsive},{n:"Axios",S:Svg.Axios},{n:"REST APIs",S:Svg.REST},{n:"JWT Auth",S:Svg.JWT}] },
  { id:"backend",   label:"Backend",   emoji:"⚙️", accent:"#00ff88", rgb:"0,255,136",
    skills:[{n:"Node.js",S:Svg.Node},{n:"Express.js",S:Svg.Express}] },
  { id:"databases", label:"Databases", emoji:"🗄️", accent:"#b94eff", rgb:"185,78,255",
    skills:[{n:"MongoDB",S:Svg.MongoDB},{n:"Redis",S:Svg.Redis},{n:"SQL",S:Svg.SQL}] },
  { id:"tools",     label:"Tools",     emoji:"🛠️", accent:"#00bfff", rgb:"0,191,255",
    skills:[{n:"Git",S:Svg.Git},{n:"GitHub",S:Svg.GitHub},{n:"Postman",S:Svg.Postman},{n:"VS Code",S:Svg.VSCode},{n:"Vercel",S:Svg.Vercel}] },
];

/* ── Skill Card ── */
function Card({ n, S, accent, rgb }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:"flex", flexDirection:"column", alignItems:"center",
        justifyContent:"center", gap:10, padding:"60px 36px 40px",
        borderRadius:11, cursor:"default", position:"relative", overflow:"hidden",
        border:`1px solid ${hov ? accent + "55" : "rgba(255,255,255,0.07)"}`,
        background: hov ? `rgba(${rgb},0.1)` : "rgba(255,255,255,0.03)",
        boxShadow: hov ? `0 0 18px rgba(${rgb},0.25),0 4px 16px rgba(0,0,0,0.5)` : "0 1px 4px rgba(0,0,0,0.4)",
        transform: hov ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
        transition:"transform 0.18s ease, border-color 0.18s   ease, background 0.18s ease, box-shadow 0.18s ease",
      }}
    >
      {hov && <div style={{ position:"absolute",inset:0,borderRadius:100,pointerEvents:"none", background:`radial-gradient(ellipse at 50% 0%,rgba(${rgb},0.22) 0%,transparent 65%)` }}/>}
      <div style={{
        width:44, height:44, borderRadius:9, flexShrink:0,
        display:"flex", alignItems:"center", justifyContent:"center",
        background: hov ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
        border:`1px solid ${hov ? `rgba(${rgb},0.5)` : "rgba(255,255,255,0.07)"}`,
        boxShadow: hov ? `0 0 12px rgba(${rgb},0.55)` : "none",
        transition:"all 0.18s ease", position:"relative", zIndex:1,
      }}>
        <S />
      </div>
      <span style={{
        fontSize:16, fontWeight:500, textAlign:"center",
        letterSpacing:"0.02em", lineHeight:1.3,
        color: hov ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.4)",
        transition:"color 0.18s ease", position:"relative", zIndex:1,
      }}>{n}</span>
    </div>
  );
}

/* ── Main ── */
export default function Skills() {
  const [active, setActive] = useState("frontend");
  const panelRef = useRef(null);
  const raf1 = useRef(null), raf2 = useRef(null);

  const tab   = TABS.find(t => t.id === active);
  const total = TABS.reduce((s, t) => s + t.skills.length, 0);

  /* fade panel without CSS classes */
  function fadeIn() {
    const el = panelRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.opacity    = "0";
    el.style.transform  = "translateY(14px)";
    raf1.current = requestAnimationFrame(() => {
      raf2.current = requestAnimationFrame(() => {
        el.style.transition = "opacity 0.28s ease, transform 0.28s ease";
        el.style.opacity    = "1";
        el.style.transform  = "translateY(0)";
      });
    });
  }

  function switchTab(id) {
    setActive(id);
  }

  useEffect(() => {
    fadeIn();
    return () => { cancelAnimationFrame(raf1.current); cancelAnimationFrame(raf2.current); };
  }, [active]);

  /* responsive cols */
  const getW  = () => (typeof window !== "undefined" ? window.innerWidth : 900);
  const getCols = (w) => w < 400 ? 3 : w < 640 ? 4 : w < 900 ? 5 : 6;
  const [cols, setCols] = useState(() => getCols(getW()));
  useEffect(() => {
    const fn = () => setCols(getCols(window.innerWidth));
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <div style={{ background:"#070707", minHeight:"100vh", color:"#fff", fontFamily:"system-ui,-apple-system,sans-serif" }}>
      <div style={{ maxWidth:1060, margin:"0 auto", padding:"72px clamp(16px,5vw,52px) 80px" }}>

        {/* HEADING */}
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:14 }}>
            <div style={{ height:1, width:40, background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)" }}/>
            <span style={{ fontSize:10, fontWeight:600, letterSpacing:"0.44em", textTransform:"uppercase", color:"rgba(255,255,255,0.24)" }}>What I work with</span>
            <div style={{ height:1, width:40, background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)" }}/>
          </div>
          <div style={{ fontSize:"clamp(2.6rem,8vw,5.5rem)", fontWeight:800, letterSpacing:"0.09em", textTransform:"uppercase", lineHeight:1, color:"#fff" }}>
            Skills
          </div>
          <div style={{ fontSize:"clamp(2.8rem,11vw,8rem)", fontWeight:800, color:"rgba(255,255,255,0.022)", lineHeight:0.86, marginTop:-4, userSelect:"none", pointerEvents:"none" }}>
            STACK
          </div>
          <p style={{ fontSize:"clamp(12px,1.5vw,14px)", fontWeight:300, color:"rgba(255,255,255,0.28)", lineHeight:1.7, marginTop:10 }}>
            Technologies I use to ship fast, scalable and maintainable products.
          </p>
        </div>

        {/* TAB BUTTONS */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center", marginBottom:32 }}>
          {TABS.map(t => {
            const on = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => switchTab(t.id)}
                style={{
                  display:"flex", alignItems:"center", gap:7,
                  padding:"9px 17px", borderRadius:99,
                  border:`1px solid ${on ? t.accent : "rgba(255,255,255,0.1)"}`,
                  background: on ? `rgba(${t.rgb},0.16)` : "rgba(255,255,255,0.04)",
                  color: on ? "#fff" : "rgba(255,255,255,0.42)",
                  boxShadow: on ? `0 0 16px rgba(${t.rgb},0.38),0 0 40px rgba(${t.rgb},0.1)` : "none",
                  fontSize:11, fontWeight:600, letterSpacing:"0.09em", textTransform:"uppercase",
                  cursor:"pointer", transition:"all 0.18s ease", whiteSpace:"nowrap",
                  fontFamily:"inherit", outline:"none",
                }}
              >
                <span style={{ fontSize:15 }}>{t.emoji}</span>
                {t.label}
                <span style={{
                  fontSize:10, fontWeight:700, padding:"1px 7px", borderRadius:99,
                  background: on ? `rgba(${t.rgb},0.25)` : "rgba(255,255,255,0.07)",
                  color: on ? t.accent : "rgba(255,255,255,0.3)",
                  transition:"all 0.18s ease",
                }}>
                  {t.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE LABEL */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
          <div style={{ width:8, height:8, borderRadius:"50%", flexShrink:0, background:tab.accent, boxShadow:`0 0 6px ${tab.accent},0 0 18px rgba(${tab.rgb},0.45)` }}/>
          <span style={{ fontSize:10.5, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:tab.accent }}>
            {tab.emoji} {tab.label}
          </span>
          <div style={{ flex:1, height:1, background:"rgba(255,255,255,0.07)" }}/>
          <span style={{ fontSize:10.5, color:"rgba(255,255,255,0.22)" }}>{tab.skills.length} skills</span>
        </div>

        {/* PANEL — animated via ref, no CSS class needed */}
        <div
          ref={panelRef}
          style={{
            borderRadius:16, padding:"clamp(14px,3vw,26px)",
            background:`linear-gradient(140deg,rgba(${tab.rgb},0.055) 0%,rgba(255,255,255,0.01) 100%)`,
            border:`1px solid rgba(${tab.rgb},0.2)`,
            boxShadow:`0 0 52px rgba(${tab.rgb},0.06),inset 0 1px 0 rgba(255,255,255,0.04)`,
          }}
        >
          <div style={{
            display:"grid",
            gridTemplateColumns:`repeat(${cols}, minmax(0,1fr))`,
            gap:"clamp(7px,1.4vw,11px)", 
          }}>
            {tab.skills.map(({ n, S }) => (
              <Card key={n} n={n} S={S} accent={tab.accent} rgb={tab.rgb} />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ marginTop:44, display:"flex", alignItems:"center", justifyContent:"center", gap:14 }}>
          <div style={{ height:1, width:56, background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)" }}/>
          <span style={{ fontSize:10, letterSpacing:"0.28em", textTransform:"uppercase", color:"rgba(255,255,255,0.15)", whiteSpace:"nowrap" }}>
            {total} technologies & counting
          </span>
          <div style={{ height:1, width:56, background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)" }}/>
        </div>
{/* ── Bottom rule ── */}
        <div className="rule" style={{ marginTop: "clamp(56px,8vw,96px)" }} />
      </div>
    </div>
  );
}