import axios from "axios";


class CourseService {
    //This class provides a method to retrieve courses from a backend server using Axios library for HTTP requests.

    async getCourses() {
        // getCourses method uses axios library to get the list of courses from the backend API 
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
//The URL endpoint for the GET request is provided
        const response = await axios.get("http://backendkm-env.eba-qakrpxjc.us-east-2.elasticbeanstalk.com/course/", axiosConfig);
        return response;
    }

   

}

export default new CourseService();
