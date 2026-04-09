"use client";

import { ShieldCheck, Sparkles, Zap } from "lucide-react";
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
import PlacementPartners from "@/components/PlacementPartners";


const heroBadges = [
  { icon: Sparkles, text: "AI-Integrated Learning" },
  { icon: ShieldCheck, text: "Real-World Projects" },
  { icon: Zap, text: "Career-Focused Training" },
];

const skillItems = [
  { name: "ChatGPT", accent: "#10a37f", imageSrc: "/Skills/chatgpt-icon.png" },
  { name: "Claude AI", accent: "#D97757", imageSrc: "/Skills/claude-ai-icon.png" },
  { name: "LangChain", accent: "#1C3C3C", imageSrc: "/Skills/langchain-color.png" },
  { name: "LangFlow", accent: "#3B82F6", imageSrc: "/Skills/langflow.png" },
  { name: "LangGraph", accent: "#F97316", imageSrc: "/Skills/langgraph-color.png" },
  { name: "OpenClaw", accent: "#E11D48", imageSrc: "/Skills/openclaw.png" },
];

const hackingTools = [
  { name: "Burp Suite", accent: "#FF6633", imageSrc: "/hacking_tools/Burp icon.jpeg" },
  { name: "Frida", accent: "#6E57E0", imageSrc: "/hacking_tools/Frida icon.png" },
  { name: "Metasploit", accent: "#3D7E9A", imageSrc: "/hacking_tools/Metasploit icon.jpg" },
  { name: "MobSF", accent: "#34495E", imageSrc: "/hacking_tools/MobSF icon.png" },
  { name: "Nessus", accent: "#004D9D", imageSrc: "/hacking_tools/Nessus icon.png" },
  { name: "Nikto", accent: "#9B59B6", imageSrc: "/hacking_tools/Nikto icon.jpg" },
  { name: "Nmap", accent: "#5087CE", imageSrc: "/hacking_tools/Nmap icon.png" },
  { name: "Postman", accent: "#FF6C37", imageSrc: "/hacking_tools/Postman icon.png" },
  { name: "w3af", accent: "#E67E22", imageSrc: "/hacking_tools/W3af icon.png" },
  { name: "Wireshark", accent: "#2A6E91", imageSrc: "/hacking_tools/Wireshark icon.png" },
  { name: "Nexpose", accent: "#EE2E31", imageSrc: "/hacking_tools/nexpose icon.png" },
];

const placementPartners = [
  { name: "Gladius & Schild", accent: "#2A6E91", imageSrc: "/placement_partner/Gladius & Schild 2.png" },
  { name: "Tofence", accent: "#EE2E31", imageSrc: "/placement_partner/Tofence.png" },
];

const titleStyle = {
  fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)",
  fontWeight: 800,
  color: "#ffffff",
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  marginBottom: "1.5rem",
  textShadow: "0 4px 40px rgba(0,0,0,0.6)",
};

const mobileTitleStyle = {
  fontSize: "2.1rem",
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  marginBottom: "1.2rem",
};

const descStyle = {
  fontSize: "1.15rem",
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.72)",
  marginBottom: "2.5rem",
  maxWidth: "520px",
  fontWeight: 400,
};

const mobileDescStyle = {
  fontSize: "1rem",
  lineHeight: 1.65,
  color: "rgba(255,255,255,0.7)",
  fontWeight: 400,
};

const heroKeyframes = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip font-sans" style={{ maxWidth: "100%" }}>
      <HeroSection />

      <AboutSection />

      <SectionReveal delay={80}>
        <AudienceSection />
      </SectionReveal>

      <StandOutSection />

      <WhatYouGetInside />

      <CareerAndGrowthSupport />


      <Methodology />

      <CommunityExperience />

      <SectionReveal delay={100}>
        <Investors />
      </SectionReveal>

      {/* <SectionReveal delay={100}>
        <Testimonial />
      </SectionReveal> */}

      <SectionReveal delay={100}>
        <SkillStack
          eyebrow="SKILL STACK"
          title="Tools you will learn"
          items={skillItems}
        />
        <SkillStack
          eyebrow=""
          title="Hacking Tools you will learn"
          items={hackingTools}
        />
      </SectionReveal>

      <SectionReveal delay={100}>
        <PlacementPartners partners={placementPartners} />
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
      {/* YouTube Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/tC8h6Y31yKg?autoplay=1&mute=1&controls=0&loop=1&playlist=tC8h6Y31yKg&modestbranding=1&rel=0&playsinline=1&showinfo=0&iv_load_policy=3"
          title="Hero Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <HeroOverlay />
      <DesktopHero />
      <MobileHero />

      <style>{heroKeyframes}</style>
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
      <div
        className="flex w-full items-end justify-between"
        style={{ animation: "heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="max-w-[640px]">
          <HeroHeadline mobile={false} />
          <HeroDescription mobile={false} />
          <div className="mt-4">
            <CtaButton />
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-1">
          {heroBadges.map(({ text }) => (
            <InfoBadge key={text} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="relative z-20 flex h-full flex-col px-6 pb-16 pt-[9rem] md:hidden">
      <div className="flex-1 items-end">
        <div style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both" }}>
          <HeroHeadline mobile />
          <HeroDescription mobile />
          <div className="mt-6">
            <CtaButton />
          </div>
        </div>
      </div>

      <div
        className="relative z-20 flex flex-col gap-4 px-6 pb-10 pt-6"
        style={{ background: "transparent", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex flex-col gap-2.5">
          {heroBadges.map(({ text }) => (
            <InfoBadge key={text} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroHeadline({ mobile }) {
  return (
    <h1
      className="font-editorial-regular"
      style={{
        ...(mobile ? mobileTitleStyle : titleStyle),
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
        animationFrom={{ filter: "blur(10px)", opacity: 0, y: -22 }}
        animationTo={[
          { filter: "blur(4px)", opacity: 0.65, y: 4 },
          { filter: "blur(0px)", opacity: 1, y: 0 },
        ]}
        stepDuration={0.28}
      />{" "}
      {mobile && <br />}
      Expert
    </h1>
  );
}

function HeroDescription({ mobile }) {
  return (
    <p style={mobile ? mobileDescStyle : descStyle}>
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

function InfoBadge({ text }) {
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
            fontSize: "0.92rem",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "rgba(255,255,255,0.95)",
            fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
            textTransform: "none",
          }}
        >
          {text}
        </span>
      </div>
    </BorderGlow>
  );
}
