/* eslint-disable react-hooks/immutability */
"use client";

import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

export const Ground = () => {
  // ✅ make sure you actually have /public/textures/ground.jpg
  const texture = useLoader(TextureLoader, "/textures/ground.jpg");

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(20, 20);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};
