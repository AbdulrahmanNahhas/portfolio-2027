import { copy, message } from "@/lib/content";
import {
  ArrowUpRightIcon,
  GithubLogoIcon,
  CaretDownIcon,
} from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/badge";
import { ProjectArt } from "@/components/project-art";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

function ProjectStatus({ project }: { project: Project }) {
  return (
    <Badge
      variant="outline"
      className={`project-status status-${project.status}`}
    >
      <i aria-hidden="true" />
      {project.published === false && project.status === "in-progress"
        ? copy.projectCard.unpublished
        : copy.projectCard.statuses[
            project.status as keyof typeof copy.projectCard.statuses
          ]}
    </Badge>
  );
}

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "shelf-project",
        compact ? "compact-project" : "full-project",
      )}
      id={`project-${project.id}`}
    >
      <ProjectArt kind={project.art} />
      <div className="project-details">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <ProjectStatus project={project} />
        </div>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
        {!compact && (
          <details className="project-notes">
            <summary>
              {copy.projectCard.notes}
              <CaretDownIcon aria-hidden="true" />
            </summary>
            <div>
              <p>{project.longDescription}</p>
              <dl>
                <div>
                  <dt>{copy.projectCard.role}</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>{copy.projectCard.stack}</dt>
                  <dd>{project.tags.join(" · ")}</dd>
                </div>
              </dl>
            </div>
          </details>
        )}
        <div className="project-bottom">
          <div className="project-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={message(copy.projectCard.sourceLabel, {
                  title: project.title,
                })}
              >
                <GithubLogoIcon aria-hidden="true" />
                <span>{copy.projectCard.code}</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={message(copy.projectCard.visitLabel, {
                  title: project.title,
                })}
              >
                <span>{copy.projectCard.visit}</span>
                <ArrowUpRightIcon aria-hidden="true" />
              </a>
            )}
            {project.organization && (
              <a
                href={project.organization}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={message(copy.projectCard.organizationLabel, {
                  title: project.title,
                })}
              >
                <span>{copy.projectCard.organization}</span>
                <ArrowUpRightIcon aria-hidden="true" />
              </a>
            )}
            {!project.link &&
              !project.github &&
              !project.organization &&
              !compact && (
                <span className="project-unlinked">
                  {copy.projectCard.noPublicLink}
                </span>
              )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function LearningProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <ProjectArt kind={project.art} />
      <div className="repository-details">
        <div className="project-meta">
          <span>{project.category}</span>
          {project.github && <ArrowUpRightIcon aria-hidden="true" />}
        </div>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <ProjectStatus project={project} />
        </div>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="repository-bottom">
          {project.github ? (
            <span>
              <GithubLogoIcon aria-hidden="true" />
              {copy.projectCard.repository}
            </span>
          ) : (
            <span className="project-unlinked">
              {project.status === "archived"
                ? copy.projectCard.offline
                : copy.projectCard.noPublicLink}
            </span>
          )}
        </div>
      </div>
    </>
  );
  return (
    <article className="repository-project" id={`project-${project.id}`}>
      {project.github ? (
        <a
          className="repository-project-body"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={message(copy.projectCard.sourceLabel, {
            title: project.title,
          })}
        >
          {content}
        </a>
      ) : (
        <div className="repository-project-body">{content}</div>
      )}
    </article>
  );
}
