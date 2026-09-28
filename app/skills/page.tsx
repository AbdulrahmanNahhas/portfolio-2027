import {
  Binary,
  Cpu,
  Globe,
  Sparkles,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeader, StatGrid } from "@/components/section";
import { languages, roadmap, skillCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "An honest map of what Abdulrahman Nahhas knows — web, firmware, DevOps, and hardware skills, with proficiency levels and current learning.",
};

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  cpu: Cpu,
  terminal: Terminal,
  binary: Binary,
  wrench: Wrench,
};

type Level = "Advanced" | "Proficient" | "Intermediate" | "Learning" | "Beginner";

const levels: Level[] = ["Advanced", "Proficient", "Intermediate", "Learning", "Beginner"];

function LevelPill({ level }: { level: Level }) {
  const classes: Record<Level, string> = {
    Advanced: "bg-primary/10 text-primary border-primary/20",
    Proficient: "bg-secondary text-foreground border-border",
    Intermediate: "bg-secondary text-muted-foreground border-border",
    Learning: "bg-transparent text-muted-foreground border-border border-dashed",
    Beginner: "bg-transparent text-muted-foreground/70 border-border border-dashed",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs ${classes[level]}`}
    >
      {level}
    </span>
  );
}

export default function SkillsPage() {
  const skillStats = skillCategories.reduce(
    (acc, category) => {
      acc.total += category.skills.length;
      acc.categories += 1;
      for (const skill of category.skills) {
        if (skill.level === "Advanced") acc.advanced += 1;
        if (skill.featured) acc.featured += 1;
      }
      return acc;
    },
    { total: 0, categories: 0, advanced: 0, featured: 0 },
  );

  return (
    <PageLayout>
      <PageHeader
        kicker="Skills"
        title="An honest map of what I know and what I'm learning."
        description="Five categories — web, firmware, DevOps, computer science, and hardware — each scored by how confident I actually am, not how confident I'd like to be."
      />

      {/* Proficiency legend */}
      <Section bordered={false} className="my-0! py-8!">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="kicker">Proficiency</p>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <LevelPill key={level} level={level} />
            ))}
          </div>
        </div>
      </Section>

      {/* Skill categories */}
      <Section bordered={false} className="my-0! py-8!">
        <SectionHeader label="Categories" count={skillCategories.length} />
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] ?? Globe;
            return (
              <Reveal key={category.id} delay={index * 60}>
                <div className="rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-full border border-border bg-secondary text-primary">
                        <Icon className="size-4" />
                      </span>
                      <h3 className="font-display text-xl tracking-tight text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <p className="kicker shrink-0 tabular-nums text-muted-foreground/70">
                      {category.skills.length} skills
                    </p>
                  </div>

                  <ul className="mt-6 divide-y divide-border">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-4 py-2.5"
                      >
                        <span
                          className={`inline-flex items-center gap-2 text-sm ${
                            skill.featured ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {skill.featured ? (
                            <Sparkles className="size-3.5 text-primary" />
                          ) : (
                            <span className="size-1.5 rounded-full bg-primary/40" />
                          )}
                          {skill.name}
                        </span>
                        <LevelPill level={skill.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Languages + R&D */}
      <Section bordered={false} className="my-0! py-8!">
        <SectionHeader label="Languages & ramp" />
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <p className="kicker text-primary/80">Languages</p>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className={`flex items-center justify-between gap-4 border-b border-border/70 py-3 ${
                    lang.active ? "text-foreground" : "text-muted-foreground/70"
                  }`}
                >
                  <span className="inline-flex items-center gap-2.5">
                    {lang.active ? (
                      <span className="size-1.5 rounded-full bg-primary" />
                    ) : (
                      <span className="size-1.5 rounded-full bg-border" />
                    )}
                    {lang.name}
                  </span>
                  <span className="kicker tabular-nums">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-6 flex items-center gap-3">
              <p className="kicker text-primary/80">Current R&amp;D</p>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ul className="space-y-3">
              {roadmap.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-4 rounded-lg border border-dashed border-border py-3 px-4"
                >
                  <span className="text-sm text-foreground">{item.name}</span>
                  <span className="kicker text-muted-foreground/70">
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <Section muted>
        <StatGrid
          stats={[
            { value: skillStats.total, label: "Total skills" },
            { value: skillStats.categories, label: "Categories" },
            { value: skillStats.advanced, label: "Advanced" },
            { value: skillStats.featured, label: "Featured" },
          ]}
        />
      </Section>

      <CtaSection
        text="Curious about how I apply these — or want to compare notes on a stack?"
        links={[
          { href: "/projects", label: "See the work" },
          { href: "/contact", label: "Get in touch", primary: true },
        ]}
      />
    </PageLayout>
  );
}
