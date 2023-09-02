import axios from "axios";
import { toast } from "react-hot-toast";

const baseURL = import.meta.env.VITE_API_URL;

export const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
})

let toasterId;

const handleError = (err) => {
    const data = err?.response?.data;

    toasterId && toast.dismiss(toasterId);
    toasterId = toast.error(data.message);
    return Promise.reject(data);
}

const handleSuccess = (res) => {
    toasterId && toast.dismiss(toasterId);
    if(res?.data?.message) {
        toasterId = toast.success(res.data.message);
    }
    return res.data;
}

api.interceptors.response.use(handleSuccess, handleError);