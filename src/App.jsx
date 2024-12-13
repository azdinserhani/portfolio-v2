import "./App.scss";
import SideBar from "./components/sidebar/SideBar";
import About from "./section/about/About";
import Contact from "./section/contact/Contact";
import Hero from "./section/hero/Hero";
import Project from "./section/project/Project";
import Skills from "./section/skills/Skills";
import Cursor from "./components/cursor/Cursor"
function App() {
  return (
    <div className="app">
      <Cursor />

      <SideBar />
      <Hero />
      <Skills />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
