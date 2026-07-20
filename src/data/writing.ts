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
};

export const writingPosts: WritingPost[] = [
  {
    slug: "fraud-check-teaching-lab",
    title: "Fraud Check: teaching exam integrity with a live camera",
    excerpt:
      "I built a beginner lab that watches your webcam in the browser, finds people and phones on-device, and coaches you in the moment — plus plain-English notes on why I chose the stack.",
    date: "2026-07-19",
    dateLabel: "Jul 19, 2026",
    status: "published",
    liveUrl: "https://fraud-check-chi.vercel.app",
    githubUrl: "https://github.com/suresh-ai-lab/fraud-check",
    tags: ["AI Labs", "On-device vision", "Teaching"],
  },
  {
    slug: "roadmap",
    title: "Learning roadmap",
    excerpt:
      "Notes on what I am studying next across LLM evaluation, observability, and production assistants. Coming soon.",
    date: "2026-07-01",
    dateLabel: "Soon",
    status: "soon",
    tags: ["Roadmap"],
  },
  {
    slug: "prompt-evals-in-production",
    title: "Keeping prompt changes safe in production",
    excerpt:
      "How evaluators, structured outputs, and monitoring help ship intent-aware assistants without breaking existing flows. Draft in progress.",
    date: "2026-07-01",
    dateLabel: "Soon",
    status: "soon",
    tags: ["Evals", "Production"],
  },
];

export function getWritingPost(slug: string): WritingPost | undefined {
  return writingPosts.find((post) => post.slug === slug);
}

export const publishedPosts = writingPosts.filter((p) => p.status === "published");
