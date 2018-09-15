import React, { Component } from 'react';

class News_item extends Component {

// conver đường link URL để tiện trong việc SEO
    ChuyendoiURL = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
    }
// END conver
    render() {
        return (
        <div className="col-4">
            <div className="card">
            {/* với kiểu đường dẫn thế này if (this.chuyendoiURL) return tieu-de-de-mo  else (this.props.tieude) return tieu%de%de%mo */}
                <a href={"/chi-tiet-tin/"+ this.ChuyendoiURL(this.props.tieude) + "." + this.props.Tinid +".html" }><img src={this.props.anh} alt="demo react" className="img-fluid" /></a>
                    <div className="card-body">
                        <blockquote className="blockquote">
                            <h4 className="card-title"><a href="/chi-tiet-tin">{this.props.tieude}</a></h4>
                             <p>{this.props.noidung}</p>
                        </blockquote>
                    </div>
            </div>
        </div>
        );
    }
}

export default News_item;