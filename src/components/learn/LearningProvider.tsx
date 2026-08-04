"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  type LearningProgress,
  countCompleted,
  emptyProgress,
  loadProgress,
  saveProgress,
} from "@/lib/learningProgress";

type LearningContextValue = {
  progress: LearningProgress;
  totalTopics: number;
  done: number;
  pct: number;
  isComplete: (id: string) => boolean;
  setComplete: (id: string, value: boolean) => void;
  getNotes: (id: string) => string;
  setNotes: (id: string, text: string) => void;
  exportProgress: () => void;
  importProgress: (file: File) => Promise<void>;
  resetProgress: () => void;
  hydrated: boolean;
};

const LearningContext = createContext<LearningContextValue | null>(null);

export function LearningProvider({
  children,
  totalTopics,
}: {
  children: React.ReactNode;
  totalTopics: number;
}) {
  const [progress, setProgress] = useState<LearningProgress>(emptyProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  const persist = useCallback((next: LearningProgress) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const { done, pct } = countCompleted(progress, totalTopics);

  const value = useMemo<LearningContextValue>(
    () => ({
      progress,
      totalTopics,
      done,
      pct,
      hydrated,
      isComplete: (id) => Boolean(progress.completed[id]),
      setComplete: (id, value) => {
        persist({
          ...progress,
          completed: { ...progress.completed, [id]: value },
        });
      },
      getNotes: (id) => progress.notes[id] ?? "",
      setNotes: (id, text) => {
        persist({
          ...progress,
          notes: { ...progress.notes, [id]: text },
        });
      },
      exportProgress: () => {
        const blob = new Blob([JSON.stringify(progress, null, 2)], {
          type: "application/json",
        });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "ai-roadmap-progress.json";
        a.click();
        URL.revokeObjectURL(a.href);
      },
      importProgress: async (file) => {
        const text = await file.text();
        const parsed = JSON.parse(text) as LearningProgress;
        persist({
          completed: parsed.completed ?? {},
          notes: parsed.notes ?? {},
        });
      },
      resetProgress: () => {
        if (confirm("Clear all progress and notes?")) {
          persist(emptyProgress());
        }
      },
    }),
    [progress, totalTopics, done, pct, hydrated, persist],
  );

  return (
    <LearningContext.Provider value={value}>{children}</LearningContext.Provider>
  );
}

export function useLearning() {
  const ctx = useContext(LearningContext);
  if (!ctx) {
    throw new Error("useLearning must be used within LearningProvider");
  }
  return ctx;
}
