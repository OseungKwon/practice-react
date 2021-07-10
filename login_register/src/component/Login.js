import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8888/users', {
            method: 'POST',
            headers: { 'Cotent-type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        setRedirect(true);
    }
    if (redirect) {
        return <Redirect to="/" />
    }
    return (
        <div className="Login">
            <form onSubmit={submit}>
                <label>Please Login</label>
                <input type="email" className="inputEmail" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" className="inputPassword" placeholder="password" required
                    onChange={e => setPassword(e.target.value)} />
                <button className="loginButton" type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login
