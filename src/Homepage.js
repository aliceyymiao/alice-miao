import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>Alice Miao</Jumbotron>
                <img src="img/alice.jpg" alt="alice"/>
            </div>
        )
    }
}