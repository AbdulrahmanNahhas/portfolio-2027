"use client";

import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { footerNavItems } from "@/lib/navigation";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-foreground/35 bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
      <div aria-hidden="true" className="footer-field absolute inset-0" />
      <div aria-hidden="true" className="paper-grain absolute inset-0 opacity-[0.09]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-foreground/45" />
      <div aria-hidden="true" className="absolute left-[7%] top-0 hidden h-full w-px bg-foreground/15 md:block" />
      <div aria-hidden="true" className="absolute right-[12%] top-0 hidden h-full w-px bg-foreground/15 lg:block" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-foreground/25 pb-5">
          <div className="flex items-center gap-4">
            <span className="border border-foreground/35 px-3 py-1 font-mono text-xs text-foreground">
              99
            </span>
            <div className="h-px w-12 bg-foreground/35" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              End Archive
            </span>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex size-10 items-center justify-center border border-foreground/35 text-foreground transition-colors hover:bg-foreground hover:text-background"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.75fr)_minmax(280px,0.9fr)] lg:gap-8">
          <section className="hud-panel corner-cut p-5 sm:p-7">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Portfolio Unit
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-none text-foreground sm:text-5xl">
                  {siteConfig.name}
                </h2>
              </div>
              <span className="hidden border border-foreground/35 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline-flex">
                AN-01
              </span>
            </div>

            <p className="max-w-xl border-l border-foreground/30 pl-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {siteConfig.tagline}. Available for focused web, systems, and humanitarian tech work.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:mt-8 sm:gap-3 sm:text-[10px] sm:tracking-[0.22em]">
              <div className="border-t border-foreground/25 pt-3">
                <span className="block text-foreground">Status</span>
                <span className="mt-2 flex items-center gap-2">
                  <span className="size-1.5 bg-warning soft-pulse" />
                  Online
                </span>
              </div>
              <div className="border-t border-foreground/25 pt-3">
                <span className="block text-foreground">Location</span>
                <span className="mt-2 block normal-case tracking-normal">{siteConfig.location}</span>
              </div>
              <div className="border-t border-foreground/25 pt-3">
                <span className="block text-foreground">Build</span>
                <span className="mt-2 block">Next.js</span>
              </div>
            </div>
          </section>

          <nav className="border border-foreground/30 bg-background/35 p-4 sm:p-5" aria-label="Footer navigation">
            <div className="mb-5 flex items-center justify-between border-b border-foreground/25 pb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Navigation
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Route Map
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {footerNavItems.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between border border-foreground/20 px-3 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background sm:text-[10px] sm:tracking-[0.22em]"
                >
                  <span>{link.label}</span>
                  <span className="text-[9px] opacity-55 transition-opacity group-hover:opacity-100">
                    {link.code}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          <section className="border border-foreground/30 bg-card/35 p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between border-b border-foreground/25 pb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Contact
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Open Channel
              </span>
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex min-w-0 items-center gap-3 border border-foreground bg-foreground px-4 py-4 text-background transition-colors hover:bg-background hover:text-foreground"
            >
              <Mail className="size-4 shrink-0" />
              <span className="min-w-0 break-all font-mono text-sm">{siteConfig.email}</span>
              <ArrowUpRight className="ml-auto size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-4 flex items-center gap-3 border border-foreground/25 px-4 py-3 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" />
              <span>{siteConfig.location}</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em]">
                Remote
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-foreground/25 px-4 py-3 text-sm text-foreground transition-all hover:border-foreground hover:bg-background/55"
                >
                  <span className="flex items-center gap-2">
                    <link.icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    {link.label}
                  </span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-3 border-t border-foreground/25 pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em] md:grid-cols-[1fr_auto_1fr] md:items-center">
          <p>
            {currentYear} {siteConfig.name}
          </p>
          <div className="flex items-center gap-2 justify-self-start md:justify-self-center">
            <span className="size-1 bg-muted-foreground/40" />
            <span>End of File</span>
            <span className="size-1 bg-muted-foreground/40" />
          </div>
          <p className="md:text-right">Transmission Complete</p>
        </div>
      </div>
    </footer>
  );
}
