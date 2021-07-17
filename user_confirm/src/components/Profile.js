import React from 'react'

const Profile = ({ user }) => {
    const { email, password, name } = user || {};
    return (
        <div>
            <h1>{name}'s Profile</h1>
            <div>Email: {email}</div>
            <div>Password: {password}</div>
        </div>
    )
}

export default Profile
