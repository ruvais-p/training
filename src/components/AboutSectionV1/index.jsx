import { CalendarDays, Radio, Users } from "lucide-react";
import AnimatedBenefitCard from "@/components/AnimatedBenefitCard";
import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";

const statCards = [
  { value: "15+", label: "Experts", icon: Users, color: "tertiary" },
  { value: "25+", label: "Sessions", icon: Radio, color: "secondary" },
];

const benefitCards = [
  {
    iconSrc: "/home_page/69943a0470a4c0034cac1220_Group-239788.svg",
    title: "10x Efficiency",
    content:
      "Master the art of AI orchestration to turn exhaustive tasks into instant workflows.",
    accent: "var(--tertiary)",
  },
  {
    iconSrc: "/home_page/69943a0484956dac1bb0d050_Group-240381.svg",
    title: "Strategic Thinking",
    content: "Move beyond prompts. Learn to integrate AI into product strategy.",
    accent: "var(--secondary)",
  },
  {
    iconSrc: "/home_page/69943a04de6ccc1c0a5efeae_Group-239780.svg",
    title: "Future-Proof",
    content: "Stay ahead of the disruption. Build skills that remain relevant.",
    accent: "var(--tertiary)",
  },
];


export default function OldAbout() {
  return (
    <section
      className="relative w-full px-6 py-24 md:px-12 md:py-32"
      style={{ background: "transparent" }}
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start w-full gap-16 md:gap-0">
        <div className="relative md:sticky top-0 h-fit flex flex-col pt-12 md:pt-[12vh] w-full md:w-1/2 md:pr-8">
          <SectionReveal delay={100}>
            <div className="relative">
              <div
                className="pointer-events-none absolute -left-6 top-10 hidden h-48 w-48 rounded-full border lg:block"
                style={{ borderColor: "rgba(90,155,104,0.12)" }}
              />
              <p
                className="font-editorial-regular mb-6 text-sm uppercase tracking-widest"
                style={{
                  color: "var(--tertiary)",
                  fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                }}
              >
                In 16-Weeks
              </p>

              <h2
                className="font-editorial-regular mb-8 max-w-full md:max-w-[10ch] text-[3.2rem] md:text-5xl lg:text-7xl leading-[0.98] tracking-tight"
                style={{
                  color: "var(--foreground)",
                  fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                  fontWeight: 400,
                }}
              >
                Master{" "}
                <span
                  style={{
                    color: "var(--tertiary)",
                    fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 200,
                  }}
                >
                  AI
                </span>
                . Build <br /> Smarter. Become a{" "}
                <span
                  style={{
                    color: "var(--tertiary)",
                    fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 200,
                  }}
                >
                  PM
                </span>
                .
              </h2>

              <p
                className="max-w-[32rem] text-lg leading-relaxed md:text-xl md:mb-12 mb-8"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                PMs who know how to leverage AI will have an unfair advantage in the next
                decade. This program isn&apos;t about memorizing frameworks&apos;it&apos;s about mastering
                the real skills that top companies want.
              </p>
            </div>

            <div className="relative w-full max-w-[32rem]">
              <div
                className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2.5rem] border lg:block"
                style={{ borderColor: "rgba(90,155,104,0.08)" }}
              />
              <div className="relative flex w-full flex-col gap-5 rounded-[2.4rem] border border-white/6 bg-white/[0.025] p-5 backdrop-blur-sm">
                <EnrollmentCard />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {statCards.map(({ value, label, icon: Icon, color }) => (
                    <StatCard
                      key={label}
                      value={value}
                      label={label}
                      icon={<Icon size={14} />}
                      color={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="flex flex-col gap-[28px] pt-12 pb-16 md:pt-[20vh] md:pb-[30vh] w-full md:w-1/2 md:pl-8">
          {benefitCards.map(({ iconSrc, title, content, accent }, index) => (
            <AnimatedBenefitCard key={title} delayIndex={index}>
              <BenefitCard
                icon={
                  <span className="relative block h-8 w-8">
                    <Image src={iconSrc} alt={title} fill className="object-contain" sizes="32px" />
                  </span>
                }
                title={title}
                content={content}
                accent={accent}
              />
            </AnimatedBenefitCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollmentCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border p-6 md:p-8"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(133,199,145,0.18), transparent 28%), linear-gradient(135deg, rgba(63,116,78,0.98) 0%, rgba(45,92,63,0.98) 100%)",
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 18px 44px rgba(0,0,0,0.18)",
      }}
    >
      <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="mb-4 flex items-center gap-2">
        <CalendarDays size={16} style={{ color: "rgba(196,239,155,0.95)" }} />
        <span
          className="text-xs font-black uppercase tracking-widest"
          style={{ color: "rgba(196,239,155,0.95)" }}
        >
          Enrolment Ends
        </span>
      </div>

      <div className="flex items-end gap-3 md:gap-4">
        <span
          className="font-editorial-regular text-[4.6rem] font-bold leading-none md:text-[5.2rem]"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
          }}
        >
          20
        </span>
        <span
          className="font-editorial-regular mb-2 text-4xl font-bold md:text-[2.8rem]"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
          }}
        >
          MAR
        </span>
      </div>
    </div>
  );
}

function StatCard({ value, label, icon, color = "tertiary" }) {
  const accentColor = color === "tertiary" ? "var(--tertiary)" : "var(--secondary)";

  return (
    <div
      className="relative overflow-hidden rounded-[1.6rem] border p-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(39,76,56,0.92) 0%, rgba(28,57,43,0.98) 100%)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
        }}
      />
      <div
        className="mb-3 font-editorial-regular text-4xl font-bold leading-none"
        style={{
          color: accentColor,
          fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
        }}
      >
        {value}
      </div>

      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/55">
        {icon} {label}
      </div>
    </div>
  );
}

function BenefitCard({ title, content, accent, icon }) {
  return (
    <div
      className="group relative overflow-hidden rounded-[2.2rem] md:rounded-[2.5rem] border p-6 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-white/12"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(90,155,104,0.1), transparent 24%), linear-gradient(180deg, rgba(21,40,34,0.96) 0%, rgba(18,35,30,0.98) 100%)",
        borderColor: "rgba(255,255,255,0.05)",
        boxShadow: "0 20px 44px rgba(0,0,0,0.12)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `${accent}22`, opacity: 0.55 }}
      />
      <div className="relative mb-8 flex w-fit items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        {icon}
      </div>

      <div
        className="mb-8 h-1.5 w-12 rounded-full transition-all duration-500 group-hover:w-24"
        style={{ background: accent }}
      />

      <h3
        className="font-editorial-regular mb-4 text-[1.8rem] md:text-[2.2rem] leading-[0.95] tracking-tight"
        style={{
          color: "var(--foreground)",
          fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>

      <p
        className="font-editorial-regular max-w-[18rem] text-lg leading-relaxed text-white/52"
        style={{ fontFamily: "var(--font-pp-editorial-regular), Georgia, serif" }}
      >
        {content}
      </p>
    </div>
  );
}
