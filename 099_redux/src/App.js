import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // toán tử ... demo 1
    // var p = {
    //   ten : "may tinh laptop",
    //   tien : 900
    // }
    // console.log(p);

    // var p2 = p;
    // p2.tien = 1000;
    // console.log(p2);
    // console.log(p);

    // answare trả về giá trị p : 900 || p2 : 1000 || p : 1000 do nó cùng trỏ về 1 vùng nhớ ở máy tính


    // toán tử ... demo  2
    // var a = [23,56,87];
    // console.log(a);
    // var  b = {...a};
    // b[0] = 1000;
    // console.log(b);
    // console.log(a);

    // toám tử ... tích hợp install overlap demo 1
    // var a = {
    //   ten : "phan kim tuan",
    //   tuoi : 14
    // }
    // console.log(a);

    // var b = {...a,tuoi:16}
    // console.log(b);

    // toán tử... tích hợp install overlap demo 2
    // var a = {
    //     num : [22,34,12],
    //     status : true

    // }
    // console.log(a);

    // var b = {...a,status:false}
    // console.log(b);

    // var c = {...a,num:[...a.num,4000],status:true}
    // console.log(c);



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
