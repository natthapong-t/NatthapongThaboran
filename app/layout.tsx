import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Natthapong Thaboran — Software Developer & UX/UI Designer",
  description:
    "Portfolio of Natthapong Thaboran (Ton) - Software Developer & UX/UI Designer based in Bangkok, Thailand. Crafting clean, usable digital experiences with Next.js, React, Flutter, and Figma.",
  keywords: [
    "Natthapong Thaboran",
    "Frontend Developer",
    "Software Developer",
    "UX/UI Designer",
    "Bangkok Thailand",
    "Next.js Portfolio",
    "Flutter Developer",
    "BAAC Developer",
    "Fastwork Freelance",
  ],
  authors: [{ name: "Natthapong Thaboran", url: "https://github.com/natthapong-t" }],
  openGraph: {
    title: "Natthapong Thaboran — Portfolio",
    description:
      "Crafting clean, usable digital experiences with Next.js, React, Flutter, and Figma.",
    type: "website",
    locale: "th_TH",
  },
  icons: {
    icon: "/me.jpg",
    shortcut: "/me.jpg",
    apple: "/apple-icon.png",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#65a30d] selection:text-white">
        {children}
      </body>
    </html>
  );
}
