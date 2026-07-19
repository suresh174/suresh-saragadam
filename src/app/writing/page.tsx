import type { Metadata } from "next";
import Link from "next/link";
import { writingPosts } from "@/data/writing";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Learning notes and teaching posts from Suresh Saragadam — GenAI labs, on-device vision, and production assistants.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/" className="nav-link text-sm font-medium text-ink-soft">
        ← Back home
      </Link>

      <p className="mono-label mt-10">Writing</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        Notes & teaching posts
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        I write here to teach what I build — in plain English, with a live lab
        whenever I can.
      </p>

      <div className="mt-12 space-y-5">
        {writingPosts.map((post) => {
          const isLive = post.status === "published";

          if (isLive) {
            return (
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
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
                  {post.title}
                </h2>
                <p className="mt-2 text-ink-soft">{post.excerpt}</p>
                <p className="mt-4 text-sm font-semibold text-sea-deep">
                  Read post →
                </p>
              </Link>
            );
          }

          return (
            <article
              key={post.slug}
              className="rounded-[1.25rem] border border-dashed border-line bg-white/45 px-6 py-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="chip">Coming soon</span>
                <span className="mono-label !normal-case !tracking-normal">
                  {post.dateLabel}
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
                {post.title}
              </h2>
              <p className="mt-2 text-ink-soft">{post.excerpt}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
