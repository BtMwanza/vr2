import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./geometry/Box";
import Sphere from "./geometry/Sphere";
import Planet from "./geometry/Planet";
import planetData  from "./data/planetsData";
import { OrbitControls, Stars } from "@react-three/drei";
import {
  earth_texture,
  jupiter_texture,
  mars_texture,
  mercury_texture,
  neptune_texture,
  pluto_texture,
  saturn_texture,
  sun_texture,
  uranus_texture,
  venus_texture,
} from "./model";

function App() {
  return (
    <Canvas camera={{ fov: 95, near: 0.1, far: 1000, position: [0, 0, 25] }}>
      <OrbitControls />
      <Suspense fallback={null}>
        <Stars />
        {/* <Box position={[-3, 0, 0]}/> */}
        <Sphere
          texture={sun_texture}
          position={[0, 0, 0]}
          sun
          ms={[3, 30, 30]}
        />
        {planetData.map((planet) => (
            <Planet planet={planet} key={planet.id} />
          ))}
      </Suspense>
    </Canvas>
  );
}

export default App;
