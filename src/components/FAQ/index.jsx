"use client";

import { useState } from "react";
import BlurText from "@/components/BlurText";
import SectionReveal from "@/components/SectionReveal";
import { Plus } from "lucide-react";

const faqItems = [
  {
    question: "Do I need prior experience to join the YACS cybersecurity cohort?",
    answer: "No. YACS is specifically designed for beginners and career switchers. Whether you're a fresh graduate, an IT professional, or completely new to technology, you can join. We start from the fundamentals and build up systematically through 4 structured phases.",
  },
  {
    question: "Is the YACS program fully online?",
    answer: "Yes. YACS is 100% online with live mentor sessions. You can join from anywhere in Kerala: Kozhikode, Kochi, Thrissur, Malappuram, Kannur, Calicut, or any other city. All you need is a laptop and a stable internet connection.",
  },
  {
    question: "What is the program fee for the YACS cybersecurity cohort?",
    answer: "Program fee details are available on application. We also offer EMI options and certification voucher support to make the program accessible. Contact us on WhatsApp or fill the application form to get complete fee details.",
  },
  {
    question: "What certifications will I be ready for after YACS?",
    answer: "You will be prepared for CompTIA A+, CompTIA Security+, and CEH (Certified Ethical Hacker). YACS provides structured exam preparation AND voucher support to cover certification costs.",
  },
  {
    question: "What makes YACS different from other cybersecurity courses in Kerala?",
    answer: "YACS is the only program in Kerala that combines AI and cybersecurity in a single cohort. We also include hardware hacking labs, HR-led mock interviews with real professionals, CompTIA/CEH voucher support, and a cohort-based structure, none of which are available at competing institutes.",
  },
  {
    question: "Will I get placement support after completing YACS?",
    answer: "Yes. YACS provides placement assistance, referral support to our hiring network (including Gladius & Schild and TOFENCE®), internship opportunities based on performance, and resume and LinkedIn profile guidance.",
  },
  {
    question: "What tools will I learn in the YACS cybersecurity cohort?",
    answer: "You will train on professional tools including Burp Suite, Metasploit, Wireshark, Nmap, Nessus, Frida, MobSF, Nikto, w3af, and Nexpose. On the AI side, you will use ChatGPT, Claude AI, LangChain, LangGraph, and LangFlow.",
  },
  {
    question: "How long is the YACS cohort program?",
    answer: "The program is 6 months long, structured across 4 phases: Foundation, Security & Risks, AI & Advanced Security, and Practical & Career. Sessions are live and scheduled to accommodate working professionals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-28">
      {/* Soft Decorative Rings */}
      <div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full border"
        style={{ borderColor: "rgba(90,155,104,0.10)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full border"
        style={{ borderColor: "rgba(59,130,246,0.08)" }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-editorial-regular text-5xl leading-[0.92] tracking-[-0.06em] text-[#f3f7f3] md:text-7xl lg:text-[4.3rem]">
            Frequently asked
            <br />
            <span className="mt-3 inline-block">
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
                  fontFamily:
                    "var(--font-pp-editorial-italic), Georgia, serif",
                }}
                animationFrom={{ filter: "blur(10px)", opacity: 0, y: -18 }}
                animationTo={[
                  { filter: "blur(4px)", opacity: 0.7, y: 2 },
                  { filter: "blur(0px)", opacity: 1, y: 0 },
                ]}
                stepDuration={0.28}
              />
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-xl text-sm leading-7 md:text-base lg:text-[0.95rem]"
            style={{ color: "rgba(232,245,239,0.68)" }}
          >
            Need help with something? Find quick answers to the most common
            questions about the program.
          </p>
        </div>

        {/* FAQ List */}
        <SectionReveal delay={150}>
          <div className="mx-auto mt-16 max-w-5xl space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[1.7rem] border backdrop-blur-xl transition-all duration-300"
                  style={{
                    background: isOpen
                      ? "linear-gradient(135deg, rgba(10,35,28,0.78) 0%, rgba(7,26,21,0.88) 100%)"
                      : "linear-gradient(135deg, rgba(10,28,23,0.52) 0%, rgba(7,20,16,0.62) 100%)",
                    borderColor: isOpen
                      ? "rgba(255,255,255,0.18)"
                      : "rgba(90,155,104,0.10)",
                    boxShadow: isOpen
                      ? "0 12px 40px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.04)"
                      : "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-7"
                  >
                    <span className="text-[1rem] font-medium tracking-[-0.02em] text-[#f3f7f3] md:text-[1.08rem]">
                      {item.question}
                    </span>

                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                      style={{
                        color: isOpen ? "#ffffff" : "var(--tertiary)",
                        borderColor: isOpen
                          ? "rgba(255,255,255,0.18)"
                          : "rgba(90,155,104,0.16)",
                        background: isOpen
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(90,155,104,0.05)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus size={22} strokeWidth={1.5} />
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
                        className="px-6 pb-6 pr-14 md:px-8 md:pb-8"
                        style={{
                          transform: isOpen
                            ? "translateY(0)"
                            : "translateY(-8px)",
                          transition:
                            "transform 260ms ease, opacity 260ms ease",
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
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}