import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export async function loginUser(credentials){
    const res = await api.post('/token', credentials)

    const { token } = res.data

    return {
        token,
    }
}

export async function registerUser({ username, email, password }) {
    const res = await api.post('/register', {
        username,
        email,
        password
    });

    return res.data;
}