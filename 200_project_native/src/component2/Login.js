import React, { Component } from 'react'

class Login extends Component {

    getusser = (name , tel , dir , info , live , data , website , addret , home , park , city , car , tree , sky) => {
        var item = {}
        name.item = name,
        tel.item = tel,
        dir.item = dir,
        info.item = info,
        live.item = live,
        data.item = data,
        website.item = website,
        addret.item = addret
        home.item = home,
        park.item = park,
        city.item = city,
        car.item = car,
        tree.item = tree,
        sky.item = sky
        var items = [];
        var items = item.push();
    }

    render () {
        return (
            <div className="login-area">
            <div className="login-box">
              <a href="#"><i className="icofont icofont-close" /></a>
              <h2>Đăng nhập</h2>
              <form action="#">
                <h6>Tên và địa chỉ Gmail của bạn</h6>
                <input type="text" />
                <h6>Mật khẩu</h6>
                <input type="text" />
                <div className="login-remember">
                  <input type="checkbox" />
                  <span>Nhớ mật khẩu</span>
                </div>
                <div className="login-signup">
                  <span>Đăng ký</span>
                </div>
                <a href="#" className="theme-btn">Đăng nhập</a>
                <span {(name,tel,dir,info,live,data,website,addret,home,park,city,car,tree,sky) => this.state(item.name , item.tel , item.dir , item.info , item.live , item.data , item.website , item.addret , item.home , item.park , item.city , item.car , item.tree , item.sky) }>Đăng ký nhanh</span>
                <div className="login-social">
                  <a href="#"><i className="icofont icofont-social-facebook" /></a>
                  <a href="#"><i className="icofont icofont-social-twitter" /></a>
                  <a href="#"><i className="icofont icofont-social-linkedin" /></a>
                  <a href="#"><i className="icofont icofont-social-google-plus" /></a>
                  <a href="#"><i className="icofont icofont-camera" /></a>
                </div>
              </form>
            </div>
          </div>          
        )
    }
}

export default Login;