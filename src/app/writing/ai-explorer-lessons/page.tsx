import type { Metadata } from "next";
import Link from "next/link";
import {
  GETTING_STARTED_URL,
  GITHUB_REPO,
  PRACTICAL_LABS_URL,
  aiExplorerLessons,
  laterLessons,
  lessonPath,
  readyLessons,
} from "@/data/aiExplorerLessons";

export const metadata: Metadata = {
  title: "AI Explorer lessons — Lesson 1 to 20",
  description:
    "Learn by doing: prepare AI Explorer, then follow Lesson 1–20 with click paths, build-along files, exercises, and checkpoints.",
};

export default function AiExplorerLessonsHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/writing" className="nav-link text-sm font-medium text-ink-soft">
        ← All notes
      </Link>

      <p className="mono-label mt-10">Series</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        AI Explorer lessons
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        A numbered path through one open-source app — from a basic model call to
        production habits. Each lesson is built to be{" "}
        <strong className="font-semibold text-ink">done</strong>: see it in the
        running app, change a real file, complete a small exercise, then hit a
        checkpoint.
      </p>

      <div className="mt-8 rounded-[1.25rem] border border-line bg-white/70 px-6 py-6 text-[1.05rem] leading-relaxed text-ink-soft">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
          Learn by doing
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            <a
              href={GETTING_STARTED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sea-deep underline-offset-2 hover:underline"
            >
              Getting Started
            </a>{" "}
            — first 30 minutes: clone, Docker Compose, health, first chat.
          </li>
          <li>
            Start at Lesson 1 and go in order — each page links to the next.
          </li>
          <li>
            Per lesson:{" "}
            <em>Try it in AI Explorer</em> → <em>Build along</em> →{" "}
            <em>Exercise</em> → <em>Checkpoint</em> → takeaway.
          </li>
          <li>
            Keep the{" "}
            <a
              href={PRACTICAL_LABS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sea-deep underline-offset-2 hover:underline"
            >
              practical lab map
            </a>{" "}
            open for exact click paths and file paths.
          </li>
        </ol>
        <p className="mt-4 text-sm">
          {readyLessons.length} lessons ready · golden path is Docker Compose ·
          lab strip covers structured / SQL / agent / memory
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={GETTING_STARTED_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Getting Started →
        </a>
        <Link
          href={lessonPath(aiExplorerLessons[0].slug)}
          className="btn-secondary"
        >
          Start Lesson 1 →
        </Link>
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          GitHub →
        </a>
        <Link href="/writing/ai-explorer-how-to-follow" className="btn-secondary">
          Setup notes
        </Link>
      </div>

      <h2 className="mt-14 font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
        Lessons 1–{aiExplorerLessons.length}
      </h2>
      <p className="mt-2 text-ink-soft">
        Every major done concept on the spine has a hands-on lesson page.
      </p>

      <ol className="mt-8 space-y-3">
        {aiExplorerLessons.map((lesson) => (
          <li key={lesson.slug}>
            <Link
              href={lessonPath(lesson.slug)}
              className="block rounded-[1.15rem] border border-line bg-white/70 px-5 py-4 transition hover:-translate-y-0.5 hover:border-sea/35 hover:bg-white/90"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">Lesson {lesson.number}</span>
                <span className="chip">Ready</span>
                <span className="chip">{lesson.surface}</span>
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-ink">
                {lesson.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                You will learn: {lesson.youWillLearnLine}
              </p>
              <p className="mt-3 text-sm font-semibold text-sea-deep">
                Open lesson →
              </p>
            </Link>
          </li>
        ))}
      </ol>

      <h2 className="mt-14 font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
        Later lessons
      </h2>
      <p className="mt-2 text-ink-soft">
        These are on the curriculum map but not full lesson pages yet — marked
        clearly so there is no silent gap after Lesson 20.
      </p>
      <ul className="mt-6 space-y-3">
        {laterLessons.map((item) => (
          <li
            key={item.title}
            className="rounded-[1.15rem] border border-dashed border-line bg-fog/40 px-5 py-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip">Upcoming</span>
            </div>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              You will learn: {item.youWillLearnLine}
            </p>
            <p className="mt-2 text-xs text-ink-soft">{item.statusNote}</p>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-ink-soft">
        Also useful:{" "}
        <Link href="/writing/ai-roles-and-opportunities" className="font-semibold text-sea-deep">
          AI roles map
        </Link>
        {" · "}
        <Link href="/writing/ai-explorer-overview" className="font-semibold text-sea-deep">
          Product overview
        </Link>
      </p>
    </div>
  );
}
