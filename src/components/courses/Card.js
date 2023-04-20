import React from "react";
import ViewCourse from "./OneCourse.js";
import "./Card.css";

class Card extends React.Component{

    handleOnClick = (event) => {
        console.log("id clicked: ", this.props.courseId)
        this.props.onClick(this.props.courseId)
    }

    handleCourseView = () => {
ViewCourse(this.props.courseId)
    }

    render() {
        return (
        
    
           
            <div className="card">
                <img src={this.props.courseImg} className="card-img-top" alt={this.props.courseName}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.courseName}</h5>
                    <p className="card-text">{this.props.courseDescription}</p>
                    <p className="card-text">{this.props.courseSkills}</p>
                   <button onClick={this.handleCourseView} className="btn btn-success">View</button>
                </div>

                <br/>
            </div>
    
            
        
          
        )
    }
}

export default Card;