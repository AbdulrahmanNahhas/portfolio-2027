"use client";

import { copy, message } from "@/lib/content";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { projects } from "@/lib/data";

export function ProjectShelf() {
  const [filter, setFilter] = useState<string[]>(["all"]);
  const selected = filter[0] ?? "all";
  const visible = projects.filter(
    (project) => selected === "all" || project.group === selected,
  );
  return (
    <>
      <div className="project-filter">
        <ToggleGroup
          value={filter}
          onValueChange={(value) => {
            if (value.length) setFilter(value);
          }}
          variant="outline"
          aria-label={copy.projectShelf.filterProjects}
        >
          {copy.projectShelf.filters.map((item) => (
            <ToggleGroupItem key={item.value} value={item.value}>
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
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
