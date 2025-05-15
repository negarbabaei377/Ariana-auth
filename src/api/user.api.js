import Http from "../service/http.service";
import {CURRENT_USER, LOGIN, REGISTER} from "../config/endpoint.config";

export const loginApi = async (data) => {
    try {
        const response = await Http.post(LOGIN, data)
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const RegisterApi = async (data) => {
    try {
        const response = await Http.post(REGISTER, data)
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
}

export const currentUserApi = async () => {
    try {
        const response = await Http.get(CURRENT_USER)
        return response;
    } catch (error) {
        return Promise.reject(error)

    }
}

export const logoutApi = async () => {
    try {
        const response = await Http.delete(LOGIN)
        return response;
    } catch (error) {
        return Promise.reject(error)

    }
}

