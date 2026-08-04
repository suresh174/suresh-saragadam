"use client";

import { useLearning } from "./LearningProvider";

export function LearnProgressBar({ className = "" }: { className?: string }) {
  const { done, totalTopics, pct, hydrated } = useLearning();

  if (!hydrated) {
    return (
      <div className={`rounded-full bg-mist h-3 ${className}`} aria-hidden />
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between text-sm text-ink-soft mb-2">
        <span className="font-medium text-ink">
          {done} / {totalTopics} topics complete
        </span>
        <span>{pct}%</span>
      </div>
      <div
        className="h-3 rounded-full bg-mist overflow-hidden"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Learning progress"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-sea to-sea-deep transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
