import React from "react";
import DownloadForm from "../_components/download-form";

type Props = {};

export default function DownloadPage({}: Props) {
  return (
    <div className="flex flex-col items-center gap-7">
      <div>
        <h2 className="mt-16 text-center font-sans font-semibold md:text-3xl">
          Download Suno Music
        </h2>
        <p className="mx-auto mt-3 w-full max-w-xl text-center text-muted-foreground">
          Input sudo ai music url, and we will download the music for you
        </p>
      </div>

      <div className="min-h-[60vh]  w-full max-w-xl ">
        <DownloadForm />
      </div>
    </div>
  );
}
