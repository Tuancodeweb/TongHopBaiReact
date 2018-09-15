import React, { Component } from 'react';
// import thư viện react router bắt buộc phải có
import {
  NavLink
} from 'react-router-dom'
// endl import
class Nav extends Component {
    render() {
        return (
            <div>
{/* begin menu */}
<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container">
    <a className="navbar-brand js-scroll-trigger" href="/home">React Router - News</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
      

{/* <NavLink to> : có tác dụng hight light code và chuyển hướng trang web mà không phải load lại trang*/}
        <li className="nav-item">
          <NavLink className="nav-link js-scroll-trigger" to="/tintuc">Tin Tức</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link js-scroll-trigger" to="/chi-tiet-tin">Tin Chi Tiết</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link js-scroll-trigger" to="/lien-he">Contact</NavLink>
        </li>



      </ul>
    </div>
  </div>
</nav>
{/* end menu */}

            </div>
        );
    }
}

export default Nav;