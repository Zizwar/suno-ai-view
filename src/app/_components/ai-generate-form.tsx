"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SunoSong } from "@/types/song";
type Props = {
  setSunoSongData?: React.Dispatch<
    React.SetStateAction<SunoSong[] | undefined>
  >;
  sunoSongData: SunoSong[] | undefined;
  originalData: SunoSong[];
};

export default function AiInputForm({
  originalData,
  sunoSongData,
  setSunoSongData,
}: Props) {
  const onReset = () => {
    if (!setSunoSongData) {
      return;
    }
    setSunoSongData(originalData);
  };

  const handleSunoSongFilter = (s: string) => {
    if (!setSunoSongData) {
      return;
    }
    const filterSongs = sunoSongData?.filter((song) =>
      song.clip.title.toLowerCase().includes(s.toLowerCase()),
    );
    setSunoSongData(filterSongs);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 阻止表单的默认提交行为

    // 获取表单内的输入元素，并从中提取值
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get("inputName") as string; // 'inputName' 是输入元素的 name 属性
    console.log("提交表单 value: ", inputValue === "");

    if (inputValue === "") {
      onReset();
      return;
    }

    // toast.success(`we are working on it, coming soon!`);
    handleSunoSongFilter(inputValue);
    // 这里可以处理 inputValue，例如发送到 API
  };
  return (
    <div className="mx-auto mt-6 max-w-md md:mt-12 md:max-w-xl">
      <form onSubmit={onSubmit} className="flex gap-2">
        <Input name="inputName" />
        <Button type="submit">Search</Button>
        <Button type="button" onClick={onReset}>
          Reset
        </Button>
      </form>
    </div>
  );
}
