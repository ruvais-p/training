"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import BlurText from "@/components/BlurText";

const audienceItems = [
  "Students & fresh graduates looking to start a cybersecurity career",
  "Working professionals planning a career switch into cybersecurity",
  "IT / Networking beginners who want to upgrade their skills",
  "Freelancers or self-learners who need structured guidance",
  "Anyone serious about building a career in cybersecurity",
];


export default function AudienceSection() {
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx(Math.floor(Math.random() * audienceItems.length));
      
      // Clear highlight after a short duration
      setTimeout(() => setActiveIdx(-1), 1500);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden px-6 py-16 md:px-12 md:py-24"
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

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 h-fit">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] lg:text-sm"
            style={{
              color: "rgba(159,208,166,0.82)",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            Audience
          </p>
          <h2
            className="mb-6 text-[2.8rem] leading-[0.95] tracking-[-0.05em] lg:text-[4.5rem] font-editorial-regular"
            style={{
              color: "#f3f7f3",
              fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
              fontWeight: 400,
            }}
          >
            Who this{" "}
            <BlurText
              text="cohort"
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
            className="max-w-[24rem] text-[1.05rem] leading-7 lg:text-[1.12rem] opacity-80"
            style={{
              color: "rgba(232,245,239,0.7)",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            Whether you're starting from zero or leveling up, this program provides the structured path you need.
          </p>

          <div className="mt-10">
            <motion.a
              href="https://form.jotform.com/261102001781440"
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
              className="inline-flex w-full lg:w-fit items-center justify-center rounded-full px-8 py-4 text-xs font-bold lg:font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                background: "rgba(217, 227, 138, 0.85)",
                color: "#1a1a1a",
                fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                boxShadow: "0 10px 40px rgba(217, 227, 138, 0.2)",
              }}
            >
              SECURE YOUR SPOT
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col">
          {audienceItems.map((text, index) => (
            <AudienceListItem
              key={index}
              text={text}
              index={index}
              isAutoActive={activeIdx === index}
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

function AudienceListItem({ text, index, isAutoActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      animate={isAutoActive ? { 
        borderColor: "rgba(255,255,255,0.2)", 
        backgroundColor: "rgba(255,255,255,0.06)",
        scale: 1.01
      } : { 
        borderColor: "rgba(255,255,255,0.1)", 
        backgroundColor: "rgba(255,255,255,0.03)",
        scale: 1
      }}
      className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 mb-2.5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
    >
      {/* Left accent bar */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#5A9B68] transition-opacity duration-300 ${isAutoActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
      />

      {/* Index */}
      <span className={`flex-shrink-0 w-6 font-mono text-xs font-medium transition-colors duration-300 ${isAutoActive ? 'text-[#5A9B68]' : 'text-white/30 group-hover:text-[#5A9B68]'}`}>
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Text */}
      <p className={`flex-1 text-[1.05rem] font-medium leading-snug transition-colors duration-300 ${isAutoActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
        {text}
      </p>

      {/* Subtle background glow when active */}
      <AnimatePresence>
        {isAutoActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 bottom-0 top-0 -z-10 bg-gradient-to-r from-[#5A9B68]/10 to-transparent"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
} 
