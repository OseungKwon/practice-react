import React from 'react'
import styled from 'styled-components';

const styledButton = styled.button`
border: none;
border-radius: 4px;
font-size: 1rem;
font-weight: bold;
padding: 0.25rem 1rem;
color: white;
outline: none;
cursor: pointer;

background: #495057;
&:hover{
    background: #adb5bd
}
`;

const Button = (props) => {
    return (
        <styledButton {...props} />
    )
}

export default Button
