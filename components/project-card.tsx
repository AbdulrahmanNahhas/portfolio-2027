import {
  ArrowUpRightIcon as ArrowUpRight,
  ArrowSquareOutIcon as ExternalLink,
  GithubLogoIcon as Github,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

const statusStyles: Record<Project["status"], string> = {
  completed: "bg-primary/10 text-primary border-primary/20",
  "in-progress": "bg-warning/15 text-warning border-warning/30",
  archived: "bg-secondary text-muted-foreground border-border",
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  if (compact) {
    return (
      <Link
        href="/projects"
        className="group flex h-full flex-col  border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5"
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="inline-flex h-6 items-center  border border-border bg-secondary px-2.5 text-[11px] font-medium text-muted-foreground">
            {project.category.split(" ")[0]}
          </span>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {project.year}
          </span>
        </div>

        <h3 className="text-lg font-medium leading-snug tracking-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center  bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    );
  }

  return (
    <article className="group relative overflow-hidden  border border-border bg-card/40 transition-all duration-300 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12 lg:p-10">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="kicker text-primary/80">{project.category}</span>
            <span
              className={cn(
                "inline-flex items-center  border px-2.5 py-0.5 text-[11px] font-medium capitalize",
                statusStyles[project.status],
              )}
            >
              {project.status.replace("-", " ")}
            </span>
          </div>

          <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h2>

          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center  border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 lg:items-end lg:border-l lg:border-border lg:pl-10">
          <div className="flex items-center gap-3 lg:self-end">
            <span className="font-mono text-sm tabular-nums text-muted-foreground">
              {project.year}
            </span>
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3 lg:justify-end">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex h-10 items-center gap-2  border border-border bg-card px-4 text-sm font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-secondary"
          aria-label={`${project.title} source code`}
        >
          <Github className="size-4" />
          <span>Source</span>
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex h-10 items-center gap-2  bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
          aria-label={`${project.title} live project`}
        >
          <span>Visit live</span>
          <ExternalLink className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      )}
      {!project.github && !project.link && (
        <Link
          href="/projects"
          className="group/link inline-flex h-10 items-center gap-2  border border-border bg-card px-4 text-sm font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-secondary"
        >
          <span>Case study</span>
          <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
