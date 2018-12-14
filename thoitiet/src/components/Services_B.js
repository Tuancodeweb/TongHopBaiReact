import React, { Component } from 'react'

export class Services_B extends Component {
  render() {
    return (
      <div>
                        {/* Services */}
                <section id="services">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">KimtanCF</h2>
                    <h3 className="section-subheading text-muted">website cung cấp cho các bạn thông tin quan trọng về thời tiết</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary" />
                        <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">thiết kế</h4>
                    <p className="text-muted">Trang web được thiết kế dẹp thân thiện với người dùng được đội ngũ thiết kế web tạo lên và đánh giá cao hoạt đột trên mọi thiết bị</p>
                    </div>
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary" />
                        <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">Dữ liệu</h4>
                    <p className="text-muted">Trang lấy thông tin dữ liệu API openweathermap đảm bảo độ tin cậy cao </p>
                    </div>
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary" />
                        <i className="fas fa-lock fa-stack-1x fa-inverse" />
                    </span>
                    <h4 className="service-heading">Thông tin</h4>
                    <p className="text-muted">được thiết kế trong một thời gian ngắn website liên tục được update và cải tiến những chức năng mới</p>
                    </div>
                </div>
                </div>
                </section>

      </div>
    )
  }
}

export default Services_B
