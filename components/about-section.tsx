import { ArrowRightIcon as ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { skillCategories, stats } from "@/lib/data";
import { homeContent } from "@/lib/home-content";

export function AboutSection() {
  const { about } = homeContent;
  const featuredSkills = skillCategories.flatMap((cat) =>
    cat.skills.filter((s) => s.featured).map((s) => s.name),
  );

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex items-center gap-3">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          <p className="kicker text-primary/80">{about.label}</p>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={80}>
            <h2 className="font-display max-w-xl text-balance text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {about.title}
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/about" variant="primary">
                {about.primaryAction}
              </LinkButton>
              <LinkButton href="/skills" variant="outline">
                {about.secondaryAction}
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={160} className="grid gap-4">
            {about.highlights.map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-md hover:shadow-foreground/5"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={120} className="mt-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="border-t border-border pt-4">
                <p className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
                  {stat.value}
                </p>
                <p className="kicker mt-2.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Featured skills */}
        <div className="mt-20">
          <Reveal className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              <h3 className="kicker">Featured skills</h3>
            </div>
            <Link
              href="/skills"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>All skills</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={80} className="flex flex-wrap gap-2.5">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-card"
              >
                {skill}
              </span>
            ))}
          </Reveal>
        </div>
      </div>

      <span className="sr-only">{stats.yearsExperience} years, {stats.projectsCompleted} projects</span>
    </section>
  );
}
