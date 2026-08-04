import type { Metadata } from "next";
import Link from "next/link";
import { LearnHub } from "@/components/learn/LearnHub";
import { ROADMAP_HUB_PATH } from "@/data/aiEngineerRoadmap/types";

export const metadata: Metadata = {
  title: "Learn — AI Engineer Roadmap",
  description:
    "Pin-to-pin AI engineering curriculum with simple examples, progress tracking, and interview prep. Built for enterprise multi-agent builders.",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-20">
      <Link href="/" className="nav-link text-sm font-medium text-ink-soft">
        ← Home
      </Link>

      <p className="mono-label mt-8 sm:mt-10">Learn</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
        AI Engineer Roadmap
      </h1>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft font-light">
        Short term: <strong className="font-semibold text-ink">AI Engineer</strong>.
        Long term: <strong className="font-semibold text-ink">Forward Deployment Engineer</strong>.
        You&apos;re already building enterprise multi-agent apps — this fills the gaps
        from basics to pro, with simple examples and tracked progress.
      </p>

      <div className="mt-6 rounded-[1.25rem] border border-line bg-white/55 p-5 sm:p-6 text-sm sm:text-base text-ink-soft font-light leading-relaxed">
        <p>
          <strong className="font-semibold text-ink">How to use:</strong> Pick a
          topic → read the real-world example → do the checkpoint → tick the box.
          Notes save on this device. Works on mobile — no zip files needed.
        </p>
      </div>

      <div className="mt-10">
        <LearnHub />
      </div>

      <p className="mt-10 text-sm text-ink-soft">
        Also explore{" "}
        <Link href="/writing/ai-explorer-lessons" className="text-sea font-medium">
          AI Explorer hands-on lessons
        </Link>{" "}
        for clone-and-build practice.
      </p>
    </div>
  );
}
