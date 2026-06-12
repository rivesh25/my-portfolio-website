"use client";

import DotField from "./DotField";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#080b10",
        position: "relative",
        padding: "20px",
        overflow: "hidden"
      }}
    >
      {/* Interactive dot field background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <DotField
            dotRadius={1.5}
            dotSpacing={30}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#38bdf8"
            gradientTo="#38bdf8"
            glowColor="rgba(56, 189, 248, 0.04)"
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, width: "100%", marginTop: "80px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <p
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              color: "var(--text-secondary)",
              marginBottom: "16px",
              fontWeight: 400,
            }}
          >
            👋, My name is Rivesh Kumar and I am a freelance
          </p>
          <h1
            className="animate-fade-in-up delay-100"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 9rem)",
              lineHeight: 1.1,
              marginBottom: "8px",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#fff",
            }}
          >
            Full Stack Developer
          </h1>
          <h2
            className="animate-fade-in-up delay-200"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 9rem)",
              lineHeight: 1.1,
              marginBottom: "16px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.9)",
            }}
          >
            & DevOps Engineer
          </h2>
          <p
            className="animate-fade-in-up delay-300"
            style={{
              marginTop: "24px",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Based in Chandigarh, India.
          </p>

          <div
            className="animate-fade-in-up delay-300"
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <a
              href="https://github.com/rivesh25"
              target="_blank"
              rel="noopener noreferrer"
              className="card glass"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                padding: "0",
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "var(--surface)";
              }}
              aria-label="GitHub"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--text-primary)">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/rivesh-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="card glass"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                padding: "0",
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "var(--surface)";
              }}
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--text-primary)">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            <a
              href="https://x.com/Rivesh25"
              target="_blank"
              rel="noopener noreferrer"
              className="card glass"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                padding: "0",
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "var(--surface)";
              }}
              aria-label="Twitter (X)"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--text-primary)">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
