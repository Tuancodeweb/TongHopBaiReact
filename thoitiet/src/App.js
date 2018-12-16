import React from "react";

import Header_B  from "./components/Header_B";
import Services_B  from "./components/Services_B";
import  Grid from "./components/Grid";
import  About_B  from "./components/About_B";
import Footer_B  from "./components/Footer_B";
import  Modal_B  from "./components/Modal_B";
import Form from "./components/Form";
import { Navidation_B } from "./components/Navidation_B";



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
    coord: undefined,
    coord2: undefined,
    id2 : undefined, 
    main : undefined,
    message : undefined,
    sunrise : undefined,
    sunset : undefined,
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
        coord : data.coord.lon,
        coord2 : data.coord.lat,

        description: data.weather[0].description,
        icon : data.weather[0].icon,
        id2 : data.weather[0].id,
        main : data.weather[0].main,

        base : data.base,

        humidity: data.main.humidity,
        temp_max : data.main.temp_max,
        temp_min : data.main.temp_min,
        temperature: data.main.temp,

        wind : data.wind.speed,

        clould : data.clouds.all,


        country: data.sys.country,
        message : data.sys.message,
        sunrise : data.sys.sunrise,
        sunset : data.sys.sunset,




        id: data.id,
        city: data.name,
        
       
        
       
       
        
        error: ""
      });
    } else {
      this.setState({
        id : undefined,
        main : undefined,
        coord : undefined,
        temperature: undefined,
        message : undefined,
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
         id2 : undefined, 
         sunrise : undefined,
         sunset : undefined,
        error: "Nhập giá trị khác"
      });
    }
  }
  render() {
    return (
      <div>
          <Header_B/>
            <Services_B/>
              <Grid/>
              <Form getWeather={this.getWeather} />
              <Modal_B
             
              coord = {this.state.coord}
              coord2 = {this.state.coord2}

              description={this.state.description}
              icon = {this.state.icon}
              id2 = {this.state.id2}
              main = {this.state.main}



              base = {this.state.base}


              humidity={this.state.humidity}
              temp_max = {this.state.temp_max}
              temp_min = {this.state.temp_min}
              temperature={this.state.temperature} 


              wind = {this.state.wind}
              clould = {this.state.clould} 

              country={this.state.country}
              message={this.state.message}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}

              


              id = {this.state.id}
              city={this.state.city}
            
             
              error={this.state.error}
              
              />
               

                  <Footer_B/>
      </div>
    );
  }
};

export default App;