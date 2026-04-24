"use client";

import { Icon } from "@iconify/react";

export default function FloatingContact({ isFloating = true }) {
  if (!isFloating) {
    return (
      <div className="flex flex-row items-center gap-4">
        {/* Call Button */}
        <a
          href="tel:+917306648019"
          className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#3F744E] shadow-[0_4px_20px_rgba(63,116,78,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_24px_rgba(63,116,78,0.5)]"
          aria-label="Call Us"
        >
          <Icon icon="mdi:phone-in-talk" className="text-white text-2xl" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+917306648019"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)]"
          aria-label="Chat on WhatsApp"
        >
          <Icon icon="mdi:whatsapp" className="text-white text-3xl" />
        </a>
      </div>
    );
  }

  return (
    <div
      className="fixed hidden sm:flex bottom-6 right-6 z-50 flex-col gap-4 sm:bottom-8 sm:right-8"
      style={{
        transformOrigin: "bottom right"
      }}
    >
      <div className="flex flex-col gap-4 scale-90 sm:scale-100 origin-bottom-right">

        {/* Call Button */}
        <a
          href="tel:+910000000000"
          className="group flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-[#3F744E] shadow-[0_8px_32px_rgba(63,116,78,0.4)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(63,116,78,0.6)]"
          aria-label="Call Us"
        >
          <Icon icon="mdi:phone-in-talk" className="text-white text-3xl" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)]"
          aria-label="Chat on WhatsApp"
        >
          <Icon icon="mdi:whatsapp" className="text-white text-4xl" />
        </a>

      </div>
    </div>
  );
}
