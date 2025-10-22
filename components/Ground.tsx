/* eslint-disable react-hooks/immutability */
"use client";

import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";

export const Ground = () => {
  const texture = useLoader(TextureLoader, "/textures/ground.jpg");
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(20, 20);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};
