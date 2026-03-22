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
import Methodology from "@/components/Methodology";
import SkillStack from "@/components/SkillStack";
import Testimonial from "@/components/Testimonial";
import Investors from "@/components/Investors";
import SectionReveal from "@/components/SectionReveal";
import AnimatedBenefitCard from "@/components/AnimatedBenefitCard";

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
    iconSrc: "/home_page/69943a0470a4c0034cac1220_Group-239788.svg",
    title: "10x Efficiency",
    content:
      "Master the art of AI orchestration to turn exhaustive tasks into instant workflows.",
    accent: "var(--tertiary)",
  },
  {
    iconSrc: "/home_page/69943a0484956dac1bb0d050_Group-240381.svg",
    title: "Strategic Thinking",
    content: "Move beyond prompts. Learn to integrate AI into product strategy.",
    accent: "var(--secondary)",
  },
  {
    iconSrc: "/home_page/69943a04de6ccc1c0a5efeae_Group-239780.svg",
    title: "Future-Proof",
    content: "Stay ahead of the disruption. Build skills that remain relevant.",
    accent: "var(--tertiary)",
  },
];

const SKILL_STACK_ITEMS = [
  { name: "Descript", accent: "#6ab0ff", imageSrc: "/Skills/t1.webp" },
  { name: "HeyGen", accent: "#8c7dff", imageSrc: "/Skills/t2.webp" },
  { name: "Tome", accent: "#f06be7", imageSrc: "/Skills/tome.webp" },
  { name: "ChatGPT", accent: "#5A9B68", imageSrc: "/Skills/Gpt.webp" },
  { name: "D-ID", accent: "#f3a35c", imageSrc: "/Skills/t5.webp" },
  { name: "vidyo.ai", accent: "#90a1ff", imageSrc: "/Skills/t6.webp" },
  { name: "Opus Clip", accent: "#f3f7f3", imageSrc: "/Skills/t7.webp" },
  { name: "InVideo", accent: "#ff6f93", imageSrc: "/Skills/t8.webp" },
  { name: "Midjourney", accent: "#c6d5cb", imageSrc: "/Skills/midjounrey.webp" },
  { name: "Engage AI", accent: "#7d93ff", imageSrc: "/Skills/t10.webp" },
  { name: "Humata", accent: "#b8d1bf", imageSrc: "/Skills/t11.webp" },
  { name: "Simplified", accent: "#ffb84d", imageSrc: "/Skills/t12.webp" },
  { name: "Uberduck", accent: "#ffd36a", imageSrc: "/Skills/t13.webp" },
  { name: "Feedly", accent: "#69b877", imageSrc: "/Skills/t14.webp" },
  { name: "Compose AI", accent: "#78c3ff", imageSrc: "/Skills/t15.webp" },
  { name: "Adobe Audition", accent: "#9688ff", imageSrc: "/Skills/t16.webp" },
  { name: "Gamma", accent: "#c4ef9b", imageSrc: "/Skills/t17.webp" },
  { name: "Claude", accent: "#d9b08a", imageSrc: "/Skills/t18.webp" },
];

