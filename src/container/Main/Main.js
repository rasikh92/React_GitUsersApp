import React, {Component, Fragment} from 'react';
import _ from 'lodash';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import Message from '../../components/Message/Message';
import Spinner from '../../components/Spinner/Spinner';

class Main extends Component {
    state = {
        text: "",
        results: [],
        result: false,
        quickresult: false,
        error: null,
        touched: false
    }
    componentWillMount() {
        this.run = _.debounce((url) => {this.fetchData(url)}, 500);
    }
    
    fetchData = (url) => {
        fetch(url).then(
            res => {
                return res.json();
            }
        ).then( 
            res => {
                const results = [];
                for(let item in res.items) {
                    results.push({
                        avatar_url: res.items[item].avatar_url,
                        id: res.items[item].id,
                        login: res.items[item].login,
                        score: res.items[item].score,
                        url: res.items[item].url,
                        total_count: res.items[item].total_count
                    })
                }
                this.setState({results: results, quickresult: true, result: false});  
            }
        ).catch(
            err => {
                this.setState({error: err.response.message});
            }
        )
    }

    onChangeHandler = (event) => {
        event.preventDefault();
        event.persist();

        let url = 'https://api.github.com/search/users?q=';
        
        url = url.concat(event.target.value);

        if(event.target.value !== "" || !this.state.quickresult) {
            this.setState({text: event.target.value});
            this.run(url);
        }
    }

    onClickedListener = (event) => {
        this.setState({result: true, quickresult: false, touched: false});
    }

    onTouched = () => {
        this.setState({touched: !this.state.touched, error: null});
    }

    render () {
        const input = <Input onChange = {this.onChangeHandler}/>
        let result, spinner = null;
        if(result = null) {
            spinner = <Spinner />;
        }
        if(this.state.results.length === 0 && this.state.quickresult || 
            (this.state.results.length === 0 && this.state.result)) {
                result = 0;
            }
        else if (this.state.result) {
                result = this.state.results.length;
        }
        if(this.state.text !== "" && !this.state.quickresult && !this.state.result) {
            spinner = <Spinner />;
        }
        //spinner here
        return (
            <Fragment>
                <Jumbotron label="Github Search Users App"/>
                    {this.state.error && !this.state.touched ? 
                    <Message msgType = 'Error' message={this.state.error} clicked={this.onTouched}></Message> : null}
                    { result === 0 && this.state.result && !this.state.touched ? 
                    <Message msgType = 'Fail' message = "We found no results! - please try again" clicked = {this.onTouched}/> : result > 0 && !this.state.touched ? 
                    <Message msgType = 'Success' message = {`Success! We found ` + result + ` results!`} clicked = {this.onTouched}/> : null}
                    {input}
                    <Button clicked={this.onClickedListener} />
                    {spinner}
                    {this.state.quickresult ? <List results = {this.state.results}></List> : null}
                    {this.state.result ? <Card results = {this.state.results}/> : null}
                <Footer label="&copy; 2019 Rasikh92" link="https://github.com/rasikh92/React_GitUsersApp"/>
            </Fragment>
        )
    }
}

export default Main;

