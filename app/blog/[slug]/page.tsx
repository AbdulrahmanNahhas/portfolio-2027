import { cn } from "@/lib/utils";
import { copy, message } from "@/lib/content";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { blogPosts, siteConfig } from "@/lib/data";
import { formatLongDate } from "@/lib/date";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return post
    ? {
        title: post.title,
        description: post.excerpt,
        alternates: {
          canonical: `/blog/${post.slug}`,
        },
      }
    : {
        title: copy.article.noteNotFound,
      };
}
function InlineText({ text }: { text: string }) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, index) =>
      part.startsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
}
function ArticleContent({ content }: { content: string }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  let ordered = false;
  function flush() {
    if (!list.length) return;
    const Tag = ordered ? "ol" : "ul";
    blocks.push(
      <Tag key={blocks.length}>
        {list.map((item, index) => (
          <li key={index}>
            <InlineText text={item} />
          </li>
        ))}
      </Tag>,
    );
    list = [];
  }
  for (const raw of content.trim().split("\n")) {
    const line = raw.trim();
    const bullet = line.match(/^(- |\d+\. )(.*)/);
    if (bullet) {
      const nextOrdered = /^\d/.test(bullet[1]);
      if (list.length && ordered !== nextOrdered) flush();
      ordered = nextOrdered;
      list.push(bullet[2]);
      continue;
    }
    flush();
    if (!line) continue;
    if (line.startsWith("## "))
      blocks.push(<h2 key={blocks.length}>{line.slice(3)}</h2>);
    else
      blocks.push(
        <p key={blocks.length}>
          <InlineText text={line} />
        </p>,
      );
  }
  flush();
  return blocks;
}
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const index = blogPosts.findIndex((post) => post.slug === slug);
  if (index < 0) notFound();
  const post = blogPosts[index];
  const previous = blogPosts[index - 1];
  const next = blogPosts[index + 1];
  return (
    <PageLayout>
      <div
        className={cn(
          "mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)] article-back",
          "mt-9.5",
          "[&+.page-header]:pt-7.5",
        )}
      >
        <Link
          href="/blog"
          className={cn(
            "quiet-link",
            "[&_svg]:size-[17px] [&_svg]:[transition:transform_0.2s]",
            "[&:hover_svg]:transform-[translate(3px,_-2px)]",
            "gap-[7px] inline-flex items-center text-[12px] text-muted-foreground",
          )}
        >
          <ArrowLeftIcon />
          {copy.article.backToNotes}
        </Link>
      </div>
      <PageHeader
        kicker={message(copy.article.readTime, {
          date: formatLongDate(post.date),
          duration: post.readTime,
        })}
        title={post.title}
        description={post.excerpt}
      >
        <div className={cn("interest-tags", "gap-2.5 flex flex-wrap mt-7.5")}>
          {post.tags.map((tag) => (
            <span
              className={cn(
                "interest-tag",
                "px-[17px] py-2.5 rounded-[50px] border border-solid border-border text-[12px]",
              )}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </PageHeader>
      <article
        className={cn(
          "note-body mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "py-12.5 max-w-180",
          "[&>h2]:font-heading [&>h2]:text-[27px] [&>h2]:font-[650] [&>h2]:tracking-[-0.7px] [&>h2]:mt-9.5 [&>h2]:mb-4.5",
          "min-[600px]:[&>h2]:text-[31px]",
          "[&>h2:first-child]:mt-0",
          "[&>p]:text-muted-foreground [&>p]:text-[14px] [&>p]:leading-[1.95]",
          "min-[600px]:[&>p]:text-[16px]",
          "[&_li]:text-muted-foreground [&_li]:text-[14px] [&_li]:leading-[1.95]",
          "min-[600px]:[&_li]:text-[16px]",
          "[&>p+p]:mt-4.5",
          "[&_strong]:text-foreground [&_strong]:font-semibold",
          "[&_ul]:my-5 [&_ul]:pl-6 [&_ul]:list-disc",
          "[&_ol]:my-5 [&_ol]:pl-6 [&_ol]:[list-style:decimal]",
          "[&_li+li]:mt-[9px]",
          "[&_li::marker]:text-primary",
        )}
      >
        <ArticleContent content={post.content} />
        <div
          className={cn(
            "article-author",
            "gap-4.5 border-t [border-top-style:solid] border-t-border flex items-center mt-[45px] pt-7.5",
            "[&_strong]:text-[14px]",
            "[&_p]:text-[12px] [&_p]:text-muted-foreground [&_p]:mt-[5px]",
          )}
        >
          <span
            className={cn(
              "author-avatar",
              "rounded-[50%] bg-mint text-object-ink grid place-items-center size-[55px] text-[35px] font-heading font-bold",
            )}
            aria-hidden="true"
          >
            {copy.article.a}
          </span>
          <div>
            <strong>{siteConfig.name}</strong>
            <p>
              {message(copy.article.authorLine, {
                location: siteConfig.location,
              })}
            </p>
          </div>
        </div>
      </article>
      <nav
        className={cn(
          "article-pagination mx-auto w-[min(1240px,calc(100%_-_96px))] max-[1150px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]",
          "gap-4 grid grid-cols-[1fr] pt-[15px] pb-[65px]",
          "min-[600px]:gap-[25px] min-[600px]:grid-cols-[1fr_1fr]",
          "[&_a]:p-7 [&_a]:rounded-[14px] [&_a]:border [&_a]:border-solid [&_a]:border-border [&_a]:bg-card",
          "[&_span]:gap-[9px] [&_span]:flex [&_span]:items-center [&_span]:text-[11px] [&_span]:text-muted-foreground",
          "[&_svg]:size-[15px]",
          "[&_h2]:font-heading [&_h2]:text-[22px] [&_h2]:leading-[1.3] [&_h2]:font-semibold [&_h2]:mt-4",
          "max-[600px]:[&>div]:hidden",
        )}
        aria-label={copy.article.otherNotes}
      >
        {previous ? (
          <Link href={`/blog/${previous.slug}`}>
            <span>
              <ArrowLeftIcon />
              {copy.article.previousNote}
            </span>
            <h2>{previous.title}</h2>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link href={`/blog/${next.slug}`}>
            <span>
              {copy.article.nextNote}
              <ArrowRightIcon />
            </span>
            <h2>{next.title}</h2>
          </Link>
        )}
      </nav>
    </PageLayout>
  );
}
