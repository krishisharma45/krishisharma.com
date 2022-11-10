import '../styles.css';
import React, { Component } from 'react';


export default class HomeNav extends Component {
    render() {
        return (
            <div className="HomeNav">
                <a href="./film">FILM</a>
                <a href="./art">ARTWORK</a>
                <a href="./thoughts">THOUGHTS</a>
                <a href="./about">ABOUT</a>
            </div>
            );
    }
}
