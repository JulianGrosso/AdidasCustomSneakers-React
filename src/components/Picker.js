import React from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { useSnapshot } from "valtio";
import { state } from "./Sneaker";

const Picker = () => {
	const snap = useSnapshot(state);

	return (
		<PickerContainer style={{ display: snap.current ? "block" : "none" }}>
			<h1>{snap.current}</h1>
			<HexColorPickerStyle
				color={snap.items[snap.current]}
				onChange={(color) => (state.items[snap.current] = color)}
			/>
		</PickerContainer>
	);
};

export default Picker;

const PickerContainer = styled.div`
	position: absolute !important;

	top: 30%;
	right: 0;
	margin-right: 40px;

	display: flex;
	flex-direction: column;

	z-index: 10;

	h1 {
		font-size: 4.5em;
		font-weight: 600;
		line-height: 0.7em;
		letter-spacing: -6px;
		color: #272730;

		text-align: left;

		margin-left: -4px;
		margin-bottom: 25px;

		@media screen and (max-width: 768px) {
			font-size: 2.5em;
			letter-spacing: -3px;
		}
	}

	@media screen and (max-width: 768px) {
		top: 68%;
		left: 0;
		right: 0;
		margin-right: 0;
		margin-left: 20px;

		width: 100%;
	}
`;

const HexColorPickerStyle = styled(HexColorPicker)`
	width: 220px !important;
	height: 150px !important;

	@media screen and (max-width: 768px) {
		height: 125px !important;
		width: 90% !important;
	}
`;
