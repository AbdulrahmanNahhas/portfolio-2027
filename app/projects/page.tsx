import { cn } from "@/lib/utils";
import { copy } from "@/lib/content";
import type { Metadata } from "next";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { ProjectsUpcoming } from "@/components/projects-upcoming";
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
      <section
        className={cn(
          "inner-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "pt-[35px] pb-12.5",
          "min-[600px]:pt-[55px] min-[600px]:pb-[75px]",
        )}
      >
        <ProjectsUpcoming />
      </section>
    </PageLayout>
  );
}
