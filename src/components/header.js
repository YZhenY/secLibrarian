import React, { Component } from 'react';
import {Input, Button, Icon} from 'semantic-ui-react';

class Header extends Component {
    constructor(props) {
        super();
        
    }
    render() {
        return (
            <header className="app-header">
            <span className="header-left">
                <Icon size='huge' name='book'/> 
              <span>
                <div className='header-top'>
                SEC Librarian 
                </div>
                <div className='header-bottom'>
                  Find forms in just a sec
                </div>
              </span>
            </span>

            <span className='header-current'>
                <div className="header-current-search"> 
                    {this.props.currentSearch}
                </div>
                <div className="header-current-form"> 
                {this.props.currentForm}
                </div>
            </span>

            <span className="header-right"> 
              <Input onChange={this.props.handleInput} value={this.props.inputValue} placeholder="AAPL, JPM, MSFT..."/>
              <Button onClick={this.props.handleSearch}><Icon name='search'/></Button>
            </span>
          </header>
        )
    }
}

export default Header;