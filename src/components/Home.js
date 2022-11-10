import '../styles.css';
import React, { Component } from 'react';
import HomeNav from './HomeNav';


export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Name"><a href="./">Krishi Sharma</a></div>
                <HomeNav/>
            </div>
            );
    }
}

//<div className="Shadow"><a href="./">krishi sharma</a></div>
