import React, { Component } from 'react';
//3 state trạng thái
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: 0
    }
    
  }
  thongbao = () =>{
    alert('thong bao chinh sua he thong');
  }
  thongbao2 = () =>{
    alert('thông báo xóa thư mục');
  }
  // số 1 
    renderButtom = () => {
      return(
        <div className="row">
        <div clasName="btn btn-group">
            <div className="btn btn-info" onClick={() => this.EditClick()}>Edit</div>
            <div className="btn btn-success">Remove</div>
        </div>
        </div>
      );
     
    }
   // số 2
    renderForm = ()=> {
      return(
        <div class="row">
        <div class="form-group">
          <input type="text" ref={(nhapdata) => {this.trunggian = nhapdata}} defaultValue={this.props.tieude} class="form-control" name="" id="" aria-describedby="helpId" />
          <div className="btn btn-block btn-danger" onClick={() => this.SaveForm()}>Save</div>
        </div>
        </div>
      );
    }
    // số 4
    DisplayCheck = () => {
      if(this.state.trangthai === 0){
       return this.renderButtom();
      }
      else{
        return this.renderForm();
      }
    }
    // setstate : nó sẽ đối chiếu trực tiếp đến tham số this.state{trangthai: 0}
    EditClick = () => {
      this.setState({trangthai:1 });
    }
    SaveForm = () => {
      this.setState({trangthai:0 });
      console.log(this.trunggian.value);
    }
    render() {
        return (
       <div>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className={"col-lg-6 " + this.props.vitri}>
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">{this.props.tieude}</h2>
                  <p>
                    {this.props.thongtin}
                  </p>
                    {this.DisplayCheck()}
                  <hr/>
                
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        );
    }
}

export default Content;