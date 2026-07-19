import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-visual" aria-hidden>
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
        <div className="order-2 lg:order-1">
          <p className="mono-label animate-rise">AI Engineer · Visakhapatnam</p>

          <h1 className="animate-rise-delay-1 mt-3 font-[family-name:var(--font-display)] text-[clamp(2.35rem,8vw,4.6rem)] font-extrabold leading-[0.95] tracking-tight text-ink sm:mt-4">
            {profile.name}
          </h1>

          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-lg">
            {profile.intro}
          </p>

          <p className="animate-rise-delay-2 mt-3 max-w-lg text-sm font-semibold text-sea-deep sm:mt-4 sm:text-base">
            {profile.tagline}
          </p>

          <div className="animate-rise-delay-3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`mailto:${profile.email}`} className="btn-primary w-full sm:w-auto">
              Let&apos;s talk
            </a>
            <div className="grid grid-cols-2 gap-3 sm:contents">
              <a
                href={profile.linkedin}
                className="btn-secondary w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={profile.resumePath}
                className="btn-secondary w-full sm:w-auto"
                download
              >
                Resume PDF
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
            {profile.focusAreas.map((area) => (
              <span key={area} className="chip">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 animate-rise-delay-1 lg:order-2">
          <div className="hero-photo-frame relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-none">
            <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-signal/40 via-transparent to-sea/25 blur-sm sm:-inset-3 sm:rounded-[2rem]" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-fog/40 shadow-[0_24px_60px_rgba(12,26,31,0.16)] ring-1 ring-white/60 sm:rounded-[1.75rem]">
              <Image
                src={profile.photoHero}
                alt={`${profile.name}, AI Engineer`}
                width={720}
                height={900}
                priority
                className="aspect-[4/5] h-auto w-full object-cover object-[50%_18%] sm:object-[50%_12%]"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 42vw"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-sea-deep/30 to-transparent sm:h-28" />
            </div>
            <p className="mt-3 text-center text-xs text-ink-soft sm:mt-4 sm:text-sm lg:text-left">
              React · Node.js · Azure OpenAI · Langfuse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
