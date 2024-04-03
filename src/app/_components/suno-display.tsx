"use client";
import React, { useState } from "react";
import { SunoSong } from "@/types/song";
type Props = {};
import songData from "../_data/data.json";
import AiInputForm from "./ai-generate-form";
import MusicCards from "./music-card";
export default function SunoDisplay({}: Props) {
  const sunoSong = songData as SunoSong[];
  const [sunoSongData, setSunoSongData] = useState<SunoSong[] | undefined>(
    sunoSong,
  );

  return (
    <div>
      <h2 className="text-center">
        Number of Songs Created with Suno AI{" "}
        <span className="text-lg font-semibold text-blue-500">
          {sunoSong.length}
        </span>
      </h2>

      <AiInputForm
        sunoSongData={sunoSongData}
        setSunoSongData={setSunoSongData}
        originalData={sunoSong}
      />

      <MusicCards sunoSong={sunoSongData} />
    </div>
  );
}
