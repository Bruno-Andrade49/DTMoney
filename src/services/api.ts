import axios from "axios"

export const api = axios.create({
    baseURL: "https://dt-money-eight-alpha.vercel.app/api"
})
