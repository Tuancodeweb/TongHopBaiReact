import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import DieuhuongURL from '../router/DieuhuongURL.js';
import {
  BrowserRouter as Router 
} from 'react-router-dom';


// <router> : phải được bo trong toàn bộ tập tin mã nguồn nên tốt nhất cho nó vào đây 
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav/>
            <DieuhuongURL/>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
