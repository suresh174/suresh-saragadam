import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingPost } from "@/data/writing";

export const metadata: Metadata = {
  title: "AI roles and opportunities — plain English map",
  description:
    "Plain-English definitions of AI Engineer, Prompt Engineer, Forward Deployed Engineer, ML Engineer, and related roles — plus how AI Explorer maps to each path.",
};

type Role = {
  name: string;
  plain: string;
  dayToDay: string;
  skills: string;
  fits: string;
  explorer: string;
};

const roles: Role[] = [
  {
    name: "AI Engineer",
    plain:
      "Builds products that use models in real apps — APIs, tools, retrieval, evals, and shipping.",
    dayToDay:
      "Wire LLM calls, design prompts/modes, add tools and RAG, watch latency/cost, ship with Docker/CI.",
    skills: "Python/TypeScript, FastAPI or similar, Pydantic, RAG, agents, observability, product sense.",
    fits: "Engineers who like full systems more than pure research papers.",
    explorer: "The whole spine — Parts 1–23 are the core map.",
  },
  {
    name: "Prompt Engineer",
    plain:
      "Specializes in getting reliable behavior from models with instructions, examples, and evals.",
    dayToDay:
      "Draft system prompts, compare modes, catch failure cases, run regression suites when prompts change.",
    skills: "Clear writing, structured outputs, eval harnesses, domain knowledge.",
    fits: "Strong communicators who enjoy precision and iteration.",
    explorer: "Parts 2, 5, 16, 23 — modes, structured JSON, guardrails, evals.",
  },
  {
    name: "Forward Deployed Engineer",
    plain:
      "Works close to a customer: embeds with their team, ships the integration that makes the product actually stick. (Sometimes people say “forward development engineer” — the industry term is Forward Deployed Engineer.)",
    dayToDay:
      "Map messy real workflows, customize demos, wire data/tools to their stack, teach their engineers, close the last mile.",
    skills: "AI engineering + consulting instincts, rapid prototyping, clear docs, calm under ambiguity.",
    fits: "People who like travel/customer time as much as code.",
    explorer: "Parts 6–10, 15–16, 21 — tools, RAG, MCP, guardrails, reproducible Docker demos.",
  },
  {
    name: "ML Engineer",
    plain:
      "Owns training, serving, and lifecycle of machine learning models — not only GenAI chat apps.",
    dayToDay:
      "Feature pipelines, training jobs, model registries, inference services, monitoring drift.",
    skills: "Python, ML frameworks, data pipelines, experiment tracking, serving infra.",
    fits: "Engineers who enjoy model performance and data quality deeply.",
    explorer: "Parts 8–11 (embeddings/vectors) and observability; training itself is elective later.",
  },
  {
    name: "Applied Scientist",
    plain: "Researches and prototypes methods that might become product features.",
    dayToDay: "Experiments, papers/baselines, offline metrics, handoff to engineers.",
    skills: "Statistics, ML theory, experimentation, clear write-ups.",
    fits: "Curious builders who like hypothesis-driven work.",
    explorer: "Evals + retrieval quality (Opt C, Part 23); deeper research is outside the app spine.",
  },
  {
    name: "AI Product Manager",
    plain: "Decides what AI capability ships and why — scoped, measurable, not hype.",
    dayToDay: "User problems, success metrics, eval definitions, roadmap trade-offs with eng.",
    skills: "Product sense, AI literacy, metrics, stakeholder communication.",
    fits: "PMs who can challenge “just add an agent.”",
    explorer: "LEARNING_PATH order itself — why prompts before agents, evals before “done.”",
  },
  {
    name: "Full-stack + AI / GenAI Engineer",
    plain: "Owns UI through API through model integration in one loop.",
    dayToDay: "Next.js chat UX, streaming, FastAPI contracts, deploy the pair.",
    skills: "Frontend + backend + LLM APIs; design systems help.",
    fits: "Builders who hate waiting on three teams for a demo.",
    explorer: "Parts 1–4 + web UI + Docker/CI.",
  },
  {
    name: "Data Engineer for AI",
    plain: "Makes training and retrieval data trustworthy, fresh, and queryable.",
    dayToDay: "Pipelines, chunking corpora, warehouses/vector stores, access control.",
    skills: "SQL, ETL/ELT, cloud data, quality checks.",
    fits: "People who like data reliability more than chat UI polish.",
    explorer: "Parts 7–11 — SQL agent, embeddings, FAISS/pgvector path.",
  },
  {
    name: "AI Safety / Eval Engineer",
    plain: "Measures whether the system is safe, honest, and still correct after changes.",
    dayToDay: "Golden sets, red-team cases, guardrails, regression gates in CI.",
    skills: "Eval design, statistics basics, policy awareness, tooling.",
    fits: "Detail-oriented skeptics who enjoy breaking demos productively.",
    explorer: "Parts 16 + 23 + CI — guardrails, prompt suite, GitHub Actions.",
  },
  {
    name: "Solutions Architect (AI)",
    plain: "Designs the shape of an AI system for a business constraint set.",
    dayToDay: "Reference architectures, buy vs build, cost/latency/risk trade-offs.",
    skills: "Breadth across LLM stack, security, integration patterns, storytelling.",
    fits: "Senior generalists who translate between execs and engineers.",
    explorer: "ARCHITECTURE.md + Parts 17–22 observability/ops chapters.",
  },
];

