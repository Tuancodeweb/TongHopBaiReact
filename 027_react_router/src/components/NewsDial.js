import React, { Component } from 'react';
import dl from './Dulieu.json';
import Newsrelater from './Newsrelater';
class NewsDial extends Component {
    render() {
      var dem = 1;
      // console.log(this.props.match.params.id)
        return (
            <div>
                <div>
  {/* end menu */}
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-7">Tin chi tiết</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}

          {
            // value.id nó lấy dữ liệu  id ở match > param > id để mang ra đối chiếu và so sánh với dữ liệu ở trong Json
             dl.map((value,key)=>{
               // nếu như đồng nhất "==="  đây là so sánh đồng nhất cùng dữ liệu và cùng kiểu "==" sô sánh phỏ thông  
               // hệ 20 ở  parseInt() đại diện cho hệ số phân tích chuỗi 
               // this.props.match.params.id : đại diện cho thông tin id của bài viết nằm ở json
               if(value.id === parseInt(this.props.match.params.id,20))
               {
                 // return bản tin do bản tin này đã bị component
                return(
                  // key={key} : đại diện cho hệ số bài đăng trong mảng 
                  <div className="jumbotron jumbotron-fluid" key={key}>
                  <div className="container">
                    <img src={value.anh} className="img-fluid rong100" alt="demo react" />
                    <p className="lead">{value.tieude}</p>
                    <hr className="my-2" />
                    <p>{value.noidung}</p>
                    
                  </div>
                </div>
                )
               }
               else
               {
                 return true;
               }
            })
          }


  <div className="container">
    <div className="card border-primary">
      <div className="card-body">
        <h4 className="card-title">Tin liên quan</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
          {
            dl.map((value,key) => {
              if(value.id !==  parseInt(this.props.match.params.id,20))
              {
                if((dem) <= 3)
                {
                  dem++;
                  return(
                    <Newsrelater key={key} Tinid={value.id} tieude={value.tieude} noidung={value.noidung} anh={value.anh} />
                  )
                }
                else
                {
                  // warning 
                  return true;
                }
              }
              else
              {
                 // warning 
                return true;
              }
            })
           
          }
        </div>
      </div>
    </div>   
  </div>
  {/* end tintuc */}
</div>

            </div>
        );
    }
}

export default NewsDial;

// đây là 1 trang độc lập  nó là trang [tin chi tiết] mọi chỉ dẫn hãy xem tại trang [DieuhuongURL.js]  dữ liệu tại trang [Dulieu.json]  