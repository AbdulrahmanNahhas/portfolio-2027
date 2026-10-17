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
      className="skill-level"
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
      <section className="skills-section content-width">
        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons] ?? CodeIcon;
            return (
              <article
                className="skill-subject"
                key={category.id}
                aria-labelledby={`subject-${category.id}`}
              >
                <header className="skill-subject-header">
                  <span
                    className={`skill-subject-icon subject-${category.id}`}
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
                <ul className="skill-list">
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
        <div className="skills-companions">
          <section className="skills-languages">
            <span className="eyebrow">{copy.learning.languagesTitle}</span>
            <h2>{copy.learning.languagesDescription}</h2>
            <ul>
              {languages.map((language) => (
                <li key={language.code}>
                  <span className="language-code" aria-hidden="true">
                    {language.code}
                  </span>
                  <span>{language.name}</span>
                  <strong>{language.level}</strong>
                </li>
              ))}
            </ul>
          </section>
          <section className="skills-research">
            <span className="research-tape" aria-hidden="true" />
            <span className="eyebrow">{copy.learning.researchTitle}</span>
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
        <aside className="skills-legend" aria-labelledby="skill-level-legend">
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
