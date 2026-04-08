"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { headerData } from "./Navigation/menuData";
import HeaderLinks from "./Navigation/headerLinks";
import Link from "next/link";
import MobileHeaderLink from "./Navigation/mobileheaderLinks";

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
        className="fixed h-20 px-4 top-5 left-[2.5%] py-1 z-50 w-[95%] flex navbar items-center transition-all duration-500 rounded-3xl bg-white/10 backdrop-blur-md border border-white/5 shadow-lg"
      >
        <div className="container mx-auto max-w-full 2xl:max-w-[1400px] flex justify-between items-center xl:gap-8 lg:gap-4 py-4 w-full px-4">
          <div className="text-white">
            <Logo />
          </div>

          <nav className="hidden lg:flex grow items-center justify-end xl:space-x-8 lg:space-x-6 space-x-4 text-sm whitespace-nowrap pr-8">
            {headerData.map((item, index) => (
              <HeaderLinks key={index} item={item} />
            ))}
          </nav>

          <div className="nav-right hidden lg:flex items-center">
            <div className="flex items-center gap-3">
              <Link
                href="/apply-as-mentor"
                className="text-tertiary border border-tertiary rounded-full text-[13px] font-bold px-6 py-2.5 tracking-wider hover:bg-tertiary/10 transition-colors"
              >
                Apply as Mentor
              </Link>
              <Link
                href="/offsec-training"
                className="bg-tertiary text-white rounded-full text-[13px] font-bold px-6 py-2.5 tracking-wider hover:bg-tertiary/90 transition-colors"
              >
                APPLY NOW
              </Link>
            </div>
          </div>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden block p-2 cursor-pointer group"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-4 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"></span>
            <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
          </button>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-screen w-full sm:w-[50%] lg:w-[40%] shadow-2xl bg-dark-blur backdrop-blur-lg p-10 z-50 transform transition-transform overflow-y-scroll duration-500 ease-in-out ${navbarOpen ? "-translate-x-0" : "translate-x-[110%]"
          }`}
      >
        <div className="text-white flex justify-between items-center w-full">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
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

        <nav className="flex flex-col items-start py-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className="flex flex-col mt-6 gap-3">
          <Link
            href="/apply-as-mentor"
            className="text-tertiary border border-tertiary rounded-full text-center text-[13px] font-bold px-6 py-3 tracking-wider hover:bg-tertiary/10 transition-colors w-fit mx-auto"
          >
            Apply as Mentor
          </Link>
          <Link
            href="/offsec-training"
            className="bg-tertiary text-white rounded-full text-center text-[13px] font-bold px-6 py-3 tracking-wider hover:bg-tertiary/90 transition-colors w-fit mx-auto"
          >
            Apply now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
