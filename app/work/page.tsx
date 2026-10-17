import { copy } from "@/lib/content";
import type { Metadata } from "next";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { experiences } from "@/lib/data";
export const metadata: Metadata = {
  title: copy.journey.metaTitle,
  description: copy.journey.metaDescription,
};
export default function WorkPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.journey.eyebrow}
        title={copy.journey.title}
        description={copy.journey.description}
      />
      <section className="inner-section content-width">
        <div className="chapter-list">
          {experiences.map((experience) => (
            <article className="chapter-card" key={experience.id}>
              <div className="chapter-label">
                <span className="eyebrow">{experience.period}</span>
                <span>{experience.location}</span>
              </div>
              <h2>{experience.company}</h2>
              <p className="chapter-role">{experience.position}</p>
              <p>{experience.description}</p>
              {experience.responsibilities.length > 0 && (
                <ul>
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
