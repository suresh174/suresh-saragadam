"use client";

import type { RoadmapTopic } from "@/data/aiEngineerRoadmap/types";
import { useLearning } from "./LearningProvider";

export function LearnNotesBox({ topic }: { topic: RoadmapTopic }) {
  const { getNotes, setNotes, hydrated } = useLearning();

  return (
    <div className="rounded-[1.25rem] border border-line bg-white/70 p-5 sm:p-6">
      <label
        htmlFor={`notes-${topic.id}`}
        className="block text-sm font-semibold text-ink mb-2"
      >
        My notes — what clicked?
      </label>
      <textarea
        id={`notes-${topic.id}`}
        value={hydrated ? getNotes(topic.id) : ""}
        disabled={!hydrated}
        onChange={(e) => setNotes(topic.id, e.target.value)}
        placeholder="Saved on this device. Export from the Learn hub to backup."
        rows={4}
        className="w-full rounded-xl border border-line bg-foam px-4 py-3 text-base text-ink font-light resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-sea/30"
      />
    </div>
  );
}
