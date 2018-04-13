import React, { Component } from 'react';
import {Input, Button, Segment} from 'semantic-ui-react';

class AvailFormButtons extends Component {
    constructor(props) {
        super();

    }

    render() {
        return (
            <div className="avail-form-buttons-container">
                {
                    this.props.forms.map( form => {
                        return (
                            <Button>{form}</Button>
                        )
                    })
                }
            </div>
        )
    }
}

export default AvailFormButtons;