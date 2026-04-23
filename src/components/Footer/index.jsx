import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12 lg:px-16"
      style={{
        background: "rgba(255, 255, 255, 0.88)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div
          className="absolute left-4 top-0 h-36 w-36 sm:left-20 sm:h-48 sm:w-48 rounded-full blur-3xl"
          style={{ background: "rgba(90,155,104,0.08)" }}
        />
        <div
          className="absolute right-4 bottom-0 h-36 w-36 sm:right-20 sm:h-48 sm:w-48 rounded-full blur-3xl"
          style={{ background: "rgba(59,130,246,0.08)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 rounded-[1.6rem] sm:rounded-[2rem] border border-black/5 bg-black/[0.02] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 shadow-[0_20px_70px_rgba(0,0,0,0.06)] lg:min-h-[240px] lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="text-center lg:text-left">
              <p className="text-[1.25rem] sm:text-[1.45rem] md:text-[1.8rem] font-semibold tracking-[-0.03em] text-black leading-tight">
                Ready to start your journey?
              </p>
              <p
                className="mt-3 max-w-[520px] text-[0.92rem] sm:text-sm md:text-[1rem] leading-6 sm:leading-7 mx-auto lg:mx-0"
                style={{ color: "rgba(0,0,0,0.68)" }}
              >
                Join the cohort, learn from industry mentors, and build real cybersecurity skills.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:w-auto lg:justify-start">
              <Link
                href="/mentor"
                className="inline-flex min-h-[48px] sm:min-h-[52px] w-full sm:w-auto items-center justify-center rounded-full border px-6 sm:px-7 text-sm font-medium text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5A9B68] hover:bg-[#5A9B68]/10"
                style={{
                  color: "#2D5C3F",
                  borderColor: "rgba(90,155,104,0.45)",
                  background: "rgba(0,0,0,0.02)",
                }}
              >
                Apply as Mentor
              </Link>

              <Link
                href="https://www.airtribe.live/backend-engineering/apply"
                className="inline-flex min-h-[48px] sm:min-h-[52px] w-full sm:w-auto items-center justify-center rounded-full px-6 sm:px-7 text-sm font-semibold text-[#07120f] text-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(90deg, #5A9B68 0%, #79c28a 100%)",
                  boxShadow: "0 12px 30px rgba(90,155,104,0.25)",
                }}
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center gap-5 lg:items-end">
            <Link href="/" className="inline-flex items-center justify-center w-full">
              <div className="relative h-12 w-[180px] xs:w-[200px] sm:h-14 sm:w-[230px] md:h-16 md:w-[290px]">
                <Image
                  src="/logo/YACS LOGO white (1).png"
                  alt="YACS Logo"
                  fill
                  className="object-contain object-center lg:object-right invert"
                  priority
                />
              </div>
            </Link>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-end">
              <BottomSocial href="/" icon="ri:instagram-line" label="Instagram" />
              <BottomSocial href="/" icon="ri:linkedin-fill" label="LinkedIn" />
              <BottomSocial href="/" icon="ri:twitter-x-fill" label="Twitter" />
              <BottomSocial href="/" icon="ri:youtube-fill" label="YouTube" />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-center gap-4 text-center text-sm md:flex-row md:items-center md:justify-between md:text-left">
          <p style={{ color: "rgba(0,0,0,0.52)" }}>
            © 2026 YACS. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
            <FooterPolicyLink href="/" label="Privacy Policy" />
            <FooterPolicyLink href="/" label="Refund Policy" />
            <FooterPolicyLink href="/" label="Terms & Conditions" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterPolicyLink({ href, label }) {
  return (
    <Link
      href={href}
      className="transition-colors duration-300 hover:text-black text-[0.88rem] sm:text-sm"
      style={{ color: "rgba(0,0,0,0.7)" }}
    >
      {label}
    </Link>
  );
}

function BottomSocial({ href, icon, label }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-black/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#5A9B68] hover:bg-[#5A9B68]/10 hover:text-[#2D5C3F]"
    >
      <Icon icon={icon} width="18" height="18" />
    </Link>
  );
}