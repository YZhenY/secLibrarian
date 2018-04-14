import React, { Component } from 'react';
import {Input, Button, Icon} from 'semantic-ui-react';

class Header extends Component {
    constructor(props) {
        super();
        
    }
    render() {
        return (
            <header className="App-header">
            <span className="App-header-left">
                <Icon size='huge' name='book'/> 
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
              <Input onChange={this.props.handleInput} value={this.props.inputValue} placeholder="AAPL, JPM, MSFT..."/>
              <Button onClick={this.props.handleSearch}><Icon name='search'/></Button>
            </span>
          </header>
        )
    }
}

export default Header;