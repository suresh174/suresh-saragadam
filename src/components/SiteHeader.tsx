"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const links = [
  { href: "/learn", label: "Learn" },
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/labs", label: "Labs" },
  { href: "/writing", label: "Notes" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-foam/80 backdrop-blur-xl supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-8 sm:py-3.5">
        <Link
          href="/"
          className="min-w-0 truncate font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-ink sm:text-xl"
          onClick={() => setOpen(false)}
        >
          {profile.firstName}
          <span className="text-sea">.</span>
          {profile.lastName.toLowerCase()}
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-medium text-ink-soft lg:gap-7 md:flex"
          aria-label="Primary"
        >
          {links.map((link) => {
            const active =
              link.href === "/learn"
                ? pathname.startsWith("/learn")
                : link.href === "/writing"
                ? pathname.startsWith("/writing")
                : link.href === "/labs"
                  ? pathname.startsWith("/labs")
                  : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                data-active={active}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={profile.linkedin}
            className="btn-secondary !hidden !min-h-10 !px-3.5 !py-2 text-sm sm:!inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumePath}
            className="btn-secondary !min-h-10 !px-3 !py-2 text-sm sm:!px-3.5"
            download
          >
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/60 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-4 flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-full origin-center rounded bg-ink transition duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-full rounded bg-ink transition duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full origin-center rounded bg-ink transition duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-foam/98 px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3.5 text-base font-medium text-ink hover:bg-mist active:bg-mist"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.linkedin}
              className="rounded-xl px-3 py-3.5 text-base font-medium text-ink hover:bg-mist"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl px-3 py-3.5 text-base font-medium text-ink hover:bg-mist"
              onClick={() => setOpen(false)}
            >
              Email
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
