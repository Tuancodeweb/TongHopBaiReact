import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// cách 1
function Mot ()
{
  return(
  <div>
    <h3>Hello world</h3>
    <h3>FTL</h3>
  </div>);
}
// cách 2
var Two = function ()
{
  return (
  <div>
    <p>xin chào thế giới</p>
    <p>Xibn chào dân chơi</p>
  </div>)
}
// cách 3
var Three = ()=>
(
  <div>
      <h1>Xin chào ngài</h1>
  </div>
)
// cách 4
class Four extends Component {
  render() {
    return (
      <div>
        <h1>Xin chào bạn </h1>
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
          <Mot/>
        </header>
          <Two/>
          <Three/>
          <Four/>
      </div>
    );
  }
}

export default App;
