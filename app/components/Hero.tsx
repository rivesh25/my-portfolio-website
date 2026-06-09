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

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, width: "100%" }}>
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
              fontSize: "clamp(3rem, 8vw, 9rem)",
              lineHeight: 0.9,
              margin: 0,
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
              fontSize: "clamp(3rem, 8vw, 9rem)",
              lineHeight: 0.9,
              marginBottom: "10px",
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
        </div>
      </div>
    </section>
  );
}
