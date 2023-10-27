import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';
import { ReactComponent as Home } from '../home.svg';
import YoutubeEmbed from './YoutubeEmbed';


export default class Film extends Component {
    render() {
        return (
            <>
                <div className="Content">
                    <a href="./" className="HomeIcon"><Home/></a>
                    <Nav/>
                    <div className="Title">
                        Filmography
                    </div>
                    <br/>
                    <p>A science fiction short film about a politician who challenges status quo and builds a revolutionary technology that ends up saving her planet from starvation.</p>
                    <YoutubeEmbed embedId="owo2OEZlqQM" />
                </div>
            </>
            );
    }
}