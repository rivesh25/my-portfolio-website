"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../lib/sanity";

export interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  categories?: string[];
  excerpt?: string;
  mainImage?: any;
  authorName?: string;
}

export default function BlogsGrid({ blogs = [], enableSearch = false }: { blogs?: Blog[], enableSearch?: boolean }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const accents = ["#38bdf8", "#c084fc", "#f472b6", "#fbbf24", "#34d399", "#a78bfa"];

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (blog.excerpt && blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (blog.categories && blog.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div>
      {enableSearch && (
        <div style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
            <svg style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search blogs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: "100%", 
                padding: "14px 20px 14px 44px", 
                borderRadius: "100px", 
                border: "1px solid var(--border)", 
                background: "rgba(255, 255, 255, 0.03)", 
                color: "var(--text-primary)", 
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.2s ease"
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--border-hover)"}
              onBlur={(e) => e.target.style.borderColor = "var(--border)"}
            />
          </div>
        </div>
      )}

      {filteredBlogs.length === 0 ? (
        <div style={{ textAlign: "center", color: "var(--text-secondary)", padding: "40px", fontSize: "1.1rem" }}>
          No blogs found.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredBlogs.slice(0, visibleCount).map((blog, i) => {
            const accent = accents[i % accents.length];
            return (
              <Link
                href={`/blogs/${blog.slug.current}`}
                key={blog._id}
                className="card glass animate-fade-in-up"
                style={{
                  animationDelay: `${(i % 6) * 0.05}s`,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                  textDecoration: "none",
                  aspectRatio: "auto",
                  minHeight: "280px",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {blog.mainImage && (
                  <div style={{ position: "relative", width: "100%", height: "180px", marginBottom: "20px", borderRadius: "12px", overflow: "hidden", flexShrink: 0 }}>
                    <Image src={urlFor(blog.mainImage).width(400).height(200).url()} alt={blog.title} fill style={{ objectFit: "cover" }} />
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    marginBottom: "12px",
                    fontWeight: 500
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>{blog.authorName || "Anonymous"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{formatDate(blog.publishedAt)}</span>
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: "0",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {blog.title}
                </h3>
              </Link>
            );
          })}
        </div>
      )}

      {filteredBlogs.length > visibleCount && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="btn btn-primary"
            style={{
              padding: "12px 32px",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              borderRadius: "100px",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
