import React from "react";
import "./Home.css";
import logo from "../../img/logo.png";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
        <a id="HomePage"></a>
          <h2 className="i-intro"> Hello, My name is</h2>
          <div className="App">
     
    </div>
          <h1 className="i-name"> Katie Munoz</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Web Designer</div>
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">Software Developer</div>
            </div>
          </div>

          <p className="i-desc">
          <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Welcome to my software developer portfolio website! My goal as a developer is to create innovative and user-friendly software that not only meets but exceeds the expectations of my clients and users. ")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("I hope that this portfolio will give you a glimpse into my passion for software development and the value I can bring to your project. If you have any questions or are interested in working together, please don't hesitate to get in touch. Thank you for visiting my portfolio website!")
  .start();
  
  }}
  />

          </p>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={logo} className="i-img" alt="logo" />
      </div>
    </div>
  );
}

export default Home;