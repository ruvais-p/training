"use client";

import BlurText from "@/components/BlurText";

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


function BenefitCard({ item, className = "", wide = false }) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border px-8 py-8 text-left md:px-10 md:py-9 ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(15,44,29,0.96) 0%, rgba(10,31,21,0.98) 100%)",
        borderColor: "rgba(90,155,104,0.14)",
        boxShadow: "0 18px 40px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <h3
        className={`font-editorial-italic text-pretty text-[1.45rem] leading-[1.12] tracking-[-0.03em] text-white md:text-[1.7rem] ${
          wide ? "max-w-none" : "max-w-none"
        }`}
        style={{
          fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
          fontStyle: "italic",
          fontWeight: 200,
        }}
      >
        {item.title}
      </h3>

      <p
        className={`font-editorial-regular mt-6 text-pretty text-[1rem] leading-7 text-white/88 md:text-[1.04rem] ${
          wide ? "max-w-none" : "max-w-none"
        }`}
        style={{
          fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
        }}
      >
        {item.description}
      </p>
    </article>
  );
}

export default function WhatYouGetInside() {
  return (
    <section
      className="font-editorial-regular relative overflow-hidden px-6 py-20 md:px-12 md:py-24"
      style={{
        background: "transparent",
        fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
      }}
    >
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

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.slice(0, 6).map((item) => (
            <BenefitCard key={item.title} item={item} />
          ))}
          <BenefitCard
            item={benefits[6]}
            wide
            className="md:col-span-2 xl:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}
