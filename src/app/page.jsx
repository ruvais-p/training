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
import PreAboutSection from "@/components/PreAboutSection";
import LearningProblemsSection from "@/components/LearningProblemsSection";




const skillItems = [
  { name: "ChatGPT", accent: "#10a37f", imageSrc: "/Skills/chatgpt-icon.webp", description: "AI-powered assistant used in cybersecurity training for automation, scripting, and threat analysis in modern security workflows." },
  { name: "Claude AI", accent: "#D97757", imageSrc: "/Skills/claude-ai-icon.webp", description: "Advanced AI model used in cybersecurity for secure coding, analysis, and AI-driven security workflows." },
  { name: "LangChain", accent: "#1C3C3C", imageSrc: "/Skills/langchain-color.png", description: "Framework for building AI-powered cybersecurity tools and automation workflows used in modern security engineering." },
  { name: "LangFlow", accent: "#3B82F6", imageSrc: "/Skills/langflow New.webp", description: "Visual tool for designing AI workflows, widely used in cybersecurity automation and pipeline development." },
  { name: "LangGraph", accent: "#F97316", imageSrc: "/Skills/langchain new.webp", description: "Graph-based AI orchestration tool used in advanced cybersecurity systems and automation workflows." },
  { name: "OpenClaw", accent: "#E11D48", imageSrc: "/Skills/openclaw.webp", description: "Open-source cybersecurity tool used for automation, ethical hacking, and security testing workflows." },
];

const hackingTools = [
  { name: "Aircrack-ng", accent: "#00A6D6", imageSrc: "/hacking_tools/Air crack.webp", description: "WiFi security auditing tool used in ethical hacking and penetration testing for password cracking and network analysis." },
  { name: "BloodHound", accent: "#E31B23", imageSrc: "/hacking_tools/Blood Hound.webp", description: "Active Directory security tool used in cybersecurity to analyze attack paths in enterprise networks." },
  { name: "Burp Suite", accent: "#FF6633", imageSrc: "/hacking_tools/Burp icon.webp", description: "Web application security testing tool used in cybersecurity to identify vulnerabilities and perform penetration testing." },
  { name: "Frida", accent: "#6E57E0", imageSrc: "/hacking_tools/Frida icon.webp", description: "Dynamic instrumentation toolkit used in cybersecurity for runtime analysis, reverse engineering, and security testing." },
  { name: "Ghidra", accent: "#2F2F2F", imageSrc: "/hacking_tools/Ghidra.webp", description: "Reverse engineering tool used in malware analysis and cybersecurity research for vulnerability discovery." },
  { name: "Hashcat", accent: "#FBC02D", imageSrc: "/hacking_tools/Hashcat.webp", description: "High-performance password cracking tool used in ethical hacking and cybersecurity training for password security testing." },
  { name: "JADX", accent: "#5C6BC0", imageSrc: "/hacking_tools/JADX.webp", description: "Decompiler tool used in mobile security and cybersecurity to analyze Android applications and detect vulnerabilities." },
  { name: "John the Ripper", accent: "#8D6E63", imageSrc: "/hacking_tools/John the Ripper.webp", description: "Password cracking tool used in ethical hacking and cybersecurity training to test password strength and security." },
  { name: "Metasploit", accent: "#3D7E9A", imageSrc: "/hacking_tools/Metasploit icon.webp", description: "Industry-standard penetration testing framework used in ethical hacking to exploit vulnerabilities and test system security." },
  { name: "MobSF", accent: "#34495E", imageSrc: "/hacking_tools/MobSF icon.webp", description: "Mobile security framework used for analyzing Android and iOS applications in cybersecurity and penetration testing." },
  { name: "Nessus", accent: "#004D9D", imageSrc: "/hacking_tools/Nessus icon.webp", description: "Vulnerability scanning tool used in cybersecurity to detect and manage security risks in systems and networks." },
  { name: "Nikto", accent: "#9B59B6", imageSrc: "/hacking_tools/Nikto icon.webp", description: "Web server scanning tool used in cybersecurity to identify vulnerabilities and misconfigurations in web applications." },
  { name: "Nmap", accent: "#5087CE", imageSrc: "/hacking_tools/Nmap icon.webp", description: "Network scanning tool used in cybersecurity and ethical hacking to discover hosts, services, and vulnerabilities." },
  { name: "Postman", accent: "#FF6C37", imageSrc: "/hacking_tools/Postman icon.webp", description: "API testing tool used in cybersecurity for secure API development, testing, and vulnerability analysis." },
  { name: "w3af", accent: "#E67E22", imageSrc: "/hacking_tools/W3af icon.webp", description: "Web application attack and audit framework used in penetration testing to find security vulnerabilities." },
  { name: "Wifite", accent: "#607D8B", imageSrc: "/hacking_tools/WIFIte.webp", description: "Automated wireless auditing tool used in cybersecurity for WiFi penetration testing and network security analysis." },
  { name: "Wireshark", accent: "#2A6E91", imageSrc: "/hacking_tools/Wireshark icon.webp", description: "Network protocol analyzer used in cybersecurity to monitor, analyze, and troubleshoot network traffic." },
  { name: "Nexpose", accent: "#EE2E31", imageSrc: "/hacking_tools/nexpose icon.webp", description: "Vulnerability management tool used in cybersecurity for risk assessment and security analysis." },
];

