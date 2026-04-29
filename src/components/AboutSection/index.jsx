"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import { Icon } from "@iconify/react";

const StarIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 1.5L13.5 10.5L22.5 12L13.5 13.5L12 22.5L10.5 13.5L1.5 12L10.5 10.5L12 1.5Z"
      fill="currentColor"
    />
  </svg>
);

const Card = ({ title, description, gradientStyle, bgImage, iconColor }) => (
  <div className="group relative flex h-full min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] p-8 md:p-10 transition-all duration-300 hover:border-white/20">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-lighten transition-transform duration-700 group-hover:scale-105"
      style={{ backgroundImage: `url(${bgImage})` }}
    />

    {/* Top Left Color Shade (Matching CohortCard style) */}
    <div
      className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl pointer-events-none"
      style={{ background: gradientStyle }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4">
      <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-white leading-none">
        {title}
      </h2>
    </div>

    {/* Footer Text */}
    <p className="relative z-10 max-w-[95%] text-[1rem] md:text-lg leading-relaxed text-white/90">
      {description}
    </p>
  </div>
);

const CohortCard = ({
  tag,
  tagColor,
  title,
  subtitle,
  features,
  buttonLabel,
  buttonColor,
  accentColor,
  isOnline,
}) => (
  <div
    className="relative flex flex-col justify-between rounded-[28px] 
    border border-white/10 bg-transparent backdrop-blur-xl
    p-8 transition-all duration-300 hover:border-white/20 group overflow-hidden"
    style={{ minHeight: "460px" }}
  >
    {/* ───── Background Layer ───── */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Accent Glow */}
      <div
        className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: accentColor }}
      />
    </div>

    {/* ───── Content ───── */}
    <div className="relative z-10 flex flex-col gap-5">

      {/* Tag & Online Indicator */}
      <div className="flex items-center gap-3">
        <span
          className="inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest backdrop-blur-md"
          style={{ borderColor: tagColor, color: tagColor }}
        >
          {tag}
        </span>
        {isOnline && (
          <span className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
            Online
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-[2rem] md:text-[2.4rem] font-black leading-[1.05] tracking-tight text-white whitespace-pre-line">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm leading-relaxed text-white/75 max-w-[95%]">
        {subtitle}
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-2 mt-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/80">
            <span
              className="mt-[3px] text-base leading-none"
              style={{ color: tagColor }}
            >
              .
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>

    {/* ───── CTA Button ───── */}
    <div className="relative z-10 mt-8">
      <a
        href="https://form.jotform.com/261102001781440"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center md:w-auto rounded-full px-6 py-3 text-sm font-bold tracking-wide text-black transition-all duration-300 hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]"
        style={{ background: buttonColor }}
      >
        {buttonLabel}
      </a>
    </div>
  </div>
);
export default function AboutSection() {
  const p1 = "Most cybersecurity courses in Kerala teach tools. We train you to think like a real security professional from day one. This 6-month, fully online cybersecurity cohort program in Kerala focuses on AI-integrated training, real-world attack scenarios, and career support beyond graduation, helping you build job-ready skills in ethical hacking.";

  const p2 = "No passive lectures or memorisation. In this AI-powered cybersecurity course in Kerala, you'll learn from experienced mentors, AI security engineers, and HR professionals who know what hiring teams expect-preparing you for real-world cybersecurity roles.";
  const cardGradient = "#00e5a0";
  const cardBgImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop";

  const cohorts = [
    { tag: "Cybersecurity Cohort", tagColor: "#00e5a0", accentColor: "#00e5a0", title: "AI Security \n& Ethical Hacking", subtitle: "Kerala's most advanced cybersecurity cohort. Learn to think like an attacker, defend like a pro. AI-integrated security training from mentors who've found bugs in Google, Microsoft, and Apple.", mentor: "Anil Tom — Lead Mentor", mentorMeta: "OSCP · OSEP · CRTO · eWPTX · BSCP · OSDA · 70+ companies hacked", features: ["Web Application Security (OWASP Top 10)", "Penetration Testing & Ethical Hacking", "Network Pentesting", "Mobile Security & Paper Presentation", "Hardware Hacking Labs (Unique to YACS)", "AI-Powered Security Automation", "Community Engagement", "Placement Support + HR Mock Interviews",], buttonLabel: "Apply for Cybersecurity", buttonColor: "#00e5a0", },
    {
      tag: "AI/ML Cohort",
      tagColor: "#38bdf8",
      accentColor: "#38bdf8",
      title: "AI & Machine\nLearning",
      subtitle:
        "Kerala's only AI/ML cohort with a security focus. Build, deploy, and secure AI-driven systems. Learn from a working data scientist building real ML pipelines, not recycled YouTube content.",
      mentor: "Akshay P — AI/ML Lead",
      mentorMeta:
        "Data Scientist · dSights AI · 4 yrs ML · AML Security specialist",
      features: [
        "Understand real-world AI, explore industry use cases, trends, and how companies actually deploy ML",
        "Core ML concepts, supervised, unsupervised & reinforcement learning with practical algorithm implementation",
        "Build AI applications, chatbots using LangChain, LangGraph, and agent-based AI systems",
        "End-to-end ML pipelines, data preprocessing → model training → deployment → scaling in production",
      ],
      buttonLabel: "Apply for AI/ML",
      buttonColor: "#38bdf8",
      isOnline: true,
    },
  ];

  return (
    <section id="about" className="relative px-6 pt-12 pb-8 md:px-12 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:auto-rows-fr">

          {/* ───────────── Container 1: Headline (Improved) ───────────── */}
          <div className="relative flex flex-col justify-center items-center text-center lg:items-end lg:text-right px-4 mb-6 lg:mb-0">

            {/* Background Glow */}
            <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,229,160,0.15),transparent_70%)] blur-3xl pointer-events-none" />

            {/* Headline */}
            <h3 className="relative z-10 text-[2.0rem] xs:text-[2.0rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[5rem] font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
              Your mentors <br />
              have{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5C3F] to-[#2D5C3F]">
                  hacked
                </span>
                {/* subtle glow underline */}
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-gradient-to-r from-[#00e5a0] to-[#2D5C3F] blur-md opacity-40" />
              </span>
            </h3>

            {/* Brand Scrolling Marquee */}
            <div className="relative z-10 w-full mt-4 md:mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex w-max animate-scroll gap-8 py-4 md:py-10 hover:[animation-play-state:paused] items-center">
                {/* Double the array for seamless loop */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {[
                      "Google", "Microsoft", "Apple", "Adobe", "Symantec", "Yahoo", "Oracle", "Kaspersky", "AT&T"
                    ].map((brand) => (
                      <div
                        key={`${i}-${brand}`}
                        className="relative group flex items-center justify-center px-4"
                      >
                        <img
                          src={`/hacked/${brand}.png`}
                          alt={brand}
                          className={`h-16 md:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-110 ${brand === "Apple" ? "brightness-0 invert" : ""}`}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <style jsx>{`
              @keyframes scroll {
                from { transform: translateX(0); }
                to { transform: translateX(calc(-50% - 1.5rem)); }
              }
              .animate-scroll {
                animation: scroll 35s linear infinite;
              }
            `}</style>
          </div>

          {/* ───────────── Container 2 ───────────── */}
          <Card
            title="The Logic"
            description={p1}
            gradientStyle={cardGradient}
            bgImage="/about/about_card_1.webp"
            iconColor="text-white"
          />

          {/* ───────────── Container 3 ───────────── */}
          <Card
            title="The Mentors"
            description={p2}
            gradientStyle={cardGradient}
            bgImage="/about/about_card_2.webp"
            iconColor="text-white"
          />

          <div className="flex items-center justify-center p-4 lg:p-8 overflow-hidden">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
              <span
                className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[5rem] xl:text-[8rem] font-black leading-none select-none text-transparent flex-shrink-0"
                style={{ WebkitTextStroke: "1.5px white", opacity: 0.2 }}
              >
                the
              </span>
              <div className="flex flex-col text-[1.5rem] sm:text-[2.2rem] md:text-[2rem] lg:text-[2rem] xl:text-[3.5rem] font-bold text-white/90 leading-[1.1] tracking-tighter">
                <span>skills.</span>
                <span>proof.</span>
                <span>career.</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Cohort Cards ── */}
        <div className="mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 px-4">
          {cohorts.map((cohort) => (
            <CohortCard key={cohort.tag} {...cohort} />
          ))}
        </div>

      </div>
    </section>
  );
}