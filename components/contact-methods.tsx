"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { contactConfig, siteConfig } from "@/lib/data";

const socialLinks = [
  { name: "GitHub", url: siteConfig.social.github, icon: Github },
  { name: "LinkedIn", url: siteConfig.social.linkedin, icon: Linkedin },
  { name: "Twitter", url: siteConfig.social.twitter, icon: Twitter },
];

export function ContactMethods() {
  return (
    <div className="space-y-12">
      <div>
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Direct Contact
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="group mb-6 border border-border p-6 transition-all hover:border-foreground/50">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-muted-foreground" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </span>
            </div>
          </div>
          <a href={`mailto:${siteConfig.email}`} className="text-lg text-foreground hover:underline">
            {siteConfig.email}
          </a>
        </div>

        <div className="border border-border p-6">
          <div className="mb-4 flex items-center gap-3">
            <MapPin className="size-4 text-muted-foreground" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Location
            </span>
          </div>
          <p className="text-lg text-foreground">{siteConfig.location}</p>
          <p className="mt-2 text-sm text-muted-foreground">{contactConfig.availability}</p>
        </div>
      </div>

      <div>
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Social
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-border py-4 transition-colors hover:border-foreground/50"
            >
              <div className="flex items-center gap-4">
                <social.icon className="size-4 text-muted-foreground" />
                <span className="text-foreground">{social.name}</span>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>

      <div className="border border-border bg-card/30 p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="size-2 animate-pulse bg-foreground" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Status
          </span>
        </div>
        <p className="text-foreground">Currently available for freelance work</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Open to full-time opportunities and interesting collaborations.
        </p>
      </div>
    </div>
  );
}
