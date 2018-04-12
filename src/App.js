import React, { Component } from 'react';
import './App.css';
import {Button, Segment} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import RSS from 'rss';

let RssFeedEmitter = require('rss-feed-emitter');
let feeder = new RssFeedEmitter();

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    // var url = "https://sec.gov/";
    // fetch(url, {
    //   headers: {
    //   },
    //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, cors, *same-origin
    //   redirect: 'follow', // *manual, follow, error
    //   referrer: 'no-referrer', // *client, no-referrer
    // })
    // .then(response => response.text())
    // .then( result => {
    //   console.log(result);
    // })
    // .catch(err => console.log(err));
    feeder.add({
      url: 'http://www.nintendolife.com/feeds/news',
      refresh: 2000
    })
    console.log(feeder.list());

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Button onClick={this.handleSearch}>Test</Button>
        <Segment>Stuff here: {this.state.result} </Segment>
      </div>
    );
  }
}

export default App;
