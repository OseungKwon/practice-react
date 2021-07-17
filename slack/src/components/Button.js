import React from 'react';
import { Link } from 'react-router-dom';


const Button = props => {
    return props.to ? (
        <Link {...props} cyan={props.cyan ? 1 : 0} />
    ) : (
        <Link {...props} />
    );
};

export default Button;