import Nav from "./Components/Nav";
import Head from "./Components/Head";
import About from "./Components/About";
import Skills from "./Components/Skills";
import "./Common.scss";

const App = () => {
  return (
    <div className="body">
      <Nav />
      <Head />
      <About />
      <Skills />
    </div>
  );
};

export default App;
