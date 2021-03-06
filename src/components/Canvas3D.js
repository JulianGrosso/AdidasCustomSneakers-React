import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	ContactShadows,
	Environment,
	OrbitControls,
	Html,
	useProgress,
} from "@react-three/drei";
import Sneaker from "./Sneaker";
import styled from "styled-components";

let CamaraPosition = {};

const screenWidth = (windowWidth) => {
	if (windowWidth <= 768) {
		return (CamaraPosition = { position: [3, 2, 4], fov: 45 });
	} else if (windowWidth > 768 && windowWidth <= 1000) {
		return (CamaraPosition = { position: [3, 2, 4], fov: 35 });
	} else if (windowWidth > 1000 && windowWidth <= 1200) {
		return (CamaraPosition = { position: [3, 2, 4], fov: 30 });
	} else {
		return (CamaraPosition = { position: [3, 2, 4], fov: 25 });
	}
};

screenWidth(window.innerWidth);

const Loader = () => {
	const { progress } = useProgress();
	return <Html center>{Number.parseInt(progress)} % loaded</Html>;
};

const Canvas3D = () => {
	return (
		<CanvaContainer>
			<Canvas shadows camera={CamaraPosition}>
				<ambientLight intensity={0.25} />
				<spotLight
					intensity={0.2}
					angle={0.1}
					penumbra={1}
					position={[20, 15, 10]}
					castShadow
				/>
				<spotLight
					intensity={0.3}
					angle={0.1}
					penumbra={1}
					position={[-15, 15, 10]}
					castShadow
				/>
				<Suspense fallback={<Loader />}>
					<Sneaker />
					<Environment preset="city" />
					<ContactShadows
						rotation-x={Math.PI / 2}
						position={[0, -0.8, 0]}
						opacity={0.5}
						width={10}
						height={10}
						blur={1.8}
						far={0.8}
					/>
				</Suspense>
				<OrbitControls maxPolarAngle={Math.PI / 2} />
			</Canvas>
		</CanvaContainer>
	);
};

export default Canvas3D;

const CanvaContainer = styled.div`
	width: 100vw;
	height: 100vh;
	max-height: 100vh;

	margin-top: -80px;

	position: relative;
	z-index: 4;

	@media screen and (max-width: 768px) {
		margin-top: -100px;
	}
`;
