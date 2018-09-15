import React, { Component } from 'react';
import Edituser from './Edituser';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempvalue : '',
            UserInfo : {}
        }
    }
    
    ischange = (event) => {
        //(event.target.value đưa dữ liệu ta vừa nhập vào ra thằng console.log
        // event.target.id đưa dữ liệu dạng ID ra 
        console.log(event.target.value);
        this.setState({
            tempvalue : event.target.value
        });
        // nó sẽ tự động tìm kiếm dữ liệu k cần ấn submit
        this.props.checkconnect(this.state.tempvalue);
    } 

    //-------------------------------Đẩy dữ liệu vào search---------------------------------/
    // đây chính là state thay đổi  || khi nhập thông tin vào ô sửa thì nó thay đổi ở sate search
    getUserInfo = (info) => {
        this.setState({
            UserInfo : info
        });
        // chuyền thông tin sửa từ search về app
        // có thông báo ở app
        this.props.getUserInfoApp(info);

        
    }
    //-------------------------------end Đẩy dữ liệu vào search---------------------------------//



    isShowForm = () => {
        if(this.props.editUserStatus === true)
        {
            return (<Edituser getUserInfo={(info) => {this.getUserInfo(info)}} UserEditObject={this.props.UserEditObject} changeEditUserStatus={() => {this.props.changeEditUserStatus()}}/>);
        }
    }
    render() {
        return (
                <div className="row">

                        <div className="form-group">
                        {this.isShowForm()}
                        <div className="btn-group">
                            <input type="text" style={{width: 531}} className="form-control" onChange={(event) => this.ischange(event)} name id aria-describedby="helpId" placeholder="Nhập từ khóa" />
                                <div className="btn btn-info"  onClick={(dl) =>this.props.checkconnect(this.state.tempvalue)}>Tìm kiếm</div>
                        </div>
                    </div>
                </div>
           
        );
    }
}

export default Search;  