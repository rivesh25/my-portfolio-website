import { MetadataRoute } from "next";
import { client } from "./lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://rivtech.me",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://rivtech.me/blogs",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // Dynamic Blog Routes
  const query = `*[_type == "post"] { slug, publishedAt }`;
  const posts = await client.fetch(query);

  const dynamicRoutes: MetadataRoute.Sitemap = posts.map(
    (post: { slug: { current: string }; publishedAt: string }) => ({
      url: `https://rivtech.me/blogs/${post.slug.current}`,
      lastModified: new Date(post.publishedAt || new Date()),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...dynamicRoutes];
}
