import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Banner from "./_components/banner";
import AuthProvider from "@/components/common/auth-provider";

export const metadata: Metadata = {
  title: "Suno AI Music | Revolutionary AI-Driven Music Creation Platform",
  description:
    "Discover Suno AI Music, the leading AI-driven music platform. Revolutionize your music creation with our advanced AI tools designed to enhance creativity",
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
      <head>
        <meta name="yandex-verification" content="951c843a1b905611" />
      </head>
      <body
        className={cn(
          " min-h-screen bg-background  font-sans antialiased ",
          fontSans.variable,
        )}
      >
        <AuthProvider>
          <Banner />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
      <Script
        async
        src="https://umami.runningpig.top/script.js"
        data-website-id="3d2f15fa-396b-4b80-8c92-a8ba9fba33b4"
      ></Script>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HXM2V2GL45"
      ></Script>
      <Script id="google-analytic">
        {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'G-HXM2V2GL45');
 `}
      </Script>
    </html>
  );
}
