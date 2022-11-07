import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';
import { ReactComponent as Home } from '../home.svg';


export default class Opinions extends Component {
    render() {
        return (
            <div className="Content">
                <a href="./"><Home/></a>
                <Nav/>
                <div className="Title">
                    Honest Thoughts
                </div>
            </div>
            );
    }
}