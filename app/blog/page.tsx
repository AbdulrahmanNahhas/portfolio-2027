import { copy, message } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { blogPosts } from "@/lib/data";
import { formatDisplayDate } from "@/lib/date";
export const metadata: Metadata = {
  title: copy.notes.metaTitle,
  description: copy.notes.metaDescription,
};
export default function BlogPage() {
  return (
    <PageLayout>
      <PageHeader
        kicker={copy.notes.eyebrow}
        title={copy.notes.title}
        description={copy.notes.description}
      />
      <section className="inner-section content-width notes-grid">
        {blogPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="note-card"
          >
            <small>
              {message(copy.notes.noteMeta, {
                date: formatDisplayDate(post.date, {
                  month: "short",
                  year: "numeric",
                }),
                duration: post.readTime,
              })}
            </small>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span className="eyebrow">{post.tags.slice(0, 2).join(" / ")}</span>
            <span className="text-link">
              {copy.notes.readTheNote}
              <ArrowUpRightIcon />
            </span>
          </Link>
        ))}
      </section>
    </PageLayout>
  );
}
