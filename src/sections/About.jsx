import { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/images/about/about1.png";


const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap');

  .f-display { font-family: 'Syncopate', sans-serif; }
  .f-serif   { font-family: 'Cormorant Garamond', Georgia, serif; }
  .f-body    { font-family: 'Outfit', sans-serif; }

  /* ── Section reveal ── */
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.75s ease, transform 0.75s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-d1 { transition-delay: 0.10s; }
  .reveal-d2 { transition-delay: 0.22s; }
  .reveal-d3 { transition-delay: 0.34s; }
  .reveal-d4 { transition-delay: 0.46s; }
  .reveal-d5 { transition-delay: 0.58s; }

  /* ── Section heading ── */
  .about-title {
    font-family: 'Syncopate', sans-serif;
    font-size: clamp(2.8rem, 7vw, 6rem);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #fff;
    line-height: 1;
  }

  /* ── Thin horizontal rule ── */
  .rule {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(255,255,255,0.12) 20%,
      rgba(255,255,255,0.12) 80%,
      transparent 100%
    );
  }

  /* ── Highlight quote bar ── */
  .quote-bar {
    position: relative;
    display: inline;
  }
  .quote-bar::before {
    content: '';
    position: absolute;
    inset: -3px -6px;
    background: linear-gradient(
      105deg,
      rgba(255,45,120,0.13) 0%,
      rgba(185,78,255,0.11) 35%,
      rgba(0,191,255,0.10)  70%,
      rgba(0,255,136,0.08)  100%
    );
    border-radius: 3px;
    z-index: 0;
  }
  .quote-bar > span { position: relative; z-index: 1; }

  /* Underline on the quote */
  .quote-underline {
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background: linear-gradient(
      90deg,
      rgba(255,45,120,0.6)  0%,
      rgba(185,78,255,0.5) 33%,
      rgba(0,191,255,0.5)  66%,
      rgba(0,255,136,0.4)  100%
    );
    border-radius: 1px;
    box-shadow:
      0 0 8px rgba(255,45,120,0.3),
      0 0 16px rgba(185,78,255,0.2);
  }

  /* ── Stats / number cards ── */
  .stat-val {
    font-family: 'Syncopate', sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 700;
    line-height: 1;
    background: linear-gradient(110deg, #ff2d78, #b94eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .stat-card {
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 18px 22px;
    background: rgba(255,255,255,0.025);
    transition: border-color 0.3s ease, background 0.3s ease;
  }
  .stat-card:hover {
    border-color: rgba(255,45,120,0.3);
    background: rgba(255,45,120,0.04);
  }

  /* ── Skill tags ── */
  .skill-tag {
    font-family: 'Outfit', sans-serif;
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 5px 11px;
    border-radius: 3px;
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.03);
    transition: all 0.25s ease;
    cursor: default;
  }
  .skill-tag:hover {
    border-color: rgba(185,78,255,0.5);
    color: rgba(255,255,255,0.85);
    background: rgba(185,78,255,0.08);
    box-shadow: 0 0 12px rgba(185,78,255,0.15);
  }

  /* ── Photo frame ── */
  .photo-frame {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
  }
  .photo-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.1);
    z-index: 2;
    pointer-events: none;
  }
  /* Subtle corner accent */
  .photo-frame::after {
    content: '';
    position: absolute;
    top: -1px; left: -1px;
    width: 40px; height: 40px;
    border-top: 2px solid #ff2d78;
    border-left: 2px solid #ff2d78;
    border-radius: 14px 0 0 0;
    z-index: 3;
    box-shadow: 0 0 10px rgba(255,45,120,0.4);
    pointer-events: none;
  }
  .photo-corner-br {
    position: absolute;
    bottom: -1px; right: -1px;
    width: 40px; height: 40px;
    border-bottom: 2px solid #b94eff;
    border-right: 2px solid #b94eff;
    border-radius: 0 0 14px 0;
    z-index: 3;
    box-shadow: 0 0 10px rgba(185,78,255,0.4);
    pointer-events: none;
  }

  /* ── Neon accent dot ── */
  .neon-dot {
    display: inline-block;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #ff2d78;
    box-shadow: 0 0 6px 2px rgba(255,45,120,0.6);
    flex-shrink: 0;
  }

  /* ── Values list item ── */
  .value-item {
    border-left: 2px solid transparent;
    padding-left: 16px;
    transition: border-color 0.3s ease;
  }
  .value-item:hover { border-left-color: #ff2d78; }

  /* ── Availability badge ── */
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,136,0.5); }
    50%       { box-shadow: 0 0 0 5px rgba(0,255,136,0); }
  }
  .avail-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #00ff88;
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
`;

/* ── Intersection observer hook ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const SKILLS = [
  "JavaScript (ES6+)",
  "Python",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "SQL",
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "Render",
  "Vercel"
];

const VALUES = [
  { accent: "#ff2d78", label: "Problem-first thinking", desc: "Every line of code starts with a clear user problem, not a technical solution looking for a problem." },
  { accent: "#b94eff", label: "Clean architecture",     desc: "Readable, maintainable systems that scale gracefully as requirements evolve over time." },
  { accent: "#00bfff", label: "Continuous learning",    desc: "Tech moves fast. I invest deliberately in staying current and going deep on fundamentals." },
];

const STATS = [
  { val: "Fresher",  label: "Years experience" },
  { val: "4+", label: "Projects Completed"  },
  { val: "10+",  label: "Tech stacks"       },
  { val: "∞",   label: "Cups of chai"      },
];

export default function About() {
  const [secRef, secVis] = useReveal();
  const [quoteRef, quoteVis] = useReveal();
  const [photoRef, photoVis] = useReveal();
  const [valRef, valVis] = useReveal();

  return (
    <div style={{ background: "#050505", minHeight: "100vh", color: "#fff" }}>
      <style>{CSS}</style>

      <section
        id="about"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(80px,12vw,140px) clamp(20px,5vw,60px)",
        }}
      >

        {/* ── HEADING ── */}
        <div
          ref={secRef}
          style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,72px)" }}
        >
          {/* eyebrow */}
          <div
            className={`reveal ${secVis ? "visible" : ""}`}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 12, marginBottom: 20,
            }}
          >
            <div className="rule" style={{ maxWidth: 60 }} />
            <span className="f-body" style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
              Who I Am
            </span>
            <div className="rule" style={{ maxWidth: 60 }} />
          </div>

          {/* Big title */}
          <h2
            className={`about-title reveal reveal-d1 ${secVis ? "visible" : ""}`}
          >
            About
          </h2>

          {/* Decorative number */}
          <div
            className={`reveal reveal-d2 ${secVis ? "visible" : ""}`}
            style={{
              fontFamily: "'Syncopate', sans-serif",
              fontSize: "clamp(5rem,14vw,11rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "rgba(255,255,255,0.03)",
              lineHeight: 0.85,
              marginTop: -8,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            ME
          </div>
        </div>

        {/* ── INTRO QUOTE — full-width pastel highlight ── */}
        <div
          ref={quoteRef}
          className={`reveal ${quoteVis ? "visible" : ""}`}
          style={{
            marginBottom: "clamp(56px,8vw,96px)",
            padding: "clamp(24px,4vw,40px) clamp(24px,5vw,56px)",
            background: "rgba(255,255,255,0.022)",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Pastel gradient wash behind quote */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 14,
            background: "linear-gradient(110deg, rgba(255,45,120,0.06) 0%, rgba(185,78,255,0.05) 40%, rgba(0,191,255,0.04) 70%, rgba(0,255,136,0.03) 100%)",
            pointerEvents: "none",
          }} />

          {/* Opening quote mark */}
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(4rem, 8vw, 7rem)",
            lineHeight: 0.7,
            color: "rgba(255,45,120,0.25)",
            marginBottom: 8,
            userSelect: "none",
          }}>"</div>

          {/* Quote text */}
          <p
            className="f-serif"
            style={{
              fontSize: "clamp(1.2rem, 2.6vw, 1.75rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.82)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span className="quote-bar">
              <span>
                Technology should solve real-world problems,<br />
                and that's my philosophy as a full stack engineer.
              </span>
            </span>
          </p>

          {/* Gradient underline */}
          <span className="quote-underline" />

          {/* Attribution */}
          <p className="f-body" style={{ marginTop: 18, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", position: "relative", zIndex: 1 }}>
            — Lingam Ganesh
          </p>
        </div>

        {/* ── MAIN CONTENT: Photo left · Text right ── */}
        <div
          ref={photoRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(32px,5vw,72px)",
            alignItems: "start",
            marginBottom: "clamp(56px,8vw,96px)",
          }}
        >
          {/* ── LEFT: Photo ── */}
          <div className={`reveal ${photoVis ? "visible" : ""}`}>
            <div className="photo-frame" style={{ aspectRatio: "4/5", background: "linear-gradient(145deg, #141414, #0a0a0a)", position: "relative" }}>
              {/* Corner BR accent */}
              <div className="photo-corner-br" />

              {/* Placeholder — replace with <img> */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: 12,
              }}>
                  
                  <img src={aboutImage} alt="Lingam Ganesh"
                       style={{ width:"100%", height:"100%", objectFit:"cover", position:"absolute", inset:0 }} />
              
              </div>

              {/* Subtle gradient vignette overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                background: "linear-gradient(0deg, rgba(5,5,5,0.7) 0%, transparent 100%)",
                borderRadius: "0 0 14px 14px",
                pointerEvents: "none",
              }} />

              {/* Availability badge pinned bottom-left */}
              <div style={{
                position: "absolute", bottom: 16, left: 16,
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: 99,
                padding: "7px 14px",
                zIndex: 4,
              }}>
                <div className="avail-dot" />
                <span className="f-body" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)" }}>
                  Available for work
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text ── */}
          <div
            className={`reveal reveal-d2 ${photoVis ? "visible" : ""}`}
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            {/* Name + role line */}
            <div>
              <h3 className="f-display" style={{ fontSize: "clamp(0.9rem,2vw,1.1rem)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", marginBottom: 8 }}>
                Lingam Ganesh
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="neon-dot" />
                <span className="f-serif" style={{ fontSize: "clamp(1rem,2vw,1.2rem)", fontStyle: "italic", color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                  Full Stack Engineer · Based in India
                </span>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p className="f-body" style={{ fontSize: "clamp(0.85rem,1.5vw,0.95rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
                I'm a passionate full stack engineer who loves turning complex problems into elegant, user-friendly solutions. With a strong foundation in both frontend and backend technologies, I build end-to-end products that are fast, scalable, and maintainable.
              </p>
              <p className="f-body" style={{ fontSize: "clamp(0.85rem,1.5vw,0.95rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                When I'm not writing code, I'm exploring new technologies, contributing to open source, or sharing knowledge with the developer community. I believe great software is built at the intersection of technical excellence and deep empathy for users.
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
              {STATS.map(({ val, label }) => (
                <div key={label} className="stat-card">
                  <div className="stat-val">{val}</div>
                  <div className="f-body" style={{ fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: 6, fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="f-body" style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 12 }}>
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {SKILLS.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* ── VALUES ── */}
        <div ref={valRef}>
          <p
            className={`f-body reveal ${valVis ? "visible" : ""}`}
            style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.36em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 28, textAlign: "center" }}
          >
            What I stand for
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {VALUES.map(({ accent, label, desc }, i) => (
              <div
                key={label}
                className={`value-item reveal reveal-d${i + 2} ${valVis ? "visible" : ""}`}
                style={{
                  borderLeft: `2px solid ${accent}`,
                  paddingLeft: 20,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}
              >
                <p className="f-display" style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: 8 }}>
                  {label}
                </p>
                <p className="f-body" style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom rule ── */}
        <div className="rule" style={{ marginTop: "clamp(56px,8vw,96px)" }} />

      </section>
    </div>
  );
}