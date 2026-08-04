"use client";

import type { RoadmapTopic } from "@/data/aiEngineerRoadmap/types";
import { useLearning } from "./LearningProvider";

export function LearnCheckpoint({ topic }: { topic: RoadmapTopic }) {
  const { isComplete, setComplete, hydrated } = useLearning();
  const checked = hydrated && isComplete(topic.id);

  return (
    <div className="rounded-[1.25rem] border-2 border-sea/25 bg-sea/5 p-5 sm:p-6">
      <label
        className="flex items-start gap-3 cursor-pointer"
        htmlFor={`checkpoint-${topic.id}`}
      >
        <input
          id={`checkpoint-${topic.id}`}
          type="checkbox"
          checked={checked}
          disabled={!hydrated}
          onChange={(e) => setComplete(topic.id, e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded accent-sea cursor-pointer"
        />
        <div>
          <span className="font-bold text-ink text-base">Checkpoint</span>
          <p className="mt-1 text-ink-soft font-light leading-relaxed">
            {topic.checkpoint}
          </p>
        </div>
      </label>
    </div>
  );
}
