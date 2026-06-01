"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const certUrls = {
  eJPT: "https://ine.com/security/certifications/ejpt-certification",
  CEH: "https://ethicalhacking.eccouncil.org/certified-ethical-hacker-ceh-v13-international",
  OSCP: "https://www.offsec.com/courses/pen-200/",
  "CompTIA PenTest+": "https://www.comptia.org/en/certifications/pentest/",
  CRTO: "https://training.zeropointsecurity.co.uk/courses/red-team-ops",
  "BSCP (PortSwigger)": "https://portswigger.net/web-security/certification",
  eWPT: "https://ine.com/security/certifications/ewpt-certification",
  OSWE: "https://www.offsec.com/courses/web-300/",
  eMAPT: "https://ine.com/security/certifications/emapt-certification",
  "GMOB (GIAC)": "https://www.giac.org/certifications/mobile-device-security-analyst-gmob",
  "CompTIA Security+": "https://www.comptia.org/en/certifications/security/",
  BTL1: "https://www.securityblue.team/certifications/blue-team-level-1",
  "BTL1 (beginner)": "https://www.securityblue.team/certifications/blue-team-level-1",
  "CySA+": "https://www.comptia.org/en/certifications/cybersecurity-analyst/",
  "SC-200 (Microsoft)": "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/",
  "SC-200": "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/",
  BTL2: "https://www.securityblue.team/certifications/blue-team-level-2",
  "Splunk Core Certified": "https://www.splunk.com/en_us/training/certification-track/splunk-core-certified-user.html",
  "IBM QRadar": "https://www.manageengine.com/log-management/sem/glp/siem-security-information-event-management-software.html",
  PNPT: "https://certifications.tcm-sec.com/pnpt/",
  "ATT&CK Fundamentals": "https://attack.mitre.org/resources/learn-more-about-attack/training/attack-fundamentals/",
  GCFE: "https://www.giac.org/certifications/certified-forensic-examiner-gcfe",
  GCFA: "https://www.giac.org/certifications/certified-forensic-analyst-gcfa",
  GCIH: "https://www.giac.org/certifications/certified-incident-handler-gcih",
  eCDFP: "https://ine.com/security/certifications/ecdfp-certification",
  EnCE: "https://www.opentext.com/learning-services/learning-paths-encase-certifications",
  "GREM (GIAC)": "https://www.giac.org/certifications/reverse-engineering-malware-grem",
  GCTI: "https://www.giac.org/certifications/cyber-threat-intelligence-gcti",
  "CTI Fundamentals (SANS)": "https://www.sans.org/cyber-security-courses/cyber-threat-intelligence",
  CCTIA: "https://www.eccouncil.org/train-certify/certified-threat-intelligence-analyst-ctia/",
  CISM: "https://www.isaca.org/credentialing/cism",
  CISA: "https://esi.edu.sa/en/courses/isaca-cisa/",
  CRISC: "https://www.isaca.org/credentialing/crisc",
  "ISO 27001 Lead Auditor": "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001/iso-iec-27001-lead-auditor",
  CISSP: "https://www.isc2.org/certifications/cissp",
  "AWS Security Specialty": "https://aws.amazon.com/certification/certified-security-specialty/",
  "AZ-500 (Microsoft)": "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/",
  CCSP: "https://www.isc2.org/certifications/ccsp",
  GCSA: "https://www.giac.org/certifications/cloud-security-automation-gcsa",
  "Google PCSE": "https://cloud.google.com/learn/certification",
  "CompTIA Network+": "https://www.comptia.org/en/certifications/network/",
  CCNA: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
  "CCNP Security": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/security/ccnp-security/index.html",
  "PCNSA (Palo Alto)": "https://www.paloaltonetworks.com/services/education/certification",
  "GICSP (GIAC)": "https://www.giac.org/certifications/global-industrial-cyber-security-professional-gicsp",
  CSSA: "https://firebrand.training/ie/certifications/courses/iacrb/certified-scada-security-architect-cssa-certification",
  "ISA/IEC 62443": "https://www.wolfssl.com/",
  GWEB: "https://www.giac.org/certifications/certified-web-application-defender-gweb",
  CSSLP: "https://www.isc2.org/certifications/csslp",
  SABSA: "https://sabsa.org/",
  TOGAF: "https://www.opengroup.org/certifications/togaf-certification-portfolio",
};

