import React from 'react';
import './Jumbotron.css';

const Jumbotron = props => (
    <div className="jumbotron">
        <label className="text">{props.label}</label>
    </div>
)

export default Jumbotron;