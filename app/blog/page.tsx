import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { Section, SectionHeader } from "@/components/section";
import { blogPosts } from "@/lib/data";
import { formatDisplayDate } from "@/lib/date";

export const metadata = {
  title: "Blog",
  description:
    "Articles about web development, embedded systems, and building technology for impact.",
};

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  return (
    <PageLayout>
      <PageHeader
        number="06"
        label="Writing"
        title="Blog"
        description="Thoughts on software development, embedded systems, and building technology that matters."
      />

      <Section bordered>
        <SectionHeader label="Featured" count={`${featuredPosts.length} Articles`} />

          <div className="space-y-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-border hover:border-foreground/50 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground">
                        /{String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-px bg-border" />
                      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDisplayDate(post.date, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl text-foreground group-hover:text-foreground/80 transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>

                  <div className="flex flex-col justify-between lg:items-end">
                    <div className="flex flex-wrap gap-2 lg:justify-end mb-8">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-muted-foreground border border-border px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono text-foreground group-hover:gap-4 transition-all">
                      <span className="tracking-widest uppercase">Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </Section>

      <Section>
        <SectionHeader label="All Posts" count={`${otherPosts.length} Articles`} />

          <div className="divide-y divide-border">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 gap-4 hover:px-4 transition-all duration-300"
              >
                <div className="space-y-2">
                  <h3 className="text-lg text-foreground group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{post.excerpt}</p>
                </div>

                <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground shrink-0">
                  <span>
                    {formatDisplayDate(post.date, {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>{post.readTime}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
      </Section>

      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl text-foreground mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get notified when I publish new articles about development, embedded systems, and
              tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-6 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none text-sm font-mono"
              />
              <button className="px-8 py-3 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
