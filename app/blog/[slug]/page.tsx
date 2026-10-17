import { copy, message } from "@/lib/content";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { PageHeader, PageLayout } from "@/components/page-layout";
import { blogPosts, siteConfig } from "@/lib/data";
import { formatLongDate } from "@/lib/date";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return post
    ? {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${post.slug}` },
      }
    : { title: copy.article.noteNotFound };
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
      <div className="content-width article-back">
        <Link href="/blog" className="quiet-link">
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
        <div className="interest-tags">
          {post.tags.map((tag) => (
            <span className="interest-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </PageHeader>
      <article className="note-body content-width">
        <ArticleContent content={post.content} />
        <div className="article-author">
          <span className="author-avatar" aria-hidden="true">
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
        className="article-pagination content-width"
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
