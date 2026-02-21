import { useState } from "react";
import binkit from "../assets/images/project/binkit.png";
import jobbyApp from "../assets/images/project/JobbyApp.png";
import nextWatch from "../assets/images/project/nextWatch.png";
import nxtTrend from "../assets/images/project/nxtTrend.png";
import portfolioImg from "../assets/images/project/portifolio.png";

const PROJECTS = [
  { id:1, title:"Nxt Trendz – E-Commerce Frontend", desc:"Responsive e-commerce app with authentication, protected routes, product listing and cart management using Context API.", thumb:nxtTrend, color:"0,191,255", accent:"#00bfff", tags:["React","JWT","Tailwind CSS","REST APIs"], live:"https://nexttrendsse.ccbp.tech", source:"https://github.com/LingamGanesh/Nxt-Trendz" },
  { id:2, title:"Nxt Watch – Video Streaming Platform", desc:"YouTube-like platform with login, protected routes and video browsing. JWT authentication and REST APIs for secure access.", thumb:nextWatch, color:"185,78,255", accent:"#b94eff", tags:["React","JWT","Tailwind CSS","REST APIs"], live:"https://youte2.ccbp.tech", source:"https://github.com/LingamGanesh/nxtWatch" },
  { id:3, title:"Portfolio Website", desc:"Personal portfolio showcasing projects, skills and experience. React + Tailwind with dark/light theme system.", thumb:portfolioImg, color:"0,255,136", accent:"#00ff88", tags:["React","Tailwind CSS","JavaScript","Vercel"], live:"https://my-portifolio-jet-zeta.vercel.app", source:"https://github.com/LingamGanesh/my-portifolio" },
  { id:4, title:"Jobby App – Job Search Platform", desc:"Job portal with authentication, filters and detail views. Handles loading, failure states and reusable components.", thumb:jobbyApp, color:"255,159,67", accent:"#ff9f43", tags:["React","JWT","Tailwind CSS","REST APIs"], live:"https://jobygane.ccbp.tech", source:"https://github.com/LingamGanesh/jobApp" },
  { id:5, title:"PrimeCommerce – Full Stack App", desc:"Full-stack e-commerce with RESTful APIs, JWT auth, login/logout and password recovery workflows.", thumb:binkit, color:"255,45,120", accent:"#ff2d78", tags:["React","Node.js","MongoDB","REST APIs"], live:"#", source:"https://github.com/LingamGanesh/PrimeCommerce-fullstack" },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  .pj-f-display { font-family:'Syne',sans-serif; }
  .pj-f-body    { font-family:'DM Sans',sans-serif; }
`;

function Tag({ label }) {
  return (
    <span className="pj-f-body text-[0.62rem] font-medium px-2 py-1 rounded border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/45 bg-white dark:bg-white/[0.03] transition-colors duration-500">
      {label}
    </span>
  );
}

function Thumb({ thumb, color, accent }) {
  if (thumb) {
    return (
      <div className="w-full overflow-hidden relative" style={{ aspectRatio:"16/9" }}>
        <img src={thumb} alt="Project" className="w-full h-full object-cover transition-transform duration-400 hover:scale-105" />
        <div className="absolute inset-0 pointer-events-none" style={{ background:`linear-gradient(to bottom,transparent 60%,rgba(0,0,0,0.5) 100%)` }} />
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 bg-slate-100 dark:bg-white/[0.04]" style={{ aspectRatio:"16/9" }}>
      <span className="pj-f-body text-[0.6rem] font-semibold tracking-[0.2em] uppercase" style={{ color:`rgba(${color},0.6)` }}>Preview · Add Image</span>
    </div>
  );
}

function Card({ p }) {
  const [hov, setHov] = useState(false);
  const hasLive = p.live && p.live !== "#";
  const hasSrc  = p.source && p.source !== "#";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-2xl border flex flex-col overflow-hidden transition-all duration-250 bg-white dark:bg-white/[0.025]"
      style={{
        borderColor: hov ? `rgba(${p.color},0.4)` : "",
        boxShadow: hov ? `0 0 32px rgba(${p.color},0.12),0 12px 32px rgba(0,0,0,0.1)` : "none",
        transform: hov ? "translateY(-6px)" : "none",
      }}
    >
      <Thumb thumb={p.thumb} color={p.color} accent={p.accent} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="pj-f-display text-[0.95rem] font-bold text-slate-900 dark:text-white leading-snug">{p.title}</h3>
        <p className="pj-f-body text-[0.82rem] font-light leading-relaxed text-slate-500 dark:text-white/45 flex-1">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">{p.tags.map(t => <Tag key={t} label={t} />)}</div>
        <div className="h-px bg-slate-100 dark:bg-white/[0.06] mt-1" />
        <div className="flex gap-2 mt-1">
          <a href={hasLive ? p.live : undefined} target={hasLive?"_blank":undefined} rel="noopener noreferrer"
            className="pj-f-body flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[0.68rem] font-semibold tracking-[0.1em] uppercase no-underline transition-all duration-200 border"
            style={{
              borderColor: `rgba(${p.color},${hasLive?"0.5":"0.2"})`,
              background: `rgba(${p.color},0.07)`,
              color: hasLive ? p.accent : `rgba(${p.color},0.35)`,
              cursor: hasLive ? "pointer" : "default",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {hasLive ? "View Live" : "Coming Soon"}
          </a>
          <a href={hasSrc ? p.source : undefined} target={hasSrc?"_blank":undefined} rel="noopener noreferrer"
            className="pj-f-body flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[0.68rem] font-semibold tracking-[0.1em] uppercase no-underline transition-all duration-200 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/40 hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white"
            style={{ cursor: hasSrc ? "pointer" : "default" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
            </svg>
            {hasSrc ? "Source Code" : "Private Repo"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = ["all","React","Node.js","MongoDB"];
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    
    <section
      id="projects"
      className="bg-slate-50 dark:bg-[#080d20] text-slate-900 dark:text-white transition-colors duration-500"
    >
      <style>{CSS}</style>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-11 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
            <span className="pj-f-body text-[0.6rem] font-semibold tracking-[0.44em] uppercase text-slate-500 dark:text-slate-400">What I've built</span>
            <div className="h-px w-11 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
          </div><h2 className="pj-f-display font-extrabold uppercase tracking-tight text-slate-900 dark:text-white 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Projects
</h2>

<div
  className="pj-f-display font-extrabold uppercase select-none 
             text-slate-900/[0.03] dark:text-white/[0.025]
             text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.86] -mt-1"
  aria-hidden
>
  WORK
</div>
          <p className="pj-f-body text-[0.88rem] font-light text-slate-500 dark:text-slate-400 max-w-lg mx-auto mt-2">
            A selection of projects I've designed, built and shipped — from full-stack apps to frontend products.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => {
            const on = filter === f;
            return (
              <button key={f} onClick={() => setFilter(f)}
                className="pj-f-body px-4 py-1.5 rounded-full text-[0.68rem] font-semibold tracking-[0.1em] uppercase cursor-pointer outline-none transition-all duration-200 border"
                style={{
                  borderColor: on ? "#ff2d78" : "",
                  background: on ? "rgba(255,45,120,0.12)" : "",
                  color: on ? "#fff" : "",
                  boxShadow: on ? "0 0 12px rgba(255,45,120,0.3)" : "none",
                }}
              >
                <span className={on ? "text-white" : "text-slate-600 dark:text-slate-400"}>
                  {f === "all" ? "✦ All" : f}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(p => <Card key={p.id} p={p} />)}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-white/20 text-sm">No projects match this filter.</div>
        )}

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.07] to-transparent" />
      </div>
    </section>
  );
}