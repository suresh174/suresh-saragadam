#!/usr/bin/env python3
"""Build offline HTML bundle with linked pages and localStorage-ready tracking."""

from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "docs" / "ai-engineer-roadmap"
OUT = SRC / "offline"

TOPICS = [
    {"id": "01", "slug": "01-what-is-ai-engineering", "phase": 0, "title": "What is AI Engineering?"},
    {"id": "02", "slug": "02-setup-your-lab", "phase": 0, "title": "Setup Your Lab"},
    {"id": "03", "slug": "03-python-for-ai", "phase": 1, "title": "Python for AI"},
    {"id": "04", "slug": "04-math-you-actually-need", "phase": 1, "title": "Math You Actually Need"},
    {"id": "05", "slug": "05-machine-learning-basics", "phase": 2, "title": "Machine Learning Basics"},
    {"id": "06", "slug": "06-deep-learning-and-pytorch", "phase": 2, "title": "Deep Learning & PyTorch"},
    {"id": "07", "slug": "07-how-llms-work", "phase": 3, "title": "How LLMs Work"},
    {"id": "08", "slug": "08-tokens-and-context", "phase": 3, "title": "Tokens & Context"},
    {"id": "09", "slug": "09-prompt-engineering", "phase": 4, "title": "Prompt Engineering"},
    {"id": "10", "slug": "10-embeddings-and-vectors", "phase": 4, "title": "Embeddings & Vectors"},
    {"id": "11", "slug": "11-rag-retrieval-augmented-generation", "phase": 4, "title": "RAG"},
    {"id": "12", "slug": "12-function-calling-and-tools", "phase": 4, "title": "Function Calling & Tools"},
    {"id": "13", "slug": "13-ai-agents", "phase": 5, "title": "AI Agents"},
    {"id": "14", "slug": "14-fine-tuning", "phase": 5, "title": "Fine-Tuning"},
    {"id": "15", "slug": "15-evaluation-and-testing", "phase": 5, "title": "Evaluation & Testing"},
    {"id": "16", "slug": "16-production-and-deployment", "phase": 6, "title": "Production & Deployment"},
    {"id": "17", "slug": "17-cost-performance-optimization", "phase": 6, "title": "Cost & Performance"},
    {"id": "18", "slug": "18-safety-guardrails", "phase": 6, "title": "Safety & Guardrails"},
    {"id": "19", "slug": "19-interview-prep", "phase": 7, "title": "Interview Prep"},
    {"id": "20", "slug": "20-capstone-project", "phase": 7, "title": "Capstone Project"},
]

PHASES = [
    (0, "Phase 0 — Start here"),
    (1, "Phase 1 — Foundations"),
    (2, "Phase 2 — ML & Deep Learning"),
    (3, "Phase 3 — LLM Core"),
    (4, "Phase 4 — Build with LLMs"),
    (5, "Phase 5 — Agents & Custom Models"),
    (6, "Phase 6 — Ship It"),
    (7, "Phase 7 — Interview + Project"),
]

SLUG_TO_HTML = {t["slug"]: f"topics/{t['slug']}.html" for t in TOPICS}


def ensure_markdown() -> None:
    try:
        import markdown  # noqa: F401
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "markdown", "-q"])


def md_to_html(text: str) -> str:
    import markdown

    html = markdown.markdown(
        text,
        extensions=["tables", "fenced_code", "nl2br"],
    )
    return rewrite_links(html)


def rewrite_links(html: str) -> str:
    def repl_md(m: re.Match[str]) -> str:
        href = m.group(1)
        if href.startswith("http://") or href.startswith("https://"):
            return m.group(0)
        if href.endswith(".md"):
            base = href.replace(".md", "")
            if base in SLUG_TO_HTML:
                return f'href="{SLUG_TO_HTML[base]}"'
            if base == "ORCHESTRATION":
                return 'href="../index.html"'
        return m.group(0)

    return re.sub(r'href="([^"]+)"', repl_md, html)


