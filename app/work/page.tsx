import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Section, SectionHeader } from "@/components/section";
import { experiences } from "@/lib/data";
import { calculateDuration, formatMonthYear } from "@/lib/date";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Professional experience in software development, volunteer work, and humanitarian technology.",
};

export default function WorkPage() {
  const currentRoles = experiences.filter((e) => e.current);
  const pastRoles = experiences.filter((e) => !e.current);

  return (
    <PageLayout>
      <PageHeader
        number="04"
        label="Experience"
        title="Work"
        description="A timeline of professional experience, volunteer contributions, and meaningful work in software development and humanitarian technology."
      />

      <Section bordered>
        <SectionHeader label="Currently Active" count={`${currentRoles.length} Roles`} active />

        <div className="space-y-8">
          {currentRoles.map((experience) => (
            <article
              key={experience.id}
              className="group relative border border-foreground/30 bg-card/50 transition-all duration-500 hover:border-foreground"
            >
                <div className="absolute top-0 left-0 w-2 h-full bg-foreground" />

                <div className="p-8 lg:p-12 pl-10 lg:pl-16">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Company & Meta */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-muted-foreground">
                          #{experience.id}
                        </span>
                        <span className="text-[10px] font-mono text-foreground tracking-widest uppercase px-2 py-0.5 border border-foreground">
                          {experience.type}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-2xl font-normal text-foreground mb-1">
                          {experience.company}
                        </h2>
                        {experience.companyUrl && (
                          <a
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Visit Website</span>
                          </a>
                        )}
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{formatMonthYear(experience.startDate)} - Present</span>
                          <span className="text-xs font-mono text-foreground/50">
                            ({calculateDuration(experience.startDate)})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Role & Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
                          {experience.category}
                        </p>
                        <h3 className="text-xl text-foreground">{experience.position}</h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="space-y-3">
                        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                          Responsibilities
                        </p>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <span className="w-1 h-1 bg-foreground mt-2 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {experience.highlights && (
                        <div className="pt-4 border-t border-border">
                          <div className="flex flex-wrap gap-4">
                            {experience.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className="text-xs font-mono text-foreground bg-foreground/5 px-3 py-1.5 border border-border"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader label="Past Experience" count={`${pastRoles.length} Roles`} />

        <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden lg:block" />

            <div className="space-y-12">
              {pastRoles.map((experience) => (
                <article key={experience.id} className="group relative lg:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-px h-full bg-border/50 lg:hidden" />
                  <div className="absolute -left-[3px] lg:-left-[3px] top-2 w-1.5 h-1.5 bg-muted-foreground hidden lg:block" />

                  <div className="border border-border p-8 hover:border-foreground/30 transition-all duration-500 bg-card/20">
                    <div className="grid lg:grid-cols-4 gap-6">
                      {/* Meta */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase px-2 py-0.5 border border-border">
                            {experience.type}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>
                            {formatMonthYear(experience.startDate)} -{" "}
                            {experience.endDate ? formatMonthYear(experience.endDate) : "Present"}
                          </p>
                          <p className="text-xs font-mono text-foreground/50">
                            {calculateDuration(experience.startDate, experience.endDate)}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-3 space-y-4">
                        <div>
                          <h3 className="text-xl text-foreground mb-1">{experience.position}</h3>
                          <p className="text-muted-foreground">
                            {experience.company} - {experience.location}
                          </p>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>

                        <ul className="flex flex-wrap gap-2">
                          {experience.responsibilities.slice(0, 3).map((resp, i) => (
                            <li
                              key={i}
                              className="text-[10px] font-mono text-muted-foreground border border-border/50 px-2 py-1"
                            >
                              {resp.split(" ").slice(0, 4).join(" ")}...
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
        </div>
      </Section>

      <CtaSection
        text="Looking for a dedicated developer for your next project? Let's discuss how I can contribute."
        links={[
          { href: "/projects", label: "View Projects" },
          { href: "/#contact", label: "Get in Touch", primary: true },
        ]}
      />
    </PageLayout>
  );
}
