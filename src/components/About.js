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
                    About the Artist
                </div>
                <img src={require("../self.jpg")}/>
                <br></br>
                <p className="About">Krishi is a mixed media painter, aspiring filmmaker and an engineer.</p>
                <p className="About">Her creative journey started in 2016 with oil painting and has since evolved to include digital illustration, watercolor and colored pencil.</p>
                <p className="LastEntry">She currently resides in Northern Virginia with her husband.</p>
            </div>
            );
    }
}