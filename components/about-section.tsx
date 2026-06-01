"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "@/components/link-button";
import { skillCategories } from "@/lib/data";
import { homeContent } from "@/lib/home-content";

export function AboutSection() {
  const { about } = homeContent;

  return (
    <section id="about" className="relative px-4 py-28 sm:px-6 lg:px-10">
      <div className="section-field absolute inset-0 opacity-80" />

        <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex items-center gap-4 border-b border-foreground/25 pb-5">
          <span className="border border-foreground/35 px-3 py-1 font-mono text-xs text-foreground">
            02
          </span>
          <div className="h-px w-12 bg-foreground/35" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {about.label}
          </span>
        </div>

        <div className="mb-24 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
              {about.title}
            </h2>
            <div className="max-w-2xl space-y-4 border-l border-foreground/30 pl-5 leading-8 text-muted-foreground">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <LinkButton href="/about" variant="primary" className="px-6 py-3">
                {about.primaryAction}
              </LinkButton>
              <LinkButton href="/skills" variant="secondary" className="px-6 py-3">
                {about.secondaryAction}
              </LinkButton>
            </div>
          </div>

          <div className="space-y-6">
            {about.highlights.map((item, index) => (
              <div
                key={item.title}
                className="group hud-panel corner-cut flex gap-5 p-5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center border border-foreground/35 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="border-y border-foreground/30 bg-card/40 py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="px-4 text-center md:text-left">
                <p className="mb-2 font-mono text-3xl text-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Skills Preview */}
        <div className="pt-16">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-muted-foreground" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Featured Skills
              </span>
            </div>
            <Link
              href="/skills"
              className="group flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {skillCategories.flatMap((cat) =>
              cat.skills
                .filter((s) => s.featured)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="border border-foreground/30 bg-background/45 px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    {skill.name}
                  </span>
                )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
