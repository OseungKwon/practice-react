import React, { useState } from 'react'
import AuthForm from './AuthForm'

const LoginPage = (props) => {

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

    const onSubmit = e => {
        e.preventDefault();
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