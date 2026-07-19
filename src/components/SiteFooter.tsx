import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-line pb-[env(safe-area-inset-bottom)] sm:mt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-10">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
            {profile.name}
          </p>
          <p className="mt-2 max-w-md text-sm text-ink-soft">
            AI Engineer · React & Node.js · Visakhapatnam · Open to roles where
            production LLM assistants meet real products.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-medium text-ink-soft">
          <a
            className="nav-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="nav-link" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="nav-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            Call
          </a>
          <Link className="nav-link" href="/writing">
            Notes
          </Link>
          <a className="nav-link" href={profile.resumePath} download>
            PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
