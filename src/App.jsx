import Welcome from "./components/Welcome/Welcome";
import Card from "./components/card";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer.jsx";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Welcome />
      {/* <Card /> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
