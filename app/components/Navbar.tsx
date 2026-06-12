"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Fix cross-page hash scrolling
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // slight delay to allow page rendering
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: scrolled ? "16px" : "24px",
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "0 5%",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "1100px",
          borderRadius: "40px",
          transition: "all 0.3s ease",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,0.3)"
            : "0 4px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            padding: "0 34px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {/* <span className="gradient-text">Rivesh</span> */}
            <span style={{ color: "var(--text-primary)" }}>Rivesh Kumar</span>
            <span
              style={{
                color: "var(--accent)",
                animation: "blink 1.2s step-end infinite",
              }}
            >
              _
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  color:
                    activeSection === link.href
                      ? "var(--text-primary)"
                      : undefined,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn btn-primary"
              style={{ padding: "9px 20px", fontSize: "14px" }}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
            className="show-mobile"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : menuOpen && i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : menuOpen && i === 1
                          ? "scaleX(0)"
                          : "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: "transparent",
              borderTop: "1px solid var(--border)",
              padding: "20px 24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color:
                    activeSection === link.href
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
              style={{ width: "fit-content" }}
            >
              Hire Me
            </Link>
          </div>
        )}

        <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      </nav>
    </div>
  );
}
