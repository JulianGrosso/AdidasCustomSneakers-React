import React from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { useSnapshot } from "valtio";
import { state } from "./Sneaker";

const Picker = () => {
	const snap = useSnapshot(state);

	return (
		<PickerContainer
			style={
				({ display: snap.current ? "block" : "none" },
				{
					transform: snap.current ? "translateX(0px)" : "translateX(800px)",
				})
			}
		>
			<h1>{snap.current}</h1>
			<HexColorPickerStyle
				color={snap.items[snap.current]}
				onChange={(color) => (state.items[snap.current] = color)}
			/>
			<HexColorInputStyle
				color={snap.items[snap.current]}
				onChange={(color) => (state.items[snap.current] = color)}
			/>
			{/* <div>{snap.items[snap.current]}</div> */}
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
	align-items: center;

	transition: 250ms all ease-in;

	z-index: 10;

	h1 {
		font-size: 4.5em;
		font-weight: 600;
		line-height: 0.7em;
		letter-spacing: -6px;
		color: #272730;

		width: 100%;

		text-align: left;

		margin-left: -4px;
		margin-bottom: 25px;

		@media screen and (max-width: 768px) {
			width: 90%;
			margin-left: -4px;
			font-size: 2.5em;
			letter-spacing: -3px;
		}
	}

	@media screen and (max-width: 768px) {
		top: 68%;
		left: 0;
		right: 0;
		margin-right: 0;
		margin-left: 0;

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

const HexColorInputStyle = styled(HexColorInput)`
	display: block;
	box-sizing: border-box;
	width: 80px;
	margin-top: 10px;
	padding: 6px;
	border: 1px solid #ddd;
	border-radius: 4px;
	background: #eee;
	outline: none;
	text-transform: uppercase;
	text-align: center;

	:focus {
		border-color: #4298ef;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
