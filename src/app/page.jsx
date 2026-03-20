import {
  Calendar,
  CalendarDays,
  Clock,
  LayoutGrid,
  Radio,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import BlurText from "@/components/BlurText";
import BorderGlow from "@/components/Hero/BorderGlow";
import CtaButton from "@/components/Hero/CtaButton";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";

const HERO_BADGES = [
  { icon: LayoutGrid, text: "3 HOURS" },
  { icon: Calendar, text: "STARTS 12TH MAR" },
  { icon: Clock, text: "7PM TO 10PM" },
];

const STAT_CARDS = [
  { value: "15+", label: "Experts", icon: Users, color: "tertiary" },
  { value: "25+", label: "Sessions", icon: Radio, color: "secondary" },
];

const BENEFIT_CARDS = [
  {
    iconClassName: "text-green-400",
    icon: Zap,
    title: "10x Efficiency",
    content:
      "Master the art of AI orchestration to turn exhaustive tasks into instant workflows.",
    accent: "var(--tertiary)",
  },
  {
    iconClassName: "text-green-500",
    icon: Sparkles,
    title: "Strategic Thinking",
    content: "Move beyond prompts. Learn to integrate AI into product strategy.",
    accent: "var(--secondary)",
  },
  {
    iconClassName: "text-emerald-500",
    icon: ShieldCheck,
    title: "Future-Proof",
    content: "Stay ahead of the disruption. Build skills that remain relevant.",
    accent: "var(--tertiary)",
  },
];

const HERO_SECTION_STYLE = { background: "var(--background)" };
const HERO_ANIMATION_STYLE = {
  animation: "heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) both",
};
const MOBILE_HERO_ANIMATION_STYLE = {
  animation: "heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
};
const HERO_TITLE_STYLE = {
  fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)",
  fontWeight: 800,
  color: "#ffffff",
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  marginBottom: "1.5rem",
  textShadow: "0 4px 40px rgba(0,0,0,0.6)",
};
const MOBILE_HERO_TITLE_STYLE = {
  fontSize: "2.3rem",
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  marginBottom: "1rem",
};
const HERO_DESCRIPTION_STYLE = {
  fontSize: "1.15rem",
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.72)",
  marginBottom: "2.5rem",
  maxWidth: "520px",
  fontWeight: 400,
};
const MOBILE_HERO_DESCRIPTION_STYLE = {
  fontSize: "1rem",
  lineHeight: 1.65,
  color: "rgba(255,255,255,0.7)",
  fontWeight: 400,
};
const MOBILE_CTA_PANEL_STYLE = {
  background: "var(--background)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};
const HIGHLIGHT_TEXT_STYLE = {
  background: "linear-gradient(90deg, var(--secondary), #5ef0a0)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};
const HIGHLIGHT_ANIMATION_FROM = {
  filter: "blur(10px)",
  opacity: 0,
  y: -22,
};
const HIGHLIGHT_ANIMATION_TO = [
  { filter: "blur(4px)", opacity: 0.65, y: 4 },
  { filter: "blur(0px)", opacity: 1, y: 0 },
];
const ABOUT_SECTION_STYLE = { background: "var(--background)" };
const ABOUT_COPY_STYLE = { color: "rgba(255,255,255,0.55)" };
const MOBILE_CTA_GLOW_PROPS = {
  edgeSensitivity: 12,
  glowColor: "138 30 68",
  backgroundColor: "rgba(63, 116, 78, 0.98)",
  borderRadius: 14,
  glowRadius: 22,
  glowIntensity: 1.05,
  coneSpread: 22,
  animated: false,
  colors: [
    "rgba(90,155,104,0.95)",
    "rgba(133,199,145,0.82)",
    "rgba(63,116,78,0.9)",
  ],
  fillOpacity: 0.22,
};
const MOBILE_CTA_BUTTON_STYLE = {
  padding: "1rem 1.5rem",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "999px",
  background: "linear-gradient(135deg, var(--secondary), var(--tertiary))",
  color: "var(--background)",
  border: "1px solid rgba(255,255,255,0.12)",
  cursor: "pointer",
  letterSpacing: "-0.01em",
  boxShadow: "0 12px 30px rgba(90,155,104,0.22)",
  width: "100%",
};
const HERO_KEYFRAMES = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden font-sans" style={HERO_SECTION_STYLE}>
      <HeroSection />
      <AboutSection />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      >
        <source src="/home_page/videoplayback.mp4" type="video/mp4" />
      </video>

      <HeroOverlay />
      <DesktopHero />
      <MobileHero />

      <style>{HERO_KEYFRAMES}</style>
    </section>
  );
}

function HeroOverlay() {
  return (
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
  );
}

