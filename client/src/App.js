import Nav from "./Components/Nav";
import Head from "./Components/Head";
import About from "./Components/About";
import "./Common.scss";

const App = () => {
  return (
    <div className="body">
      <Nav />
      <Head />
      <About />
    </div>
  );
};

export default App;
