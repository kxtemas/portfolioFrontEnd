import React from "react";
import ViewCourse from "./OneCourse.js";
import "./Card.css";

class Card extends React.Component{

// Function to handle when the card is clicked
handleOnClick = (event) => {
    console.log("id clicked: ", this.props.courseId)
    this.props.onClick(this.props.courseId)
}

// Function to handle when the view button is clicked
handleCourseView = () => {
    // Calls the ViewCourse function and passes the course ID as a parameter
    ViewCourse(this.props.courseId)
}

// Render method to render the component
render() {
    return (
        // Card element with course information
        <div className="card">
            <img src={this.props.courseImg} className="card-img-top" alt={this.props.courseName}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.courseName}</h5>
                <p className="card-text">{this.props.courseDescription}</p>
                <p className="card-text">{this.props.courseSkills}</p>
                  // Button to view course details and onClick event to call handleCourseView function
               <button onClick={this.handleCourseView} className="btn btn-success">View</button>
            </div>
            <br/>
        </div>
    )
}
}

// Exporting Card component
export default Card;