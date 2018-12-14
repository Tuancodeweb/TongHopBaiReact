import React from "react";
import { navigation_B } from "./components/navigation_B";
import { Header_B } from "./components/Header_B";
import { Services_B } from "./components/Services_B";
import { Grid } from "./components/Grid";

// import Titles from "./components/Titles";
// import Form from "./components/Form";
// import Weather from "./components/Weather";

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
    clould : undefined,
    base : undefined,
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
        clould : data.clouds.all,
        base : data.base,
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
        clould : undefined,
        base : undefined,
        error: "Nhập giá trị khác"
      });
    }
  }
  render() {
    return (
      <div>
        <navigation_B/>
          <Header_B/>
            <Services_B/>
              <Grid/>
      </div>
    );
  }
};

export default App;