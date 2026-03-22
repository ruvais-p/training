import Image from "next/image";

const INVESTORS = [
    {
        name: "Kunal Shah",
        role: "CRED Founder",
        highlights: ["Advisor", "Sequoia Capital", "Angel Investor"],
        company: "CRED",
        initials: "KS",
        accent: "#76c48a",
        imageSrc: "/Investors/Kunal-Shah-1.webp",
    },
    {
        name: "Vidit Aatrey",
        role: "Meesho Founder",
        highlights: ["IIT Delhi", "Ex - InMobi"],
        company: "meesho",
        initials: "VA",
        accent: "#7fd6a6",
        imageSrc: "/Investors/Vidit-Aatrey.webp",
    },
    {
        name: "Vijay Shekhar",
        role: "Paytm Founder",
        highlights: ["Delhi College of Engineering", "Angel Investor"],
        company: "Paytm",
        initials: "VS",
        accent: "#88b5ff",
        imageSrc: "/Investors/Vijay-Shekhar.webp",
    },
    {
        name: "Mekin M",
        role: "Udhyam Founder",
        highlights: ["Ex - Flipkart", "Avid Angel Investors"],
        company: "Udhyam",
        initials: "MM",
        accent: "#9fd0a6",
        imageSrc: "/Investors/Mekin-Maheshwari.webp",
    },
    {
        name: "Abhiraj Bhal",
        role: "Urban Company Founder",
        highlights: ["IIM Ahmedabad", "IIT Kanpur"],
        company: "Urban Company",
        initials: "AB",
        accent: "#88d2a5",
        imageSrc: "/Investors/Abhiraj-Bhal.webp",
    },
    {
        name: "Varun Khaitan",
        role: "Urban Company Founder",
        highlights: ["IIT Kanpur", "Ex - BCG"],
        company: "Urban Company",
        initials: "VK",
        accent: "#7bc58b",
        imageSrc: "/Investors/Varun-Khaitan.webp",
    },
];

export default function Investors() {
    return (
        <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-24">
            <div className="relative mx-auto max-w-7xl">
                <div className="mb-12 max-w-3xl">
                    <p
                        className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] md:text-sm"
                        style={{ color: "rgba(159,208,166,0.84)" }}
                    >
                        Backed By
                    </p>
                    <h2
                        className="text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[3.2rem]"
                        style={{ color: "#f3f7f3" }}
                    >
                        <span
                            className="font-editorial-italic"
                            style={{
                                fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                                fontStyle: "italic",
                                fontWeight: 200,
                            }}
                        >
                            Supporters
                        </span>{" "}
                        <span
                            className="font-editorial-regular"
                            style={{
                                fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                                fontWeight: 400,
                            }}
                        >
                            and
                        </span>{" "}
                        <span
                            className="font-editorial-italic"
                            style={{
                                fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                                fontStyle: "italic",
                                fontWeight: 200,
                            }}
                        >
                            Investors
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-6 lg:grid-cols-3 xl:grid-cols-[repeat(6,minmax(0,1fr))_1.15fr]">
                    {INVESTORS.map((investor) => (
                        <InvestorCard key={investor.name} investor={investor} />
                    ))}

                    <aside
                        className="col-span-2 lg:col-span-3 xl:col-span-1 flex min-h-[160px] items-center justify-center border-t px-2 text-center xl:min-h-0 xl:justify-start xl:border-t-0"
                        style={{ borderColor: "rgba(120,177,131,0.16)" }}
                    >
                        <p
                            className="font-editorial-regular text-2xl font-medium leading-[1.15] tracking-[-0.04em] md:text-[2rem] xl:text-[2.1rem]"
                            style={{
                                color: "rgba(243,247,243,0.92)",
                                fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                            }}
                        >
                            ...and{" "}
                            <span
                                className="font-editorial-italic"
                                style={{
                                    color: "var(--tertiary)",
                                    fontFamily: "var(--font-pp-editorial-italic), Georgia, serif",
                                    fontStyle: "italic",
                                    fontWeight: 200,
                                }}
                            >
                                50+
                            </span>{" "}
                            startup
                            founders
                        </p>
                    </aside>
                </div>
            </div>
        </section>
    );
}

function InvestorCard({ investor }) {
    return (
        <article className="flex h-full flex-col">
            <div
                className={`relative mb-5 h-[166px] w-full max-w-[170px] overflow-hidden rounded-[1.7rem] border ${investor.imageSrc ? "" : "p-3.5"
                    }`}
                style={{
                    background: investor.imageSrc
                        ? "rgba(46,96,61,0.98)"
                        : "linear-gradient(180deg, rgba(46,96,61,0.98) 0%, rgba(40,84,56,0.98) 100%)",
                    borderColor: "rgba(132,196,145,0.16)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                }}
            >
                {!investor.imageSrc ? (
                    <div
                        className="absolute inset-0 opacity-70"
                        style={{
                            background:
                                "radial-gradient(circle at 50% 42%, rgba(255,255,255,0.08) 0%, transparent 42%)",
                        }}
                    />
                ) : null}

                <div className="relative flex h-full items-end justify-center">
                    {investor.imageSrc ? (
                        <div className="absolute inset-0 overflow-hidden rounded-[1.7rem]">
                            <Image
                                src={investor.imageSrc}
                                alt={investor.name}
                                fill
                                className="object-cover object-center"
                                sizes="170px"
                            />
                        </div>
                    ) : (
                        <div
                            className="flex h-[114px] w-[114px] items-center justify-center rounded-full border text-[1.55rem] font-semibold tracking-[-0.04em]"
                            style={{
                                color: "#f6faf6",
                                borderColor: "rgba(255,255,255,0.12)",
                                background: `radial-gradient(circle at 35% 30%, ${investor.accent}, rgba(22,44,35,0.94) 70%)`,
                                boxShadow: "0 18px 32px rgba(0,0,0,0.22)",
                            }}
                        >
                            {investor.initials}
                        </div>
                    )}
                </div>
            </div>

            <h3
                className="font-editorial-regular text-[1.15rem] font-medium tracking-[-0.045em] md:text-[1.1rem]"
                style={{
                    color: "#f3f7f3",
                    fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                }}
            >
                {investor.name}
            </h3>

            <div
                className="mt-3 min-h-[10.75rem] space-y-1 text-[0.8rem] leading-8 tracking-[-0.015em] md:min-h-[11.25rem]"
                style={{ color: "rgba(224,236,227,0.82)" }}
            >
                <p className="whitespace-nowrap text-[0.8rem] leading-6">
                    {investor.role}
                </p>
                {investor.highlights.map((line) => (
                    <p key={line}>{line}</p>
                ))}
            </div>

            <div
                className="mt-auto flex min-h-[4.6rem] items-start border-t pt-5"
                style={{ borderColor: "rgba(120,177,131,0.16)" }}
            >
                <p
                    className="whitespace-nowrap text-[0.9rem] font-semibold leading-none tracking-[-0.03em] md:text-[0.8rem] xl:text-[1.04rem]"
                    style={{ color: "rgba(243,247,243,0.98)" }}
                >
                    {investor.company}
                </p>
            </div>
        </article>
    );
}
