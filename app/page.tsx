import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Component as FlickeringFooter } from "./components/FlickeringFooter";
import Blogs from "./components/Blogs";

export default function Home() {
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
        <Blogs />
        <Contact />
      </main>
      <FlickeringFooter />
    </>
  );
}
