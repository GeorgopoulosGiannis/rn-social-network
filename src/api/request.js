import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:44387/api"
});


export default instance;