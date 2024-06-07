import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import DoYouNeed from "@/components/DoYouNeed";

export default function Home() {
  return (
    <>
      <Header />
      <DoYouNeed />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
