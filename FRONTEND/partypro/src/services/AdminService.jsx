import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth/";
const API_BASE_URL = "http://localhost:8080/";

class AdminService {

    Registerdmin(admin){
        return axios.post(AUTH_API_BASE_URL +"authenticate", admin);
    }
}
export default new AdminService();