import Intro from "../components/intro";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
// import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
export default function Home() {
  return (
    <main className="">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
