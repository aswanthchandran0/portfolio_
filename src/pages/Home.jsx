import SEO from "../components/SEO";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <SEO />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <About />
      </main>
      <Contact />
    </>
  );
}
