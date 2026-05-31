import { PageLayout } from "@/components/page-layout"
import { blogPosts, siteConfig } from "@/lib/data"
import { formatLongDate } from "@/lib/date"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <PageLayout>
      {/* Header */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
          {/* Back link */}
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-widest uppercase">Back to Blog</span>
          </Link>
          
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatLongDate(post.date)}
            </span>
            <span className="w-1 h-1 bg-muted-foreground/30" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} read
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground mb-8 leading-[1.1]">
            {post.title}
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono text-muted-foreground border border-border px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl text-foreground mt-12 mb-6 font-normal">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("1. ") || paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter(Boolean)
                return (
                  <ul key={index} className="space-y-2 my-6 text-muted-foreground">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-foreground/50 mt-2.5 shrink-0" />
                        <span>{item.replace(/^[-\d.]\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed my-6">
                    {paragraph}
                  </p>
                )
              }
              return null
            })}
          </div>
        </div>
      </article>

      {/* Author */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 border border-border flex items-center justify-center bg-card">
              <span className="text-2xl font-mono text-muted-foreground">A</span>
            </div>
            <div>
              <p className="text-foreground font-medium">{siteConfig.name}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.title} from {siteConfig.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {prevPost ? (
              <Link 
                href={`/blog/${prevPost.slug}`}
                className="group border border-border p-6 hover:border-foreground/50 transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
                  <ArrowLeft className="w-3 h-3" />
                  <span className="tracking-widest uppercase">Previous</span>
                </div>
                <p className="text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            
            {nextPost && (
              <Link 
                href={`/blog/${nextPost.slug}`}
                className="group border border-border p-6 hover:border-foreground/50 transition-all text-right"
              >
                <div className="flex items-center justify-end gap-2 text-xs font-mono text-muted-foreground mb-4">
                  <span className="tracking-widest uppercase">Next</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
                <p className="text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
