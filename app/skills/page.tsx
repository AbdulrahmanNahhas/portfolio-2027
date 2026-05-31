import {
  Binary,
  BookOpen,
  Cpu,
  Globe,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Section, SectionHeader, StatGrid } from "@/components/section";
import { languages, roadmap, skillCategories } from "@/lib/data";

export const metadata = {
  title: "Skills",
  description:
    "Technical skills and expertise in web development, embedded systems, DevOps, and computer science.",
};

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
  terminal: <Terminal className="w-5 h-5" />,
  binary: <Binary className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
};

const levelColors: Record<string, string> = {
  Advanced: "bg-foreground text-background",
  Proficient: "bg-foreground/20 text-foreground border-foreground/30",
  Intermediate: "bg-foreground/10 text-foreground/80 border-foreground/20",
  Learning: "bg-transparent text-muted-foreground border-border",
  Beginner: "bg-transparent text-muted-foreground/70 border-border/50",
};

export default function SkillsPage() {
  const skillStats = [
    {
      label: "Total Skills",
      value: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0),
    },
    { label: "Categories", value: skillCategories.length },
    {
      label: "Advanced Level",
      value: skillCategories.reduce(
        (acc, cat) => acc + cat.skills.filter((s) => s.level === "Advanced").length,
        0,
      ),
    },
    {
      label: "Featured",
      value: skillCategories.reduce(
        (acc, cat) => acc + cat.skills.filter((s) => s.featured).length,
        0,
      ),
    },
  ];

  return (
    <PageLayout>
      <PageHeader
        number="05"
        label="Capabilities"
        title="Skills"
        description="A comprehensive overview of technical expertise across web development, embedded systems, DevOps practices, and foundational computer science concepts."
      />

      <section className="py-8 border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
              Proficiency:
            </span>
            {["Advanced", "Proficient", "Intermediate", "Learning", "Beginner"].map((level) => (
              <div key={level} className="flex items-center gap-2">
                <span className={`text-[10px] font-mono px-2 py-0.5 border ${levelColors[level]}`}>
                  {level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <article
              key={category.id}
              className="group relative border border-border transition-all duration-500 hover:border-foreground/30"
            >
                <div className="flex items-center justify-between border-b border-border bg-card/50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground group-hover:border-foreground/50 group-hover:text-foreground transition-colors">
                      {iconMap[category.icon]}
                    </div>
                    <div>
                      <h2 className="text-lg font-normal text-foreground">{category.title}</h2>
                      <p className="text-[10px] font-mono text-muted-foreground tracking-widest">
                        {category.skills.length} SKILLS
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between group/skill"
                      >
                        <div className="flex items-center gap-3">
                          {skill.featured && <Sparkles className="w-3 h-3 text-foreground/50" />}
                          <span
                            className={`text-sm ${skill.featured ? "text-foreground" : "text-muted-foreground"} group-hover/skill:text-foreground transition-colors`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 border ${levelColors[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <SectionHeader label="Languages" icon={BookOpen} className="mb-8" />

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div
                    key={lang.name}
                    className={`flex items-center justify-between p-4 border ${lang.active ? "border-foreground/30 bg-card/50" : "border-border"}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                      <span
                        className={`text-sm ${lang.active ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {lang.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground">{lang.level}</span>
                      {lang.active && <span className="w-1.5 h-1.5 bg-foreground animate-pulse" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <SectionHeader label="Current R&D" icon={Sparkles} className="mb-8" />

              <div className="space-y-4">
                {roadmap.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-4 border border-border border-dashed"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground/50">
                        +{index + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground/70 tracking-widest uppercase">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground/70 font-mono">
                * Items currently in exploration or planned for future learning
              </p>
            </div>
        </div>
      </Section>

      <Section className="border-t border-border py-16" muted>
        <StatGrid stats={skillStats} />
      </Section>

      <CtaSection
        text="Interested in how these skills can benefit your project? Let's talk about your requirements."
        links={[
          { href: "/projects", label: "See Projects" },
          { href: "/#contact", label: "Contact Me", primary: true },
        ]}
      />
    </PageLayout>
  );
}
