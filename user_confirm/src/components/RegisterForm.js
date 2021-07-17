import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { users } from '../auth/auth'

function RegisterForm({ authenticated, history, location, log }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            users.push({ email, password })
            runTasks();
            log(true)
        } catch (err) {
            alert("Failed to register");
            setEmail("");
            setPassword("");
        }
        go()
    };

    function loading(num) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = num + 10;
                if (result > 50) {
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
            result = await loading(result);
            setText('[2/4]회원가입중..');
            result = await loading(result);
            setText('[3/4]회원가입중...');
            result = await loading(result);
            setText('[4/4]회원가입 완료 !');
            result = await loading(result);
            history.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;
    function go() {
        console.log(from)
        return <Redirect to={{ pathname: "/login" }} />
    }
    return (
        <form onSubmit={onSubmit}>
            <h1>Register</h1>
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
            <button type="submit" >Register</button>
            <div>{text}</div>
        </form>
    );
}

export default RegisterForm;