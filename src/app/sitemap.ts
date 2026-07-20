import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sureshsaragadam.vercel.app";
  const writing = [
    "ai-roles-and-opportunities",
    "ai-explorer-overview",
    "ai-explorer-how-to-follow",
    "ai-explorer-part-1-basic-llm",
    "ai-explorer-part-2-prompt-engineering",
    "ai-explorer-part-3-streaming",
    "fraud-check-teaching-lab",
  ];
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
    ...writing.map((slug) => ({
      url: `${base}/writing/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${base}/roadmap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
