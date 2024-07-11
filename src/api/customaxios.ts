import axios from "axios";

const customAxios = async () => {

    const api = axios.create({
        baseURL: "http://echobackend.laindev.me",
        timeout: 50000,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",

        },
    });

    return api;
};

export default customAxios;