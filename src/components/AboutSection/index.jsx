import Image from "next/image";
import BlurText from "@/components/BlurText";

const aboutCards = [
  {
    body: [
      "This is a 4-month online AI-integrated Cybersecurity Cohort Program built for individuals who want to enter the security industry with real skills, not just theory.",
      "We focus on hands-on learning, industry mentorship, and career readiness, so you don't just learn cybersecurity you become job-ready.",
    ],
    imageSrc: "/Investors/Kunal-Shah-1.webp",
    imageAlt: "Collaborative learning discussion",
    layout: "wide",
  },
  {
    body: [
      "You'll be trained by mentors with 5+ years of real industry experience, guided by AI Security Engineers, and supported by industry HR professionals who prepare you for interviews and career growth.",
    ],
    imageSrc: "/Investors/Mekin-Maheshwari.webp",
    imageAlt: "Community-driven workshop session",
    layout: "large",
  },
  {
    body: [
      "From day one, you'll work on practical scenarios, security tools, and real-world cases, building a strong portfolio that proves your skills.",
    ],
    imageSrc: "/Investors/Varun-Khaitan.webp",
    imageAlt: "Mentor-led learning support",
    layout: "standard",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-20 md:px-12 md:py-24"
      style={{ background: "transparent" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <h2
            className="font-editorial-regular text-[2.5rem] leading-[0.95] tracking-[-0.05em] md:text-[4rem]"
            style={{
              color: "#f3f7f3",
              fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
            }}
          >
            About the{" "}
            <BlurText
              text="Program"
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
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <AboutCard card={aboutCards[0]} className="lg:col-span-2" />
          <AboutCard card={aboutCards[1]} />
          <AboutCard card={aboutCards[2]} compactTop />
        </div>
      </div>
    </section>
  );
}

function AboutCard({ card, className = "", compactTop = false, hiddenDuplicate = false }) {
  if (hiddenDuplicate) return null;

  const isWide = card.layout === "wide";
  const imageHeight = isWide ? "h-[210px] md:h-[250px]" : "h-[220px] md:h-[260px]";

  return (
    <article
      className={`overflow-hidden rounded-[1.2rem] border p-4 md:p-5 ${className}`}
      style={{
        background: "#051008",
        borderColor: "rgba(255,255,255,0.06)",
        boxShadow: "0 14px 34px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.02)",
        backdropFilter: "blur(8px)",
      }}
    >
      {isWide ? (
        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.95fr] lg:items-start">
          <CardCopy body={card.body} compactTop={compactTop} />
          <CardImage src={card.imageSrc} alt={card.imageAlt} className="h-[140px] md:h-[165px]" />
        </div>
      ) : (
        <div className="flex h-full flex-col gap-4">
          <CardCopy body={card.body} compactTop={compactTop} />
          <CardImage src={card.imageSrc} alt={card.imageAlt} className={imageHeight} />
        </div>
      )}
    </article>
  );
}

function CardCopy({ body, compactTop }) {
  return (
    <div className={compactTop ? "" : "pt-1 space-y-4"}>
      {body.map((paragraph) => (
        <p
          key={paragraph}
          className="font-editorial-regular max-w-[68ch] text-[0.9rem] leading-7 md:text-[0.98rem]"
          style={{
            color: "rgba(255,255,255,0.72)",
            fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
          }}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function CardImage({ src, alt, className }) {
  return (
    <div className={`relative overflow-hidden rounded-[0.5rem] ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
    </div>
  );
}
