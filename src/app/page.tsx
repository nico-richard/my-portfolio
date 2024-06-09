import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import DoYouNeed from "@/components/DoYouNeed";
import Test from "@/components/Test";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Test></Test> */}
      <DoYouNeed />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
