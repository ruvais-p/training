"use client";

import { useMemo, useState } from "react";
import BlurText from "@/components/BlurText";

const TAGS = [
  "Placement Assistance",
  "Referral Assistance",
  "Internship Opportunities (Based on performance & company criteria)",
  "Resume & Profile Guidance",
  "Mock Interview Support",
];

function AudiencePill({ label }) {
  return (
    <div
      className="inline-flex cursor-default items-center gap-2 whitespace-nowrap rounded-full border px-5 py-3 text-sm font-medium"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.72)",
        color: "rgba(255,255,255,0.92)",
      }}
    >
      <span
        className="font-editorial-regular"
        style={{
          fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function MarqueeRow({ items, duration = 22, reverse = false }) {
  const [isPaused, setIsPaused] = useState(false);
  const repeated = useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          animation: `scrollMarquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {repeated.map((item, index) => (
          <AudiencePill key={`${item}-${index}`} label={item} />
        ))}
      </div>
    </div>
  );
}

export default function CareerAndGrowthSupport() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:px-12 md:py-24"
      style={{
        background: "transparent",
      }}
    >
      <style>{`
        @keyframes scrollMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2
            className="text-[2.4rem] leading-[0.94] tracking-[-0.05em] text-white md:text-[4rem]"
            style={{
              fontWeight: 400,
            }}
          >
            <span
              className="font-editorial-regular"
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Career & Growth{" "}
            </span>
            <BlurText
              text="Support"
              as="span"
              delay={400}
              animateBy="words"
              direction="top"
              className="inline-flex"
              segmentStyle={{
                color: "var(--tertiary)",
                fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 200,
              }}
              animationFrom={{
                filter: "blur(10px)",
                opacity: 0,
                y: -22,
              }}
              animationTo={[
                { filter: "blur(4px)", opacity: 0.65, y: 4 },
                { filter: "blur(0px)", opacity: 1, y: 0 },
              ]}
              stepDuration={0.28}
            />
          </h2>
          <p
            className="font-editorial-regular mx-auto mt-4 max-w-3xl text-[1rem] leading-8 text-white/70 md:text-[1.08rem]"
            style={{
              fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
            }}
          >
            We don&apos;t just train you — we help you move forward in your career.
          </p>
        </div>

      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="flex flex-col gap-3">
          <MarqueeRow items={TAGS} duration={22} />
          <MarqueeRow items={TAGS} duration={26} reverse />
        </div>
      </div>
    </section>
  );
}
