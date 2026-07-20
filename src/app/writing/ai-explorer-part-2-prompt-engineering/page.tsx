import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingPost } from "@/data/writing";

export const metadata: Metadata = {
  title: "AI Explorer Part 2: prompt engineering",
  description:
    "Same model, different behavior — system instructions and chat modes in AI Explorer.",
};

export default function Part2Page() {
  const post = getWritingPost("ai-explorer-part-2-prompt-engineering");
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/writing" className="nav-link text-sm font-medium text-ink-soft">
        ← All notes
      </Link>
      <p className="mono-label mt-10">{post.dateLabel}</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {post.githubUrl ? (
          <a href={post.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            GitHub →
          </a>
        ) : null}
        <Link href="/writing/ai-explorer-part-1-basic-llm" className="btn-secondary">
          Part 1
        </Link>
        <Link href="/writing/ai-explorer-part-3-streaming" className="btn-secondary">
          Part 3
        </Link>
      </div>

      <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Why in plain English
          </h2>
          <p className="mt-4">
            You can ask the same model to answer like a patient tutor or a terse
            engineer. Changing those standing instructions is how you steer tone and
            structure without rewriting the app.
          </p>
        </section>
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Technical name
          </h2>
          <p className="mt-4">
            That craft is <strong className="font-semibold text-ink">prompt engineering</strong>.
            The standing instructions are a <strong className="font-semibold text-ink">system prompt</strong>{" "}
            (or instructions block). AI Explorer exposes a few as selectable{" "}
            <strong className="font-semibold text-ink">modes</strong>.
          </p>
        </section>
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            How we built it
          </h2>
          <p className="mt-4">
            Modes live in <code className="text-sm text-ink">apps/api/app/features/prompts/modes.py</code>.
            The web UI sends <code className="text-sm text-ink">mode</code> with each chat.
            The chat service loads the matching instructions before calling the LLM adapter.
          </p>
        </section>
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Common mistakes
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Stuffing secrets into prompts</li>
            <li>One giant prompt that tries to do every job</li>
            <li>Changing prompts with no eval (see Part 23)</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
