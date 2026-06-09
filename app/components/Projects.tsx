"use client";
import TiltedCard from "./TiltedCard";

const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Store",
    description:
      "A full-featured e-commerce platform with a modern UI, seamless cart management, and secure checkout integration.",
    tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
    accent: "#38bdf8",
    emoji: "🛒",
    github: "https://github.com/rivesh25/ecommerce-website",
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description:
      "A web application that generates high-quality images from text descriptions using advanced AI models.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "#818cf8",
    emoji: "🎨",
    github: "https://github.com/rivesh25/ai-image-generator",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description:
      "An intelligent chatbot capable of understanding context and providing helpful, human-like conversational responses.",
    tags: ["Vite", "React", "Gemini API"],
    accent: "#c084fc",
    emoji: "🤖",
    github: "https://github.com/rivesh25/ai-chatbot",
  },
  {
    id: "social-media",
    title: "Social Media App",
    description:
      "A social platform allowing users to share posts, connect with friends, and engage with real-time updates.",
    tags: ["Vite", "React", "Express", "MongoDB"],
    accent: "#38bdf8",
    emoji: "📱",
    github: "https://github.com/rivesh25/simple-social-media-app",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description:
      "A fast and reliable service to convert long URLs into easily shareable short links with click tracking.",
    tags: ["Next.js", "Tailwind CSS"],
    accent: "#818cf8",
    emoji: "🔗",
    github: "https://github.com/rivesh25/url-shortener",
  },
  {
    id: "password-manager",
    title: "Password Manager",
    description:
      "A secure, encrypted vault for storing, generating, and managing complex passwords and sensitive data locally.",
    tags: ["React", "Vite", "Tailwind CSS", "MongoDB"],
    accent: "#c084fc",
    emoji: "🔐",
    github: "https://github.com/rivesh25/passop-password-manager",
  },
];

const categories = ["All", "Full Stack", "DevOps", "AI / ML"];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ paddingBottom: "40px" }}>
      <div className="container">
        <div
          className="animate-fade-in-up"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span className="tag">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A selection of projects I&apos;ve built — ranging from AI-powered
            applications to full-stack web platforms and utility tools.
          </p>
        </div>

        {/* Project cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "40px",
            justifyItems: "center",
          }}
        >
          {projects.map((project, i) => (
            <TiltedCard
              key={project.id}
              imageSrc="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              altText={project.title}
              captionText={project.title}
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div
                  className="card glass"
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: `${project.accent}15`,
                      border: `1px solid ${project.accent}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      marginBottom: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {project.emoji}
                  </div>

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      marginBottom: "10px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "var(--text-secondary)",
                      marginBottom: "20px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "24px",
                      justifyContent: "center",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span key={tag} className="code-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "auto" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                        borderRadius: "100px",
                        fontSize: "14px",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.border = "1px solid var(--border-hover)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.border = "1px solid var(--border)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Project
                    </a>
                  </div>
                </div>
              }
            />
          ))}
        </div>

        {/* View More Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
          <a
            href="https://github.com/rivesh25"
            target="_blank"
            rel="noopener noreferrer"
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
            <span>View More Projects</span>
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
          </a>
        </div>
      </div>
    </section>
  );
}

// CSS for .project-code-link is in globals.css via .nav-link pattern
