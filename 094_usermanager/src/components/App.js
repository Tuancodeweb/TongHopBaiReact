import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './DATA.json';
const uuidv1 = require('uuid/v1');
class App extends Component {

 //--------------------------------------------------------------------TÌM KIẾM THÀNH VIÊN -------------------------------------------------------------------------------//
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      // dữ liệu chưa có gì 
      Searchtext : '',

//--------------------------------------------------------------------STATE của sửa thông tin ---------------------------------------------------------------------------------//
      // đẩy thông tin vào form sửa cần có 1 state
      editUserStatus : false,
//--------------------------------------------------------------------end STATE của sửa thông tin ----------------------------------------------------------------------------//

//--------------------------------------------------------------------STATE của sửa thông tin - đưa thông tin vào ô sửa ------------------------------------------------------//
      // đặt cho nó trạng thái {} để tí chuyển user vào hàm
      UserEditObject : {}
//--------------------------------------------------------------------end STATE của sửa thông tin - đưa thông tin vào ô sửa --------------------------------------------------//


    }
  }
  // bố chuyển cho con thì thông quan Props
  // con chuyền cho bố thì phải thông qua tên thuộc tính có trong hàm
  getTextSearch = (dl) => {
    this.setState({
      Searchtext : dl
    });
    // alert("dữ liệu bố nhận được là" + this.state.Searchtext);
  }


 //--------------------------------------------------------------------END TÌM KIẾM THÀNH VIÊN -------------------------------------------------------------------------------//




 //--------------------------------------------------------------------SỬA THÀNH VIÊN -------------------------------------------------------------------------------//

changeEditUserStatus = () => {
  this.setState({
    editUserStatus : !this.state.editUserStatus
  });
}

 //--------------------------------------------------------------------end SỬA THÀNH VIÊN -------------------------------------------------------------------------------//



  //--------------------------------------------------------------------THÊM THÀNH VIÊN -------------------------------------------------------------------------------//

  // khâu đóng gói nội dung gửi lên app
  Getnewuserdata = (name , tel , permission) => {
    var item = {}
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;

    var items = this.state.data;
    items.push(item);
    // thêm dữ liệu vào json
    this.setState({
      data : items
    });
    // console.log(items);
    localStorage.setItem("userData",JSON.stringify(items));
  }
  

 //-------------------------------------------------------------------- END THÊM THÀNH VIÊN ----------------------------------------------------------------------------//



 //--------------------------------------------------------------------  SỬA NỘI DUNG ----------------------------------------------------------------------------//

EditFuction = (user) => {
  console.log("Đã kết nối rất là okey");
  this.setState({
    UserEditObject:user
  });
}
  //-------------------------------------------------------------------- END SỬA NỘI DUNG ----------------------------------------------------------------------------//




  //--------------------------------------------------------------------- đẩy nội dung vừa nhập thay đổi vào data ------------------------------------------------------//
  // hàm sửa
  getUserInfoApp = (info) => {
    console.log("thong tin da sua xon la" + info.name)
    this.state.data.forEach((value,key) => {
      if(value.id === info.id)
      {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
  })
  
}
//--------------------------------------------------------------------- endl đẩy nội dung vừa nhập thay đổi vào data ---------------------------------------------------//


//--------------------------------------------------------------------- xóa phần từ bằng hàm filter của ES2015 ---------------------------------------------------//

ClickButtonDelete = (idUser) => {

  var tempdata = this.state.data.filter(item => item.id !== idUser );
  // cập nhật phần tử vào state data.json thông qua tempdata
  this.setState({
    data : tempdata
  });
  localStorage.setItem("userData",JSON.stringify(tempdata))
}
//--------------------------------------------------------------------- endl xóa phần từ bằng hàm filter của ES2015 ---------------------------------------------------//


//--------------------------------------------------------------------- localstorage---------------------------------------------------//


componentWillMount() {
  // kiểm tra xem có localStorage chưa
  // console.log(localStorage.getItem("dataUser"));
  if(localStorage.getItem("userData") === null)
  {
    localStorage.setItem("userData",JSON.stringify(DataUser));
  }
  else{
    var temp = JSON.parse(localStorage.getItem("userData"));
    this.setState({
      data : temp
    });

  }
}




//--------------------------------------------------------------------- end localstorage---------------------------------------------------//







 // ------------------------------------------------------------------ kết quả tìm kiếm -------------------------------------------------------------------------------//
  render() {

  // localStorage.setItem("dataUser",JSON.stringify(DataUser));


    // // tạo mới local storage
    // localStorage.setItem("key 1","hehe tôi tên tuân");
    // // mở thằng localstrorage 
    // localStorage.getItem("key 1");
    // // xóa thằng localstorage
    // localStorage.removeItem("key 1");






    // tìm phần tử để đối chiếu so sánh vs từ khóa ta vừa nhập ở search nếu 
    // trùng nhau thì ta in nó ra thông tin người đó
    // nếu không trùng nhau thì thông báo không có gì
      var ketqua = [];
        this.state.data.forEach((item) => {
          //forEach nó duyệt từng phần tử trong mảng json
          // search text là giá trị vừa điền vào 
          // indexOf là 1 hàm tìm kiếm ở javascript
          // !== -1 : có phần từ   [trong javascript không có phần từ sẽ báo -1]
          if(item.name.indexOf(this.state.Searchtext) !== -1){
            // nếu dl nó trùng vs từ name
            // push đẩy vào
            ketqua.push(item);
          }
        });

        // sau khi tìm kiếm thành công thì từ khóa nhập sẽ được in ra
        // vào biến kết quả

 // ------------------------------------------------------------------end kết quả tìm kiếm -----------------------------------------------------------------------------//
    return (
      
      <div>
        <Header/>

        <div className="search-form">
          <div className="container">
            <div className="row">

                <div className="col-12">
                  <Search 
                  getUserInfoApp={(info) => {this.getUserInfoApp(info)}}
                  ketnoi={()=>{this.thongbao()}} 
                  checkconnect = {(dl) => this.getTextSearch(dl)} 
                  editUserStatus={this.state.editUserStatus} 
                  UserEditObject={this.state.UserEditObject}  
                  changeEditUserStatus={() => {this.changeEditUserStatus()}}/>
                </div>

                <div className="col-12">
                  <hr/>
                </div>

                <TableData 
                ClickButtonDelete={(idUser) => {this.ClickButtonDelete(idUser)}}
                 TEST={(user) => this.EditFuction(user)} 
                 dataUserprop={ketqua} 
                 changeEditUserStatus={() => {this.changeEditUserStatus()}}
                 />
                
                <AddUser add={(name,tel,permission) => this.Getnewuserdata(name,tel,permission)}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
