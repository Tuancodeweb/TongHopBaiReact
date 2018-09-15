import React, { Component } from 'react';

class Tabledatarow extends Component {
Phanquyen = () => {
    if(this.props.per === "1"){return("Admin")}
    else if (this.props.per === "2"){return("Morador")}
    else return("nomal men")
}
ClickEditFunction = () => {
    this.props.TEST2();
    this.props.changeEditUserStatus();
}
ClickButtonDelete = (idUser) => {
   this.props.ClickButtonDelete(idUser);
}
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                    <td>{this.props.username}</td>
                        <td>{this.props.tel}</td>
                            <td>{ this.Phanquyen()}</td>
                            <td>
                            <div className="btn-group">
                                <div className="btn btn-warning sua" onClick={() => {this.ClickEditFunction()}} ><i className="fa fa-edit" />Sửa</div>
                                    <div className="btn btn-danger xoa" onClick={(idUser) => this.ClickButtonDelete(this.props.id)}><i className="fa fa-delete" />Xóa</div>
                                </div>  
                </td>
            </tr>
        );
    }
}

export default Tabledatarow;