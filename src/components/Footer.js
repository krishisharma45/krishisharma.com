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
                <div className="Icons">
                    <a href="instagram.com/krishisharma"><Instagram/></a>
                    <a href="youtube.com/krishisharma"><YouTube/></a>
                    <a href="tiktok.com/krishisharma"><TikTok/></a>
                    <a href="github.com/krishisharma45"><GitHub/></a>
                    <a href="linkedin.com/in/krishisharma"><LinkedIn/></a>
                </div>
                <div className="Copyright">
                    &copy; 2022
                </div>
            </footer>
            );
    }
}