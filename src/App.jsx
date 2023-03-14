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
  const [isTransitionning, setIsTransitionning] = useState(false);

  return (
    <div className="App">
      <BackgroundAnimation />
      <Header
        language={language}
        setLanguage={setLanguage}
        isTransitionning={isTransitionning}
        setIsTransitionning={setIsTransitionning}
      />
      <Welcome language={language} isTransitionning={isTransitionning} />
      <About language={language} isTransitionning={isTransitionning} />
      <Projects language={language} isTransitionning={isTransitionning} />
      <Footer />
    </div>
  );
}

export default App;
