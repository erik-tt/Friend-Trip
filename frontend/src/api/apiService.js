import axios from 'axios';

const USERS_API_REST_URL = "http://localhost:8080/api/users"; /*Finne link til brukerne i api*/

class apiService  {

    getUsers() {
        return axios.get(USERS_API_REST_URL);
    }
    
    

}

export default new apiService;
