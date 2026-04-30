"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const ctaLines = [
  "BECOME INDUSTRY-READY",
  "IN 4 MONTHS",
  "BECOME INDUSTRY-READY",
];

function MarqueeTextRow({ text, reverse = false, duration = 22, top = "0%" }) {
  const [isPaused, setIsPaused] = useState(false);
  const repeated = useMemo(() => [text, text, text], [text]);

  return (
    <div
      className="absolute left-0 right-0 overflow-hidden"
      style={{ top, paddingTop: "0.08em" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex w-max whitespace-nowrap"
        style={{
          animationName: "ctaMarquee",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            style={{
              paddingRight: "5rem",
              fontSize: "clamp(4.4rem, 14vw, 12rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.06em",
              fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
              fontWeight: 400,
              color: "rgba(233,245,236,0.9)",
              textShadow: "0 0 22px rgba(90,155,104,0.06)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CTASection() {
  return (
    <section
      className="font-editorial-regular relative min-h-screen overflow-hidden px-6 py-10 md:px-12 md:py-12"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(90,155,104,0.08), transparent 28%), linear-gradient(180deg, #010503 0%, #020906 100%)",
        fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
      }}
    >
      <style>{`
        @keyframes ctaMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,155,104,0.12),transparent_44%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(63,116,78,0.1),transparent_34%)]" />
        <div className="absolute inset-0">
          <MarqueeTextRow text={ctaLines[0]} duration={28} top="6%" />
          <MarqueeTextRow text={ctaLines[1]} duration={24} reverse top="39%" />
          <MarqueeTextRow text={ctaLines[2]} duration={30} top="70%" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center">
        <Link
          href="/apply"
          className="inline-flex items-center gap-4 rounded-full px-9 py-4 text-[1.15rem] transition-transform duration-200 hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #8ccb98 0%, #b9efc2 100%)",
            color: "#081008",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 20px 50px rgba(90,155,104,0.24)",
            fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
            fontWeight: 400,
          }}
        >
          <span>Apply Now</span>
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full"
            style={{
              background: "rgba(8,16,8,0.1)",
            }}
          >
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
