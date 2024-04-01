import { MetadataRoute } from "next";
import songData from "./_data/data.json";
import { SunoSong } from "@/types/song";

type CustomChangeFrequency =
  | "daily"
  | "always"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const sunoSong = songData as SunoSong[];
  const newUrls = sunoSong.map((item) => {
    return {
      url: `https://sunoai-music.com/detail/${item.clip.id}`, // 现在 card.href 确定是字符串
      lastModified: new Date(),
      changeFrequency: "daily" as CustomChangeFrequency,
      priority: 0.5, // 根据需要调整优先级
    };
  });

  const sitemapArray = [
    {
      url: "https://sunoai-music.com/",
      lastModified: new Date(),
      changeFrequency: "daily" as CustomChangeFrequency,
      priority: 1,
    },
  ];
  return [...sitemapArray, ...newUrls];
}
