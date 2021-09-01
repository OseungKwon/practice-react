import { atom, selector } from "recoil";
import axios from 'axios'

export const RegisterData = atom({
    key: 'RegisterData',
    default: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }
})

export const SubmitData = atom({
    key: 'SubmitData',
    default: ''
})

// export const registerUser = selector({
//     key: 'registerUser',
//     get: async ({ get }) => {
//         const res = await 
//         return await res.data.json();
//     }
// })

const register = data => {
    return axios.post('http://localhost:3003/register', data)
}