"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  song: z
    .string()
    .regex(/^https:\/\/app\.suno\.ai\/song\/([a-zA-Z0-9-]+)(?=\/|$)/),
});

async function getAudioBlob(url: string): Promise<Blob> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch audio: ${response.statusText}`);
  }
  return await response.blob();
}

export default function DownloadForm() {
  const [loading, setLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      song: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      // console.log(values);

      const match = values.song.match(
        /^https:\/\/app\.suno\.ai\/song\/([a-zA-Z0-9-]+)(?=\/|$)/,
      );
      if (!match) {
        throw new Error("Invalid song URL format.");
      }

      const songId = match[1];
      const audioUrl = `https://cdn1.suno.ai/${songId}.mp3`;

      const audioBlob = await getAudioBlob(audioUrl);

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(audioBlob);
      downloadLink.download = `audio-${songId}.mp3`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("error download");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="song"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Song URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://app.suno.ai/song/5c16c93d-0c60-4be1-a65f-c0fafe001a1b/"
                  {...field}
                />
              </FormControl>
              <FormDescription>Input Suno Music Url</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mx-auto flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
