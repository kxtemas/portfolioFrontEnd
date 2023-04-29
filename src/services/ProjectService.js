import axios from "axios";


class ProjectService {
 
    /**
     * Method to get all projects from api
     * @param {String} id 
     */
    async getProjects() {
  // getProjects method uses axios library to get the list of projects from the backend API 
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
//The URL endpoint for the GET request is provided
        const response = await axios.get("http://backendkm-env.eba-qakrpxjc.us-east-2.elasticbeanstalk.com/project/", axiosConfig);
        return response;
    }


   

}

export default new ProjectService();