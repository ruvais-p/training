"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

const ITEMS = [
  "Hands-on learning to build and use hardware hacking tools",
  "Access to an active learning community",
  "Guest sessions from industry experts",
  "Networking opportunities",
  "Collaborative learning environment",
];

export default function CommunityExperience() {
  const layout = useMemo(
    () => [
      { span: "md:col-span-7", tone: "a" },
      { span: "md:col-span-5", tone: "b" },
      { span: "md:col-span-6", tone: "c" },
      { span: "md:col-span-6", tone: "d" },
      { span: "md:col-span-12", tone: "e" },
    ],
    []
  );

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 14% 18%, rgba(90,155,104,0.22) 0, transparent 42%), radial-gradient(circle at 76% 12%, rgba(63,116,78,0.16) 0, transparent 46%), radial-gradient(circle at 72% 78%, rgba(90,155,104,0.12) 0, transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="pt-2">
          <h2
            className="font-editorial-regular text-[2.4rem] leading-[0.95] tracking-[-0.05em] text-white md:text-[3.6rem]"
            style={{
              fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
              fontWeight: 400,
              textShadow: "0 22px 80px rgba(0,0,0,0.35)",
            }}
          >
            Learn Beyond the{" "}
            <span
              className="font-editorial-italic"
              style={{
                color: "var(--tertiary)",
                fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 200,
              }}
            >
              Classroom
            </span>
          </h2>

          <p
            className="mt-6 max-w-[34rem] text-[1.04rem] leading-7 md:text-[1.12rem]"
            style={{
              color: "rgba(232,245,239,0.68)",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            A cohort should feel like a lab: hands-on practice, real conversations, and
            a community that keeps you moving even after the live sessions end.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-[2.25rem] border p-7 md:p-10"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            background: "rgba(0,0,0,0.22)",
            boxShadow:
              "0 34px 90px rgba(0,0,0,0.46), 0 0 0 1px rgba(255,255,255,0.03) inset",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >


          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(circle at 50% 40%, black 0%, black 62%, transparent 80%)",
            }}
          />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.6]"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="rgba(255,255,255,0.0)" />
                <stop offset="0.52" stopColor="rgba(255,255,255,0.16)" />
                <stop offset="1" stopColor="rgba(255,255,255,0.0)" />
              </linearGradient>
            </defs>

            <path
              d="M120 90 C 320 140, 380 140, 510 110 S 760 80, 900 150"
              fill="none"
              stroke="url(#trace)"
              strokeWidth="2"
              className="ce-trace ce-trace-one"
            />
            <path
              d="M80 260 C 300 220, 380 240, 520 260 S 760 300, 920 260"
              fill="none"
              stroke="url(#trace)"
              strokeWidth="2"
              className="ce-trace ce-trace-two"
            />
            <path
              d="M160 430 C 330 360, 420 360, 520 390 S 740 470, 920 420"
              fill="none"
              stroke="url(#trace)"
              strokeWidth="2"
              className="ce-trace ce-trace-three"
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {ITEMS.map((text, index) => {
              const meta = layout[index] ?? { span: "md:col-span-6", tone: "a" };

              return (
                <motion.article
                  key={text}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative ${meta.span} rounded-[1.65rem] border p-5 md:p-6`}
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(0,0,0,0.32)",
                    boxShadow:
                      "0 18px 46px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.02) inset",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                  }}
                >
                  <div className="relative flex items-start">
                    <p
                      className="font-editorial-regular text-[1.06rem] leading-7 text-white md:text-[1.12rem]"
                      style={{
                        fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                        fontWeight: 400,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .ce-trace {
          stroke-dasharray: 90 420;
          stroke-dashoffset: 0;
          animation: ceTrace 5.2s linear infinite;
          opacity: 0.8;
        }

        .ce-trace-two { animation-duration: 6.2s; opacity: 0.65; }
        .ce-trace-three { animation-duration: 7.2s; opacity: 0.55; }

        @keyframes ceTrace {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -510; }
        }
      `}</style>
    </section>
  );
}

