import '../styles.css';
import React, { Component } from 'react';
import { ReactComponent as Instagram } from '../instagram.svg';
import { ReactComponent as YouTube } from '../youtube.svg';
import { ReactComponent as TikTok } from '../tiktok.svg';
import { ReactComponent as GitHub } from '../github.svg';
import { ReactComponent as LinkedIn } from '../linkedin.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="Byline">
                    made by krishi
                </div>
                <div className="Icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/krishisharma45/"><Instagram/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@krishisharma"><YouTube/></a>
                    {/* <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@krishisharma_"><TikTok/></a> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/krishisharma45"><GitHub/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/krishisharma"><LinkedIn/></a>
                </div>
                <div className="Copyright">
                    &copy; 2023
                </div>
            </footer>
            );
    }
}