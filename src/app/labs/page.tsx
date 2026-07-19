import type { Metadata } from "next";
import Link from "next/link";
import { labs, type LabStatus } from "@/data/labs";

export const metadata: Metadata = {
  title: "AI Labs",
  description:
    "Public AI teaching labs by Suresh Saragadam — starting with Fraud Check, an on-device exam integrity lab.",
};

const statusLabel: Record<LabStatus, string> = {
  live: "Live",
  building: "Building",
  planned: "Planned",
};

export default function LabsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/" className="nav-link text-sm font-medium text-ink-soft">
        ← Back home
      </Link>

      <p className="mono-label mt-10">AI Labs</p>
      <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        I build labs to teach AI in public.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Each lab is a small product you can try — with plain-English notes on
        what I am teaching and why I chose the stack.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => {
          const href = lab.externalUrl ?? `/labs/${lab.slug}`;
          const external = Boolean(lab.externalUrl);
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
                {lab.stack.slice(0, 3).map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <span className="mt-6 text-sm font-semibold text-sea-deep">
                {lab.status === "live"
                  ? external
                    ? "Open live lab →"
                    : "Open lab →"
                  : "Coming soon →"}
              </span>
            </>
          );

          if (lab.status !== "live") {
            return (
              <div key={lab.slug} className={`${className} opacity-80`}>
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
        Read the Fraud Check teaching post on{" "}
        <Link
          href="/writing/fraud-check-teaching-lab"
          className="nav-link font-semibold text-sea-deep"
        >
          Notes
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
