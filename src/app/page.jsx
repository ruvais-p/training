import Link from "next/link";
import { Icon } from "@iconify/react";
import { LayoutGrid, Calendar, Clock, Users, Radio, CalendarDays, Zap, Sparkles, ShieldCheck } from "lucide-react";
import CtaButton from "@/components/Hero/CtaButton";
import BorderGlow from "@/components/Hero/BorderGlow";
import BlurText from "@/components/BlurText";

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

        {/* Multi-layer overlay */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
            }}
          />
        </div>

        {/* DESKTOP HERO */}
        <div className="hidden md:flex relative z-20 h-full items-end px-16 pb-20">
          <div
            className="w-full flex items-end justify-between"
            style={{ animation: "heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <div className="max-w-[640px]">

              <div
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--secondary)" }}
                />
                <span
                  className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Live Workshop · Limited Seats
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  marginBottom: "1.5rem",
                  textShadow: "0 4px 40px rgba(0,0,0,0.6)",
                }}
              >
                Master ChatGPT &amp; <br />
                <BlurText
                  text="15+ AI Tools"
                  as="span"
                  delay={140}
                  animateBy="words"
                  direction="top"
                  className="inline-flex"
                  segmentStyle={{
                    background: "linear-gradient(90deg, var(--secondary), #5ef0a0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  animationFrom={{ filter: "blur(10px)", opacity: 0, y: -22 }}
                  animationTo={[
                    { filter: "blur(4px)", opacity: 0.65, y: 4 },
                    { filter: "blur(0px)", opacity: 1, y: 0 },
                  ]}
                  stepDuration={0.28}
                />
                {" "}
                in Just 3 Hours
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.72)",
                  marginBottom: "2.5rem",
                  maxWidth: "520px",
                  fontWeight: 400,
                }}
              >
                Join <strong style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}>10M+ professionals</strong> who've
                transformed their productivity, automated tedious work, and future-proofed
                their careers—all in one live workshop.
              </p>

              <CtaButton />
            </div>

            <div className="flex flex-col gap-3 pb-1">
              <InfoBadge icon={<LayoutGrid size={16} />} text="3 HOURS" />
              <InfoBadge icon={<Calendar size={16} />} text="STARTS 12TH MAR" />
              <InfoBadge icon={<Clock size={16} />} text="7PM TO 10PM" />
            </div>
          </div>
        </div>

        {/* MOBILE HERO */}
        <div className="flex md:hidden flex-col relative z-20 h-full">

          <div className="flex-1 flex items-end px-6 pb-8">
            <div style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div
                className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/20"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--secondary)" }}
                />
                <span
                  className="text-[10px] font-semibold tracking-[0.16em] uppercase"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  Live Workshop
                </span>
              </div>

              <h1
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                Master ChatGPT &amp;{" "}
                <BlurText
                  text="15+ AI Tools"
                  as="span"
                  delay={140}
                  animateBy="words"
                  direction="top"
                  className="inline-flex"
                  segmentStyle={{
                    background: "linear-gradient(90deg, var(--secondary), #5ef0a0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  animationFrom={{ filter: "blur(10px)", opacity: 0, y: -22 }}
                  animationTo={[
                    { filter: "blur(4px)", opacity: 0.65, y: 4 },
                    { filter: "blur(0px)", opacity: 1, y: 0 },
                  ]}
                  stepDuration={0.28}
                />
                {" "}
                in Just 3 Hours
              </h1>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 400,
                }}
              >
                Join <strong style={{ color: "rgba(255,255,255,0.92)" }}>10M+ professionals</strong> who've
                transformed their productivity and automated tedious work.
              </p>
            </div>
          </div>

          <div
            className="relative z-20 px-6 pt-6 pb-10 flex flex-col gap-4"
            style={{
              background: "var(--background)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex flex-col gap-2.5">
              <InfoBadge icon={<LayoutGrid size={16} />} text="3 HOURS" />
              <InfoBadge icon={<Calendar size={16} />} text="STARTS 12TH MAR" />
              <InfoBadge icon={<Clock size={16} />} text="7PM TO 10PM" />
            </div>

            <BorderGlow
              edgeSensitivity={12}
              glowColor="138 30 68"
              backgroundColor="rgba(63, 116, 78, 0.98)"
              borderRadius={14}
              glowRadius={22}
              glowIntensity={1.05}
              coneSpread={22}
              animated={false}
              colors={["rgba(90,155,104,0.95)", "rgba(133,199,145,0.82)", "rgba(63,116,78,0.9)"]}
              fillOpacity={0.22}
              className="border-glow-plain mt-2 w-full"
            >
              <button
                style={{
                  padding: "1.1rem 1.5rem",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, var(--secondary), var(--tertiary))",
                  color: "var(--background)",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  boxShadow: "0 12px 30px rgba(90,155,104,0.22)",
                  width: "100%",
                }}
              >
                Claim Your Spot {"->"}
              </button>
            </BorderGlow>
          </div>
        </div>

        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(32px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full px-6 md:px-12 py-24 md:py-32" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
            <div className="flex-1 max-w-[650px]">

              <p className="text-sm font-bold tracking-widest uppercase mb-6" style={{ color: "var(--tertiary)" }}>
                In 16-Weeks
              </p>

              <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8" style={{ color: "var(--foreground)" }}>
                Master AI. Build <br /> Smarter. Become a PM.
              </h2>

              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                PMs who know how to leverage AI will have an unfair advantage in the next
                decade. This program isn&apos;t about memorizing frameworks—it&apos;s about mastering
                the real skills that top companies want.
              </p>

            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto md:min-w-[320px]">
              <div
                className="rounded-3xl p-8 border"
                style={{ background: "var(--primary)", borderColor: "var(--secondary)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <CalendarDays size={16} style={{ color: "var(--tertiary)" }} />
                  <span className="text-xs font-black tracking-widest uppercase" style={{ color: "var(--tertiary)" }}>
                    Enrolment Ends
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-7xl font-black" style={{ color: "var(--foreground)" }}>
                    20
                  </span>
                  <span className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>
                    MAR
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <StatCard value="15+" label="Experts" icon={<Users size={14} />} />
                <StatCard value="25+" label="Sessions" icon={<Radio size={14} />} color="secondary" />
              </div>
            </div>
          </div>

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
              content="Move beyond prompts. Learn to integrate AI into product strategy."
              accent="var(--secondary)"
            />

            <BenefitCard
              icon={<ShieldCheck className="text-emerald-500" size={32} />}
              title="Future-Proof"
              content="Stay ahead of the disruption. Build skills that remain relevant."
              accent="var(--tertiary)"
            />
          </div>

        </div>
      </section>

      <section
        className="w-full px-6 py-12 md:px-12 md:py-16 lg:px-16"
        style={{
          background: "linear-gradient(135deg, #143129 0%, #214538 55%, #2d5c3f 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="mx-auto max-w-7xl px-0 py-0"
        >
          <div className="flex flex-col gap-10 md:gap-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 lg:flex lg:w-[250px] lg:min-h-[180px] lg:items-center">
                <div>
                  <p className="text-[1.75rem] font-semibold tracking-[-0.03em] text-white md:text-[2rem]">
                    Forum Invest
                  </p>
                  <p className="mt-4 text-[1.35rem] font-medium tracking-[-0.02em] text-white/90 md:text-[1.5rem]">
                    Copyright © 2026
                  </p>
                  <p className="mt-2 max-w-[220px] text-[0.95rem] leading-7 font-normal" style={{ color: "rgba(232,245,239,0.68)" }}>
                    Small change. Big change.
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <div className="grid gap-6 md:grid-cols-3 lg:px-10">
                  <FooterNavColumn
                    links={[
                      { href: "/", label: "Home" },
                      { href: "/contact", label: "Contact us" },
                    ]}
                  />
                  <FooterNavColumn
                    links={[
                      { href: "/", label: "How it works" },
                      { href: "/", label: "Privacy policy" },
                    ]}
                  />
                  <FooterNavColumn
                    links={[
                      { href: "/", label: "Our mission" },
                      { href: "/", label: "Ecosia" },
                    ]}
                  />
                </div>
              </div>

              <div className="lg:flex lg:w-[180px] lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex h-[76px] items-center justify-center rounded-xl px-8 text-center text-[0.95rem] font-semibold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, var(--tertiary), #81b889)",
                    color: "#10241c",
                    boxShadow: "0 16px 30px rgba(90,155,104,0.28)",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="h-px w-full" style={{ background: "rgba(232,245,239,0.18)" }} />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-6 text-sm md:text-base">
                <FooterPolicyLink href="/" label="Privacy Policy" />
                <FooterPolicyLink href="/" label="Refund Policy" />
                <FooterPolicyLink href="/" label="Terms & Conditions" />
              </div>
              <div className="flex flex-wrap gap-5 lg:justify-end">
                <BottomSocial icon="ri:twitter-fill" label="Twitter" />
                <BottomSocial icon="ri:instagram-line" label="Instagram" />
                <BottomSocial icon="ri:facebook-fill" label="Facebook" />
                <BottomSocial icon="ri:linkedin-fill" label="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ value, label, icon, color = "tertiary" }) {
  const accentColor = color === "tertiary" ? "var(--tertiary)" : "var(--secondary)";

  return (
    <div className="flex-1 rounded-2xl p-6 border border-white/5" style={{ background: "var(--primary)" }}>
      <div className="text-4xl font-black mb-3" style={{ color: accentColor }}>
        {value}
      </div>

      <div className="flex items-center gap-2 opacity-50 uppercase tracking-widest text-[10px] font-bold">
        {icon} {label}
      </div>
    </div>
  );
}

function BenefitCard({ title, content, accent, icon }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-500 group">
      <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit border border-white/10">
        {icon}
      </div>

      <div className="w-12 h-1.5 rounded-full mb-8 transition-all group-hover:w-24" style={{ background: accent }} />

      <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: "var(--foreground)" }}>
        {title}
      </h3>

      <p className="text-lg leading-relaxed text-white/50">{content}</p>
    </div>
  );
}

function InfoBadge({ icon, text }) {
  return (
    <BorderGlow
      edgeSensitivity={10}
      glowColor="140 34 66"
      backgroundColor="rgba(30, 30, 30, 0.74)"
      borderRadius={18}
      glowRadius={28}
      glowIntensity={1.25}
      coneSpread={24}
      animated={false}
      colors={["rgba(90,155,104,0.95)", "rgba(63,116,78,0.88)", "rgba(133,199,145,0.82)"]}
      fillOpacity={0.32}
      className="w-[270px] max-w-full"
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.8rem",
          padding: "0.95rem 1.25rem",
          borderRadius: "18px",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <span style={{ color: "var(--tertiary)", display: "flex" }}>{icon}</span>

        <span
          style={{
            fontSize: "0.72rem",
            fontWeight: 800,
            letterSpacing: "0.16em",
            color: "rgba(255,255,255,0.86)",
          }}
        >
          {text}
        </span>
      </div>
    </BorderGlow>
  );
}

function FooterNavColumn({ links }) {
  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="flex items-center gap-4 text-[1rem] font-normal tracking-[-0.01em] transition-colors duration-300 hover:text-white md:text-[1.05rem]"
          style={{ color: "rgba(245,250,246,0.88)" }}
        >
          <span className="h-7 w-px" style={{ background: "rgba(90,155,104,0.95)" }} />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}

function FooterPolicyLink({ href, label }) {
  return (
    <Link
      href={href}
      className="transition-colors duration-300 hover:text-white"
      style={{ color: "rgba(245,250,246,0.76)" }}
    >
      {label}
    </Link>
  );
}

function BottomSocial({ icon, label }) {
  return (
    <Link
      href="/"
      aria-label={label}
      className="transition-transform duration-300 hover:-translate-y-0.5"
      style={{ color: "var(--tertiary)" }}
    >
      <Icon icon={icon} width="27" height="27" />
    </Link>
  );
}


