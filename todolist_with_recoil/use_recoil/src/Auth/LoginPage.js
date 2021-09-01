import axios from 'axios';
import React, { useState } from 'react'
import AuthForm from './AuthForm'

const LoginPage = ({ history }) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const { email, password } = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.id]: e.target.value
        }
        setForm(nextForm);
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/users/login', form)
            .then(res => {
                if (res.data.loginSuccess) {
                    console.log(res)
                    history.push('/todo')
                } else {
                    alert(res.data.message)
                }
            })
    }


    return (
        <AuthForm
            type="login"
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default LoginPage