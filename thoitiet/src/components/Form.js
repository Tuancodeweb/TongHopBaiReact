import React from "react";

const Form = props => (
	<form className="DMMMM" onSubmit={props.getWeather}>
		<input type="text" name="city"  placeholder="Thành Phố..."/>
		<button>Tìm</button>
	</form>
);

export default Form;



