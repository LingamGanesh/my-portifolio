import { useState } from "react";

const INFO = [
  { label:"Email", value:"lingam.ganeshh@gmail.com", href:"mailto:lingam.ganeshh@gmail.com", accent:"#3b82f6", rgb:"59,130,246",
    icon:(c) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2.5"/><path d="M2 7.5l10 6.5 10-6.5"/></svg> },
  { label:"Phone", value:"+91 6309383520", href:"tel:+916309383520", accent:"#8b5cf6", rgb:"139,92,246",
    icon:(c) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
  { label:"Location", value:"India · Open to Remote", href:"#", accent:"#06b6d4", rgb:"6,182,212",
    icon:(c) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  .ct-f-display { font-family:'Syne',sans-serif; }
  .ct-f-body    { font-family:'DM Sans',sans-serif; }

  .ct-field-input { width:100%; background:transparent; border:none; outline:none; font-family:inherit; font-weight:300; letter-spacing:0.02em; line-height:1.6; resize:none; box-sizing:border-box; padding:26px 16px 10px; font-size:clamp(13px,1.4vw,14.5px); }
  .ct-caret-blue { caret-color:#3b82f6; }
`;

/* Floating label field */
function Field({ label, id, type="text", value, onChange, textarea }) {
  const [focus, setFocus] = useState(false);
  const float = focus || value.length > 0;

  return (
    <div className={`relative rounded-xl border transition-all duration-220 ${focus ? "border-blue-500/70 bg-blue-500/[0.03] shadow-[0_0_0_3px_rgba(59,130,246,0.07)]" : "border-slate-200 dark:border-white/[0.09] bg-slate-50 dark:bg-white/[0.025] hover:border-slate-300 dark:hover:border-white/20"}`}>
      <label htmlFor={id}
        className={`absolute left-4 pointer-events-none z-10 transition-all duration-200 ${focus ? "text-blue-500" : "text-slate-400 dark:text-white/30"}`}
        style={{
          top: float ? 9 : textarea ? 18 : "50%",
          transform: float ? "none" : textarea ? "none" : "translateY(-50%)",
          fontSize: float ? 9.5 : "clamp(12.5px,1.3vw,13.5px)",
          fontWeight: float ? 600 : 300,
          letterSpacing: float ? "0.3em" : "0.04em",
          textTransform: float ? "uppercase" : "none",
          lineHeight: 1,
        }}
      >{label}</label>
      {textarea
        ? <textarea id={id} rows={5} value={value} onChange={onChange}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            className="ct-field-input ct-caret-blue text-slate-900 dark:text-white" />
        : <input id={id} type={type} value={value} onChange={onChange}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            className="ct-field-input ct-caret-blue text-slate-900 dark:text-white" />
      }
      {focus && <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] pointer-events-none" />}
    </div>
  );
}

function InfoChip({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={item.href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="flex items-center gap-4 px-4 py-3.5 rounded-xl border no-underline transition-all duration-200"
      style={{
        borderColor: hov ? `rgba(${item.rgb},0.45)` : "",
        background: hov ? `rgba(${item.rgb},0.07)` : "",
        boxShadow: hov ? `0 0 18px rgba(${item.rgb},0.12)` : "none",
      }}
    >
      <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border transition-all duration-200"
        style={{
          background: hov ? `rgba(${item.rgb},0.15)` : `rgba(${item.rgb},0.07)`,
          borderColor: hov ? `rgba(${item.rgb},0.5)` : `rgba(${item.rgb},0.2)`,
          boxShadow: hov ? `0 0 12px rgba(${item.rgb},0.35)` : "none",
        }}>
        {item.icon(item.accent)}
      </div>
      <div>
        <p className="ct-f-body text-[0.58rem] font-bold tracking-[0.3em] uppercase m-0" style={{ color:item.accent }}>{item.label}</p>
        <p className="ct-f-body text-[0.82rem] font-light mt-1 m-0 text-slate-500 dark:text-white/45 transition-colors duration-200"
          style={{ color: hov ? undefined : "" }}>{item.value}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]:e.target.value }));

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ firstName:"", lastName:"", email:"", subject:"", message:"" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    /* ✅ bg-white/dark:bg-[#06091a] — NOT inline style */
    <section
      id="contact"
      className="bg-white dark:bg-[#06091a] text-slate-900 dark:text-white transition-colors duration-500"
    >
      <style>{CSS}</style>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-11 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
            <span className="ct-f-body text-[0.6rem] font-semibold tracking-[0.44em] uppercase text-slate-500 dark:text-slate-400">Get in touch</span>
            <div className="h-px w-11 bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent" />
          </div>
          <h2 className="ct-f-display font-extrabold uppercase tracking-tight text-slate-900 dark:text-white" style={{ fontSize:"clamp(2.6rem,7vw,5.5rem)" }}>Hire Me</h2>
          <div className="ct-f-display font-extrabold uppercase select-none text-slate-900/[0.03] dark:text-white/[0.025]"
            style={{ fontSize:"clamp(3rem,11vw,8rem)", lineHeight:0.86, marginTop:-4 }} aria-hidden>CONNECT</div>
          <p className="ct-f-body text-[0.88rem] font-light text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-2">
            Available for freelance work. Connect with me via phone and email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Info */}
          <div className="flex flex-col gap-5">
            {/* Availability card */}
            <div className="rounded-2xl p-6 border border-slate-200 dark:border-white/[0.07] bg-slate-50 dark:bg-white/[0.02] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-t-2xl" />
              <h3 className="ct-f-display text-[1rem] font-bold text-slate-900 dark:text-white mb-2">
                Let's build something{" "}
                <span style={{ background:"linear-gradient(90deg,#3b82f6,#8b5cf6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  remarkable
                </span>
              </h3>
              <p className="ct-f-body text-[0.82rem] font-light text-slate-500 dark:text-white/38 leading-relaxed">
                Whether you have a product idea, need a technical partner, or just want to discuss your next project — my inbox is always open.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 shadow-[0_0_6px_#4ade80,0_0_14px_rgba(74,222,128,0.4)]" />
                <span className="ct-f-body text-[0.65rem] font-medium tracking-[0.16em] uppercase text-slate-400 dark:text-white/38">Available · Remote worldwide</span>
              </div>
            </div>

            {/* Contact chips */}
            <div className="flex flex-col gap-2.5">
              {INFO.map(item => <InfoChip key={item.label} item={item} />)}
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-slate-50 dark:bg-white/[0.018] overflow-hidden shadow-sm">
            <div className="h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500" />
            <form onSubmit={submit} className="p-6 sm:p-8 flex flex-col gap-3.5">
              <div className="mb-2">
                <h4 className="ct-f-display text-[0.95rem] font-bold text-slate-900 dark:text-white">Send me a message</h4>
                <p className="ct-f-body text-[0.75rem] font-light text-slate-400 dark:text-white/30 mt-1">I'll reply within 24 hours.</p>
              </div>
              <div className="h-px bg-slate-200 dark:bg-white/[0.06]" />
              <div className="grid grid-cols-2 gap-3">
                <Field label="First Name" id="fn" value={form.firstName} onChange={set("firstName")} />
                <Field label="Last Name"  id="ln" value={form.lastName}  onChange={set("lastName")} />
              </div>
              <Field label="Email Address" id="em" type="email" value={form.email}   onChange={set("email")} />
              <Field label="Subject"       id="sb"              value={form.subject}  onChange={set("subject")} />
              <Field label="Message"       id="mg"              value={form.message}  onChange={set("message")} textarea />
              <div className="h-px bg-slate-200 dark:bg-white/[0.06]" />
              <button type="submit"
                className="ct-f-body px-7 py-3.5 rounded-xl text-[0.72rem] font-bold tracking-[0.16em] uppercase cursor-pointer outline-none text-white flex items-center justify-center gap-2.5 transition-all duration-220"
                style={{
                  background: sent ? "linear-gradient(90deg,#10b981,#06b6d4)" : "linear-gradient(90deg,#3b82f6,#8b5cf6)",
                  boxShadow: sent ? "0 0 24px rgba(16,185,129,0.4)" : "0 0 20px rgba(59,130,246,0.3)",
                  border:"none",
                }}
              >
                {sent ? (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!</>
                ) : (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>

       
      </div>
    </section>
  );
}