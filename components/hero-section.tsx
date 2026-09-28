"use client";

import {
  ArrowRightIcon as ArrowRight,
  CpuIcon as Cpu,
  GlobeIcon as Globe,
  SparkleIcon as Sparkles,
  TerminalIcon as Terminal,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { projects, siteConfig } from "@/lib/data";

const focusItems = [
  { icon: Globe, label: "Web", value: "Interfaces & APIs" },
  { icon: Cpu, label: "Embedded", value: "ESP32, firmware, IoT" },
  { icon: Terminal, label: "Tooling", value: "Linux, CI, clean code" },
];

const SIGNAL_PATH =
  "M0,96 L70,96 C98,96 108,38 140,38 C172,38 176,96 210,96 L240,96 C268,96 274,58 304,58 C334,58 330,96 370,96 L400,96 C418,96 423,16 442,16 C461,16 459,96 490,96 L560,96";

function useLocalTime() {
  const [time, setTime] = useState<string>("--:--");
  const [location, setLocation] = useState<string>("Syria");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setLocation(tz.split("/").pop()?.replace("_", " ") ?? siteConfig.location);
      } catch {
        setLocation(siteConfig.location);
      }
    };
    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return { time, location };
}

export function HeroSection() {
  const { time, location } = useLocalTime();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const firstName = siteConfig.name.split(" ")[0];

  return (
    <section className="relative overflow-hidden border-b border-border pb-20 pt-32 sm:pt-40">
      {/* Ambient cobalt glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 78% 8%, color-mix(in oklch, var(--primary) 14%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top meta row */}
        <Reveal className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="relative inline-flex size-2 rounded-full bg-primary pulse-dot" />
            <span className="text-foreground">Currently building &amp; learning</span>
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span className="font-mono tabular-nums">{location} · {time}</span>
        </Reveal>

        <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-16">
          {/* Headline column */}
          <div>
            <Reveal delay={60}>
              <p className="kicker text-primary/80">{siteConfig.title}</p>
            </Reveal>

            <Reveal as="h1" delay={120} className="font-display mt-5 text-balance text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl">
              {firstName}
              <span className="block italic text-primary">Nahhas</span>
            </Reveal>

            <Reveal delay={200} className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {siteConfig.tagline}. A student software developer from {siteConfig.location} working
              across <span className="text-foreground">web interfaces</span>,{" "}
              <span className="text-foreground">embedded systems</span>, and{" "}
              <span className="text-foreground">humanitarian tech</span>.
            </Reveal>

            <Reveal delay={280} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/projects" variant="primary" size="lg" icon="arrow-right">
                View Projects
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg" icon="arrow-up-right">
                Get in touch
              </LinkButton>
            </Reveal>

            <Reveal delay={360} className="mt-10 grid gap-3 sm:grid-cols-3">
              {focusItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-card/40 p-3.5 transition-colors hover:border-foreground/20 hover:bg-card"
                >
                  <div className="flex items-center gap-2 text-foreground">
                    <item.icon className="size-4 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Signal panel — the signature */}
          <Reveal delay={240} className="lg:sticky lg:top-24">
            <SignalPanel time={time} location={location} />
          </Reveal>
        </div>

        {/* Featured projects */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="size-4 text-primary" />
              <h2 className="kicker">Selected work</h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>View all</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <Link
                  href="/projects"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="kicker tabular-nums">{project.year}</span>
                    <span className="inline-flex h-6 items-center rounded-full bg-secondary px-2.5 text-[11px] font-medium text-muted-foreground">
                      {project.category.split(" ")[0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium leading-snug tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalPanel({ time, location }: { time: string; location: string }) {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="relative inline-flex size-2 rounded-full bg-primary pulse-dot" />
          <span className="kicker text-foreground/80">Signal · live</span>
        </div>
        <span className="font-mono text-xs tabular-nums text-muted-foreground">{time}</span>
      </div>

      {/* Waveform */}
      <div className="relative h-44 overflow-hidden border-b border-border bg-background/40">
        <div aria-hidden className="signal-grid absolute inset-0 opacity-60" />
        <svg
          viewBox="0 0 600 160"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Live signal waveform"
        >
          {/* Persistence echo */}
          <path
            d={SIGNAL_PATH}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.3"
            className="signal-live"
          />
          {/* Main trace */}
          <path
            d={SIGNAL_PATH}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className="signal-path"
          />
          {/* Baseline */}
          <line
            x1="0"
            y1="96"
            x2="600"
            y2="96"
            stroke="color-mix(in oklch, var(--foreground) 14%, transparent)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="3 5"
          />
          {/* End dot */}
          <circle cx="560" cy="96" r="4" fill="var(--primary)" className="signal-live" />
        </svg>
        <span className="absolute left-3 top-2.5 kicker text-muted-foreground/70">amplitude</span>
        <span className="absolute bottom-2.5 right-3 kicker text-muted-foreground/70">t →</span>
      </div>

      {/* Now rows */}
      <dl className="divide-y divide-border">
        <SignalRow label="Currently" value="Building NGO + embedded tools" />
        <SignalRow label="Learning" value="ESP-IDF, FreeRTOS, Rust" />
        <SignalRow label="Based in" value={location} />
        <SignalRow label="Open to" value="Collab · internships · feedback" />
      </dl>
    </aside>
  );
}

function SignalRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 px-5 py-3.5">
      <dt className="kicker shrink-0">{label}</dt>
      <dd className="text-right text-sm text-foreground">{value}</dd>
    </div>
  );
}
