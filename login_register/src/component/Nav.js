import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return (
        <div className="Nav">
            <div className="nav-main">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-sub">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Nav
