import React from "react";
import "./portfolio.css";
import Github from "../../img/github.png";
import Link from "../../img/Resume.pdf";

/**
 * Date: 02/12/22
 * @author Katie Munoz
 * @version 2.
 *
 */ 

function Portfolio() {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <a id="Portfolio"></a>

          <h1 className="c-titles">Katie Munoz</h1>
          <a href={Link} download="resume.pdf">Resume</a>
          <div className="c-info">
            <div className="c-info-item">
              <p className="c-left">
                <b>Contact</b>
                <p></p>
                Phone Number: 623-238-2542  <br />
                Email: kxtemas01@gmail.com
                <br />
                <a href="https://www.linkedin.com/in/katiemunoz01" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" /></a>
              </p>

            </div>
          </div>
          <p className="c-descs">
            <b>Career Objectives</b>
            <p></p>
            Katie is a Senior at Grand Canyon University working towards a Bachelor's Degree in Software Development. She is a dedicated student with a passion for growing her knowledge in the software development field. This field of study has provided greater experience in Object Oriented Programming and Java, as well as extensive experience with PHP and C# programming languages. Within these languages, Katie has experience with HTML, CSS, and JavaScript, particularly AJAX, for front end development, MVC design patterns within the Laravel and ASP.NET Core frameworks, and MySQL database design and manipulation. She is a quick learner with a passion for creating quality work.
          </p>
          <p></p>
          <b>Skills</b>
          <p></p>
          <p align="left">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
            <a href="https://www.php.net/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" width="36" height="36" alt="PHP" /></a>
            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" width="36" height="36" alt="C#" /></a>
            <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="36" height="36" alt="Java" /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
            <a href="https://angular.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg" width="36" height="36" alt="Angular" /></a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
          </p>


          <div className="c-desc">


            <p className="c-right">

            </p>
            <p className="c-descs">
              <b>Education</b>
              <p></p>
              Bachelor of Science in Software Development  <br></br>
              Grand Canyon University, Arizona, USA <br></br>
              Expected Graduation Date: April 2023  <br></br>

              Pursuing a bachelor's degree in Software Development with a focus on developing in-depth knowledge and skills in software design, development, and testing.
              Maintaining a 3.7 GPA, demonstrating a strong academic record and a commitment to academic excellence.
              Participated in several software development projects, including designing, coding, and testing applications using various programming languages and tools.
              Completed coursework in advanced topics such as data structures, algorithms, software design patterns, databases, and web development.
              Participated in team-based projects, developing strong collaboration and communication skills and a solid understanding of software development methodologies.
            </p>
            <p className="c-descs">
              <b>Work Experience</b>
              <p></p>
              MEMBER SALES REPRESENTATIVE, Surprise, AZ <br></br>
              United PF, LLC, April 2021-Present <br></br>
              Followed company procedures to count and manage funds received from customers.
              Offered best-in-class service to members through prompt, courteous and professional interactions. Provided excellent customer service by assisting, responding to and resolving customer inquiries. Trained staff on office procedures and software applications, driving operations.
              Assisted with new hire orientation and employee training.
              Troubleshot minor problems and reported larger technical issues.
              <p></p>
              SHIFT MANAGER, Surprise, AZ <br></br>
              AGK Restaurants, February 2019-March 2021<br></br>
              Completed incident reports needed to document damage, theft or personal injury claims.
              Tracked store inventories and replenished item levels by ordering new products.
              Tracked employee progress and implemented corrective actions to minimize mistakes and promote growth. Created staff teams and delegated work tasks to increase productivity.
              Promoted customer satisfaction by addressing complaints and issuing refunds.
              Set employee schedules and made staffing adjustments to get shifts covered.
              Balanced cash drawers and resolved financial discrepancies using receipts and financial document
            </p>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Portfolio;