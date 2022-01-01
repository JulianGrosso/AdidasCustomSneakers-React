import React from "react";
import styled from "styled-components";

const BigTitle = () => {
	return (
		<Container>
			<h1>YOUR WAY YOUR SNEAKERS</h1>
		</Container>
	);
};

export default BigTitle;

const Container = styled.div`
	max-width: 400px;

	position: absolute !important;
	top: 34%;
	left: 0;
	margin-left: 20px;

	z-index: 1;

	h1 {
		font-size: 6em;
		font-weight: 800;
		line-height: 0.8em;
		letter-spacing: -6px;
		color: #272730;
		text-align: left;

		@media screen and (max-width: 1280px) {
			font-size: 5em;
		}

		@media screen and (max-width: 768px) {
			font-size: 2em;
			line-height: 0.9em;
			letter-spacing: -2px;
			text-align: right;
		}
	}

	@media screen and (max-width: 1280px) {
		top: 38%;
		max-width: 200px;
	}

	@media screen and (max-width: 768px) {
		max-width: 160px;

		top: 14.5%;
		left: auto;
		right: 0%;
		margin-right: 18px;
	}
`;
