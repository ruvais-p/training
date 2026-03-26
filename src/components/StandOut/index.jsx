"use client";

import { motion } from "motion/react";
import Image from "next/image";

const CARDS = [
  {
    title: "AI + Cybersecurity Combined",
    imgSrc: "/Cards/2.png",
  },
  {
    title: "Mentors with Real Experience",
    imgSrc: "/Cards/3.png",
  },
  {
    title: "AI Security Engineer Training",
    imgSrc: "/Cards/4.png",
  },
  {
    title: "HR-Led Soft Skills Training",
    imgSrc: "/Cards/5.png",
  },
  {
    title: "1-on-1 Mentorship",
    imgSrc: "/Cards/6.png",
  },
  {
    title: "Guest Mentors from Each Domain",
    imgSrc: "/Cards/download (1).png",
  },
];

function StandOutCard({ title, imgSrc, index }) {

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
      className="relative w-full overflow-hidden rounded-[40px] border border-white/10"
      style={{
        boxShadow:
          "0 26px 70px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.03) inset",
      }}
    >
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
              <span
                className="font-editorial-italic"
                style={{
                  color: "var(--tertiary)",
                  fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 200,
                }}
              >
                Stands Out
              </span>
            </h2>
            <p
              className="mt-6 max-w-[30rem] text-[1.02rem] leading-7 text-white/60"
              style={{
                fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              }}
            >
              Built for people who want real outcomes: hands-on training, mentors who
              ship in the real world, and support that turns learning into a career.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c, idx) => (
              <StandOutCard key={c.title} {...c} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
