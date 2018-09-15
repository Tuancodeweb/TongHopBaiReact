import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const So1 = [1,2,3,4,5,6,7,8,9];
const So2 = So1.map((x) =>(
    <div>
      <li>Phan tu {x}</li>
    </div>
));

class Answar extends Component {
  render() {
    return (
      <div>
        <li>{So2}</li>
      </div>
    );
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       <Answar/>
      </div>
    );
  }
}

export default App;
