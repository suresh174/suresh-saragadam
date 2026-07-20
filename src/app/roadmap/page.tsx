import type { Metadata } from "next";
import Link from "next/link";
import { roadmapItems } from "@/data/labs";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Public roadmap for Suresh Saragadam's AI Labs — Now, Next, and Later.",
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/" className="nav-link text-sm font-medium text-ink-soft">
        ← Back home
      </Link>

      <p className="mono-label mt-10">Roadmap</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        What&apos;s building next
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        A living plan centered on AI Explorer — one app that grows AI Engineering
        skills end-to-end. Now is shipping. Next is the near-term bet. Later is
        intentional, not promised.
      </p>

      <div className="mt-12 space-y-8">
        {roadmapItems.map((block) => (
          <section
            key={block.phase}
            className="rounded-[1.5rem] border border-line bg-white/55 p-7 backdrop-blur-sm"
          >
            <p className="mono-label">{block.phase}</p>
            <ul className="mt-4 space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Link href="/labs" className="btn-primary mt-10 inline-flex">
        Open AI Labs
      </Link>
    </div>
  );
}
