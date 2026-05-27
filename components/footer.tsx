"use client"

import Link from "next/link"
import { siteConfig } from "@/lib/data"
import { ArrowUp } from "lucide-react"

const navLinks = [
  { label: "Index", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/skills" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-foreground" />
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-foreground">
                {siteConfig.name.split(" ")[0]}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="text-xs font-mono text-muted-foreground">
              {siteConfig.location}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Contact
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
              >
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-6">
            <p className="text-xs text-muted-foreground font-mono">
              {currentYear} {siteConfig.name}
            </p>
            <span className="text-muted-foreground/30">|</span>
            <p className="text-xs text-muted-foreground font-mono">
              Built with Next.js
            </p>
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-4 py-2 hover:border-foreground/50"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* EOF Decoration */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-border via-border/50 to-transparent" />
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/50">
            <span className="w-1 h-1 bg-muted-foreground/30" />
            <span>EOF</span>
            <span className="w-1 h-1 bg-muted-foreground/30" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-border via-border/50 to-transparent" />
        </div>
      </div>
    </footer>
  )
}
