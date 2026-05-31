import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/data";

const staticRoutes = ["", "about", "projects", "work", "skills", "blog", "uses", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();

  const routes = staticRoutes.map((route) => ({
    url: route ? `${siteConfig.url}/${route}` : siteConfig.url,
    lastModified: updatedAt,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: post.featured ? 0.8 : 0.6,
  }));

  return [...routes, ...posts];
}
