"use client";

import Navbar from "../components/Navbar";
import { Component as FlickeringFooter } from "../components/FlickeringFooter";
import MagicBento from "../components/MagicBento";

const allBlogs = [
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
  {
    id: "blog-4",
    title: "Deploying to AWS using Terraform",
    description: "An infrastructure-as-code approach to managing your cloud deployments predictably and securely.",
    date: "Apr 18, 2026",
    readTime: "8 min read",
    tags: ["DevOps", "AWS", "Terraform"],
    accent: "#fbbf24",
  },
  {
    id: "blog-5",
    title: "Advanced TypeScript Patterns",
    description: "Move beyond the basics and learn how to use mapped types, conditional types, and generics effectively.",
    date: "Mar 30, 2026",
    readTime: "6 min read",
    tags: ["TypeScript", "Frontend"],
    accent: "#34d399",
  },
  {
    id: "blog-6",
    title: "Animating with Framer Motion",
    description: "Bring your React applications to life with physics-based animations that feel smooth and natural.",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    tags: ["React", "Animation"],
    accent: "#a78bfa",
  },
];

export default function BlogsPage() {
  return (
    <>
      <div className="bg-noise" aria-hidden />
      
      <Navbar />

      <main style={{ paddingTop: "120px", minHeight: "100vh" }}>
        
        {/* Social Profiles Section */}
        <section className="section" style={{ paddingTop: "0px", paddingBottom: "40px" }}>
          <div className="container">
            <MagicBento 
              textAutoHide={true}
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={400}
              particleCount={12}
              glowColor="56, 189, 248"
              disableAnimations={false}
            >
              <div className="animate-fade-in-up" style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 10 }}>
                <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px", color: "var(--text-primary)" }}>Find Me Elsewhere</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "32px", maxWidth: "500px", lineHeight: 1.6 }}>
                  You can also check out my latest thoughts, technical articles, and tutorials on these platforms.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    flexWrap: "wrap"
                  }}
                >
                  <a
                    href="https://hashnode.com/@rivesh25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      padding: "10px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 00-7.962 0l-6.37 6.37a5.63 5.63 0 000 7.962l6.37 6.37a5.63 5.63 0 007.962 0l6.37-6.37a5.63 5.63 0 000-7.962zM12 15.953a3.953 3.953 0 110-7.906 3.953 3.953 0 010 7.906z" />
                    </svg>
                    Hashnode
                  </a>
                  <a
                    href="https://medium.com/@rivesh25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      padding: "10px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                    Medium
                  </a>
                </div>
              </div>
            </MagicBento>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "20px" }}>
          <div className="container">
            <div className="animate-fade-in-up" style={{ textAlign: "center", marginBottom: "60px" }}>
              <span className="tag" style={{ justifyContent: "center" }}>All Posts</span>
              <h1 className="section-title" style={{ textAlign: "center" }}>
                My Blog
              </h1>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--text-secondary)",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.75,
                }}
              >
                A collection of my thoughts, tutorials, and deep dives into software engineering, web development, and modern design.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
              }}
            >
              {allBlogs.map((blog, i) => (
                <div
                  key={blog.id}
                  className="card glass animate-fade-in-up"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease, border-color 0.2s ease",
                    cursor: "pointer",
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
          </div>
        </section>
      </main>
      <FlickeringFooter />
    </>
  );
}
