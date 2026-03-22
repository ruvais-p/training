"use client";
import { useEffect, useRef, useState } from "react";

export default function SectionReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
 
    /**
     * Use IntersectionObserver to trigger the reveal animation
     * when the section enters the viewport. 
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we no longer need to observe
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Slight offset for smoother scroll feel
      }
    );
 
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-wrapper ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ 
        "--reveal-delay": `${delay}ms`,
        overflowX: "hidden",
        maxWidth: "100%"
      }}
    >
      {children}
    </div>
  );
}
