"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGameState } from "@/store/gameState";
import { Text } from "@react-three/drei";
import * as THREE from "three";

type SectionPanelProps = {
  position: [number, number, number];
  label: string;
};

export const SectionPanel = ({ position, label }: SectionPanelProps) => {
  const ref = useRef<THREE.Group>(null!);
  const { activeSection } = useGameState();

  // Content for each section
  const content: Record<string, string> = {
    About: `About Me\nI am a developer building interactive 3D portfolios.\nI love Three.js, React, and immersive experiences.`,
    Projects: `Projects\n- Portfolio Game (this project!)\n- Next.js + Three.js apps\n- Interactive UI components`,
    Contact: `Contact\nEmail: example@portfolio.com\nLinkedIn: linkedin.com/in/example`,
  };

  useFrame(() => {
    if (!ref.current) return;

    // Floating animation when active
    if (activeSection === label) {
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        2,
        0.1
      );
    } else {
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        0,
        0.05
      );
    }
  });

  if (!content[label]) return null;

  return (
    <group ref={ref} position={position}>
      {activeSection === label && (
        <>
          {/* Panel background */}
          <mesh>
            <boxGeometry args={[6, 4, 0.2]} />
            <meshStandardMaterial color="#222" opacity={0.95} transparent />
          </mesh>

          {/* Multi-line Text */}
          <Text
            position={[0, 0, 0.15]}
            fontSize={0.35}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={5.5}
          >
            {content[label]}
          </Text>
        </>
      )}
    </group>
  );
};
