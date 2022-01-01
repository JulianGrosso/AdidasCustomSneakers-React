import React from "react";
import Picker from "./components/Picker";
import Header from "./components/Header";
import Canvas3D from "./components/Canvas3D";
import BigTitle from "./components/BigTitle";

const App = () => {
	return (
		<>
			<Header />
			<BigTitle />
			<Picker />
			<Canvas3D />
		</>
	);
};

export default App;
