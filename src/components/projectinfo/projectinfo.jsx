import React from "react";
import "./projectinfo.css";
import Github from "../../img/github.png";
import Link from "../../img/Resume.pdf";

/**
 * Date: 02/12/22
 * @author Katie Munoz
 * @version 2.
 *
 */ 

function projectinfo() {
  return (
    <div className="c">
      <div className="e-bg"></div>
      <div className="d-bg"></div>
      <div className="c-wrapper">
      <div className="c-left">
          <a id="Projectinfo"></a>

<div className="titlec" >
       Project Information
</div>
  <br/>
         
         <div class="rc" data-title="Introduction">
            <br/>
           
              The project is being undertaken to create a unique resume for potential job opportunities. The creation of this project will prove that students are sufficient in different technology stacks and capable of enrolling as a full-stack developer by planning, documenting, creating, developing a webpage that will be uploaded to the cloud.
Include pertinent background is one of the key characteristics of a project to explain why the project should be initiated, what the prerequisites are, and what results are supposed to be obtained at the successful completion.
The project is being initiated to solve the world dilemma of college students entering the career field upon completion of a degree but unable to qualify or land a job under their degree. The portfolio website will set apart applicants by showcasing the applicant skills and abilities to the business/ Not only does it showcase their skills but includes everything a company needs to know about the applicant under one webpage with an easy to follow user interface.

              <br/>
           
            </div>
            
         <div class="lc" data-title="Technologies">
          <br/>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
            <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="36" height="36" alt="Java" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
           
          </div>
      
         
       

          <div class="lc" data-title="Why these technologies?">
                <br/>
                This project will encounter challenges that will be addressed amongst the team to reach a level of confidence in popular frameworks in the industry. The team will create a portfolio webpage that will allow job employers to view a remarkable online resume made from one of the most in-demand frameworks being JavaScript and React. According to the 2020 Developer Survey, JavaScript and React were listed on of the top languages and frameworks. This allowed the team to make an assumption to carry the project with the most in-demand software. The webpage will include what a majority of job employers seek when hiring a candidate. The backend is using springboot and mongodb while the front end uses react with javascript which is then deployed onto AWS.
                <br/>
  <br/>
                Technologies that I learned for this capstone was react and a touch up on AWS. Springboot and java were well known however react and javascript were learned throughout the project. I choose these technlogies to better understand current up to data software practice in the current industry. 
           
              </div>
              <br/>
              <div class="rc" data-title="Techincal Approach">
            <br/>
      
The approach is to document, develop and deploy the portfolio webpage onto the web. This will be done using the Spring boot software to develop the backend and front end. JavaScript ES6 will be used to code the backend which will follow with the MVC framework. This design will include separate packages for the model, business and data components. The front end will be developed using React v18.0 to create the pleasing user interface with easy navigation. The webpage will be deployed using AWS elastic beanstalk which is a free compatible hosting page. The team will create a portfolio webpage that will allow job employers to view a remarkable online resume made from one of the most in-demand frameworks being JavaScript, React and deployed onto one of the most popular hosting clouds, AWS. 
<br/>
To view the a variety of design diagrams, class diagrams, etc please visit the documentation tab.

            
             </div>
           
              <div class="lc" data-title="Risk & Challenges">
           <br/>
           <li>
           The ability to finish and create all listed features. The project should include all features listed in the timeframe that is posted. Time management will be the main focus to make sure everything is acquired in time. </li>
           <li>The ability to work with React for the user interface.	React will be used to design the front end, it will be a challenge as our team has no prior experience with this framework.</li>
           <li>	Learn and utilize new tools and frameworks.	The project will include unfamiliar tools and features that have not been implemented with prior projects. Researching and learning about the tools will bring completion to the project.</li>

           <br/>
           These challenges were overtaken by spending time on tutorials and watching lectures about the software program. The risk management approaches taken to approach the issues were by creating a safety plan with deadlines on which risks need to be solved. This was done by submitting a weekly status on how many hours were spent on each challenege.
          </div>
          <div class="lc" data-title="Outstanding Issues">
           <br/>
              <li>AI Chatbot</li> 
              
           
            </div>

            <br/>
         
           
           
          </div>
        </div>
      </div>



  );
}

export default projectinfo;