import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { users } from '../auth/auth';

function RegisterForm({ authenticated, history, location, signUpCompleted }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            users.push({ name, email, password })
            runTasks();
            signUpCompleted(true)
        } catch (err) {
            alert("Failed to register");
            setEmail("");
            setPassword("");
        }
    };

    function loading(num) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = num + 1;
                if (result > 5) {
                    const e = new Error('over loading');
                    return reject(e);
                }
                resolve(result);
            }, 500)
        });
        return promise;
    }
    async function runTasks() {
        try {
            let result = await loading(0);
            setText('[1/4]회원가입중.');
            await loading(result++);
            setText('[2/4]회원가입중..');
            await loading(result++);
            setText('[3/4]회원가입중...');
            await loading(result++);
            setText('[4/4]회원가입 완료 !');
            await loading(result++);
            history.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;
    return (
        <form onSubmit={onSubmit}>
            <h1>Register</h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
            />
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
            <button type="submit">Register</button>
            <div>{text}</div>
        </form>
    );
}

export default RegisterForm;