import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';


export default class Home extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Name"><a href="./">krishi sharma</a></div>
                <Nav/>
            </div>
            );
    }
}