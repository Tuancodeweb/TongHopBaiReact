import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "23de0e24cbcc499f500b127c6150bfc8";

class App extends React.Component 
{
  state = {
    //------------------info 2.5 Weather-----------------------//
    temperature: undefined, // gọi giá trị của nhiệt độ
    city: undefined, // gọi giá trị tên thành phố
    country: undefined, // gọi giá trị tên quốc gia
    humidity: undefined, // gọi giá trị độ ẩm
    description: undefined, // gọi giá trị của điều kiện thời tiết
    error: undefined, // báo lỗi


    // //---------------- map 2.0 Weather ------------------------//

    // opmap : undefined, // kiểu map chọn là TA2 hoặc 1 lít
    // zoom : undefined,  // tỉ lệ zoom của bản đồ
    // latX : undefined,  // tọa độ trục X
    // lonY : undefined, // tọa độ trục Y
    // date : undefined, // thời gian  cập nhật 
    // opacity : undefined, // độ mờ của lớp bản đồ
    

  
  }
  getWeather = async (e) => 
  {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else 
    {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Vui lòng nhập các giá trị khác"
      });
    }

    // ____________________________________________________**tham số cho lớp bản đồ 2.0**____________________________________//

  // getWeather1 = async (e1) => 
  // {
  //   e1.preventDefault();
  //   // const city = e.target.elements.city.value;
  //   // const country = e.target.elements.country.value;

  //   const opmap = e.target.elements.opmap.value;
  //   const zoom = e.target.elements.zoom.value;
  //   const latX = e.target.elements.latX.value;
  //   const lonY = e.target.elements.lonY.value;
    
  //   const opacity = e.target.elements.opacity.value;





  //   const api_call = await fetch(`http://api.openweathermap.org/maps/2.0/weather/${opmap}/${zoom}/${latX}/${lonY}?date=1527811200&opacity=${opacity}&fill_bound=true&appid=${API_KEY}`);
  //   const data = await api_call.json();
  //   if (latX && lonY) {
  //     this.setState({
  //       opmap: data.main.opmap,
  //       zoom: data.zoom,
  //       latX: data.sys.latX,
  //       lonY: data.sys.lonY,
  //       opacity : data.main.opacity,
  //       error: ""
  //     });
  //   } else 
  //   {
  //     this.setState({
  //       opmap: undefined,
  //       zoom: undefined,
  //       latX: undefined,
  //       lonY: undefined,
  //       opacity : undefined,
  //       error: "Vui lòng nhập các giá trị khác"
  //     });
  //   }

  // }

  render()
  {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form 
                  getWeather={this.getWeather} 
                  />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

}

export default App;