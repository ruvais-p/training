import Image from "next/image";
import BlurText from "@/components/BlurText";

export default function PlacementPartners({ partners = [] }) {
    return (
        <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] opacity-10"
                    style={{ background: "radial-gradient(circle, var(--tertiary), transparent 70%)" }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <p
                        className="text-[0.8rem] font-semibold uppercase tracking-[0.45em] mb-4"
                        style={{ color: "rgba(159,208,166,0.7)" }}
                    >
                        CAREER OUTCOMES
                    </p>
                    <h2
                        className="text-[2.5rem] md:text-[3.8rem] font-medium leading-tight tracking-[-0.03em]"
                        style={{ color: "#f3f7f3" }}
                    >
                        <span
                            className="font-editorial-regular"
                            style={{ fontFamily: "var(--font-pp-editorial-regular), Georgia, serif" }}
                        >
                            Our
                        </span>{" "}
                        <BlurText
                            text="Strategic"
                            as="span"
                            delay={300}
                            animateBy="words"
                            direction="top"
                            className="font-editorial-italic italic inline-flex"
                            segmentStyle={{
                                color: "var(--tertiary)",
                                fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                                fontWeight: 200
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
                            style={{ fontFamily: "var(--font-pp-editorial-regular), Georgia, serif" }}
                        >
                            Hiring Network
                        </span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group relative flex h-[160px] w-full max-w-[280px] sm:w-[320px] items-center justify-center p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2"
                            style={{
                                background: "rgba(255, 255, 255, 0.02)",
                                borderColor: "rgba(120, 177, 131, 0.12)",
                                backdropFilter: "blur(16px)",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"
                                style={{ background: `radial-gradient(circle at top left, ${partner.accent}15, transparent)` }}
                            />

                            <div className="relative h-16 w-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110">
                                <Image
                                    src={partner.imageSrc}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                    sizes="280px"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center justify-center gap-8 text-center lg:flex-row lg:text-left">
                    <p
                        className="max-w-2xl text-[0.98rem] md:text-[1.04rem] leading-7 tracking-[0.01em]"
                        style={{
                            color: "rgba(243,247,243,0.58)",
                            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                        }}
                    >
                        And this is just the beginning, our learners get visibility to a growing ecosystem of startups, product companies, and hiring teams actively recruiting cybersecurity professionals in India and across World.
                    </p>

                    <a
                        href="https://form.jotform.com/261102001781440"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full lg:w-auto justify-center shrink-0 items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02]"
                        style={{
                            background: "rgba(217, 227, 138, 0.78)",
                            color: "#000000",
                            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                            boxShadow:
                                "0 10px 30px rgba(217, 227, 138, 0.18), 0 0 0 1px rgba(255,255,255,0.08) inset",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                        }}
                    >
                        APPLY & GET PLACED
                    </a>
                </div>
            </div>
        </section>
    );
}
