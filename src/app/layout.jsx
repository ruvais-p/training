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
    default: "YACS | AI Cybersecurity & AI/ML Cohort — Kerala",
    template: "%s | YACS",
  },

  description:
    "Join Kerala's only AI-powered Cybersecurity & AI/ML Cohort. 4-month live program, industry mentors, HR coaching, CompTIA/CEH prep + vouchers.",

  applicationName: "YACS",

  openGraph: {
    title:
      "YACS | Kerala's AI Cybersecurity Cohort — Train. Build. Get Hired.",
    description:
      "4-month AI-integrated cybersecurity program. Live mentors, HR coaching, CEH prep.",

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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://www.yacs.io",
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
