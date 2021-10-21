import axios from "axios";

const BASE_URL = "http://localhost/";
const api = axios.create({
    baseURL: BASE_URL
})

export default api;