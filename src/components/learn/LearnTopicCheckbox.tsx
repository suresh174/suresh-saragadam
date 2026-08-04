"use client";

import Link from "next/link";
import { topicPath } from "@/data/aiEngineerRoadmap";
import type { RoadmapTopic } from "@/data/aiEngineerRoadmap/types";
import { useLearning } from "./LearningProvider";

export function LearnTopicCheckbox({
  topic,
  showLabel = true,
}: {
  topic: RoadmapTopic;
  showLabel?: boolean;
}) {
  const { isComplete, setComplete, hydrated } = useLearning();
  const checked = hydrated && isComplete(topic.id);

  return (
    <div className="flex items-start gap-3 min-h-[44px] py-1">
      <input
        id={`learn-chk-${topic.id}`}
        type="checkbox"
        checked={checked}
        disabled={!hydrated}
        onChange={(e) => setComplete(topic.id, e.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 rounded border-line accent-sea cursor-pointer"
        aria-label={`Mark ${topic.title} complete`}
      />
      {showLabel ? (
        <div className="text-base leading-snug min-w-0">
          <Link
            href={topicPath(topic.slug)}
            className="font-semibold text-ink hover:text-sea transition-colors"
          >
            {String(topic.number).padStart(2, "0")} — {topic.title}
          </Link>
          <p className="text-sm text-ink-soft mt-0.5 font-light">{topic.oneLiner}</p>
        </div>
      ) : null}
    </div>
  );
}
