"use client";

import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects, siteConfig, stats } from "@/lib/data";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 150);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, []);

  if (!mounted) return null;

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-y-auto overflow-x-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 scanlines opacity-20" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-foreground/[0.02] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col">
        {/* Top metadata bar */}
        <div className="flex justify-between items-start pt-28 pb-12 border-b border-border/30">
          <div className="flex items-center gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
                Location
              </p>
              <p className="text-sm text-foreground font-mono">{siteConfig.location}</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
                Status
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground animate-pulse" />
                <p className="text-sm text-foreground font-mono">Available</p>
              </div>
            </div>
          </div>
          <div className="text-right space-y-1">
            <p className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
              System Time
            </p>
            <p className="text-sm text-foreground font-mono tabular-nums">{time}</p>
          </div>
        </div>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col justify-center py-16">
          <div className="space-y-12">
            {/* Greeting */}
            <div className="overflow-hidden">
              <p className="text-xs text-muted-foreground tracking-[0.5em] uppercase font-mono fade-up flex items-center gap-4">
                <span className="w-12 h-px bg-border" />
                <span>Software Developer</span>
                <span className="w-12 h-px bg-border" />
              </p>
            </div>

            {/* Name and title */}
            <div className="space-y-6">
              <h1
                className={`text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.9] tracking-tight text-foreground fade-up ${glitchText ? "glitch-text" : ""}`}
              >
                {siteConfig.name}
              </h1>
              <div className="flex items-center gap-6 fade-up" style={{ animationDelay: "100ms" }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-foreground" />
                  <span className="w-2 h-2 bg-foreground/60" />
                  <span className="w-2 h-2 bg-foreground/30" />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            {/* Bio */}
            <p
              className="text-base text-muted-foreground/80 max-w-2xl leading-relaxed fade-up"
              style={{ animationDelay: "150ms" }}
            >
              {siteConfig.bio}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 pt-4 fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-foreground border border-border px-8 py-4 hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
            {/* Scroll indicator */}
            {/*<div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
                Scroll
              </span>
              <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
            </div>*/}
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-border/30 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: stats.yearsExperience },
              { label: "Projects Completed", value: stats.projectsCompleted },
              { label: "Technologies", value: stats.technologiesUsed },
              { label: "Clients Served", value: stats.clientsServed },
            ].map((stat, index) => (
              <div key={stat.label} className="group">
                <p className="text-3xl md:text-4xl font-normal text-foreground mb-2 font-mono">
                  {stat.value}
                </p>
                <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="relative z-10 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
                Featured Work
              </span>
              <div className="w-24 h-px bg-border" />
            </div>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative border border-border p-6 hover:border-foreground/50 transition-all duration-500 bg-background/50"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-foreground/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-muted-foreground">/{project.id}</span>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-widest">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-lg text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-muted-foreground border border-border/50 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-12 h-12 border-l border-t border-border/30" />
      <div className="absolute top-24 right-6 w-12 h-12 border-r border-t border-border/30" />
    </section>
  );
}
