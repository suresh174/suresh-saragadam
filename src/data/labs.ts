export type LabStatus = "live" | "building" | "planned";

export type Lab = {
  slug: string;
  name: string;
  pitch: string;
  description: string;
  status: LabStatus;
  stack: string[];
  howItWorks: string[];
  /** When set, the lab card opens this URL instead of an on-site /labs/[slug] page */
  externalUrl?: string;
  notesUrl?: string;
  githubUrl?: string;
};

export const labs: Lab[] = [
  {
    slug: "ai-explorer",
    name: "AI Explorer",
    pitch:
      "Learn AI Engineering by growing one open-source app — from a basic LLM call all the way to production habits.",
    description:
      "One product, many parts. Chat, prompts, streaming, history, tools, SQL, embeddings, RAG, agents, LangGraph, MCP (real server + client), guardrails, Langfuse hooks, Prometheus, Grafana, Redis, Docker, CI/CD, and evals — without restarting a new demo each time.",
    status: "building",
    stack: [
      "FastAPI",
      "Pydantic",
      "OpenAI",
      "Next.js",
      "FAISS",
      "LangGraph",
      "Docker",
      "Grafana",
    ],
    howItWorks: [
      "Clone the repo and run with Docker Compose or local API + web.",
      "Chat with modes, streaming, tools, and RAG toggles.",
      "Follow LEARNING_PATH.md; each part is one concept with a clear status.",
    ],
    githubUrl: "https://github.com/suresh-ai-lab/ai-explorer",
    notesUrl: "/writing/ai-explorer-overview",
  },
  {
    slug: "fraud-check",
    name: "Fraud Check",
    pitch:
      "Exam/interview integrity with your webcam: on-device person & phone detection, live alerts, and a beginner guide.",
    description:
      "A lab for live integrity monitoring. Frames stay in the browser. TensorFlow.js COCO-SSD detects people and phones; simple rules coach you in the moment.",
    status: "live",
    stack: ["TensorFlow.js", "COCO-SSD", "Next.js", "On-device"],
    howItWorks: [
      "Allow the camera and start the integrity exam.",
      "The model draws boxes on people and phones in your browser.",
      "Rules turn risks into alerts and an integrity score — then read the notes.",
    ],
    externalUrl: "https://fraud-check-chi.vercel.app",
    notesUrl: "/writing/fraud-check-teaching-lab",
    githubUrl: "https://github.com/suresh-ai-lab/fraud-check",
  },
];

export const roadmapItems = [
  {
    phase: "Now",
    items: [
      "AI Explorer spine live in-repo: chat → tools → RAG → agents → Grafana/Docker/evals",
      "Portfolio notes: overview, Parts 1–3, how to follow, AI roles & opportunities",
      "Fraud Check — live side lab (camera integrity + notes)",
    ],
  },
  {
    phase: "Next",
    items: [
      "Optional pgvector backend; simple auth before a public hosted demo",
      "Simple auth + rate limits before a public hosted demo",
      "More portfolio part notes as each concept deserves a story",
    ],
  },
  {
    phase: "Later",
    items: [
      "Public hosted AI Explorer demo when auth + cost controls are solid",
      "Load-test scripts and deeper production hardening",
      "Electives only if they serve the learning path",
    ],
  },
] as const;

export function getLab(slug: string): Lab | undefined {
  return labs.find((lab) => lab.slug === slug);
}
