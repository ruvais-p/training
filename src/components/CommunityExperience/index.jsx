"use client";

import { motion } from "motion/react";
import BlurText from "@/components/BlurText";
import Link from "next/link";

const MotionLink = motion(Link);

const communityItems = [
  "Hands-on learning to build and use hardware hacking tools",
  "Access to an active learning community",
  "Guest sessions from industry experts",
  "Networking opportunities",
  "Collaborative learning environment",
];

export default function CommunityExperience() {
  return (
    <section className="relative overflow-hidden bg-transparent px-6 py-20 md:px-12 md:py-28">
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
            <BlurText
              text="Classroom"
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
            className="mt-6 max-w-[34rem] text-[1.04rem] leading-7 md:text-[1.12rem]"
            style={{
              color: "rgba(232,245,239,0.68)",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            A cybersecurity cohort in Kerala should feel like a lab, hands-on training, real-world security practice, and a community that keeps you learning beyond live sessions.
          </p>
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
            className="mt-7 inline-flex w-full lg:w-fit items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300"
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
            SECURE A SEAT
          </MotionLink>
        </div>

        <div className="relative pt-4">
          <div className="flex flex-col gap-10">
            {communityItems.map((text, index) => {
              const shapeIndex = (index % 5) + 1;
              const shapeSrc = `/community/shape${shapeIndex}.svg`;

              const colors = ["#4ADE80", "#60A5FA", "#A78BFA", "#FBBF24", "#FB7185", "#34D399"];
              const color = colors[index % colors.length];

              return (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-start gap-6"
                >
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <div
                      className="h-10 w-10"
                      style={{
                        backgroundColor: color,
                        WebkitMaskImage: `url(${shapeSrc})`,
                        maskImage: `url(${shapeSrc})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        boxShadow: `0 0 20px ${color}33`,
                      }}
                    />
                  </div>

                  <div className="flex min-h-[40px] flex-col justify-center">
                    <p
                      className="font-editorial-regular text-[1.12rem] leading-relaxed text-white md:text-[1.25rem]"
                      style={{
                        fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                        fontWeight: 400,
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}