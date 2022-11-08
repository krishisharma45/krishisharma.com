import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';
import { ReactComponent as Home } from '../home.svg';



export default class About extends Component {
    render() {
        return (
            <div className="Content">
                <a href="./"><Home/></a>
                <Nav/>
                <div className="Title">
                    About the Artist
                </div>
                    <p>Engineer by day, artist by night, Krishi aspires to create compelling stories and inspire dialogue around the social issues that plague us today.</p>
                    <p>Her journey as a storyteller started as editor of the yearbook, where she fell in love with sharing compelling personal stories that lay under the surface of a typical suburban high school experience.</p>
                    <p className="LastEntry">Today, she experiments with photography, filmmaking and painting to tell stories from her everyday life.</p>
                </div>
            );
    }
}