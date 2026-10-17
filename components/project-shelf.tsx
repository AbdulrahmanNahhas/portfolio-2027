import Link from "next/link";
import { copy, message } from "@/lib/content";
import { ProjectCard, LearningProjectCard } from "@/components/project-card";
import { getProjects, resolveProjectFilter } from "@/lib/projects";

export function ProjectShelf({ selected = "all" }: { selected?: string }) {
  const filter = resolveProjectFilter(selected);
  const visible = getProjects(filter);
  const work = visible.filter((project) => project.kind === "project");
  const repositories = visible.filter((project) => project.kind !== "project");
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
      {work.length > 0 && (
        <section
          className="project-collection"
          aria-labelledby="project-work-heading"
        >
          <div className="collection-heading">
            <div>
              <h2 id="project-work-heading">{copy.projectShelf.workTitle}</h2>
              <p>{copy.projectShelf.workDescription}</p>
            </div>
            <span>
              {message(
                work.length === 1
                  ? copy.projectShelf.sectionCountOne
                  : copy.projectShelf.sectionCount,
                { count: work.length },
              )}
            </span>
          </div>
          <div className="project-grid all-projects">
            {work.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
      {repositories.length > 0 && (
        <section
          className="project-collection"
          aria-labelledby="project-learning-heading"
        >
          <div className="collection-heading">
            <div>
              <h2 id="project-learning-heading">
                {copy.projectShelf.learningTitle}
              </h2>
              <p>{copy.projectShelf.learningDescription}</p>
            </div>
            <span>
              {message(
                repositories.length === 1
                  ? copy.projectShelf.sectionCountOne
                  : copy.projectShelf.sectionCount,
                {
                  count: repositories.length,
                },
              )}
            </span>
          </div>
          <div className="repository-grid">
            {repositories.map((project) => (
              <LearningProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
