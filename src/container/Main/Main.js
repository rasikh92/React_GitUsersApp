import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';

class Main extends Component {
    state = {
        text: "",
        results: [],
        result: false,
        quickresult: false
    }

    fetchData = (text) => {

    }

    onChangeHandler = (event) => {
        event.preventDefault();
        event.persist();
        let url = 'https://api.github.com/search/users?q=';
        
        url = url.concat(event.target.value);
        console.log(url);
        
        if(event.target.value !== null || !this.state.quickresult) {
            axios.get(url).then(
                res => {
                    const results = [];
                    for(let item in res.data.items) {
                        results.push({
                            avatar_url: res.data.items[item].avatar_url,
                            id: res.data.items[item].id,
                            login: res.data.items[item].login,
                            score: res.data.items[item].score,
                            url: res.data.items[item].url
                        })
                    }
                    this.setState({results: results, quickresult: true, result: false});  
                }
            ).catch(
                err => {
                    console.log(err.response);
                }
            )
        }
    }

    onClickedListener = (event) => {
        this.setState({result: true, quickresult: false});
    }

    render () {
        //spinner here
        return (
            <Fragment>
                <Jumbotron label="Github Search Users App"/>
                    <Input onChange = {this.onChangeHandler}/>
                    <Button clicked={this.onClickedListener} />
                    {this.state.quickresult ? <List results = {this.state.results}></List> : null}
                    {this.state.result ? <Card results = {this.state.results}/> : null}
                <Footer label="&copy; 2019 Rasikh92" link="https://github.com/rasikh92/React_GitUsersApp"/>
            </Fragment>
        )
    }
}

export default Main;

