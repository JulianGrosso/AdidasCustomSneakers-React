import React, { useState } from "react";
import styled from "styled-components";

const InfoCard = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{open ? (
				<InfoCardContainer>
					<CloseButtom
						onClick={(e) => {
							e.stopPropagation();
							setOpen(!open);
						}}
					>
						x
					</CloseButtom>
					<InfoWrap>
						<h3>ADIDAS CUSTOM SNEAKERS</h3>
						<p>
							This project is an interactive experience built with React and
							Three.js.
						</p>
						<p>
							It is part of an educational exercise in which I simulate the case
							of a brand (in this case Adidas), which requires a web app that
							allows potential customers to customize their sneakers.
						</p>
						<p>
							In this MVP I focused on the user being able to customize each
							part of the shoe easily and simply on a desktop or mobile device.
						</p>
						<p>
							Framework and Tools: React.js, Three.js, Styled-components,
							React-Three-Fiber, Drei and Valtio.
						</p>
						<p>
							Made with ❤ by{" "}
							<a
								href="https://www.linkedin.com/in/juliangrosso/"
								target="_blank"
							>
								Julian Grosso
							</a>
							, front-end developer in training.
						</p>
						<SocialMediaWrap>
							<LinkedInLink
								href="https://www.linkedin.com/in/juliangrosso/"
								target="_blank"
								rel="noopener"
							>
								<img src="../assets/linkedin-logo.svg" alt="LinkedIn" />
							</LinkedInLink>
							<GitHubLink
								href="https://github.com/JulianGrosso/AdidasCustomSneakers-React"
								target="_blank"
								rel="noopener"
							>
								<img src="../assets/github-logo.svg" alt="Github" />
							</GitHubLink>
						</SocialMediaWrap>
					</InfoWrap>
				</InfoCardContainer>
			) : (
				<InfoButtom
					onClick={(e) => {
						e.stopPropagation();
						setOpen(!open);
					}}
				>
					i
				</InfoButtom>
			)}
		</>
	);
};

export default InfoCard;

const InfoButtom = styled.button`
	color: #b4b4b4;
	font-size: 18px;
	width: 40px;
	height: 40px;
	margin-top: -20px;
	margin-right: -20px;
	position: absolute;
	top: 40px;
	right: 40px;
	border: none;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
	border-radius: 50%;
	background-color: #e9e9e9;
	cursor: pointer;
	user-select: none;
	z-index: 28;
	transition: all 150ms ease-in-out;

	:hover {
		color: #000;
		background-color: #fff;
		box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
	}

	@keyframes open {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	animation: open 200ms ease-out 0s;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const InfoCardContainer = styled.div`
	width: 550px;
	height: 460px;
	margin-left: -275px;
	margin-top: -230px;
	padding: 30px;
	background-color: rgba(250, 250, 250, 0.6);
	backdrop-filter: blur(8px);
	border-radius: 8px;
	box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.15);
	position: absolute;
	top: 50%;
	bottom: 50%;
	left: 50%;
	right: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	user-select: none;
	z-index: 28;

	@keyframes open {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	animation: open 200ms ease-out 0s;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const CloseButtom = styled.button`
	width: 30px;
	height: 30px;
	background-color: transparent;
	border: none;
	font-size: 18px;
	color: #000;
	position: absolute;
	top: 4px;
	right: 5px;

	cursor: pointer;
`;

const InfoWrap = styled.div`
	width: 100%;

	p {
		font-size: 16px;
		margin-top: 20px;
	}

	h5 {
		margin-top: 20px;
	}

	a {
		text-decoration: none;
		color: #000;
		font-weight: 600;
	}
`;

const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 15px;
	gap: 5px;
`;

const LinkedInLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: -4px;

	img {
		width: 45px;
		height: auto;
	}
`;

const GitHubLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 34px;
		height: auto;
	}
`;
