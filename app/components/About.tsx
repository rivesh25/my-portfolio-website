const stats = [
  { value: "2+", label: "Years Experience", icon: "📅" },
  { value: "5+", label: "Projects Shipped", icon: "🚀" },
  { value: "10+", label: "Happy Clients", icon: "🤝" },
  { value: "100%", label: "Client Satisfaction", icon: "⭐" },
];

export default function About() {
  return (
    <section id="about">
      <div
        style={{
          background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)",
          borderBottom: "1px solid var(--border)",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Left: text */}
            <div className="animate-fade-in-up">
              <span className="tag">About Me</span>
              <h2 className="section-title">
                Building interfaces that feel alive
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                  marginBottom: "20px",
                }}
              >
                I am a developer who cares deeply about writing clean, maintainable, 
                and scalable code. I focus on performance and best practices to ensure 
                the applications I build not only work flawlessly but also provide an 
                exceptional user experience.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                  marginBottom: "32px",
                }}
              >
                When I&apos;m not building applications, you can usually find me
                writing technical blogs. I love exploring new web technologies,
                breaking down complex concepts, and sharing my learnings with
                the developer community through in-depth articles and tutorials.
              </p>

              {/* <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "36px",
                }}
              >
                {[
                  { label: "📍 India", id: "about-location" },
                  { label: "💼 Open to remote", id: "about-remote" },
                  { label: "🎓 CS Degree", id: "about-edu" },
                  { label: "🌐 Full Stack", id: "about-stack" },
                ].map((item) => (
                  <span key={item.id} id={item.id} className="skill-badge">
                    {item.label}
                  </span>
                ))}
              </div> */}

              {/* <a href="#contact" className="btn btn-primary">
                Let&apos;s Work Together
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a> */}
            </div>

            {/* Right: stats grid */}
            <div
              className="animate-fade-in-up delay-200"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="card glass"
                  style={{
                    padding: "28px 24px",
                    textAlign: "center",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
