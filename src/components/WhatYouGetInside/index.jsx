"use client";
import { motion } from "motion/react";
import BlurText from "@/components/BlurText";
import React from "react";

// The four-pointed sparkle icon used in the top headers
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

const TopCard = ({
  title,
  description,
  gradientStyle,
  bgImage,
  iconColor,
}) => (
  <div className="group relative flex h-[350px] md:h-[420px] w-full flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a] p-8 md:p-10 transition-all duration-300 hover:border-white/20">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 mix-blend-lighten transition-transform duration-700 group-hover:scale-105"
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
    <p className="relative z-10 max-w-[95%] text-[0.95rem] md:text-base leading-relaxed text-white/90">
      {description}
    </p>
  </div>
);

const BottomCard = ({ title, description }) => (
  <div className="flex flex-col gap-4 rounded-[20px] bg-[#141414] p-6 md:p-8 border border-white/5 transition-colors hover:bg-[#1a1a1a]">
    <h3 className="text-xl md:text-[1.35rem] font-semibold tracking-tight text-white">
      {title}
    </h3>
    <p className="text-sm md:text-[0.95rem] leading-relaxed text-[#a1a1aa]">
      {description}
    </p>
  </div>
);

const benefits = [
  {
    title: "Industry-Ready Portfolio & Personal Branding",
    description:
      "Build a powerful profile that showcases real skills and makes you stand out to recruiters",
  },
  {
    title: "Exclusive Community & High-Value Networking",
    description:
      "Get access to a focused community of learners, mentors, and professionals",
  },
  {
    title: "Real-World Cybersecurity Projects",
    description:
      "Work on practical scenarios based on real industry use cases",
  },
  {
    title: "Live Mentorship from Industry Experts",
    description:
      "Learn directly from professionals actively working in cybersecurity",
  },
  {
    title: "Hands-On Practical Training",
    description:
      "Apply what you learn through guided labs and real-time problem solving",
  },
  {
    title: "Access to Professional Tools & Resources",
    description:
      "Train using tools and environments used in real security roles",
  },
  {
    title: "Mock Interviews with Real Company HRs",
    description:
      "Get evaluated and guided by actual HR professionals to improve your interview performance",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent px-4 py-16 md:px-8 lg:px-12 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2
            className="font-editorial-regular text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-white md:text-[4rem]"
            style={{
              fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
              fontWeight: 400,
            }}
          >
            What You Get{" "}
            <BlurText
              text="Inside"
              as="span"
              delay={400}
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
        </div>

        <div className="mx-auto max-w-[1400px]">
          {/* Top Row - 2 Main Highlight Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TopCard
              title="Program"
              description="Master the full LIT curriculum through structured, hands-on learning built on the LIT Learning Methodology."
              gradientStyle={{
                background:
                  "linear-gradient(90deg, rgba(90,155,104,0.78) 0%, rgba(217, 227, 138,0.55) 45%, rgba(59,130,246,0.12) 100%)",
              }}
              bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
              iconColor="text-[#FFFFFF]"
            />

            <TopCard
              title="Gigs"
              description="Apply your skills in the real world by completing gigs that match your level and build your creator career portfolio."
              gradientStyle={{
                background:
                  "linear-gradient(90deg, rgba(217, 227, 138,0.78) 0%, rgba(90,155,104,0.55) 45%, rgba(90,155,104,0.12) 100%)",
              }}
              bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              iconColor="text-[#FFFFFF]"
            />
          </div>

          {/* Blueprint Style Divider Line with Ticks */}
          <div className="relative my-8 hidden h-[1px] w-full bg-white/10 lg:block">
            <div className="absolute left-[25%] top-[-4px] h-[9px] w-[1px] bg-white/30" />
            <div className="absolute left-[50%] top-[-4px] h-[9px] w-[1px] bg-white/30" />
            <div className="absolute left-[75%] top-[-4px] h-[9px] w-[1px] bg-white/30" />
          </div>

          {/* Responsive gap fallback for mobile */}
          <div className="h-6 lg:hidden" />

          {/* Bottom Row - Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BottomCard
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 flex flex-col items-center justify-center gap-5 text-center md:flex-row md:text-left">
          <p
            className="max-w-2xl text-[1rem] md:text-[1.08rem] leading-7 md:leading-8"
            style={{
              color: "rgba(232,245,239,0.72)",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            Go from learning cybersecurity to actually proving your skills with projects, mentorship, and real-world practice.
          </p>

          <motion.a
            href="https://www.airtribe.live/backend-engineering/apply"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            style={{
              background: "rgba(217, 227, 138, 0.78)",
              color: "#000000",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              boxShadow:
                "0 10px 30px rgba(217, 227, 138, 0.18), 0 0 0 1px rgba(255,255,255,0.08) inset",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            APPLY NOW
            <span className="text-base leading-none">↗</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}