import React from "react";

const Titles = () => (
	<div>
		<h1 className="title-container__title">Tra cứu thời tiết</h1>
		<h3 className="title-container__subtitle">(Tìm hiểu nhiệt độ, độ ẩm và nhiều hơn thế nữa...!)</h3>
		<iframe width="480" height="450" src="https://embed.windy.com/embed2.html?lat=21.593&lon=105.844&zoom=5&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=true&detailLat=21.593&detailLon=105.844&metricWind=m%2Fs&metricTemp=default&radarRange=-1" frameborder="0"></iframe>
	</div>
);

export default Titles;