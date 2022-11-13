import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';
import { ReactComponent as Home } from '../home.svg';


export default class Art extends Component {
    render() {
        return (
            <>
                <div className="Content">
                    <a href="./" className="HomeIcon"><Home/></a>
                    <Nav/>
                    <div className="Title">
                        Gallery
                    </div>
                    <p>A collection of work from 2017 to 2022 in various media. For a print, message me on Instagram with the name of the artwork.</p>
                    <div className="Gallery">
                        <img src={require("../summer_drive.jpg")}/>
                        <p className="Caption"><em>summer drive</em></p>
                        <p className="Caption">Oil on canvas paper made in 2018. Inspired by a <a href="https://unsplash.com/photos/pYeO_rIZ1EM">photograph by Brett Patzke</a> taken in Duluth, Minnesota.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../hello.jpg")}/>
                        <p className="Caption"><em>hello</em></p>
                        <p className="Caption">Oil on MDF board made in 2019. Inspired by a <a href="https://unsplash.com/photos/3MYvgsH1uK0">photograph by Pablo Gentile</a>.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../pink_lips.jpg")}/>
                        <p className="Caption"><em>pink lips</em></p>
                        <p className="Caption">Oil on MDF board made in 2019.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../the_other_worlds.jpg")}/>
                        <p className="Caption"><em>the other worlds</em></p>
                        <p className="Caption">Watercolor on Fluid cold press watercolor paper made in 2017.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../the_eyes_of_history.jpg")}/>
                        <p className="Caption"><em>the eyes of history</em></p>
                        <p className="Caption">Watercolor on Fluid cold press watercolor paper made in 2017. Painted as a response to a <a href="https://www.nytimes.com/2017/08/11/us/white-nationalists-rally-charlottesville-virginia.html">Unite the Right demonstration in Charlottesville, Virginia</a> during the summer of 2017.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../dream.jpg")}/>
                        <p className="Caption"><em>dream</em></p>
                        <p className="Caption">Oil on canvas made in 2021. Inspired by an <a href="https://www.robinsealark.com/2019?lightbox=dataItem-kf8zj0qk1">oil painting by Robin Clark</a>.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../escape.jpg")}/>
                        <p className="Caption"><em>escape</em></p>
                        <p className="Caption">Oil on canvas made in 2022.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../lost_time.jpg")}/>
                        <p className="Caption"><em>lost time</em></p>
                        <p className="Caption">Oil on canvas made in 2020.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../spacefall.jpg")}/>
                        <p className="Caption"><em>spacefall</em></p>
                        <p className="Caption">Watercolor on Fluid cold press watercolor paper made in 2021.</p>
                    </div>
                    <br></br>
                    <div className="Gallery">
                        <img src={require("../play.jpg")}/>
                        <p className="Caption"><em>play</em></p>
                        <p className="Caption">Oil on canvas made in 2022.</p>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </>
            );
    }
}