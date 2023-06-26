import axios from 'axios'

export const apiAxios = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_URL as string
})