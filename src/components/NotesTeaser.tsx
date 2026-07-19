import Link from "next/link";

export function NotesTeaser() {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-white/80 via-mist/80 to-fog/70 px-7 py-10 sm:px-10 sm:py-12">
        <p className="mono-label">Notes</p>
        <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          A quiet place for learnings and roadmap thoughts.
        </h2>
        <p className="mt-4 max-w-lg text-ink-soft">
          The writing space is ready. Roadmap and deeper posts land here as I document what I am learning next.
        </p>
        <Link href="/writing" className="btn-primary mt-8 inline-flex">
          Browse notes
        </Link>
      </div>
    </section>
  );
}
