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
    slug: "ai-roles-and-opportunities",
    title: "AI roles and opportunities — plain English map",
    excerpt:
      "What AI Engineer, Prompt Engineer, Forward Deployed Engineer, ML Engineer, and related roles actually mean day to day — and how AI Explorer maps to learning paths for each.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["Careers", "AI Engineering", "Roles"],
  },
  {
    slug: "ai-explorer-overview",
    title: "AI Explorer: learn AI Engineering with one evolving app",
    excerpt:
      "A full path from a basic LLM call to production habits — tools, RAG, agents, observability, Docker, CI/CD, evals — by growing one open-source product, not a pile of disconnected demos.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["AI Explorer", "AI Engineering", "Learning path"],
  },
  {
    slug: "ai-explorer-how-to-follow",
    title: "How to follow along with AI Explorer",
    excerpt:
      "Clone the repo, run with Docker or local API + web, set your OpenAI key, and walk the learning path one part at a time.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["AI Explorer", "Getting started"],
  },
  {
    slug: "ai-explorer-part-1-basic-llm",
    title: "AI Explorer Part 1: basic LLM chat (the foundation)",
    excerpt:
      "The first seam: Next.js UI → FastAPI → OpenAI Responses API → reply. Feature modules, Pydantic contracts, and an LLM adapter — before tools or RAG.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["AI Explorer", "Part 1", "FastAPI", "OpenAI"],
  },
  {
    slug: "ai-explorer-part-2-prompt-engineering",
    title: "AI Explorer Part 2: prompt engineering (modes you control)",
    excerpt:
      "Same model, different behavior. In plain English: you steer replies with instructions. Practitioners call that prompt engineering — tutor, coach, concise modes in the app.",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["AI Explorer", "Part 2", "Prompts"],
  },
  {
    slug: "ai-explorer-part-3-streaming",
    title: "AI Explorer Part 3: streaming replies",
    excerpt:
      "Waiting for the whole answer feels broken. Tokens can arrive as they’re generated — that’s streaming (SSE in this stack).",
    date: "2026-07-20",
    dateLabel: "Jul 20, 2026",
    status: "published",
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    tags: ["AI Explorer", "Part 3", "Streaming"],
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
  },
];

export function getWritingPost(slug: string): WritingPost | undefined {
  return writingPosts.find((post) => post.slug === slug);
}

export const publishedPosts = writingPosts.filter((p) => p.status === "published");
