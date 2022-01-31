import React from "react";
import Picker from "./components/Picker";
import Header from "./components/Header";
import Canvas3D from "./components/Canvas3D";
import BigTitle from "./components/BigTitle";
import CallToAction from "./components/CallToAction";
import styled from "styled-components";
import InfoCard from "./components/InfoCard";

const App = () => {
	return (
		<Home>
			<Header />
			<BigTitle />
			<Picker />
			<CallToAction />
			<Canvas3D />
			<InfoCard />
		</Home>
	);
};

export default App;

const Home = styled.div`
	position: relative;

	width: 100vw;
	height: 100vh;

	overflow: hidden;
`;
