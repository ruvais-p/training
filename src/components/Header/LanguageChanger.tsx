"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageChanger: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "hr" as const, name: "Croatian", flag: "🇭🇷" },
  ];

  const handleLanguageChange = (code: "en" | "hr") => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-dark h-[50px] rounded-full font-chakrapetch font-semibold flex gap-2 px-4 py-2 items-center tracking-wider"
      >
        {languages.find(lang => lang.code === language)?.flag} {language.toUpperCase()}
        <Icon
          icon="tabler:chevron-down"
          width="16"
          height="16"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-50 min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageChanger;