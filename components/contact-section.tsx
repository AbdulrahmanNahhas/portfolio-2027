"use client"

import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { siteConfig } from "@/lib/data"

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, handle: "@abdulrahmannahhas", icon: Github },
  { label: "LinkedIn", href: siteConfig.social.linkedin, handle: "/in/abdulrahmannahhas", icon: Linkedin },
  { label: "Twitter", href: siteConfig.social.twitter, handle: "@abdulrahmandev", icon: Twitter },
]

export function ContactSection() {
  const email = siteConfig.email

  return (
    <section id="contact" className="relative px-4 py-28 sm:px-6 lg:px-10">
      <div className="section-field absolute inset-0 opacity-80" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-14 flex items-center gap-4 border-b border-foreground/25 pb-5">
          <span className="border border-foreground/35 px-3 py-1 font-mono text-xs text-foreground">
            05
          </span>
          <div className="h-px w-12 bg-foreground/35" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Connect</span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold leading-tight text-foreground text-balance md:text-4xl lg:text-5xl">
                {"Let's build something meaningful together."}
              </h2>
              <p className="max-w-md border-l border-foreground/30 pl-5 leading-8 text-muted-foreground">
                Whether you have a project in mind, need technical consultation, 
                or just want to connect - {"I'm"} always open to discussing new opportunities.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-background hover:text-foreground"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-foreground/40 px-8 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:border-foreground hover:bg-foreground/10"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Email */}
            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Email Address
              </p>
              <a
                href={`mailto:${email}`}
                className="group flex w-full min-w-0 items-center gap-4 border border-foreground/35 bg-card/45 p-4 text-foreground transition-colors hover:border-foreground hover:bg-background/50"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span className="min-w-0 break-all text-left font-mono text-base sm:text-lg">{email}</span>
                <ArrowUpRight className="ml-auto size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Location
              </p>
              <div className="flex flex-col gap-3 border border-foreground/35 bg-card/45 p-4 sm:flex-row sm:items-center">
                <div className="w-2 h-2 bg-warning soft-pulse" />
                <span className="text-lg">{siteConfig.location}</span>
                <span className="font-mono text-sm text-muted-foreground sm:ml-auto">Available Remotely</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Social Profiles
              </p>
              <div className="grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border border-foreground/30 bg-background/35 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-card/60"
                  >
                    <div className="flex items-center gap-4">
                        <link.icon className="w-5 h-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                      <span className="text-foreground group-hover:text-foreground/80 transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden font-mono text-sm text-muted-foreground sm:inline">
                        {link.handle}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
