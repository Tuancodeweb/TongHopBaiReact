import React, { Component } from 'react'

export class About_B extends Component {
  render() {
    return (
      <div>
                    {/* About */}
            <section id="about">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">TƯƠNG LAI</h2>
                <h3 className="section-subheading text-muted">Đây là bản dùng thử nên sẽ có nhiều hạn chế hơn bản thương mại</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <ul className="timeline">
                    <li>
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/img/about/1.jpg?raw=true" alt />
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                        <h4>Giai đoạn 1</h4>
                        <h4 className="subheading">Thiết kế</h4>
                        </div>
                        <div className="timeline-body">
                        <p className="text-muted">Chúng tôi sẽ thiết kế lại trang web thay đổi thông tin một vài thành phần</p>
                        </div>
                    </div>
                    </li>
                    <li className="timeline-inverted">
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/img/about/2.jpg?raw=true" alt />
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                        <h4>Giai Đoạn 2</h4>
                        <h4 className="subheading">Hệ Thống</h4>
                        </div>
                        <div className="timeline-body">
                        <p className="text-muted">Cải tiến lại hệ thống tăng khả năng tương tác cung cấp thông tin cho người dùng</p>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/img/about/3.jpg?raw=true" alt />
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                        <h4>Giai Đoạn 3</h4>
                        <h4 className="subheading">Bản Đồ</h4>
                        </div>
                        <div className="timeline-body">
                        <p className="text-muted">Xuất hiện bản đồ thời tiết nông nghiệp và bản đồ thời tiết 2.0</p>
                        </div>
                    </div>
                    </li>
                    <li className="timeline-inverted">
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src="https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/img/about/4.jpg?raw=true" alt />
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                        <h4>Giai Đoạn 4</h4>
                        <h4 className="subheading">Server</h4>
                        </div>
                        <div className="timeline-body">
                        <p className="text-muted">Sử dụng và thuê sẵn các máy chủ mới cung cấp nhu cầu truy cập của người dùng!</p>
                        </div>
                    </div>
                    </li>
                    <li className="timeline-inverted">
                    <div className="timeline-image">
                        <h4>Hoàn Thiện
                        <br />Bản
                        <br />Thương mại!</h4>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </section>

      </div>
    )
  }
}

export default About_B
