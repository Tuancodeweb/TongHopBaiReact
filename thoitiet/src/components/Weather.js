import React from "react";

const Weather = props => (
	<div className="weather__info">
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
	 	props.description && <p className="weather__key">thời tiết: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;