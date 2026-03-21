"use client";
import { useEffect, useRef, useState } from "react";

export default function SectionReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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
