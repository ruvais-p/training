import localFont from "next/font/local";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neueMetanaBlack = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMetanaNextOutline-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-neue-metana-black",
});

const ppEditorialItalic = localFont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew-UltralightItalic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-pp-editorial-italic",
});

const ppEditorialRegular = localFont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pp-editorial-regular",
});

const ppEditorialUltralight = localFont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-pp-editorial-ultralight",
});

export const metadata = {
  metadataBase: new URL("https://www.yacs.io"),

  title: {
    default: "YACS | AI Cybersecurity Cohort Kerala",
    template: "%s | YACS",
  },

  description:
    "AI-integrated Cybersecurity & AI/ML cohort with live mentorship, HR coaching, CEH preparation and career support.",

  alternates: {
    canonical: "https://www.yacs.io",
  },

  openGraph: {
    title: "YACS | AI Cybersecurity Cohort Kerala",
    description:
      "Train like a pro. Think like a hacker. AI-powered cybersecurity & AI/ML cohort.",

    url: "https://www.yacs.io",
    siteName: "YACS",

    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YACS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YACS",
    description:
      "AI-integrated Cybersecurity & AI/ML Cohort from Kerala.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";
import TopoBackground from "@/components/TopoBackground";
import FloatingContact from "@/components/FloatingContact";
import RegistrationPopup from "@/components/RegistrationPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="font-sans"
      suppressHydrationWarning
    >
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          neueMetanaBlack.variable,
          ppEditorialItalic.variable,
          ppEditorialRegular.variable,
          ppEditorialUltralight.variable,
          "antialiased"
        )}
        suppressHydrationWarning
      >
        <TopoBackground />
        <LanguageProvider>
          <Header />
          <main style={{ position: "relative", zIndex: 10 }}>{children}</main>
          <FloatingContact />
          <RegistrationPopup />
        </LanguageProvider>
      </body>
    </html>
  );
}
