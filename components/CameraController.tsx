/* eslint-disable react-hooks/immutability */
"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useCarStore } from "@/store/car";
import * as THREE from "three";
import { PerspectiveCamera } from "three";

export const CameraController = () => {
  const carPos = useCarStore((state) => state.position);
  const carMesh = useCarStore((state) => state.mesh);
  const { camera } = useThree();
  const offset = new THREE.Vector3(0, 5, 10);
  const tempVec = new THREE.Vector3();
  const target = new THREE.Vector3();

  useFrame(() => {
    if (!carMesh) return;

    const velocity = carMesh.userData.velocity ?? 0;

    // Rotate offset with car
    tempVec.copy(offset).applyQuaternion(carMesh.quaternion);
    target.copy(carPos).add(tempVec);

    // Smooth camera position
    camera.position.lerp(target, 0.1);

    // Look at car
    const lookAtPos = new THREE.Vector3()
      .copy(carPos)
      .add(new THREE.Vector3(0, 1, 0));
    camera.lookAt(lookAtPos);

    // Tilt camera on turns
    camera.rotation.z = THREE.MathUtils.lerp(
      camera.rotation.z,
      -carMesh.rotation.y * 0.2,
      0.05
    );

    // Speed-based shake
    const shakeAmount = THREE.MathUtils.clamp(velocity * 0.02, 0, 0.05);
    camera.position.x += (Math.random() - 0.5) * shakeAmount;
    camera.position.y += (Math.random() - 0.5) * shakeAmount;
    camera.position.z += (Math.random() - 0.5) * shakeAmount;

    // FOV zoom — cast to PerspectiveCamera first
    const perspectiveCamera = camera as PerspectiveCamera;
    const desiredFov = THREE.MathUtils.clamp(60 - velocity * 5, 50, 70);
    perspectiveCamera.fov = THREE.MathUtils.lerp(
      perspectiveCamera.fov,
      desiredFov,
      0.05
    );
    perspectiveCamera.updateProjectionMatrix();
  });

  return null; // ✅ add this to make it a valid JSX component
};
