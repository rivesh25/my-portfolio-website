import { client, urlFor } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Navbar from "../../components/Navbar";
import { Component as FlickeringFooter } from "../../components/FlickeringFooter";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButton from "../../components/ShareButton";
import type { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const query = `*[_type == "post"] { slug }`;
  const posts = await client.fetch(query);

  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "excerpt": array::join(string::split((pt::text(body)), "")[0...150], "") + "...",
    mainImage,
    "authorName": author->name
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return {};
  }

  const ogImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: post.authorName ? [post.authorName] : undefined,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "name": author->name,
    "authorImage": author->image,
    mainImage,
    publishedAt,
    body,
    "categories": categories[]->title
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const ptComponents = {
    types: {
      image: ({ value }: { value: Record<string, unknown> & { alt?: string, asset?: { _ref?: string } } }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <div style={{ position: "relative", width: "100%", margin: "32px 0", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src={urlFor(value).url()}
              alt={value.alt || "Blog image"}
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      },
      code: ({ value }: { value: any }) => (
        <div style={{ margin: "24px 0", borderRadius: "8px", overflow: "hidden", background: "#1e1e1e", border: "1px solid #333" }}>
          <div style={{ background: "#2d2d2d", padding: "8px 16px", color: "#888", fontSize: "12px", borderBottom: "1px solid #333", display: "flex", justifyContent: "space-between" }}>
            <span>{value.language || 'text'}</span>
            {value.filename && <span>{value.filename}</span>}
          </div>
          <pre style={{ margin: 0, padding: "16px", overflowX: "auto", fontSize: "14px", lineHeight: "1.5", color: "#d4d4d4" }}>
            <code>{value.code}</code>
          </pre>
        </div>
      ),
      table: ({ value }: { value: any }) => {
        if (!value || !value.rows) return null;
        return (
          <div style={{ overflowX: "auto", margin: "32px 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", color: "var(--text-primary)" }}>
              <tbody>
                {value.rows.map((row: any, i: number) => (
                  <tr key={row._key} style={{ borderBottom: i === value.rows.length - 1 ? "none" : "1px solid var(--border)" }}>
                    {row.cells.map((cell: any, j: number) => {
                      const isHeader = i === 0;
                      return isHeader ? (
                        <th key={j} style={{ padding: "12px 16px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.05)", fontWeight: "bold" }}>
                          {cell}
                        </th>
                      ) : (
                        <td key={j} style={{ padding: "12px 16px", border: "1px solid var(--border)" }}>
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
    },
    marks: {
      code: ({ children }: { children?: React.ReactNode }) => (
        <code style={{ background: "rgba(255,255,255,0.08)", padding: "4px 8px", borderRadius: "6px", color: "var(--accent)", fontSize: "0.9em", border: "1px solid rgba(255,255,255,0.1)" }}>
          {children}
        </code>
      ),
    },
    block: {
      h1: ({ children }: { children?: React.ReactNode }) => <h1 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "2.5rem 0 1rem", color: "var(--text-primary)" }}>{children}</h1>,
      h2: ({ children }: { children?: React.ReactNode }) => <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "2rem 0 1rem", color: "var(--text-primary)" }}>{children}</h2>,
      h3: ({ children }: { children?: React.ReactNode }) => <h3 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1.5rem 0 1rem", color: "var(--text-primary)" }}>{children}</h3>,
      normal: ({ children }: { children?: React.ReactNode }) => <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--text-secondary)" }}>{children}</p>,
      blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote style={{ borderLeft: "4px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", margin: "1.5rem 0", color: "var(--text-muted)" }}>{children}</blockquote>,
    },
    list: {
      bullet: ({ children }: { children?: React.ReactNode }) => <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>{children}</ul>,
      number: ({ children }: { children?: React.ReactNode }) => <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>{children}</ol>,
    },
  };

  return (
    <>
      <Script 
        id="schema-article" 
        type="application/ld+json" 
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "image": post.mainImage ? [urlFor(post.mainImage).url()] : [],
            "datePublished": post.publishedAt,
            "author": [{
              "@type": "Person",
              "name": post.name || "Rivesh Kumar"
            }]
          })
        }}
      />

      <div className="bg-noise" aria-hidden />
      
      <Navbar />

      <main style={{ paddingTop: "120px", minHeight: "100vh", paddingBottom: "80px" }}>
        <article className="container" style={{ maxWidth: "800px" }}>
          
          <Link href="/blogs" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)", marginBottom: "32px", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Blogs
          </Link>

          {/* Header */}
          <header style={{ marginBottom: "40px", textAlign: "center" }}>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
              {post.categories && post.categories.map((cat: string) => (
                <span key={cat} style={{ fontSize: "12px", padding: "4px 12px", background: "rgba(56, 189, 248, 0.1)", color: "var(--accent)", borderRadius: "100px", fontWeight: 600 }}>
                  {cat}
                </span>
              ))}
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2, marginBottom: "24px" }}>
              {post.title}
            </h1>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", color: "var(--text-secondary)", fontSize: "14px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {post.authorImage ? (
                  <Image
                    src={urlFor(post.authorImage).width(30).height(30).url()}
                    alt={post.name || "Author"}
                    width={24}
                    height={24}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
                <span style={{ fontWeight: 500 }}>{post.name || "Anonymous"}</span>
              </div>
              
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--border)" }}></div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--border)" }}></div>

              <ShareButton />
            </div>
          </header>

          {/* Main Image */}
          {post.mainImage && (
            <div style={{ position: "relative", width: "100%", borderRadius: "20px", overflow: "hidden", marginBottom: "40px", border: "1px solid var(--border)", display: "flex", justifyContent: "center", background: "var(--bg-secondary)" }}>
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                width={1200}
                height={800}
                style={{ width: "100%", height: "auto", maxHeight: "600px", objectFit: "contain" }}
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose" style={{ color: "var(--text-secondary)" }}>
            <PortableText value={post.body} components={ptComponents} />
          </div>

        </article>
      </main>

      <FlickeringFooter />
    </>
  );
}
