import React from "react";

import GeneratForm from "../_components/generate-form";
import MusicStyle from "../_components/music-style";

type Props = {};

export default function GeneratePage({}: Props) {
  return (
    <div className="flex flex-col items-center gap-7">
      <div>
        <h1 className="mt-16 text-center font-sans font-semibold md:text-3xl">
          Generate Suno AI lyrics prompts
        </h1>
        <p className="mx-auto mt-3 w-full max-w-xl text-center text-muted-foreground">
          Input a few words, and we will generate stlye,lyrics and title for you
        </p>
      </div>

      <div className="min-h-[60vh]  w-full max-w-xl ">
        <GeneratForm />
      </div>

      <div>
        <MusicStyle />
      </div>
    </div>
  );
}
