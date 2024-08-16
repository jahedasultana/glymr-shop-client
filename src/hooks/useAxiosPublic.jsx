import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-nu-pied-36.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

