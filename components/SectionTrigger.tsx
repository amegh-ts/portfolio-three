"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGameState } from "@/store/gameState";
import { useCarStore } from "@/store/car";
import * as THREE from "three";

export const SectionTrigger = ({
  position,
  label,
}: {
  position: [number, number, number];
  label: string;
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { setActiveSection } = useGameState();
  const carPos = useCarStore((state) => state.position);

  useFrame(() => {
    if (!ref.current) return;
    const triggerPos = new THREE.Vector3(...position);
    const dist = triggerPos.distanceTo(carPos);
    if (dist < 3) setActiveSection(label);
    else if (setActiveSection) setActiveSection(null);
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial color="skyblue" opacity={0.4} transparent />
    </mesh>
  );
};
