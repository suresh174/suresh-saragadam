import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWritingPost } from "@/data/writing";

export const metadata: Metadata = {
  title: "Fraud Check: teaching exam integrity with a live camera",
  description:
    "A beginner teaching lab by Suresh Saragadam — on-device webcam detection for exam/interview integrity, with plain-English learnings.",
};

export default function FraudCheckTeachingPostPage() {
  const post = getWritingPost("fraud-check-teaching-lab");
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Link href="/writing" className="nav-link text-sm font-medium text-ink-soft">
        ← All notes
      </Link>

      <p className="mono-label mt-10">{post.dateLabel}</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {post.liveUrl ? (
          <a
            href={post.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Try the live lab →
          </a>
        ) : null}
        {post.githubUrl ? (
          <a
            href={post.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Why I built this
          </h2>
          <p className="mt-4">
            I wanted a public lab where I can <strong className="font-semibold text-ink">teach</strong>{" "}
            something useful in AI — not only show a demo and move on.
          </p>
          <p className="mt-4">
            Online exams and interviews have a simple integrity problem: is the
            person alone, and are they using a phone? That is a vision problem.
            The coaching should happen <em>during</em> the session, not only in a
            report afterward.
          </p>
          <p className="mt-4">
            So I built <strong className="font-semibold text-ink">Fraud Check</strong> — a
            camera-based teaching product. Your webcam stays in the browser. A
            model draws boxes on people and phones. Simple rules turn those boxes
            into clear alerts and an integrity score.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            What I am teaching you
          </h2>
          <p className="mt-4">You do not need an ML background. Here is the idea in plain English:</p>
          <ol className="mt-4 list-decimal space-y-3 pl-5">
            <li>
              <strong className="font-semibold text-ink">Object detection</strong> —
              the computer looks at a video frame and draws boxes: “this is a
              person,” “this is a phone.”
            </li>
            <li>
              <strong className="font-semibold text-ink">On-device</strong> — the AI runs
              on your laptop. In this lab, frames are not uploaded to my server
              for scoring.
            </li>
            <li>
              <strong className="font-semibold text-ink">Rules + coaching</strong> — I
              count people and phones, then warn you right away if the frame
              looks risky.
            </li>
            <li>
              <strong className="font-semibold text-ink">Latency matters</strong> — if
              the demo feels slow, people stop learning from it. I chose the
              stack for speed first.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            The loop I want you to remember
          </h2>
          <p className="mt-4 rounded-[1.25rem] border border-line bg-white/70 px-5 py-4 font-mono text-sm text-ink">
            camera → detect → rules → coach (repeat)
          </p>
          <p className="mt-4">
            That is the whole product. Fancy models help only if this loop still
            feels realtime while you practice.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Why I chose TensorFlow.js + COCO-SSD
          </h2>
          <p className="mt-4">
            I did not pick the fanciest model. I picked the one that feels fast
            enough for a classroom on a normal laptop.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
              <span>
                <strong className="font-semibold text-ink">COCO-SSD (lite)</strong>{" "}
                is built for webcam demos. It knows everyday labels like{" "}
                <em>person</em> and <em>cell phone</em> — enough for this lesson.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
              <span>
                I tried a Transformers.js detector first. It worked, but it was
                often slower for continuous video. For teaching, lag kills the
                lesson.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
              <span>
                MediaPipe is excellent later for face and pose (for example,
                looking away). It is not my first pick when the lesson is “phone
                detected.”
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            How you should practice
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5">
            <li>Start alone — look for a box on you; score should stay high.</li>
            <li>Hold up a phone — watch the alert and the score drop.</li>
            <li>Step out of frame — see the “no person” rule.</li>
            <li>
              Open the in-app <strong className="font-semibold text-ink">Teaching notes</strong>{" "}
              and finish the beginner guide.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            What I am honest about
          </h2>
          <p className="mt-4">
            This is a teaching demo, not a certified exam vendor. The model can
            miss a phone or confuse similar objects. Lighting and camera angle
            change results. Saying that clearly is part of good AI engineering —
            and part of how I teach.
          </p>
        </section>

        <section className="rounded-[1.5rem] border border-line bg-gradient-to-br from-white/80 via-mist/80 to-fog/70 px-6 py-8 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Try it live
          </h2>
          <p className="mt-3">
            Open the lab, allow the camera, and learn with me. Code lives under
            the Suresh AI Lab organization on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {post.liveUrl ? (
              <a
                href={post.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open live lab →
              </a>
            ) : null}
            {post.githubUrl ? (
              <a
                href={post.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View source
              </a>
            ) : null}
          </div>
        </section>
      </div>
    </article>
  );
}
