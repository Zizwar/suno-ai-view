import { SunoSong } from "@/types/song";
import songData from "../../_data/data.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import DownloadBtn from "../_components/DownloadBtn";
import Markdown from "react-markdown";

export default function Page({ params }: { params: { slug: string } }) {
  const sunoSong = songData as SunoSong[];

  const displaySong = sunoSong.find((song) => song.clip.id === params.slug);
  if (!displaySong) {
    return "Oops, Not Found";
  }
  const promptText = displaySong?.clip.metadata.prompt;
  const formattedPrompt = promptText.replace(/\n/g, "\n\n");

  return (
    <div className=" min-h-screen ">
      {/* My Post: {params.slug} */}

      <h2 className="text-center font-semibold tracking-tight md:text-3xl">
        Suno AI Song Made by Suno
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2">
        <Card>
          <CardHeader className="relative overflow-hidden rounded-t-lg px-6 py-2">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                fill
                alt="Pop song"
                className="rounded-md object-cover"
                src={displaySong.clip.image_url}
                // https://cdn1.suno.ai/image_5cc9deb4-69f8-4589-994e-e1925bc5c17a.png
              />
            </AspectRatio>
            <div>{/* className="aspect-w-16 aspect-h-9" */}</div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {displaySong.clip.metadata.tags.split(", ").map((item) => (
                <Badge variant={"outline"} key={item}>
                  {item}
                </Badge>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 items-center gap-4">
              <div className="text-left text-sm">
                {displaySong.clip.upvote_count} likes
              </div>
              <div className="flex items-center justify-end gap-2 text-sm">
                <Play className="h-4 w-4" />
                {displaySong.clip.play_count}
              </div>
            </div>

            <Link
              className="flex items-center justify-center gap-2 transition-all duration-200 hover:text-blue-500"
              href={`https://app.suno.ai/song/${displaySong.clip.id}`}
              target="_blank"
            >
              <h2 className=" text-xl font-bold">{displaySong.clip.title}</h2>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center justify-between gap-3">
              <audio
                className="mt-2 self-center"
                src={displaySong.clip.audio_url}
                controls
              />
              <DownloadBtn displaySong={displaySong} />
            </div>

            {/* <p>Card Content</p> */}
          </CardContent>
        </Card>

        <Card>
          <CardTitle className="text-center">Lyrics</CardTitle>
          <CardContent>
            {/* <p>{promptText}</p> */}
            <Markdown>{formattedPrompt}</Markdown>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
