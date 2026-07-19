import Image from "next/image";
import { achievements, education, profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
        <div className="relative mx-auto w-full max-w-[260px] sm:max-w-sm lg:mx-0 lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_rgba(12,26,31,0.12)] ring-1 ring-line">
            <Image
              src={profile.photoPortrait}
              alt={`${profile.name} smiling`}
              width={640}
              height={800}
              className="aspect-[4/5] h-auto w-full object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 320px"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href={profile.linkedin}
              className="btn-primary !px-4 !py-2.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="btn-secondary !px-4 !py-2.5">
              Email
            </a>
          </div>
        </div>

        <div>
          <p className="mono-label">About</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-5xl">
            Frontend, backend, and production LLM systems.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {profile.summary}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            Earlier chapters spanned Brandix manufacturing systems, ERP work,
            and retail analytics at TCS and NielsenIQ. That mix of React UIs and
            Node/API work is what I now lean on when shipping assistants that
            have to understand intent and answer from real product data.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-sea-deep px-6 py-7 text-foam">
              <p className="mono-label !text-[rgba(232,255,107,0.85)]">Education</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm text-foam/80">
                {education.school} · {education.location}
              </p>
              <p className="mt-1 text-sm text-foam/70">
                {education.period} · {education.gpa}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-line bg-white/55 p-6 backdrop-blur-sm">
              <p className="mono-label">Quick facts</p>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li>Based in {profile.location}</li>
                <li>Comfortable across React and Node.js</li>
                <li>Currently active at NielsenIQ (since Oct 2022)</li>
                <li>~1.5 years on an intent-aware GenAI assistant at NIQ</li>
                <li>
                  <a className="nav-link text-sea-deep" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                    {profile.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-line bg-white/55 p-6 backdrop-blur-sm">
            <p className="mono-label">Recognition</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal ring-2 ring-sea/20" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