const groups = [
  {
    id: "offensive-security",
    label: "Offensive Security",
    roles: [
      {
        id: "red-team",
        name: "Red Team The Attackers",
        description:
          "Red teamers are paid to think like criminals. They try to break into systems, networks, and sometimes even physical buildings all with permission. Their job is to find weaknesses before real attackers do.",
        suits:
          "It's creative, technical work that changes constantly. If you love solving puzzles and thinking outside the box, this is probably your lane. Kerala students interested in ethical hacking can prepare for this through the YACS cybersecurity cohort, which covers offensive techniques under OSCP and CRTO certified mentors.",
        certs: ["eJPT", "CEH", "OSCP", "CompTIA PenTest+", "CRTO"],
      },
      {
        id: "web-app-pentesting",
        name: "Web Application Pentesting",
        description:
          "This sub-domain of red teaming focuses purely on hacking websites and web apps SQL injection, broken authentication, cross-site scripting. Most companies have a web presence, which means this skill is always in demand.",
        suits:
          "Bug bounty hunting where you get paid to find bugs in real websites is a popular entry point. At YACS, web application security (OWASP Top 10) is a core part of the curriculum for students in Kerala pursuing ethical hacking careers.",
        certs: ["BSCP (PortSwigger)", "eWPT", "OSWE", "CompTIA PenTest+"],
      },
      {
        id: "mobile-app-pentesting",
        name: "Mobile Application Pentesting",
        description:
          "Almost everything runs on an app these days banking, healthcare, government services. Mobile pentesters look for security flaws in Android and iOS apps. It's a niche area but a very valuable one.",
        suits:
          "If you're already into Android or iOS development, adding a security angle to that knowledge is a smart move that very few people make.",
        certs: ["eMAPT", "GMOB (GIAC)", "OSCP"],
      },
    ],
  },
  {
    id: "defensive-security",
    label: "Defensive Security",
    roles: [
      {
        id: "blue-team",
        name: "Blue Team The Defenders",
        description:
          "Blue teamers protect systems in real time. They monitor networks, hunt for threats hiding inside systems, and respond when something goes wrong. It involves a lot of log analysis, working with SIEM tools, and staying alert.",
        suits:
          "If you're detail-oriented and like the idea of catching attackers before they cause damage, blue team is your place. Kerala cybersecurity students benefit greatly from structured blue team training something YACS integrates throughout its cohort program.",
        certs: ["CompTIA Security+", "BTL1 (beginner)", "CySA+", "SC-200 (Microsoft)", "BTL2"],
      },
      {
        id: "soc-analyst",
        name: "SOC Analyst Security Operations Centre",
        description:
          "SOC analysts are the frontline of defence. They sit in a security operations centre and monitor alerts 24/7. When something suspicious shows up, they investigate and decide if it's a real threat or a false alarm.",
        suits:
          "It's one of the most common entry-level cybersecurity jobs and a great way to build experience fast. For fresh graduates in Kerala, a SOC analyst role is often the best first step into the industry.",
        certs: ["CompTIA Security+", "BTL1", "SC-200", "Splunk Core Certified", "IBM QRadar"],
      },
      {
        id: "purple-team",
        name: "Purple Team The Bridge",
        description:
          "Purple team is not really a separate group it's a mindset. Purple teamers bring red and blue together, running exercises where both sides learn from each other.",
        suits:
          "You typically need experience in both red and blue before moving here, but understanding what it is early on helps you prepare for it.",
        certs: ["PNPT", "CRTO", "BTL2", "ATT&CK Fundamentals"],
      },
    ],
  },
  {
    id: "forensics-malware",
    label: "Forensics & Malware",
    roles: [
      {
        id: "dfir",
        name: "Digital Forensics & Incident Response (DFIR)",
        description:
          "When a company gets hacked, someone has to figure out exactly what happened how did the attacker get in, what did they access, and how do we stop it from happening again? That's DFIR. It's like being a crime scene investigator for computers.",
        suits:
          "You collect evidence from systems, analyse it, and piece together a timeline of the attack. The YACS cohort includes forensics training delivered by a mentor with government forensics experience and an MSc in Cyber Forensics.",
        certs: ["GCFE", "GCFA", "GCIH", "eCDFP", "EnCE"],
      },
      {
        id: "malware-analysis",
        name: "Malware Analysis & Reverse Engineering",
        description:
          "Malware analysts take apart malicious software viruses, ransomware, spyware and figure out how it works. Reverse engineers go even deeper, reading the actual machine code of programs.",
        suits:
          "It's one of the most technical paths in cybersecurity and requires solid programming knowledge, especially in C and assembly. Difficult? Yes. In demand? Very much so.",
        certs: ["GREM (GIAC)", "CRTO", "OSCP"],
      },
    ],
  },
  {
    id: "intelligence-risk",
    label: "Intelligence & Risk",
    roles: [
      {
        id: "threat-intelligence",
        name: "Threat Intelligence",
        description:
          "Threat intelligence analysts study the attackers who they are, what tools they use, what targets they go after, and what's coming next. It's detective work that mixes technical knowledge with research and writing.",
        suits: "If you like understanding the 'why' behind attacks, this is a fascinating path.",
        certs: ["GCTI", "CTI Fundamentals (SANS)", "CySA+", "CCTIA"],
      },
      {
        id: "grc",
        name: "GRC Governance, Risk & Compliance",
        description:
          "Not everyone in cybersecurity runs attacks or writes code. GRC professionals handle the policy and legal side making sure organisations follow data protection laws, manage risk properly, and have the right policies in place.",
        suits:
          "It's one of the most in-demand and well-paying areas right now. Every company has to comply with regulations like GDPR, ISO 27001, and SOC 2 and they need people who understand how. For Kerala professionals looking for a high-paying cybersecurity career without a heavy technical background, GRC is underrated.",
        certs: ["CompTIA Security+", "CISM", "CISA", "CRISC", "ISO 27001 Lead Auditor", "CISSP"],
      },
    ],
  },
  {
    id: "infrastructure-cloud",
    label: "Infrastructure & Cloud",
    roles: [
      {
        id: "cloud-security",
        name: "Cloud Security",
        description:
          "Almost every company runs on cloud infrastructure now AWS, Azure, or Google Cloud. Cloud security specialists make sure that infrastructure is set up correctly and protected. A single misconfigured storage bucket has exposed millions of people's data at major companies.",
        suits:
          "This domain is growing fast and pays extremely well. If you're already comfortable with cloud platforms, adding security knowledge on top is one of the smartest moves you can make right now and YACS's AI-integrated cybersecurity program in Kerala covers this.",
        certs: ["AWS Security Specialty", "AZ-500 (Microsoft)", "CCSP", "GCSA", "Google PCSE"],
      },
      {
        id: "network-security",
        name: "Network Security",
        description:
          "Network security focuses on protecting the infrastructure that connects everything routers, switches, firewalls, VPNs. It requires a strong understanding of how networks work before you can secure them.",
        suits: "A background in networking (like a CCNA) is often a good starting point.",
        certs: ["CompTIA Network+", "CCNA", "CCNP Security", "CompTIA Security+", "PCNSA (Palo Alto)"],
      },
      {
        id: "ot-ics-security",
        name: "OT / ICS Security Industrial Systems",
        description:
          "OT and ICS security focuses on protecting critical infrastructure power plants, water treatment facilities, factories, hospitals. These systems were never designed with cybersecurity in mind, which makes them dangerously vulnerable.",
        suits:
          "As more infrastructure gets connected to the internet, demand for specialists in this area is rising sharply. It's niche, very well paid, and genuinely important work.",
        certs: ["GICSP (GIAC)", "CSSA", "CompTIA Security+", "ISA/IEC 62443"],
      },
    ],
  },
  {
    id: "development-architecture",
    label: "Development & Architecture",
    roles: [
      {
        id: "appsec",
        name: "Application Security (AppSec)",
        description:
          "AppSec engineers work with software development teams to make sure security is built into applications from the start not just bolted on at the end. They review code for vulnerabilities, set up security testing pipelines, and educate developers on secure coding practices.",
        suits:
          "If you can code and you're interested in security, AppSec is a really natural path. YACS's application security mentor has 6+ years of experience as an AppSec engineer and serves as a government forensic expert.",
        certs: ["GWEB", "CSSLP", "OSWE", "BSCP (PortSwigger)", "eWPT"],
      },
      {
        id: "security-architecture",
        name: "Security Architecture",
        description:
          "Security architects design how an organisation's entire security setup is structured from policies to technical controls. It's a senior-level role that requires experience across multiple domains.",
        suits:
          "You're not the one doing the day-to-day defending or attacking you're the one designing the system that everyone else operates within.",
        certs: ["CISSP", "SABSA", "TOGAF", "CISM"],
      },
    ],
  },
];

