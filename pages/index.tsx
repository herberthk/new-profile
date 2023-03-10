import About from "../components/about/About";
import Awards from "../components/awards/Awards";
import Bottom from "../components/bottom/Bottom";
import Experience from "../components/experience/Experience";
import Header from "../components/header/Header";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Awards />
      <Projects />
      <Bottom />
    </>
  );
};

export default Home;
