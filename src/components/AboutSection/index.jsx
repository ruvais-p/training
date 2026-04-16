"use client";

import React from "react";
import BlurText from "@/components/BlurText";

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

    {/* Brand Gradient Overlay */}
    <div
      className="absolute inset-0 w-[85%] md:w-[70%] opacity-80"
      style={gradientStyle}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4">
      <StarIcon className={`h-8 w-8 ${iconColor}`} />
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

export default function AboutSection() {
  const p1 = "Most cybersecurity programs teach you tools. We teach you how to think like a security professional from day one. This is a 4 month, fully online, cohort based program built around AI-integrated training, real world attack scenarios, and career support that doesn't stop at graduation.";
  const p2 = "You won't sit through lectures and memorise theory. You'll be trained by mentors with 5+ years of live industry experience, guided by AI Security Engineers shaping the future of defence, and coached by real HR professionals who know exactly what hiring teams look for.";

  const cardGradient = {
    background: "linear-gradient(90deg, rgba(217, 227, 138,0.78) 0%, rgba(90,155,104,0.55) 45%, rgba(90,155,104,0.12) 100%)",
  };
  const cardBgImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop";

  return (
    <section id="about" className="relative px-6 py-24 md:px-12 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2
            className="font-editorial-regular text-[2.5rem] md:text-[4.5rem] leading-[0.95] tracking-[-0.05em]"
            style={{
              color: "#f3f7f3",
              fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
            }}
          >
            About the{" "}
            <BlurText
              text="Program"
              as="span"
              delay={300}
              className="font-editorial-italic"
              segmentStyle={{
                color: "var(--tertiary)",
                fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 200,
              }}
            />
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:auto-rows-fr">
          
          {/* Container 1: Headline (Transparent) */}
          <div className="flex flex-col justify-center p-4">
            <h3 className="text-[2.5rem] md:text-[4rem] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
              This Isn't a Course. It's a Career Launch.
            </h3>
            <h4 className="text-[1.5rem] md:text-[2rem] font-bold text-white/80 leading-tight">
              Built on Real Outcomes. Not Empty Promises.
            </h4>
          </div>

          {/* Container 2: Paragraph 1 (TopCard Style) */}
          <Card 
            title="The Logic"
            description={p1}
            gradientStyle={cardGradient}
            bgImage={cardBgImage}
            iconColor="text-white"
          />

          {/* Container 3: Paragraph 2 (TopCard Style) */}
          <Card 
            title="The Mentors"
            description={p2}
            gradientStyle={cardGradient}
            bgImage={cardBgImage}
            iconColor="text-white"
          />

          {/* Container 4: Tagline (Transparent) */}
          <div className="flex items-center justify-center lg:justify-start p-8">
            <div className="flex items-center gap-6">
              <span className="text-[6rem] md:text-[10rem] font-black text-white/5 leading-none select-none">
                THE
              </span>
              <div className="flex flex-col text-3xl md:text-[3.5rem] font-bold text-white/90 leading-[1.1] tracking-tighter">
                <span>skills.</span>
                <span>proof.</span>
                <span>career.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}