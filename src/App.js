import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import NavBar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/styles.scss";
//import GA from "./utils/Analytics";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import englishText from "./data/englishText";
import italianText from "./data/italianText";

import Context from "./context";
import { useState } from "react";

function App() {
  const DEFAULT_TEXT_CONTENT = englishText;
  const DEFAULT_LANGUAGE_TOGGLE = false;

  const [textContent, setTextContent] = useState(DEFAULT_TEXT_CONTENT);
  const [languageToggle, setLanguageToggle] = useState(DEFAULT_LANGUAGE_TOGGLE);

  const handleSwitch = () => {
    languageToggle === false
      ? setTextContent(italianText)
      : setTextContent(englishText);
    setLanguageToggle(!languageToggle);
  };

  return (
    <Router>
      {/*   {GA.init() && <GA.RouteTracker />} 8*/}
      <Context.Provider value={{ textContent, handleSwitch }}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Context.Provider>
    </Router>
  );
}

export default App;
