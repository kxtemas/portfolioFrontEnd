import React from "react";
import "./Home.css";
import logo from "../../img/logo.png";
import Typewriter from "typewriter-effect";

  /**
 * Date: 02/12/22
 * Author: Katie Munoz
 * Description: The Home page where it includes the logo, type effect and toggle with the navbar and a responsive page with a hamburger navbar option. 
 * The toggle allows a light/dark background that changes the font color and background to white or black.
 * Version: 2.
 */ 
function Home() {
  return (
    <div className="i">
      {/* left section of the home page */}
      <div className="i-left">
        <div className="i-left-wrapper">
          <a id="HomePage"></a>
          {/* a header with the website name */}
          <div className="App">
            <h1 className="i-name">Welcome to KatieDev</h1>
          </div>
          {/* a description of the website with a typewriter effect */}
          <p className="i-desc">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(20)
                  .typeString("The creation of “KatieDev” , a portfolio Webpage utilizing what students have learned as a Software Development major at Grand Canyon University. The project is meant to advertise students to potential hiring companies with a unique “resume”. The webpage will include the courses students have taken over under the degree program with description to each. A glimpse of projects I have completed outside and inside the program with a description to each. A separate page that list the skills and abilities students have possessed with an introduction to the student . A contact page will then be available with a contact from via email and links to social media such as Linkedln.") 
                  .pauseFor(10000)
                  .start();
              }}
            />
          </p>
        </div>
      </div>
      
      {/* right section of the home page */}
      <div className="i-right">
        <div className="i-bg"></div>
        {/* a logo image */}
        <img src={logo} className="i-img" alt="logo" />
      </div>
    </div>
  );
}

export default Home;