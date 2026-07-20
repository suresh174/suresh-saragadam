import type { Metadata } from "next";
import Link from "next/link";
import { labs, type Lab, type LabStatus } from "@/data/labs";

export const metadata: Metadata = {
  title: "AI Labs",
  description:
    "Public AI teaching labs by Suresh Saragadam — AI Explorer (main path) and Fraud Check (live side lab).",
};

const statusLabel: Record<LabStatus, string> = {
  live: "Live",
  building: "Building",
  planned: "Planned",
};

function ctaLabel(lab: Lab): string {
  if (lab.status === "live" && lab.externalUrl) return "Open live lab →";
  if (lab.githubUrl) return "Open on GitHub →";
  if (lab.notesUrl) return "Read notes →";
  if (lab.status === "live") return "Open lab →";
  return "Learn more →";
}

function labHref(lab: Lab): string | undefined {
  if (lab.externalUrl) return lab.externalUrl;
  if (lab.githubUrl) return lab.githubUrl;
  if (lab.notesUrl) return lab.notesUrl;
  if (lab.status === "live") return `/labs/${lab.slug}`;
  return undefined;
}

export default function LabsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/" className="nav-link text-sm font-medium text-ink-soft">
        ← Back home
      </Link>

      <p className="mono-label mt-10">AI Labs</p>
      <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        Public AI labs you can run.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        AI Explorer is the main curriculum — one evolving app from basic LLM chat
        to production habits (including a real MCP server). Fraud Check remains a
        live on-device side lab.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {labs.map((lab) => {
          const href = labHref(lab);
          const external = Boolean(lab.externalUrl || lab.githubUrl);
          const className =
            "flex flex-col rounded-[1.5rem] border border-line bg-white/55 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-sea/35 hover:bg-white/85";

          const body = (
            <>
              <div className="flex items-center gap-2">
                <span className="chip">{statusLabel[lab.status]}</span>
                <span className="mono-label !normal-case !tracking-normal text-ink-soft">
                  /{lab.slug}
                </span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                {lab.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {lab.pitch}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {lab.stack.slice(0, 4).map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <span className="mt-6 text-sm font-semibold text-sea-deep">
                {ctaLabel(lab)}
              </span>
            </>
          );

          if (!href) {
            return (
              <div key={lab.slug} className={className}>
                {body}
              </div>
            );
          }

          if (external) {
            return (
              <a
                key={lab.slug}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {body}
              </a>
            );
          }

          return (
            <Link key={lab.slug} href={href} className={className}>
              {body}
            </Link>
          );
        })}
      </div>

      <p className="mt-10 text-sm text-ink-soft">
        Start with the{" "}
        <Link
          href="/writing/ai-explorer-overview"
          className="nav-link font-semibold text-sea-deep"
        >
          AI Explorer overview
        </Link>{" "}
        · see what&apos;s next on the{" "}
        <Link href="/roadmap" className="nav-link font-semibold text-sea-deep">
          roadmap
        </Link>
        .
      </p>
    </div>
  );
}
