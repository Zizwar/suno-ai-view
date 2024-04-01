"use client";
import { getAudioBlob } from "@/app/_components/download-form";
import { Button } from "@/components/ui/button";
import { SunoSong } from "@/types/song";
import React from "react";
import toast from "react-hot-toast";

type Props = {
  displaySong: SunoSong;
};

export default function DownloadBtn({ displaySong }: Props) {
  const onDownload = async (downloadUrl: string) => {
    try {
      // console.log(values);

      const audioBlob = await getAudioBlob(downloadUrl);

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(audioBlob);
      downloadLink.download = `audio.mp3`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("error download");
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => onDownload(displaySong.clip.audio_url)}
      >
        Download
      </Button>
    </div>
  );
}
