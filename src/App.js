import React, { Component } from 'react';
import './App.css';
import {Segment} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AvailFormButtons from './components/availFormButtons.js';
import FormList from './components/formList.js';
import Header from './components/header.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      curTicker:undefined,
      curCIK: undefined,
      curPage: 0,
      curFormType: undefined,
      input:'',
      availableForms: {},
      forms:[],
      nextPageExists: false,
    }

    //handles input search in state change
    this.handleInput = this.handleInput.bind(this);
    //searches for respective ticker and returns avaiable form buttons
    this.handleSearch = this.handleSearch.bind(this);
    //loads forms
    this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
    //handles the loading of the next 100 forms (triggered by scrolling);
    this.handleLoadNextPage = this.handleLoadNextPage.bind(this);

    //set window listner for bottom scroll
    window.onscroll = (ev) => {
      // console.log('left ', (window.innerHeight + window.pageYOffset), ' right: ', document.body.scrollHeight)
      if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight - 1) {
        this.handleLoadNextPage();
      }
  };
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
      start: 0,
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
    .then(result => {
      var newState = {forms:result, curPage:0, curFormType:data.formType};
      console.log(result.length);
      if (result.length > 99) {
        newState['nextPageExists'] = true;
      } else {
        newState['nextPageExists'] = false;
      }
      this.setState(newState);
    })
    .catch(err => console.log( 'Error submitting input',err));
  }

  handleLoadNextPage() {
    console.log('Loading Next Page')
    if (this.state.nextPageExists) {
      var data = {
        ticker: this.state.curTicker,
        CIK: this.state.curCIK,
        start: this.state.curPage + 100,
        formType: this.state.curFormType,
      }
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
      .then(result => {
        var newState = {forms:this.state.forms.concat(result), curPage: this.state.curPage + 100}
        if (result.length > 99) {
          newState['nextPageExists'] = true;
        } else {
          newState['nextPageExists'] = false;
        }
        this.setState(newState);
      })
      .catch(err => console.log( 'Error submitting input',err));
    }
  }

  render() {
    var currentSearch;
    var currentForm;
    if (this.state.curCIK && this.state.curTicker) {
      currentSearch = this.state.curTicker + ' CIK: ' + this.state.curCIK;
    }
    if (this.state.curFormType) {
      currentForm = "Form: " + this.state.curFormType;
    }
    return (
      <div className="App">
        <Header currentForm={currentForm} currentSearch={currentSearch} handleInput={this.handleInput} handleSearch={this.handleSearch} inputValue={this.state.input} />
        <AvailFormButtons forms={this.state.availableForms} handleFormButtonClick={this.handleFormButtonClick}/>
        <FormList formList={this.state.forms} />
      </div>
    );
  }
}

export default App;
