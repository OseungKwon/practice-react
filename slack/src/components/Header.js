import React from 'react';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';


const Header = ({ user, onLogout }) => {
    return (
        <>
            <Responsive>
                <Link to="/" className="logo">
                    REACTERS
                </Link>
                {user ? (
                    <div className="right">
                        <div>{user.username}</div>
                        <Button onClick={onLogout}>로그아웃</Button>
                    </div>
                ) : (
                    <div className="right">
                        <Button to="/login">로그인</Button>
                    </div>
                )}
            </Responsive>
        </>
    );
};

export default Header;