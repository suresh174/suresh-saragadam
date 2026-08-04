"use client";

import { useLearning } from "./LearningProvider";

export function LearnProgressToolbar() {
  const { exportProgress, importProgress, resetProgress, hydrated } = useLearning();

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className="btn-secondary !text-sm !min-h-10"
        onClick={exportProgress}
        disabled={!hydrated}
      >
        Export progress
      </button>
      <label className="btn-secondary !text-sm !min-h-10 cursor-pointer inline-flex items-center">
        Import progress
        <input
          type="file"
          accept="application/json"
          className="hidden"
          disabled={!hydrated}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) importProgress(file);
            e.target.value = "";
          }}
        />
      </label>
      <button
        type="button"
        className="btn-secondary !text-sm !min-h-10"
        onClick={resetProgress}
        disabled={!hydrated}
      >
        Reset all
      </button>
    </div>
  );
}
