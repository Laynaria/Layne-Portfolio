import Welcome from "./components/Welcome/Welcome";
import Card from "./components/card";
import Projects from "./components/Projects/Projects";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Welcome />
      {/* <Card /> */}
      <Projects />
    </div>
  );
}

export default App;
