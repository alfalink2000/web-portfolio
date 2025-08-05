import { React, useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { ReactAdvantages } from "./components/ventajas/ReactAdvantages";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "./styles/app/App.css";

import AOS from "aos";
import "aos/dist/aos.css";

export function App() {
  const [language, setLanguage] = useState("es"); // Estado del idioma

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <About language={language} />
      <Skills language={language} />
      <ReactAdvantages language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}
