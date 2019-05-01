import React from 'react';
import './Card.css';
import Img from '../../assets/Octocat.png';

const Card = props => (
    <div>
        <div className="Card">
            <div className="frame">
                <img className="frame-img" src={Img} alt="user">
                </img>
            </div>
            <label className="title">Username: rasikh92</label>
            <label className="card-text">Link: 
            <a href="https://github.com/rasikh92">https://github.com/rasikh92</a></label>
            <label className="card-score-text">Score: 20.1</label>
        </div>
        <div className="Card">
            <div className="frame">
                <img className="frame-img" src={Img} alt="user">
                </img>
            </div>
            <label className="title">Username: rasikh92</label>
            <label className="card-text">Link: 
            <a href="https://github.com/rasikh92">https://github.com/rasikh92</a></label>
            <label className="card-score-text">Score: 20.1</label>
        </div>
        
    </div>
);

export default Card;