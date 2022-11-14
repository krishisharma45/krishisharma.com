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
                <p className="About">Krishi is a mixed media painter, aspiring filmmaker and an engineer. She spent her undergraduate career at the University of Virginia studying financial mathematics and English, only to find herself enamored with the art career she had abandoned earlier on.</p>
                <p className="About">Her creative journey started in 2016 with oil painting and has since evolved to include digital illustration, watercolor and colored pencil.</p>
                <p className="About">With the passing of her grandmother in 2022, she shifted her focus towards acting and filmmaking as a way to express herself. Her dream is to one day create a film that represents the strength and beauty of immigrant women.</p>
                <p className="LastEntry">She currently resides in Northern Virginia, where she works at an AI consulting firm as a software engineer during the day and builds her art portfolio at night.</p>
            </div>
                // img src={require("../self.jpg")}/>
                //     <p className="About">Hello, and welcome to my home. Virtual home, that is. This is the cheapest home you can get these days, so I invested a hard earned 12 dollars to get my address for a home on the web. Inflation has hit almost every aspect of life, except purchasing a super specific domain name that nobody else wants, apparently.</p>
                //     <p className="About">So I moved into this virtual home before the internet lords caught up with the times. It took a few days to buy the lot, thanks AWS, and then a full day to pick out the furniture, I mean fonts and colors, but after unpacking all the boxes, I finally can open my doors and tell you what I am even doing here.</p>
                //     <p className="About">I’m an engineer and artist that talks more than I code and goes on tangents about the state of society. Recently, I’ve been shifting my medium away from oil painting, which I have done for seven years, and towards film. It just fits better.</p>
                //     <p className="About">My content is driven by the passion to better understand, and be understood, by the world around me. I use whatever medium makes sense given the topic I want to explore. To see more behind the scenes for my art, visit my social media, linked through the icons in the footer. Note: your grandma is more savvy than I am with social media. Bear that in mind before you set your expectations.</p>
                //     <p className="LastEntry">Thanks for joining me as I navigate this strange thing called life.</p>
                // </div>
            );
    }
}