import React from 'react';
import './Message.css';

const message = props => {
    const msgType = 'Message ' + props.msgType;

    return (<div className = {msgType} onClick = {props.clicked}>
                {props.message}
            </div>)
}

export default message;