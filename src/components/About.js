import '../styles.css';
import React, { Component } from 'react';


export default class About extends Component {
    render() {
        return (
            <div className="Content">
                <div className="Text">
                    <p>Engineer by day, artist by night, Krishi aspires to create compelling stories and inspire dialogue around the social issues that plague us today.</p>
                    <p>Her journey as a storyteller started as editor of the yearbook, where she fell in love with sharing compelling personal stories that lay under the surface of a typical suburban high school experience.</p>
                    <p>Today, she experiments with photography, filmmaking and painting to tell stories from her everyday life. Her biggest inpsirations to date have been the Harry Potter series, Humans of New York and Martin Luther King Jr.’s “I Have a Dream” speech.</p>
                </div>
                <div className="Photo"></div>
            </div>
            );
    }
}