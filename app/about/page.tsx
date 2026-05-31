import { ArrowRight, Calendar, MapPin, Quote } from "lucide-react";
import Link from "next/link";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Section, SectionHeader } from "@/components/section";
import { aboutData, siteConfig, stats } from "@/lib/data";

export const metadata = {
  title: "About",
  description:
    "Learn more about Abdulrahman Nahhas - a software developer from Syria passionate about building meaningful technology.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        number="02"
        label="Personal"
        title="About"
        description="The story behind the code - who I am, what drives me, and why I build."
      />

      <Section bordered>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <SectionHeader label="Introduction" className="mb-8" />

              <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
                {aboutData.intro}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{stats.yearsExperience} Years Experience</span>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative aspect-square bg-card border border-border">
              <div className="absolute inset-0 grid-overlay opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto border border-border flex items-center justify-center">
                    <span className="text-6xl font-mono text-muted-foreground/30">A</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                    Profile Image
                  </p>
                </div>
              </div>
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-foreground/20" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-foreground/20" />
            </div>
          </div>
      </Section>

      <Section bordered>
        <SectionHeader label="Journey" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[39px] top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {aboutData.story.map((item, index) => (
                <div key={item.year} className="group relative grid md:grid-cols-[80px_1fr] gap-8">
                  {/* Year */}
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-[80px] h-[80px] border border-border flex items-center justify-center bg-background z-10 group-hover:border-foreground/50 transition-colors">
                      <span className="text-2xl font-mono text-foreground">{item.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-4 md:pt-6 pl-0 md:pl-8">
                    <h3 className="text-xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </Section>

      <Section bordered>
        <SectionHeader label="Philosophy" />

          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.philosophy.map((item, index) => (
              <div
                key={item.title}
                className="group border border-border p-8 hover:border-foreground/50 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  <div className="w-8 h-px bg-border group-hover:bg-foreground/50 transition-colors" />
                </div>
                <h3 className="text-lg text-foreground mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
      </Section>

      <Section bordered>
        <SectionHeader label="Interests" />

          <div className="flex flex-wrap gap-4">
            {aboutData.interests.map((interest) => (
              <span
                key={interest}
                className="px-6 py-3 border border-border text-sm text-foreground hover:bg-foreground hover:text-background transition-colors cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
      </Section>

      <Section bordered>
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-8 h-8 text-muted-foreground mx-auto mb-8" />
            <blockquote className="text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
              {"Technology is most powerful when it empowers people to solve problems that matter."}
            </blockquote>
            <p className="text-sm text-muted-foreground font-mono tracking-widest uppercase">
              Personal Motto
            </p>
          </div>
      </Section>

      <Section>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/work"
              className="group border border-border p-8 hover:border-foreground/50 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                  Next
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xl text-foreground">Work Experience</h3>
              <p className="text-sm text-muted-foreground mt-2">
                See where I&apos;ve worked and what I&apos;ve built
              </p>
            </Link>

            <Link
              href="/contact"
              className="group border border-border p-8 hover:border-foreground/50 bg-foreground/5 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                  Connect
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xl text-foreground">Get in Touch</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Let&apos;s discuss your project or idea
              </p>
            </Link>
          </div>
      </Section>
    </PageLayout>
  );
}
