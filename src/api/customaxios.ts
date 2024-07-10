import axios from "axios";

const customAxios = async () => {

    const api = axios.create({
        baseURL: "https://squid-tech-backend.onrender.com",
        timeout: 50000,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

        },
    });

    return api;
};

export default customAxios;