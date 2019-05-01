import React, {Component} from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';

class Main extends Component {
    render () {
        return (
            <div>
                <Jumbotron label="Github Search Users App"/>
                <Input />
                <Button />
                <List></List>
                <Card />
                <Footer label="&copy; 2019 Rasikh92" link="https://github.com/rasikh92/React_GitUsersApp"/>
            </div>
        )
    }
}

export default Main;

