import Link from "next/link";
import { SERIES_HUB_PATH } from "@/data/aiExplorerLessons";
import { Reveal } from "@/components/Reveal";

export function NotesTeaser() {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-white/80 via-mist/80 to-fog/70 px-7 py-10 sm:px-10 sm:py-12">
          <p className="mono-label">Notes</p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            AI Explorer lessons — Lesson 1 to 20.
          </h2>
          <p className="mt-4 max-w-lg font-light text-ink-soft">
            Prepare the app once, then learn by doing: try it in AI Explorer,
            change a file, complete a small exercise, hit the checkpoint — Lesson
            1 through 20.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={SERIES_HUB_PATH} className="btn-primary inline-flex">
              Open lesson series
            </Link>
            <Link
              href={`${SERIES_HUB_PATH}/lesson-1-talk-to-an-llm`}
              className="btn-secondary inline-flex"
            >
              Start Lesson 1 →
            </Link>
            <Link href="/writing" className="btn-secondary inline-flex">
              All notes
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