def write_assets() -> None:
    assets = OUT / "assets"
    assets.mkdir(parents=True, exist_ok=True)

    (assets / "style.css").write_text(
        """
:root {
  --bg: #0f1419;
  --surface: #1a2332;
  --text: #e8eaed;
  --muted: #9aa0a6;
  --accent: #6ee7b7;
  --accent-dim: #34d399;
  --border: #2d3748;
  --done: #22c55e;
}
* { box-sizing: border-box; }
body {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  margin: 0;
  padding: 0;
}
.wrap { max-width: 720px; margin: 0 auto; padding: 1.25rem 1.5rem 3rem; }
header.bar {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
header.bar a { color: var(--accent); text-decoration: none; font-weight: 600; }
header.bar a:hover { text-decoration: underline; }
.nav-gap { flex: 1; }
.progress-wrap { margin: 1rem 0 1.5rem; }
.progress-label { font-size: 0.9rem; color: var(--muted); margin-bottom: 0.35rem; }
.progress-bar {
  height: 10px;
  background: var(--border);
  border-radius: 999px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-dim), var(--accent));
  width: 0%;
  transition: width 0.3s ease;
}
h1 { font-size: 1.75rem; margin-top: 0; }
h2 { font-size: 1.25rem; margin-top: 2rem; color: var(--accent); }
.topic-list { list-style: none; padding: 0; }
.topic-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--border);
}
.topic-item input[type="checkbox"] {
  width: 1.15rem;
  height: 1.15rem;
  margin-top: 0.2rem;
  accent-color: var(--accent-dim);
  cursor: pointer;
}
.topic-item a { color: var(--text); font-weight: 500; }
.topic-item a:hover { color: var(--accent); }
.topic-item.done a { color: var(--muted); }
.topic-desc { font-size: 0.9rem; color: var(--muted); }
.phase-done { color: var(--done); font-weight: 600; }
article h1 { border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; }
article h2 { margin-top: 1.75rem; }
article h3 { margin-top: 1.25rem; }
article code {
  background: var(--surface);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}
article pre {
  background: var(--surface);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid var(--border);
}
article pre code { background: none; padding: 0; }
article table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem; }
article th, article td {
  border: 1px solid var(--border);
  padding: 0.5rem 0.75rem;
  text-align: left;
}
article th { background: var(--surface); }
article a { color: var(--accent); }
article blockquote {
  border-left: 3px solid var(--accent-dim);
  margin: 1rem 0;
  padding-left: 1rem;
  color: var(--muted);
}
.checkpoint-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
}
.checkpoint-box label { font-weight: 600; cursor: pointer; }
.notes-box { margin-top: 0.75rem; }
.notes-box label { display: block; font-size: 0.85rem; color: var(--muted); margin-bottom: 0.35rem; }
.notes-box textarea {
  width: 100%;
  min-height: 72px;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 8px;
  padding: 0.6rem;
  font-family: inherit;
  font-size: 0.95rem;
}
.toolbar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}
.btn {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
}
.btn:hover { border-color: var(--accent); color: var(--accent); }
.topic-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  font-size: 0.95rem;
}
.topic-nav a { color: var(--accent); }
.offline-badge {
  font-size: 0.75rem;
  color: var(--muted);
  background: var(--bg);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--border);
}
""",
        encoding="utf-8",
    )

    (assets / "tracker.js").write_text(
        """
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
""",
        encoding="utf-8",
    )


def build_index() -> None:
    topic_by_phase: dict[int, list[dict]] = {p[0]: [] for p in PHASES}
    for t in TOPICS:
        topic_by_phase[t["phase"]].append(t)

    lists_html = []
    for phase_id, phase_title in PHASES:
        items = []
        for t in topic_by_phase[phase_id]:
            num = t["id"]
            items.append(
                f"""
<li class="topic-item">
  <input type="checkbox" data-topic-id="{t['id']}" data-phase="{phase_id}" id="chk-{t['id']}" />
  <div>
    <a href="topics/{t['slug']}.html">{num} — {t['title']}</a>
    <div class="topic-desc">{t['slug'].replace('-', ' ')}</div>
  </div>
</li>"""
            )
        lists_html.append(f"<h2>{phase_title}</h2><ul class='topic-list'>{''.join(items)}</ul>")

    phase_rows = []
    for phase_id, phase_title in PHASES:
        count = len(topic_by_phase[phase_id])
        short = phase_title.split("—")[0].strip()
        phase_rows.append(
            f"<tr><td>{short}</td><td>{count}</td>"
            f"<td data-phase-done=\"{phase_id}\">0/{count}</td></tr>"
        )

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI Engineer Roadmap — Offline</title>
  <link rel="stylesheet" href="assets/style.css" />
