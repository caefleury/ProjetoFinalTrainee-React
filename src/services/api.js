import axios from "axios";

//rails s -p 3001
export const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1'
})