const HERO_SECTION_STYLE = { background: "transparent" };
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
  background: "transparent",
  borderTop: "1px solid rgba(255,255,255,0.08)",
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
const ABOUT_SECTION_STYLE = { background: "transparent" };
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
    <main className="relative w-full overflow-x-clip font-sans" style={{ ...HERO_SECTION_STYLE, maxWidth: "100%" }}>
      <HeroSection />

      <AboutSection />

      <Methodology />

      <SectionReveal delay={100}>
        <Investors />
      </SectionReveal>

      <SectionReveal delay={100}>
        <Testimonial />
      </SectionReveal>

      <SectionReveal delay={100}>
        <SkillStack
          eyebrow="SKILL STACK"
          title="Tools you will learn"
          items={SKILL_STACK_ITEMS}
        />
      </SectionReveal>

      <SectionReveal delay={100}>
        <FAQ />
      </SectionReveal>

      <SectionReveal>
        <Footer />
      </SectionReveal>
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
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 ${mobile ? "mb-4 px-3 py-1" : "mb-6 px-4 py-1.5"
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
        className={`font-semibold uppercase ${mobile ? "text-[10px] tracking-[0.16em]" : "text-xs tracking-[0.18em]"
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
    <h1
      className="font-editorial-regular"
      style={{
        ...(mobile ? MOBILE_HERO_TITLE_STYLE : HERO_TITLE_STYLE),
        fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
        fontWeight: 400,
      }}
    >
      Master ChatGPT &amp;{" "}
      <BlurText
        text="15+ AI Tools"
        as="span"
        delay={500}
        animateBy="words"
        direction="top"
        className="font-editorial-italic inline-flex"
        segmentStyle={{
          color: "var(--tertiary)",
          fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
          fontStyle: "italic",
          fontWeight: 200,
        }}
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
    <section
      className="relative w-full px-6 py-24 md:px-12 md:py-32"
      style={ABOUT_SECTION_STYLE}
    >
      <div className="mx-auto max-w-7xl flex items-start w-full">
        <div className="sticky top-0 h-fit flex flex-col pt-[12vh] w-1/2 pr-8">
          <SectionReveal delay={100}>
            <div className="relative">
            <div
              className="pointer-events-none absolute -left-6 top-10 hidden h-48 w-48 rounded-full border lg:block"
              style={{ borderColor: "rgba(90,155,104,0.12)" }}
            />
            <p
              className="font-editorial-regular mb-6 text-sm uppercase tracking-widest"
              style={{ color: "var(--tertiary)", fontFamily: "var(--font-pp-editorial-regular), Georgia, serif" }}
            >
              In 16-Weeks
            </p>

            <h2
              className="font-editorial-regular mb-8 max-w-[10ch] text-5xl leading-[0.98] tracking-tight md:text-7xl"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                fontWeight: 400,
              }}
            >
              Master <span style={{ color: "var(--tertiary)", fontFamily: "var(--font-pp-editorial-italic), Georgia, serif", fontStyle: "italic", fontWeight: 200 }}>AI</span>. Build <br /> Smarter. Become a <span style={{ color: "var(--tertiary)", fontFamily: "var(--font-pp-editorial-italic), Georgia, serif", fontStyle: "italic", fontWeight: 200 }}>PM</span>.
            </h2>

            <p
              className="max-w-[32rem] text-lg leading-relaxed md:text-xl md:mb-12 mb-8"
              style={ABOUT_COPY_STYLE}
            >
              PMs who know how to leverage AI will have an unfair advantage in the next
              decade. This program isn&apos;t about memorizing frameworks&apos;it&apos;s about mastering
              the real skills that top companies want.
            </p>
          </div>

          <div className="relative w-full max-w-[32rem]">
            <div
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2.5rem] border lg:block"
              style={{ borderColor: "rgba(90,155,104,0.08)" }}
            />
            <div className="relative flex w-full flex-col gap-5 rounded-[2.4rem] border border-white/6 bg-white/[0.025] p-5 backdrop-blur-sm">
              <EnrollmentCard />
              <div className="grid grid-cols-2 gap-4">
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
        </SectionReveal>
      </div>

        <div className="flex flex-col gap-[28px] pt-[20vh] pb-[30vh] w-1/2 pl-8">
          {BENEFIT_CARDS.map(({ iconSrc, title, content, accent }, index) => (
            <AnimatedBenefitCard key={title} delayIndex={index}>
              <BenefitCard
                icon={<img src={iconSrc} alt={title} className="w-8 h-8 object-contain" />}
                title={title}
                content={content}
                accent={accent}
              />
            </AnimatedBenefitCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollmentCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border p-8"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(133,199,145,0.18), transparent 28%), linear-gradient(135deg, rgba(63,116,78,0.98) 0%, rgba(45,92,63,0.98) 100%)",
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 18px 44px rgba(0,0,0,0.18)",
      }}
    >
      <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="mb-4 flex items-center gap-2">
        <CalendarDays size={16} style={{ color: "rgba(196,239,155,0.95)" }} />
        <span
          className="text-xs font-black uppercase tracking-widest"
          style={{ color: "rgba(196,239,155,0.95)" }}
        >
          Enrolment Ends
        </span>
      </div>

      <div className="flex items-end gap-3 md:gap-4">
        <span
          className="font-editorial-regular text-[4.6rem] font-bold leading-none md:text-[5.2rem]"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
          }}
        >
          20
        </span>
        <span
          className="font-editorial-regular mb-2 text-4xl font-bold md:text-[2.8rem]"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
          }}
        >
          MAR
        </span>
      </div>
    </div>
  );
}

function StatCard({ value, label, icon, color = "tertiary" }) {
  const accentColor = color === "tertiary" ? "var(--tertiary)" : "var(--secondary)";

  return (
    <div
      className="relative overflow-hidden rounded-[1.6rem] border p-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(39,76,56,0.92) 0%, rgba(28,57,43,0.98) 100%)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
      />
      <div
        className="mb-3 font-editorial-regular text-4xl font-bold leading-none"
        style={{
          color: accentColor,
          fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
        }}
      >
        {value}
      </div>

      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/55">
        {icon} {label}
      </div>
    </div>
  );
}

function BenefitCard({ title, content, accent, icon }) {
  return (
    <div
      className="group relative overflow-hidden rounded-[2.5rem] border p-10 transition-all duration-500 hover:-translate-y-1 hover:border-white/12"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(90,155,104,0.1), transparent 24%), linear-gradient(180deg, rgba(21,40,34,0.96) 0%, rgba(18,35,30,0.98) 100%)",
        borderColor: "rgba(255,255,255,0.05)",
        boxShadow: "0 20px 44px rgba(0,0,0,0.12)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `${accent}22`, opacity: 0.55 }}
      />
      <div className="relative mb-8 flex w-fit items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        {icon}
      </div>

      <div
        className="mb-8 h-1.5 w-12 rounded-full transition-all duration-500 group-hover:w-24"
        style={{ background: accent }}
      />

      <h3
        className="font-editorial-regular mb-4 text-[2.2rem] leading-[0.95] tracking-tight"
        style={{
          color: "var(--foreground)",
          fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>

      <p
        className="font-editorial-regular max-w-[18rem] text-lg leading-relaxed text-white/52"
        style={{ fontFamily: "var(--font-pp-editorial-regular), Georgia, serif" }}
      >
        {content}
      </p>
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
