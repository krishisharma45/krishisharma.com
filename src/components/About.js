import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';
import { ReactComponent as Home } from '../home.svg';



export default class About extends Component {
    render() {
        return (
            <div className="Content">
                <a href="./" className="HomeIcon"><Home/></a>
                <Nav/>
                <div className="Title">
                    About Krishi
                </div>
                <img src={require("../self.jpg")}/>
                <br></br>
                <p className="About">Krishi is a work in progress. In her past, she's been a software engineer, machine learning engineer, financial analyst, business analyst, marketing intern, editor and teacher.</p>
                <p className="About">Her creative work aims to explore the lessons that she has learned along the way of her professional and personal journey.</p>
                <p className="About">Although she is enthusiastic about many things, her true happiness lies in using her voice to make the world a happier, more honest place.</p>
                <p className="LastEntry">She currently lives in many places, thanks to the completely unrealistic housing market. Should you wish to contact her, reach out on her Instagram - she is always taking suggestions on where to move next.</p>
            </div>
            );
    }
}