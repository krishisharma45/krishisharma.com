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
                <p className="About">Krishi is... a work in progress. In her past, she has been a software engineer, machine learning engineer, financial analyst, business analyst, marketing director, teacher and editor.</p>
                <p className="About">This eclectic background has been the source of inspiration for her oil paintings, talks and films. Through her artistic endeavours, she hopes to learn more about the subtle art of being human.</p>
                <p className="About">Her true happiness lies in using her voice to make the world a happier and more inclusive place to live.</p>
                <p className="LastEntry">You can see more of her and her journey on her YouTube channel.</p>
            </div>
            );
    }
}