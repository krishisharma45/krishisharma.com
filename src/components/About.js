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
                <p className="About">Krishi is an engineer, mixed media painter and aspiring filmmaker.</p>
                <p className="About">She started her professional journey by working as an analyst in New York, but was drawn towards engineering as she learned about the power of technology. In 2019, she stumbled upon an event at her local book store while living in Los Angeles, where she listened to a talk from a human rights speaker on the ethical implications of artificial intelligence. The speaker encouraged people from all backgrounds and education levels to explore AI and get involved, and Krishi took that opportunity to learn machine learning. She now works at an AI consulting firm, where she helps mitigate ethical risks and build software for machine learning applications.</p>
                <p className="About">Her creative journey started in 2016 with oil painting. The difficulties of living in New York had gotten to her, and she found her escape watching YouTube videos on painting techniques. Since then, she has evolved to using digital illustration, watercolor and colored pencil as well as oil paint. Her current interest involves storytelling through writing and film, as she hopes to use her technical understanding to convey complex concepts to a general audience. She is passionate about self expression, human centered decisions and thoughtfully built technological solutions.</p>
                <p className="LastEntry">She currently resides in Northern Virginia with her husband and their lemon tree.</p>
            </div>
            );
    }
}