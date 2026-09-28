import {
  CalendarBlankIcon as Calendar,
  ArrowSquareOutIcon as ExternalLink,
  MapPinIcon as MapPin,
} from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeader } from "@/components/section";
import { calculateDuration, formatMonthYear } from "@/lib/date";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Where Abdulrahman Nahhas has worked — full-stack web, embedded systems, and humanitarian tech roles, current and past.",
};

export default function WorkPage() {
  const current = experiences.filter((e) => e.current);
  const past = experiences.filter((e) => !e.current);

  return (
    <PageLayout>
      <PageHeader
        kicker="Work"
        title="Roles, projects, and the teams behind them."
        description="A running log of where I've worked — full-stack web development, embedded systems, and humanitarian tech built with people who care."
      />

      {/* Currently active */}
      <Section bordered>
        <SectionHeader label="Currently active" count={`${current.length} roles`} />
        <div className="space-y-6">
          {current.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 60}>
              <article className="relative overflow-hidden  border border-border bg-primary/5 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 bg-primary"
                />
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-12">
                  {/* Left: identity */}
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="relative inline-flex size-2  bg-primary pulse-dot" />
                      <p className="kicker text-primary/80">{exp.category}</p>
                      <span className="kicker text-muted-foreground/70">
                        {exp.type}
                      </span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                          {exp.company}
                        </h3>
                        {exp.companyUrl && (
                          <Link
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                          >
                            Visit website
                            <ExternalLink className="size-3" />
                          </Link>
                        )}
                      </div>
                      <p className="mt-1 text-base text-foreground/90">
                        {exp.position}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-primary" />
                        {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-primary" />
                        {formatMonthYear(exp.startDate)} — Present
                      </span>
                      <span className="kicker tabular-nums text-muted-foreground/70">
                        {calculateDuration(exp.startDate)}
                      </span>
                    </div>

                    <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right: responsibilities + highlights */}
                  <div className="space-y-6">
                    <div>
                      <p className="kicker mb-3">Responsibilities</p>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 size-1.5 shrink-0  bg-primary/60" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <div>
                        <p className="kicker mb-3">Highlights</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center  border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Past experience */}
      <Section bordered>
        <SectionHeader label="Past experience" count={`${past.length} roles`} />
        <div className="relative">
          <div className="absolute left-1.75 top-2 bottom-2 hidden w-px bg-border md:block" />
          <div className="space-y-10">
            {past.map((exp, index) => (
              <Reveal
                key={exp.id}
                delay={index * 60}
                className="group relative grid gap-6 md:grid-cols-[16px_1fr]"
              >
                <div className="relative">
                  <span className="relative z-10 mt-2 size-4  border border-border bg-card transition-colors group-hover:border-primary/40" />
                </div>
                <div className="md:pl-4">
                  <div className=" border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
                        {exp.position}
                      </h3>
                      <span className="kicker text-muted-foreground/70">
                        {exp.type}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/90">
                      {exp.company} · {exp.location}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-primary" />
                        {formatMonthYear(exp.startDate)} —{" "}
                        {exp.endDate ? formatMonthYear(exp.endDate) : "Present"}
                      </span>
                      <span className="kicker tabular-nums text-muted-foreground/70">
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.responsibilities.slice(0, 3).map((r) => (
                        <span
                          key={r}
                          className="inline-flex items-center  border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaSection
        text="Want the full case studies behind these roles, or to discuss working together?"
        links={[
          { href: "/projects", label: "View projects" },
          { href: "/contact", label: "Get in touch", primary: true },
        ]}
      />
    </PageLayout>
  );
}
