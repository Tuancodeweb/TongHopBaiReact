import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './component/topmenu/TopMenu.js';
import Header from './component/header/Header.js';
import Content from './component/content/Content.js';
import Footer from './component/footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <Content tieude="For those about to rock..." vitri="order-lg-2" thongtin="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati." anh="img/01.jpg"/>
        <Content tieude="For those about to rock..." thongtin="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati." anh="img/02.jpg"/>
        <Content tieude="For those about to rock..." vitri="order-lg-2" thongtin="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati." anh="img/03.jpg"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
