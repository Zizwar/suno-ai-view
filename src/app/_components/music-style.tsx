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
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn, copyToClipboard } from "@/lib/utils";
import { Check, Clipboard, ClipboardCopy } from "lucide-react";
export default function MusicStyle() {
  const genreList = genre as Genre[];

  const [selectGenre, setSelectGenre] = useState("Danceable");

  const filterGenreList = genreList.find((item) => item.type === selectGenre);

  // const [copyState, setCopyState] = useState<boolean>(false);
  const [copyState, setCopyState] = useState<boolean[]>([]);

  useEffect(() => {
    // 如果找到了匹配的 Genre，根据其 list 属性的长度构造 copyState 数组
    if (filterGenreList && filterGenreList.list) {
      setCopyState(new Array(filterGenreList.list.length).fill(false));
    } else {
      setCopyState([]);
    }
  }, [filterGenreList]); // 依赖于 selectedGenre 的变化

  // 这样写有竞态条件
  // const handleCopy = (text: string, index: number) => {
  //   // 创建 copyState 的副本并更新指定 index 的值
  //   const updatedCopyState = [...copyState];
  //   updatedCopyState[index] = true;
  //   setCopyState(updatedCopyState);

  //   copyToClipboard(text);

  //   setTimeout(() => {
  //     updatedCopyState[index] = false;
  //     setCopyState(updatedCopyState);
  //   }, 2000);
  // };
  const handleCopy = (text: string, index: number) => {
    // 直接在 setState 中使用函数来确保获取最新的 state
    setCopyState((prevState) => {
      const updatedCopyState = [...prevState];
      updatedCopyState[index] = true;
      return updatedCopyState;
    });

    copyToClipboard(text);

    setTimeout(() => {
      setCopyState((prevState) => {
        const updatedCopyState = [...prevState];
        updatedCopyState[index] = false;
        return updatedCopyState;
      });
    }, 2000);
  };

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
          ? filterGenreList.list.map((item, index) => (
              <div
                key={item.value}
                className="aspect-none overflow-hidden rounded-lg"
              >
                <Card>
                  <div className="grid gap-4 p-6">
                    <div className="flex justify-between">
                      {item.value}
                      <Button
                        variant={"ghost"}
                        onClick={() => handleCopy(item.value, index)}
                      >
                        {copyState[index] ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <ClipboardCopy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
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
