import axios from "axios";


const instance = axios.create({
    baseURL: "https://localhost:44387/api/User"
});


export default instance;