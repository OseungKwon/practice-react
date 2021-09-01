import axios from 'axios'

// register 
export const register = (data) => {
    return axios.post('http://localhost:5000/api/users/register', data)
}