import { LayoutGrid, Calendar, Clock, Users, Radio, CalendarDays, Zap, Sparkles, ShieldCheck, UsersIcon, StarIcon, UserIcon, BoltIcon } from "lucide-react";
import CtaButton from "@/components/Hero/CtaButton";

export default function Home() {
  return (
    <main className="relative w-full font-sans overflow-x-hidden" style={{ background: "var(--background)" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        >
          <source src="/home_page/videoplayback.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer overlay for cinematic depth */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          {/* Subtle vignette */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
        </div>

        {/* ── DESKTOP HERO CONTENT ── */}
        <div className="hidden md:flex relative z-20 h-full items-end px-16 pb-20">
          <div className="w-full flex items-end justify-between"
            style={{ animation: "heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) both" }}>

            {/* Left column */}
            <div className="max-w-[640px]">

              {/* Eyebrow label */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--secondary)" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "rgba(255,255,255,0.7)" }}>
                  Live Workshop · Limited Seats
                </span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                marginBottom: "1.5rem",
                textShadow: "0 4px 40px rgba(0,0,0,0.6)",
              }}>
                Master ChatGPT &amp; <br />
                <span style={{
                  background: "linear-gradient(90deg, var(--secondary), #5ef0a0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  15+ AI Tools
                </span>{" "}
                in Just 3 Hours
              </h1>

              {/* Description */}
              <p style={{
                fontSize: "1.15rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.72)",
                marginBottom: "2.5rem",
                maxWidth: "520px",
                fontWeight: 400,
              }}>
                Join <strong style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>10M+ professionals</strong> who've
                transformed their productivity, automated tedious work, and future-proofed
                their careers—all in one live workshop.
              </p>

              {/* CTA */}
              <CtaButton />
            </div>

            {/* Right column — Badges stacked vertically */}
            <div className="flex flex-col gap-3 pb-1">
              <InfoBadge icon={<LayoutGrid size={16} />} text="3 HOURS" />
              <InfoBadge icon={<Calendar size={16} />} text="STARTS 12TH MAR" />
              <InfoBadge icon={<Clock size={16} />} text="7PM TO 10PM" />
            </div>
          </div>
        </div>

        {/* ── MOBILE HERO CONTENT ── */}
        <div className="flex md:hidden flex-col relative z-20 h-full">

          {/* Top spacer / content area */}
          <div className="flex-1 flex items-end px-6 pb-8">
            <div style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/20"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--secondary)" }} />
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: "rgba(255,255,255,0.65)" }}>
                  Live Workshop
                </span>
              </div>

              <h1 style={{
                fontSize: "2.3rem",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}>
                Master ChatGPT &amp;{" "}
                <span style={{
                  background: "linear-gradient(90deg, var(--secondary), #5ef0a0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  15+ AI Tools
                </span>{" "}
                in Just 3 Hours
              </h1>

              <p style={{
                fontSize: "1rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.7)",
                fontWeight: 400,
              }}>
                Join <strong style={{ color: "rgba(255,255,255,0.92)" }}>10M+ professionals</strong> who've
                transformed their productivity and automated tedious work.
              </p>
            </div>
          </div>

          {/* Bottom panel */}
          <div className="relative z-20 px-6 pt-6 pb-10 flex flex-col gap-4"
            style={{
              background: "var(--background)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}>

            {/* Badges row */}
            <div className="flex flex-col gap-2.5">
              <InfoBadge icon={<LayoutGrid size={16} />} text="3 HOURS" />
              <InfoBadge icon={<Calendar size={16} />} text="STARTS 12TH MAR" />
              <InfoBadge icon={<Clock size={16} />} text="7PM TO 10PM" />
            </div>

            {/* CTA */}
            <button style={{
              marginTop: "0.5rem",
              padding: "1.1rem 1.5rem",
              fontSize: "1.05rem",
              fontWeight: 700,
              borderRadius: "14px",
              background: "var(--secondary)",
              color: "var(--background)",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
              boxShadow: "0 8px 28px rgba(46,204,113,0.35)",
              width: "100%",
            }}>
              Claim Your Spot →
            </button>
          </div>
        </div>

        {/* Keyframe injection */}
        <style>{`
    @keyframes heroFadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `}</style>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="w-full px-6 md:px-12 py-24 md:py-32" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto">

          {/* Intro Headers */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
            <div className="flex-1 max-w-[650px]">
              <p className="text-sm font-bold tracking-widest uppercase mb-6" style={{ color: "var(--tertiary)" }}>
                In 16-Weeks
              </p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8" style={{ color: "var(--foreground)" }}>
                Master AI. Build <br />
                Smarter. Become a PM.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                PMs who know how to leverage AI will have an unfair advantage in the next
                decade. This program isn&apos;t about memorizing frameworks—it&apos;s about mastering
                the real skills that top companies want: AI-powered decision-making, rapid
                execution, and strategic thinking.
              </p>
            </div>

            {/* Stats Group */}
            <div className="flex flex-col gap-6 w-full md:w-auto md:min-w-[320px]">
              <div className="rounded-3xl p-8 border" style={{ background: "var(--primary)", borderColor: "var(--secondary)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <CalendarDays size={16} style={{ color: "var(--tertiary)" }} />
                  <span className="text-xs font-black tracking-widest uppercase" style={{ color: "var(--tertiary)" }}>
                    Enrolment Ends
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-7xl font-black" style={{ color: "var(--foreground)" }}>20</span>
                  <span className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>MAR</span>
                </div>
              </div>

              <div className="flex gap-4">
                <StatCard value="15+" label="Experts" icon={<Users size={14} />} />
                <StatCard value="25+" label="Sessions" icon={<Radio size={14} />} color="secondary" />
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            <BenefitCard
              icon={<Zap className="text-green-400" size={32} />}
              title="10x Efficiency"
              content="Master the art of AI orchestration to turn exhaustive tasks into instant workflows."
              accent="var(--tertiary)"
            />
            <BenefitCard
              icon={<Sparkles className="text-green-500" size={32} />}
              title="Strategic Thinking"
              content="Move beyond prompts. Learn to integrate AI into product strategy and decision making."
              accent="var(--secondary)"
            />
            <BenefitCard
              icon={<ShieldCheck className="text-emerald-500" size={32} />}
              title="Future-Proof"
              content="Stay ahead of the disruption. Build skills that remain relevant in the AI-first economy."
              accent="var(--tertiary)"
            />
          </div>

          {/* Audience Section */}
          <div className="relative rounded-[3rem] p-10 md:p-20 overflow-hidden border border-white/5 bg-white/5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 blur-[150px] -mr-64 -mt-64" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight" style={{ color: "var(--foreground)" }}>
                  Is this for you? <br />
                  <span className="text-slate-500 italic">The ambitious only.</span>
                </h3>
                <ul className="space-y-8">
                  {[
                    "Senior Professionals aiming for 10x output.",
                    "Product Managers scaling AI-first features.",
                    "Entrepreneurs building lean foundations.",
                    "Creative Tech enthusiasts leading change."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-xl font-semibold text-slate-300">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--tertiary)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl mb-12">
                  <p className="text-2xl font-medium italic mb-8 leading-relaxed text-white">
                    &quot;The most practical AI application workshop I&apos;ve attended. I saved 15 hours in my first week back at work.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-[var(--tertiary)]/40" />
                    <div>
                      <p className="font-bold text-xl text-white">Sarah Jenkins</p>
                      <p className="text-slate-500">Senior PM @ TechGiant</p>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full py-7 text-2xl font-black rounded-2xl transition-all hover:brightness-110 active:scale-[0.98] uppercase tracking-[0.2em] shadow-2xl"
                  style={{ background: "var(--foreground)", color: "var(--background)" }}
                >
                  Become an AI Master — $99
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ value, label, icon, color = "tertiary" }: { value: string; label: string; icon: React.ReactNode; color?: "tertiary" | "secondary" }) {
  const accentColor = color === "tertiary" ? "var(--tertiary)" : "var(--secondary)";
  return (
    <div className="flex-1 rounded-2xl p-6 border border-white/5" style={{ background: "var(--primary)" }}>
      <div className="text-4xl font-black mb-3" style={{ color: accentColor }}>{value}</div>
      <div className="flex items-center gap-2 opacity-50 uppercase tracking-widest text-[10px] font-bold">
        {icon} {label}
      </div>
    </div>
  );
}

function BenefitCard({ title, content, accent, icon }: { title: string; content: string; accent: string; icon: React.ReactNode }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-500 group">
      <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit border border-white/10">{icon}</div>
      <div className="w-12 h-1.5 rounded-full mb-8 transition-all group-hover:w-24" style={{ background: accent }} />
      <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: "var(--foreground)" }}>{title}</h3>
      <p className="text-lg leading-relaxed text-white/50">{content}</p>
    </div>
  );
}

function InfoBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem",
      padding: "0.65rem 1.1rem",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.07)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    }}>
      <span style={{ color: "var(--secondary)", display: "flex" }}>{icon}</span>
      <span style={{
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        color: "rgba(255,255,255,0.85)",
      }}>
        {text}
      </span>
    </div>
  );
}
export function ProgramIntro() {
  return (
    <div className="max-w-7xl mx-auto flex items-end justify-between gap-14 mb-32">

      {/* ── LEFT ── */}
      <div className="flex-1 max-w-[620px]">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full border"
          style={{ background: "rgba(47,90,67,0.18)", borderColor: "rgba(47,90,67,0.55)" }}>
          <div className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: "#2f5a43" }}>
            <span className="w-1.5 h-1.5 rounded-full block animate-pulse"
              style={{ background: "#5bba84", boxShadow: "0 0 6px #5bba84" }} />
          </div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase"
            style={{ color: "#5bba84" }}>16-Week Program</span>
        </div>

        <h2 className="font-extrabold leading-[1.04] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)", color: "#f0ede8" }}>
          Master AI.<br />
          Build <span style={{ color: "#5bba84" }}>Smarter.</span><br />
          Become a PM.
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "rgba(240,237,232,0.52)", maxWidth: "500px" }}>
          PMs who leverage AI will have an{" "}
          <strong style={{ color: "rgba(240,237,232,0.82)", fontWeight: 500 }}>unfair advantage</strong>{" "}
          in the next decade. This program isn't about memorising frameworks—it's about{" "}
          <strong style={{ color: "rgba(240,237,232,0.82)", fontWeight: 500 }}>
            AI-powered decision-making,
          </strong>{" "}
          rapid execution, and strategic thinking.
        </p>
      </div>

      {/* ── RIGHT ── */}
      <div className="flex flex-col gap-3 w-[300px]">

        {/* Date card */}
        <div className="rounded-2xl p-7 relative overflow-hidden"
          style={{ background: "rgba(47,90,67,0.14)", border: "1px solid rgba(47,90,67,0.45)" }}>
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays size={14} style={{ color: "#5bba84" }} />
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase"
              style={{ color: "#5bba84" }}>Enrolment Ends</span>
          </div>
          <div className="flex items-baseline gap-2.5">
            <span className="font-extrabold leading-none" style={{ fontSize: "5rem", color: "#f0ede8" }}>20</span>
            <span className="text-[2.2rem] font-bold tracking-wide" style={{ color: "rgba(240,237,232,0.65)" }}>MAR</span>
          </div>
        </div>

        {/* Live countdown */}
        <CountdownRow target="2026-03-20T23:59:59" />

        {/* Mini stats */}
        <div className="flex gap-2.5">
          <MiniStat icon={<Users size={14} />} value="15+" label="Experts" />
          <MiniStat icon={<Radio size={14} />} value="25+" label="Sessions" />
        </div>
      </div>
    </div>
  );
}