function DesktopHero() {
  return (
    <div className="relative z-20 hidden h-full items-end px-16 pb-20 md:flex">
      <div className="flex w-full items-end justify-between" style={HERO_ANIMATION_STYLE}>
        <div className="max-w-[640px]">
          <WorkshopBadge mobile={false} />
          <HeroHeadline mobile={false} />
          <HeroDescription mobile={false} />
          <CtaButton />
        </div>

        <div className="flex flex-col gap-3 pb-1">
          {HERO_BADGES.map(({ icon: Icon, text }) => (
            <InfoBadge key={text} icon={<Icon size={16} />} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="relative z-20 flex flex-col md:hidden">
      <div className="flex flex-1 items-end px-6 pb-8">
        <div style={MOBILE_HERO_ANIMATION_STYLE}>
          <WorkshopBadge mobile />
          <HeroHeadline mobile />
          <HeroDescription mobile />
        </div>
      </div>

      <div className="relative z-20 flex flex-col gap-4 px-6 pb-10 pt-6" style={MOBILE_CTA_PANEL_STYLE}>
        <div className="flex flex-col gap-2.5">
          {HERO_BADGES.map(({ icon: Icon, text }) => (
            <InfoBadge key={text} icon={<Icon size={16} />} text={text} />
          ))}
        </div>

        <BorderGlow {...MOBILE_CTA_GLOW_PROPS} className="border-glow-plain mt-2 w-full">
          <button style={MOBILE_CTA_BUTTON_STYLE}>Claim Your Spot</button>
        </BorderGlow>
      </div>
    </div>
  );
}

function WorkshopBadge({ mobile }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 ${
        mobile ? "mb-4 px-3 py-1" : "mb-6 px-4 py-1.5"
      }`}
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: mobile ? "blur(8px)" : "blur(12px)",
      }}
    >
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full"
        style={{ background: "var(--secondary)" }}
      />
      <span
        className={`font-semibold uppercase ${
          mobile ? "text-[10px] tracking-[0.16em]" : "text-xs tracking-[0.18em]"
        }`}
        style={{ color: mobile ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.7)" }}
      >
        {mobile ? "Live Workshop" : "Live Workshop · Limited Seats"}
      </span>
    </div>
  );
}

function HeroHeadline({ mobile }) {
  return (
    <h1 style={mobile ? MOBILE_HERO_TITLE_STYLE : HERO_TITLE_STYLE}>
      Master ChatGPT &amp;{" "}
      <BlurText
        text="15+ AI Tools"
        as="span"
        delay={300}
        animateBy="words"
        direction="top"
        className="inline-flex"
        segmentStyle={HIGHLIGHT_TEXT_STYLE}
        animationFrom={HIGHLIGHT_ANIMATION_FROM}
        animationTo={HIGHLIGHT_ANIMATION_TO}
        stepDuration={0.28}
      />{" "}
      in Just 3 Hours
    </h1>
  );
}

function HeroDescription({ mobile }) {
  return (
    <p style={mobile ? MOBILE_HERO_DESCRIPTION_STYLE : HERO_DESCRIPTION_STYLE}>
      Join{" "}
      <strong
        style={{
          color: mobile ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.95)",
          fontWeight: 600,
        }}
      >
        10M+ professionals
      </strong>{" "}
      who&apos;ve transformed their productivity, automated tedious work, and future-proofed
      their careers&apos;all in one live workshop.
    </p>
  );
}

function AboutSection() {
  return (
    <section className="w-full px-6 py-24 md:px-12 md:py-32" style={ABOUT_SECTION_STYLE}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-32 flex flex-col items-end justify-between gap-12 md:flex-row">
          <div className="max-w-[650px] flex-1">
            <p
              className="mb-6 text-sm font-bold uppercase tracking-widest"
              style={{ color: "var(--tertiary)" }}
            >
              In 16-Weeks
            </p>

            <h2
              className="mb-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
              style={{ color: "var(--foreground)" }}
            >
              Master AI. Build <br /> Smarter. Become a PM.
            </h2>

            <p className="text-lg leading-relaxed md:text-xl" style={ABOUT_COPY_STYLE}>
              PMs who know how to leverage AI will have an unfair advantage in the next
              decade. This program isn&apos;t about memorizing frameworks&apos;it&apos;s about mastering
              the real skills that top companies want.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 md:min-w-[320px] md:w-auto">
            <EnrollmentCard />
            <div className="flex gap-4">
              {STAT_CARDS.map(({ value, label, icon: Icon, color }) => (
                <StatCard
                  key={label}
                  value={value}
                  label={label}
                  icon={<Icon size={14} />}
                  color={color}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BENEFIT_CARDS.map(({ icon: Icon, iconClassName, title, content, accent }) => (
            <BenefitCard
              key={title}
              icon={<Icon className={iconClassName} size={32} />}
              title={title}
              content={content}
              accent={accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollmentCard() {
  return (
    <div
      className="rounded-3xl border p-8"
      style={{ background: "var(--primary)", borderColor: "var(--secondary)" }}
    >
      <div className="mb-4 flex items-center gap-2">
        <CalendarDays size={16} style={{ color: "var(--tertiary)" }} />
        <span
          className="text-xs font-black uppercase tracking-widest"
          style={{ color: "var(--tertiary)" }}
        >
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
  );
}

function StatCard({ value, label, icon, color = "tertiary" }) {
  const accentColor = color === "tertiary" ? "var(--tertiary)" : "var(--secondary)";

  return (
    <div className="flex-1 rounded-2xl border border-white/5 p-6" style={{ background: "var(--primary)" }}>
      <div className="mb-3 text-4xl font-black" style={{ color: accentColor }}>
        {value}
      </div>

      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
        {icon} {label}
      </div>
    </div>
  );
}

function BenefitCard({ title, content, accent, icon }) {
  return (
    <div className="group rounded-[2.5rem] border border-white/5 bg-white/5 p-10 transition-all duration-500 hover:border-white/20">
      <div className="mb-8 w-fit rounded-2xl border border-white/10 bg-white/5 p-4">
        {icon}
      </div>

      <div className="mb-8 h-1.5 w-12 rounded-full transition-all group-hover:w-24" style={{ background: accent }} />

      <h3 className="mb-4 text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
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
      colors={[
        "rgba(90,155,104,0.95)",
        "rgba(63,116,78,0.88)",
        "rgba(133,199,145,0.82)",
      ]}
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
