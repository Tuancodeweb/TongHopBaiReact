import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Thành Phố..."/>
		<input type="text" name="country" placeholder="Quốc Gia(viết tắt)..."/>
		<button>Tìm</button>
	</form>
);

export default Form;