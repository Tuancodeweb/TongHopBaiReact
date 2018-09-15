import React, { Component } from 'react';
import './App.css';
import Noidung from '../src/noidung';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoi tao",
      trangthai2:"khoi tao2",
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount đang chạy');
  }
  componentDidMount() {
    console.log('componentDidMount đang chạy');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate đang chạy');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate đang chạy');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate đamg chạy');
  }


  tienchinh = () => {
    this.setState({
      trangthai: "da update xong"
    });
  } 
  
  
  render() {
    console.log('render đang chạy');
    console.log(this.state.trangthai);
    return (
      <div className="App">
        <Noidung tieude={this.state.trangthai2}></Noidung>
        <button onClick={() => this.tienchinh()}>Click Me</button>
      </div>
    );
  }
}

export default App;
