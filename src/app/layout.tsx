import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import { BASE_URL } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "700"],
  display: "swap",
});

const sharedDescription =
  "AI-first software engineer blending disciplined craft, agentic workflows, and faith-driven purpose.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Leighton Tidwell | AI-First Engineer",
  description: sharedDescription,
  keywords: [
    "Leighton Tidwell",
    "Software Engineer",
    "AI Engineer",
    "AI-First Development",
    "Agentic Workflows",
    "React",
    "Next.js",
    "GraphQL",
    "AWS",
    "Future",
    "Claude Code",
  ],
  authors: [{ name: "Leighton Tidwell" }],
  creator: "Leighton Tidwell",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Leighton Tidwell | AI-First Engineer",
    description: sharedDescription,
    url: BASE_URL,
    siteName: "Leighton Tidwell",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leighton Tidwell | AI-First Engineer",
    description: sharedDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${cormorant.variable} bg-background text-ink antialiased`}
      >
        <main className="mx-auto flex min-h-screen w-full justify-center px-6 pb-28 pt-28 sm:px-10 lg:px-16">
          <div className="flex w-full max-w-5xl flex-col gap-32">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
