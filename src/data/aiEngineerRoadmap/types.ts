export type RoadmapSection = {
  title: string;
  paragraphs: string[];
  isDeepDive?: boolean;
};

export type CodeExample = {
  title: string;
  code: string;
};

export type RoadmapTopic = {
  id: string;
  slug: string;
  number: number;
  phase: number;
  title: string;
  oneLiner: string;
  /** Plain-language analogy — small talk style */
  analogy: string;
  sections: RoadmapSection[];
  codeExample?: CodeExample;
  interviewBite: { q: string; a: string };
  checkpoint: string;
  exercise: string;
};

export type RoadmapPhase = {
  id: number;
  label: string;
  short: string;
};

export const ROADMAP_HUB_PATH = "/learn";

export const roadmapPhases: RoadmapPhase[] = [
  { id: 0, label: "Phase 0 — Start here", short: "Start" },
  { id: 1, label: "Phase 1 — Foundations", short: "Foundations" },
  { id: 2, label: "Phase 2 — ML & Deep Learning", short: "ML/DL" },
  { id: 3, label: "Phase 3 — LLM Core", short: "LLM Core" },
  { id: 4, label: "Phase 4 — Build with LLMs", short: "Build" },
  { id: 5, label: "Phase 5 — Agents & Models", short: "Agents" },
  { id: 6, label: "Phase 6 — Ship it", short: "Ship" },
  { id: 7, label: "Phase 7 — Interview + Project", short: "Finish" },
];
