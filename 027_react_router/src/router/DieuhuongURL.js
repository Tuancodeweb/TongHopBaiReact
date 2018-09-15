import React, { Component } from 'react';
import {
     Route
  } from 'react-router-dom';
import News from './../components/News';
import Home from '../components/Home';
import NewsDial from '../components/NewsDial';
import Contats from '../components/Contats';
class DieuhuongURL extends Component {
    render() {
        return (
           
                <div>
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/tintuc" component={News} />
                    <Route exact path="/chi-tiet-tin/:slug.:id.html" component={NewsDial} />
                    <Route exact path="/lien-he" component={Contats} />
                </div>
        );
    }
}

export default DieuhuongURL;

