import axios from "axios";


class ProjectService {

    async getProjects() {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get("http:localhost:8080/project/", axiosConfig);
        return response;
    }


    /**
     * Method to get a project given the ID
     * @param {String} id 
     */
    async getProjectById(id) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

         const response = await axios.get("http:localhost:8080/course/" + id, axiosConfig);
        return response;
    }

}

export default new ProjectService();