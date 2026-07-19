import type { Metadata } from "next";
import Link from "next/link";
import { writingPlaceholders } from "@/data/profile";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Learning notes and roadmap thoughts from Suresh Saragadam — GenAI assistants, evaluation, and product engineering.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/" className="nav-link text-sm font-medium text-ink-soft">
        ← Back home
      </Link>

      <p className="mono-label mt-10">Writing</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        Notes & roadmap
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        This space will grow with learning notes, build logs, and a living
        roadmap. Placeholders stay until the first posts ship.
      </p>

      <div className="mt-12 space-y-5">
        {writingPlaceholders.map((post) => (
          <article
            key={post.slug}
            className="rounded-[1.25rem] border border-dashed border-line bg-white/45 px-6 py-6"
          >
            <div className="flex items-center gap-3">
              <span className="chip">Coming soon</span>
              <span className="mono-label !normal-case !tracking-normal">
                /{post.slug}
              </span>
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
              {post.title}
            </h2>
            <p className="mt-2 text-ink-soft">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
