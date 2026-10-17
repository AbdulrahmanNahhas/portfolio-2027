import projectData from "@/content/en/projects.json";

export type Project = (typeof projectData)[number] & {
  link?: string;
  github?: string;
  organization?: string;
  published?: boolean;
  closedOn?: string;
};

export const projects: readonly Project[] = projectData;
export const projectFilters = [
  "all",
  "web",
  "embedded",
  "community",
  "personal",
  "archived",
] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export function resolveProjectFilter(value?: string): ProjectFilter {
  return projectFilters.find((filter) => filter === value) ?? "all";
}

export function getProjects(filter: ProjectFilter = "all"): readonly Project[] {
  return projects.filter(
    (project) =>
      filter === "all" ||
      (filter === "archived"
        ? project.status === "archived" || project.status === "cancelled"
        : filter === "personal"
          ? project.kind !== "project"
          : project.group === filter),
  );
}
