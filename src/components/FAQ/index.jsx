"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Is there a free trial available for the paid options ?",
    answer: "Yes. We offer a guided preview experience so you can explore the training format, curriculum flow, and outcomes before committing to the full program.",
  },
  {
    question: "Is it possible to subscribe to the app annualy ?",
    answer: "Absolutely. Annual plans are available for learners and teams who want long-term access, priority support, and better overall value.",
  },
  {
    question: "Is it possible to cancel my subscription ?",
    answer: "Yes of course, just send us an email at contact@foruminvest.com with a little reason of why you want to cancel your subscription and you will get a refund between 1-2 business days.",
  },
  {
    question: "How do I change my account mail ?",
    answer: "You can contact our support team and we will help you update your account email safely after a quick verification process.",
  },
  {
    question: "How can I change my payment method ?",
    answer: "You can update your payment method from your billing settings, or our team can assist you if you run into any issue during the switch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-28"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(90,155,104,0.14), transparent 28%), linear-gradient(180deg, var(--background) 0%, #0f221b 100%)",
      }}
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
          <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.06em] text-[#f3f7f3] md:text-7xl lg:text-[4.3rem]">
            Frequently asked
            <br />
            <span
              className="inline-block pr-[0.08em] pb-[0.04em]"
              style={{
                backgroundImage: "linear-gradient(180deg, #8cc39a 0%, var(--tertiary) 55%, var(--secondary) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              questions
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 md:text-base lg:text-[0.95rem]" style={{ color: "rgba(232,245,239,0.68)" }}>
            Do you need some help with something or do you have questions on some features ?
          </p>
        </div>

        <div
          className="mx-auto mt-14 max-w-5xl rounded-[1.75rem] border px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-sm md:px-7 md:py-5"
          style={{
            background: "linear-gradient(180deg, rgba(29,58,43,0.98) 0%, rgba(37,74,54,0.98) 100%)",
            borderColor: "rgba(90,155,104,0.16)",
          }}
        >
          {faqItems.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={item.question}
                className="border-b last:border-b-0"
                style={{ borderColor: "rgba(90,155,104,0.14)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 md:py-7"
                >
                  <span className="text-[1rem] font-semibold tracking-[-0.02em] text-[#f3f7f3] md:text-[1.05rem]">
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 text-3xl font-light leading-none transition-transform duration-300"
                    style={{
                      color: "var(--tertiary)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div
                  className="grid transition-all duration-400 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0.45,
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      className="pb-6 pr-10 md:pb-7"
                      style={{
                        transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                        transition: "transform 300ms ease, opacity 300ms ease",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <p className="max-w-3xl text-sm leading-7 md:text-[0.98rem]" style={{ color: "rgba(232,245,239,0.74)" }}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
