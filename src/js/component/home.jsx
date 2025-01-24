import React from "react";
import TrafficLight from "./TrafficLight";



//create your first component
const Home = () => {
	return (
		<div className="container mt-5">
		<h1 className="text-center mb-4">Semáforo</h1>
		<TrafficLight /> {/* Renderizamos el semáforo */}
	  </div>
	);
};

export default Home;
