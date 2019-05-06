import React from 'react';
import './Card.css';

const Card = props => 
    <div>
        {props.results.map(result => (
            <div className="Card" key={result.id}>
                    <div className="frame">
                        <img src={result.avatar_url} alt="user">
                        </img>
                    </div>
                    <label className="title">{result.login}</label>
                    <label className="card-text">Link:  
                    <a href={result.url} className={"over"}>{result.url}</a></label>
                    <label className="card-score-text">Score: {result.score}</label>
            </div>
            ))
        }
    </div>

export default Card;