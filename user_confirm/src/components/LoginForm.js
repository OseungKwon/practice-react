import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function LoginForm({ authenticated, login, location }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            login({ email, password });
        } catch (err) {
            alert("Failed to login");
            setEmail("");
            setPassword("");
        }
    };

    const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;

    return (
        <form onSubmit={onSubmit}>
            <h1>Login</h1>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
            />
            <button type="submit" >Login</button>
        </form>
    );
}

export default LoginForm;