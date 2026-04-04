import Image from "next/image";

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
              <span
                className="font-editorial-italic"
                style={{
                  color: "var(--tertiary)",
                  fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 200,
                }}
              >
                {highlightWord}
              </span>{" "}
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
            style={{ background: "linear-gradient(90deg, rgba(120,177,131,0.6), transparent)" }}
          />
        </div>

        <div
          className="rounded-[2rem] border p-4 md:p-5"
          style={{
            background: "linear-gradient(180deg, rgba(16,38,31,0.88) 0%, rgba(13,31,26,0.94) 100%)",
            borderColor: "rgba(120,177,131,0.14)",
            boxShadow: "0 22px 70px rgba(0,0,0,0.18)",
          }}
        >
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-6">
            {items.map((item) => (
              <SkillCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ item }) {
  return (
    <article
      className="group relative flex min-h-[120px] items-center justify-center overflow-hidden rounded-[1.35rem] border px-4 py-4 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#ffffff",
        borderColor: "rgba(120,177,131,0.15)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
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
          <div className="relative flex h-14 w-full max-w-[160px] items-center justify-center md:h-16 md:max-w-[180px]">
            <Image
              src={item.imageSrc}
              alt={item.name}
              fill
              className="object-contain object-center scale-110"
              sizes="(max-width: 768px) 160px, 180px"
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
      className="relative flex h-10 w-[132px] items-center justify-center md:h-12 md:w-[150px]"
      aria-label={name}
      title={name}
    >
      <div
        className="absolute left-2.5 top-1/2 h-9 w-9 -translate-y-1/2 rounded-[1rem] border"
        style={{
          borderColor: hexToRgba(accent, 0.26),
          background: `linear-gradient(135deg, ${hexToRgba(accent, 0.26)}, rgba(255,255,255,0.05))`,
        }}
      />
      <div
        className="absolute left-[3rem] right-2 top-1/2 h-[0.82rem] -translate-y-1/2 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${hexToRgba(accent, 0.95)} 0%, ${hexToRgba(accent, 0.46)} 58%, rgba(255,255,255,0.08) 100%)`,
        }}
      />
      <div
        className="absolute left-[3rem] right-12 top-[58%] h-[0.24rem] rounded-full"
        style={{ background: hexToRgba(accent, 0.28) }}
      />
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
