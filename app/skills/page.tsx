import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  BookOpenIcon,
  CodeIcon,
  CpuIcon,
  GlobeIcon,
  TerminalWindowIcon,
  WrenchIcon,
} from "@phosphor-icons/react/ssr";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { copy, message } from "@/lib/content";
import { languages, roadmap, skillCategories, skillLevels } from "@/lib/data";
export const metadata: Metadata = {
  title: copy.learning.metaTitle,
  description: copy.learning.metaDescription,
};
const icons = {
  code: CodeIcon,
  globe: GlobeIcon,
  cpu: CpuIcon,
  terminal: TerminalWindowIcon,
  book: BookOpenIcon,
  wrench: WrenchIcon,
};
const levels = new Map(skillLevels.map((level) => [level.id, level]));
function LevelLabel({ level }: { level: string }) {
  const entry = levels.get(level);
  if (!entry) throw new Error(`Unknown skill level: ${level}`);
  return (
    <Badge
      className={cn(
        "skill-level",
        "whitespace-nowrap",
        "max-[600px]:text-[10px]",
      )}
      variant={
        level === "advanced"
          ? "default"
          : level === "proficient"
            ? "secondary"
            : "outline"
      }
    >
      {entry.label}
    </Badge>
  );
}
export default function SkillsPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.learning.eyebrow}
        title={copy.learning.title}
        description={copy.learning.description}
      />
      <section
        className={cn(
          "skills-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "pt-7.5 pb-[45px]",
          "min-[600px]:pt-[45px] min-[600px]:pb-[65px]",
          "[&_[data-slot='badge']]:rounded-[20px]",
        )}
      >
        <div
          className={cn(
            "skills-grid",
            "block grid-cols-[1fr] gap-y-[23px] gap-x-[25px] items-start columns-1",
            "min-[600px]:grid-cols-[repeat(2,_minmax(0,_1fr))] min-[600px]:gap-y-[25px] min-[600px]:columns-2",
          )}
        >
          {skillCategories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons] ?? CodeIcon;
            return (
              <article
                className={cn(
                  "skill-subject",
                  "overflow-hidden rounded-[18px] border border-solid border-border bg-card break-inside-avoid mb-[23px] [transition:translate_0.25s,_box-shadow_0.25s,_border-color_0.25s]",
                  "min-[600px]:mb-[25px]",
                  "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
                  "fine-hover:hover:border-[color-mix(in_srgb,_var(--primary)_45%,_var(--border))] fine-hover:hover:[translate:0_-3px] fine-hover:hover:shadow-[0_10px_24px_#2336590b]",
                  "fine-hover:[&:hover_.skill-subject-icon]:rotate-[5deg] fine-hover:[&:hover_.skill-subject-icon]:scale-[1.04]",
                )}
                key={category.id}
                aria-labelledby={`subject-${category.id}`}
              >
                <header
                  className={cn(
                    "skill-subject-header",
                    "p-5.5 gap-[13px] border-b [border-bottom-style:solid] border-b-border flex items-center",
                    "min-[900px]:px-7.5 min-[900px]:gap-[17px] min-[900px]:pt-[27px] min-[900px]:pb-[23px] min-[600px]:p-6",
                    "[&_h2]:font-heading [&_h2]:text-[24px] [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.7px] [&_h2]:font-bold",
                    "min-[600px]:[&_h2]:text-[23px] min-[900px]:[&_h2]:text-[26px]",
                    "[&_p]:[font-family:var(--font-mono)] [&_p]:text-[10px] [&_p]:text-muted-foreground [&_p]:mt-[7px]",
                  )}
                >
                  <span
                    className={cn(
                      "skill-subject-icon",
                      "rounded-[12px] grid place-items-center size-10.5 shrink-0 bg-secondary text-primary [transition:rotate_0.3s,_scale_0.3s]",
                      "min-[600px]:size-12",
                      "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
                      "[&_svg]:size-6.5",
                      "[&:where([data-subject='rust-nix'])]:bg-rose [&:where([data-subject='rust-nix'])]:text-object-ink [&:where([data-subject='rust-nix'])]:transform-[rotate(-7deg)]",
                      "[&:where([data-subject='firmware'])]:bg-mint [&:where([data-subject='firmware'])]:text-object-ink",
                      "[&:where([data-subject='hardware'])]:bg-butter [&:where([data-subject='hardware'])]:text-object-ink",
                    )}
                    data-subject={category.id}
                    aria-hidden="true"
                  >
                    <Icon weight="duotone" />
                  </span>
                  <div>
                    <h2 id={`subject-${category.id}`}>{category.title}</h2>
                    <p>
                      {category.id === "rust-nix"
                        ? copy.learning.currentFocus
                        : message(copy.learning.skillCount, {
                            count: category.skills.length,
                          })}
                    </p>
                  </div>
                </header>
                <ul
                  className={cn(
                    "skill-list",
                    "px-5.5 pt-[5px] pb-[9px]",
                    "min-[600px]:px-6 min-[900px]:px-7.5",
                    "[&_li]:py-3.5 [&_li]:gap-3 [&_li]:border-b [&_li]:[border-bottom-style:solid] [&_li]:border-b-border [&_li]:grid [&_li]:grid-cols-[minmax(0,_1fr)_auto] [&_li]:items-center [&_li]:text-[12px] [&_li]:leading-[1.5]",
                    "min-[900px]:[&_li]:gap-4.5 min-[600px]:[&_li]:text-[13px] max-[600px]:[&_li]:min-h-[49px]",
                    "[&_li:last-child]:border-b-0 [&_li:last-child]:[border-bottom-style:solid] [&_li:last-child]:border-b-current",
                  )}
                >
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <span>{skill.name}</span>
                      <LevelLabel level={skill.level} />
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div
          className={cn(
            "skills-companions",
            "gap-9.5 grid grid-cols-[1fr] items-start mt-[35px] mb-10",
            "min-[600px]:my-12.5 min-[600px]:gap-[25px] min-[600px]:grid-cols-[repeat(2,_minmax(0,_1fr))] min-[900px]:gap-[35px]",
            "[&_h2]:font-heading [&_h2]:font-[650] [&_h2]:text-[27px] [&_h2]:tracking-[-0.6px] [&_h2]:leading-[1.2] [&_h2]:max-w-105 [&_h2]:mt-3 [&_h2]:mb-6",
            "min-[600px]:[&_h2]:text-[29px]",
          )}
        >
          <section
            className={cn(
              "skills-languages",
              "px-0 py-2.5",
              "[&_li]:py-4 [&_li]:gap-[15px] [&_li]:border-b [&_li]:[border-bottom-style:solid] [&_li]:border-b-border [&_li]:flex [&_li]:items-center [&_li]:text-[14px]",
              "[&_strong]:ml-auto [&_strong]:text-muted-foreground [&_strong]:text-[12px] [&_strong]:font-medium",
            )}
          >
            <span
              className={cn(
                "eyebrow",
                "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
                "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
              )}
            >
              {copy.learning.languagesTitle}
            </span>
            <h2>{copy.learning.languagesDescription}</h2>
            <ul>
              {languages.map((language) => (
                <li key={language.code}>
                  <span
                    className={cn(
                      "language-code",
                      "rounded-[50%] border border-solid border-border grid place-items-center size-[35px] bg-card [font-family:var(--font-mono)] text-[11px] text-primary",
                    )}
                    aria-hidden="true"
                  >
                    {language.code}
                  </span>
                  <span>{language.name}</span>
                  <strong>{language.level}</strong>
                </li>
              ))}
            </ul>
          </section>
          <section
            className={cn(
              "skills-research",
              "p-6.5 rounded-tl-[4px] rounded-tr-[4px] rounded-br-[30px] rounded-bl-[4px] relative bg-butter text-object-ink transform-[rotate(1deg)]",
              "min-[600px]:p-7.5",
              "[&_.eyebrow]:text-[#526079]",
              "[&_li]:py-4 [&_li]:gap-[15px] [&_li]:border-t [&_li]:[border-top-style:solid] [&_li]:border-t-[#23365925] [&_li]:grid [&_li]:grid-cols-[minmax(0,_1fr)_auto] [&_li]:items-center [&_li]:text-[13px]",
              "[&_[data-slot='badge']]:border-[#23365940] [&_[data-slot='badge']]:text-object-ink [&_[data-slot='badge']]:bg-transparent",
            )}
          >
            <span
              className={cn(
                "research-tape",
                "absolute left-[calc(50%_-_35px)] top-[-10px] w-17.5 h-[23px] bg-[#ffffff70] transform-[rotate(-4deg)]",
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                "eyebrow",
                "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
                "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
              )}
            >
              {copy.learning.researchTitle}
            </span>
            <h2>{copy.learning.researchDescription}</h2>
            <ul>
              {roadmap.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <Badge variant="outline">{item.status}</Badge>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside
          className={cn(
            "skills-legend",
            "border-t [border-top-style:solid] border-t-border pt-7.5",
            "[&_h2]:font-heading [&_h2]:text-[24px] [&_h2]:font-[650] [&_h2]:mb-[25px]",
            "[&_dl]:gap-5.5 [&_dl]:grid [&_dl]:grid-cols-[1fr_1fr]",
            "min-[600px]:[&_dl]:grid-cols-[repeat(2,_minmax(0,_1fr))] min-[600px]:[&_dl]:gap-y-[25px] min-[600px]:[&_dl]:gap-x-[35px] min-[900px]:[&_dl]:grid-cols-[repeat(3,_minmax(0,_1fr))]",
            "[&_dd]:text-muted-foreground [&_dd]:text-[11px] [&_dd]:leading-[1.8] [&_dd]:mt-2.5",
            "min-[600px]:[&_dd]:text-[12px]",
          )}
          aria-labelledby="skill-level-legend"
        >
          <h2 id="skill-level-legend">{copy.learning.levelLegendTitle}</h2>
          <dl>
            {skillLevels.map((level) => (
              <div key={level.id}>
                <dt>
                  <LevelLabel level={level.id} />
                </dt>
                <dd>{level.description}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </PageLayout>
  );
}
