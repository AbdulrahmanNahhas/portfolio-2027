import {
  ArrowLeftIcon as ArrowLeft,
  ArrowRightIcon as ArrowRight,
  CalendarBlankIcon as Calendar,
  ClockIcon as Clock,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/page-layout";
import { Reveal } from "@/components/reveal";
import { blogPosts, siteConfig } from "@/lib/data";
import { formatLongDate } from "@/lib/date";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative border-b border-border pb-14 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="kicker text-inherit">Back to blog</span>
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5 text-primary" />
              {formatLongDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary" />
              {post.readTime} read
            </span>
          </div>

          <h1 className="font-display mt-6 text-balance text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center  border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-6">
            {post.content.split("\n\n").map((block, index) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="font-display pt-6 text-2xl tracking-tight text-foreground"
                  >
                    {block.replace(/^##\s+/, "")}
                  </h2>
                );
              }
              if (block.startsWith("1. ") || block.startsWith("- ")) {
                const items = block.split("\n").filter(Boolean);
                return (
                  <ul key={index} className="space-y-3">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-pretty leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2.5 size-1.5 shrink-0  bg-primary/60" />
                        <span>{item.replace(/^[-\d.]\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.trim()) {
                return (
                  <p
                    key={index}
                    className="text-lg text-pretty leading-relaxed text-muted-foreground"
                  >
                    {block}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </article>

      {/* Author */}
      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-5  border border-border bg-card/40 p-6 sm:p-7">
              <span className="grid size-14 shrink-0 place-items-center  border border-border bg-card">
                <span className="font-display text-3xl leading-none text-primary">
                  AN
                </span>
              </span>
              <div>
                <p className="text-base font-medium text-foreground">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.title} · {siteConfig.location}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prev / next */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group  border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="flex items-center gap-2">
                  <ArrowLeft className="size-3.5 text-muted-foreground transition-transform duration-300 group-hover:-translate-x-0.5" />
                  <span className="kicker">Previous</span>
                </div>
                <p className="font-display mt-3 text-lg leading-snug tracking-tight text-foreground">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div aria-hidden />
            )}

            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group  border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card hover:shadow-lg hover:shadow-foreground/5 md:text-right"
              >
                <div className="flex items-center gap-2 md:justify-end">
                  <span className="kicker">Next</span>
                  <ArrowRight className="size-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
                <p className="font-display mt-3 text-lg leading-snug tracking-tight text-foreground">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
