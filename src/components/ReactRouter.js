import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import Characters from './Characters';
import Opinions from './Opinions';
import About from './About';
import React, { Component } from 'react';


export default class ReactRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/films" element={<Films/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/opinions" element={<Opinions/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}