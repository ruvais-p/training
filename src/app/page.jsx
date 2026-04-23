"use client";

import { ShieldCheck, Sparkles, Zap, ArrowRight, MessageCircle } from "lucide-react";
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
  { name: "Postman", accent: "#FF6C37", imageSrc: "/hacking_tools/Postman icon.png", description: "API testing tool used in cybersecurity for secure API development, testing, and vulnerability analysis." },
  { name: "w3af", accent: "#E67E22", imageSrc: "/hacking_tools/W3af icon.webp", description: "Web application attack and audit framework used in penetration testing to find security vulnerabilities." },
  { name: "Wifite", accent: "#607D8B", imageSrc: "/hacking_tools/WIFIte.webp", description: "Automated wireless auditing tool used in cybersecurity for WiFi penetration testing and network security analysis." },
  { name: "Wireshark", accent: "#2A6E91", imageSrc: "/hacking_tools/Wireshark icon.webp", description: "Network protocol analyzer used in cybersecurity to monitor, analyze, and troubleshoot network traffic." },
  { name: "Nexpose", accent: "#EE2E31", imageSrc: "/hacking_tools/nexpose icon.png", description: "Vulnerability management tool used in cybersecurity for risk assessment and security analysis." },
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
      {/* Local Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/home_page/hero_section_video (1).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
          <HeroButtons />
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
          <HeroButtons mobile />
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
      Kerala's AI-Integrated {" "}
      <BlurText
        text="Cybersecurity & AI/ML"
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
      Cohort Program
    </h1>
  );
}

function HeroDescription({ mobile }) {
  return (
    <p style={mobile ? mobileDescStyle : descStyle}>
      A fully online, 6-month cohort-based{" "}
      <strong
        style={{
          color: mobile ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.95)",
          fontWeight: 600,
        }}
      >
        Cybersecurity & AI/ML program
      </strong>{" "}
      built for career outcomes, not just certificates. Live mentorship from industry professionals, HR-led interview prep, hardware hacking labs and support.{" "}

    </p>
  );
}

function HeroButtons({ mobile }) {
  return (
    <div className={`flex flex-wrap gap-4 ${mobile ? "mt-6" : "mt-8"}`}>
      <a
        href="https://www.airtribe.live/backend-engineering/apply"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pinstripe group h-14 px-8 bg-[#14CF6D] rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_12px_30px_-10px_rgba(20,207,109,0.4)]"
      >
        <span className="text-black font-mono font-bold text-sm tracking-tight uppercase relative z-10">
          Claim Your Seat
        </span>

      </a>

      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pinstripe group h-14 px-8 bg-[#14CF6D] rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_12px_30px_-10px_rgba(20,207,109,0.4)]"
      >
        <div className="relative z-10 flex items-center gap-3">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-white font-sans font-bold text-sm tracking-tight">
            Chat on WhatsApp
          </span>
        </div>
      </a>
    </div>
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
