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
    slug: "fraud-check",
    name: "Fraud Check",
    pitch:
      "I teach exam/interview integrity with your webcam: on-device person & phone detection, live alerts, and a beginner guide.",
    description:
      "A teaching lab for live integrity monitoring. Frames stay in the browser. TensorFlow.js COCO-SSD detects people and phones; simple rules coach you in the moment.",
    status: "live",
    stack: ["TensorFlow.js", "COCO-SSD", "Next.js", "On-device"],
    howItWorks: [
      "Allow the camera and start the integrity exam.",
      "The model draws boxes on people and phones in your browser.",
      "Rules turn risks into alerts and an integrity score — then read the teaching notes.",
    ],
    externalUrl: "https://fraud-check-chi.vercel.app",
    notesUrl: "/writing/fraud-check-teaching-lab",
    githubUrl: "https://github.com/suresh-ai-lab/fraud-check",
  },
  {
    slug: "reply-in-3",
    name: "Reply in 3",
    pitch:
      "Paste any message → get 3 ready replies (professional / friendly / firm) plus a clearer rewrite of what they meant.",
    description:
      "A tiny intent-aware reply assistant for email, LinkedIn, and chat. Built to feel instant and production-minded: structured output, clear tones, copy-ready drafts.",
    status: "planned",
    stack: ["Next.js", "Structured JSON", "Azure OpenAI / OpenAI"],
    howItWorks: [
      "You paste the incoming message (and optional context).",
      "The model clarifies what the sender likely means.",
      "You get three reply drafts in different tones, ready to copy.",
    ],
  },
  {
    slug: "messy-to-plan",
    name: "Messy → Plan",
    pitch:
      "Paste messy notes, chat dumps, or transcripts → decisions, action items, owners, and open questions.",
    description:
      "Turns unstructured text into a clean execution plan. Demonstrates structured extraction — the same discipline used in production GenAI assistants.",
    status: "planned",
    stack: ["Next.js", "Structured extraction", "Azure OpenAI / OpenAI"],
    howItWorks: [
      "Paste raw notes or a transcript.",
      "The model extracts decisions and action items.",
      "You get owners, open questions, and a short summary you can share.",
    ],
  },
  {
    slug: "this-or-that",
    name: "This or That",
    pitch:
      "Give option A vs B (+ criteria) → ranked pick with tradeoffs and risks.",
    description:
      "A catchy decision helper for tools, purchases, career choices, and more. Forces explicit criteria so the recommendation is explainable.",
    status: "planned",
    stack: ["Next.js", "Decision framing", "Azure OpenAI / OpenAI"],
    howItWorks: [
      "Describe option A and option B.",
      "Add what matters (cost, speed, quality, risk…).",
      "Get a ranked pick with tradeoffs and risks called out.",
    ],
  },
];

export const roadmapItems = [
  {
    phase: "Now",
    items: [
      "Fraud Check — live teaching lab (camera integrity + notes)",
      "Portfolio notes post explaining the lab in plain English",
      "Next public labs: AI Mirror, Helper Card",
    ],
  },
  {
    phase: "Next",
    items: [
      "AI Mirror — quiz on LLM dependence + healthier paths",
      "Helper Card — paperwork helper for older adults",
      "MediaPipe face/pose extras on Fraud Check (looking away)",
    ],
  },
  {
    phase: "Later",
    items: [
      "Reply in 3 / Messy → Plan / This or That as separate utilities",
      "Shareable result cards for LinkedIn demos",
      "Labeled clip eval set for Fraud Check regression tests",
    ],
  },
] as const;

export function getLab(slug: string): Lab | undefined {
  return labs.find((lab) => lab.slug === slug);
}
