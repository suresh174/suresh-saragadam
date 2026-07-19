import { experience, projects } from "@/data/profile";
import { formatPeriodLabel } from "@/lib/tenure";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 sm:mb-14">
          <p className="mono-label">Selected work</p>
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-5xl">
            From full-stack product work to production GenAI assistants.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Years building React experiences and Node/API services — now
            applying that craft to intent-aware bots, grounded answers, and
            eval-backed prompt changes.
          </p>
          <span className="section-rule mt-4 max-w-xs" />
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-[1.5rem] border border-line bg-white/55 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sea/35 hover:bg-white/80 sm:p-8"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-signal/30 blur-2xl transition duration-500 group-hover:bg-signal/50" />
              <p className="mono-label relative break-words">
                {project.org}
              </p>
              <p className="relative mt-1 text-xs font-medium text-ink-soft sm:text-sm">
                {project.period}
              </p>
              <h3 className="relative mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                {project.name}
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-ink-soft">
                {project.description}
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-0 border-t border-line">
          {experience.map((job) => {
            const period = formatPeriodLabel(job.startLabel, {
              present: job.present,
              endLabel: "endLabel" in job ? job.endLabel : undefined,
              startYear: job.startYear,
              startMonth: job.startMonth,
              endYear: "endYear" in job ? job.endYear : undefined,
              endMonth: "endMonth" in job ? job.endMonth : undefined,
            });

            return (
              <article
                key={job.company}
                className="grid gap-6 border-b border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10"
              >
                <div>
                  <p className="mono-label">{period}</p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-2 font-semibold text-sea-deep">{job.company}</p>
                  {job.current ? (
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-signal px-3 py-1 text-xs font-bold text-signal-ink">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sea-deep opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-sea-deep" />
                      </span>
                      Active now
                    </span>
                  ) : null}
                </div>
                <ul className="space-y-3 text-[0.98rem] leading-relaxed text-ink-soft">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
