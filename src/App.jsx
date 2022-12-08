import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer.jsx";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
