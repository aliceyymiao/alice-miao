import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>Hello! My name is Alice Miao and welcome to my website! I'll talk about my recent interest and some 
                    facts about myself in my website.
                </Jumbotron>
                <img src="img/alice.jpg" alt="alice"/>
            </div>
        )
    }
}