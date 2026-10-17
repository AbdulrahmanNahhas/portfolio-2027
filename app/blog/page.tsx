import { cn } from "@/lib/utils";
import { copy, message } from "@/lib/content";
import type { Metadata } from "next";
import { NoteLink } from "@/components/note-link";
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
      <section
        className={cn(
          "inner-section mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)] notes-grid",
          "pt-[35px] pb-12.5 gap-6 grid grid-cols-[1fr]",
          "min-[600px]:pt-[55px] min-[600px]:pb-[75px] min-[600px]:grid-cols-[repeat(2,_minmax(0,_1fr))]",
        )}
      >
        {blogPosts.map((post) => (
          <NoteLink href={`/blog/${post.slug}`} key={post.slug}>
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
            <span
              className={cn(
                "eyebrow",
                "gap-2.5 text-[9px] font-semibold tracking-[0.09em] uppercase inline-flex items-center text-muted-foreground",
                "min-[600px]:text-[11px] min-[600px]:tracking-[0.11em]",
              )}
            >
              {post.tags.slice(0, 2).join(" / ")}
            </span>
            <span
              className={cn(
                "text-link",
                "gap-3 border-b [border-bottom-style:solid] border-b-current inline-flex items-center text-[13px] font-[650] pb-1.5",
                "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
                "[&:hover_svg]:transform-[translate(3px,_-2px)]",
              )}
            >
              {copy.notes.readTheNote}
              <ArrowUpRightIcon />
            </span>
          </NoteLink>
        ))}
      </section>
    </PageLayout>
  );
}
