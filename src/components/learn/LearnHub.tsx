"use client";

import {
  allRoadmapTopics,
  topicsInPhase,
} from "@/data/aiEngineerRoadmap";
import { roadmapPhases } from "@/data/aiEngineerRoadmap/types";
import { LearnProgressBar } from "./LearnProgressBar";
import { LearnProgressToolbar } from "./LearnProgressToolbar";
import { LearnTopicCheckbox } from "./LearnTopicCheckbox";
import { useLearning } from "./LearningProvider";

function PhaseTracker() {
  const { progress, hydrated } = useLearning();

  return (
    <div className="overflow-x-auto rounded-[1.25rem] border border-line bg-white/55">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-line text-left text-ink-soft">
            <th className="px-4 py-3 font-semibold">Phase</th>
            <th className="px-4 py-3 font-semibold">Topics</th>
            <th className="px-4 py-3 font-semibold">Done</th>
          </tr>
        </thead>
        <tbody>
          {roadmapPhases.map((phase) => {
            const topics = topicsInPhase(phase.id);
            const phaseDone = topics.filter(
              (t) => hydrated && progress.completed[t.id],
            ).length;
            const allDone = phaseDone === topics.length && topics.length > 0;
            return (
              <tr key={phase.id} className="border-b border-line/60 last:border-0">
                <td className="px-4 py-3 text-ink">{phase.short}</td>
                <td className="px-4 py-3 text-ink-soft">{topics.length}</td>
                <td
                  className={`px-4 py-3 font-semibold ${allDone ? "text-sea" : "text-ink-soft"}`}
                >
                  {hydrated ? `${phaseDone}/${topics.length}` : "—"}
                  {allDone ? " ✓" : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function LearnHub() {
  return (
    <div className="space-y-10">
      <LearnProgressBar />
      <LearnProgressToolbar />

      {roadmapPhases.map((phase) => {
        const topics = topicsInPhase(phase.id);
        if (!topics.length) return null;
        return (
          <section key={phase.id}>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink sm:text-2xl">
              {phase.label}
            </h2>
            <ul className="mt-4 divide-y divide-line rounded-[1.25rem] border border-line bg-white/55 px-4 sm:px-5">
              {topics.map((topic) => (
                <li key={topic.id} className="py-3 sm:py-4">
                  <LearnTopicCheckbox topic={topic} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink sm:text-2xl">
          Phase tracker
        </h2>
        <div className="mt-4">
          <PhaseTracker />
        </div>
      </section>

      <p className="text-sm text-ink-soft font-light">
        Progress saved on this device ({allRoadmapTopics.length} topics). Use
        Export before switching phone or laptop.
      </p>
    </div>
  );
}
