import React from "react";
import Picker from "./components/Picker";
import Header from "./components/Header";
import Canvas3D from "./components/Canvas3D";
import SneakerTitle from "./components/SneakerTitle";

const App = () => {
	return (
		<>
			<Header />
			<SneakerTitle />
			<Picker />
			<Canvas3D />
		</>
	);
};

export default App;
