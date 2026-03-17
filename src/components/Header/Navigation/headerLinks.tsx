"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderItem } from "@/type/menu";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const HeaderLinks: React.FC<{ item: HeaderItem; isLight?: boolean }> = ({
  item,
  isLight,
}) => {
  const path = usePathname();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      {/* Main Menu Item */}
      <Link
        href={item.href}
        className={`flex items-center gap-1 text-base font-normal transition-colors
          ${path === item.href
            ? isLight
              ? "text-black"
              : "text-white"
            : isLight
              ? "text-black/80 hover:text-black"
              : "text-white/80 hover:text-white"
          }
        `}
      >
        {item.label}

        {item.submenu && (
          <Icon
            icon="iconamoon:arrow-down-2-duotone"
            width={22}
            height={22}
            className={`transition-transform duration-300 ${submenuOpen ? "rotate-180" : ""
              }`}
          />
        )}
      </Link>

      {/* Dropdown */}
      {item.submenu && (
        <div
          className={`
            absolute left-0 top-10 mt-2 w-60 rounded-xl
            backdrop-blur-xl border
            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
            overflow-hidden z-50
            transition-all duration-300 ease-out
            ${scrolled
              ? "bg-black/60 border-white/10"
              : "bg-white/15 border-white/20"
            }
            ${submenuOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
            }
          `}
        >
          {/* Gloss highlight */}
          <div
            className={`
              absolute inset-0 pointer-events-none
              ${scrolled
                ? "bg-gradient-to-b from-white/10 to-transparent"
                : "bg-gradient-to-b from-white/25 to-transparent"
              }
            `}
          />

          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`
                relative block px-4 py-3 text-sm font-medium
                transition-all duration-200
                ${path === subItem.href
                  ? "bg-white/20 text-white"
                  : "text-white/90 hover:bg-white/20 hover:text-white"
                }
              `}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLinks;
