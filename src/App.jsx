import "./App.scss";
import About from "./section/about/About";
import Hero from "./section/hero/Hero";
import Skills from "./section/skills/Skills";
function App() {
  return (
    <div className="app">
      <Hero />
      <Skills />
      <About/>
    </div>
  );
}

export default App;
