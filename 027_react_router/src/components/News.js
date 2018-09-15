import React, { Component } from 'react';
import News_item from './News_item';
import dl from './Dulieu.json';

class News extends Component {
    render() {
      console.log(dl);
        return (
         
                <div>
                  <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                      <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                          <h1 className="mb-1">danh sách tin</h1>
                        </div>
                      </div>
                    </div>
                    </div>
                  </header>
                  <div className="container">
                    <div className="row mt-3">
                       {
                         dl.map((value , key)=>{
                           return(
                            // new tăng theo số lượng id trong json
                             <News_item key={key}  Tinid={value.id} tieude={value.tieude} noidung={value.noidung} anh={value.anh}/>
                           )
                         })
                       }
                    </div>
                  </div>
              </div>
        );
    }
}

export default News;

// Bước 1 trang new mới đầu rất nhiều tin nhưng đã được component hóa nên còn 1 thẻ tự định nghĩa ---> bước 2 Ltaji trang News_item.js