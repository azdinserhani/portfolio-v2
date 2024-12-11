import "./App.scss";
import About from "./section/about/About";
import Contact from "./section/contact/Contact";
import Hero from "./section/hero/Hero";
import Project from "./section/project/Project";
import Skills from "./section/skills/Skills";
function App() {
  return (
    <div className="app">
      <Hero />
      <Skills />
      <About />
      <Project />
      <Contact/>
    </div>
  );
}

export default App;
