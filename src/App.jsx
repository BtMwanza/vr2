import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./geometry/Box";
import Sphere from "./geometry/Sphere";
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
          ms={[0.8, 30, 30]}
        />
        <Sphere
          texture={mercury_texture}
          position={[-1.2, 0, 0]}
          ms={[0.2, 30, 30]}
        />
        <Sphere
          texture={venus_texture}
          position={[-2, 0, 0]}
          ms={[0.3, 30, 30]}
        />
        <Sphere
          texture={earth_texture}
          position={[-3, 0, 0]}
          ms={[0.4, 30, 30]}
        />
        <Sphere
          texture={mars_texture}
          position={[-4.5, 0, 0]}
          ms={[0.5, 30, 30]}
        />
        <Sphere
          texture={jupiter_texture}
          position={[-6, 0, 0]}
          ms={[0.6, 30, 30]}
        />
        <Sphere
          texture={saturn_texture}
          position={[-7.3, 0, 0]}
          ms={[0.5, 30, 30]}
        />
        <Sphere
          texture={uranus_texture}
          position={[-8.4, 0, 0]}
          ms={[0.4, 30, 30]}
        />
        <Sphere
          texture={neptune_texture}
          position={[-9.3, 0, 0]}
          ms={[0.3, 30, 30]}
        />
        <Sphere
          texture={pluto_texture}
          position={[-10, 0, 0]}
          ms={[0.1, 30, 30]}
        />
      </Suspense>
    </Canvas>
  );
}

export default App;