function CertPill({ cert }) {
  const url = certUrls[cert];
  const base =
    "inline-block rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/60 transition-colors";
  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} hover:border-[#5A9B68]/40 hover:text-[#5A9B68]`}
    >
      {cert} ↗
    </a>
  ) : (
    <span className={base}>{cert}</span>
  );
}

export default function CybersecurityCareerPathsPost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#040706] text-white">

        {/* ── Subtle top glow ── */}
        <div className="pointer-events-none fixed inset-x-0 top-0 h-[500px] -z-10"
          style={{ background: "radial-gradient(ellipse 70% 40% at 50% -10%, rgba(90,155,104,0.07) 0%, transparent 70%)" }}
        />

        {/* ── Article header ── */}
        <header className="mx-auto max-w-3xl px-6 pt-36 pb-12 md:pt-44">

          {/* Breadcrumb */}
          <nav className="mb-10 text-sm text-white/35">
            <Link href="/blog" className="hover:text-[#5A9B68] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/55">Career Paths</span>
          </nav>

          {/* Category */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#5A9B68]">
            Cybersecurity Careers
          </p>

          {/* Title */}
          <h1 className="text-[2.4rem] font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            So You Want to Work in Cybersecurity  {" "}
            <span className="bg-gradient-to-br from-[#5A9B68] to-emerald-400 bg-clip-text text-transparent">
              But Which Path Is Right for You?
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/50 sm:text-lg">
            Red team, blue team, cloud, malware, forensics here&apos;s what every domain
            actually does and which certifications can get you there.
          </p>

          {/* Meta */}
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/30">
            <span>May 31, 2026</span>
            <span>·</span>
            <span>12 min read</span>
            <span>·</span>
            <span>Careers · Certifications · Cybersecurity</span>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px bg-gradient-to-r from-[#5A9B68]/30 via-white/10 to-transparent" />
        </header>

        {/* ── Article body ── */}
        <article className="mx-auto max-w-3xl px-6 pb-24">

          {/* Intro prose */}
          <p className="mb-5 text-base leading-[1.85] text-white/65">
            Cybersecurity is not one job. It&apos;s an entire industry with dozens of
            specialisations each requiring a different mindset, different skills, and a
            different day-to-day. When you first look into it, terms like{" "}
            <strong className="font-semibold text-white">red team</strong>,{" "}
            <strong className="font-semibold text-white">SOC analyst</strong>,{" "}
            <strong className="font-semibold text-white">malware reverse engineer</strong>, and{" "}
            <strong className="font-semibold text-white">GRC</strong> all get thrown around like
            everyone already knows what they mean. They don&apos;t. And that&apos;s fine.
          </p>
          <p className="mb-16 text-base leading-[1.85] text-white/65">
            This guide breaks down every major cybersecurity domain what each one does,
            whether it suits you, and which certifications can get you there. Every certification
            links straight to its official page so you can dig deeper the moment something catches
            your eye.
          </p>

          {/* Domain groups */}
          {groups.map((group, gi) => (
            <section key={group.id} id={group.id} className="mb-20 scroll-mt-28">

              {/* Group label */}
              <h2 className="mb-8 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#5A9B68]">
                {String(gi + 1).padStart(2, "0")} {group.label}
              </h2>

              {/* Roles */}
              <div className="flex flex-col">
                {group.roles.map((role, ri) => (
                  <div key={role.id} id={role.id} className="scroll-mt-28">
                    {/* Role heading */}
                    <h3 className="mb-3 text-xl font-bold leading-snug text-white sm:text-2xl">
                      {role.name}
                    </h3>

                    {/* Description */}
                    <p className="mb-3 text-base leading-[1.85] text-white/65">
                      {role.description}
                    </p>

                    {/* "Is it for you" */}
                    <p className="mb-5 text-sm leading-[1.8] text-white/40 italic">
                      {role.suits}
                    </p>

                    {/* Certs */}
                    <div className="mb-2">
                      <span className="mr-3 text-xs font-semibold uppercase tracking-widest text-white/25">
                        Certifications
                      </span>
                      <span className="flex flex-wrap gap-2 mt-2">
                        {role.certs.map((c) => (
                          <CertPill key={c} cert={c} />
                        ))}
                      </span>
                    </div>

                    {/* Separator between roles, not after last */}
                    {ri < group.roles.length - 1 && (
                      <div className="my-10 h-px bg-white/[0.06]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Separator between groups */}
              {gi < groups.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </section>
          ))}

          {/* Where to start */}
          <div className="mt-4 mb-14 border-l-2 border-[#5A9B68]/40 pl-6">
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
              Where should you actually start?
            </h2>
            <div className="mb-7">
              <p className="mb-1 text-sm font-semibold text-white/80">1. Learn the foundations</p>
              <p className="text-base leading-[1.85] text-white/60">
                Get comfortable with basic networking (TCP/IP, DNS, how the internet works),
                Linux command-line basics, and general IT concepts. Every single domain above is
                built on them. At YACS, the 4-month cohort starts exactly here in Phase 1
                (Foundation), designed for students and career switchers in Kerala with zero prior
                cybersecurity experience.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-white/80">2. Get CompTIA Security+</p>
              <p className="text-base leading-[1.85] text-white/60">
                It doesn&apos;t matter which domain you end up in.{" "}
                <a
                  href={certUrls["CompTIA Security+"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5A9B68] underline decoration-[#5A9B68]/40 underline-offset-2 hover:decoration-[#5A9B68]"
                >
                  Security+
                </a>{" "}
                is vendor-neutral, widely respected, and covers enough ground to help you figure
                out what actually interests you. It&apos;s the best starting point for almost every
                cybersecurity career path.
              </p>
            </div>
          </div>

          {/* Final thought */}
          <div className="mb-14">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Final thought</h2>
            <p className="mb-4 text-base leading-[1.85] text-white/65">
              Cybersecurity is a long game. You&apos;re not going to master any of these domains in a
              few months and honestly, that&apos;s a good thing. There&apos;s always something new to
              learn, which means this field never gets stale.
            </p>
            <p className="text-base leading-[1.85] text-white/65">
              If you&apos;re in Kerala and serious about launching a cybersecurity career, pick the
              domain that excites you most from this list and look for a program that covers that
              specialisation with real mentorship.{" "}
              <strong className="font-semibold text-[#5A9B68]">YACS</strong> offers exactly that
              a structured 4-month cohort with domain experts, hardware labs, AI-integrated
              training, and dedicated placement support. The industry needs more good people, and
              there&apos;s room for all kinds of minds.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2 border-t border-white/[0.06] pt-8">
            {[
              "cybersecurity course kerala",
              "ethical hacking training kozhikode",
              "red team training kerala",
              "blue team course kerala",
              "SOC analyst training kerala",
              "cybersecurity career path india",
              "OSCP training kerala",
              "yacs.io",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/30"
              >
                #{tag.replace(/\s+/g, "")}
              </span>
            ))}
          </div>
        </article>

        {/* ── CTA Banner ── */}
        <section className="mx-auto max-w-3xl px-6 pb-32">
          <div className="rounded-2xl border border-[#5A9B68]/20 bg-[#5A9B68]/5 p-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5A9B68]">
              Kerala&apos;s #1 AI Cybersecurity Cohort
            </p>
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Pick Your Path We&apos;ll Get You There
            </h2>
            <p className="mb-8 text-white/45 leading-relaxed">
              OSCP &amp; CRTO certified mentors · Hardware labs · AI-integrated training ·
              Placement support · Offline in Kozhikode.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/apply"
                className="rounded-full bg-[#5A9B68] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#4a8a58] hover:scale-105"
              >
                Apply Now
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white/60 transition-all hover:text-white"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