export default function AiRolesPage() {
  const post = getWritingPost("ai-roles-and-opportunities");
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
        <Link href="/writing/ai-explorer-overview" className="btn-primary">
          AI Explorer overview
        </Link>
        {post.githubUrl ? (
          <a
            href={post.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub →
          </a>
        ) : null}
      </div>

      <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            How to read this
          </h2>
          <p className="mt-4">
            Job titles overlap. A small company&apos;s “AI Engineer” might do what a
            large company splits into three roles. Use this as a map, not a cage.
            For each role: plain English → day-to-day → skills → who it fits → how{" "}
            <Link
              href="/writing/ai-explorer-overview"
              className="nav-link font-semibold text-sea-deep"
            >
              AI Explorer
            </Link>{" "}
            helps you practice.
          </p>
        </section>

        {roles.map((role) => (
          <section key={role.name}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
              {role.name}
            </h2>
            <p className="mt-4">
              <strong className="font-semibold text-ink">In plain English:</strong>{" "}
              {role.plain}
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-ink">Day to day:</strong>{" "}
              {role.dayToDay}
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-ink">Skills:</strong> {role.skills}
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-ink">Who it fits:</strong> {role.fits}
            </p>
            <p className="mt-3">
              <strong className="font-semibold text-ink">AI Explorer path:</strong>{" "}
              {role.explorer}
            </p>
          </section>
        ))}

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            How these roles overlap
          </h2>
          <p className="mt-4">
            Prompt work shows up everywhere. RAG needs data + AI engineering. Forward
            Deployed Engineers borrow from Solutions Architecture and GenAI full-stack.
            Eval/Safety sits next to every shipping role if you care about trust. Pick a
            primary lane, then steal practices from neighbors.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            A practical starting path
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>
              Follow{" "}
              <Link
                href="/writing/ai-explorer-lessons"
                className="nav-link font-semibold text-sea-deep"
              >
                Lessons 1–4
              </Link>{" "}
              (chat, prompts, stream, history).
            </li>
            <li>Continue through tools + RAG (Lessons 6–11) for product-shaped demos.</li>
            <li>Add MCP + guardrails + Grafana (Lessons 15–18) for production-minded habits.</li>
            <li>Use evals (Lesson 19) before you claim a prompt change is “better.”</li>
          </ol>
          <p className="mt-4">
            Next:{" "}
            <Link
              href="/writing/ai-explorer-lessons"
              className="nav-link font-semibold text-sea-deep"
            >
              Open the lesson series
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
