import React from 'react'

const Login = () => {
    return (
        <div className="Login">
            <form>
                <label>Please Login</label>
                <input type="email" className="inputEmail" placeholder="Email address" required />
                <input type="password" className="inputPassword" placeholder="password" required />
                <button className="loginButton" type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login
