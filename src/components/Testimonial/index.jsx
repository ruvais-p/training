"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "I am not a tech person at all, but this workshop made everything click. Now I use AI for emails, content, and even presentations. Life-changing stuff.",
    name: "Jonathan P.",
  },
  {
    quote:
      "The sessions were sharp, practical, and easy to apply immediately. I started automating repetitive work within the same week.",
    name: "Meera S.",
  },
  {
    quote:
      "This felt less like theory and more like a real shortcut to modern workflows. It gave me confidence to use AI daily.",
    name: "Daniel K.",
  },
  {
    quote:
      "I joined for curiosity, but left with systems I actually use at work. The clarity and pace made a huge difference.",
    name: "Rohini T.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            className="group relative overflow-hidden rounded-[2rem] border p-1"
            style={{
              background:
                "linear-gradient(135deg, rgba(140,195,154,0.18), rgba(90,155,104,0.08) 35%, rgba(255,255,255,0.02) 100%)",
              borderColor: "rgba(120,177,131,0.18)",
              boxShadow: "0 28px 90px rgba(0,0,0,0.22)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[1.8rem] px-8 py-10 md:px-14 md:py-14"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(90,155,104,0.22), transparent 22%), radial-gradient(circle at bottom right, rgba(63,116,78,0.26), transparent 28%), linear-gradient(135deg, rgba(20,45,35,0.98) 0%, rgba(25,58,43,0.98) 58%, rgba(39,88,60,0.98) 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
              <div className="pointer-events-none absolute -left-2 top-2 text-[6rem] font-black leading-none md:text-[9rem]" style={{ color: "rgba(190,240,202,0.12)" }}>
                &ldquo;
              </div>
              <div className="pointer-events-none absolute bottom-[-1.3rem] right-4 text-[6rem] font-black leading-none md:bottom-[-1.8rem] md:text-[9rem]" style={{ color: "rgba(190,240,202,0.12)" }}>
                &rdquo;
              </div>
              <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-green-300/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-4rem] left-[-2rem] h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative z-10 grid gap-10 md:grid-cols-[0.8fr_1.5fr] md:items-end">
                <div className="max-w-xs">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em]" style={{ color: "rgba(190,240,202,0.72)" }}>
                    Testimonials
                  </p>
                  <h2
                    className="font-editorial-regular text-[2rem] leading-[0.95] tracking-[-0.05em] text-white md:text-[2.8rem]"
                    style={{ fontFamily: "var(--font-pp-editorial-regular), Georgia, serif" }}
                  >
                    Real shifts. Real outcomes.
                  </h2>
                  <div className="mt-6 h-px w-24 bg-white/12" />
                </div>

                <div className="text-center md:text-left">
                  <p
                    key={activeIndex}
                    className="text-[1.05rem] leading-[1.75] tracking-[-0.025em] text-[#f6fbf6] md:text-[1.45rem] md:leading-[1.6]"
                    style={{ animation: "testimonialFade 0.45s ease" }}
                  >
                    {active.quote}
                  </p>

                  <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <p className="text-[1.08rem] font-semibold tracking-[-0.03em] text-[#b6e2be] md:text-[1.2rem]">
                      {active.name}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex gap-2.5">
                        {testimonials.map((item, index) => (
                          <button
                            key={item.name}
                            type="button"
                            aria-label={`Show testimonial ${index + 1}`}
                            onClick={() => setActiveIndex(index)}
                            className="relative h-3 w-3 rounded-full transition-all duration-300"
                            style={{
                              background:
                                index === activeIndex ? "var(--tertiary)" : "rgba(232,245,239,0.24)",
                              transform: index === activeIndex ? "scale(1.1)" : "scale(1)",
                              boxShadow:
                                index === activeIndex
                                  ? "0 0 18px rgba(140,195,154,0.42)"
                                  : "none",
                            }}
                          />
                        ))}
                      </div>

                      <div className="hidden h-px w-18 bg-white/12 md:block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
