import axios from "axios";
import baseURL from "../configs/url";

const axiosService = axios.create({
    baseURL
})

export default axiosService;