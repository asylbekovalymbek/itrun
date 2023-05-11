import axios from "axios"
import { rootApi } from "../api/index"

const authServices = () => {
    const registration = (userData) => {
        return axios.post(`${rootApi}/auth/register`, userData);   
    };

    return {
        registration,
    }
}