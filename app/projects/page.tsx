import { copy } from "@/lib/content";
import type { Metadata } from "next";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { ProjectShelf } from "@/components/project-shelf";
export const metadata: Metadata = {
  title: copy.projects.metaTitle,
  description: copy.projects.metaDescription,
};
export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string | string[] }>;
}) {
  const { filter } = await searchParams;
  const selected = Array.isArray(filter) ? filter[0] : filter;
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.projects.eyebrow}
        title={copy.projects.title}
        description={copy.projects.description}
      />
      <section className="inner-section content-width">
        <ProjectShelf selected={selected} />
      </section>
    </PageLayout>
  );
}
