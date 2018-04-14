import React, { Component } from 'react';
import './App.css';
import {Input, Button, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AvailFormButtons from './components/availFormButtons.js';
import FormList from './components/formList.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      curTicker:undefined,
      curCIK: undefined,
      input:'',
      availableForms: {},
      forms:[],
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
  }

  handleSearch(e) {
    var data = {
      ticker: this.state.input,
    }
    fetch('/search/ticker', {
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
    .then(result => this.setState({
      availableForms: result.availForms, 
      curTicker: result.ticker,
      curCIK: result.CIK,
    }))
    .catch(err => console.log( 'Error submitting input',err));
  }

  handleInput(e) {
    this.setState({input:e.target.value})
  }

  handleFormButtonClick (e) {
    var data = {
      ticker: this.state.curTicker,
      CIK: this.state.curCIK,
    }
    //regex to parse out form type
    var formType = e.target.innerText.slice(0,(e.target.innerText.match(/\(/).index) - 1);
    data['formType'] = formType;
    fetch('/search/form', {
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
    .then(result => this.setState({forms:result}))
    .catch(err => console.log( 'Error submitting input',err));
  }

  render() {
    var currentSearch;
    if (this.state.curCIK && this.state.curTicker) {
      currentSearch = this.state.curTicker + ' CIK: ' + this.state.curCIK;
    }
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-header-left">
            <span>
              <Icon size='huge' name='book'/> 
            </span>
            <span>
              <div className='App-header-top'>
              SEC Librarian 
              </div>
              <div className='App-header-bottom'>
                Find forms in just a sec
              </div>
            </span>
          </span>

          <span className="App-header-right"> 
            <Input onChange={this.handleInput} value={this.state.input} placeholder="AAPL, JPM, MSFT..."/>
            <Button onClick={this.handleSearch}><Icon name='search'/></Button>
          </span>
        </header>
        {
          <span>{currentSearch}</span>
        }
        <AvailFormButtons forms={this.state.availableForms} handleFormButtonClick={this.handleFormButtonClick}/>
        <FormList formList={this.state.forms} />
      </div>
    );
  }
}

export default App;
