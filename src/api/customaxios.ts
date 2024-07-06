import axios from "axios";


axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 15000,
    
})