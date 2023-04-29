import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectService from "./ProjectService";

// Define the ProjectPage component
function ProjectPage() {
  // Define state for projects and the currently selected project
  const [projects, setProjects] = useState(mockData);
  const [selectedProject, setSelectedProject] = useState(null);

  // Event handler for when a project card is clicked
  const handleProjectClick = (project) => {
    setSelectedProject(project); // Set the selected project to the clicked project
  };

  // Render the component
  return (
    <div className="c">
      <div className="e-bg"></div>
      <div className="d-bg"></div>
      <a id="Projects"></a>
      <div className="titlec">Projects</div>
      <br />
      <div className="container">
        {selectedProject ? ( // If a project is selected, show its details
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
        ) : ( // Otherwise, show all projects
          <div className="row">
            {projects.map((project) => ( // Map over the projects and create a card for each one
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