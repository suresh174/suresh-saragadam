export const LEARNING_STORAGE_KEY = "suresh-ai-roadmap-progress-v2";

export type LearningProgress = {
  completed: Record<string, boolean>;
  notes: Record<string, string>;
};

export const emptyProgress = (): LearningProgress => ({
  completed: {},
  notes: {},
});

export function loadProgress(): LearningProgress {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(LEARNING_STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as LearningProgress;
    return {
      completed: parsed.completed ?? {},
      notes: parsed.notes ?? {},
    };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(data: LearningProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LEARNING_STORAGE_KEY, JSON.stringify(data));
}

export function countCompleted(
  data: LearningProgress,
  total: number,
): { done: number; total: number; pct: number } {
  const done = Object.values(data.completed).filter(Boolean).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  return { done, total, pct };
}
