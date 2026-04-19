import Image from "next/image";
import BlurText from "@/components/BlurText";

export default function SkillStack({
  eyebrow = "SKILL STACK",
  title = "Tools you will learn",
  items = [],
  className = "",
}) {
  const [highlightWord = "", ...remainingWords] = title.split(" ");
  const remainingTitle = remainingWords.join(" ");

  return (
    <section className={`relative overflow-hidden px-6 py-20 md:px-12 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] md:text-sm"
              style={{ color: "rgba(159,208,166,0.8)" }}
            >
              {eyebrow}
            </p>

            <h2
              className="text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[3.75rem]"
              style={{ color: "#f3f7f3" }}
            >
              <BlurText
                text={highlightWord}
                as="span"
                delay={300}
                animateBy="words"
                direction="top"
                className="font-editorial-italic inline-flex"
                segmentStyle={{
                  color: "var(--tertiary)",
                  fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 200,
                }}
                animationFrom={{ filter: "blur(10px)", opacity: 0, y: -18 }}
                animationTo={[
                  { filter: "blur(4px)", opacity: 0.7, y: 2 },
                  { filter: "blur(0px)", opacity: 1, y: 0 },
                ]}
                stepDuration={0.28}
              />{" "}
              <span
                className="font-editorial-regular"
                style={{
                  fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                  fontWeight: 400,
                }}
              >
                {remainingTitle}
              </span>
            </h2>
          </div>

          <div
            className="h-px w-full md:max-w-[280px]"
            style={{
              background: "linear-gradient(90deg, rgba(120,177,131,0.6), transparent)",
            }}
          />
        </div>

        <div
          className="rounded-[1.75rem] border p-3 md:p-4"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,38,31,0.88) 0%, rgba(13,31,26,0.94) 100%)",
            borderColor: "rgba(120,177,131,0.14)",
            boxShadow: "0 22px 70px rgba(0,0,0,0.18)",
          }}
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-3.5 lg:grid-cols-4 xl:grid-cols-6">
            {items.map((item) => (
              <SkillCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* SEO-only: visually hidden but fully crawlable tool descriptions */}
        {items.some((i) => i.description) && (
          <dl className="sr-only">
            {items
              .filter((i) => i.description)
              .map((i) => (
                <div key={i.name}>
                  <dt>{i.name}</dt>
                  <dd>{i.description}</dd>
                </div>
              ))}
          </dl>
        )}
      </div>
    </section>
  );
}

function SkillCard({ item }) {
  return (
    <article
      className="group relative flex min-h-[110px] items-center justify-center overflow-hidden rounded-[1.1rem] border px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015]"
      style={{
        background: "rgba(255,255,255,0.98)",
        borderColor: "rgba(120,177,131,0.12)",
        boxShadow:
          "0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(159,208,166,0.42), transparent)",
        }}
      />

      <div className="flex w-full items-center justify-center">
        {item.imageSrc ? (
          <div className="relative h-20 w-full" style={{ maxWidth: "130px" }}>
            <Image
              src={item.imageSrc}
              alt={item.name}
              fill
              quality={100}
              className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
              sizes="130px"
            />
          </div>
        ) : (
          <LogoFallback name={item.name} accent={item.accent} />
        )}
      </div>
    </article>
  );
}

function LogoFallback({ name, accent }) {
  return (
    <div
      className="relative flex h-14 w-full items-center justify-center rounded-[0.85rem] border"
      aria-label={name}
      title={name}
      style={{
        maxWidth: "130px",
        borderColor: hexToRgba(accent, 0.26),
        background: `linear-gradient(135deg, ${hexToRgba(accent, 0.26)}, rgba(255,255,255,0.05))`,
      }}
    >
      <span
        className="text-[0.6rem] font-bold uppercase tracking-widest"
        style={{ color: hexToRgba(accent, 0.9) }}
      >
        {name.slice(0, 2)}
      </span>
    </div>
  );
}

function hexToRgba(hex, alpha) {
  const safeHex = hex.replace("#", "");
  const normalized =
    safeHex.length === 3
      ? safeHex
        .split("")
        .map((char) => char + char)
        .join("")
      : safeHex;

  const bigint = Number.parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}