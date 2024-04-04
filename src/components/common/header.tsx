"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { signOut, useSession } from "next-auth/react";
import LoginModal from "@/app/_components/login-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
type Props = {};

export default function Header({}: Props) {
  const onLogin = () => {
    toast.error("To be added soon");
  };
  const { data: session, status } = useSession();
  return (
    <header className="mt-3 flex w-full items-center justify-between px-4 sm:px-8">
      <div className="flex items-center gap-2">
        <a href="/" className="flex gap-2">
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
        </a>
      </div>

      <nav className="hidden gap-6 font-semibold sm:flex">
        {/* <Link
          className="transition-all duration-200 hover:text-blue-500"
          href="/generate"
        >
          Generate Lyrics
        </Link> */}
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
        {!session ? (
          // 原始方式
          // <Button>
          //   <Link href="/api/auth/signin">Sign In</Link>
          // </Button>
          <LoginModal />
        ) : (
          <div className="flex items-center gap-2">
            {/* <span className="text-base font-bold">Hi</span> */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                {session?.user?.image ? (
                  <Avatar>
                    <AvatarImage src={session?.user.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ) : (
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/36184555?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-20">
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {/* <Link
                    className="hover:text-blue-500"
                    href="/api/auth/signout"
                  >
                    <span>Log out</span>
                  </Link> */}
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  );
}
