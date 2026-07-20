import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    "Python",
    "Pydantic",
    "React",
    "Node.js",
    "Grafana",
    "Suresh Saragadam",
    "NielsenIQ",
  ],
  openGraph: {
    title: "Suresh Saragadam — AI Engineer",
    description:
      "Intent-aware assistants · Azure OpenAI · Python · evals · React & Node.js.",
    url: "https://sureshsaragadam.vercel.app",
    siteName: "Suresh Saragadam",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/photos/suresh.png",
        width: 800,
        height: 1000,
        alt: "Suresh Saragadam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suresh Saragadam — AI Engineer",
    description:
      "Building production LLM assistants that understand intent and answer from real system data.",
    images: ["/photos/suresh.png"],
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
      className={`${poppins.variable} ${mono.variable} h-full antialiased`}
      style={{
        // Poppins for both display (bold) and body (light)
        ["--font-display" as string]: "var(--font-poppins)",
        ["--font-sans" as string]: "var(--font-poppins)",
      }}
    >
      <body className="flex min-h-full flex-col font-light text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
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
