import { skills } from "@/data/profile";

const groups = [
  { title: "AI / LLM", items: skills.ai },
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Data", items: skills.data },
  { title: "Platform", items: skills.platform },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-14">
          <p className="mono-label">Capabilities</p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-5xl">
            React up front, Node underneath, LLMs in the loop.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Full-stack product engineering plus production GenAI — intent
            understanding, Azure OpenAI, Langfuse, and evaluators that keep
            prompt changes from breaking what already works.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.25rem] border border-line bg-white/55 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-sea/30 hover:bg-white/80"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
