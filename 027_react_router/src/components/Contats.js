import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
class Contats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // mới đầu nên đặt là chưa chuyển hướng nhé
      chuyenhuhongtrang : false,
      fNgay : "thu5"
    }
  }

  ischange = (event) => {
    // tên của thành phần ta đang nhập dữ liệu vào
    const ten = event.target.name;
    // tên dữ liệu đang nhập
    const giatri = event.target.value;
    this.setState({
      [ten]: giatri
    });
  }

    isFile = (event) => {
      // đưa ra info của bức ảnh 
      // const fFile = event.target.files[0];
      const tenanh = event.target.files[0].name;
      this.setState(
        {
          fFile : tenanh
        }
      );
    }




  // hàm này là bắt sự kiện click vào nút submit ở liên hệ
  submitForm = (event) => {
    // preventDefault : ngăn chặn hành động mặc định của nó trước bởi vì thông thường khi chuyển hướng trang web thì nó đến trang khác
    //mình ngăn chặn hành động này của nó thì nó sẽ k chuyển hướng
    event.preventDefault();
    this.setState(
      {
        //setstate nó có công dụng thay đổi giá trị sate khi 1 hành động xảy ra ở đây mình đặt là true là báo rằng nó đã được chuyển hướng
        chuyenhuhongtrang : true
      }
    );
  }

  getGiatri = () => {
    var Noidung = "";
    Noidung += "Tên nhận được là : " + this.state.fName;
    Noidung += "Email nhận được là: " + this.state.fMail;
    Noidung += "Phone nhận được là: " + this.state.fPhone;
    Noidung += "Noi dung nhận được là: " + this.state.fMess;
    Noidung += "ngay nhan la nhận được là: " + this.state.fNgay;
    Noidung += "anh  nhận được là: " + this.state.tenanh;
    return Noidung;
  }
    render() {
      // chuyển hướng trang ở đây phụ thuộc vào state ở this.state nhận 2 giá trị true || false || 1 || 0
      if (this.state.chuyenhuhongtrang) {
        // kết quả
        console.log(this.getGiatri());
        // redirect : có công dụng chuyển hướng  muốn dùng phải cài thư viện của ó
        return <Redirect to="/" />;
      }
        return (
            <div>
  {/* end menu */}
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1">Liên hệ thông tin</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}
  <section id="contact">
    <div className="container">
      <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
      <hr className="star-dark mb-5" />
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
          {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input className="form-control" name="fName" onChange={(event) => this.ischange(event)} id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input className="form-control" name="fMail" onChange={(event) => this.ischange(event)} id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input className="form-control" name="fPhone" onChange={(event) => this.ischange(event)} id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea className="form-control" name="fMess" onChange={(event) => this.ischange(event)} id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>

            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Ngày Thứ</label>
                  <select value={this.state.fNgay} class="form-control" name="fNgay" onChange={(event) => this.ischange(event)}>
                    <option value="thu3">Ngày Thứ 3</option>
                    <option value="thu5">Ngày Thứ 5</option>
                    <option value="cn">Ngày Chủ Nhật</option>
                  </select>
              </div>
            </div>


            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Input File</label>
                      <input type="file" onchange={(event) => this.isFile()} className="form-control-file" name="fFile"/>
              </div>
            </div>

            <br />


            <div id="success" />
            <div className="form-group">
              <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end tintuc */}
</div>
        );
    }
}

export default Contats;

 // redirect : có công dụng chuyển hướng  muốn dùng phải cài thư viện của ó