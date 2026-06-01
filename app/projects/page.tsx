import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { ProjectCard } from "@/components/project-card";
import { Section, SectionHeader } from "@/components/section";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description:
    "A collection of projects spanning web development, embedded systems, and humanitarian technology.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <PageLayout>
      <PageHeader
        number="03"
        label="Archive"
        title="Projects"
        description="A curated collection of projects spanning full-stack web development, embedded systems, and humanitarian technology. Each project represents a unique challenge solved with precision."
      />

      <Section bordered>
        <SectionHeader label="Featured Work" count={`${featuredProjects.length} Projects`} />

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader label="Other Projects" count={`${otherProjects.length} Projects`} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </Section>

      <CtaSection
        text="Want to share feedback, collaborate, or compare notes on a project? I would be glad to talk."
        links={[{ href: "/#contact", label: "Start a Conversation", primary: true }]}
      />
    </PageLayout>
  );
}
