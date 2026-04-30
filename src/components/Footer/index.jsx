import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#040706] px-4 pt-16 pb-8 text-white md:px-8 lg:px-16">
      {/* Decorative SVG Curves */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg
          className="absolute top-[10%] left-[30%] w-[40%] text-[#5A9B68]"
          viewBox="0 0 400 100"
          fill="none"
        >
          <path
            d="M0,80 Q100,0 200,80 T400,80"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute bottom-[20%] right-[5%] w-[30%] text-[#5A9B68]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M200,200 Q150,100 100,150 T0,0"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="100" cy="150" r="10" stroke="currentColor" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Top Row: Address and Nav */}
        <div className="flex flex-col items-center justify-between gap-12 text-center lg:flex-row lg:items-start lg:text-left">
          {/* Address */}
          <div className="max-w-xs space-y-2 text-sm leading-relaxed opacity-80">
            <p>1st Floor, Carnival Infopark,</p>
            <p>Kakkanad,Kochi</p>
            <p>India</p>
            <p>682030</p>

          </div>

          {/* Nav Links and Socials */}
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-24">
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-16 md:gap-x-20 lg:gap-x-24">
              <div className="flex flex-col gap-3">
                <FooterLink href="/" label="Programs" />
                <FooterLink href="/" label="Blog" />
                <FooterLink href="/apply" label="Apply Now" />
              </div>
              <div className="flex flex-col gap-3">
                <FooterLink href="/terms" label="Terms & Conditions" />
                <FooterLink href="/privacy" label="Privacy Policy" />
                <FooterLink href="/refund" label="Refund Policy" />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 border-t border-white/5 pt-10 lg:border-none lg:pt-0">
              <SocialIcon href="/" icon="ri:youtube-fill" label="YouTube" />
              <SocialIcon href="https://www.instagram.com/yacs.io?igsh=MXU3ajF1bXE0dGRqdA%3D%3D&utm_source=qr" icon="ri:instagram-line" label="Instagram" />
              <SocialIcon href="/" icon="ri:linkedin-fill" label="LinkedIn" />
              <SocialIcon href="/" icon="ri:twitter-x-fill" label="Twitter" />
            </div>
          </div>
        </div>

        {/* High Impact Logo Section */}
        <div className="relative mt-20 mb-24 flex flex-col items-center justify-center">
          <div className="relative w-full h-[25vw] sm:h-[20vw] lg:h-[15vw] max-h-[280px] pointer-events-none select-none transition-transform duration-700 hover:scale-[1.02]">
            <Image
              src="/logo/YACS LOGO white (1).png"
              alt="YACS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>


        </div>

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 lg:flex-row">
          <p className="text-xs tracking-wider opacity-50 uppercase">
            © 2026 YACS LLP
          </p>

          <div className="mt-6 flex flex-col lg:flex-row items-center w-full lg:w-auto gap-3 lg:mt-0">
            <Link
              href="/apply"
              className="group flex w-full lg:w-auto items-center justify-center gap-2.5 rounded-full bg-[#5A9B68] px-6 py-3 text-white transition-all hover:bg-[#5A9B68]/90 hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_-10px_rgba(90,155,104,0.5)]"
            >
              <span className="text-sm font-bold uppercase tracking-wider">Apply Now</span>
              <Icon icon="lucide:arrow-right" className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://wa.me/+917306648019"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full lg:w-auto items-center justify-center gap-3 rounded-full bg-white/5 px-6 py-3 border border-white/10 transition-all hover:bg-[#5A9B68]/10 hover:border-[#5A9B68]/30"
            >
              <Icon icon="mdi:chat-outline" className="text-xl text-[#5A9B68]" />
              <span className="text-sm font-semibold">Let's chat</span>
            </a>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent("show-registration-popup"))}
              className="group flex w-full lg:w-auto items-center justify-center gap-3 rounded-full bg-white/5 px-6 py-3 border border-white/10 transition-all hover:bg-[#5A9B68]/10 hover:border-[#5A9B68]/30 cursor-pointer"
            >
              <Icon icon="mdi:email-outline" className="text-xl text-[#5A9B68]" />
              <span className="text-sm font-semibold">Contact us</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium opacity-70 transition-all hover:opacity-100 hover:text-[#5A9B68]"
    >
      {label}
    </Link>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-2xl opacity-70 transition-all hover:opacity-100 hover:text-[#5A9B68] hover:-translate-y-1"
    >
      <Icon icon={icon} />
    </Link>
  );
}

