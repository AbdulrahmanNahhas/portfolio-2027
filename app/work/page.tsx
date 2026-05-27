import { ArrowUpRight, Calendar, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { experiences } from "@/lib/data";

export const metadata = {
  title: "Work Experience | Abdulrahman Nahhas",
  description:
    "Professional experience in software development, volunteer work, and humanitarian technology.",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function calculateDuration(start: string, end?: string) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (remainingMonths === 0) return `${years} yr`;
  return `${years} yr ${remainingMonths} mo`;
}

export default function WorkPage() {
  const currentRoles = experiences.filter((e) => e.current);
  const pastRoles = experiences.filter((e) => !e.current);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50">
        <div className="absolute inset-0 noise" />
      </div>

      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">04</span>
            <div className="w-12 h-px bg-border" />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Experience
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-foreground mb-6">
            Work
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A timeline of professional experience, volunteer contributions, and meaningful work in
            software development and humanitarian technology.
          </p>
        </div>
      </section>

      {/* Current Roles */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-foreground animate-pulse" />
              <span className="text-[10px] font-mono text-foreground tracking-[0.3em] uppercase">
                Currently Active
              </span>
            </div>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-mono text-muted-foreground">
              {currentRoles.length} Roles
            </span>
          </div>

          <div className="space-y-8">
            {currentRoles.map((experience, index) => (
              <article
                key={experience.id}
                className="group relative border border-foreground/30 bg-card/50 hover:border-foreground transition-all duration-500"
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
                          <span>{formatDate(experience.startDate)} - Present</span>
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
        </div>
      </section>

      {/* Past Roles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Past Experience
            </span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[10px] font-mono text-muted-foreground">
              {pastRoles.length} Roles
            </span>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden lg:block" />

            <div className="space-y-12">
              {pastRoles.map((experience, index) => (
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
                            {formatDate(experience.startDate)} -{" "}
                            {experience.endDate ? formatDate(experience.endDate) : "Present"}
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {
              "Looking for a dedicated developer for your next project? Let's discuss how I can contribute."
            }
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border border-border px-8 py-4 hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
            >
              <span>View Projects</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
