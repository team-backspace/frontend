import { create } from "axios";

const BASE_URL = "https://spacebook-backend.loca.lt/";
const api = create({
    baseURL: BASE_URL
})

export default api;