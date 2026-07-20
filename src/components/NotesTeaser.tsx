import Link from "next/link";
import { publishedPosts } from "@/data/writing";

export function NotesTeaser() {
  const latest = publishedPosts[0];

  return (
    <section className="px-5 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-white/80 via-mist/80 to-fog/70 px-7 py-10 sm:px-10 sm:py-12">
        <p className="mono-label">Notes</p>
        <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          I teach what I build — starting with Fraud Check.
        </h2>
        <p className="mt-4 max-w-lg font-light text-ink-soft">
          {latest
            ? latest.excerpt
            : "Learning notes and build logs land here as I document what I am teaching next."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {latest ? (
            <Link
              href={`/writing/${latest.slug}`}
              className="btn-primary inline-flex"
            >
              Read the post
            </Link>
          ) : null}
          {latest?.liveUrl ? (
            <a
              href={latest.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              Try live lab →
            </a>
          ) : null}
          <Link href="/writing" className="btn-secondary inline-flex">
            All notes
          </Link>
        </div>
      </div>
    </section>
  );
}
