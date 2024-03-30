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
      <AiInputForm
        sunoSongData={sunoSongData}
        setSunoSongData={setSunoSongData}
        originalData={sunoSong}
      />

      <MusicCards sunoSong={sunoSongData} />
    </div>
  );
}
