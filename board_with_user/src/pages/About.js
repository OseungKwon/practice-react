import React from 'react';
import { users } from '../auth/auth';
import BoardList from '../components/BoardList';

const About = (props) => {
    return (
        <div>
            <BoardList props={props} />

        </div>
    )
}

export default About
