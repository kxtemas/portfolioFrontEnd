import axios from "axios";


class CourseService {


    async getCourses() {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get("http://http://backendkm-env.eba-qakrpxjc.us-east-2.elasticbeanstalk.com/course/", axiosConfig);
        return response;
    }

   

}

export default new CourseService();
