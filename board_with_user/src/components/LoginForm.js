import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

function LoginForm({ authenticated, login, location }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();

        login({ email, password });
        setText('로그인 오류')
    }

    const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;

    return (
        <form onSubmit={onSubmit}>
            <h1>Login</h1>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value) || setText('')}
                type="text"
                placeholder="email"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value) || setText('')}
                type="password"
                placeholder="password"
            />
            <button type="submit" >Login</button>
            <div>{text}</div>
        </form>
    );
}

export default LoginForm;