import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import front_texture from "../model/textures/vasa/front.jpg";
import back_texture from "../model/textures/vasa/back.jpg";
import top_texture from "../model/textures/vasa/top.jpg";
import bottom_texture from "../model/textures/vasa/bottom.jpg";
import right_texture from "../model/textures/vasa/right.jpg";
import left_texture from "../model/textures/vasa/left.jpg";

import { TextureLoader, MeshBasicMaterial, BackSide } from "three";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) => (
      (ref.current.rotation.x += 0.01), (ref.current.rotation.y += 0.04)
    )
  );
  // Return the view, these are regular Threejs elements expressed in JSX

  // array for holding all texutre
  let textureArray = [];

  // all texture
  const frontTexture = useLoader(TextureLoader, front_texture);
  const backTexture = useLoader(TextureLoader, back_texture);
  const topTexture = useLoader(TextureLoader, top_texture);
  const bottomTexture = useLoader(TextureLoader, bottom_texture);
  const leftTexture = useLoader(TextureLoader, left_texture);
  const rightTexture = useLoader(TextureLoader, right_texture);

  textureArray.push(new MeshBasicMaterial({ map: frontTexture }));
  textureArray.push(new MeshBasicMaterial({ map: backTexture }));
  textureArray.push(new MeshBasicMaterial({ map: topTexture }));
  textureArray.push(new MeshBasicMaterial({ map: bottomTexture }));
  textureArray.push(new MeshBasicMaterial({ map: leftTexture }));
  textureArray.push(new MeshBasicMaterial({ map: rightTexture }));

  for (let i = 0; i < textureArray.length; i++) {
    textureArray[i].side = BackSide;
  }

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />

      <meshBasicMaterial color={hovered ? "red" : "orange"} />
    </mesh>
  );
}

export default Box;
