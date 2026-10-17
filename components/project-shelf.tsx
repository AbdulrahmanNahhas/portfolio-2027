import Link from "next/link";
import { copy, message } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export function ProjectShelf({ selected = "all" }: { selected?: string }) {
  const filter = copy.projectShelf.filters.some(
    (item) => item.value === selected,
  )
    ? selected
    : "all";
  const visible = projects.filter(
    (project) => filter === "all" || project.group === filter,
  );
  return (
    <>
      <div className="project-filter">
        <nav
          className="project-filter-links"
          aria-label={copy.projectShelf.filterProjects}
        >
          {copy.projectShelf.filters.map((item) => (
            <Link
              key={item.value}
              href={
                item.value === "all"
                  ? "/projects"
                  : `/projects?filter=${encodeURIComponent(item.value)}`
              }
              scroll={false}
              className="project-filter-link"
              aria-current={filter === item.value ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p role="status">
          {message(
            visible.length === 1
              ? copy.projectShelf.countOne
              : copy.projectShelf.countMany,
            { count: visible.length },
          )}
        </p>
      </div>
      <div className="project-grid all-projects">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
