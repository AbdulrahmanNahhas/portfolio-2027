"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { footerNavItems } from "@/lib/navigation";
import { GitLab, Mastodon } from "@/lib/icons";

const socialLinks = [
  { label: "GitLab", href: siteConfig.social.gitlab, icon: GitLab },
  { label: "Mastodon", href: siteConfig.social.mastodon, icon: Mastodon },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 pb-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          {/* Sign-off */}
          <div>
            <p className="kicker text-primary/80">Portfolio</p>
            <h2 className="font-display mt-5 text-balance text-4xl leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Building, learning,
              <br />
              shipping — <span className="italic text-primary">one project at a time.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              A living record of {siteConfig.name}&apos;s work across web, embedded systems, and
              humanitarian tech. Made in {siteConfig.location}, open to the world.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm text-foreground transition-all hover:border-foreground/30 hover:bg-card hover:shadow-sm"
                >
                  <link.icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <span>{link.label}</span>
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Navigation + status */}
          <div className="grid gap-10 sm:grid-cols-2 lg:gap-8">
            <div>
              <p className="kicker">Explore</p>
              <nav className="mt-5 grid gap-1" aria-label="Footer navigation">
                {footerNavItems.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>{link.label}</span>
                    <span className="size-px h-1 w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="kicker">Status</p>
              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="relative inline-flex size-2 rounded-full bg-primary pulse-dot" />
                  <span>Open to collaboration &amp; internships</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Usually replies within a day or two. Best reached by email or Mastodon.
                </p>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm text-foreground transition-all hover:border-foreground/30 hover:bg-card"
                >
                  <span>Back to top</span>
                  <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Built with Next.js, TypeScript &amp; shadcn/ui.
          </p>
          <p className="font-mono tracking-tight">
            <span className="text-primary">●</span> Learning in public
          </p>
        </div>
      </div>
    </footer>
  );
}
