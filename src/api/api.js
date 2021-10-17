import axios from "axios";

const BASE_URL = "https://spacebook-backend.loca.lt/";
const api = axios.create({
    baseURL: BASE_URL
})
axios.defaults.withCredentials = true

export default api;