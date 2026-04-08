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
  title: "CyberSecurity Expert | Master AI-Powered Security",
  description: "Advanced Cybersecurity training and AI-integrated security workshops for top-tier professionals. Learn to protect and build smarter with industry experts.",
};

import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";
import TopoBackground from "@/components/TopoBackground";

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
        </LanguageProvider>
      </body>
    </html>
  );
}
