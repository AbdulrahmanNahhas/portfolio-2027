import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeader } from "@/components/section";
import { formatDisplayDate } from "@/lib/date";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on full-stack web development, embedded systems, IoT, design systems, and building tech in challenging places.",
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <PageLayout>
      <PageHeader
        kicker="Blog"
        title="Notes on building — web, firmware, and the in-between."
        description="Long-form posts on real-time IoT dashboards, ESP32 MQTT, design systems, and what it's like growing as a developer in Syria."
      />

      {/* Featured */}
      {featured.length > 0 && (
        <Section bordered>
          <SectionHeader label="Featured" count={`${featured.length} posts`} />
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((post, index) => (
              <Reveal key={post.slug} delay={index * 60}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5 sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-primary" />
                      {formatDisplayDate(post.date, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary" />
                      {post.readTime} read
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-2xl tracking-tight text-foreground sm:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* All posts */}
      <Section bordered>
        <SectionHeader label="All posts" count={`${rest.length} posts`} />
        <Reveal>
          <ul className="divide-y divide-border">
            {rest.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-3 py-5 transition-all duration-300 hover:ps-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <h3 className="font-display text-lg tracking-tight text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4 text-xs text-muted-foreground sm:gap-6">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-primary" />
                      {formatDisplayDate(post.date, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-primary" />
                      {post.readTime}
                    </span>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <CtaSection
        text="Have a question about a post, or want to suggest a topic? I'd love to hear what you'd like to read next."
        links={[
          { href: "/contact", label: "Suggest a topic", primary: true },
          { href: "/projects", label: "See the work" },
        ]}
      />
    </PageLayout>
  );
}
