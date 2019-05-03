import React from 'react';
import './Button.css';

const Button = props => (
    <button className="button" onClick={props.clicked}>
        Submit
    </button>
)

export default Button;