const placementPartners = [
  { name: "Gladius & Schild", accent: "#2A6E91", imageSrc: "/placement_partner/Gladius & Schild  2.webp" },
  { name: "Tofence", accent: "#EE2E31", imageSrc: "/placement_partner/Tofence.webp" },
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
      <section id="cybersecurity-cohort">
        <h2 className="sr-only">Cybersecurity Cohort Program Kerala | YACS — 4 Months Online</h2>
        <HeroSection />
      </section>

      {/* <PreAboutSection /> */}
      {/* <LearningProblemsSection /> */}

      <section id="mentors">
        <h2 className="sr-only">Expert Cybersecurity Mentors | YACS Kerala Program</h2>
        <AboutSection />
      </section>

      <SectionReveal delay={80}>
        <section id="ai-ml-cohort">
          <h2 className="sr-only">AI & ML Cohort Program Kerala | YACS — Online, Beginner Friendly</h2>
          <AudienceSection />
        </section>
      </SectionReveal>

      <StandOutSection />

      <section id="certifications">
        <h2 className="sr-only">CompTIA Security+, CEH Certification Prep | YACS Kerala</h2>
        <WhatYouGetInside />
      </section>

      <section id="placement">
        <h2 className="sr-only">Cybersecurity Job Placement Support Kerala | YACS Career Coaching</h2>
        <CareerAndGrowthSupport />
      </section>

      <section id="curriculum">
        <h2 className="sr-only">Cybersecurity Course Curriculum | 4-Phase Program | YACS Kerala</h2>
        <Methodology />
      </section>

      <CommunityExperience />
      <Investors />

      {/* <SectionReveal delay={100}>
        <Testimonial />
      </SectionReveal> */}

      <SectionReveal delay={100}>
        <SkillStack
          eyebrow="SKILL STACK"
          title="Major Tools you will learn"
          items={skillItems}
        />
        <SkillStack
          eyebrow="BECOME PRO"
          title="Hacking Tools you will learn"
          items={hackingTools}
        />
      </SectionReveal>

      <SectionReveal delay={100}>
        <PlacementPartners partners={placementPartners} />
      </SectionReveal>

      <section id="faq">
        <h2 className="sr-only">Cybersecurity Course FAQ Kerala | YACS Program Questions</h2>
        <FAQ />
      </section>

      <section id="apply">
        <h2 className="sr-only">Apply Now | YACS Cybersecurity Cohort Kerala — Limited Seats</h2>
        <SectionReveal>
          <Footer />
        </SectionReveal>
      </section>

      {/* Course Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "AI-Integrated Cybersecurity Cohort Program",
            "description": "4-month online cohort in Kerala. Live mentors, HR coaching, CompTIA/CEH vouchers.",
            "provider": {
              "@type": "Organization",
              "name": "YACS",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kozhikode",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              }
            },
            "courseMode": "online",
            "timeRequired": "P4M",
            "educationalCredentialAwarded": "CompTIA Security+, CEH Readiness"
          })
        }}
      />
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
    <div className="relative z-20 hidden h-full items-center lg:items-end px-8 md:px-12 lg:px-16 pb-20 md:flex">
      <div
        className="flex w-full flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-0"
        style={{ animation: "heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="max-w-[720px] text-center lg:text-left">
          <HeroHeadline mobile={false} />
          <HeroDescription mobile={false} />
        </div>

        <div className="flex flex-col gap-3 pb-1 items-center lg:items-end">
          <InfoBadge text="Train Like a Pro." />
          <InfoBadge text="Think Like a Hacker." />
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
        </div>
      </div>

      <div
        className="relative z-20 flex flex-col gap-4 px-6 pb-10 pt-6"
        style={{ background: "transparent", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex flex-col gap-2.5">
          <InfoBadge text="Train Like a Pro." mobile />
          <InfoBadge text="Think Like a Hacker." mobile />
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
      Join a{" "}
      <strong
        style={{
          color: mobile ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.95)",
          fontWeight: 600,
        }}
      >
        AI-powered Cybersecurity Course in Kerala
      </strong>{" "}
      designed for real-world skills, hands-on projects, and career-focused mentorship.
      This cohort-based cybersecurity training program is accessible across Kerala,
      including Kozhikode (Calicut), with structured learning, expert mentors,
      and strong peer collaboration.
    </p>
  );
}
function InfoBadge({ text, mobile }) {
  const [first, ...rest] = text.split(" ");

  return (
    <div className="flex items-center gap-4 group">

      {/* Text */}
      <p
        className="leading-none"
        style={{
          fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
          fontStyle: "italic",
          fontSize: mobile ? "1.5rem" : "clamp(2rem, 3.8vw, 3rem)",   // 🔥 dynamic scaling for tablet/desktop
          fontWeight: 300,
          letterSpacing: "0.03em",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        <span style={{ color: "#5A9B68" }}>{first}</span>{" "}
        <span className="opacity-80">{rest.join(" ")}</span>
      </p>
    </div>
  );
}
