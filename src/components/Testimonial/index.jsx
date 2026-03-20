"use client";

import { useEffect, useState } from "react";

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
    <section className="px-6 py-20 md:px-12 md:py-24" style={{ background: "var(--background)" }}>
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-[1rem] border px-8 py-14 text-center md:px-16 md:py-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(29,58,43,0.96) 0%, rgba(37,74,54,0.98) 50%, rgba(45,92,63,0.98) 100%)",
            borderColor: "rgba(90,155,104,0.14)",
            boxShadow: "0 26px 70px rgba(0,0,0,0.22)",
          }}
        >
          <div
            className="pointer-events-none absolute left-6 top-2 text-[10rem] font-black leading-none md:left-10 md:text-[13rem]"
            style={{ color: "rgba(140,195,154,0.18)" }}
          >
            &ldquo;
          </div>
          <div
            className="pointer-events-none absolute bottom-[-3.2rem] right-6 text-[10rem] font-black leading-none md:right-10 md:text-[13rem]"
            style={{ color: "rgba(140,195,154,0.18)" }}
          >
            &rdquo;
          </div>

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
            <p
              key={activeIndex}
              className="text-[0.92rem] leading-relaxed tracking-[-0.01em] text-[#f3f7f3] md:text-[1.2rem] md:leading-[1.65]"
              style={{ animation: "testimonialFade 0.45s ease" }}
            >
              {active.quote}
            </p>

            <p className="mt-8 text-[1.05rem] font-semibold tracking-[-0.03em] text-[#9fd0a6] md:text-[1.251rem]">
              {active.name}
            </p>

            <div className="mt-6 flex justify-center gap-2.5">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className="h-2.5 w-2.5 rounded-full transition-all duration-300"
                  style={{
                    background:
                      index === activeIndex ? "var(--tertiary)" : "rgba(232,245,239,0.28)",
                    transform: index === activeIndex ? "scale(1.1)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
