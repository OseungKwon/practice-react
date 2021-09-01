import React, { useState } from 'react'
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { RegisterData, SubmitData } from './atoms/authAtom'
import AuthForm from './AuthForm'
import axios from 'axios'
import { register } from './api/api'
import { commonNotification } from './atoms/common'

const RegisterPage = ({ history }) => {
    const [form, setForm] = useState(RegisterData)

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.id]: e.target.value
        }
        setForm(nextForm)
    }
    const onSubmit = async e => {
        e.preventDefault();
        await register(form)
            .then(res => {
                if (res.data.success) {
                    console.log(res)
                    history.push('/login')
                } else {
                    alert(res.data.err.name)
                }
            })




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
