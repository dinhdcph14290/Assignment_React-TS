import axios from "axios";

const root = axios.create({
    baseURL: 'http://localhost:3001/api'
})

export default root;