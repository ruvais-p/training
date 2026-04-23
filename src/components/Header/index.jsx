"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { headerData } from "./Navigation/menuData";
import HeaderLinks from "./Navigation/headerLinks";
import Link from "next/link";
import MobileHeaderLink from "./Navigation/mobileheaderLinks";
import { Icon } from "@iconify/react";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-5 left-[2.5%] z-50 flex h-20 w-[95%] items-center rounded-3xl border border-black/5 bg-black/5 px-4 py-1 shadow-sm backdrop-blur-md transition-all duration-500 font-editorial-regular text-center lg:text-left"
      >
        <div className="container mx-auto flex w-full max-w-full items-center justify-between px-2 py-4 lg:px-4 2xl:max-w-[1400px]">
          <div className="text-black">
            <Logo />
          </div>

          <nav
            className="hidden grow items-center justify-end whitespace-nowrap pr-8 text-sm lg:flex lg:space-x-6 xl:space-x-8"
          >
            {headerData.map((item, index) => (
              <HeaderLinks key={index} item={item} isLight={true} />
            ))}
          </nav>

          <div className="nav-right hidden items-center lg:flex">
            <div className="flex items-center gap-3">
              <Link
                href="/apply-as-mentor"
                className="w-[180px] text-center rounded-full border border-tertiary px-6 py-2.5 text-[13px] font-semibold tracking-[0.12em] text-tertiary transition-colors hover:bg-tertiary/10"
              >
                Apply as Mentor
              </Link>
              <Link
                href="https://form.jotform.com/261102001781440"
                className="w-[180px] text-center rounded-full bg-tertiary px-6 py-2.5 text-[13px] font-semibold tracking-[0.12em] text-white transition-colors hover:bg-tertiary/90"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="tel:+910000000000"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3F744E]/90 border border-white/5 transition-colors hover:bg-white/20 active:scale-95"
              aria-label="Call Us"
            >
              <Icon icon="mdi:phone-in-talk" className="text-white text-lg" />
            </a>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/90 border border-white/5 transition-colors hover:bg-[#25D366] active:scale-95"
              aria-label="Chat on WhatsApp"
            >
              <Icon icon="mdi:whatsapp" className="text-white text-[1.35rem]" />
            </a>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="group ml-1 block cursor-pointer p-2"
              aria-label="Toggle mobile menu"
            >
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="mt-1.5 block h-0.5 w-4 bg-black transition-all duration-300 ease-in-out group-hover:w-6"></span>
              <span className="mt-1.5 block h-0.5 w-6 bg-black"></span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-50 h-screen w-full overflow-y-scroll bg-white/95 p-8 shadow-2xl backdrop-blur-lg transition-transform duration-500 ease-in-out sm:w-[50%] lg:hidden font-editorial-regular ${navbarOpen ? "translate-x-0" : "translate-x-[110%]"
          }`}
      >
        <div className="flex w-full items-center justify-between text-white">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
            className="p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center py-6">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} isLight={true} />
          ))}
        </nav>

        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            href="/apply-as-mentor"
            className="inline-flex w-[240px] justify-center rounded-full border border-tertiary px-6 py-3 text-center text-[13px] font-semibold tracking-[0.12em] text-tertiary transition-colors hover:bg-tertiary/10"
          >
            Apply as Mentor
          </Link>
          <Link
            href="https://www.airtribe.live/backend-engineering/apply"
            className="inline-flex w-[240px] justify-center rounded-full bg-tertiary px-6 py-3 text-center text-[13px] font-semibold tracking-[0.12em] text-white transition-colors hover:bg-tertiary/90"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;