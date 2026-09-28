import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeader } from "@/components/section";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
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
        kicker="Projects"
        title="Things I've built, and what I learned making them."
        description="A curated collection across full-stack web, embedded systems, and humanitarian tech — each one a specific problem solved with care."
      />

      <Section bordered size="wide">
        <SectionHeader label="Featured work" count={`${featuredProjects.length} projects`} />
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section size="wide">
        <SectionHeader label="More projects" count={`${otherProjects.length} projects`} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection
        text="Want to share feedback, collaborate, or compare notes on a project? I'd be glad to talk."
        links={[{ href: "/contact", label: "Start a conversation", primary: true }]}
      />
    </PageLayout>
  );
}
