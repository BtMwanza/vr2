import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Sphere(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!props.sun) {
      (ref.current.rotation.x += 0.001), (ref.current.rotation.y += 0.001);
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX

  const myTexture = useLoader(TextureLoader, props.texture);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereBufferGeometry args={props.ms} attach="geometry" />

      <meshBasicMaterial map={myTexture} />
    </mesh>
  );
}

export default Sphere;
