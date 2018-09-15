import React, { Component } from 'react';

class Ticker extends Component {
    render() {
        return (
           <div className="buy-ticket">
  <div className="container">
    <div className="buy-ticket-area">
      <a href="#"><i className="icofont icofont-close" /></a>
      <div className="row">
        <div className="col-lg-8">
          <div className="buy-ticket-box">
            <h4>Mua vé</h4>
            <h5>Ghế</h5>
            <h6>Màn ảnh</h6>
            <div className="ticket-box-table">
              <table className="ticket-table-seat">
                <tbody><tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody></table>
              <table>
                <tbody><tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>5</td>
                  </tr>
                </tbody></table>
              <table className="ticket-table-seat">
                <tbody><tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td className="active">1</td>
                    <td className="active">1</td>
                    <td className="active">1</td>
                    <td className="active">1</td>
                    <td className="active">1</td>
                    <td className="active">1</td>
                    <td className="active">1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody></table>
              <table>
                <tbody><tr>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>5</td>
                  </tr>
                </tbody></table>
              <table className="ticket-table-seat">
                <tbody><tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody></table>
            </div>
            <div className="ticket-box-available">
              <input type="checkbox" />
              <span>Có sẵn</span>
              <input type="checkbox" defaultChecked />
              <span>Chưa có sẵn</span>
              <input type="checkbox" />
              <span>Đã chọn</span>
            </div>
            <a href="#" className="theme-btn">Trước đó</a>
            <a href="#" className="theme-btn">Tiếp tụ{/*  */}</a>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="buy-ticket-box mtr-30">
            <h4>Thông tin của bạn</h4>
            <ul>
              <li>
                <p>Vị trí</p>
                <span>HB Cinema Box Corner</span>
              </li>
              <li>
                <p>Thời gian</p>
                <span>09.07.2018   20:40</span>
              </li>
              <li>
                <p>Tên phim</p>
                <span>Home Alone</span>
              </li>
              <li>
                <p>Vé đẵ đặt</p>
                <span>2 Người lớn, 2 Trẻ em, 2 Người cao tuổi</span>
              </li>
              <li>
                <p>Giá</p>
                <span>89.000vnđ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Ticker;  