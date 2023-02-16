import { useState } from "react";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer.jsx";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import "./App.scss";

function App() {
  const [language, setLanguage] = useState("fr");

  return (
    <div className="App">
      <BackgroundAnimation />
      <Header language={language} setLanguage={setLanguage} />
      <Welcome language={language} />
      <About language={language} />
      <Projects language={language} />
      <Footer />
    </div>
  );
}

export default App;
