import React, { Component } from 'react';
import {Input, Button, Segment} from 'semantic-ui-react';

class AvailFormButtons extends Component {
    constructor(props) {
        super();

    }

    render() {
        var buttons = Object.keys(this.props.forms);
        return (
            <div className="avail-form-buttons-container">
                Available Form Types: 
                {
                    buttons.map( (form, index) => {
                        if (this.props.forms[form]) {
                            var count = this.props.forms[form]
                            if (count === 100) {
                                count = '100 +';
                            }
                            return (
                                <Button key={index} onClick={this.props.handleFormButtonClick} >{form} ({count})</Button>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

export default AvailFormButtons;