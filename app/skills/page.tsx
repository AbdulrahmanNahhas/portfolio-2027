import { copy, message } from "@/lib/content";
import type { Metadata } from "next";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { languages, roadmap, skillCategories } from "@/lib/data";
export const metadata: Metadata = {
  title: copy.learning.metaTitle,
  description: copy.learning.metaDescription,
};
export default function SkillsPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.learning.eyebrow}
        title={copy.learning.title}
        description={copy.learning.description}
      />
      <section className="inner-section content-width">
        <div className="learning-grid">
          {skillCategories.map((category) => (
            <article className="learning-card" key={category.id}>
              <h2>{category.title}</h2>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <span>{skill.note}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="learning-card">
            <h2>{copy.learning.humanLanguagesToo}</h2>
            <ul>
              {languages.map((language) => (
                <li key={language.name}>
                  <span>{language.name}</span>
                  <span>{language.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="learning-next">
          <h2>{copy.learning.onTheIWantToTryThat}</h2>
          <div className="interest-tags">
            {roadmap.map((item) => (
              <span className="interest-tag" key={item.name}>
                {message(copy.learning.roadmapItem, {
                  name: item.name,
                  status: item.status,
                })}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
