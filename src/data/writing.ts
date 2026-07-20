export type WritingPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  status: "published" | "soon";
  /** External product / demo URL when the post is about a live lab */
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  /** When set, list this under "Other notes" rather than the lesson series */
  kind?: "series-hub" | "companion" | "lab";
};

export const writingPosts: WritingPost[] = [
  {
    slug: "ai-explorer-lessons",
    title: "AI Explorer lessons — Lesson 1 to 20",
    excerpt:
      "Numbered series for beginners: Lesson 1 (talk to an LLM) through Lesson 20 (Docker & CI). Each page has what you’ll learn, a recap, and a takeaway.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["AI Explorer", "Lessons", "Learning path"],
    kind: "series-hub",
  },
  {
    slug: "ai-roles-and-opportunities",
    title: "AI roles and opportunities — plain English map",
    excerpt:
      "What AI Engineer, Prompt Engineer, Forward Deployed Engineer, ML Engineer, and related roles actually mean day to day — and how AI Explorer maps to learning paths for each.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["Careers", "AI Engineering", "Roles"],
    kind: "companion",
  },
  {
    slug: "ai-explorer-overview",
    title: "AI Explorer: one evolving app (overview)",
    excerpt:
      "What the product is, why one app beats disconnected demos, and where the numbered lesson series starts.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["AI Explorer", "Overview"],
    kind: "companion",
  },
  {
    slug: "ai-explorer-how-to-follow",
    title: "How to run AI Explorer (setup)",
    excerpt:
      "Clone the repo, run with Docker or local API + web, set your OpenAI key — then start Lesson 1.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["AI Explorer", "Getting started"],
    kind: "companion",
  },
  {
    slug: "fraud-check-teaching-lab",
    title: "Fraud Check: exam integrity with a live camera",
    excerpt:
      "A beginner lab that watches your webcam in the browser, finds people and phones on-device, and coaches you in the moment — plus plain-English notes on the stack.",
    date: "2026-07-19",
    dateLabel: "Jul 19, 2026",
    status: "published",
    liveUrl: "https://fraud-check-chi.vercel.app",
    githubUrl: "https://github.com/suresh-ai-lab/fraud-check",
    tags: ["AI Labs", "On-device vision"],
    kind: "lab",
  },
];

export function getWritingPost(slug: string): WritingPost | undefined {
  return writingPosts.find((post) => post.slug === slug);
}

export const publishedPosts = writingPosts.filter((p) => p.status === "published");

export const seriesHubPost = writingPosts.find((p) => p.kind === "series-hub");
export const companionPosts = writingPosts.filter(
  (p) => p.kind === "companion" || p.kind === "lab",
);
