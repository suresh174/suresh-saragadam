import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LearnProgressBar } from "@/components/learn/LearnProgressBar";
import { RoadmapTopicArticle } from "@/components/learn/RoadmapTopicArticle";
import {
  allRoadmapTopics,
  getRoadmapTopic,
} from "@/data/aiEngineerRoadmap";
import { ROADMAP_HUB_PATH, roadmapPhases } from "@/data/aiEngineerRoadmap/types";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allRoadmapTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getRoadmapTopic(slug);
  if (!topic) return { title: "Topic not found" };
  return {
    title: `${String(topic.number).padStart(2, "0")} — ${topic.title}`,
    description: topic.oneLiner,
  };
}

export default async function LearnTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getRoadmapTopic(slug);
  if (!topic) notFound();

  const phase = roadmapPhases.find((p) => p.id === topic.phase);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-20">
      <Link
        href={ROADMAP_HUB_PATH}
        className="nav-link text-sm font-medium text-ink-soft inline-flex items-center min-h-[44px]"
      >
        ← All topics
      </Link>

      <div className="mt-6 sm:mt-8">
        <LearnProgressBar />
      </div>

      <p className="mono-label mt-8">
        Topic {String(topic.number).padStart(2, "0")} of {allRoadmapTopics.length}
        {phase ? ` · ${phase.short}` : ""}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
        {topic.title}
      </h1>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft font-light">
        {topic.oneLiner}
      </p>

      <div className="mt-10">
        <RoadmapTopicArticle topic={topic} />
      </div>
    </div>
  );
}
