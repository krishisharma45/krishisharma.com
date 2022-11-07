import '../styles.css';
import React, { Component } from 'react';


export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <a href="./films">films</a>
                <a href="./characters">characters</a>
                <a href="./opinions">opinions</a>
                <a href="./about">about</a>
            </div>
            );
    }
}

