import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero name="Anouar Essabiri" title="Creative Developer" />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
