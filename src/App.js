import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Sneaker from "./components/Sneaker";
import Picker from "./components/Picker";

const App = () => {
	return (
		<>
			<Picker />
			<img src="./assets/logo.svg" alt="" />
			<Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
				<ambientLight intensity={0.3} />
				<spotLight
					intensity={0.5}
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
				<Suspense fallback={null}>
					<Sneaker />
					<Environment preset="city" />
					<ContactShadows
						rotation-x={Math.PI / 2}
						position={[0, -0.8, 0]}
						opacity={0.3}
						width={10}
						height={10}
						blur={1.5}
						far={0.8}
					/>
				</Suspense>
				<OrbitControls maxPolarAngle={Math.PI / 2} />
			</Canvas>
		</>
	);
};

export default App;
