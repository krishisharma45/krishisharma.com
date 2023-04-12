import '../styles.css';
import React, { Component } from 'react';


export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <a href="./speaking">speaking</a>
                <a href="./art">art</a>
                <a href="./thoughts">thoughts</a>
                <a href="./about">about</a>
            </div>
            );
    }
}

