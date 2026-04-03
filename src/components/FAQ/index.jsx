"use client";

import { useState } from "react";
import BlurText from "@/components/BlurText";
import SectionReveal from "@/components/SectionReveal";

const faqItems = [
  {
    question: "Do I need prior experience?",
    answer:
      "No, this program is designed for beginners as well as professionals.",
  },
  {
    question: " Is this program fully online? ",
    answer:
      "Yes, it is a fully online cohort-based program with live sessions. ",
  },
  {
    question: " Will I get placement support? ",
    answer:
      "Yes, we provide placement assistance, referrals, and interview preparation.",
  },
  {
    question: " Will I work on real projects? ",
    answer:
      "Yes, you will work on real-world cybersecurity scenarios and projects.",
  },
  {
    question: " Are there internships included?",
    answer:
      "Internship opportunities are provided based on performance and company criteria.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-28"
    >
      <div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full border"
        style={{ borderColor: "rgba(90,155,104,0.12)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full border"
        style={{ borderColor: "rgba(90,155,104,0.12)" }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-editorial-regular text-5xl leading-[0.92] tracking-[-0.06em] text-[#f3f7f3] md:text-7xl lg:text-[4.3rem]">
            Frequently asked
            <br />
            <BlurText
              text="questions"
              as="span"
              delay={0}
              initialDelay={500}
              animateBy="words"
              direction="top"
              className="font-editorial-italic inline-flex align-baseline leading-none"
              segmentStyle={{
                color: "var(--tertiary)",
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
            className="mx-auto mt-5 max-w-xl text-sm leading-7 md:text-base lg:text-[0.95rem]"
            style={{ color: "rgba(232,245,239,0.68)" }}
          >
            Do you need some help with something or do you have questions on some features ?
          </p>
        </div>

        <SectionReveal delay={150}>
          <div
            className="mx-auto mt-14 max-w-6xl rounded-[2.2rem] border p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-sm md:p-6"
            style={{
              background: "linear-gradient(180deg, rgba(12,35,29,0.94) 0%, rgba(10,30,25,0.98) 100%)",
              borderColor: "rgba(90,155,104,0.16)",
            }}
          >
            {faqItems.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <div
                  key={item.question}
                  className="mb-4 overflow-hidden rounded-[1.8rem] border last:mb-0"
                  style={{
                    background: "linear-gradient(180deg, rgba(14,42,34,0.96) 0%, rgba(11,35,29,0.98) 100%)",
                    borderColor: isOpen
                      ? "rgba(238,245,239,0.72)"
                      : "rgba(90,155,104,0.1)",
                    boxShadow: isOpen
                      ? "inset 0 0 0 1px rgba(255,255,255,0.08)"
                      : "none",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-8 text-left transition-colors duration-300 md:px-8 md:py-9"
                  >
                    <span className="text-[1rem] font-semibold tracking-[-0.03em] text-[#f3f7f3] md:text-[1.08rem]">
                      {item.question}
                    </span>
                    <span
                      className="shrink-0 text-[2rem] font-light leading-none transition-transform duration-300"
                      style={{
                        color: "var(--tertiary)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="px-7 pb-7 pr-14 md:px-8 md:pb-8"
                        style={{
                          transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                          transition: "transform 260ms ease, opacity 260ms ease",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <p
                          className="max-w-3xl text-sm leading-7 md:text-[0.98rem]"
                          style={{ color: "rgba(232,245,239,0.74)" }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
