
const STORAGE_KEY = "ai-engineer-roadmap-progress-v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { completed: {}, notes: {} };
  } catch {
    return { completed: {}, notes: {} };
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  updateProgressUI();
}

function setCompleted(topicId, done) {
  const data = loadProgress();
  data.completed[topicId] = done;
  saveProgress(data);
}

function setNotes(topicId, text) {
  const data = loadProgress();
  data.notes[topicId] = text;
  saveProgress(data);
}

function countCompleted(data) {
  return Object.values(data.completed).filter(Boolean).length;
}

function updateProgressUI() {
  const data = loadProgress();
  const total = document.querySelectorAll("[data-topic-id]").length;
  const done = countCompleted(data);
  const pct = total ? Math.round((done / total) * 100) : 0;

  const fill = document.getElementById("progress-fill");
  const label = document.getElementById("progress-label");
  if (fill) fill.style.width = pct + "%";
  if (label) label.textContent = `${done} / ${total} topics complete (${pct}%)`;

  document.querySelectorAll("[data-topic-id]").forEach((el) => {
    const id = el.getAttribute("data-topic-id");
    const checked = Boolean(data.completed[id]);
    if (el.type === "checkbox") el.checked = checked;
    const row = el.closest(".topic-item");
    if (row) row.classList.toggle("done", checked);
  });

  document.querySelectorAll("[data-phase-id]").forEach((el) => {
    const phase = el.getAttribute("data-phase-id");
    const items = document.querySelectorAll(`[data-topic-id][data-phase="${phase}"]`);
    let phaseDone = 0;
    items.forEach((cb) => {
      const id = cb.getAttribute("data-topic-id");
      if (data.completed[id]) phaseDone += 1;
    });
    const cell = document.querySelector(`[data-phase-done="${phase}"]`);
    if (cell) {
      cell.textContent = phaseDone === items.length && items.length ? "✓" : `${phaseDone}/${items.length}`;
      cell.classList.toggle("phase-done", phaseDone === items.length && items.length);
    }
  });

  document.querySelectorAll("[data-notes-for]").forEach((ta) => {
    const id = ta.getAttribute("data-notes-for");
    if (data.notes[id] !== undefined) ta.value = data.notes[id];
  });
}

function exportProgress() {
  const data = loadProgress();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "ai-roadmap-progress.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      saveProgress({
        completed: parsed.completed || {},
        notes: parsed.notes || {},
      });
      alert("Progress imported.");
    } catch {
      alert("Invalid progress file.");
    }
  };
  reader.readAsText(file);
}

function resetProgress() {
  if (confirm("Clear all checkboxes and notes?")) {
    localStorage.removeItem(STORAGE_KEY);
    updateProgressUI();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-topic-id]").forEach((el) => {
    if (el.type === "checkbox") {
      el.addEventListener("change", () => {
        setCompleted(el.getAttribute("data-topic-id"), el.checked);
      });
    }
  });

  document.querySelectorAll("[data-notes-for]").forEach((ta) => {
    ta.addEventListener("input", () => {
      setNotes(ta.getAttribute("data-notes-for"), ta.value);
    });
  });

  const exportBtn = document.getElementById("export-progress");
  const importBtn = document.getElementById("import-progress");
  const importFile = document.getElementById("import-file");
  const resetBtn = document.getElementById("reset-progress");

  if (exportBtn) exportBtn.addEventListener("click", exportProgress);
  if (importBtn) importBtn.addEventListener("click", () => importFile?.click());
  if (importFile) {
    importFile.addEventListener("change", () => {
      if (importFile.files[0]) importProgress(importFile.files[0]);
      importFile.value = "";
    });
  }
  if (resetBtn) resetBtn.addEventListener("click", resetProgress);

  updateProgressUI();
});
