import {
  ArrowUpRight,
  Binary,
  BookOpen,
  Cpu,
  Globe,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { languages, roadmap, skillCategories } from "@/lib/data";

export const metadata = {
  title: "Skills | Abdulrahman Nahhas",
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
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50">
        <div className="absolute inset-0 noise" />
      </div>

      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">05</span>
            <div className="w-12 h-px bg-border" />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Capabilities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-foreground mb-6">
            Skills
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A comprehensive overview of technical expertise across web development, embedded
            systems, DevOps practices, and foundational computer science concepts.
          </p>
        </div>
      </section>

      {/* Skills Legend */}
      <section className="py-8 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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

      {/* Main Skills Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <article
                key={category.id}
                className="group relative border border-border hover:border-foreground/30 transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-card/50">
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

                {/* Skills List */}
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
        </div>
      </section>

      {/* Languages & Roadmap */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Languages */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-xl font-normal text-foreground">Languages</h2>
                <div className="flex-1 h-px bg-border" />
              </div>

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

            {/* Roadmap */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Sparkles className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-xl font-normal text-foreground">{"Current R&D"}</h2>
                <div className="flex-1 h-px bg-border" />
              </div>

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
        </div>
      </section>

      {/* Skill Stats */}
      <section className="py-16 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
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
            ].map((stat) => (
              <div key={stat.label} className="text-center">
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
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {
              "Interested in how these skills can benefit your project? Let's talk about your requirements."
            }
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border border-border px-8 py-4 hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
            >
              <span>See Projects</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-all duration-300"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
