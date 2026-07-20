import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingPost } from "@/data/writing";

export const metadata: Metadata = {
  title: "AI Explorer Part 3: streaming replies",
  description:
    "Tokens arrive as they are generated — SSE streaming in AI Explorer.",
};

export default function Part3Page() {
  const post = getWritingPost("ai-explorer-part-3-streaming");
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
        <Link href="/writing/ai-explorer-part-2-prompt-engineering" className="btn-secondary">
          Part 2
        </Link>
      </div>

      <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Why in plain English
          </h2>
          <p className="mt-4">
            Waiting for the entire reply before anything appears feels broken. Showing
            words as they arrive makes the app feel alive and helps you spot bad answers earlier.
          </p>
        </section>
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Technical name
          </h2>
          <p className="mt-4">
            That pattern is <strong className="font-semibold text-ink">streaming</strong>.
            AI Explorer uses <strong className="font-semibold text-ink">Server-Sent Events (SSE)</strong>{" "}
            from FastAPI to the browser.
          </p>
        </section>
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            How we built it
          </h2>
          <p className="mt-4">
            <code className="text-sm text-ink">POST /api/chat/stream</code> yields{" "}
            <code className="text-sm text-ink">data: {"{"}&quot;delta&quot;...{"}"}</code> chunks.
            The Next.js client reads the stream and updates the assistant bubble live.
            Tool/MCP turns stay on the non-stream path for simpler debugging.
          </p>
        </section>
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Common mistakes
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Buffering the full model response then faking a typewriter</li>
            <li>Forgetting to persist the final message after the stream ends</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
