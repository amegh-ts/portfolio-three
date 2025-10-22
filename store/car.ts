"use client";
import { create } from "zustand";
import * as THREE from "three";

type CarState = {
  mesh: THREE.Mesh | null;
  setMesh: (mesh: THREE.Mesh) => void;
  position: THREE.Vector3;
  setPosition: (pos: THREE.Vector3) => void;
};

export const useCarStore = create<CarState>((set) => ({
  mesh: null,
  setMesh: (mesh) => set({ mesh }),
  position: new THREE.Vector3(0, 0.5, 0),
  setPosition: (pos) => set({ position: pos.clone() }),
}));
