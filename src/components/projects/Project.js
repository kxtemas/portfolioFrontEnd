import React, { useState } from "react";
import "./Projects.css";


const mockData = [
  {
    projectId: 1,
    projectName: "CAPSTONE",
    projectDes: "KATIEDEV is a project to show the students skills while attending GCU.",
    courseId: "4",
    projectSkills: "Cloud Deployment",
    projectFw: "React, Java",
    projectImg: "https://raw.githubusercontent.com/kxtemas/New-Backend-Repository/main/logo.png",
  },
  {
    projectId: 2,
    projectName: "In'Book",
    projectDes: "This overall ecommerace project is to allow users to login and register and have the availabilty to add products to their cart.",
    courseId: "4",
    projectSkills: "Java, MySql, HTML",
    projectFw: "SpringBoot",
    projectImg: "https://raw.githubusercontent.com/kxtemas/CSTCLC235/master/WebContent/resources/images/siteLogo.png",
  },
  {
    projectId: 6,
    projectName: "Uriel Drywall",
    projectDes: "This is a peresonal project being a websie for my dad's side job. He is able to list his services and show the gallary of work he has done. Clients may request a quote by filling out the form which will send an email to my father's email with the clint's information.    ",
    courseId: "4",
    projectSkills: "php, MySql",
    projectFw: "Laravel",
    projectImg: "https://raw.githubusercontent.com/kxtemas/UrielsDrywall/01822f6bc01f71a3933357d72d1c89e2c56d3b2a/RoutesAndViews/public/assets/img/Screen%20Shot%202023-04-19%20at%2010.35.28%20PM.png",
    
  },
  {
    projectId: 3,
    projectName: "Bible Search",
    projectDes: "This assessment was created to be able to create project where users are able to search for a bible verse by inserting the Book Name, Chapter Number and Verse Number and even selecting a transation version such as ESV and NIV.",
    courseId: "4",
    projectSkills: "restAPI, C#",
    projectFw: "c#, MVC",
    projectImg: "https://drive.google.com/uc?export=view&id=109byvSOxoYibjTe6MK0uZhmX9JkAw00M",
  },
  {
    projectId: 4,
    projectName: "Hire Me Job Search",
    projectDes: "This overall project is a job posting project where the admin are able to create, edit and delete their posting. Potential employees are able to enroll for a job and join a community group. There is a login and registration form available as well.",
    courseId: "4",
    projectSkills: "php, MySql",
    projectFw: "Laravel",
    projectImg: "https://raw.githubusercontent.com/kxtemas/CLC1---CST256/main/Screen%20Shot%202023-04-19%20at%209.28.15%20PM.png?token=GHSAT0AAAAAACBURUH7RRDABEAQGEXOYSKIZCAY3UA",
  },
  {
    projectId: 5,
    projectName: "Minesweeper",
    projectDes: "This overalll project is a minesweeper game where user may create a account and login to beat other users according to the score board. This project uses ASP .Net Core and the MVC framework.",
    courseId: "4",
    projectSkills: "C#, MySql",
    projectFw: ".Net, MVC›",
    projectImg: "https://raw.githubusercontent.com/AnaOddles/MinesweeperWeb/master/MinsweeperWeb/wwwroot/img/minesweeper.jpeg",
    
  },
  {
    projectId: 7,
    projectName: "Adventure Tour Package",
    projectDes: "This project uses N-layer architecture in the Spring Boot framework to allow customers to see an arrray of options for their vacation using Spring Beans, Spring Core and a DI.",
    courseId: "4",
    projectSkills: "Java, MySql, AWS Cloud Deployment",
    projectFw: "Spring Boot",
    projectImg: "https://drive.google.com/uc?export=view&id=1sNQI-WfNR-mkXS0p8aNXvRIIs6vYsRvp",
    
  },
 
];

function ProjectPage() {
  const [projects, setProjects] = useState(mockData);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="c">
      <div className="e-bg"></div>
      <div className="d-bg"></div>
      <a id="Projects"></a>
      <div className="titlec">Projects</div>
      <br />
      <div className="container">
        {selectedProject ? (
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card mb-4">
                <img
                  className="card-img-top"
                  src={selectedProject.projectImg}
                  alt={selectedProject.projectName}
                />
                <div className="card-body">
                  <h5 className="card-title">{selectedProject.projectName}</h5>
                  <p className="card-text">{selectedProject.projectDes}</p>
                  <h6 className="card-text">Skills</h6>
                  <ul className="card-text">
                    {selectedProject.projectSkills.split(",").map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <h6 className="text">Frameworks</h6>
                  <p className="card-text">{selectedProject.projectFw}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Back to All Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            {projects.map((project) => (
              <div className="col-sm-6 col-md-4" key={project.projectId}>
                <div
                  className="card mb-4"
                  onClick={() => handleProjectClick(project)}
                >
                  <img
                    className="card-img-top"
                    src={project.projectImg}
                    alt={project.projectName}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.projectName}</h5>
                    <p className="card-text">{project.projectDes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
