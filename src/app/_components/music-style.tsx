"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wtQwyAJlHZj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Card } from "@/components/ui/card";
import genre from "../_data/genre.json";
import { Genre } from "@/types/song";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export default function MusicStyle() {
  const genreList = genre as Genre[];

  const [selectGenre, setSelectGenre] = useState("Danceable");

  const filterGenreList = genreList.find((item) => item.type === selectGenre);

  return (
    <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-start gap-6">
      <h2 className="self-center font-sans text-3xl font-semibold">
        Suno AI Music Style Intro
      </h2>
      <div className="grid grid-cols-6 items-start gap-2">
        {genreList.map((item) => (
          <div
            key={item.type}
            className="aspect-none overflow-hidden rounded-lg"
          >
            <Button
              variant={"ghost"}
              className={cn(
                "flex w-full items-center justify-start gap-4 rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-800",
                {
                  "bg-gray-200": item.type === selectGenre,
                },
              )}
              onClick={() => setSelectGenre(item.type)}
            >
              <MusicIcon className="h-8 w-8" />
              <div>{item.type}</div>
            </Button>
          </div>
        ))}
      </div>

      {/* style */}
      <div className="grid w-full grid-cols-2 items-start gap-6">
        {filterGenreList
          ? filterGenreList.list.map((item) => (
              <div
                key={item.value}
                className="aspect-none overflow-hidden rounded-lg"
              >
                <Card>
                  <div className="grid gap-4 p-6">
                    <div>{item.value}</div>
                    <div>{item.desc}</div>
                  </div>
                </Card>
              </div>
            ))
          : "Nothing yet"}
      </div>
    </div>
  );
}

function MusicIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
