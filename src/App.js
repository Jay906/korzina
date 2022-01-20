import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stores from "./components/Stores";
import Info from "./components/Info";
import About from "./components/About";

function App() {
  return (
    <div className="main">
      <Nav />
      <Hero />
      <Stores />
      <Info />
      <About />
    </div>
  );
}

export default App;
