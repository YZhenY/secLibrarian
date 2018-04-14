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
                    buttons.map( form => {
                        if (this.props.forms[form]) {
                            return (
                                <Button onClick={this.props.handleFormButtonClick} >{form} ({this.props.forms[form]})</Button>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

export default AvailFormButtons;