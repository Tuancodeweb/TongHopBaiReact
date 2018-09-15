import React, { Component } from 'react';

class AddUser extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            trangthai : true,
            id : "",
            name : "",
            tel :"",
            permission : ""
        }
    }

        // lấy dữ liệu nhập vào là gì đã
        isChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            
            // đẩy toàn bộ giá trị vào state
            this.setState({
                [name]:value
            });
        }
        
    

    thaydoitrangthai = () => {
        this.setState({
            trangthai : !this.state.trangthai
        });
    }
    
    hienthinut = () => {
        if(this.state.trangthai === true)
        {
           
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thaydoitrangthai()}>Đóng lại</div>;
        }
        else
        {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.thaydoitrangthai()}>Thêm mới</div>;
        }
    }


    hienthiform = () => {
        if(this.state.trangthai === true)
        {
            return (
                <form>
                    <div className="card text-left">
                        <div className="card text-white bg-primary">
                        <div className="card-header">Thêm mới User vào hệ thống</div>
                        <div className="card-body">
                            <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control"  id aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control"  id aria-describedby="helpId" placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                            <select className="custom-select" onChange={(event) => this.isChange(event)} name="permission"  required>
                                <option value>Chọn quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <input type="reset" className="btn btn-block btn-warning" onClick={(name,tel,permission) => this.props.add(this.state.name,this.state.tel,this.state.permission)} value="thêm mới"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
            )
        }
    }

    

    render() {
        return (
            <div className="col-3">

           {
               this.hienthinut()
           }
           {
               this.hienthiform()
           }
              
            </div>

        );
    }
}

export default AddUser;