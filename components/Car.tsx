"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useKeyboardControls } from "@/store/controls";
import { useCarStore } from "@/store/car";

export const Car = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { forward, backward, left, right } = useKeyboardControls();
  const { setMesh, setPosition } = useCarStore();
  const velocityRef = useRef(0);

  // Set the mesh once
  useFrame(() => {
    if (!ref.current) return;
    setMesh(ref.current);

    let vel = velocityRef.current;

    // Acceleration
    if (forward) vel += 0.15;
    if (backward) vel -= 0.15;
    vel *= 0.93;
    vel = THREE.MathUtils.clamp(vel, -2, 3);
    velocityRef.current = vel;

    // Steering
    if (left) ref.current.rotation.y += 0.05;
    if (right) ref.current.rotation.y -= 0.05;

    // Move car
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(
      ref.current.quaternion
    );
    ref.current.position.addScaledVector(dir, vel * 0.1); // delta scaled manually

    // Update store position
    setPosition(ref.current.position);
  });

  return (
    <mesh ref={ref} position={[0, 0.5, 0]} castShadow>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};
