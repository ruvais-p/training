"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { headerData } from "./Navigation/menuData";
import HeaderLinks from "./Navigation/headerLinks";
import Link from "next/link";
import MobileHeaderLink from "./Navigation/mobileheaderLinks";

const uiFont = {
  fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
};

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
        className="fixed top-5 left-[2.5%] z-50 flex h-20 w-[95%] items-center rounded-3xl border border-white/5 bg-white/10 px-4 py-1 shadow-lg backdrop-blur-md transition-all duration-500"
        style={uiFont}
      >
        <div className="container mx-auto flex w-full max-w-full items-center justify-between px-2 py-4 lg:px-4 2xl:max-w-[1400px]">
          <div className="text-white">
            <Logo />
          </div>

          <nav
            className="hidden grow items-center justify-end whitespace-nowrap pr-8 text-sm lg:flex lg:space-x-6 xl:space-x-8"
            style={uiFont}
          >
            {headerData.map((item, index) => (
              <HeaderLinks key={index} item={item} />
            ))}
          </nav>

          <div className="nav-right hidden items-center lg:flex" style={uiFont}>
            <div className="flex items-center gap-3">
              <Link
                href="/apply-as-mentor"
                className="rounded-full border border-tertiary px-6 py-2.5 text-[13px] font-semibold tracking-[0.12em] text-tertiary transition-colors hover:bg-tertiary/10"
                style={uiFont}
              >
                Apply as Mentor
              </Link>
              <Link
                href="https://www.airtribe.live/backend-engineering/apply"
                className="rounded-full bg-tertiary px-6 py-2.5 text-[13px] font-semibold tracking-[0.12em] text-white transition-colors hover:bg-tertiary/90"
                style={uiFont}
              >
                Apply Now
              </Link>
            </div>
          </div>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="group block cursor-pointer p-2 lg:hidden"
            aria-label="Toggle mobile menu"
          >
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="mt-1.5 block h-0.5 w-4 bg-white transition-all duration-300 ease-in-out group-hover:w-6"></span>
            <span className="mt-1.5 block h-0.5 w-6 bg-white"></span>
          </button>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-50 h-screen w-full overflow-y-scroll bg-dark-blur p-8 shadow-2xl backdrop-blur-lg transition-transform duration-500 ease-in-out sm:w-[50%] lg:hidden ${navbarOpen ? "translate-x-0" : "translate-x-[110%]"
          }`}
        style={uiFont}
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

        <nav className="flex flex-col items-start py-6" style={uiFont}>
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-3" style={uiFont}>
          <Link
            href="/apply-as-mentor"
            className="mx-auto inline-flex w-fit rounded-full border border-tertiary px-6 py-3 text-center text-[13px] font-semibold tracking-[0.12em] text-tertiary transition-colors hover:bg-tertiary/10"
            style={uiFont}
          >
            Apply as Mentor
          </Link>
          <Link
            href="https://www.airtribe.live/backend-engineering/apply"
            className="mx-auto inline-flex w-fit rounded-full bg-tertiary px-6 py-3 text-center text-[13px] font-semibold tracking-[0.12em] text-white transition-colors hover:bg-tertiary/90"
            style={uiFont}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;