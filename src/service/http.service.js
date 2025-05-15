import axios from "axios";
import {TOKEN} from "../config/variables.config";
import {LOGIN} from "../config/endpoint.config";
import {toast} from 'react-toastify';

class Http {
    constructor() {
        axios.defaults.baseURL = "https://mock.arianalabs.io/api"
        axios.interceptors.request.use((config) => {
            const token = localStorage.getItem(TOKEN)
            if (token && !config.url.includes(LOGIN)) {
                config.headers.Authorization = `Token ${token}`;
            }
            return config
        }, (error) => {
            return Promise.reject(error.response.data)
        })
        axios.interceptors.response.use((response) => {
            return response
        }, (error) => {
            if (error.response.status === 401) {
                localStorage.removeItem(TOKEN)
            } else {
                toast.error(error.response.data)
            }
        })
    }

    get(url, config) {
        return axios.get(url, config)
    }

    post(url, data, config) {
        return axios.post(url, data, config)
    }

    delete(url, config) {
        return axios.delete(url, config)
    }
}

export default new Http();