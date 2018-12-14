import React, { Component } from 'react'

export class Grid extends Component {
  render() {
    return (
      <div>
        {/* Portfolio Grid */}
        <section className="bg-light" id="portfolio">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">DỊCH VỤ</h2>
            <h3 className="section-subheading text-muted">Dịch vụ website cung cấp cho bạn</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img classname="img-fluid"src="https://avatars.mds.yandex.net/get-pdb/234183/9b33f103-0ea9-46e9-855f-528c4442990d/orig" alt />
            </a>
            <div className="portfolio-caption">
                <h4>VỊ TRÍ</h4>
                <p className="text-muted">tọa độ vị trí địa danh</p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid" src="https://cdnmedia.thethaovanhoa.vn/Upload/tyTrfgkgEUQwPYuvZ4Kn1g/files/2018/11/111/hnll.jpg" alt />
            </a>
            <div className="portfolio-caption">
                <h4>THỜI TIẾT</h4>
                <p className="text-muted">tìm kiếm thời tiết khu vụ </p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid" src="https://znews-photo.zadn.vn/w660/Uploaded/ycgvpvpc/2018_11_07/8HN_thumb.jpg" alt />
            </a>
            <div className="portfolio-caption">
                <h4>Thông tin chính</h4>
                <p className="text-muted">tìm hiểu thông tin về thời tiết ngày hôm nay</p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid" src="http://choiphongthuy.com/uploads/images/49ce3922_wind.jpg" alt />
            </a>
            <div className="portfolio-caption">
                <h4>Mưa , Mây , Gió </h4>
                <p className="text-muted">tìm hiểu thông tin về lượng mưa tốc độ gió trong ngày</p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid" src="http://thienvanhanoi.org/wp-content/uploads/2018/01/22-10VHXH13.jpg" alt />
            </a>
            <div className="portfolio-caption">
                <h4>Đài Khí Tượng</h4>
                <p className="text-muted">thông tin về đài khí tượng</p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid" src="https://vdo.vn/wp-content/uploads/2017/06/managed-server-hosting-your-server-in-the-cloud-5239686041.jpg" alt />
            </a>
            <div className="portfolio-caption">
                <h4>Hệ thống hoạt động</h4>
                <p className="text-muted">Photography</p>
            </div>
            </div>
        </div>
        </div>
        </section>

      </div>
    )
  }
}

export default Grid
