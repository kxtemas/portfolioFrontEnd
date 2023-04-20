import React from "react";
import axios from "axios";


class OneCourse extends React.Component {
    state = {
        id:this.props.course.courseId,
       name:this.props.album.courseName,
        description:this.props.course.courseDes,
       skills:this.props.course.courseSkills,
        image:this.props.course.courseImg,
    

    }

   

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("Form Submit = ", this.state)
        this.saveAlbum(this.state)
    }
      
    render() {
        console.log("Props for Onealbum", this.props)
        return(
            <div className="container">
              
                <div className="row">
                    <div className="col col-sm-3">
                        <div className="card">
                            <img src={this.props.courseImg} className="card-img-top" alt="Harry Styles"/>
                            <div className="cart-body">
                                <h5 className="card-title">{this.props.courseName}</h5>
                                <p className="card-text"> {this.props.courseDes}</p>
                                <p className="card-text"> {this.props.courseSkills}</p>
                                <div className="list-group">
        
                                </div>
                                <a href="#" className="btn btn-primary">Edit</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-9">
                     
                    </div>
                </div>
            </div>

        )
    }
}
export default OneCourse