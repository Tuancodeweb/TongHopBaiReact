import React, { Component } from 'react';

class Edituser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.UserEditObject.id,
            name : this.props.UserEditObject.name,
            tel : this.props.UserEditObject.tel,
            permission : this.props.UserEditObject.permission
        }
    }
    //----------------------------vừa lưu thông tin vừa làm cầu nối để đẩy thông tin lên app-------------//
    SaveButton = () => {
        // khi ấn vào savebutton tạo đối tượng info thì nó sẽ lấy thông tin ở user
        // gồm ID , NAME , TEL , PERMISSION
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;


      


        this.props.getUserInfo(info);
        this.props.changeEditUserStatus(); // ẩn form
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }



    render() {
        console.log(this.state)
        return (
            <div>

            <form method="POST">
            <div className="card text-left">
            <div className="card text-white bg-info">
            <div className="card-header text-center">Sửa thông tin user</div>
            <div className="card-body">
                <div className="form-group">
                <input type="text" defaultValue={this.props.UserEditObject.name} onChange={(event) => this.isChange(event)} name="name" className="form-control"  id aria-describedby="helpId" placeholder="Tên User" />
                </div>
                <div className="form-group">
                <input type="text" defaultValue={this.props.UserEditObject.tel} onChange={(event) => this.isChange(event)} name="tel" className="form-control"  id aria-describedby="helpId" placeholder="Điện thoại" />
                </div>
                <div className="form-group">
                <select className="custom-select" defaultValue={this.props.UserEditObject.permission} onChange={(event) => this.isChange(event)} name="permission"  required>
                    <option value>Chọn quyền</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modrator</option>
                    <option value={3}>Normal</option>
                </select>
                </div>
                <div className="form-group">
                <input type="button" className="btn btn-block btn-warning" onClick={() => {this.SaveButton()}} value="Lưu"/>
                </div>
            </div>
            </div>
            </div>
            </form>
            
            </div>
        );
    }
}

export default Edituser;