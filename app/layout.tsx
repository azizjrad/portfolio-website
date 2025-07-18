import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aziz Jrad - Portfolio",
  description:
    "Passionate developer creating beautiful, functional, and user-centered digital experiences",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
          <SpeedInsights />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
