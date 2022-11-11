import '../styles.css';
import React, { Component } from 'react';
import HomeNav from './HomeNav';


export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <HomeNav/>
                <img src={require("../hello.jpg")}/>
            </div>
            );
    }
}

//<div className="Name"><a href="./">Krishi Sharma</a></div>
