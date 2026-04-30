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
        className="fixed top-5 left-[2.5%] z-50 flex h-20 w-[95%] items-center rounded-3xl border border-white/5 bg-white/10 px-4 py-1 shadow-lg backdrop-blur-md transition-all duration-500 font-editorial-regular text-center lg:text-left"
      >
        <div className="container mx-auto flex w-full max-w-full items-center justify-between px-2 py-4 lg:px-4 2xl:max-w-[1400px]">
          <div className="text-white">
            <Logo />
          </div>

          <nav
            className="hidden grow items-center justify-end whitespace-nowrap pr-8 text-sm lg:flex lg:space-x-6 xl:space-x-8"
          >
            {headerData.map((item, index) => (
              <HeaderLinks key={index} item={item} />
            ))}
          </nav>

          <div className="nav-right hidden items-center lg:flex">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="w-[180px] text-center rounded-full border border-tertiary px-6 py-2.5 text-[13px] font-semibold tracking-[0.12em] text-tertiary transition-colors hover:bg-tertiary/10"
              >
                Apply as Mentor
              </Link>
              <Link
                href="/apply"
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
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="mt-1.5 block h-0.5 w-4 bg-white transition-all duration-300 ease-in-out group-hover:w-6"></span>
              <span className="mt-1.5 block h-0.5 w-6 bg-white"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setNavbarOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-[70] h-screen w-full sm:w-[320px] overflow-y-auto bg-white/10 border-l border-white/20 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-in-out lg:hidden font-editorial-regular ${navbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex w-full items-center justify-between pb-12">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-white transition-colors hover:bg-black/20 active:scale-95"
          >
            <Icon icon="mdi:close" className="text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-4 py-8">
          {headerData.map((item, index) => (
            <div key={index} className="w-full flex justify-center">
              <MobileHeaderLink item={item} setNavbarOpen={setNavbarOpen} />
            </div>
          ))}
        </nav>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-12">
          <Link
            href="/"
            onClick={() => setNavbarOpen(false)}
            className="flex h-12 w-full max-w-[240px] items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold tracking-wider text-white transition-all hover:bg-white/10 active:scale-[0.98]"
          >
            Apply as Mentor
          </Link>
          <Link
            href="/apply"
            onClick={() => setNavbarOpen(false)}
            className="flex h-12 w-full max-w-[240px] items-center justify-center rounded-full bg-white text-black px-6 text-sm font-semibold tracking-wider shadow-lg transition-all hover:bg-white/90 active:scale-[0.98]"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;