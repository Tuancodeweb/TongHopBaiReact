import React from "react";

const Titles = () => (
	<div>
		<h1 className="title-container__title">Tra cứu thời tiết</h1>
		<h3 className="title-container__subtitle">(Tìm hiểu nhiệt độ, độ ẩm và nhiều hơn thế nữa...!)</h3>
		<iframe className=" title-container map"  src="https://embed.windy.com/embed2.html?lat=18.021&lon=108.633&zoom=5&level=surface&overlay=wind&menu=&message=&marker=&calendar=24&pressure=&type=map&location=coordinates&detail=true&detailLat=21.593&detailLon=105.844&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
	</div>
);

export default Titles;