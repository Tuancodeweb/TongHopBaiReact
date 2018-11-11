import React from "react";

const Weather = props => (
	<div className="weather__info">
	{ 	
		props.id && <p className="weather__key">Mã số khách: 
			<span className="weather__value"> { props.id } </span>
		</p> 
	}
	{ 	
	props.country && <p className="weather__key">Quốc gia: 
			<span className="weather__value"> { props.country } </span>
		</p> 
	}
	 {	
	 	props.city && props.country && <p className="weather__key"> Vị trí: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Nhiệt độ: 
	 		<span className="weather__value"> { props.temperature }	</span><span>Độ C</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Độ ẩm: 
	 		<span className="weather__value"> { props.humidity } </span><span> % </span>
	 	</p> 
	 }
	 { 	
	 	props.description  &&  props.icon &&<p className="weather__key">thời tiết: 
	 		<span className="weather__value"> { props.description } </span><img src="http://openweathermap.org/img/w/10d.png"/>
	 	</p> 
	 }
	 { 	
		props.temp_max && <p className="weather__key">Nhiệt độ cao nhất: 
			<span className="weather__value"> { props.temp_max } </span><span>Độ C</span>
		</p> 
	}
	{ 	
		props.temp_min && <p className="weather__key">Nhiệt độ thấp nhất: 
			<span className="weather__value"> { props.temp_min } </span><span>Độ C</span>
		</p> 
	}
	{ 	
		props.wind && <p className="weather__key">Tốc độ gió: 
			<span className="weather__value"> { props.wind } </span><span>m/s</span>
		</p> 
	}
	</div>
);

export default Weather;

