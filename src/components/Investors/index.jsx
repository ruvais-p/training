import Image from "next/image";
import BlurText from "@/components/BlurText";
import { Linkedin } from "lucide-react";

const mentors = [
    {
        name: "Akshay P",
        role: "Data Scientist",
        designation: "Data Scientist with 3+ years experience",
        bio: "Specialized in building ML pipelines, NLP systems, and AI-driven solutions across cybersecurity, insurance, and FMCG domains.",
        linkedin: "https://www.linkedin.com/in/akshayp12/",
        imageSrc: "/Investors/Akshay.P.webp",
    },
    {
        name: "Anil Tom",
        role: "Senior Offensive Security Engineer",
        designation: "Senior Offensive Security Engineer at Unisys",
        bio: "6+ years in InfoSec, specializing in Red Teaming and Pentesting. OSCP, CRTO certified. Bug bounty hunter for Google, Microsoft & Apple.",
        linkedin: "https://www.linkedin.com/in/aniltomank/",
        imageSrc: "/Investors/Anil Tom.webp",
    },
    {
        name: "Febi Dan Jose",
        role: "Senior Talent Specialist",
        designation: "Senior Talent Specialist at Collabera",
        bio: "HR professional specializing in I/O Psychology and Talent Acquisition with 4+ years of experience in recruitment.",
        linkedin: "https://www.linkedin.com/in/febi-dan-jose-741407179/",
        imageSrc: "/Investors/Febin Dan Jose.webp",
    },
    {
        name: "Shabeer Ali Ibrahim",
        role: "Cyber Risk Security Consultant",
        designation: "Founder of TOFENCE®",
        bio: "Expert in cyber risk, compliance, and enterprise security (CISA, US DHS ISO/IEC 27001). Extensive experience across the Middle East.",
        linkedin: "https://www.linkedin.com/in/shabeeraliibrahim/",
        imageSrc: "/Investors/Shabeer Ali Ibrahim.webp",
    },
    {
        name: "Eldho George",
        role: "Cyber Risk Security Consultant",
        designation: "Entrepreneur & Cyber Risk Consultant",
        bio: "Founder of TOFENCE®. Expertise in cyber risk, compliance, and enterprise security with track record in cyber threat intelligence.",
        linkedin: "https://www.linkedin.com/in/shabeeraliibrahim/", // Keeping as provided
        imageSrc: "/Investors/Eldho George.webp",
    },
];

export default function Investors() {
    return (
        <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-24">
            <div className="relative mx-auto max-w-7xl">
                <div className="mb-12 max-w-3xl">
                    <p
                        className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] md:text-sm"
                        style={{ color: "rgba(159,208,166,0.8)" }}
                    >
                        LEARN FROM THE BEST
                    </p>
                    <h2
                        className="text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[3.2rem]"
                        style={{ color: "#f3f7f3" }}
                    >
                        <span
                            className="font-editorial-regular"
                            style={{
                                fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                                fontWeight: 400,
                            }}
                        >
                            Meet your
                        </span>{" "}
                        <BlurText
                            text="Mentors"
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

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {mentors.map((mentor) => (
                        <MentorCard key={mentor.name} mentor={mentor} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MentorCard({ mentor }) {
    return (
        <article
            className="group flex h-full min-h-[500px] flex-col overflow-hidden rounded-[2rem] border transition-all duration-300 hover:-translate-y-2"
            style={{
                background:
                    "linear-gradient(180deg, rgba(16,38,31,0.88) 0%, rgba(13,31,26,0.94) 100%)",
                borderColor: "rgba(120,177,131,0.14)",
                boxShadow: "0 22px 70px rgba(0,0,0,0.18)",
            }}
        >
            {/* Image Section */}
            <div className="relative h-[220px] w-full overflow-hidden shrink-0">
                <Image
                    src={mentor.imageSrc}
                    alt={mentor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1A] via-transparent to-transparent opacity-60" />

                <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:border-[#0077B5] hover:bg-[#0077B5]"
                    title="Connect on LinkedIn"
                >
                    <Linkedin size={20} />
                </a>
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-5">
                {/* Top Content Block */}
                <div className="flex flex-col">
                    {/* Name */}
                    <div className="min-h-[48px]">
                        <h3
                            className="line-clamp-2 font-editorial-regular text-[1.3rem] font-medium leading-tight tracking-[-0.04em]"
                            style={{
                                color: "#f3f7f3",
                                fontFamily:
                                    "var(--font-pp-editorial-regular), Georgia, serif",
                            }}
                        >
                            {mentor.name}
                        </h3>
                    </div>

                    {/* Role */}
                    <div className="mt-1.5 min-h-[44px]">
                        <p className="line-clamp-2 text-[0.82rem] font-semibold uppercase italic leading-relaxed tracking-wide text-[#9fd0a6]">
                            {mentor.role}
                        </p>
                    </div>

                    {/* Designation */}
                    <div className="mt-2 min-h-[58px]">
                        <p
                            className="line-clamp-3 text-[0.88rem] leading-relaxed"
                            style={{ color: "rgba(224,236,227,0.7)" }}
                        >
                            {mentor.designation}
                        </p>
                    </div>
                </div>

                {/* Bio Section */}
                <div
                    className="mt-4 flex-1 border-t pt-3"
                    style={{ borderColor: "rgba(120,177,131,0.1)" }}
                >
                    <p
                        className="line-clamp-5 text-[0.79rem] leading-relaxed"
                        style={{ color: "rgba(224,236,227,0.5)" }}
                    >
                        {mentor.bio}
                    </p>
                </div>
            </div>
        </article>
    );
}   