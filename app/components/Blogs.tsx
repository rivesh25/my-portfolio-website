"use client";

import Link from "next/link";
import BlogsGrid, { Blog } from "./BlogsGrid";

export default function Blogs({ blogs = [] }: { blogs?: Blog[] }) {
  return (
    <section id="blogs" className="section">
      <div className="container">
        <div
          className="animate-fade-in-up"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="tag">Insights</span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Latest Blogs
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", marginBottom: "40px" }}>
            Thoughts, tutorials, and deep dives into modern web development and design.
          </p>
        </div>

        <BlogsGrid blogs={blogs} enableSearch={false} />

        {blogs.length > 0 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
            <Link
              href="/blogs"
              className="btn btn-primary"
              style={{
                padding: "14px 32px",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(56, 189, 248, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>Show More Blogs</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
