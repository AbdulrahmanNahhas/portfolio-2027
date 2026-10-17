import { cn } from "@/lib/utils";
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
      <div
        className={cn(
          "project-filter",
          "gap-5 flex justify-between items-center flex-wrap mb-7.5",
          "[&>p]:text-[12px] [&>p]:text-muted-foreground",
          "[&_[data-slot='toggle-group']]:flex-wrap",
          "[&_[data-slot='toggle-group-item']]:rounded-[20px]",
        )}
      >
        <nav
          className={cn("project-filter-links", "gap-2 flex flex-wrap")}
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
              className={cn(
                "project-filter-link",
                "px-[17px] py-2 rounded-[24px] border border-solid border-border inline-flex items-center min-h-9.5 text-[12px] font-[550] [transition:background_0.2s,_border-color_0.2s]",
                "hover:bg-accent",
                "[&[aria-current='page']]:border-foreground [&[aria-current='page']]:bg-foreground [&[aria-current='page']]:text-background",
              )}
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
            {
              count: visible.length,
            },
          )}
        </p>
      </div>
      {work.length > 0 && (
        <section
          className={cn(
            "project-collection",
            "[&+.project-collection]:mt-13",
            "min-[650px]:[&+.project-collection]:mt-19",
          )}
          aria-labelledby="project-work-heading"
        >
          <div
            className={cn(
              "collection-heading",
              "gap-3.5 flex justify-between items-start mb-[27px]",
              "min-[650px]:gap-6",
              "[&_h2]:font-heading [&_h2]:text-[25px] [&_h2]:font-[650] [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.8px]",
              "min-[650px]:[&_h2]:text-[29px]",
              "[&_p]:text-[13px] [&_p]:leading-[1.7] [&_p]:text-muted-foreground [&_p]:mt-[9px] [&_p]:max-w-137.5",
              "[&>span]:shrink-0 [&>span]:text-[11px] [&>span]:text-muted-foreground [&>span]:pt-2",
              "max-[650px]:[&>span]:hidden",
            )}
          >
            <div>
              <h2 id="project-work-heading">{copy.projectShelf.workTitle}</h2>
              <p>{copy.projectShelf.workDescription}</p>
            </div>
            <span>
              {message(
                work.length === 1
                  ? copy.projectShelf.sectionCountOne
                  : copy.projectShelf.sectionCount,
                {
                  count: work.length,
                },
              )}
            </span>
          </div>
          <div
            className={cn(
              "project-grid all-projects",
              "gap-5.5 grid grid-cols-[1fr] items-start",
              "min-[600px]:gap-4 min-[600px]:grid-cols-[repeat(2,_minmax(0,_1fr))] min-[900px]:grid-cols-[repeat(3,_minmax(0,_1fr))] min-[1150px]:gap-5.5 max-[600px]:gap-5.5",
            )}
          >
            {work.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
      {repositories.length > 0 && (
        <section
          className={cn(
            "project-collection",
            "[&+.project-collection]:mt-13",
            "min-[650px]:[&+.project-collection]:mt-19",
          )}
          aria-labelledby="project-learning-heading"
        >
          <div
            className={cn(
              "collection-heading",
              "gap-3.5 flex justify-between items-start mb-[27px]",
              "min-[650px]:gap-6",
              "[&_h2]:font-heading [&_h2]:text-[25px] [&_h2]:font-[650] [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.8px]",
              "min-[650px]:[&_h2]:text-[29px]",
              "[&_p]:text-[13px] [&_p]:leading-[1.7] [&_p]:text-muted-foreground [&_p]:mt-[9px] [&_p]:max-w-137.5",
              "[&>span]:shrink-0 [&>span]:text-[11px] [&>span]:text-muted-foreground [&>span]:pt-2",
              "max-[650px]:[&>span]:hidden",
            )}
          >
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
          <div
            className={cn(
              "repository-grid",
              "gap-5 grid grid-cols-[minmax(0,_1fr)]",
            )}
          >
            {repositories.map((project) => (
              <LearningProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
