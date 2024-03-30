"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

type Props = {};

export default function Header({}: Props) {
  const onLogin = () => {
    toast.error("To be added soon");
  };
  return (
    <header className="mt-3 flex items-center justify-between px-4 sm:px-8">
      <div className="flex items-center gap-2">
        <Image
          className="relative h-9 w-12 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="Next.js Logo"
          width={50}
          height={37}
          priority
        />
        <span className="font-mono text-lg font-semibold sm:text-xl">
          Suno AI Music
        </span>
      </div>

      <nav className="hidden gap-6 font-semibold sm:flex">
        <Link
          className="transition-all duration-200 hover:text-blue-500"
          href="/"
        >
          Generate Lyrics
        </Link>
        <Link
          className="transition-all duration-200 hover:text-blue-500"
          href="/download"
        >
          Download
        </Link>
        <Link
          className="transition-all duration-200 hover:text-blue-500"
          href="/"
        >
          View
        </Link>
      </nav>

      {/* Responsive Menu for smaller screens */}
      <div className="sm:hidden">
        {/* Trigger for mobile menu (e.g., hamburger icon) */}
      </div>

      {/* Login */}
      <div>
        <Button onClick={onLogin}>Login</Button>
      </div>
    </header>
  );
}
