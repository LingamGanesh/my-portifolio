import { useState } from "react";

const SERVICES = [
  {
    id:"fullstack", title:"Full Stack Development", subtitle:"End-to-End Web Engineering",
    accent:"#3b82f6", rgb:"59,130,246",
    desc:"From pixel-perfect frontends to rock-solid backend APIs — I architect and ship complete web products. React SPAs, RESTful Node.js services, MongoDB database layers — I handle the full vertical.",
    points:["React, Next.js & modern frontend","Node.js, Express REST APIs","MongoDB & SQL databases","Auth, deployment & CI/CD"],
    icon:(c) => (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="28" rx="3"/><line x1="4" y1="16" x2="44" y2="16"/>
        <circle cx="10" cy="12" r="1.5" fill={c}/><circle cx="16" cy="12" r="1.5" fill={c}/><circle cx="22" cy="12" r="1.5" fill={c}/>
        <path d="M16 26l-4 4 4 4M32 26l4 4-4 4"/><line x1="22" y1="34" x2="26" y2="22"/><line x1="4" y1="40" x2="44" y2="40"/>
      </svg>
    ),
  },
  {
    id:"uiux", title:"UI / UX Design", subtitle:"Interfaces People Love",
    accent:"#8b5cf6", rgb:"139,92,246",
    desc:"I craft interfaces that feel intuitive, look stunning and convert. Every spacing decision, colour choice and micro-interaction is deliberate — building experiences that delight users from first click to final action.",
    points:["Responsive & mobile-first layouts","Dark / light design systems","Micro-animations & transitions","Accessibility & performance"],
    icon:(c) => (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="10"/><path d="M24 10V6M24 34v-4M14 20H6M42 20h-8"/>
        <path d="M17 13l-3-3M34 30l-3-3M17 27l-3 3M34 10l-3 3"/>
        <circle cx="24" cy="20" r="4" fill={c} opacity=".2" stroke={c}/>
      </svg>
    ),
  },
  {
    id:"consulting", title:"Problem Solving", subtitle:"Strategy Meets Engineering",
    accent:"#06b6d4", rgb:"6,182,212",
    desc:"I help teams diagnose bottlenecks, architect scalable systems and cut through technical debt. From choosing the right stack to reviewing code, I bring a pragmatic engineering perspective.",
    points:["Architecture & tech stack reviews","Performance audits & optimisation","Code quality & best practices","API design & integration"],
    icon:(c) => (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="14" r="8"/><path d="M24 22v6"/><circle cx="24" cy="32" r="2" fill={c}/>
        <path d="M10 42c0-7.7 6.3-14 14-14s14 6.3 14 14"/>
      </svg>
    ),
  },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  .sv-f-display { font-family:'Syne',sans-serif; }
  .sv-f-body    { font-family:'DM Sans',sans-serif; }
`;

function ServiceCard({ s, idx }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative rounded-2xl p-8 border flex flex-col gap-5 overflow-hidden transition-all duration-250 bg-white dark:bg-white/[0.02]"
      style={{
        borderColor: hov ? `rgba(${s.rgb},0.45)` : "",
        boxShadow: hov ? `0 0 36px rgba(${s.rgb},0.12),0 10px 28px rgba(0,0,0,0.06)` : "none",
        transform: hov ? "translateY(-5px)" : "none",
      }}
    >
      {/* Top accent line — animates on hover */}
      <div className="absolute top-0 left-0 h-[2px] rounded-t-2xl transition-all duration-400"
        style={{ width: hov ? "100%" : "0%", background: `linear-gradient(90deg,${s.accent},transparent)` }} />

      {/* Number watermark */}
      <div className="absolute top-4 right-5 sv-f-display font-extrabold select-none pointer-events-none"
        style={{ fontSize:"4rem", color: `rgba(${s.rgb},${hov?"0.07":"0.04"})`, lineHeight:1 }}>0{idx+1}</div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-250"
        style={{
          background: hov ? `rgba(${s.rgb},0.14)` : `rgba(${s.rgb},0.06)`,
          borderColor: hov ? `rgba(${s.rgb},0.45)` : `rgba(${s.rgb},0.18)`,
          boxShadow: hov ? `0 0 20px rgba(${s.rgb},0.3)` : `0 0 8px rgba(${s.rgb},0.08)`,
        }}>
        {s.icon(s.accent)}
      </div>

      {/* Title */}
      <div>
        <p className="sv-f-body text-[0.6rem] font-bold tracking-[0.36em] uppercase mb-1.5 transition-all duration-250"
          style={{ color: s.accent, textShadow: hov ? `0 0 10px rgba(${s.rgb},0.5)` : "none" }}>
          {s.subtitle}
        </p>
        <h3 className="sv-f-display text-[1.05rem] font-bold text-slate-900 dark:text-white leading-snug">{s.title}</h3>
      </div>

      {/* Divider */}
      <div className="h-px transition-all duration-250"
        style={{ background: `linear-gradient(90deg,rgba(${s.rgb},${hov?"0.4":"0.12"}),transparent)` }} />

      {/* Description */}
      <p className="sv-f-body text-[0.88rem] font-light leading-relaxed text-slate-500 dark:text-white/45">{s.desc}</p>

      {/* Bullets */}
      <ul className="flex flex-col gap-2">
        {s.points.map(pt => (
          <li key={pt} className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
              style={{ background: s.accent, boxShadow: `0 0 5px rgba(${s.rgb},0.6)` }} />
            <span className="sv-f-body text-[0.82rem] font-light text-slate-500 dark:text-white/45 leading-relaxed">{pt}</span>
          </li>
        ))}
      </ul>

      {/* CTA line */}
      <div className="mt-auto pt-2 flex items-center gap-2">
        <div className="h-px transition-all duration-280" style={{ width: hov ? 24 : 12, background: hov ? "#fff" : s.accent }} />
        <span className="sv-f-body text-[0.68rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200"
          style={{ color: hov ? "#fff" : s.accent }}>Available for work</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    /* ✅ bg-slate-50/dark:bg-[#080d20] — NOT inline style */
    <section
      id="services"
      className="bg-slate-50 dark:bg-[#080d20] text-slate-900 dark:text-white transition-colors duration-500"
    >
      <style>{CSS}</style>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-11 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
            <span className="sv-f-body text-[0.6rem] font-semibold tracking-[0.44em] uppercase text-slate-500 dark:text-slate-400">What I offer</span>
            <div className="h-px w-11 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
          </div>
          <h2 className="sv-f-display font-extrabold uppercase tracking-tight text-slate-900 dark:text-white" style={{ fontSize:"clamp(2.6rem,7vw,5.5rem)" }}>Services</h2>
          <div className="sv-f-display font-extrabold uppercase select-none text-slate-900/[0.03] dark:text-white/[0.025]"
            style={{ fontSize:"clamp(3rem,11vw,8rem)", lineHeight:0.86, marginTop:-4 }} aria-hidden>OFFER</div>
          <p className="sv-f-body text-[0.88rem] font-light text-slate-500 dark:text-slate-400 max-w-lg mx-auto mt-2">
            I build, design and consult across the full product lifecycle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => <ServiceCard key={s.id} s={s} idx={i} />)}
        </div>

        {/* CTA strip */}
        <div className="mt-14 px-8 py-7 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02] flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="sv-f-display text-[1rem] font-bold text-slate-900 dark:text-white">Have a project in mind?</p>
            <p className="sv-f-body text-[0.82rem] font-light text-slate-500 dark:text-white/35 mt-1">Let's discuss how I can help bring your idea to life.</p>
          </div>
          <a href="#contact"
            className="sv-f-body inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[0.72rem] font-semibold tracking-[0.14em] uppercase no-underline text-white transition-all duration-200"
            style={{ background:"rgba(59,130,246,0.9)", border:"1px solid #3b82f6", boxShadow:"0 0 18px rgba(59,130,246,0.3)" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow="0 0 28px rgba(59,130,246,0.5)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow="0 0 18px rgba(59,130,246,0.3)"}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Get in touch
          </a>
        </div>

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.07] to-transparent" />
      </div>
    </section>
  );
}