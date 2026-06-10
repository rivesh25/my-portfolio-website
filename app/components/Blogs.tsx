"use client";

import Link from "next/link";

const latestBlogs = [
  {
    id: "blog-1",
    title: "Mastering React Server Components",
    description: "A deep dive into how Server Components change the way we build React applications, focusing on performance and SEO.",
    date: "Jun 10, 2026",
    readTime: "5 min read",
    tags: ["React", "Next.js", "Performance"],
    accent: "#38bdf8",
  },
  {
    id: "blog-2",
    title: "Building Scalable APIs with Node & Express",
    description: "Best practices for structuring your Express applications to handle high traffic and complex business logic.",
    date: "May 24, 2026",
    readTime: "7 min read",
    tags: ["Node.js", "Backend", "API"],
    accent: "#c084fc",
  },
  {
    id: "blog-3",
    title: "The Future of Web Design: Glassmorphism",
    description: "Exploring the aesthetic appeal and implementation details of modern UI trends like glassmorphism.",
    date: "May 05, 2026",
    readTime: "4 min read",
    tags: ["CSS", "Design", "UI/UX"],
    accent: "#f472b6",
  },
];

export default function Blogs() {
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
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Thoughts, tutorials, and deep dives into modern web development and design.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            marginTop: "40px",
          }}
        >
          {latestBlogs.map((blog, i) => (
            <div
              key={blog.id}
              className="card glass animate-fade-in-up"
              style={{
                animationDelay: `${i * 0.1}s`,
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "var(--border-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  marginBottom: "16px",
                }}
              >
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  lineHeight: 1.4,
                }}
              >
                {blog.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  marginBottom: "24px",
                  flexGrow: 1,
                }}
              >
                {blog.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "auto",
                }}
              >
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px",
                      padding: "4px 10px",
                      background: `${blog.accent}15`,
                      color: blog.accent,
                      borderRadius: "100px",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
}
