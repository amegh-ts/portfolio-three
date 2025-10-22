// components/CameraController.tsx
"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useCarStore } from "@/store/car";
import * as THREE from "three";

export const CameraController = () => {
  const carPos = useCarStore((state) => state.position);
  const { camera } = useThree();

  const offset = new THREE.Vector3(0, 5, 10); // camera offset: behind and above

  useFrame((state, delta) => {
    // Desired camera position
    const desiredPos = new THREE.Vector3().copy(carPos).add(offset);
    // Smooth interpolation
    camera.position.lerp(desiredPos, 0.1);

    // Look at the car
    camera.lookAt(carPos);
  });

  return null;
};
