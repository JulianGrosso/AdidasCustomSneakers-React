import React from "react";
import styled from "styled-components";

const Header = () => {
	return (
		<LogoContainer>
			<img src="./assets/logo.svg" alt="" />
		</LogoContainer>
	);
};

export default Header;

const LogoContainer = styled.div`
	width: 100vw;
	height: 80px;

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 1;

	img {
		width: 80px;
		height: auto;
		object-fit: contain;
	}
`;
