import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';
import { ReactComponent as Home } from '../home.svg';


export default class Film extends Component {
    render() {
        return (
            <>
                <div className="Content">
                    <a href="./"><Home/></a>
                    <Nav/>
                    <div className="Title">
                        Under Construction
                    </div>
                    <p>This page exists but is not yet ready. Come back soon.</p>
                </div>
                <div className="Filler"></div>
            </>
            );
    }
}