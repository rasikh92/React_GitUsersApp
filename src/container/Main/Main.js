import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Input from '../../components/Input/Input';

class Main extends Component {
    render () {
        return (
            <div>
                <Jumbotron label="Github Search Users App"/>
                <Input />
            </div>
        )
    }
}

export default Main;

