import Navbar from "../components/Navbar";
import { Component as FlickeringFooter } from "../components/FlickeringFooter";
import MagicBento from "../components/MagicBento";
import BlogsGrid from "../components/BlogsGrid";
import { client } from "../lib/sanity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "A collection of my thoughts, tutorials, and deep dives into software engineering, web development, and modern design.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogsPage() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "authorName": author->name,
    "categories": categories[]->title,
    "excerpt": array::join(string::split((pt::text(body)), "")[0...120], "") + "..."
  }`;

  const allBlogs = await client.fetch(query);

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
                My Blogs
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

            {/* Dynamic Blog Grid */}
            <BlogsGrid blogs={allBlogs} enableSearch={true} />

          </div>
        </section>
      </main>
      <FlickeringFooter />
    </>
  );
}
