"use client";

import React from "react";
import { useLocale } from "next-intl";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const locales = ["en", "pt"];

const UsaFlag = ({ width = 24, height = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7410 3900"
    width={width}
    height={height}
  >
    <path fill="#b22234" d="M0 0h7410v3900H0z" />
    <path
      d="M0 450h7410M0 1170h7410M0 1890h7410M0 2610h7410M0 3330h7410"
      stroke="#fff"
      strokeWidth="300"
    />
    <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
    <g fill="#fff"></g>
  </svg>
);

const BrazilFlag = ({ width = 24, height = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 700"
    width={width}
    height={height}
  >
    <path fill="#009c3b" d="M0 0h1000v700H0z" />
    <path fill="#ffdf00" d="M500 85L890 350 500 615 110 350z" />
    <circle cx="500" cy="350" r="175" fill="#002776" />
    <path
      d="M325 390a400 400 0 00350-80"
      fill="none"
      stroke="#fff"
      strokeWidth="25"
    />
  </svg>
);

const localeFlagComponents: {
  [key: string]: React.FC<{ width?: number; height?: number }>;
} = {
  en: UsaFlag,
  pt: BrazilFlag,
};

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    if (newLocale !== currentLocale) {
      setCookie("NEXT_LOCALE", newLocale, { path: "/" });
      router.refresh();
    }
  };

  const otherLocales = locales.filter((l) => l !== currentLocale);

  return (
    <div className="flex items-center space-x-2">
      {otherLocales.map((locale: string) => {
        const FlagComponent = localeFlagComponents[locale];
        return (
          <button
            key={locale}
            onClick={() => handleChange(locale)}
            title={`Switch to ${locale === "en" ? "English" : "Portuguese"}`}
            className="p-1 rounded hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 flex items-center justify-center"
            aria-label={`Switch to ${
              locale === "en" ? "English" : "Portuguese"
            }`}
          >
            <FlagComponent width={24} height={16} />
          </button>
        );
      })}
    </div>
  );
}
