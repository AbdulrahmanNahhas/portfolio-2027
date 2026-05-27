import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects | Abdulrahman Nahhas",
  description:
    "A collection of projects spanning web development, embedded systems, and humanitarian technology.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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
            <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">03</span>
            <div className="w-12 h-px bg-border" />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Archive
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-foreground mb-6">
            Projects
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A curated collection of projects spanning full-stack web development, embedded systems,
            and humanitarian technology. Each project represents a unique challenge solved with
            precision.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Featured Work
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-mono text-muted-foreground">
              {featuredProjects.length} Projects
            </span>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group relative border border-border hover:border-foreground/50 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

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
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Other Projects
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-mono text-muted-foreground">
              {otherProjects.length} Projects
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className="group relative border border-border p-6 hover:border-foreground/50 transition-all duration-500 bg-card/30"
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {"Interested in collaborating on a project? Let's discuss how we can work together."}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-all duration-300"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
