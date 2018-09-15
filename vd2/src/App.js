import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const a1 = "Tuân";
function One (props)
{
  return(
    <div className="container">
          <div className="row">
            <div className="card text-left|center|right">
              <img className="card-img-top" src={props.img} alt=""/>
              <div className="card-body">
                <h4 className="card-title">{props.tieude}</h4>
                <p className="card-text">Body</p>
              </div>
            </div>
          </div>
    </div>
  );
}

class Two extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="card text-left|center|right">
              <img className="card-img-top" src={this.props.img} alt=""/>
              <div className="card-body">
                <h4 className="card-title">{this.props.tieude}</h4>
                <p className="card-text">Body</p>
              </div>
            </div>
          </div>
    </div>
    );
  }
}
class Three extends Component {
  render() {
    return (
      <h1>{a1}</h1>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <Three/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <One tieude="the gioi 1" img="https://kenh14cdn.com/2018/6/26/3608795211260221008737607439907324120006656n-1529970691777719217810-15299707561941411713843.png"/>
        <One tieude="the gioi 2"/>
        <One tieude="the gioi 3"/>

        <Two tieude="cuoc sông sắc màu" img="http://kenh14cdn.com/zoom/220_289/2018/6/26/photo1529957528994-15299575289941849174779.jpg"/>

      </div>
    );
  }
}

export default App;