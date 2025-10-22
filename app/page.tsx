"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "@/components/Scene";
import { UIOverlay } from "@/components/UIOverlay";

export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-slate-900 overflow-hidden">
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
        <color attach="background" args={["#0f172a"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <UIOverlay />
    </div>
  );
}
