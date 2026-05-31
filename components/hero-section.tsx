"use client";

import { ArrowRight, ExternalLink, RadioTower, ShieldCheck, Terminal } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { projects, siteConfig, stats } from "@/lib/data";

const systemRows = [
  { label: "Stack", value: "Next.js 16 / TypeScript" },
  { label: "Signal", value: "Web / Firmware / Systems" },
  { label: "Intent", value: "Useful human-centered tools" },
];

const directives = [
  { label: "Interface", value: "Clean" },
  { label: "Build", value: "Reliable" },
  { label: "Mode", value: "Available" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("00:00:00");
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
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      window.setTimeout(() => setGlitchText(false), 120);
    }, 6200);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, []);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden border-b border-foreground/30 pt-12"
    >
      <div aria-hidden="true" className="landing-field absolute inset-0" />
      <div aria-hidden="true" className="paper-grain absolute inset-0 opacity-[0.11]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-12 h-px bg-foreground/25" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-[7.5rem] hidden h-px bg-foreground/15 lg:block" />
      <div aria-hidden="true" className="absolute left-[7%] top-28 hidden h-[66%] w-px bg-foreground/15 xl:block" />
      <div aria-hidden="true" className="absolute right-[6%] top-24 hidden h-[54%] w-px bg-foreground/15 xl:block" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3rem)] max-w-7xl flex-col px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-3 gap-2 border-b border-foreground/25 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.24em]">
          <div>
            <span className="text-foreground sm:block">Location</span>
            <span className="sm:mt-1 block text-sm normal-case tracking-normal text-foreground">
              {siteConfig.location}
            </span>
          </div>
          <div>
            <span className="text-foreground sm:block">Status</span>
            <span className="sm:mt-1 flex items-center gap-2 text-sm normal-case tracking-normal text-foreground">
              <span className="size-1.5 bg-warning soft-pulse" />
              Available
            </span>
          </div>
          <div className="sm:text-right">
            <span className="block text-foreground">System Time</span>
            <span className="mt-1 block text-sm tracking-[0.12em] text-foreground">
              {mounted ? time : "00:00:00"}
            </span>
          </div>
        </div>

        <div className="grid flex-1 items-center gap-8 py-8 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,450px)] lg:py-14">
          <div className="max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
              <span className="border border-foreground/40 bg-background/35 px-3 py-1 text-foreground">
                Portfolio Unit
              </span>
              <span>AN-01</span>
              <span className="hidden h-px w-16 bg-foreground/25 sm:block" />
              <span>YoRHa style interface</span>
            </div>

            <h1
              className={`max-w-5xl text-4xl font-semibold leading-[0.95] tracking-normal text-foreground sm:text-6xl sm:leading-[0.9] md:text-7xl lg:text-8xl ${
                glitchText ? "glitch-text" : ""
              }`}
            >
              {siteConfig.name}
            </h1>

            <div className="mt-8 grid gap-6 lg:grid-cols-[116px_minmax(0,680px)]">
              <div className="hidden border-t border-foreground/50 pt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground lg:block">
                Directive
              </div>
              <div className="space-y-5 border-l border-foreground/30 pl-5">
                <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
                  {siteConfig.tagline}
                </p>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                  {siteConfig.bio}
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 border border-foreground bg-foreground px-7 py-4 text-sm uppercase tracking-[0.18em] text-background transition-all hover:bg-background hover:text-foreground"
              >
                <span>View Projects</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 border border-foreground/45 bg-background/20 px-7 py-4 text-sm uppercase tracking-[0.18em] text-foreground transition-all hover:border-foreground hover:bg-foreground/10"
              >
                <span>Get in Touch</span>
                <ArrowRight className="size-4 opacity-60 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3">
              {directives.map((item) => (
                <div
                  key={item.label}
                  className="border border-foreground/25 bg-background/30 px-3 py-3 font-mono sm:px-4"
                >
                  <p className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="mission-panel signal-line corner-cut overflow-hidden p-5">
            <div aria-hidden="true" className="panel-topography absolute inset-0 opacity-70" />
            <div className="relative">
              <div className="mb-5 flex items-start justify-between border-b border-foreground/25 pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Personal Record
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold uppercase tracking-[0.18em] text-foreground">
                    Developer
                  </h2>
                </div>
                <span className="border border-foreground/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em]">
                  Ready
                </span>
              </div>

              <div className="relative mb-6 min-h-[260px] border border-foreground/35 bg-background/35 p-5 sm:min-h-[310px]">
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                  <span>Identity Trace</span>
                  <span>042</span>
                </div>
                <div className="identity-sigil absolute left-1/2 top-[52%] grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center border border-foreground/50 bg-background/70 sm:size-36">
                  <div className="grid size-20 place-items-center border border-foreground/35 font-mono text-2xl font-semibold tracking-[0.18em] sm:size-24 sm:text-3xl">
                    AN
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid gap-2">
                  {[68, 42, 86, 57].map((width, index) => (
                    <span
                      key={width}
                      className="signal-bar"
                      style={
                        {
                          "--bar-width": `${width}%`,
                          animationDelay: `${index * 180}ms`,
                        } as CSSProperties
                      }
                    />
                  ))}
                </div>
                <div className="absolute left-5 top-16 grid gap-3">
                  <Terminal className="size-4 text-muted-foreground" />
                  <RadioTower className="size-4 text-muted-foreground" />
                  <ShieldCheck className="size-4 text-muted-foreground" />
                </div>
                <div className="data-stream absolute inset-x-8 top-20 flex justify-between font-mono text-[10px] text-foreground/55">
                  {["01", "08", "13", "21"].map((item, index) => (
                    <span key={item} style={{ animationDelay: `${index * 220}ms` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {systemRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[130px_minmax(0,1fr)] gap-3 border-b border-foreground/20 pb-3 font-mono text-[10px] uppercase tracking-[0.16em]"
                  >
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="text-right text-foreground">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-2 border-t border-foreground/25 py-4 lg:grid-cols-4 lg:py-5">
          {[
            { label: "Years Experience", value: stats.yearsExperience },
            { label: "Projects Completed", value: stats.projectsCompleted },
            { label: "Technologies", value: stats.technologiesUsed },
            { label: "Clients Served", value: stats.clientsServed },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-b border-foreground/20 px-3 py-4 odd:border-r lg:border-r lg:border-b-0 lg:px-5 last:border-r-0"
            >
              <p className="font-mono text-4xl text-foreground">{stat.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="landing-rail relative z-10 border-t border-foreground/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Selected Records
              </span>
              <div className="h-px w-20 bg-foreground/30" />
            </div>
            <Link
              href="/projects"
              className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>View All</span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative min-h-[220px] border border-foreground/35 bg-background/45 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-foreground/10 transition-colors group-hover:bg-foreground" />
                <div className="mb-6 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>/{project.id}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold leading-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mb-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pr-8">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="border border-foreground/25 px-2 py-1 font-mono text-[10px] text-foreground/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <ExternalLink className="absolute bottom-5 right-5 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
