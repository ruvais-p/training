"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { headerData } from "./Navigation/menuData";
import HeaderLinks from "./Navigation/headerLinks";
import Link from "next/link";
import { Icon } from "@iconify/react";
import MobileHeaderLink from "./Navigation/mobileheaderLinks";
import LanguageChanger from "./LanguageChanger";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
        className={`fixed h-20 px-4 top-5 left-[2.5%] py-1 z-50 w-[95%] flex navbar items-center transition-all duration-500 rounded-3xl 
        ${sticky
            ? "bg-black/80 backdrop-blur-lg shadow-lg w-[90%]"
            : "bg-white/10 backdrop-blur-sm"
          }`}
      >
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex justify-between items-center xl:gap-16 lg:gap-8 py-4">
          <div className="text-white">
            <Logo />
          </div>

          <nav className="hidden lg:flex grow items-center justify-center space-x-10 text-base">
            {headerData.map((item, index) => (
              <HeaderLinks key={index} item={item} />
            ))}
          </nav>

          <div className="nav-right gap-10 hidden lg:flex items-center">
            <LanguageChanger />
            <Link
              href="/contact"
              className="text-white bg-dark h-[50px] rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 w-auto justify-center items-center tracking-wider group"
            >
              Let&apos;s Talk
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
              />
            </Link>
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

        <div className="flex flex-col gap-4 mt-4">

          <div className="w-fit">
            <LanguageChanger />
          </div>

          <Link
            href="/contact"
            className="text-white bg-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group"
          >
            Let&apos;s Talk
            <Icon
              icon="tabler:arrow-right"
              width="24"
              height="24"
              className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;