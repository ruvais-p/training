"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const RegistrationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position and the total scrollable height
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate 50% of the page
      const centerPoint = (documentHeight - windowHeight) / 2;

      // Show the popup when user reaches or passes the center point
      if (!hasShown && scrollY >= centerPoint && centerPoint > 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case they are already in the middle
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShown]);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[480px] bg-[#020e04] border border-white/10 rounded-[40px] shadow-2xl p-8 sm:p-12 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-8 text-white/40 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={28} strokeWidth={2.5} />
            </button>

            <div className="flex flex-col items-center text-center">
              <h2 className="text-[28px] sm:text-[36px] font-metana-black text-white mb-4 leading-tight uppercase">
                Register to Get Started
              </h2>
              <p className="text-white/60 text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-[340px]">
                Enter your details to continue. Our team will guide you through lead to the next steps.
              </p>

              <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full h-[64px] bg-white/5 border border-white/10 rounded-[24px] px-8 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#14CF6D]/20 outline-none transition-all text-[16px]"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    className="w-full h-[64px] bg-white/5 border border-white/10 rounded-[24px] px-8 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#14CF6D]/20 outline-none transition-all text-[16px]"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full h-[64px] bg-white/5 border border-white/10 rounded-[24px] px-8 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#14CF6D]/20 outline-none transition-all text-[16px]"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="City *"
                    className="w-full h-[64px] bg-white/5 border border-white/10 rounded-[24px] px-8 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#14CF6D]/20 outline-none transition-all text-[16px]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[64px] mt-4 bg-[#14CF6D] text-black font-bold text-[18px] rounded-[24px] shadow-[0_10px_30px_rgba(20,207,109,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-tight"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationPopup;
