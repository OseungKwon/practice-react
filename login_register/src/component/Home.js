import React, { useEffect, useState } from 'react'

const Home = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('https://65dba0ec-4f5e-476d-90a3-d1cc46d068d4.mock.pstmn.io/user/', {
                    headers: { 'Content-text': 'application/json' },
                    credentials: 'include',
                });
                const content = await response.json();
                setName(content.name);
            }
        )();
    })
    return (
        <div className="Home">

        </div>
    )
}

export default Home
