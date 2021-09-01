import React, { useState } from 'react'
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { RegisterData, SubmitData } from './atoms/authAtom'
import AuthForm from './AuthForm'
import axios from 'axios'


const RegisterPage = () => {
    const [form, setForm] = useRecoilState(RegisterData)

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.id]: e.target.value
        }
        setForm(nextForm)
    }
    const onSubmit = async e => {
        e.preventDefault();
        const data = await axios.post('http://localhost:3003/register', form)
        await console.log(data)




    }

    return (
        <div>
            <AuthForm
                type="register"
                onChange={onChange}
                onSubmit={onSubmit}

            />
        </div>
    )
}

export default React.memo(RegisterPage)
