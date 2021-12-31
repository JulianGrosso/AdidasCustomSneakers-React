import React from "react";
import styled from "styled-components";

const SneakerTitle = () => {
	return (
		<Container>
			<h1>YOUR WAY YOUR SNEAKERS</h1>
		</Container>
	);
};

export default SneakerTitle;

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
	}

    @media screen and (max-width: 1280px) {
		top: 38%;
        max-width: 200px;
	}

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
