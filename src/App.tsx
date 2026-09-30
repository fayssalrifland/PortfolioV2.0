import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import HowIBuild from "./sections/HowIBuild";
import WhyWorkWithMe from "./sections/WhyWorkWithMe";
import GithubSection from "./sections/GithubSection";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <HowIBuild />
        <WhyWorkWithMe />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
