"use client";

import Image from "next/image";

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
      { name: "JavaScript", icon: "/icons/javascript.png" },
      { name: "TypeScript", icon: "/icons/typescript.png" },
      { name: "React.js", icon: "/icons/reactjs.png" },
      { name: "Next.js", icon: "/icons/nextjs.png" },
      { name: "GSAP", icon: "/icons/gsap.jpg" },
      { name: "Three.js", icon: "/icons/threejs.png" },
      { name: "Figma", icon: "/icons/figma.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/nodejs.png" },
      { name: "Express", icon: "/icons/expressjs.png" },
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "Supabase", icon: "/icons/supabase.png" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Linux", icon: "/icons/linux.png" },
      { name: "Proxmox", icon: "/icons/proxmox.png" },
      { name: "Vagrant", icon: "/icons/vagrant.png" },
      { name: "Git", icon: "/icons/git.png" },
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "Jenkins", icon: "/icons/jenkins.png" },
      { name: "AWS", icon: "/icons/aws.png" },
      { name: "Azure", icon: "/icons/azure.png" },
      { name: "GCP", icon: "/icons/google-cloud.png" },
      { name: "Terraform", icon: "/icons/terraform.png" },
      { name: "Ansible", icon: "/icons/ansible.png" },
      { name: "Nginx", icon: "/icons/nginx.png" },
    ],
  },
  {
    category: "No Code Tools",
    items: [
      { name: "WordPress", icon: "/icons/wordpress.png" },
      { name: "Shopify", icon: "/icons/shopify.png" },
      { name: "Wix", icon: "/icons/wix.png" },
      { name: "Squarespace", icon: "/icons/squarespace.png" },
      { name: "Webflow", icon: "/icons/webflow.svg" },
      { name: "n8n", icon: "/icons/n8n.png" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div
          className="animate-fade-in-up"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="tag">Skills</span>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "8px" }}>
            My Tech Stack
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A curated set of tools and technologies I use to craft scalable,
            production-ready applications.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            marginTop: "20px",
          }}
        >
          {skillsData.map((category, ci) => (
            <div
              key={category.category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${ci * 0.1}s` }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "20px",
                  fontFamily: "'JetBrains Mono', monospace",
                  textAlign: "center",
                }}
              >
                {category.category}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  justifyContent: "center",
                }}
              >
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="card glass"
                    style={{
                      padding: "20px 32px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      borderRadius: "16px",
                      transition: "all var(--transition)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.borderColor = "var(--border-hover)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
