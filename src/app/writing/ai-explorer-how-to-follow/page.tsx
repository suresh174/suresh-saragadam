import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingPost } from "@/data/writing";

export const metadata: Metadata = {
  title: "How to follow along with AI Explorer",
  description:
    "Clone AI Explorer, run with Docker or local API + web, set your OpenAI key, and walk the learning path.",
};

export default function HowToFollowPage() {
  const post = getWritingPost("ai-explorer-how-to-follow");
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
          <a
            href={post.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            GitHub →
          </a>
        ) : null}
        <Link href="/writing/ai-explorer-lessons" className="btn-secondary">
          Lesson series
        </Link>
        <Link href="/writing/ai-explorer-overview" className="btn-secondary">
          Overview
        </Link>
      </div>

      <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Why this note exists
          </h2>
          <p className="mt-4">
            You should be able to clone one repo and feel a real app — not a slide deck.
            This is the shortest path to a green health check and a working chat.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Option A — Docker Compose
          </h2>
          <p className="mt-4">
            Best when you want Redis, Prometheus, Grafana, and the MCP server together.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>
              Clone{" "}
              <a
                href="https://github.com/suresh-ai-lab/ai-explorer"
                className="nav-link font-semibold text-sea-deep"
                target="_blank"
                rel="noopener noreferrer"
              >
                suresh-ai-lab/ai-explorer
              </a>
              .
            </li>
            <li>
              Copy <code className="text-sm text-ink">.env.example</code> to{" "}
              <code className="text-sm text-ink">apps/api/.env</code> and set{" "}
              <code className="text-sm text-ink">OPENAI_API_KEY</code>.
            </li>
            <li>
              Run <code className="text-sm text-ink">docker compose up --build</code>.
            </li>
            <li>
              Open web on <code className="text-sm text-ink">:3000</code>, API docs on{" "}
              <code className="text-sm text-ink">:8000/docs</code>, Grafana on{" "}
              <code className="text-sm text-ink">:3001</code> (<code className="text-sm text-ink">admin</code> /{" "}
              <code className="text-sm text-ink">admin</code>), MCP on{" "}
              <code className="text-sm text-ink">:8100/mcp</code>.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Option B — Local API + web
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Create a venv in <code className="text-sm text-ink">apps/api</code>, install requirements, run uvicorn on :8000.</li>
            <li>In <code className="text-sm text-ink">apps/web</code>, <code className="text-sm text-ink">npm install</code> and <code className="text-sm text-ink">npm run dev</code>.</li>
            <li>
              Optionally start MCP with{" "}
              <code className="text-sm text-ink">scripts/run-mcp.ps1</code> and prove tools with{" "}
              <code className="text-sm text-ink">scripts/prove-mcp.ps1</code>.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Keys you need
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-ink">OPENAI_API_KEY</strong> — required for chat, embeddings, agents.
            </li>
            <li>
              Langfuse public + secret keys — optional; tracing quietly no-ops without them.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            How to learn without drowning
          </h2>
          <p className="mt-4">
            Read <code className="text-sm text-ink">LEARNING_PATH.md</code>. Each part is marked{" "}
            <code className="text-sm text-ink">done</code> or <code className="text-sm text-ink">partial</code>.
            Then follow the portfolio{" "}
            <Link
              href="/writing/ai-explorer-lessons"
              className="nav-link font-semibold text-sea-deep"
            >
              Lesson 1–20 series
            </Link>{" "}
            — each lesson has what you&rsquo;ll learn, a recap, and a takeaway — and open the matching feature folder in code.
            Keep <code className="text-sm text-ink">/health</code> green.
          </p>
        </section>
      </div>
    </article>
  );
}
