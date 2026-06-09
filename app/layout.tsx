import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rivesh — Full Stack Developer",
  description:
    "Full Stack Developer specializing in building exceptional digital experiences. Passionate about clean code, scalable systems, and modern UI.",
  keywords: ["Full Stack Developer", "React", "Node.js", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Rivesh — Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
