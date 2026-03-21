import Image from "next/image";
import BlurText from "@/components/BlurText";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "LEARN ARENA",
    imageSrc: "/Methods/learnareana.svg",
    accent: "var(--tertiary)",
    points: [
      "A real industry challenge is introduced.",
      "A mentor breaks it down.",
      "You learn how to think, frame, and approach the problem.",
      "You understand the method, not just the answer.",
    ],
  },
  {
    number: "02",
    title: "INNOVATE ARENA",
    imageSrc: "/Methods/arena.svg",
    accent: "var(--secondary)",
    points: [
      "You work in teams and build the solution.",
      "Strategy, campaign, and system thinking come together.",
      "Mentors step in when needed.",
      "You are guided, but you still figure it out.",
    ],
  },
  {
    number: "03",
    title: "TRANSFORM ARENA",
    imageSrc: "/Methods/transform.svg",
    accent: "#8cc39a",
    points: [
      "You present to real judges and get useful feedback.",
      "Each project becomes proof of your thinking.",
      "No grades. No filler.",
      "Just real experience and visible growth.",
    ],
  },
];

export default function Methodology() {
  return (
    <section
      className="relative overflow-hidden bg-[#040d07]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
    >

      <div className="relative border-b border-white/8 px-6 py-18 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-editorial-regular text-center text-[2.7rem] leading-[0.92] tracking-[-0.06em] text-white md:text-[4.7rem]">
              The FI Learning{" "}
              <BlurText
                text="Methodology"
                as="span"
                delay={400}
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
          </Reveal>
        </div>
      </div>

      <div className="relative px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 90} distance={24}>
              <MethodCard step={step} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodCard({ step }) {
  return (
    <article className="interactive-card relative px-4 pb-2 pt-1">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-[4.2rem] font-light leading-none tracking-[-0.06em] text-white md:text-[5rem]">
          {step.number}
        </span>
        <span
          className="h-4 w-4 rounded-full pulse-glow"
          style={{
            background: step.accent,
            boxShadow: `0 0 18px ${step.accent}`,
          }}
        />
      </div>

      <div className="mb-9 h-px w-full bg-white/10" />

      <div className="mb-10 flex items-center gap-5">
        <div
          className="relative h-20 w-20 overflow-hidden rounded-2xl"
        >
          <Image
            src={step.imageSrc}
            alt={step.title}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>

        <h3 className="font-metana-black text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
          {step.title}
        </h3>
      </div>

      <div className="space-y-1.5 text-[0.95rem] leading-8 text-white/50 md:text-[1rem]">
        {step.points.map((point) => (
          <p key={point}>{point}</p>
        ))}
      </div>
    </article>
  );
}
