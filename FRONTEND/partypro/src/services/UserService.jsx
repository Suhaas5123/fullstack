import axios from "axios";



const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth/";
const API_BASE_URL = "http://localhost:8080/";

class UserService{

    LoginUser(user){
        return axios.post(AUTH_API_BASE_URL + "authenticate", user)
    }
    RegisterUser(user){
        return axios.post(AUTH_API_BASE_URL + "register", user)
    }


}
export default new UserService();