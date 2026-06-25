const experiences = [
  {
    id: "exp-1",
    role: "Full Stack Developer Intern",
    company: "Triitans Solitaire",
    period: "March 2026 — Present",
    type: "Internship",
    description:
      "Working as a full stack developer intern, collaborating closely with the engineering team to build, test, and ship features across both frontend and backend systems.",
    highlights: [
      "Contributed to full stack application development",
      "Gained hands-on experience in modern web technologies",
      "Collaborated with team members to deliver scalable solutions",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    accent: "#38bdf8",
  },
  {
    id: "exp-2",
    role: "Freelance Developer",
    company: "SlumberPanda",
    period: "Aug 2025 — Sept 2025",
    type: "Freelance",
    description:
      "Partnered with SlumberPanda to design and build a complete e-commerce store, delivering a seamless shopping experience for their customers.",
    highlights: [
      "Built a fully functional e-commerce store from the ground up",
      "Implemented responsive UI design and seamless checkout flows",
      "Integrated product management and shopping cart functionality",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    accent: "#c084fc",
  },
  {
    id: "exp-3",
    role: "Cloud Intern",
    company: "Edunet Foundation",
    period: "June 2024 — Aug 2024",
    type: "Internship",
    description:
      "Learned the core fundamentals of cloud computing, focusing on cloud infrastructure, deployment, and modern server architectures.",
    highlights: [
      "Gained foundational knowledge in cloud computing paradigms",
      "Learned about virtualization, scalable infrastructure, and cloud deployment",
    ],
    stack: ["Cloud Computing", "AWS", "Infrastructure"],
    accent: "#818cf8",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div
        style={{
          background: "var(--bg-2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="animate-fade-in-up">
            <span className="tag">Experience</span>
            <h2 className="section-title">Work History</h2>
            <p className="section-subtitle">
              Where I&apos;ve worked, what I&apos;ve built, and what I&apos;ve
              learned along the way.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: "5px",
                top: "6px",
                bottom: 0,
                width: "1px",
                background: "var(--accent)",
                opacity: 0.2,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                paddingLeft: "32px",
              }}
            >
              {experiences.map((exp, i) => (
                <div
                  key={exp.id}
                  id={exp.id}
                  className="animate-fade-in-up"
                  style={{
                    position: "relative",
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-31px",
                      top: "6px",
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: exp.accent,
                      boxShadow: `0 0 0 4px ${exp.accent}20`,
                      zIndex: 1,
                    }}
                  />

                  <div
                    className="card glass"
                    style={{ padding: "28px 32px" }}
                  >
                    {/* Header */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "16px",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            marginBottom: "4px",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: exp.accent,
                            }}
                          >
                            {exp.company}
                          </span>
                          <span
                            style={{
                              fontSize: "11px",
                              padding: "2px 8px",
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid var(--border)",
                              borderRadius: "100px",
                              color: "var(--text-muted)",
                              fontWeight: 500,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <span
                        className="code-chip"
                        style={{
                          background: `${exp.accent}10`,
                          borderColor: `${exp.accent}25`,
                          color: exp.accent,
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.8,
                        color: "var(--text-secondary)",
                        marginBottom: "20px",
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        marginBottom: "20px",
                        paddingLeft: 0,
                        listStyle: "none",
                      }}
                    >
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                          }}
                        >
                          <span style={{ color: exp.accent, marginTop: "3px", flexShrink: 0 }}>
                            ▸
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>


                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
