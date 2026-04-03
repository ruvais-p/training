import Image from "next/image";
import BlurText from "@/components/BlurText";
import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "FOUNDATION",
    imageSrc: "/Methods/learnareana.svg",
    accent: "var(--tertiary)",
    points: [
      "Build a strong understanding of cybersecurity, AI concepts, and real-world applications"
    ],
  },
  {
    number: "02",
    title: "SECURITY & RISKS",
    imageSrc: "/Methods/arena.svg",
    accent: "var(--secondary)",
    points: [
      "Understand vulnerabilities, attacks, and how to defend modern systems",
    ],
  },
  {
    number: "03",
    title: "AI & ADVANCED SECURITY ",
    imageSrc: "/Methods/transform.svg",
    accent: "#8cc39a",
    points: [
      "Work with AI systems and learn how to secure modern technologies",
    ],
  },
  {
    number: "04",
    title: "PRACTICAL & CAREER",
    imageSrc: "/Methods/learnareana.svg",
    accent: "#7bc58b",
    points: [
      "Apply your skills through real scenarios and prepare for job roles ",
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
              Your Learning{" "}
              <BlurText
                text="Journey"
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
          </Reveal>
        </div>
      </div>

      <div className="relative px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
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
