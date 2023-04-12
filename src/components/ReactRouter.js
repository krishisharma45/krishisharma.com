import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Film from './Film';
import Speaking from './Speaking';
import Art from './Art';
import Thoughts from './Thoughts';
import About from './About';
import React, { Component } from 'react';


export default class ReactRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/film" element={<Film/>}/>
                    <Route path="/speaking" element={<Speaking/>}/>
                    <Route path="/art" element={<Art/>}/>
                    <Route path="/thoughts" element={<Thoughts/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}