import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';


export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Name"><a href="./">Krishi Sharma</a></div>
                <Nav/>
            </div>
            );
    }
}

//<div className="Shadow"><a href="./">krishi sharma</a></div>
