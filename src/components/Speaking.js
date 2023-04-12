import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';
import YoutubeEmbed from './YoutubeEmbed';
import { ReactComponent as Home } from '../home.svg';


export default class Speaking extends Component {
    render() {
        return (
            <>
                <div className="Content">
                    <a href="./" className="HomeIcon"><Home/></a>
                    <Nav/>
                    <div className="Title">
                        Public Speaking
                    </div>
                    <br/>
                    <p>A collection of talks that I have given at different conferences and events. For more content around my public speaking efforts, visit my YouTube page.</p>
                    <br/>
                    <YoutubeEmbed embedId="mkDYySbT1xU" />
                </div>
            </>
            );
    }
}