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
import { Check, ClipboardCopy, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Markdown from "react-markdown";
import { copyToClipboard } from "@/lib/utils";
const formSchema = z.object({
  lyrics: z.string(),
  style: z.string(),
  title: z.string().min(5, {
    message: "title must be at least 5 characters.",
  }),
});

type aiRespType = {
  lyrics: string;
  style: string;
  title: string;
};

export async function getAudioBlob(url: string): Promise<Blob> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch audio: ${response.statusText}`);
  }
  return await response.blob();
}

export default function GeneratForm() {
  const [loading, setLoading] = useState(false);
  const [generateSuno, setGenerateSuno] = useState<aiRespType>();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lyrics: "",
      style: "",
      title: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      toast.success(JSON.stringify(values));
      const resp = await fetch("/api/chat-openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lyrics: values.lyrics,
          style: values.style,
          title: values.title,
        }),
      });
      if (!resp.ok) {
        throw new Error("chat failed");
      }
      // const aiResp = await resp.json();
      // 假设 respJson 的结构类似于上面的 JSON 示例
      const respJson = await resp.json(); // 第一次解析
      const aiResp = JSON.parse(respJson.data); // 第二次解析
      console.log("ai resp", aiResp);
      setGenerateSuno(aiResp);
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("error download");
    } finally {
      setLoading(false);
    }
  }
  const [copyState, setCopyState] = useState<boolean>();
  const handleCopy = (text: string) => {
    // 直接在 setState 中使用函数来确保获取最新的 state
    setCopyState(true);

    copyToClipboard(text);

    setTimeout(() => {
      setCopyState(false);
    }, 2000);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title (Must)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="a few words about the topic
                  "
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Input your favorite style Style Cheatseet See below
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lyrics"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lyrics (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="a few words e.g. a happy girl / a cute dog"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Input a few words, and we will generate the Suno AI format
                  lyrics for you
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style (optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="female singer / synthwave / dark / Jazz ...
                 "
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Input your favorite style Style Cheatseet See below
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mx-auto flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Generate
          </Button>
        </form>
      </Form>

      {generateSuno && (
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <h2 className="text-xl font-semibold md:text-3xl">Title</h2>
            <Button
              variant={"ghost"}
              onClick={() => handleCopy(generateSuno.title)}
            >
              {copyState ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <ClipboardCopy className="h-4 w-4" />
              )}
            </Button>
          </div>

          <p>{generateSuno.title}</p>

          <div className="flex gap-3">
            <h2 className="text-xl font-semibold md:text-3xl">Lyric</h2>
            <Button
              variant={"ghost"}
              onClick={() => handleCopy(generateSuno.lyrics)}
            >
              {copyState ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <ClipboardCopy className="h-4 w-4" />
              )}
            </Button>
          </div>

          <Markdown>{generateSuno.lyrics}</Markdown>

          <div className="flex gap-3">
            <h2 className="text-xl font-semibold md:text-3xl">Style</h2>
            <Button
              variant={"ghost"}
              onClick={() => handleCopy(generateSuno.style)}
            >
              {copyState ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <ClipboardCopy className="h-4 w-4" />
              )}
            </Button>
          </div>

          <p>{generateSuno.style}</p>
        </div>
      )}
    </div>
  );
}
