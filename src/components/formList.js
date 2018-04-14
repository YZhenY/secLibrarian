import React, { Component } from 'react';
import {Item} from 'semantic-ui-react';

class FormList extends Component {
    constructor(props) {
        super();
        
    }

    render() {
        return (
            <Item.Group className="form-list-container">
                {
                    this.props.formList.map((form, index) => {
                        var date = new Date(form.pubDate)
                        var accNo = form.id.slice(form.id.match(/accession-number=/).index + 17);
                        return (
                            <Item key={index}>
                                <Item.Content>
                                    <Item.Header href={form.link} as='a'>Acc-no: {accNo}</Item.Header>
                                    <Item.Meta>Filing Date: {date.toDateString()}</Item.Meta>
                                </Item.Content>
                            </Item>
                        )
                    })
                }
            </Item.Group>
        )
    }
}

export default FormList;