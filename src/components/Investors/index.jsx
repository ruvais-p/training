import Image from "next/image";
import BlurText from "@/components/BlurText";
import { Linkedin } from "lucide-react";
import { motion } from "motion/react";

const mentors = [
    {
        name: "Anil Tom",
        designation: "Senior Offensive Security Engineer",
        subDesignation: "6 years InfoSec · Red Teaming · Bug Bounty",
        bio: "Found vulnerabilities in 70+ companies including Google, Microsoft, and Apple. Specialist in red teaming, penetration testing, and offensive security research.",
        linkedin: "https://www.linkedin.com/in/aniltomank/",
        imageSrc: "/Investors/YACS mentor 2 anil.webp",
        tags: ["OSCP", "OSEP", "CRTO", "eWPTX", "BSCP", "OSDA"],
        themeColor: "#10B981"
    },
    {
        name: "Akshay P",
        designation: "Data Scientist, dSights AI",
        subDesignation: "4 years ML · AML Security Specialist",
        bio: "Building AI-driven solutions and machine learning pipelines at dSights AI. Specialist in AML (Anti-Money Laundering) & AI Security.",
        linkedin: "https://www.linkedin.com/in/akshayp12/",
        imageSrc: "/Investors/YACS mentor 4 akshay.webp",
        tags: ["AI/ML Engineering", "AML Security", "dSights AI"],
        themeColor: "#EAB308"
    },
    {
        name: "Eldho George",
        designation: "AppSec Engineer & Founder, YAS",
        subDesignation: "Forensic Expert · Income Tax Dept. Govt. · Ex-UST Global",
        bio: "Application security engineer and digital forensics expert. Forensic Expert at the Income Tax Department. MSc in Cyber Forensics. UST Global experience. Founder of YAS Community.",
        linkedin: "https://www.linkedin.com/in/eldhogeorgeofficial",
        imageSrc: "/Investors/YACS mentor 3 eldho.webp",
        tags: ["AppSec", "MSc Cyber Forensics", "Gov. Forensics"],
        themeColor: "#10B981"
    },
    {
        name: "Febi Dan Jose",
        designation: "Senior Talent Acquisition · Collabera",
        subDesignation: "5+ years HR & I/O Psychology",
        bio: "5+ years in Talent Acquisition and HR. Your mock interviews are run by the person who actually hires people, not a trainer guessing what HR wants. She places candidates for a living.",
        linkedin: "https://www.linkedin.com/in/febi-dan-jose-741407179/",
        imageSrc: "/Investors/YACS mentor 1 febi.webp",
        tags: ["I/O Psychology", "Talent Acquisition", "Collabera"],
        themeColor: "#EAB308"
    },
    {
        name: "Krishnaraj G",
        designation: "Security Consultant & Team Lead",
        subDesignation: "Enterprise IT Penetration Testing",
        bio: "Leads security teams in penetration testing, vulnerability assessment, and securing enterprise IT infrastructure. Manages real client security engagements, not lab simulations.",
        linkedin: "https://www.linkedin.com/in/krishnaraj-g-9ab8b2142",
        imageSrc: "/Investors/YACS mentor 5 krishanaraj.webp",
        tags: ["CompTIA PenTest+", "MCSE", "CCNA", "RHCE"],
        themeColor: "#10B981"
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
                        style={{ color: "#000000" }}
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

                {/* Grid Layout - 1 col mobile/tablet, 2+3 layout on xl (1024px+) */}
                <div className="grid grid-cols-1 gap-12 xl:grid-cols-6">
                    {mentors.map((mentor, index) => (
                        <MentorCard
                            key={mentor.name}
                            mentor={mentor}
                            index={index}
                            className={`w-full mx-auto max-w-[420px] ${index < 2 ? "xl:col-span-3" : "xl:col-span-2"}`}
                        />
                    ))}
                </div>

                {/* LinkedIn Verification and Apply Button */}
                <div className="mt-24 flex flex-col items-center text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl text-[1rem] md:text-[1.12rem] font-medium leading-relaxed text-black"
                        style={{ fontFamily: 'var(--font-geist-sans)', color: '#000000' }}
                    >
                        All mentors are verifiable on LinkedIn. No fake profiles. No borrowed credentials. <br className="hidden md:block" />
                        Click any link above and verify before you apply.
                    </motion.p>

                    <motion.a
                        href="https://form.jotform.com/261102001781440"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-7 inline-flex w-fit items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                        style={{
                            background: "rgba(217, 227, 138, 0.78)",
                            color: "#000000",
                            fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
                            boxShadow:
                                "0 10px 30px rgba(217, 227, 138, 0.18), 0 0 0 1px rgba(0,0,0,0.08) inset",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                        }}
                    >
                        LEARN FROM THEM
                    </motion.a>
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
            <div className="relative h-[420px] sm:h-[420px] md:h-[500px] xl:h-[420px] w-full overflow-hidden rounded-[2.5rem] ">
                <Image
                    src={mentor.imageSrc}
                    alt={mentor.name}
                    fill
                    className="object-contain transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Role Badge (Top Left over image) */}
                {mentor.role && (
                    <div className="absolute left-6 top-6 z-10 px-3 py-1 rounded-md bg-black/40 backdrop-blur-md border border-black/5">
                        <span className="text-[0.6rem] font-bold tracking-[0.2em] text-white/90">
                            {mentor.role}
                        </span>
                    </div>
                )}

                {/* LinkedIn Badge */}
                <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-black/30 text-white backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:border-[#0077B5] hover:bg-[#0077B5] hover:shadow-[0_0_20px_rgba(0,119,181,0.4)]"
                    title="Connect on LinkedIn"
                >
                    <Linkedin size={18} strokeWidth={1.5} />
                </a>

                {/* Bottom Content Over Image */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                    <p className="text-[1.1rem] font-medium text-white/90 leading-tight drop-shadow-md">
                        {mentor.designation}
                    </p>
                    <p className="text-[0.75rem] text-white/60 mt-1.5 font-medium drop-shadow-sm">
                        {mentor.subDesignation}
                    </p>
                </div>
            </div>

            {/* Content Area (Below Image) */}
            <div className="mt-6 px-4 text-center">
                <p className="text-[0.9rem] leading-relaxed text-black/60">
                    {mentor.bio}
                </p>

                {/* Tags Row */}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {mentor.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[0.62rem] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase"
                            style={{
                                backgroundColor: `${mentor.themeColor}15`,
                                border: `1px solid ${mentor.themeColor}30`,
                                color: mentor.themeColor
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article >
    );
}