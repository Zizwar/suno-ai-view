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
    <header className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="Next.js Logo"
          width={50}
          height={37}
          priority
        />
        <span className="font-mono text-xl font-semibold">Suno AI Music</span>
      </div>

      <div className="flex gap-3 font-semibold">
        <Link
          className="hover:text-blue-500 transition-all duration-200"
          href="/"
        >
          Generate Lyrics
        </Link>
        <Link
          className="hover:text-blue-500 transition-all duration-200"
          href="/"
        >
          Download
        </Link>
        <Link
          className="hover:text-blue-500 transition-all duration-200"
          href="/"
        >
          View
        </Link>
      </div>

      {/* Login */}
      <div>
        <Button onClick={onLogin}>Login</Button>
      </div>
    </header>
  );
}
