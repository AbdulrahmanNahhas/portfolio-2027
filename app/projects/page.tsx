import { copy } from "@/lib/content";
import type { Metadata } from "next";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { ProjectShelf } from "@/components/project-shelf";
export const metadata: Metadata = {
  title: copy.projects.metaTitle,
  description: copy.projects.metaDescription,
};
export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.projects.eyebrow}
        title={copy.projects.title}
        description={copy.projects.description}
      />
      <section className="inner-section content-width">
        <ProjectShelf />
      </section>
    </PageLayout>
  );
}
