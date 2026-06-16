import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rivtech.me"),
  title: {
    default: "Rivesh — Full Stack Developer",
    template: "%s | Rivesh Kumar"
  },
  description:
    "Full Stack Developer specializing in building exceptional digital experiences. Passionate about clean code, scalable systems, and modern UI.",
  keywords: ["Full Stack Developer", "React", "Node.js", "TypeScript", "Portfolio", "Web Development", "Next.js"],
  authors: [{ name: "Rivesh Kumar" }],
  creator: "Rivesh Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rivtech.me",
    title: "Rivesh — Full Stack Developer",
    description: "Full Stack Developer specializing in building exceptional digital experiences.",
    siteName: "Rivesh Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivesh — Full Stack Developer",
    description: "Full Stack Developer specializing in building exceptional digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script id="schema-person" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rivesh Kumar",
              "url": "https://rivtech.me",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://github.com/rivesh25",
                "https://www.linkedin.com/in/rivesh-kumar/",
                "https://x.com/Rivesh25"
              ]
            }
          `}
        </Script>
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

