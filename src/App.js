import React, { useContext, useState } from "react";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context.js";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/portfolio.jsx";
import ProjectInfo from "./components/projectinfo/projectinfo.jsx";
import Course from "./components/courses/Course.js";
import Project from "./components/projects/Project.js";
const App = () => {

  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [toggled, setToggled] = useState(false);
  const handelClick = () => {
    setToggled((s) => !s);
  };
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "black",
      }}>
      <Navbar />
      <Toggle toggled={toggled} onClick={handelClick} />
    
      <Home />
 
      <ProjectInfo/>
      <Course/>
      <Project/>
      <Portfolio />
      <About />
      <Contact />





    </div>

  );
};

export default App;