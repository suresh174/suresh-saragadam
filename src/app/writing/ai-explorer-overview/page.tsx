import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingPost } from "@/data/writing";

export const metadata: Metadata = {
  title: "AI Explorer: learn AI Engineering with one evolving app",
  description:
    "Suresh Saragadam’s AI Explorer — one open-source path from basic LLM chat to production habits.",
};

export default function AiExplorerOverviewPage() {
  const post = getWritingPost("ai-explorer-overview");
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
        <Link href="/writing/ai-explorer-how-to-follow" className="btn-secondary">
          How to follow
        </Link>
        <Link href="/writing/ai-explorer-part-1-basic-llm" className="btn-secondary">
          Part 1 notes
        </Link>
        <Link href="/writing/ai-roles-and-opportunities" className="btn-secondary">
          AI roles
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            What this is
          </h2>
          <p className="mt-4">
            AI Explorer is not another disconnected chatbot demo. It is a single
            open-source product from{" "}
            <strong className="font-semibold text-ink">Suresh AI Lab</strong> that
            grows feature by feature so you can see{" "}
            <strong className="font-semibold text-ink">AI Engineering</strong> in
            context — from a clean model call to tools, SQL, embeddings, RAG,
            agents, LangGraph, MCP, guardrails, observability, Redis, Docker,
            CI/CD, and evals.
          </p>
          <p className="mt-4">
            Plain English first, then the matching technical term. Beginners can
            follow step by step. Experienced engineers get production seams and
            honest pushback when an idea is premature.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Why one evolving app
          </h2>
          <p className="mt-4">
            Disconnected demos hide the hard part: growth without rewriting
            everything. In AI Explorer, Part N should plug into seams left by Part
            N−1 — feature modules, Pydantic contracts, and an LLM adapter — so you
            practice real engineering, not tutorial hopping.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Where we are now
          </h2>
          <p className="mt-4">
            The spine is in the repo: chat with modes and streaming, SQLite history,
            tools, SQL agent, RAG over sample docs, memory, a plan→research→answer
            graph, guardrails, Prometheus + Grafana, Redis cache, Docker Compose,
            GitHub Actions, and a small eval suite. Thinner seams (pgvector, auth)
            are documented so nothing is forgotten — MCP is implemented as a real
            FastMCP server plus SDK client, not a stub.
          </p>
          <p className="mt-4">
            Start from GitHub:{" "}
            <a
              href="https://github.com/suresh-ai-lab/ai-explorer"
              className="nav-link font-semibold text-sea-deep"
              target="_blank"
              rel="noopener noreferrer"
            >
              suresh-ai-lab/ai-explorer
            </a>
            . Run with Docker Compose or local API + web — details in the{" "}
            <Link
              href="/writing/ai-explorer-how-to-follow"
              className="nav-link font-semibold text-sea-deep"
            >
              how to follow
            </Link>{" "}
            note.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            How to follow
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Open the GitHub repo and read README + LEARNING_PATH.</li>
            <li>Run with Docker or local API + web using your own OpenAI key.</li>
            <li>
              Read Part notes in order — start with{" "}
              <Link
                href="/writing/ai-explorer-part-1-basic-llm"
                className="nav-link font-semibold text-sea-deep"
              >
                Part 1
              </Link>
              .
            </li>
            <li>Inspect only the next part in code — keep /health green.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Fraud Check stays
          </h2>
          <p className="mt-4">
            Fraud Check remains a live side lab for on-device vision. The long arc
            for backend AI Engineering lives in AI Explorer — that is the project
            meant to be learned end-to-end.
          </p>
        </section>
      </div>
    </article>
  );
}
