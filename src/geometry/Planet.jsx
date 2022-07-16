import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import Ecliptic from "./../util/Ecliptic";

const Planet = ({
  planet: { xRadius, zRadius, size, speed, offset, rotationSpeed, textureMap },
}) => {
  const planetRef = React.useRef();
  const texture = useLoader(TextureLoader, textureMap);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <React.Fragment>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </React.Fragment>
  );
};

export default Planet;
