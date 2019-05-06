import React from 'react';
import './Jumbotron.css';

const Jumbotron = props => (
<div className="header">
    <div className="jumbotron">
        <label className="text">{props.label}</label>
    </div>
</div>
)

export default Jumbotron;