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
          
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid_ht" src="https://avatars.mds.yandex.net/get-pdb/234183/9b33f103-0ea9-46e9-855f-528c4442990d/orig" alt />
           
            <div className="portfolio-caption">
                <h4>VỊ TRÍ</h4>
                <p className="text-muted">tọa độ vị trí địa danh</p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
          
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid_ht" src="https://cdnmedia.thethaovanhoa.vn/Upload/tyTrfgkgEUQwPYuvZ4Kn1g/files/2018/11/111/hnll.jpg" alt />
           
            <div className="portfolio-caption">
                <h4>THỜI TIẾT</h4>
                <p className="text-muted">tìm kiếm thời tiết khu vụ </p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
           
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid_ht" src="https://znews-photo.zadn.vn/w660/Uploaded/ycgvpvpc/2018_11_07/8HN_thumb.jpg" alt />
         
            <div className="portfolio-caption">
                <h4>Thông tin chính</h4>
                <p className="text-muted">tìm hiểu thông tin về thời tiết ngày hôm nay</p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
            
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid_ht" src="http://choiphongthuy.com/uploads/images/49ce3922_wind.jpg" alt />
           
            <div className="portfolio-caption">
                <h4>Mưa , Mây , Gió </h4>
                <p className="text-muted">tìm hiểu thông tin về lượng mưa tốc độ gió trong ngày</p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
           
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid_ht" src="http://thienvanhanoi.org/wp-content/uploads/2018/01/22-10VHXH13.jpg" alt />
           
            <div className="portfolio-caption">
                <h4>Đài Khí Tượng</h4>
                <p className="text-muted">thông tin về đài khí tượng
                    
                </p>
            </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
           
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
                </div>
                <img className="img-fluid_ht" src="https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAwMC8xMjYvb3JpZ2luYWwvY2hpbGUtZWFydGhxdWFrZS1lYXJ0aC1kYXlzMi0xMDAzMDItMDIuanBn" alt />
           
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
