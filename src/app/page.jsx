"use client";

import {
  ShieldCheck,
  Sparkles,
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
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import CareerAndGrowthSupport from "@/components/CareerAndGrowthSupport";

import WhatYouGetInside from "@/components/WhatYouGetInside";
import CommunityExperience from "@/components/CommunityExperience";
import StandOutSection from "@/components/StandOut";

const HERO_BADGES = [
  { icon: Sparkles, text: "AI-Integrated Learning" },
  { icon: ShieldCheck, text: "Real-World Projects" },
  { icon: Zap, text: "Career-Focused Training" },
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

      <StandOutSection />

      <SectionReveal delay={80}>
        <AudienceSection />
      </SectionReveal>

      <WhatYouGetInside />

      <CareerAndGrowthSupport />

      <CommunityExperience />

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

      <FAQ />



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
      Become A Top 1%   {" "}
      <BlurText
        text="CyberSecurity"
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
      Expert
    </h1>
  );
}

function HeroDescription({ mobile }) {
  return (
    <p style={mobile ? MOBILE_HERO_DESCRIPTION_STYLE : HERO_DESCRIPTION_STYLE}>
      Master{" "}
      <strong
        style={{
          color: mobile ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.95)",
          fontWeight: 600,
        }}
      >
        AI powered Cybersecurity
      </strong>{" "}
      with real-world training, real world  mentors, and career-focused
      support. Cohort-Based Program - Learn in a structured batch with guided mentorship and peer collaboration.
    </p>
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
          justifyContent: "center",
          padding: "0.95rem 1.6rem",
          borderRadius: "18px",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <span
          className="font-editorial-regular"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            color: "rgba(255,255,255,0.95)",
            fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
            textTransform: "none",
          }}
        >
          <span style={{ color: "var(--tertiary)" }}>{icon}</span>
          {text}
        </span>
      </div>
    </BorderGlow>
  );
}
