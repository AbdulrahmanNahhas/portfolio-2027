import { copy, message } from "@/lib/content";
import {
  ArrowUpRightIcon,
  CodeIcon,
  CpuIcon,
  HeartIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react/ssr";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";

export function ProjectArt({ kind = 0 }: { kind?: number }) {
  if (kind === 3)
    return (
      <div className="project-art art-3" aria-hidden="true">
        <div className="language-art">
          <span lang="ar" dir="rtl">
            {copy.projectCard.decoration}
          </span>
          <small>{copy.projectCard.arabicWordsIntoPossibilities}</small>
          <div>
            <i>{copy.projectCard.decoration2}</i>
            <i>{copy.projectCard.decoration3}</i>
            <i>{copy.projectCard.data}</i>
          </div>
        </div>
      </div>
    );
  return (
    <div className={`project-art art-${kind % 3}`} aria-hidden="true">
      {kind % 3 === 0 ? (
        <div className="mini-browser">
          <div className="mini-browser-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="mini-dashboard">
            <span className="mini-sidebar">
              <CodeIcon />
              <i />
              <i />
              <i />
            </span>
            <div>
              <span className="mini-heading" />
              <div className="mini-stats">
                <i />
                <i />
                <i />
              </div>
              <svg viewBox="0 0 220 65">
                <path d="M0 55L20 40L40 46L60 24L80 35L100 18L120 27L140 8L160 22L180 5L200 16L220 0" />
              </svg>
            </div>
          </div>
        </div>
      ) : kind % 3 === 1 ? (
        <div className="circuit">
          <span className="circuit-line line-a" />
          <span className="circuit-line line-b" />
          <span className="chip">
            <CpuIcon weight="light" />
            <small>{copy.projectCard.esp32}</small>
          </span>
          <span className="circuit-led" />
          <span className="circuit-dial">
            {copy.projectCard.label24}
            <span>{copy.projectCard.c}</span>
          </span>
          <span className="circuit-caption">
            {copy.projectCard.aLittleHardwareMagic}
          </span>
        </div>
      ) : (
        <div className="community-art">
          <div className="community-window">
            <HeartIcon weight="fill" />
            <span>
              {copy.projectCard.goodThings}
              <br />
              {copy.projectCard.builtTogether}
            </span>
            <div>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <span className="community-spark">
            {copy.projectCard.decoration4}
          </span>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  compact = false,
  illustration,
}: {
  project: Project;
  compact?: boolean;
  illustration?: number;
}) {
  const art = illustration ?? project.art;
  const Heading = compact ? "h3" : "h2";
  return (
    <article
      className={`shelf-project ${compact ? "compact-project" : "full-project"}`}
      id={`project-${project.id}`}
    >
      <ProjectArt kind={art} />
      <div className="project-details">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <Heading>{project.title}</Heading>
        <p>{compact ? project.description : project.longDescription}</p>
        <div className="project-tags">
          {project.tags.slice(0, compact ? 3 : undefined).map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
        <div className="project-bottom">
          <span className={`project-status status-${project.status}`}>
            <i />
            {
              copy.projectCard.statuses[
                project.status as keyof typeof copy.projectCard.statuses
              ]
            }
          </span>
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
                <GithubLogoIcon />
                <span>{copy.projectCard.code}</span>
              </a>
            )}
            {project.link && !project.link.endsWith(".demo") && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={message(copy.projectCard.visitLabel, {
                  title: project.title,
                })}
              >
                <ArrowUpRightIcon />
                <span>{copy.projectCard.visit}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
