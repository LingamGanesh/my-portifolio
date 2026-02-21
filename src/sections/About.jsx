import { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/images/about/about1.png";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
  .ab-f-display { font-family:'Syne',sans-serif; }
  .ab-f-serif   { font-family:'DM Serif Display',Georgia,serif; }
  .ab-f-body    { font-family:'DM Sans',sans-serif; }

  .ab-reveal { opacity:0; transform:translateY(28px); transition:opacity 0.75s ease,transform 0.75s ease; }
  .ab-reveal.ab-visible { opacity:1; transform:translateY(0); }
  .ab-d1{transition-delay:0.10s;} .ab-d2{transition-delay:0.22s;}
  .ab-d3{transition-delay:0.34s;} .ab-d4{transition-delay:0.46s;}

  @keyframes ab-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.5);} 50%{box-shadow:0 0 0 5px rgba(34,197,94,0);} }
  .ab-avail { width:8px;height:8px;border-radius:50%;background:#22c55e;animation:ab-pulse 2s ease-in-out infinite;flex-shrink:0; }
`;

function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

const SKILLS = ["JavaScript (ES6+)","Python","React.js","Node.js","Express.js","MongoDB","Mongoose","HTML5","CSS3","Tailwind CSS","Bootstrap","SQL","Git","GitHub","Postman","VS Code","Render","Vercel"];
const STATS  = [{ val:"Fresher",label:"Experience Level" },{ val:"5+",label:"Projects Completed" },{ val:"18+",label:"Tech Stacks" },{ val:"∞",label:"Cups of Chai" }];
const VALUES = [
  { border:"border-l-blue-500", accent:"text-blue-600 dark:text-blue-400", label:"Problem-first thinking", desc:"Every line of code starts with a clear user problem, not a technical solution looking for a problem." },
  { border:"border-l-violet-500", accent:"text-violet-600 dark:text-violet-400", label:"Clean architecture", desc:"Readable, maintainable systems that scale gracefully as requirements evolve over time." },
  { border:"border-l-cyan-500", accent:"text-cyan-600 dark:text-cyan-400", label:"Continuous learning", desc:"Tech moves fast. I invest deliberately in staying current and going deep on fundamentals." },
];

export default function About() {
  const [secRef, secVis]   = useReveal();
  const [bodyRef, bodyVis] = useReveal();
  const [valRef, valVis]   = useReveal();

  return (
    
    <section
      id="about"
      className="bg-slate-50 dark:bg-[#080d20] text-slate-900 dark:text-white transition-colors duration-500"
    >
      <style>{CSS}</style>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">

        {/* Heading */}
        <div ref={secRef} className="text-center mb-16">
          <div className={`ab-reveal ${secVis?"ab-visible":""} flex items-center justify-center gap-3 mb-4`}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
            <span className="ab-f-body text-[0.6rem] font-semibold tracking-[0.4em] uppercase text-slate-500 dark:text-slate-400">Who I Am</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
          </div>
          <h2 className={`ab-reveal ab-d1 ${secVis?"ab-visible":""} ab-f-display font-extrabold uppercase tracking-tight text-slate-900 dark:text-white`}
            style={{ fontSize:"clamp(2.8rem,7vw,5.5rem)" }}>
            About
          </h2>
          <div className={`ab-reveal ab-d2 ${secVis?"ab-visible":""} ab-f-display font-extrabold uppercase select-none text-slate-900/[0.03] dark:text-white/[0.03]`}
            style={{ fontSize:"clamp(4rem,12vw,9rem)", lineHeight:0.85, marginTop:-6 }} aria-hidden>ME</div>
        </div>

        {/* Quote */}
        <div className={`ab-reveal ${secVis?"ab-visible":""} mb-16 px-8 py-8 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.025] relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-violet-500/[0.025] to-cyan-500/[0.02] pointer-events-none rounded-2xl" />
          <p className="ab-f-serif relative z-10 text-slate-500 dark:text-white/65"
            style={{ fontSize:"clamp(1.1rem,2.5vw,1.6rem)", fontStyle:"italic", fontWeight:300, lineHeight:1.65 }}>
            "Technology should solve real-world problems, and that's my philosophy as a full stack engineer."
          </p>
          <p className="ab-f-body mt-4 text-[0.7rem] tracking-[0.18em] uppercase text-slate-400 dark:text-white/28 relative z-10">— Lingam Ganesh</p>
        </div>

        {/* Grid: Photo + Text */}
        <div ref={bodyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

          {/* Photo */}
          <div className={`ab-reveal ${bodyVis?"ab-visible":""}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
              <img src={aboutImage} alt="Lingam Ganesh" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-blue-500/70 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-violet-500/70 rounded-br-2xl" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-green-500/25">
                <div className="ab-avail" />
                <span className="ab-f-body text-[0.6rem] font-medium tracking-[0.08em] text-white/75">Available for work</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`ab-reveal ab-d2 ${bodyVis?"ab-visible":""} flex flex-col gap-7`}>
            <div>
              <h3 className="ab-f-display text-[1.05rem] font-bold tracking-[0.12em] uppercase text-slate-900 dark:text-white mb-2">Lingam Ganesh</h3>
              <p className="ab-f-serif text-[1.0rem] font-light italic text-slate-500 dark:text-white/45">Full Stack Engineer · Based in India</p>
            </div>

            <div className="space-y-3">
              <p className="ab-f-body text-[0.92rem] leading-relaxed font-light text-slate-600 dark:text-white/55">
                I'm a passionate full stack engineer who loves turning complex problems into elegant, user-friendly solutions. With a strong foundation in both frontend and backend technologies, I build end-to-end products that are fast, scalable, and maintainable.
              </p>
              <p className="ab-f-body text-[0.88rem] leading-relaxed font-light text-slate-500 dark:text-white/40">
                When I'm not writing code, I'm exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map(({ val, label }) => (
                <div key={label} className="p-4 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] hover:border-blue-400/40 dark:hover:border-blue-400/30 transition-colors duration-300">
                  <div className="ab-f-display font-bold" style={{
                    fontSize:"clamp(1.4rem,2.5vw,1.9rem)",
                    background:"linear-gradient(110deg,#3b82f6,#7c3aed)",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                  }}>{val}</div>
                  <div className="ab-f-body text-[0.6rem] font-semibold tracking-[0.12em] uppercase text-slate-400 dark:text-white/30 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="ab-f-body text-[0.58rem] font-semibold tracking-[0.32em] uppercase text-slate-400 dark:text-white/25 mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(s => (
                  <span key={s} className="ab-f-body text-[0.62rem] font-medium tracking-[0.1em] uppercase px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/45 bg-white dark:bg-white/[0.03] hover:border-violet-400/50 hover:text-violet-600 dark:hover:text-violet-300 transition-all duration-250 cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={valRef}>
          <p className={`ab-reveal ${valVis?"ab-visible":""} ab-f-body text-[0.58rem] font-semibold tracking-[0.36em] uppercase text-slate-400 dark:text-white/22 text-center mb-8`}>What I stand for</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map(({ border, accent, label, desc }, i) => (
              <div key={label} className={`ab-reveal ab-d${i+2} ${valVis?"ab-visible":""} border-l-2 ${border} pl-5 py-1`}>
                <p className={`ab-f-display text-[0.62rem] font-bold tracking-[0.12em] uppercase ${accent} mb-2`}>{label}</p>
                <p className="ab-f-body text-[0.82rem] leading-relaxed font-light text-slate-500 dark:text-white/40">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/[0.07] to-transparent" />
      </div>
    </section>
  );
}