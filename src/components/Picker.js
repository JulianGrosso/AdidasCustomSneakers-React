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
			<Card>
				<h1>{snap.current}</h1>
				<HexColorPickerStyle
					color={snap.items[snap.current]}
					onChange={(color) => (state.items[snap.current] = color)}
				/>
				<InputWrap>
					<p>#ColorCode: </p>
					<HexColorInputStyle
						color={snap.items[snap.current]}
						onChange={(color) => (state.items[snap.current] = color)}
					/>
				</InputWrap>
			</Card>
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
	justify-content: center;

	transition: 250ms all ease-in;

	z-index: 10;

	@media screen and (max-width: 768px) {
		top: auto;
		bottom: 12%;
		left: 0;
		right: 0;
		margin-right: 0;
		margin-left: 0;
		width: 100%;
	}
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 25px;
	border-radius: 14px;
	background-color: rgba(250, 250, 250, 0.25);
	backdrop-filter: blur(8px);
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);

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

		user-select: none;

		@media screen and (max-width: 768px) {
			width: 90%;
			margin-left: -4px;
			font-size: 2.5em;
			letter-spacing: -3px;
			margin-bottom: 15px;
		}
	}

	@media screen and (max-width: 768px) {
		width: 85%;
		padding: 20px 10px;
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

const InputWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	p {
		margin-top: 8px;
		margin-right: 4px;
		font-size: 14px;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const HexColorInputStyle = styled(HexColorInput)`
	display: block;
	box-sizing: border-box;
	width: 65px;
	margin-top: 10px;
	padding: 6px;
	border: 1px solid rgba(0, 0, 0, 0);
	border-radius: 4px;
	background: transparent;
	outline: none;
	text-transform: uppercase;
	text-align: center;

	:focus {
		border: 1px solid;
		border-color: #aaa;
		background: rgba(250, 250, 250, 0.25);
	}
`;
