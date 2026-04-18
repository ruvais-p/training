"use client";

import { motion } from "motion/react";
import Image from "next/image";
import BlurText from "@/components/BlurText";

const standoutCards = [
  {
    title: "AI + Cybersecurity Combined",
    description: "Learn how AI and cybersecurity work together to secure modern systems, preparing you for next-generation security roles.",
    imgSrc: "/Cards/2.png",
  },
  {
    title: "Mentors with Real Experience",
    description: "Learn cybersecurity from industry professionals with real-world experience in threat detection, ethical hacking, and security operations across Kerala and beyond.",
    imgSrc: "/Cards/3.png",
  },
  {
    title: "AI Security Engineer Training",
    description: "Master AI-powered cybersecurity techniques, including threat detection, automation, and modern defence strategies used by AI security engineers.",
    imgSrc: "/Cards/4.png",
  },
  {
    title: "HR-Led Soft Skills Training",
    description: "Build communication, interview, and workplace skills with HR experts who understand hiring trends in the cybersecurity industry in Kerala.",
    imgSrc: "/Cards/5.png",
  },
  {
    title: "1-on-1 Mentorship",
    description: "Get personalized guidance throughout this cybersecurity cohort program with dedicated mentorship to accelerate your learning and career growth.",
    imgSrc: "/Cards/6.png",
  },
  {
    title: "Guest Mentors from Each Domain",
    description: "Learn from cybersecurity specialists across domains like penetration testing, AI security, and cloud security through expert-led sessions.",
    imgSrc: "/Cards/download (1).png",
  },
];

function StandOutCard({ title, description, imgSrc, index }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.75,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[28px] md:rounded-[28px] lg:rounded-[28px] border border-white/10"
      style={{
        boxShadow:
          "0 26px 70px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.03) inset",
      }}
    >
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imgSrc}
          alt={title}
          fill
          unoptimized
          className="select-none object-cover"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={index < 2}
        />
      </div>
    </motion.article>
  );
}

export default function StandOutSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
          <div className="pt-6">
            <h2
              className="font-editorial-regular text-[2.4rem] leading-[0.95] tracking-[-0.05em] text-white md:text-[3.2rem]"
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
              className="mt-6 max-w-[30rem] text-[1.02rem] leading-7 text-white/60"
              style={{
                fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              }}
            >
              Built for people who want real outcomes - hands-on cybersecurity training in Kerala, guidance from industry mentors, and career support that turns learning into a job-ready cybersecurity career.
            </p>

            <motion.a
              href="https://www.airtribe.live/backend-engineering/apply"
              target="_blank"
              rel="noopener noreferrer"
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
              className="mt-7 inline-flex w-fit items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300"
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standoutCards.map((c, idx) => (
              <StandOutCard key={c.title} {...c} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
