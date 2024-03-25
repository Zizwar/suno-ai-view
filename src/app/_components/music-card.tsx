"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NfDvERZS7va
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function MusicCards() {
  return (
    <div className="mt-[10rem] grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="relative">
        <CardHeader className="relative overflow-hidden rounded-t-lg">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              fill
              alt="Pop song"
              className="rounded-md object-cover"
              src="https://cdn1.suno.ai/image_5cc9deb4-69f8-4589-994e-e1925bc5c17a.png"
            />
          </AspectRatio>
          <div>{/* className="aspect-w-16 aspect-h-9" */}</div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium leading-none">Pop</div>
            <div className="text-right text-sm">423,123 likes</div>
          </div>
          <h2 className="mt-2 text-2xl font-bold">Summer Breeze</h2>
          <p className="mt-2 text-sm leading-snug text-gray-500">
            The perfect song for a sunny day. Let the music take you on a
            journey.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="overflow-hidden rounded-t-lg">
          <div className="aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                fill
                alt="Pop song"
                className="rounded-md object-cover"
                src="https://cdn1.suno.ai/image_5cc9deb4-69f8-4589-994e-e1925bc5c17a.png"
              />
            </AspectRatio>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium leading-none">Jazz</div>
            <div className="text-right text-sm">312,456 likes</div>
          </div>
          <h2 className="mt-2 text-2xl font-bold">Moonlight Serenade</h2>
          <p className="mt-2 text-sm leading-snug text-gray-500">
            Let the smooth sounds of the saxophone serenade you under the stars.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="overflow-hidden rounded-t-lg">
          <div className="aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                fill
                alt="Pop song"
                className="rounded-md object-cover"
                src="https://cdn1.suno.ai/image_5cc9deb4-69f8-4589-994e-e1925bc5c17a.png"
              />
            </AspectRatio>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium leading-none">Electronic</div>
            <div className="text-right text-sm">543,210 likes</div>
          </div>
          <h2 className="mt-2 text-2xl font-bold">Digital Dreams</h2>
          <p className="mt-2 text-sm leading-snug text-gray-500">
            Immerse yourself in the pulsating rhythms of the digital world with
            this electrifying track.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="overflow-hidden rounded-t-lg">
          <div className="aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                fill
                alt="Pop song"
                className="rounded-md object-cover"
                src="https://cdn1.suno.ai/image_5cc9deb4-69f8-4589-994e-e1925bc5c17a.png"
              />
            </AspectRatio>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium leading-none">Rock</div>
            <div className="text-right text-sm">654,321 likes</div>
          </div>
          <h2 className="mt-2 text-2xl font-bold">Highway to Nowhere</h2>
          <p className="mt-2 text-sm leading-snug text-gray-500">
            Crank up the volume and let the power chords transport you on an
            epic musical journey.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="overflow-hidden rounded-t-lg">
          <div className="aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                fill
                alt="Pop song"
                className="rounded-md object-cover"
                src="https://cdn1.suno.ai/image_5cc9deb4-69f8-4589-994e-e1925bc5c17a.png"
              />
            </AspectRatio>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium leading-none">Classical</div>
            <div className="text-right text-sm">987,654 likes</div>
          </div>
          <h2 className="mt-2 text-2xl font-bold">Symphony of Stars</h2>
          <p className="mt-2 text-sm leading-snug text-gray-500">
            Lose yourself in the timeless beauty of this orchestral masterpiece
            that captures the celestial grandeur of the cosmos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
