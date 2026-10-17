import Link from "next/link";
import { formatDisplayDate } from "@/lib/date";
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
      className={cn(
        "project-status",
        "gap-1.5 flex items-center text-[10px] text-muted-foreground",
        "[&_i]:rounded-[50%] [&_i]:size-[5px] [&_i]:bg-primary",
        "[&:where([data-status='in-progress'])_i]:bg-warning",
        "[&:where([data-status='archived'])_i]:bg-muted-foreground",
        "[&:where([data-status='launching'])_i]:bg-warning",
        "[&:where([data-status='planning'])_i]:bg-warning",
        "[&:where([data-status='cancelled'])_i]:bg-muted-foreground",
        "data-[slot=badge]:px-[11px] data-[slot=badge]:py-1.5 data-[slot=badge]:gap-2 data-[slot=badge]:rounded-[8px] data-[slot=badge]:border data-[slot=badge]:border-solid data-[slot=badge]:border-[color-mix(in_srgb,_var(--status-ink)_32%,_var(--card))] data-[slot=badge]:[--status-ink:var(--primary)] data-[slot=badge]:inline-flex data-[slot=badge]:items-center data-[slot=badge]:h-auto data-[slot=badge]:min-h-8 data-[slot=badge]:w-fit data-[slot=badge]:shrink-0 data-[slot=badge]:bg-[color-mix(in_srgb,_var(--status-ink)_10%,_var(--card))] data-[slot=badge]:text-(--status-ink) data-[slot=badge]:text-[12px] data-[slot=badge]:font-[650] data-[slot=badge]:leading-[1.4] data-[slot=badge]:tracking-[0] data-[slot=badge]:whitespace-normal",
        "min-[650px]:data-[slot=badge]:text-[13px]",
        "[&[data-slot='badge']_i]:size-[7px] [&[data-slot='badge']_i]:shrink-0 [&[data-slot='badge']_i]:bg-current",
        "data-[status=launching]:[--status-ink:var(--warning)]",
        "data-[status=planning]:[--status-ink:var(--warning)]",
        "data-[status=production]:[--status-ink:#047974]",
        "data-[status=completed]:[--status-ink:#047974]",
        "[.dark_&[data-status='production']]:[--status-ink:#8ed8c5]",
        "[.dark_&[data-status='completed']]:[--status-ink:#8ed8c5]",
        "data-[status=archived]:[--status-ink:var(--muted-foreground)]",
        "data-[status=cancelled]:[--status-ink:var(--muted-foreground)]",
      )}
      data-status={project.status}
    >
      <i aria-hidden="true" />
      {project.closedOn && project.status === "completed"
        ? copy.projectCard.completedOffline
        : project.published === false && project.status === "in-progress"
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
        "overflow-hidden rounded-[17px] border border-solid border-border min-w-0 bg-card [transition:transform_0.25s,_box-shadow_0.25s] flex flex-col",
        "hover:transform-[translateY(-5px)] hover:shadow-[0_14px_30px_#2336590a]",
        "motion-reduce:hover:transform-none",
        "[&[id]]:scroll-mt-7",
        "fine-hover:[&:hover_.illustrated-browser]:[translate:0_-3px] fine-hover:[&:hover_.illustrated-browser]:rotate-[1.5deg]",
        "fine-hover:[&:hover_.illustrated-object]:[translate:0_-3px] fine-hover:[&:hover_.illustrated-object]:rotate-[1.5deg]",
        "fine-hover:[&:hover_.illustrated-community]:[translate:0_-3px] fine-hover:[&:hover_.illustrated-community]:rotate-[1.5deg]",
        "fine-hover:[&:focus-within_.illustrated-browser]:[translate:0_-3px] fine-hover:[&:focus-within_.illustrated-browser]:rotate-[1.5deg]",
        "fine-hover:[&:focus-within_.illustrated-object]:[translate:0_-3px] fine-hover:[&:focus-within_.illustrated-object]:rotate-[1.5deg]",
        "fine-hover:[&:focus-within_.illustrated-community]:[translate:0_-3px] fine-hover:[&:focus-within_.illustrated-community]:rotate-[1.5deg]",
        "fine-hover:[&:hover_.art-sticker]:[translate:1px_-2px] fine-hover:[&:hover_.art-sticker]:rotate-[-4deg]",
        "fine-hover:[&:focus-within_.art-sticker]:[translate:1px_-2px] fine-hover:[&:focus-within_.art-sticker]:rotate-[-4deg]",
        "fine-hover:[&:hover_.hardware-module]:[translate:-2px_1px] fine-hover:[&:hover_.hardware-module]:rotate-[-3deg]",
        "fine-hover:[&:hover_.art-book-note]:[translate:-2px_1px] fine-hover:[&:hover_.art-book-note]:rotate-[-3deg]",
        "fine-hover:[&:focus-within_.hardware-module]:[translate:-2px_1px] fine-hover:[&:focus-within_.hardware-module]:rotate-[-3deg]",
        "fine-hover:[&:focus-within_.art-book-note]:[translate:-2px_1px] fine-hover:[&:focus-within_.art-book-note]:rotate-[-3deg]",
        "fine-hover:[&:hover_.art-spark]:rotate-[12deg]",
        "fine-hover:[&:focus-within_.art-spark]:rotate-[12deg]",
        compact
          ? cn(
              "compact-project",
              "[&_.project-art]:h-[245px]",
              "[&_.illustrated-browser]:w-[83%] [&_.illustrated-browser]:max-w-70 [&_.illustrated-browser]:scale-[0.88]",
              "[&.compact-project_.illustrated-object]:w-[72%] [&.compact-project_.illustrated-object]:max-w-67.5 [&.compact-project_.illustrated-object]:left-[56%]",
              "[&_.art-sticker]:px-2 [&_.art-sticker]:py-1.5 [&_.art-sticker]:top-4.5 [&_.art-sticker]:right-4.5 [&_.art-sticker]:text-[8px]",
              "[&_.art-caption]:px-5 [&_.art-caption]:bottom-4.5 [&_.art-caption]:text-[8px]",
              "[&.compact-project_.hardware-module]:w-13.5 [&.compact-project_.hardware-module]:h-15.5 [&_.hardware-module]:left-[10%]",
              "[&_.hardware-module>svg]:size-[25px]",
              "[&_.hardware-pins]:w-10 [&_.hardware-pins]:h-10.5",
              "[&_.hardware-module::before]:w-9.5 [&_.hardware-module::before]:left-[7px]",
              "[&_.hardware-module::after]:w-9.5 [&_.hardware-module::after]:left-[7px]",
              "[&_.project-bottom]:mt-auto",
            )
          : cn(
              "full-project",
              "[&_.project-art]:h-65",
              "min-[650px]:[&_.project-art]:h-70",
              "[&_.project-details]:p-[23px]",
              "min-[650px]:[&_.project-details]:p-6.5",
              "[&_.project-details_:is(h2,_h3)]:text-[28px]",
              "[&_.project-details>p]:text-[13px] [&_.project-details>p]:leading-[1.8]",
              "[&_.project-details_h3]:mt-[13px] [&_.project-details_h3]:text-[27px]",
              "[&_.project-tags]:mt-[17px] [&_.project-tags]:mb-4",
              "[&_.project-bottom]:gap-4 [&_.project-bottom]:border-t-0 [&_.project-bottom]:[border-top-style:none] [&_.project-bottom]:border-t-current [&_.project-bottom]:pt-0 [&_.project-bottom]:flex-wrap [&_.project-bottom]:mt-4",
            ),
      )}
      id={`project-${project.id}`}
    >
      <ProjectArt kind={project.art} />
      <div
        className={cn(
          "project-details",
          "p-6 flex flex-1 flex-col",
          "min-[600px]:p-5 min-[1150px]:p-6",
          "[&_:is(h2,_h3)]:font-heading [&_:is(h2,_h3)]:text-[25px] [&_:is(h2,_h3)]:tracking-[-0.7px] [&_:is(h2,_h3)]:font-bold [&_:is(h2,_h3)]:leading-[1.2] [&_:is(h2,_h3)]:mt-3.5",
          "min-[600px]:[&_:is(h2,_h3)]:text-[21px] min-[1150px]:[&_:is(h2,_h3)]:text-[24px]",
          "[&>p]:text-[12px] [&>p]:leading-[1.85] [&>p]:text-muted-foreground [&>p]:mt-3",
          "max-[600px]:[&_p]:text-[13px] max-[600px]:[&>p]:text-[13px]",
          "[&_.project-title-row>h3]:mt-0",
        )}
      >
        <div
          className={cn(
            "project-meta",
            "gap-2.5 flex justify-between text-[9px] uppercase tracking-[0.06em] text-muted-foreground leading-[1.5]",
          )}
        >
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div
          className={cn(
            "project-title-row",
            "gap-[11px] flex items-start flex-wrap mt-3.5",
            "min-[650px]:gap-y-3 min-[650px]:gap-x-4",
            "[&>h3]:flex-[1_1_190px]",
          )}
        >
          <h3>{project.title}</h3>
          <ProjectStatus project={project} />
        </div>
        <p>{project.description}</p>
        <div
          className={cn("project-tags", "gap-[5px] flex flex-wrap mt-4.5 mb-6")}
        >
          {project.tags.slice(0, 3).map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
        {!compact && (
          <details
            className={cn(
              "project-notes",
              "border-0 border-none border-current mb-0",
              "[&_summary]:p-3 [&_summary]:gap-4 [&_summary]:rounded-[9px] [&_summary]:border [&_summary]:border-solid [&_summary]:border-border [&_summary]:flex [&_summary]:justify-between [&_summary]:items-center [&_summary]:[cursor:pointer] [&_summary]:text-[11px] [&_summary]:text-foreground [&_summary]:list-none [&_summary]:bg-secondary [&_summary]:[transition:background_0.2s,_border-color_0.2s]",
              "min-[600px]:[&_summary]:px-3.5",
              "[&_summary::-webkit-details-marker]:hidden",
              "[&_summary_svg]:size-3.5 [&_summary_svg]:[transition:transform_0.2s]",
              "motion-reduce:[&_summary_svg]:[transition:none]",
              "[&[open]_summary_svg]:transform-[rotate(180deg)]",
              "[&_summary:hover]:border-primary [&_summary:hover]:text-primary [&_summary:hover]:bg-accent",
              "[&>div]:px-0.5 [&>div]:pb-0 [&>div]:text-[12px] [&>div]:leading-[1.8] [&>div]:text-muted-foreground [&>div]:pt-[17px]",
              "[&_dl]:gap-[13px] [&_dl]:grid [&_dl]:mt-[17px]",
              "[&_dt]:text-[10px] [&_dt]:font-[650] [&_dt]:text-foreground [&_dt]:mb-[3px]",
              "[&_summary:focus-visible]:rounded-[3px] [&_summary:focus-visible]:[outline:2px_solid_var(--ring)] [&_summary:focus-visible]:[outline-offset:3px]",
              "[&[open]_.notes-closed-label]:hidden",
              "[&[open]_.notes-open-label]:inline",
            )}
          >
            <summary>
              <span
                className={cn(
                  "project-notes-label",
                  "gap-[3px] flex flex-col text-[13px] font-[650]",
                  "[&_small]:text-[10px] [&_small]:font-normal [&_small]:text-muted-foreground",
                )}
              >
                <span className="notes-closed-label">
                  {copy.projectCard.notes}
                </span>
                <span className={cn("notes-open-label", "hidden")}>
                  {copy.projectCard.notesClose}
                </span>
                <small>{copy.projectCard.notesHint}</small>
              </span>
              <span
                className={cn(
                  "project-notes-chevron",
                  "rounded-[50%] border border-solid border-border size-7 grid place-items-center shrink-0 bg-card text-primary",
                )}
              >
                <CaretDownIcon aria-hidden="true" />
              </span>
            </summary>
            <div>
              <p>{project.longDescription}</p>
              <dl>
                {project.closedOn && (
                  <div>
                    <dt>{copy.projectCard.closedOn}</dt>
                    <dd>
                      <time dateTime={project.closedOn}>
                        {formatDisplayDate(project.closedOn, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </dd>
                  </div>
                )}
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
        {compact ? (
          <div
            className={cn(
              "project-bottom",
              "gap-2.5 border-t-0 [border-top-style:none] border-t-current flex justify-between items-center pt-0 mt-4",
            )}
          >
            <Link
              className={cn(
                "compact-project-link",
                "gap-[7px] inline-flex items-center min-h-9 text-primary text-[12px] font-semibold",
                "[&_svg]:size-4 [&_svg]:[transition:translate_0.2s]",
                "motion-reduce:[&_svg]:[translate:none]! motion-reduce:[&_svg]:[rotate:none]! motion-reduce:[&_svg]:[scale:none]!",
                "fine-hover:[&:hover_svg]:[translate:2px_-2px]",
              )}
              href={`/projects#project-${project.id}`}
            >
              {copy.projectCard.explore}
              <ArrowUpRightIcon aria-hidden="true" />
            </Link>
          </div>
        ) : (
          (project.github || project.link || project.organization) && (
            <div
              className={cn(
                "project-bottom",
                "gap-2.5 border-t-0 [border-top-style:none] border-t-current flex justify-between items-center pt-0 mt-4",
              )}
            >
              <div
                className={cn(
                  "project-actions",
                  "gap-3 flex",
                  "[&_a]:gap-1 [&_a]:flex [&_a]:items-center [&_a]:text-[11px] [&_a]:min-h-8",
                  "[&_svg]:size-4",
                  "[&_a:hover]:text-primary",
                )}
              >
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
              </div>
            </div>
          )
        )}
      </div>
    </article>
  );
}
export function LearningProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <ProjectArt kind={project.art} />
      <div
        className={cn(
          "repository-details",
          "p-4.5 flex flex-col flex-1",
          "min-[650px]:p-[23px]",
          "[&_.project-meta]:items-center",
          "max-[650px]:[&_.project-meta]:text-[8px]",
          "[&_.project-meta>svg]:size-4.5 [&_.project-meta>svg]:text-primary",
          "[&_h3]:font-heading [&_h3]:text-[20px] [&_h3]:font-[650] [&_h3]:tracking-[-0.6px] [&_h3]:leading-[1.25] [&_h3]:mt-[7px]",
          "min-[650px]:[&_h3]:text-[23px]",
          "[&>p]:text-[11px] [&>p]:text-muted-foreground [&>p]:leading-[1.85] [&>p]:mt-2.5",
          "min-[650px]:[&>p]:text-[13px]",
          "[&_.project-tags]:mb-[15px] [&_.project-tags]:mt-[13px]",
          "max-[650px]:[&_.project-tags]:gap-1",
          "[&_.project-title-row>h3]:mt-0",
          "max-[650px]:[&_.project-title-row>h3]:basis-full",
          "[&_.project-title-row]:mt-2.5 [&_.project-title-row]:items-center",
        )}
      >
        <div
          className={cn(
            "project-meta",
            "gap-2.5 flex justify-between text-[9px] uppercase tracking-[0.06em] text-muted-foreground leading-[1.5]",
          )}
        >
          <span>{project.category}</span>
          {project.github && <ArrowUpRightIcon aria-hidden="true" />}
        </div>
        <div
          className={cn(
            "project-title-row",
            "gap-[11px] flex items-start flex-wrap mt-3.5",
            "min-[650px]:gap-y-3 min-[650px]:gap-x-4",
            "[&>h3]:flex-[1_1_190px]",
          )}
        >
          <h3>{project.title}</h3>
          <ProjectStatus project={project} />
        </div>
        <p>{project.description}</p>
        <div
          className={cn("project-tags", "gap-[5px] flex flex-wrap mt-4.5 mb-6")}
        >
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div
          className={cn(
            "repository-bottom",
            "gap-[9px] border-t [border-top-style:solid] border-t-border flex items-center justify-end flex-wrap pt-3 mt-auto",
            "min-[650px]:gap-3",
            "[&>span]:gap-1.5 [&>span]:flex [&>span]:items-center [&>span]:text-[9px]",
            "min-[650px]:[&>span]:text-[10px]",
            "[&_svg]:size-[15px]",
          )}
        >
          {project.github ? (
            <span>
              <GithubLogoIcon aria-hidden="true" />
              {copy.projectCard.repository}
            </span>
          ) : (
            <span
              className={cn(
                "project-unlinked",
                "text-[10px] text-muted-foreground",
              )}
            >
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
    <article
      className={cn(
        "repository-project",
        "overflow-hidden rounded-[16px] border border-solid border-border min-w-0 bg-card [transition:transform_0.25s,_box-shadow_0.25s]",
        "motion-reduce:[transition:none]",
        "[&:has(>_a):hover]:transform-[translateY(-4px)] [&:has(>_a):hover]:shadow-[0_12px_24px_#2336590a]",
        "motion-reduce:[&:has(>_a):hover]:transform-none",
        "[&>.repository-project-body]:grid [&>.repository-project-body]:grid-cols-[clamp(88px,_29vw,_115px)_minmax(0,_1fr)] [&>.repository-project-body]:h-full",
        "min-[650px]:[&>.repository-project-body]:grid-cols-[220px_minmax(0,_1fr)]",
        "[&_.project-art]:border-r [&_.project-art]:[border-right-style:solid] [&_.project-art]:border-r-border [&_.project-art]:h-full [&_.project-art]:min-h-70",
        "min-[650px]:[&_.project-art]:min-h-55",
        "[&_a:focus-visible]:rounded-[15px] [&_a:focus-visible]:[outline:3px_solid_var(--ring)] [&_a:focus-visible]:[outline-offset:-4px]",
        "[&_.illustrated-browser]:w-67.5 [&_.illustrated-browser]:top-[48%] [&.repository-project_.illustrated-browser]:transform-[translate(-50%,_-50%)_rotate(-10deg)_scale(0.46)]",
        "min-[650px]:[&.repository-project_.illustrated-browser]:transform-[translate(-50%,_-50%)_rotate(-8deg)_scale(0.64)]",
        "[&_.art-sticker]:p-1 [&_.art-sticker]:top-5 [&_.art-sticker]:right-[7px] [&_.art-sticker]:text-[7px]",
        "min-[650px]:[&_.art-sticker]:px-[7px] min-[650px]:[&_.art-sticker]:py-[5px] min-[650px]:[&_.art-sticker]:top-[25px] min-[650px]:[&_.art-sticker]:right-[15px] min-[650px]:[&_.art-sticker]:text-[8px] max-[650px]:[&_.art-sticker]:gap-[3px]",
        "[&_.art-caption]:px-3 [&_.art-caption]:text-[7px] [&_.art-caption]:leading-[1.5] [&_.art-caption]:bottom-[27px]",
        "min-[650px]:[&_.art-caption]:px-[25px] min-[650px]:[&_.art-caption]:text-[8px] min-[650px]:[&_.art-caption]:bottom-6",
        "[&_.spark-one]:text-[22px] [&_.spark-one]:bottom-[47px] [&_.spark-one]:right-[13px]",
        "[&_.spark-two]:top-13.5 [&_.spark-two]:left-[15px]",
        "[&_.orbit-one]:size-37.5",
        "[&_.orbit-two]:size-45",
        "min-[650px]:[&_.orbit-two]:size-47.5",
        "[&_.illustrated-browser-bar_small]:text-[9px]",
        "[&_.illustrated-dashboard-main>strong]:text-[15px]",
        "[&_.illustrated-media_strong]:text-[15px]",
        "[&_.illustrated-terminal]:text-[10px]",
        "max-[650px]:[&_.art-sticker_svg]:size-2.5",
        "max-[650px]:[&_.art-spark]:hidden",
        "[&_.project-illustration:where([data-art='car'])_.illustrated-object]:w-[155%] [&_.project-illustration:where([data-art='car'])_.illustrated-object]:left-[53%]",
        "min-[650px]:[&_.project-illustration:where([data-art='car'])_.illustrated-object]:w-full min-[650px]:[&_.project-illustration:where([data-art='car'])_.illustrated-object]:left-[56%]",
        "[&_.project-illustration:where([data-art='drone'])_.illustrated-object]:w-[155%] [&_.project-illustration:where([data-art='drone'])_.illustrated-object]:left-[53%]",
        "min-[650px]:[&_.project-illustration:where([data-art='drone'])_.illustrated-object]:w-full min-[650px]:[&_.project-illustration:where([data-art='drone'])_.illustrated-object]:left-[56%]",
        "[&.repository-project_.hardware-module]:w-[43px] [&.repository-project_.hardware-module]:h-[49px] [&_.hardware-module]:left-[6%] [&_.hardware-module]:top-[31%]",
        "max-[650px]:[&_.hardware-module]:hidden",
        "[&_.hardware-module>svg]:size-[25px]",
        "[&_.hardware-module_small]:text-[5px] [&_.hardware-module_small]:mt-1",
        "[&_.hardware-pins]:w-[33px] [&_.hardware-pins]:h-8.5",
        "[&_.hardware-module::before]:w-7.5 [&_.hardware-module::before]:left-1.5",
        "[&_.hardware-module::after]:w-7.5 [&_.hardware-module::after]:left-1.5",
        "[&[id]]:scroll-mt-7",
        "fine-hover:[&:hover_.illustrated-browser]:[translate:0_-3px] fine-hover:[&:hover_.illustrated-browser]:rotate-[1.5deg]",
        "fine-hover:[&:hover_.illustrated-object]:[translate:0_-3px] fine-hover:[&:hover_.illustrated-object]:rotate-[1.5deg]",
        "fine-hover:[&:hover_.illustrated-community]:[translate:0_-3px] fine-hover:[&:hover_.illustrated-community]:rotate-[1.5deg]",
        "fine-hover:[&:focus-within_.illustrated-browser]:[translate:0_-3px] fine-hover:[&:focus-within_.illustrated-browser]:rotate-[1.5deg]",
        "fine-hover:[&:focus-within_.illustrated-object]:[translate:0_-3px] fine-hover:[&:focus-within_.illustrated-object]:rotate-[1.5deg]",
        "fine-hover:[&:focus-within_.illustrated-community]:[translate:0_-3px] fine-hover:[&:focus-within_.illustrated-community]:rotate-[1.5deg]",
        "fine-hover:[&:hover_.art-sticker]:[translate:1px_-2px] fine-hover:[&:hover_.art-sticker]:rotate-[-4deg]",
        "fine-hover:[&:focus-within_.art-sticker]:[translate:1px_-2px] fine-hover:[&:focus-within_.art-sticker]:rotate-[-4deg]",
        "fine-hover:[&:hover_.hardware-module]:[translate:-2px_1px] fine-hover:[&:hover_.hardware-module]:rotate-[-3deg]",
        "fine-hover:[&:hover_.art-book-note]:[translate:-2px_1px] fine-hover:[&:hover_.art-book-note]:rotate-[-3deg]",
        "fine-hover:[&:focus-within_.hardware-module]:[translate:-2px_1px] fine-hover:[&:focus-within_.hardware-module]:rotate-[-3deg]",
        "fine-hover:[&:focus-within_.art-book-note]:[translate:-2px_1px] fine-hover:[&:focus-within_.art-book-note]:rotate-[-3deg]",
        "fine-hover:[&:hover_.art-spark]:rotate-[12deg]",
        "fine-hover:[&:focus-within_.art-spark]:rotate-[12deg]",
      )}
      id={`project-${project.id}`}
    >
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
