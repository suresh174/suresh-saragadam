import Link from "next/link";
import {
  getAdjacentTopics,
  topicPath,
} from "@/data/aiEngineerRoadmap";
import type { RoadmapTopic } from "@/data/aiEngineerRoadmap/types";
import { LearnCheckpoint } from "./LearnCheckpoint";
import { LearnNotesBox } from "./LearnNotesBox";

export function RoadmapTopicArticle({ topic }: { topic: RoadmapTopic }) {
  const { prev, next } = getAdjacentTopics(topic.number);

  return (
    <article className="space-y-8 sm:space-y-10">
      <LearnCheckpoint topic={topic} />

      <section className="rounded-[1.25rem] border border-signal/40 bg-signal/10 px-5 py-5 sm:px-6">
        <p className="mono-label text-signal-ink">Real-world example</p>
        <p className="mt-2 text-base sm:text-lg leading-relaxed text-ink font-light">
          {topic.analogy}
        </p>
      </section>

      {topic.sections.map((section) => (
        <section
          key={section.title}
          className={
            section.isDeepDive
              ? "rounded-[1.25rem] border border-line bg-mist/50 px-5 py-6 sm:px-7"
              : ""
          }
        >
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink sm:text-2xl">
            {section.title}
            {section.isDeepDive ? (
              <span className="ml-2 text-sm font-medium text-ink-soft">
                (deep dive)
              </span>
            ) : null}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft font-light">
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {topic.codeExample ? (
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink sm:text-2xl">
            Code example
          </h2>
          <p className="mt-2 text-sm text-ink-soft">{topic.codeExample.title}</p>
          <pre
            className="mt-4 overflow-x-auto rounded-xl border border-line bg-ink px-4 py-4 text-sm leading-relaxed text-foam font-mono"
          >
            <code>{topic.codeExample.code}</code>
          </pre>
        </section>
      ) : null}

      <section className="rounded-[1.25rem] border border-line bg-white/70 px-5 py-6 sm:px-7">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
          Interview bite
        </h2>
        <p className="mt-3 font-semibold text-ink">{topic.interviewBite.q}</p>
        <p className="mt-2 text-ink-soft font-light leading-relaxed">
          {topic.interviewBite.a}
        </p>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
          Try it
        </h2>
        <p className="mt-3 text-ink-soft font-light leading-relaxed">
          {topic.exercise}
        </p>
      </section>

      <LearnNotesBox topic={topic} />

      <nav
        className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between sm:gap-4"
        aria-label="Topic navigation"
      >
        <div className="min-h-[44px]">
          {prev ? (
            <Link
              href={topicPath(prev.slug)}
              className="text-sea font-medium hover:underline inline-flex items-center min-h-[44px]"
            >
              ← {String(prev.number).padStart(2, "0")} {prev.title}
            </Link>
          ) : (
            <span />
          )}
        </div>
        <div className="min-h-[44px] text-right">
          {next ? (
            <Link
              href={topicPath(next.slug)}
              className="text-sea font-medium hover:underline inline-flex items-center min-h-[44px]"
            >
              {String(next.number).padStart(2, "0")} {next.title} →
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}
