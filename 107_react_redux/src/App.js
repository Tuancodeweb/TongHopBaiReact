import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import { connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.data}</h1>
        </header>
        <p className="App-intro">
          <News/>
        </p>
      </div>
    );
  }
}
// truyền tham số vào data để đẩy lên h1
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.num
  }
}


export default connect(mapStateToProps)(App);