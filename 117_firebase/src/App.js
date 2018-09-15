import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { firebaseconnect } from "./FirebaseConnect";
class App extends Component {


  //----------------------------push dữ liệu--------------------------------//
  pushdata = () => {
    var connectdata = firebase.database().ref('DataForNote');
    connectdata.push({
        contentNote:"công cụ mới của google mới smml",
        titleNote:"ngày 10-7-2018 code sml"
    })
    console.log("thêm dữ liệu thành công");
  }
  //--------------------------end push dữ liệu-----------------------------//




  //------------------------------pop dữ liệu-----------------------------//
  popdata = (id) => {
    var connectdelete = firebase.database().ref('DataForNote');
    connectdelete.child(id).remove()
    console.log("xóa dữ liệu thành công")
  }
  //----------------------------- kết thúc pop dữ liệu-------------------//
  













  render() {
    console.log(firebaseconnect);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={() => this.pushdata()}>Thêm mới</button>
          <hr/>
          <button onClick={() => this.popdata("Note1")}>Xóa dữ liệu</button>
        </p>
      </div>
    );
  }
}

export default App;
