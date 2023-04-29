import { useState, useEffect } from "react";
import CourseService from "./CourseService";
import "./Card.css";

function Courses() {
// useState() is used to initialize two variables courses and selectedCourse
const [courses, setCourses] = useState([]);
const [selectedCourse, setSelectedCourse] = useState(null);

// useEffect() is used to get the courses data from the API using CourseService
useEffect(() => {
CourseService.getCourses()
.then((response) => {
setCourses(response.data);
})
.catch((error) => {
console.log(error);
});
}, []);

// This is a handler function to handle the course click event
const handleCourseClick = (course) => {
setSelectedCourse(course);
};

// The component returns a div with classname 'c' which contains several other divs and components
return (
    <div className="c">
      <div className="e-bg"></div>
      <div className="d-bg"></div>
      <a id="Courses"></a>

      <div className="titlec">Courses</div>
      <br />
      <div className="container">
        {/* If a course is selected, show its details */}
    {selectedCourse ? (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mb-4">
            <img
              className="card-img-top"
              src={selectedCourse.courseImg}
              alt={selectedCourse.courseName}
            />
            <div className="card-body">
              <h4 className="card-title">{selectedCourse.courseName}</h4>
              <p className="card-text">{selectedCourse.courseDes}</p>
              <p className="card-text">Skills</p>
              {/* Display the course skills as a list */}
              <ul className="card-text">
                {selectedCourse.courseSkills
                  .split(",")
                  .map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
              </ul>
              {/* Button to go back to all courses view */}
              <button
                className="btn btn-primary"
                onClick={() => setSelectedCourse(null)}
              >
                Back to All Courses
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    ) : (
      // Show all courses if a course is not selected
      <div className="row">
        {courses.map((course) => (
          // Each course is displayed as a card
          <div
            className="col-sm-6 col-md-4"
            key={course.courseId}
            onClick={() => handleCourseClick(course)}
          >
            <div className="card mb-4">
              <img
                className="card-img-top"
                src={course.courseImg}
                alt={course.courseName}
              />
              <div className="card-body">
                <h5 className="card-title">{course.courseName}</h5>
                <p className="card-text">{course.courseDes}</p>
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

export default Courses;