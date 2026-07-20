import Link from "next/link";
import { labs, type Lab, type LabStatus } from "@/data/labs";
import { Reveal } from "@/components/Reveal";

const statusLabel: Record<LabStatus, string> = {
  live: "Live",
  building: "Building",
  planned: "Planned",
};

function labHref(lab: Lab): string | undefined {
  if (lab.externalUrl) return lab.externalUrl;
  if (lab.githubUrl) return lab.githubUrl;
  if (lab.status === "live") return `/labs/${lab.slug}`;
  if (lab.notesUrl) return lab.notesUrl;
  return undefined;
}

export function LabsTeaser() {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono-label">AI Labs</p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Public labs you can run and learn from.
            </h2>
            <p className="mt-3 max-w-lg text-ink-soft">
              AI Explorer is the main end-to-end path. Fraud Check stays as a
              live on-device side lab.
            </p>
          </div>
          <Link href="/labs" className="btn-primary self-start sm:self-auto">
            Browse labs
          </Link>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {labs.map((lab, index) => {
            const href = labHref(lab);
            const external = Boolean(lab.externalUrl || lab.githubUrl);
            const className =
              "card-lift group rounded-[1.25rem] border border-line bg-white/55 p-6 backdrop-blur-sm";
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

            if (!href) {
              return (
                <Reveal key={lab.slug} delayMs={index * 70}>
                  <div className={className}>{body}</div>
                </Reveal>
              );
            }

            if (external) {
              return (
                <Reveal key={lab.slug} delayMs={index * 70}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {body}
                  </a>
                </Reveal>
              );
            }

            return (
              <Reveal key={lab.slug} delayMs={index * 70}>
                <Link href={href} className={className}>
                  {body}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
