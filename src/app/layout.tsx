import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sureshsaragadam.vercel.app"),
  title: {
    default: "Suresh Saragadam — AI Engineer",
    template: "%s · Suresh Saragadam",
  },
  description:
    "AI Engineer building production GenAI assistants that understand intent, stay grounded in system data, and ship behind evals. Based in Visakhapatnam, India.",
  applicationName: "Suresh Saragadam",
  authors: [{ name: "Suresh Saragadam", url: "https://sureshsaragadam.vercel.app" }],
  creator: "Suresh Saragadam",
  keywords: [
    "AI Engineer",
    "GenAI",
    "Azure OpenAI",
    "Langfuse",
    "React",
    "Node.js",
    "Suresh Saragadam",
    "NielsenIQ",
  ],
  openGraph: {
    title: "Suresh Saragadam — AI Engineer",
    description:
      "Intent-aware assistants · Azure OpenAI · Langfuse · evals · React & Node.js.",
    url: "https://sureshsaragadam.vercel.app",
    siteName: "Suresh Saragadam",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/photos/suresh-portrait.png",
        width: 640,
        height: 800,
        alt: "Suresh Saragadam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suresh Saragadam — AI Engineer",
    description:
      "Building production LLM assistants that understand intent and answer from real system data.",
    images: ["/photos/suresh-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-ink">
        <div className="site-atmosphere" aria-hidden />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
