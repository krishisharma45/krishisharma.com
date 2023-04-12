import '../styles.css';
import React, { Component } from 'react';


export default class HomeNav extends Component {
    render() {
        return (
            <div className="HomeNav">
                <a href="./film">film</a>
                <a href="./speaking">speaking</a>
                <a href="./art">artwork</a>
                <a href="./thoughts">thoughts</a>
                <a href="./about">about</a>
            </div>
            );
    }
}
