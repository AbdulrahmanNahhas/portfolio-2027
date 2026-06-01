import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  if (compact) {
    return (
      <article className="group relative border border-border bg-card/30 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/50">
        <div className="mb-6 flex items-start justify-between">
          <span className="font-mono text-xs text-muted-foreground">/{project.id}</span>
          <ProjectLinks project={project} compact />
        </div>

        <h3 className="mb-3 text-xl text-foreground transition-colors group-hover:text-foreground/80">
          {project.title}
        </h3>

        <p className="mb-6 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-4">
          <TagList tags={project.tags.slice(0, 2)} subtle />
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative border border-border transition-all duration-500 hover:border-foreground/50">
      <div className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-foreground to-transparent transition-transform duration-700 group-hover:scale-x-100" />

      <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
        <div className="space-y-6">
          <ProjectMeta project={project} />

          <h2 className="text-3xl font-normal text-foreground transition-colors group-hover:text-foreground/80 lg:text-4xl">
            {project.title}
          </h2>

          <p className="leading-relaxed text-muted-foreground">{project.longDescription}</p>

          <TagList tags={project.tags} />
        </div>

        <div className="flex flex-col justify-between gap-8 lg:items-end">
          <div className="flex items-center gap-4 lg:justify-end">
            <StatusBadge status={project.status} />
            <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-muted-foreground">/{project.id}</span>
      <div className="h-px w-8 bg-border" />
      <span className="font-mono text-xs text-foreground/60">{project.category}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span
      className={cn(
        "border px-3 py-1 font-mono text-[10px] uppercase tracking-widest",
        status === "completed" && "border-foreground/30 text-foreground",
        status === "in-progress" && "border-foreground/50 bg-foreground/5 text-foreground",
        status === "archived" && "border-border text-muted-foreground",
      )}
    >
      {status.replace("-", " ")}
    </span>
  );
}

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  const linkClassName = compact
    ? "text-muted-foreground transition-colors hover:text-foreground"
    : "group/link inline-flex items-center gap-3 border border-border px-6 py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background";

  return (
    <div className={compact ? "flex items-center gap-3" : "flex flex-wrap gap-4"}>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          aria-label={`${project.title} source code`}
        >
          <Github className="size-4" />
          {!compact && <span>Source</span>}
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            linkClassName,
            !compact && "bg-foreground text-background hover:bg-foreground/90",
          )}
          aria-label={`${project.title} live project`}
        >
          {!compact && <span>Visit</span>}
          <ExternalLink className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}

function TagList({ tags, subtle = false }: { tags: string[]; subtle?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "font-mono text-[10px]",
            subtle
              ? "text-muted-foreground"
              : "border border-border px-3 py-1.5 text-muted-foreground transition-colors hover:border-foreground/50",
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
