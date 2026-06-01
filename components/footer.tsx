"use client";

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  // MapPin,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { footerNavItems } from "@/lib/navigation";
import { GitLab, Mastodon } from "@/lib/icons";

const socialLinks = [
  { label: "GitLab", href: siteConfig.social.gitlab, icon: GitLab },
  { label: "Mastodon", href: siteConfig.social.mastodon, icon: Mastodon },
  // { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  // { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-foreground/25 bg-background px-4 py-14 sm:px-6 lg:px-10">
      <div aria-hidden="true" className="footer-field absolute inset-0" />
      <div aria-hidden="true" className="paper-grain absolute inset-0 opacity-[0.08]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-foreground/20 pb-5">
          <div className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <Sparkles className="size-3.5 text-foreground" />
            <span>Thanks for visiting</span>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-3 border border-foreground/30 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <span>Top</span>
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.55fr)]">
          <section className="relative overflow-hidden border border-foreground/25 bg-card/40 p-6 sm:p-8">
            <div aria-hidden="true" className="panel-topography absolute inset-0 opacity-45" />
            <div className="relative">
              <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Personal Portfolio
                  </p>
                  <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-none text-foreground sm:text-6xl lg:text-7xl">
                    Keep building.
                    <br />
                    Keep learning.
                  </h2>
                </div>
                {/*<img
                  src="/icon.svg"
                  alt=""
                  className="size-16 border border-foreground/20 bg-background/60 p-2"
                  draggable={false}
                />*/}
              </div>

              <div className="flex flex-col gap-6">
                <p className="max-w-2xl border-l border-foreground/30 pl-5 text-base leading-8 text-muted-foreground">
                  This site is a living record of {siteConfig.name}&apos;s projects, experiments,
                  and progress as a student software developer.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-4">
            <div className="border border-foreground/25 bg-background/35 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-foreground/20 pb-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Route Map
                </p>
                <TerminalSquare className="size-4 text-muted-foreground" />
              </div>

              <nav className="grid grid-cols-2 gap-2" aria-label="Footer navigation">
                {footerNavItems.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between border border-foreground/15 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-45 transition-opacity group-hover:opacity-100">
                      {link.code}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {/*<div className="flex items-center gap-3 border border-foreground/25 bg-card/35 px-4 py-3 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0" />
                <span>{siteConfig.location}</span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em]">
                  Remote
                </span>
              </div>*/}

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-foreground/25 bg-background/35 px-4 py-3 text-sm text-foreground transition-all hover:border-foreground hover:bg-card/60"
                  >
                    <span className="flex items-center gap-2">
                      <link.icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      {link.label}
                    </span>
                    <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
              <a
                href={`/contact`}
                className="group flex min-w-0 items-center gap-3 border border-foreground bg-foreground px-4 py-4 text-background transition-colors hover:bg-background hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" />
                <span className="min-w-0 break-all font-mono text-sm">Contact Me</span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </section>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-foreground/20 pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {currentYear} {siteConfig.name}
          </p>
          <p>Built with Next.js and TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
