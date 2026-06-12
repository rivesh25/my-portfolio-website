"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div
          className="animate-fade-in-up"
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span className="tag" style={{ justifyContent: "center" }}>
            Contact
          </span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Let&apos;s Build Something Together
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Have a project in mind, or just want to say hi? My inbox is always
            open — I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="animate-fade-in-up delay-100 contact-bg-container"
          style={{
            width: "100%",
            margin: "0 auto",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
            padding: "60px 5%",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* Background Image Layer */}
          <div
            className="contact-bg-image"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "url('/contact-bg.jpg') center/cover no-repeat",
              zIndex: 0,
              transition: "filter 0.5s ease",
            }}
          />

          {/* Contact form aligned to the right */}
          <div
            className="card glass contact-card"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: "500px",
              background: "rgba(20, 20, 20, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3 className="contact-heading">
              Send me a message
            </h3>
            <p className="contact-subheading">
              Fill out the form below and I&apos;ll be in touch soon.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
                className="form-row"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      marginBottom: "8px",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="hidden"
                    name="title"
                    value={`New message from ${form.name || "a visitor"}`}
                  />
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      fontSize: "14px",
                      outline: "none",
                      transition: "all 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(56, 189, 248, 0.6)";
                      e.target.style.background = "rgba(0,0,0,0.6)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.1)";
                      e.target.style.background = "rgba(0,0,0,0.4)";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email-input"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      marginBottom: "8px",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email-input"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                      color: "var(--text-primary)",
                      fontSize: "14px",
                      outline: "none",
                      transition: "all 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(56, 189, 248, 0.6)";
                      e.target.style.background = "rgba(0,0,0,0.6)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.1)";
                      e.target.style.background = "rgba(0,0,0,0.4)";
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    outline: "none",
                    transition: "all 0.2s ease",
                    fontFamily: "inherit",
                    resize: "vertical",
                    lineHeight: 1.7,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(56, 189, 248, 0.6)";
                    e.target.style.background = "rgba(0,0,0,0.6)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.background = "rgba(0,0,0,0.4)";
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary contact-submit-btn"
                style={{
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ animation: "spin-slow 1s linear infinite" }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Sent
                  </>
                ) : status === "error" ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    Error Sending
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-7 20-4-9-9-4 20-7z" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-bg-image {
          filter: grayscale(100%);
        }
        .contact-bg-container:hover .contact-bg-image {
          filter: grayscale(0%);
        }
        .contact-card {
          padding: 40px;
        }
        .contact-heading {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
          text-align: center;
        }
        .contact-subheading {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 32px;
          text-align: center;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-submit-btn {
          width: 100%;
          padding: 16px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 24px 20px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .contact-heading {
            font-size: 20px;
            margin-bottom: 4px;
          }
          .contact-subheading {
            font-size: 12px;
            margin-bottom: 20px;
          }
          .contact-form {
            gap: 14px;
          }
          .contact-submit-btn {
            padding: 12px;
            font-size: 14px;
            margin-top: 0px;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
