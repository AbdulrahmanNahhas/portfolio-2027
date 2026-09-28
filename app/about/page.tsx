import {
  ArrowRightIcon as ArrowRight,
  CalendarBlankIcon as Calendar,
  MapPinIcon as MapPin,
} from "@phosphor-icons/react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeader } from "@/components/section";
import { aboutData, siteConfig, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind the code — who Abdulrahman Nahhas is, what drives him, and why he builds.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker="About"
        title="A student learning by building useful things."
        description="Who I am, what drives me, and why I build — from first lines of code to embedded systems and humanitarian tech."
      />

      <Section bordered>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal className="space-y-6">
            <SectionHeader label="Introduction" className="mb-6" />
            <p className="font-display text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              {aboutData.intro}
            </p>
            <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                {siteConfig.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="size-4 text-primary" />
                {stats.yearsExperience} years coding
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 70% at 70% 20%, color-mix(in oklch, var(--primary) 14%, transparent), transparent 65%)",
                }}
              />
              <div className="relative flex flex-col items-start gap-6">
                <span className="font-display text-7xl leading-none text-primary">AN</span>
                <div>
                  <p className="text-lg font-medium text-foreground">{siteConfig.name}</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
                </div>
                <div className="grid w-full grid-cols-3 gap-4 border-t border-border pt-6">
                  <div>
                    <p className="font-display text-2xl tracking-tight text-foreground">
                      {stats.yearsExperience}
                    </p>
                    <p className="kicker mt-1.5">Years</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl tracking-tight text-foreground">
                      {stats.projectsCompleted}
                    </p>
                    <p className="kicker mt-1.5">Projects</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl tracking-tight text-foreground">
                      {stats.technologiesUsed}
                    </p>
                    <p className="kicker mt-1.5">Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bordered>
        <SectionHeader label="Journey" />
        <div className="relative">
          <div className="absolute left-4.75 top-2 bottom-2 hidden w-px bg-border md:block" />
          <div className="space-y-10">
            {aboutData.story.map((item, index) => (
              <Reveal key={item.year} delay={index * 60} className="group relative grid gap-6 md:grid-cols-[40px_1fr]">
                <div className="relative">
                  <span className="relative z-10 grid size-10 place-items-center rounded-full border border-border bg-card font-mono text-xs tabular-nums text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                    {item.year}
                  </span>
                </div>
                <div className="pt-1.5 md:pl-6">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section bordered>
        <SectionHeader label="Philosophy" />
        <div className="grid gap-5 md:grid-cols-3">
          {aboutData.philosophy.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="group rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5"
            >
              <span className="font-mono text-xs tabular-nums text-primary">
                0{index + 1}
              </span>
              <h3 className="font-display mt-5 text-xl tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bordered>
        <SectionHeader label="Interests" />
        <Reveal className="flex flex-wrap gap-2.5">
          {aboutData.interests.map((interest) => (
            <span
              key={interest}
              className="inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-card"
            >
              {interest}
            </span>
          ))}
        </Reveal>
      </Section>

      <Section bordered>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl">
            “Technology is most powerful when it empowers people to solve problems that matter.”
          </p>
          <p className="kicker mt-6">Personal motto</p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/work"
            className="group rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5"
          >
            <div className="flex items-center justify-between">
              <span className="kicker text-primary/80">Next</span>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </div>
            <h3 className="font-display mt-4 text-2xl tracking-tight text-foreground">
              Work experience
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Where I&apos;ve worked and what I&apos;ve built.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5"
          >
            <div className="flex items-center justify-between">
              <span className="kicker text-primary/80">Connect</span>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </div>
            <h3 className="font-display mt-4 text-2xl tracking-tight text-foreground">
              Get in touch
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Let&apos;s discuss a project or idea.
            </p>
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
