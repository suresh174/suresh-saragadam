import type { Metadata } from "next";
import Link from "next/link";
import { companionPosts, seriesHubPost } from "@/data/writing";
import {
  aiExplorerLessons,
  lessonPath,
} from "@/data/aiExplorerLessons";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "AI Explorer lessons (Lesson 1–20) and lab notes from Suresh Saragadam.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/" className="nav-link text-sm font-medium text-ink-soft">
        ← Back home
      </Link>

      <p className="mono-label mt-10">Writing</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        Notes from the labs
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Start with the numbered AI Explorer series — Lesson 1, Lesson 2, and so
        on — so nothing feels random.
      </p>

      {seriesHubPost ? (
        <section className="mt-12">
          <p className="mono-label">Main series</p>
          <Link
            href={`/writing/${seriesHubPost.slug}`}
            className="mt-4 block rounded-[1.25rem] border border-sea/30 bg-gradient-to-br from-white/90 via-mist/80 to-fog/70 px-6 py-7 transition hover:-translate-y-0.5 hover:border-sea/50"
          >
            <span className="chip">Lesson 1 → 20</span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
              {seriesHubPost.title}
            </h2>
            <p className="mt-2 text-ink-soft">{seriesHubPost.excerpt}</p>
            <p className="mt-4 text-sm font-semibold text-sea-deep">
              Open series hub →
            </p>
          </Link>

          <ol className="mt-6 space-y-2">
            {aiExplorerLessons.map((lesson) => (
              <li key={lesson.slug}>
                <Link
                  href={lessonPath(lesson.slug)}
                  className="flex flex-col gap-0.5 rounded-xl border border-line bg-white/60 px-4 py-3 transition hover:border-sea/35 hover:bg-white/90 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span className="font-semibold text-ink">
                    Lesson {lesson.number}: {lesson.title}
                  </span>
                  <span className="text-sm text-ink-soft sm:max-w-md sm:text-right">
                    {lesson.youWillLearnLine}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className="mt-16">
        <p className="mono-label">Other notes</p>
        <div className="mt-4 space-y-4">
          {companionPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="block rounded-[1.25rem] border border-line bg-white/70 px-6 py-6 transition hover:-translate-y-0.5 hover:border-sea/35 hover:bg-white/90"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="chip">Published</span>
                <span className="mono-label !normal-case !tracking-normal">
                  {post.dateLabel}
                </span>
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold">
                {post.title}
              </h2>
              <p className="mt-2 text-ink-soft">{post.excerpt}</p>
              <p className="mt-4 text-sm font-semibold text-sea-deep">
                Read note →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
