import Image from "next/image";
import BlurText from "@/components/BlurText";
import { Linkedin } from "lucide-react";

const mentors = [
    {
        name: "Febi Dan Jose",
        designation: "Senior Talent Acquisition at Collabera",
        bio: "I/O Psychology & Human Resource professional with 5+ years of experience in Talent Acquisition and HR, specialising in identifying and placing top 1% talent across industries.",
        linkedin: "https://www.linkedin.com/in/febi-dan-jose-741407179/",
        imageSrc: "/Investors/YACS mentor 3.png",
    },
    {
        name: "Anil Tom",
        designation: "Senior Offensive Security Engineer",
        bio: "Offensive Security Engineer with 6 years in InfoSec, specialising in Red Teaming, Penetration Testing, and Bug Bounty — having uncovered vulnerabilities in 70+ companies including Google, Microsoft, and Apple. Certified in OSEP, OSCP, CRTO, eWPTX, BSCP & OSDA.",
        linkedin: "https://www.linkedin.com/in/aniltomank/",
        imageSrc: "/Investors/YACS mentor 2.png",
    },
    {
        name: "Eldho George",
        designation: "Application Security Engineer & Founder, YAS",
        bio: "Experienced Application Security Engineer with a strong blend of offensive security and digital forensics. Founder of the YAS Community and a Forensic Expert at the Income Tax Department, holding an MSc in Cyber Forensics & Information Security with hands-on experience at UST Global.",
        linkedin: "https://www.linkedin.com/in/eldhogeorgeofficial",
        imageSrc: "/Investors/YACS mentor 1 (1).png",
    },
    {
        name: "Akshay P",
        designation: "Data Scientist at dSights AI",
        bio: "Data Scientist at dSights AI with 4 years of experience, building AI-driven solutions and machine learning pipelines to turn complex business data into actionable insights specialising in AML & AI Security.",
        linkedin: "https://www.linkedin.com/in/akshayp12/",
        imageSrc: "/Investors/YACS mentor 4.png",
    },
    {
        name: "Krishnaraj G",
        designation: "Security Consultant & Team Lead",
        bio: "Cybersecurity professional specialising in penetration testing, vulnerability assessment, and securing enterprise IT infrastructure — leading teams, managing client engagements, and delivering business-driven security outcomes. Certified in CompTIA PenTest+, MCSE, CCNA & RHCE.",
        linkedin: "https://www.linkedin.com/in/krishnaraj-g-9ab8b2142",
        imageSrc: "/Investors/YACS mentor 5.png",
    },
];

export default function Investors() {
    return (
        <section className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-32">
            <div className="relative mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-16 max-w-3xl">
                    <p
                        className="mb-5 text-xs font-bold uppercase tracking-[0.4em] md:text-sm"
                        style={{ color: "rgba(159,208,166,0.9)" }}
                    >
                        LEARN FROM THE BEST
                    </p>
                    <h2
                        className="text-[2.8rem] font-medium leading-[0.9] tracking-[-0.04em] sm:text-[3.5rem] md:text-[4.5rem]"
                        style={{ color: "#f3f7f3" }}
                    >
                        <span
                            className="font-editorial-regular italic opacity-90"
                            style={{
                                fontFamily: "var(--font-pp-editorial-regular), Georgia, serif",
                                fontWeight: 300,
                            }}
                        >
                            Meet your
                        </span>{" "}
                        <BlurText
                            text="Mentors"
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
                            animationFrom={{ filter: "blur(10px)", opacity: 0, y: -20 }}
                            animationTo={[
                                { filter: "blur(4px)", opacity: 0.7, y: 2 },
                                { filter: "blur(0px)", opacity: 1, y: 0 },
                            ]}
                            stepDuration={0.3}
                        />
                    </h2>
                </div>

                {/* Grid Layout - 1 col under 768px, 2 on lg, 3 on xl */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {mentors.map((mentor, index) => (
                        <MentorCard
                            key={mentor.name}
                            mentor={mentor}
                            index={index}
                            className="w-full mx-auto max-w-[420px]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MentorCard({ mentor, index, className }) {
    return (
        <article
            className={`group relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 ${className}`}
            style={{
                transitionDelay: `${index * 50}ms`,
            }}
        >
            {/* Image Container */}
            <div className="relative h-[480px] sm:h-[560px] md:h-[500px] lg:h-[450px] xl:h-[420px] w-full overflow-hidden rounded-[2.5rem]">
                <Image
                    src={mentor.imageSrc}
                    alt={mentor.name}
                    fill
                    className="object-cover object-top transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                {/* LinkedIn Badge */}
                <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:border-[#0077B5] hover:bg-[#0077B5] hover:shadow-[0_0_25px_#0077B580]"
                    title="Connect on LinkedIn"
                >
                    <Linkedin size={22} strokeWidth={1.5} />
                </a>
            </div>

            {/* Content Area */}
            <div className="mt-6 px-2 text-center">
                <p className="text-[1.1rem] font-medium leading-tight text-white/90">
                    {mentor.designation}
                </p>
                <p className="mt-4 line-clamp-3 text-[0.88rem] leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                    {mentor.bio}
                </p>
            </div>
        </article >
    );
}