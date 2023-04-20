import React, { useState } from "react";
import "./Card.css";

const mockData = [
  {courseId:4,
  courseName:"CST451- Senior Capstone",
  courseDes:"This course will have you develop a project proposal, conduct a feasibility study, learn to protect intellectual property, develop teamwork skills, budgets, design, and a schedule for completing an end-to-end project. ",
  projects:"1",
  courseSkills:"Documentation, Design, Project ",
  courseImg:"https://capstonewriting.com/wp-content/uploads/2020/08/blog_img2-1200x900.jpg"},
  {courseId:5,
    courseName:"ITT307- Cybersecurity Foundations",
    courseDes:"Students learn fundamental concepts of information security including data encryption, security awareness, legal and ethical issues, operational issues, security policies, and attack types.",
    projects:"4",
    courseSkills:"security, encryption",
  courseImg:"https://c8.alamy.com/comp/H3NA29/it-consultant-presenting-tag-cloud-about-information-technology-H3NA29.jpg"},
  {courseId:6,
    courseName:"CST323- Cloud Computing",
    courseDes:"This course examines cloud computing. Students develop applications using a Software-as-a-Service (SaaS) model. The course examines the most important APIs used in leading industry cloud service providers.",
    project:"4",
    courseSkills:"deploying, API, AWS, Heroku, Google Cloud",
    courseImg:"https://dv-website.s3.amazonaws.com/uploads/2018/01/shutterstock_141489301.jpg"},
    {courseId:7,
    courseName:"CST105- Java I",
    courseDes:"This course introduces the fundamental concepts and syntax of the Java programming language. The course focuses on object-oriented techniques in Java with an emphasis on problem solving and fundamental algorithms ",
    project:"4",
    courseSkills:"Object Oriented, Java ",
    courseImg:"https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg"},

    {courseId:8,
      courseName:"CST117- Enterprise Applications Programming I",
      courseDes:"This course provides an introduction to the fundamentals of C# programming language. The course covers program design and development, debugging techniques, structured and objectoriented programming and basic GUI elements.",
      project:"4",
      courseSkills:"Object Oriented, C#, GUI ",
      courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOrIYKLP31iZKh6pRwEtO59jUpNMFpH9m6g&usqp=CAU"},
     
      {courseId:9,
        courseName:"CST201- Algorithms and Data Structures ",
        courseDes:"This course covers classical algorithms and data structures, with an emphasis on implementation and application in solving realworld computational problems. The course focuses on algorithm for sorting, searching, string processing, and graphs. Student learn basic strategies to evaluate divide-and-conquer, recursie backtracking, and algorithm efficiency.",
         project:"4",
        courseSkills:"Algorithms, graphs, sorting ",
        courseImg:"https://static-prod.adweek.com/wp-content/uploads/2018/07/marketer-algorithm-content-2018.png"},
       
       
        {courseId:10,
          courseName:"CST239- Programming in Java II ",
          courseDes:"This course focuses on software development using the Java programming language. The course focuses on advanced objectoriented techniques in Java along with advanced topics including file I/O, generics, collections, multi-threading, networking, and unit testing. ",
          project:"4",
          courseSkills:"Object Oriented, Java ",
          courseImg:"https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg"},
          
          {courseId:11,
            courseName:"CST339- Programming in Java III",
            courseDes:"This course focuses on the development of dynamic web applications using the Spring framework and the Java programming language. Students employ design and programming methodologies to develop secure, highperformance, database driven applications.",
            project:"4",
            courseSkills:"Object Oriented, Java, Spring Boot ",
            courseImg:"https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg"},
        
            {courseId:12,
              courseName:"CST345- Database Design & Development",
              courseDes:"This course provides students with the technical skills required to design and implement a database solution using both relational and non-relational databases. Use data definition language (DDL) to create and delete database objects, and data  manipulation language (DML) to access and manipulate those objects. SQL sub-queries, creating and using views,  understanding and working with data dictionaries, and loading and unloading databases",
              project:"4",
              courseSkills:"DDL, DLM, SQL ",
              courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5sZZ5wAtMw6HjH2hYoPHdUtM8vaYMK3eJA&usqp=CAU"},
          
        

                {courseId:13,
                  courseName:"CST250- Programming in C# II",
                  courseDes:"This course combines coverage of advanced features of the C# programming language with building complex desktop applications. Students acquire advanced techniques in managing program flow, the application lifecycle, security, and data access.",
                   project:"4",
                  courseSkills:".Net, C#",
                  courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOrIYKLP31iZKh6pRwEtO59jUpNMFpH9m6g&usqp=CAU"},
     
            
    
  

];


function CoursePage() {
  const [courses, setCourses] = useState(mockData);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };


  return (

  
    <div className="c">
    <div className="e-bg"></div>
    <div className="d-bg"></div>
   
        <a id="Courses"></a>
 

<div className="titlec" >
    Courses
</div>
<br/>
    <div className="container">
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
                <ul className="card-text">
                  {selectedCourse.courseSkills.split(",").map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedCourse(null)}
                >
                  Back to All Courses
                </button>
                <br/>
              </div>
            </div>
          </div>
          </div>
      
     
      ) : (
        <div className="row">
          {courses.map((course) => (
            <div className="col-sm-6 col-md-4" key={course.courseId}>
              <div
                className="card mb-4"
                onClick={() => handleCourseClick(course)}
              >
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

export default CoursePage;
