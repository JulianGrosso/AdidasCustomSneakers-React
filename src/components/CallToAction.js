import React, { useState } from "react";
import styled from "styled-components";
import { state } from "./Sneaker";

const CallToAction = () => {
	const [visible, setVisible] = useState(true);

	return (
		<>
			{visible && (
				<FullContainer
					onClick={(e) => {
						e.stopPropagation();
						setVisible(!visible);
						return (state.current = "mesh");
					}}
				>
					<Wrap>
						<img src="./assets/icontouch.svg" alt="Tap here" />
					</Wrap>
				</FullContainer>
			)}
		</>
	);
};

export default CallToAction;

const FullContainer = styled.div`
	position: absolute;

	top: 0%;

	padding-top: 120px;

	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 30;

	cursor: pointer;

	overflow: hidden;

	@media screen and (max-width: 768px) {
		padding-top: 80px;
	}
`;

const Wrap = styled.div`
	height: 60px;
	width: 60px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.5);
	border: none;
	border-radius: 50%;
	padding: 15px 20px;

	img {
		width: 25px;
		height: auto;

		@media screen and (max-width: 768px) {
			width: 25px;
		}
	}

	@media screen and (max-width: 768px) {
		height: 60px;
		width: 60px;
	}
`;
