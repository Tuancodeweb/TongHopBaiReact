import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "23de0e24cbcc499f500b127c6150bfc8";

class App extends React.Component {
  state = {
    id : undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    temp_max : undefined,
    temp_min : undefined,
    icon : undefined,
    wind : undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
  
    // const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=7&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city) {
      this.setState({

        id: data.id,
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        temp_max : data.main.temp_max,
        temp_min : data.main.temp_min,
        icon : data.weather[0].icon,
        wind : data.wind.speed,
        error: ""
      });
    } else {
      this.setState({
        id : undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        temp_max : undefined,
        temp_min : undefined,
        icon : undefined,
        wind : undefined,
        error: "Nhập giá trị khác"
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5  title-container">
                    <div class="d-flex justify-content-start"><Titles /></div>
                 
                </div>
                <div className="col-xs-7 form-container">
                <div class="d-flex justify-content-end">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    id = {this.state.id}
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    temp_max = {this.state.temp_max}
                    temp_min = {this.state.temp_min}
                    icon = {this.state.icon}
                    wind = {this.state.wind}
                    error={this.state.error}
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;