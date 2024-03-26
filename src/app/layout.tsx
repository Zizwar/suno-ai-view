import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Suno AI Music | Revolutionary AI-Driven Music Creation Platform",
  description:
    "Discover Suno AI Music, the leading AI-driven music platform. Revolutionize your music creation with our advanced AI tools designed to enhance creativity and redefine musical boundaries.",
  keywords:
    "suno ai music, ai music creation, ai music production, ai music platform, artificial intelligence music, music ai technology, ai music composer, ai music generator, ai-powered music, music production ai software",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "container min-h-screen bg-background p-6 font-sans antialiased md:p-12",
          fontSans.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
      <Script
        async
        src="https://umami.runningpig.top/script.js"
        data-website-id="3d2f15fa-396b-4b80-8c92-a8ba9fba33b4"
      ></Script>
    </html>
  );
}
