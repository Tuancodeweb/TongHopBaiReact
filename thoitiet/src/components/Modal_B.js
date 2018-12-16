import React from "react";

const Modal_B = props => (
	<div  id="services">
      

       <div className="container">
       <h2>Xin chào  {props.city &&  <td> Thành phố: { props.city } </td> }</h2>
       {props.id &&  <td> Mã số địa danh: { props.id } </td> }            
       <table className="table table-drak">
         <thead>
           <tr>
              <th></th>
             <th>1</th>
             <th>2</th>
             <th>3</th>
             <th>4</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Vị trí</td>
             {props.coord &&  <td> Tung độ: { props.coord } </td> }
             {props.coord2 &&  <td> Vĩ độ: { props.coord2 } </td> }
           </tr>
           <tr>
             <td>Thời tiết</td>
             {props.description &&  <td> Thời tiết: { props.description } </td> }
             {props.icon &&  <td> Biểu tượng: { props.icon } <img src="http://openweathermap.org/img/w/10d.png"></img> </td> }
             {props.id2 &&  <td> Mã số thờ tiết: { props.id2 } </td> }
             {props.main &&  <td> thời tiết hiện tại : { props.main } </td> }
           </tr>
           <tr>
             <td>Đài khí tượng</td>
             {props.base &&  <td> Đo đạc tại: { props.base } </td> }
           </tr>
           <tr>
           <td>Thông tin chính</td>
           {props.humidity &&  <td> Độ ẩm { props.humidity } (%) </td> }
           {props.temp_max &&  <td> Nhiệt độ cao nhất { props.temp_max }  (độ C)</td> }
           {props.temp_min &&  <td> Nhiệt độ thấp nhất { props.temp_min }  (độ C) </td> }
           {props.temperature &&  <td> Nhiệt độ hiện tại{ props.temperature }  (độ C) </td> }
           
         </tr>


         <tr>
         <td>Thông tin gió</td>
         {props.wind &&  <td> Tốc độ gió{ props.wind} (m/s) </td> }
         {props.clould &&  <td> độ che phủ của mây{ props.clould} (%) </td> }
       </tr>


       <tr>
       <td>Hệ thống</td>
       {props.country &&  <td> Quốc gia{ props.country} </td> }
       {props.message &&  <td> Thời gian phản hồi{ props.message} (giây) </td> }
       {props.sunrise &&  <td> Vị trí mặt trời mọc{ props.sunrise} </td> }
       {props.sunset &&  <td> Vị trí mặt trời lặn{ props.sunset} </td> }
     </tr>



         </tbody>
       </table>
       </div>
    


           
         
      
      
    </div>
);

export default Modal_B;

