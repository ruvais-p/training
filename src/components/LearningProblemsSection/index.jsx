"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import FloatingContact from "@/components/FloatingContact";

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const comparisons = [
  {
    problem: "Scattered tutorials with no structure, no direction, and no clear endpoint.",
    solution: "A structured 4 month cohort with a clear, phase by phase progression built for outcomes.",
  },
  {
    problem: "No access to real industry experts only pre recorded lectures from people not in the field.",
    solution: "Live mentorship from working professionals with 5+ years of real industry experience.",
  },
  {
    problem: "Theory without practice courses that never let you touch real tools or real environments.",
    solution: "Every lab is built by industry experts based on real world scenarios.",
  },
  {
    problem: "Learning alone with no peers, no community, no one to push through the hard parts with.",
    solution: "An exclusive cohort community peers, mentors, and security professionals in it together.",
  },
  {
    problem: "No career path after you finish a course and still have no idea how to get hired.",
    solution: "HR-led career coaching, mock interviews, placement assistance, and referral network all built in from day one.",
  },
];

export default function LearningProblemsSection() {
  const [activeIdx, setActiveIdx] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((current) => (current + 1) % comparisons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 py-24 md:px-12 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="font-editorial-regular text-[2.5rem] md:text-[4rem] leading-[0.95] tracking-[-0.05em] text-white mb-6"
            style={{ fontFamily: "var(--font-pp-editorial-regular), Georgia, serif" }}
          >
            Learning Problems{" "}
            <BlurText
              text="We've All Faced."
              as="span"
              delay={300}
              animateBy="words"
              direction="top"
              className="font-editorial-italic inline-flex"
              segmentStyle={{
                color: "var(--tertiary)",
                fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 200,
              }}
              animationFrom={{ filter: "blur(10px)", opacity: 0, y: -18 }}
              animationTo={[
                { filter: "blur(4px)", opacity: 0.7, y: 2 },
                { filter: "blur(0px)", opacity: 1, y: 0 },
              ]}
              stepDuration={0.24}
            />
          </h2>

          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sound familiar? These are the exact reasons most people never break into cybersecurity even when they try hard.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-3xl border border-white/10 overflow-hidden bg-[#0a0a0a] shadow-2xl">

          {/* Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
            <div className="flex items-center gap-3 p-6 md:p-8 bg-[#1a1a1a] text-white/40 uppercase tracking-widest text-xs font-bold">
              <XIcon />
              Learning Problems We've All Faced
            </div>

            <div className="flex items-center gap-3 p-6 md:p-8 bg-white/5 text-tertiary md:text-[#a3e635] uppercase tracking-widest text-xs font-bold border-t md:border-t-0 md:border-l border-white/10">
              <CheckIcon />
              The YACS Way
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 ${index !== comparisons.length - 1 ? "border-b border-white/5" : ""
                }`}
            >
              {/* Problem */}
              <div className="p-6 md:p-8 text-white/60 text-sm md:text-base leading-relaxed border-b md:border-b-0 md:border-r border-white/5 bg-[#0d0d0d] md:bg-transparent">
                {item.problem}
              </div>

              {/* Solution */}
              <div
                className={`p-6 md:p-8 text-sm md:text-base leading-relaxed font-medium transition-all duration-500 ${activeIdx === index
                  ? `
                      bg-[var(--tertiary)] text-black
                      md:bg-[var(--tertiary)]/15 
                      md:text-[#a3e635]
                      md:shadow-[inset_0_0_20px_rgba(163,230,53,0.1)]
                    `
                  : `
                      bg-[var(--tertiary)]/90 text-black
                      md:bg-white/[0.03] md:text-white
                      hover:md:bg-white/[0.06]
                    `
                  }`}
              >
                {item.solution}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Heading */}
          <h3
            className="text-[2rem] md:text-[3rem] leading-[0.95] tracking-[-0.05em]"
            style={{
              fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 200,
              color: "var(--tertiary)",
            }}
          >
            Ready to fix that?
          </h3>

          {/* Actions */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-8">

            {/* Apply Button */}
            <a
              href="https://www.airtribe.live/backend-engineering/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full md:w-auto
                text-center
                bg-[#a3e635] text-black
        font-semibold text-lg
        px-6 py-3 rounded-xl
        transition-all duration-300
        hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]
        md:bg-transparent md:text-[#a3e635] md:px-0 md:py-0 md:rounded-none md:shadow-none md:hover:scale-100 md:hover:underline
              "
            >
              Secure Your Spot
            </a>

            {/* Divider (desktop only) */}
            <div className="h-8 w-[1px] bg-white/10 hidden md:block" />

            <FloatingContact isFloating={false} />
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a3e635]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}