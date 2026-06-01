"use client";

import {
  ArrowRight,
  BookOpen,
  Braces,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/link-button";
import { projects, siteConfig } from "@/lib/data";
import { homeContent } from "@/lib/home-content";

const focusItems = [
  { icon: Braces, label: "Web", value: "Interfaces and APIs" },
  { icon: TerminalSquare, label: "Systems", value: "Linux, tooling, clean code" },
  { icon: GraduationCap, label: "Learning", value: "Computer science foundations" },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("00:00");
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const { hero } = homeContent;

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };

    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden border-b border-foreground/25 pt-6">
      <div aria-hidden="true" className="hero-field absolute inset-0" />
      <div aria-hidden="true" className="paper-grain absolute inset-0 opacity-[0.08]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-18 sm:pt-10 lg:px-10 lg:pb-20">
        <div className="mb-10 grid gap-3 border-b border-foreground/20 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-foreground/35 bg-background/45 px-3 py-1 text-foreground">
              {hero.eyebrow}
            </span>
            <span>{hero.note}</span>
          </div>
          <div className="hidden h-px w-24 bg-foreground/25 md:block" />
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3" />
              {siteConfig.location}
            </span>
            <span className="inline-flex items-center gap-2 text-foreground">
              <span className="size-1.5 bg-warning soft-pulse" />
              {hero.status}
            </span>
            <span>{mounted ? time : "00:00"}</span>
          </div>
        </div>

        <div className="grid min-h-[calc(100svh-10rem)] items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)] lg:gap-14">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 border border-foreground/25 bg-card/35 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              <Sparkles className="size-3.5 text-foreground" />
              <span>{siteConfig.title}</span>
            </div>

            <h1 className="max-w-5xl text-5xl  font-semibold leading-[0.92] tracking-normal text-foreground sm:text-7xl md:text-8xl lg:text-8xl">
              {siteConfig.name}
            </h1>

            <div className="mt-8 grid gap-6 md:flex md:flex-col">
              <div className="space-y-5 border-l border-foreground/30 pl-5">
                <p className="text-2xl leading-snug text-foreground text-balance md:text-3xl">
                  {siteConfig.tagline}
                </p>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                  {siteConfig.bio}
                </p>
              </div>

              {/*<div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-foreground/20 bg-background/35 p-3"
                  >
                    <p className="font-mono text-2xl text-foreground">{stat.value}</p>
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>*/}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/projects" variant="primary">
                {hero.primaryAction}
              </LinkButton>
              <LinkButton href="#contact" variant="secondary">
                {hero.secondaryAction}
              </LinkButton>
            </div>
          </div>

          <aside className="hero-identity-panel relative overflow-hidden border border-foreground/30 bg-card/45 p-5">
            <div aria-hidden="true" className="panel-topography absolute inset-0 opacity-50" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between border-b border-foreground/20 pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Current Snapshot
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">Learning Log</h2>
                </div>
                <span className="border border-foreground/30 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {hero.code}
                </span>
              </div>

              <div className="relative mb-5 grid min-h-65 place-items-center overflow-hidden border border-foreground/25 bg-background/35">
                {/*<div aria-hidden="true" className="hero-orbit absolute inset-6" />*/}
                {/*<div className="relative grid w-full h-full place-items-center border bg-background/60 ">
                  <img src="/icon.svg" alt="" className="size-24 opacity-95" draggable={false} />
                </div>*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 109.92 108.89"
                  className="size-36"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M56.54.25s.02.01.03.02c0,0,0,0,0,0,0,0-.02-.01-.03-.02Z"
                    />
                    <path
                      fill="currentColor"
                      d="M109.8,41.11c-.03-.05-.07-.09-.1-.14h0s-12.37-15.39-12.37-15.39c-.27-.34-.73-.44-1.11-.26l-10.66,4.82L56.57.27h0s-.02-.02-.03-.02c-.05-.06-.11-.1-.17-.13-.03-.02-.06-.03-.08-.04-.05-.03-.1-.05-.15-.06-.03,0-.07-.02-.09-.02-.06,0-.1,0-.16,0h-.09s-.03,0-.05,0c0,0-.01,0-.02,0-.01,0-.02,0-.03,0-.02,0-.05.01-.07.02-.02,0-.04,0-.06.02l-18.33,7.1c-.39.15-.63.55-.59.97l1.28,11.48L.52,37.97c-.28.14-.47.41-.51.73,0,.05,0,.09,0,.14v-.04s0,.1,0,.1c0,0,0,0,0,.01l1.13,19.72c.03.42.33.77.74.86l11.34,2.34,5.89,41.16c.05.32.24.58.53.72l19.28,5.17c.08.02.16.03.24.03.33,0,.64-.18.81-.48l5.74-10.07,40.77,7.09c.06,0,.1,0,.16,0,.26,0,.5-.1.68-.3l11.06-16.7c.22-.35.19-.82-.09-1.13l-7.88-8.63h0s0,0,0,0l19.39-36.68c.15-.28.15-.61,0-.89ZM56.24,2.6l29.65,30.56-31.53.69c-.51,0-.92.43-.91.94l.22,21.56h0s-1.26-.4-1.26-.4l-6.89-2.5-8.46-3.08L56.24,2.6ZM53.68,56.34h0s-.01,0-.01,0h.01ZM52.39,55.94h-.02s-5.27-1.92-5.27-1.92l5.29,1.92ZM2.62,39.01l36.7-18.02,1.52-.74-9.09,30.2c-.15.49.13,1.01.61,1.15l13.48,4.24-13.48-4.23,15.9,4.99,3.44,1.08h-.02s.09.02.09.02l1.18.43h0s-10.85,13.89-10.85,13.89L2.62,39.01ZM20.75,101.3l-6.03-42.14,25.92,17.97c.42.29,1,.19,1.28-.22l12.43-17.48,2.15,2.9,7.84,11.61-43.59,27.37ZM54.36,59.42l2.13,2.86.02.03-2.15-2.89ZM43.44,96.06l25.11-19.09c.4-.32.48-.89.18-1.3l-10.67-14.38-.03-.05s0,0,0,0l-1.95-2.89,2.23-.75.28-.09,14.25-4.07,12.56,49.91-41.96-7.28ZM87.6,80.04l-10.4-29.78c-.13-.38-.49-.62-.88-.62-.1,0-.2.02-.3.05l-18.24,6.13h-.04s0,.01,0,.01h0s-2.19.63-2.19.63h-.02s0,0,0,0h0l.6-17.55,51.37,3.48-19.91,37.65Z"
                    />
                  </g>
                </svg>
                <div className="absolute left-2 top-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground bg-background/60 py-1 px-2.5 rounded-full">
                  Build / Learn / Repeat
                </div>
                <div className="absolute bottom-2 right-2 border border-foreground/25 bg-background/65 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                  ERROR: No Image Found
                </div>
              </div>

              <div className="grid gap-3">
                {focusItems.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[40px_minmax(0,1fr)] gap-3 border border-foreground/20 bg-background/30 p-3"
                  >
                    <div className="grid size-10 place-items-center border border-foreground/25 text-foreground">
                      <item.icon className="size-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 border-t border-foreground/25 pt-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <BookOpen className="size-4 text-muted-foreground" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Selected Projects
              </span>
              <div className="hidden h-px w-16 bg-foreground/25 sm:block" />
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>View All</span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href="/projects"
                className="group relative min-h-47 border border-foreground/25 bg-background/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card/55"
              >
                <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>/{project.id}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold leading-tight text-foreground">
                  {project.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
                <ExternalLink className="absolute bottom-5 right-5 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
