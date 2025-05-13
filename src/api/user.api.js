import http from "../service/http.service";
import {CURRENT_USER, LOGIN, REGISTER} from "../config/endpoint.config";

export const loginApi = async(data) =>{
    try {
        const response = await http.post(LOGIN , data)
        return response;
    }catch (error){
        return Promise.reject(error)
    }
}

export const RegisterApi = async(data)=>{
    try {
        const response = await http.post(REGISTER , data)
        return response;
    }catch (error){
        return Promise.reject(error)
    }
}

export const userApi = async()=>{
    try {
        const response = await http.get(CURRENT_USER)
        return response;
    } catch (error) {
        return Promise.reject(error)

    }
}