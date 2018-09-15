import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <div>
            {/* Page loader */}
            <div id="preloader" />
            {/* header section start */}
            <header className="header">
              <div className="container">
                <div className="header-area">
                  <div className="logo">
                    <a href="index-2.html"><img src="assets/img/logo.png" alt="logo" /></a>
                  </div>
                  <div className="header-right">
                    <form action="#">
                      <select>
                        <option value="Movies">phim</option>
                        <option value="Movies">phim</option>
                        <option value="Movies">phim</option>
                      </select>
                      <input type="text" />
                      <button><i className="icofont icofont-search" /></button>
                    </form>
                    <ul>
                      <li><a href="#">Xin chào quý khách!</a></li>
                      <li><a className="login-popup" href="#">Đăng nhập</a></li>
                    </ul>
                  </div>
                  <div className="menu-area">
                    <div className="responsive-menu" />
                    <div className="mainmenu">
                      <ul id="primary-menu">
                        <li><a className="active" href="index-2.html">Trang chủ</a></li>
                        <li><a href="movies.html">Phim</a></li>
                        <li><a href="celebrities.html">Admin</a></li>
                        <li><a href="top-movies.html">Phim ăn khách</a></li>
                        <li><a href="blog.html">Bản tin</a></li>
                        <li><a href="#">Blog <i className="icofont icofont-simple-down" /></a>
                          <ul>
                            <li><a href="blog-details.html">Blog film</a></li>
                            <li><a href="movie-details.html">Phim chi tiết</a></li>
                          </ul>
                        </li>
                        <li><a className="theme-btn" href="#"><i className="icofont icofont-ticket" /> Vé</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>          
        )
    }
}

export default Header