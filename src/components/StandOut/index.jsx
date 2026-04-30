"use client";

import { motion } from "motion/react";
import Image from "next/image";
import BlurText from "@/components/BlurText";
import Link from "next/link";

const MotionLink = motion(Link);

const standoutCards = [
  {
    title: "AI + Cybersecurity Combined",
  },
  {
    title: "Mentors with Real Experience",
  },
  {
    title: "AI Security Engineer Training",
  },
  {
    title: "HR-Led Soft Skills Training",
  },
  {
    title: "1-on-1 Mentorship",
  },
  {
    title: "Guest Mentors from Each Domain",
  },
];

function StandOutCard({ title, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`flex items-center gap-4 lg:gap-5 px-6 lg:px-10 py-4 lg:py-5 rounded-[22px] lg:rounded-full border border-white/10 transition-all duration-300 hover:bg-white/[0.08] w-full lg:w-[82%] ${index % 2 === 0 ? "lg:justify-self-start" : "lg:justify-self-end"
        }`}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <div className="relative h-6 w-6 lg:h-8 lg:w-8 flex-shrink-0">
        <Image
          src="/cards/tickmark.svg"
          alt="tick"
          fill
          unoptimized
          className="select-none object-contain"
        />
      </div>
      <h3 className="text-[1rem] lg:text-[1.15rem] font-medium text-white/90 tracking-tight leading-snug">
        {title}
      </h3>
    </motion.div>
  );
}

export default function StandOutSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:gap-20 xl:grid-cols-[500px_1fr]">
          <div className="flex flex-col justify-center">
            <h2
              className="font-editorial-regular text-[2.8rem] leading-[1.05] tracking-[-0.03em] text-white md:text-[4rem]"
              style={{
                fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                fontWeight: 400,
              }}
            >
              Why This Program{" "}
              <BlurText
                text="Stands Out"
                as="span"
                delay={500}
                animateBy="words"
                direction="top"
                className="font-editorial-italic inline-flex align-baseline"
                segmentStyle={{
                  color: "var(--tertiary)",
                  lineHeight: 1,
                  fontWeight: 200,
                  fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                }}
                animationFrom={{ filter: "blur(10px)", opacity: 0, y: -18 }}
                animationTo={[
                  { filter: "blur(4px)", opacity: 0.7, y: 2 },
                  { filter: "blur(0px)", opacity: 1, y: 0 },
                ]}
                stepDuration={0.28}
              />
            </h2>
            <p
              className="mt-8 max-w-[32rem] text-[1.1rem] leading-relaxed text-white/50"
              style={{
                fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              }}
            >
              Built for people who want real outcomes, hands-on cybersecurity training in Kerala, guidance from industry mentors, and career support that turns learning into a job-ready cybersecurity career.
            </p>

            <div className="mt-12">
              <MotionLink
                href="/apply"
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full lg:w-fit items-center justify-center rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                style={{
                  background: "rgba(217, 227, 138, 0.85)",
                  color: "#1a1a1a",
                  fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                  boxShadow:
                    "0 10px 30px rgba(217, 227, 138, 0.25)",
                }}
              >
                I WANT TO STAND OUT
              </MotionLink>
            </div>
          </div>

          <div className="grid gap-5 xl:gap-6 self-center">
            {standoutCards.map((c, idx) => (
              <StandOutCard key={c.title} {...c} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
