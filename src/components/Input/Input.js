import React from 'react';
import './Input.css';

const Input = props => (
    <input className='input' placeholder='Search by username' onChange={props.onChange}></input>
)

export default Input;