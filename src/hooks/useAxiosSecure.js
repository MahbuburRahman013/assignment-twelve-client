import axios from "axios"


const axiosSecure = axios.create({
    baseURL: ''
})

export const useAxiosSecure = () => {
    return axiosSecure;

}