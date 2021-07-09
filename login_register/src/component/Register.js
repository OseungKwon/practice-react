import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log({
            name,
            email,
            password
        })
    }
    return (
        <div className="Register">
            <form>
                <label>Please sign in</label>
                <input type="name" className="inputName" placeholder="Name" required
                    onChange={e => setName(e.target.value)} />
                <input type="email" className="inputEmail" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" className="inputPassword" placeholder="password" required
                    onChange={e => setPassword(e.target.value)} />
                <button className="registerButton" type="submit">Register</button>

            </form>
        </div>
    )
}

export default Register;