</head>
<body>
  <header class="bar">
    <strong>AI Engineer Roadmap</strong>
    <span class="offline-badge">Offline · progress saved on this device</span>
  </header>
  <div class="wrap">
    <h1>Your checklist</h1>
    <p>Read one topic. Do the checkpoint. Tick the box. Progress stays in your browser — no internet needed.</p>

    <div class="progress-wrap">
      <div class="progress-label" id="progress-label">0 / 20 topics complete (0%)</div>
      <div class="progress-bar"><div class="progress-fill" id="progress-fill"></div></div>
    </div>

    <div class="toolbar">
      <button class="btn" id="export-progress" type="button">Export progress</button>
      <button class="btn" id="import-progress" type="button">Import progress</button>
      <input type="file" id="import-file" accept="application/json" hidden />
      <button class="btn" id="reset-progress" type="button">Reset all</button>
    </div>

    {''.join(lists_html)}

    <h2>Phase tracker</h2>
    <table>
      <thead><tr><th>Phase</th><th>Topics</th><th>Done</th></tr></thead>
      <tbody>{''.join(phase_rows)}</tbody>
    </table>

    <h2>How to use offline</h2>
    <ol>
      <li>Open this folder on any device — no server required.</li>
      <li>Start <code>index.html</code> (this page).</li>
      <li>Click topics — prev/next links at bottom of each page.</li>
      <li>Export progress before switching devices; import on the new one.</li>
    </ol>
  </div>
  <script src="assets/tracker.js"></script>
</body>
</html>"""

    (OUT / "index.html").write_text(html, encoding="utf-8")


def build_topics() -> None:
    topics_dir = OUT / "topics"
    topics_dir.mkdir(parents=True, exist_ok=True)

    for i, topic in enumerate(TOPICS):
        md_path = SRC / f"{topic['slug']}.md"
        md_text = md_path.read_text(encoding="utf-8")
        body = md_to_html(md_text)

        prev_link = ""
        next_link = ""
        if i > 0:
            p = TOPICS[i - 1]
            prev_link = f'<a href="{p["slug"]}.html">← {p["id"]} {p["title"]}</a>'
        if i < len(TOPICS) - 1:
            n = TOPICS[i + 1]
            next_link = f'<a href="{n["slug"]}.html">{n["id"]} {n["title"]} →</a>'

        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{topic['id']} — {topic['title']}</title>
  <link rel="stylesheet" href="../assets/style.css" />
</head>
<body>
  <header class="bar">
    <a href="../index.html">← Checklist</a>
    <span class="nav-gap"></span>
    <span class="offline-badge">Topic {topic['id']} / 20</span>
  </header>
  <div class="wrap">
    <div class="checkpoint-box">
      <label>
        <input type="checkbox" data-topic-id="{topic['id']}" id="chk-topic-{topic['id']}" />
        Mark checkpoint complete
      </label>
      <div class="notes-box">
        <label for="notes-{topic['id']}">My notes (saved locally)</label>
        <textarea id="notes-{topic['id']}" data-notes-for="{topic['id']}" placeholder="What clicked? What to revisit?"></textarea>
      </div>
    </div>
    <article>{body}</article>
    <nav class="topic-nav">
      <span>{prev_link}</span>
      <span>{next_link}</span>
    </nav>
  </div>
  <script src="../assets/tracker.js"></script>
</body>
</html>"""

        (topics_dir / f"{topic['slug']}.html").write_text(html, encoding="utf-8")


def write_offline_readme() -> None:
    (OUT / "README.md").write_text(
        """# AI Engineer Roadmap — Offline Pack

## Open

Double-click **`index.html`** (or open in Chrome, Firefox, Edge).

No internet. No install.

## Tracking

- Checkboxes + notes saved in browser **localStorage**
- **Export progress** → JSON file → move to phone/laptop via USB or email
- **Import progress** on another device

## Files

- `index.html` — master checklist + progress bar
- `topics/*.html` — 20 lessons with prev/next links
- `assets/` — styles + tracker script

## Rebuild (maintainers)

```bash
python scripts/build-offline-roadmap.py
```
""",
        encoding="utf-8",
    )


def main() -> None:
    ensure_markdown()
    if OUT.exists():
        import shutil

        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    write_assets()
    build_topics()
    build_index()
    write_offline_readme()
    print(f"Built offline pack at {OUT}")


if __name__ == "__main__":
    main()
