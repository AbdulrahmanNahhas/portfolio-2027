"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { contactConfig, siteConfig } from "@/lib/data";
import { GitLab, Mastodon } from "@/lib/icons";

const socialLinks = [
  { name: "GitLab", url: siteConfig.social.gitlab, icon: GitLab },
  { name: "Mastodon", url: siteConfig.social.mastodon, icon: Mastodon },
];

export function ContactMethods() {
  return (
    <div className="space-y-10">
      <div>
        <p className="kicker">Direct</p>
        <div className="mt-5 space-y-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-md hover:shadow-foreground/5"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Mail className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-muted-foreground">Email</span>
              <span className="block break-all font-mono text-sm text-foreground">
                {siteConfig.email}
              </span>
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5">
            <span className="grid size-11 place-items-center rounded-xl bg-secondary text-foreground">
              <MapPin className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-sm text-foreground">{siteConfig.location}</p>
            </div>
            <span className="text-xs text-muted-foreground">{contactConfig.availability}</span>
          </div>
        </div>
      </div>

      <div>
        <p className="kicker">Social</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card/40 p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-md hover:shadow-foreground/5"
            >
              <span className="flex items-center gap-3">
                <social.icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                <span className="text-sm text-foreground">{social.name}</span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-secondary/40 p-5">
        <div className="flex items-center gap-2.5">
          <span className="relative inline-flex size-2 rounded-full bg-primary pulse-dot" />
          <p className="kicker text-foreground/80">Currently available</p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Open to collaboration, internships, volunteer work, and conversations with people building
          useful things.
        </p>
      </div>
    </div>
  );
}
