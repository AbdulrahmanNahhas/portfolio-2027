import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Section, SectionHeader } from "@/components/section";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "A collection of projects spanning web development, embedded systems, and humanitarian technology.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <PageLayout>
      <PageHeader
        number="03"
        label="Archive"
        title="Projects"
        description="A curated collection of projects spanning full-stack web development, embedded systems, and humanitarian technology. Each project represents a unique challenge solved with precision."
      />

      <Section bordered>
        <SectionHeader label="Featured Work" count={`${featuredProjects.length} Projects`} />

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative border border-border transition-all duration-500 hover:border-foreground/50"
            >
              <div className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-foreground to-transparent transition-transform duration-700 group-hover:scale-x-100" />

                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground">/{project.id}</span>
                      <div className="w-8 h-px bg-border" />
                      <span className="text-xs font-mono text-foreground/60">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-normal text-foreground group-hover:text-foreground/80 transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-muted-foreground border border-border px-3 py-1.5 hover:border-foreground/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Meta & Links */}
                  <div className="flex flex-col justify-between lg:items-end">
                    <div className="flex items-center gap-4 lg:justify-end mb-8">
                      <span
                        className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 border ${
                          project.status === "completed"
                            ? "border-foreground/30 text-foreground"
                            : project.status === "in-progress"
                              ? "border-foreground/50 text-foreground bg-foreground/5"
                              : "border-border text-muted-foreground"
                        }`}
                      >
                        {project.status.replace("-", " ")}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-3 text-sm tracking-widest uppercase border border-border px-6 py-3 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source</span>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-all duration-300"
                        >
                          <span>Visit</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader label="Other Projects" count={`${otherProjects.length} Projects`} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="group relative border border-border bg-card/30 p-6 transition-all duration-500 hover:border-foreground/50"
            >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-mono text-muted-foreground">/{project.id}</span>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaSection
        text="Interested in collaborating on a project? Let's discuss how we can work together."
        links={[{ href: "/#contact", label: "Start a Conversation", primary: true }]}
      />
    </PageLayout>
  );
}
