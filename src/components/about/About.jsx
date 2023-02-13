import React from "react";
import "./About.css";
import katie from "../../img/katie.JPEG";
import Typewriter from "typewriter-effect";
function About() {


  return (

    <div>

      <a id="About"></a>
      <div className="a" >

        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={katie} className="i-img" alt="katie" />
          </div>
        </div>

        <div className="a-right">

          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            Let's get to know me!
          </p>
          <p className="a-desc">

            <Typewriter


              onInit={(typewriter) => {
                typewriter
                  .changeDelay(40)
                  .typeString("Hi, I'm Katie Munoz! I'm a 21-year-old Arizona native with a passion for the great outdoors and art. Growing up in this beautiful state has given me a love for hiking and the opportunity to capture the natural beauty through painting. I come from a close-knit, loving family and am grateful for the relationships I have with them. In March, I am excited to start a new chapter in my life as I tie the knot with my sweet fiancé." +
                    "When I'm not exploring the local trails, you can find me cuddled up with my two beloved dogs - a Shih Tzu and a Border Collie. Green is my favorite color and it brings a pop of joy to my life." +
                    "Thank you for visiting my portfolio and learning a little about me. I hope to bring my love for nature and art to your projects and create something truly beautiful.")
                  .pauseFor(10000)
                  .start();

              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;