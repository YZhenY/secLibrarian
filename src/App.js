import React, { Component } from 'react';
import './App.css';
import {Input, Button, Segment} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AvailFormButtons from './components/availFormButtons.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      input:'',
      availableForms: [],
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSearch(e) {
    var data = {
      ticker: this.state.input,
    }
    fetch('/search', {
      body: JSON.stringify(data), // must match 'Content-Type' header
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // *manual, follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json())
    .then(result => this.setState({availableForms: result}))
    .catch(err => console.log( 'Error submitting input',err));

  }

  handleInput(e) {
    this.setState({input:e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Input onChange={this.handleInput} value={this.state.input} placeholder="AAPL, JPM, MSOFT..."/>
        <Button onClick={this.handleSearch}>Test</Button>
        <AvailFormButtons forms={this.state.availableForms} />
        <Segment>Stuff here: {this.state.result} </Segment>
      </div>
    );
  }
}

export default App;
