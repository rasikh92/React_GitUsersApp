import React, {useState} from 'react';
import './List.css';
import Card from '../Card/Card';

const List = props => {
    const [res, setRes] = useState(false);
    const [resultArr, setResultArr] = useState([]);

    const onClickHandler = (result) => {
        setResultArr([result]);
        setRes(true);
    }

    return (
        <div>
            <ul>        
                {!res ? (props.results.map(result => (
                    <li className="List" key={result.id} onClick={() => onClickHandler(result)}>
                        {result.login}
                    </li>
                ))
                )
                : null}
            </ul>
            
            {res ? <Card results = {resultArr}/> : null}
        </div>
    )
}

export default List;