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
];export default function Investors() {
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

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {mentors.map((mentor, index) => (
                        <MentorCard key={mentor.name} mentor={mentor} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MentorCard({ mentor, index }) {
    return (
        <article
            className="group relative flex h-full min-h-[580px] flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-[#11261f]/40 to-[#0d1f1a]/80 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_70px_-20px_rgba(20,50,40,0.6)]"
            style={{
                transitionDelay: `${index * 50}ms`,
            }}
        >
            {/* Image Container - Significantly increased height on mobile/tablet */}
            <div className="relative h-[340px] sm:h-[300px] lg:h-[260px] w-full overflow-hidden shrink-0">
                <Image
                    src={mentor.imageSrc}
                    alt={mentor.name}
                    fill
                    className="object-cover object-top transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:brightness-110"
                    style={{ filter: "grayscale(20%)" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
                
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A14] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A14]/20 via-transparent to-transparent opacity-40" />

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

                {/* Subtile Hover Glow */}
                <div className="absolute -inset-1 z-0 bg-gradient-to-r from-transparent via-[#9fd0a6]/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>

            {/* Profile Content */}
            <div className="flex flex-1 flex-col p-7 sm:p-8">
                {/* Visual Accent */}
                <div className="mb-6 h-px w-full bg-white/5 group-hover:bg-[#9fd0a6]/20 transition-colors duration-500" />

                <div className="flex flex-col">
                    <h3
                        className="font-editorial-regular text-2xl font-light leading-tight tracking-tight text-white sm:text-3xl"
                        style={{ fontFamily: "var(--font-pp-editorial-regular), Georgia, serif" }}
                    >
                        {mentor.name}
                    </h3>
                    
                    <div className="mt-3 flex items-center">
                        <span className="h-[2px] w-4 bg-[#9fd0a6] mr-2 transition-all duration-500 group-hover:w-8" />
                        <p className="text-[0.8rem] font-black uppercase tracking-[0.2em] text-[#9fd0a6]">
                            {mentor.role}
                        </p>
                    </div>
                </div>

                <div className="mt-6 min-h-[60px]">
                    <p className="text-[0.95rem] leading-[1.6] text-white/70 transition-colors duration-500 group-hover:text-white/90">
                        {mentor.designation}
                    </p>
                </div>

                {/* Biography with expansion effect feel */}
                <div className="mt-auto border-t border-white/5 pt-6">
                    <p className="line-clamp-4 text-[0.88rem] leading-[1.8] text-white/40 transition-all duration-500 group-hover:text-white/60">
                        {mentor.bio}
                    </p>
                </div>
            </div>

            {/* Premium Animated Border Bottom */}
            <div className="absolute bottom-0 h-[3px] w-0 bg-gradient-to-r from-transparent via-[#5A9B68] to-transparent transition-all duration-1000 group-hover:w-full" />
        </article>
    );
}   
  