"use client";

import { motion } from "motion/react";
import BlurText from "@/components/BlurText";

const AUDIENCE_ITEMS = [
  "Students & fresh graduates looking to start a cybersecurity career",
  "Working professionals planning a career switch into cybersecurity",
  "IT / Networking beginners who want to upgrade their skills",
  "Freelancers or self-learners who need structured guidance",
  "Anyone serious about building a career in cybersecurity",
];


export default function AudienceSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-18 md:px-12 md:py-24"
      style={{ background: "transparent" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0, transparent 24%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 42px 42px, 42px 42px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#5A9B68]/12 blur-3xl audience-float-one" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#29553b]/18 blur-3xl audience-float-two" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 h-fit">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] md:text-sm"
            style={{
              color: "rgba(159,208,166,0.82)",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            Audience
          </p>
          <h2
            className="mb-5 text-[2.5rem] leading-[0.93] tracking-[-0.05em] md:text-[4rem] font-editorial-regular"
            style={{
              color: "#f3f7f3",
              fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
              fontWeight: 400,
            }}
          >
            Who this{" "}
            <BlurText
              text="program"
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
            />{" "}
            is for
          </h2>
          <p
            className="max-w-[22rem] text-[1.02rem] leading-7 md:text-[1.08rem]"
            style={{
              color: "rgba(232,245,239,0.68)",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            Find where you fit in
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {AUDIENCE_ITEMS.map((item, index) => (
            <AudienceCard
              key={item}
              text={item}
              className="w-full"
              index={index}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes audienceFloatOne {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(18px, -16px, 0); }
        }

        @keyframes audienceFloatTwo {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-20px, 20px, 0); }
        }

        .audience-float-one {
          animation: audienceFloatOne 13s ease-in-out infinite;
        }

        .audience-float-two {
          animation: audienceFloatTwo 16s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function AudienceCard({
  text,
  className,
  index,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden rounded-[1.6rem] border px-6 py-6 md:px-7 md:py-7 ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(3,6,4,0.98) 0%, rgba(2,10,5,0.98) 100%)",
        borderColor: "rgba(110,170,124,0.14)",
        boxShadow:
          "0 18px 40px rgba(0,0,0,0.24), 0 0 0 1px rgba(90,155,104,0.06) inset, 0 0 28px rgba(90,155,104,0.08)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl transition-opacity duration-300"
        style={{
          background: "rgba(90,155,104,0.16)",
          opacity: 0.9,
        }}
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full blur-3xl"
        style={{
          background: "rgba(63,116,78,0.14)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(159,208,166,0.42), transparent)",
        }}
      />

      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="flex items-start">
          <p
            className="text-[1rem] font-medium leading-[1.45] tracking-[-0.02em] md:text-[1.08rem]"
            style={{
              color: "#f3f7f3",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
