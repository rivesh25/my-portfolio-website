import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Component as FlickeringFooter } from "./components/FlickeringFooter";
import Blogs from "./components/Blogs";
import { client } from "./lib/sanity";

// Next.js ISR/SSG configuration for this route
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "authorName": author->name,
    "categories": categories[]->title,
    "excerpt": array::join(string::split((pt::text(body)), "")[0...120], "") + "..."
  }`;
  
  const latestBlogs = await client.fetch(query);

  return (
    <>
      {/* Fixed ambient background  */}
      <div className="bg-noise" aria-hidden />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blogs blogs={latestBlogs} />
        <Contact />
      </main>
      <FlickeringFooter />
    </>
  );
}
