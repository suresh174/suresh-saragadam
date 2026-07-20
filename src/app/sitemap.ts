import type { MetadataRoute } from "next";
import { aiExplorerLessons, SERIES_HUB_PATH } from "@/data/aiExplorerLessons";
import { writingPosts } from "@/data/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sureshsaragadam.vercel.app";
  const writingSlugs = writingPosts.map((p) => p.slug);
  const lessonUrls = aiExplorerLessons.map((lesson) => ({
    url: `${base}${SERIES_HUB_PATH}/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/about-bot`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/labs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/writing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...writingSlugs.map((slug) => ({
      url: `${base}/writing/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: slug === "ai-explorer-lessons" ? 0.95 : 0.85,
    })),
    ...lessonUrls,
    {
      url: `${base}/roadmap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
