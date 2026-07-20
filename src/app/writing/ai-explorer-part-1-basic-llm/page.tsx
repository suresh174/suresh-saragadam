import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingPost } from "@/data/writing";

export const metadata: Metadata = {
  title: "AI Explorer Part 1: basic LLM chat",
  description:
    "Suresh Saragadam teaches Part 1 of AI Explorer — UI → FastAPI → OpenAI Responses API → reply.",
};

export default function AiExplorerPart1Page() {
  const post = getWritingPost("ai-explorer-part-1-basic-llm");
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
        <Link href="/writing/ai-explorer-overview" className="btn-secondary">
          Series overview
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
            Why
          </h2>
          <p className="mt-4">
            Before tools, RAG, or agents, you need a working loop you trust: the UI
            sends a message, your backend validates it, an LLM adapter calls the model,
            and a typed response comes back. If this seam is messy, every later part
            inherits the mess.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            How it works
          </h2>
          <p className="mt-4">
            The browser talks to FastAPI at <code className="text-sm text-ink">POST /api/chat</code>.
            Pydantic models define the contract. A chat service orchestrates. An{" "}
            <code className="text-sm text-ink">OpenAIResponsesAdapter</code> wraps the
            Responses API so provider details stay out of the router. The Next.js UI
            lives under <code className="text-sm text-ink">features/chat</code> — the same
            modular idea as the API.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Implement (what to open)
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <code className="text-sm text-ink">apps/api/app/features/chat/</code> —
              schemas, service, router
            </li>
            <li>
              <code className="text-sm text-ink">apps/api/app/core/llm.py</code> — adapter
            </li>
            <li>
              <code className="text-sm text-ink">apps/web/src/features/chat/</code> — UI +
              client
            </li>
            <li>
              Root <code className="text-sm text-ink">README.md</code> — run steps
            </li>
          </ul>
          <p className="mt-4">
            History fields exist on the request schema already. Part 1 ignores them on
            purpose — that is the seam for Part 4.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Mistakes I want you to avoid
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Putting the OpenAI key in the browser or in committed files.</li>
            <li>One giant <code className="text-sm text-ink">main.py</code> that will fight you by Part 6.</li>
            <li>Skipping types because &ldquo;it is just a chat.&rdquo;</li>
            <li>Jumping to agents because they sound impressive.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Improve next
          </h2>
          <p className="mt-4">
            Part 2 is prompt engineering — system instructions you control, teaching
            personas, and the failure modes that make tools look broken when the prompt
            was the real bug. Streaming comes in Part 3 so you feel latency before we
            add durable history.
          </p>
        </section>
      </div>
    </article>
  );
}
