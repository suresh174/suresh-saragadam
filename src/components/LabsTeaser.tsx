import Link from "next/link";
import { labs, type LabStatus } from "@/data/labs";

const statusLabel: Record<LabStatus, string> = {
  live: "Live",
  building: "Building",
  planned: "Planned",
};

export function LabsTeaser() {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono-label">AI Labs</p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Public labs I use to teach.
            </h2>
            <p className="mt-3 max-w-lg text-ink-soft">
              Start with Fraud Check — a live camera integrity lesson with
              on-device AI and beginner notes.
            </p>
          </div>
          <Link href="/labs" className="btn-primary self-start sm:self-auto">
            Browse labs
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {labs.slice(0, 3).map((lab) => {
            const className =
              "group rounded-[1.25rem] border border-line bg-white/55 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sea/35 hover:bg-white/80";
            const body = (
              <>
                <span className="chip">{statusLabel[lab.status]}</span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight group-hover:text-sea-deep">
                  {lab.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {lab.pitch}
                </p>
              </>
            );

            if (lab.status === "live" && lab.externalUrl) {
              return (
                <a
                  key={lab.slug}
                  href={lab.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {body}
                </a>
              );
            }

            if (lab.status === "live") {
              return (
                <Link
                  key={lab.slug}
                  href={`/labs/${lab.slug}`}
                  className={className}
                >
                  {body}
                </Link>
              );
            }

            return (
              <div key={lab.slug} className={`${className} opacity-80`}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
