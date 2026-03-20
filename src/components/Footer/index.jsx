import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <section
      className="w-full px-6 py-12 md:px-12 md:py-16 lg:px-16"
      style={{
        background: "linear-gradient(135deg, #143129 0%, #214538 55%, #2d5c3f 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto max-w-7xl px-0 py-0">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 lg:flex lg:w-[250px] lg:min-h-[180px] lg:items-center">
              <div>
                <p className="text-[1.75rem] font-semibold tracking-[-0.03em] text-white md:text-[2rem]">
                  Forum Invest
                </p>
                <p className="mt-4 text-[1.35rem] font-medium tracking-[-0.02em] text-white/90 md:text-[1.5rem]">
                  Copyright © 2026
                </p>
                <p className="mt-2 max-w-[220px] text-[0.95rem] font-normal leading-7" style={{ color: "rgba(232,245,239,0.68)" }}>
                  Small change. Big change.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid gap-6 md:grid-cols-3 lg:px-10">
                <FooterNavColumn
                  links={[
                    { href: "/", label: "Home" },
                    { href: "/contact", label: "Contact us" },
                  ]}
                />
                <FooterNavColumn
                  links={[
                    { href: "/", label: "How it works" },
                    { href: "/", label: "Privacy policy" },
                  ]}
                />
                <FooterNavColumn
                  links={[
                    { href: "/", label: "Our mission" },
                    { href: "/", label: "Ecosia" },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="h-px w-full" style={{ background: "rgba(232,245,239,0.18)" }} />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-6 text-sm md:text-base">
              <FooterPolicyLink href="/" label="Privacy Policy" />
              <FooterPolicyLink href="/" label="Refund Policy" />
              <FooterPolicyLink href="/" label="Terms & Conditions" />
            </div>
            <div className="flex flex-wrap gap-5 lg:justify-end">
              <BottomSocial icon="ri:twitter-fill" label="Twitter" />
              <BottomSocial icon="ri:instagram-line" label="Instagram" />
              <BottomSocial icon="ri:facebook-fill" label="Facebook" />
              <BottomSocial icon="ri:linkedin-fill" label="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterNavColumn({ links }) {
  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="flex items-center gap-4 text-[1rem] font-normal tracking-[-0.01em] transition-colors duration-300 hover:text-white md:text-[1.05rem]"
          style={{ color: "rgba(245,250,246,0.88)" }}
        >
          <span className="h-7 w-px" style={{ background: "rgba(90,155,104,0.95)" }} />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}

function FooterPolicyLink({ href, label }) {
  return (
    <Link
      href={href}
      className="transition-colors duration-300 hover:text-white"
      style={{ color: "rgba(245,250,246,0.76)" }}
    >
      {label}
    </Link>
  );
}

function BottomSocial({ icon, label }) {
  return (
    <Link
      href="/"
      aria-label={label}
      className="transition-transform duration-300 hover:-translate-y-0.5"
      style={{ color: "var(--tertiary)" }}
    >
      <Icon icon={icon} width="27" height="27" />
    </Link>
  );
}
