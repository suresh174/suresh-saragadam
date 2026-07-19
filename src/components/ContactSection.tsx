import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-sea-deep px-6 py-10 text-foam sm:rounded-[2rem] sm:px-10 sm:py-12">
        <p className="mono-label !text-[rgba(232,255,107,0.85)]">Contact</p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Open to AI Engineer conversations.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foam/80">
          Currently active at NielsenIQ. Happy to talk about intent-aware
          assistants, evals, or full-stack GenAI product work.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-bold !text-black transition hover:bg-white/90"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-foam transition hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-foam transition hover:bg-white/10"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
