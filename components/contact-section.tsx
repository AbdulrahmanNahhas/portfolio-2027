"use client"

import { ArrowUpRight, Copy, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"
import { siteConfig } from "@/lib/data"

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, handle: "@abdulrahmannahhas", icon: Github },
  { label: "LinkedIn", href: siteConfig.social.linkedin, handle: "/in/abdulrahmannahhas", icon: Linkedin },
  { label: "Twitter", href: siteConfig.social.twitter, handle: "@abdulrahmandev", icon: Twitter },
]

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = siteConfig.email

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">05</span>
          <div className="w-12 h-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">Connect</span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-tight text-balance">
                {"Let's build something meaningful together."}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Whether you have a project in mind, need technical consultation, 
                or just want to connect - {"I'm"} always open to discussing new opportunities.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase border border-border px-8 py-4 hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
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
              <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
                Email Address
              </p>
              <button
                onClick={copyEmail}
                className="group flex items-center gap-4 text-foreground hover:text-muted-foreground transition-colors w-full border border-border p-4 hover:border-foreground/50"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span className="text-lg font-mono">{email}</span>
                <Copy className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                {copied && (
                  <span className="text-xs font-mono text-foreground bg-foreground/10 px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
                Location
              </p>
              <div className="flex items-center gap-4 border border-border p-4">
                <div className="w-2 h-2 bg-foreground animate-pulse" />
                <span className="text-lg">{siteConfig.location}</span>
                <span className="text-sm text-muted-foreground ml-auto font-mono">Available Remotely</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
                Social Profiles
              </p>
              <div className="grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 border border-border hover:border-foreground/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-foreground group-hover:text-foreground/80 transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground font-mono">
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
