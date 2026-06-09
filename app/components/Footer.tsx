"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        padding: "40px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="gradient-text">R</span>
            <span style={{ color: "var(--text-primary)" }}>ivesh</span>
            <span style={{ color: "var(--accent)" }}>_</span>
          </a>

          <p
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              textAlign: "center",
            }}
          >
            Designed & built by{" "}
            <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
              Rivesh
            </span>{" "}
            · {year}
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { label: "GitHub", href: "https://github.com", id: "footer-github" },
              { label: "LinkedIn", href: "https://linkedin.com", id: "footer-linkedin" },
              { label: "Twitter", href: "https://twitter.com", id: "footer-twitter" },
            ].map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-size: 13px;
          color: var(--text-muted);
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .footer-link:hover {
          color: var(--text-primary);
        }
      `}</style>
    </footer>
  );
}
