import Link from "next/link";
import {
  GETTING_STARTED_URL,
  GITHUB_REPO,
  PRACTICAL_LABS_URL,
  SERIES_HUB_PATH,
  getAdjacentLessons,
  lessonPath,
  type AiExplorerLesson,
  type LessonSurface,
} from "@/data/aiExplorerLessons";

type Props = {
  lesson: AiExplorerLesson;
};

const SURFACE_LABEL: Record<LessonSurface, string> = {
  ui: "Chat UI",
  lab: "Lab strip",
  api: "API / docs",
  cli: "CLI",
  compose: "Docker Compose",
  config: "Config / env",
};

export function LessonArticle({ lesson }: Props) {
  const { prev, next } = getAdjacentLessons(lesson.number);
  const githubHref = lesson.githubPath
    ? `${GITHUB_REPO}/tree/main/${lesson.githubPath}`
    : GITHUB_REPO;

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        href={SERIES_HUB_PATH}
        className="nav-link text-sm font-medium text-ink-soft"
      >
        ← AI Explorer lessons
      </Link>

      <p className="mono-label mt-10">
        Lesson {lesson.number} of 20 · AI Explorer · {SURFACE_LABEL[lesson.surface]}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        Lesson {lesson.number}: {lesson.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        {lesson.youWillLearnLine}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={GETTING_STARTED_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Getting Started →
        </a>
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Open in GitHub →
        </a>
        <a
          href={PRACTICAL_LABS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Lab map
        </a>
        <Link href={SERIES_HUB_PATH} className="btn-secondary">
          Series hub
        </Link>
      </div>

      <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-ink-soft">
        <section className="rounded-[1.25rem] border border-line bg-white/70 px-6 py-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            In this lesson you&rsquo;ll learn
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {lesson.learnBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {lesson.beforeYouStart ? (
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
              Before you start
            </h2>
            <p className="mt-4">{lesson.beforeYouStart}</p>
            <p className="mt-3 text-sm">
              New to the repo?{" "}
              <a
                href={GETTING_STARTED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sea-deep underline-offset-2 hover:underline"
              >
                Getting Started (first 30 minutes)
              </a>
              .
            </p>
          </section>
        ) : null}

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Why this matters
          </h2>
          <p className="mt-4">{lesson.whyItMatters}</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            The idea, in plain English
          </h2>
          <p className="mt-4">{lesson.explanation}</p>
          <p className="mt-4">
            Practitioners call this{" "}
            <strong className="font-semibold text-ink">
              {lesson.technicalName}
            </strong>
            .
          </p>
        </section>

        <section className="rounded-[1.25rem] border border-sea/25 bg-mist/40 px-6 py-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Try it in AI Explorer
          </h2>
          <p className="mt-4">{lesson.tryInApp}</p>
          {lesson.surfaceNote ? (
            <p className="mt-4 text-sm">{lesson.surfaceNote}</p>
          ) : null}
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Build along
          </h2>
          <p className="mt-4">{lesson.buildAlong}</p>
          {lesson.githubPath ? (
            <p className="mt-4">
              Code to open:{" "}
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sea-deep underline-offset-2 hover:underline"
              >
                <code className="text-sm text-ink">{lesson.githubPath}</code>
              </a>
            </p>
          ) : null}
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Exercise
          </h2>
          <p className="mt-4">{lesson.exercise}</p>
        </section>

        <section className="rounded-[1.25rem] border border-line bg-white/80 px-6 py-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Checkpoint
          </h2>
          <p className="mt-4 text-ink">{lesson.checkpoint}</p>
        </section>

        {lesson.commonMistakes && lesson.commonMistakes.length > 0 ? (
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
              Common mistakes
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {lesson.commonMistakes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="rounded-[1.25rem] border border-sea/25 bg-mist/50 px-6 py-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            What we learned
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {lesson.whatWeLearned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-[1.25rem] border border-line bg-white/80 px-6 py-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Takeaway
          </h2>
          <p className="mt-4 text-ink">{lesson.takeaway}</p>
        </section>

        <nav className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              href={lessonPath(prev.slug)}
              className="text-sm font-semibold text-sea-deep"
            >
              ← Lesson {prev.number}: {prev.title}
            </Link>
          ) : (
            <Link href={SERIES_HUB_PATH} className="text-sm font-semibold text-sea-deep">
              ← Series hub
            </Link>
          )}
          {next ? (
            <Link
              href={lessonPath(next.slug)}
              className="text-sm font-semibold text-sea-deep sm:text-right"
            >
              Next: Lesson {next.number}: {next.title} →
            </Link>
          ) : (
            <Link href={SERIES_HUB_PATH} className="text-sm font-semibold text-sea-deep sm:text-right">
              Back to series hub →
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
