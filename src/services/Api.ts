import axios from 'axios'
import env from "react-dotenv";

const urlApi = import.meta.env.VITE_URL_API

export const api = axios.create({
    baseURL: urlApi
})

export const characters = async (setPeople: any) => {
    const result = await api.get(`/characters`)
    
    setPeople(result.data.slice(0, 25))
    console.log(result.data.slice(0, 25))
}


