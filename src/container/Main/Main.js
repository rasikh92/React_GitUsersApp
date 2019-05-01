import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class Main extends Component {
    render () {
        return (
            <div>
                <Jumbotron label="Github Search Users App"/>
                <Input />
                <Button />
            </div>
        )
    }
}

export default Main;

