import BlurText from "@/components/BlurText";
import Reveal from "@/components/Reveal";

const steps = [
  {
    "number": "01",
    "title": "CFOUNDATION",
    "imageSrc": "/Methods/shape1.svg",
    "accent": "linear-gradient(135deg, #6EE7B7, #3B82F6)",
    "glow": "#6EE7B7",
    "points": [
      "Build a strong foundation in cybersecurity, AI fundamentals, and real-world security concepts used in modern systems"
    ]
  },
  {
    "number": "02",
    "title": "SECURITY & RISKS",
    "imageSrc": "/Methods/shape2.svg",
    "accent": "linear-gradient(135deg, #FDE68A, #F97316)",
    "glow": "#F97316",
    "points": [
      "Learn vulnerabilities, cyber attacks, ethical hacking basics, and how to defend systems against real-world threats"
    ]
  },
  {
    "number": "03",
    "title": "AI & ADVANCED SECURITY",
    "imageSrc": "/Methods/shape3.svg",
    "accent": "linear-gradient(135deg, #A78BFA, #EC4899)",
    "glow": "#A78BFA",
    "points": [
      "Work with AI in cybersecurity, including threat detection, automation, and securing modern AI-driven technologies"
    ]
  },
  {
    "number": "04",
    "title": "PRACTICAL & CAREER",
    "imageSrc": "/Methods/shape4.svg",
    "accent": "linear-gradient(135deg, #22D3EE, #0EA5E9)",
    "glow": "#22D3EE",
    "points": [
      "Apply your skills through real-world cybersecurity projects, build a portfolio, and prepare for job roles in Kerala and beyond"
    ]
  }
]
export default function Methodology() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      {/* Title */}
      <div className="relative border-b border-white/10 px-6 py-18 md:px-12 md:py-24">
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
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Cards */}
      <div className="relative px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 min-[670px]:grid-cols-2 min-[1400px]:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90} distance={24}>
              <MethodCard step={step} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Extra Styles */}
      <style jsx>{`
        .interactive-card {
          transition: all 0.35s ease;
        }

        .interactive-card:hover {
          transform: translateY(-6px);
        }

        .icon-glow {
          transition: all 0.35s ease;
        }

        .interactive-card:hover .icon-glow {
          transform: scale(1.08);
          filter: brightness(1.15);
        }
      `}</style>
    </section>
  );
}

function MethodCard({ step }) {
  return (
    <article className="interactive-card relative px-4 pb-2 pt-1">
      {/* Top */}
      <div className="mb-8 flex items-center justify-between">
        <span className="text-[4.2rem] font-light leading-none tracking-[-0.06em] text-white md:text-[5rem]">
          {step.number}
        </span>

        <span
          className="h-4 w-4 rounded-full"
          style={{
            background: step.glow,
            boxShadow: `0 0 14px ${step.glow}, 0 0 28px ${step.glow}`,
          }}
        />
      </div>

      <div className="mb-9 h-px w-full bg-white/10" />

      {/* Icon + Title */}
      <div className="mb-10 flex items-start gap-4">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl mt-1">
          <div
            className="h-full w-full icon-glow"
            style={{
              background: step.accent,
              maskImage: `url(${step.imageSrc})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskImage: `url(${step.imageSrc})`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              filter: `drop-shadow(0 0 10px ${step.glow})`,
            }}
          />
        </div>

        <h3 className="font-metana-black text-[1.75rem] md:text-[2rem] font-semibold leading-[1.1] md:leading-[0.95] tracking-[-0.05em] text-white">
          {step.title}
        </h3>
      </div>

      {/* Text */}
      <div className="space-y-1.5 text-[0.95rem] leading-8 text-white/60 md:text-[1rem]">
        {step.points.map((point) => (
          <p key={point}>{point}</p>
        ))}
      </div>
    </article>
  );
}