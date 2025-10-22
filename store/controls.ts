"use client";
import { create } from "zustand";

type Controls = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
};

export const useKeyboardControls = create<Controls>(() => ({
  forward: false,
  backward: false,
  left: false,
  right: false,
}));

if (typeof window !== "undefined") {
  const updateKey = (key: string, state: boolean) => {
    const store = useKeyboardControls.getState();
    if (key === "w") store.forward = state;
    if (key === "s") store.backward = state;
    if (key === "a") store.left = state;
    if (key === "d") store.right = state;
  };

  window.addEventListener("keydown", (e) =>
    updateKey(e.key.toLowerCase(), true)
  );
  window.addEventListener("keyup", (e) =>
    updateKey(e.key.toLowerCase(), false)
  );
}
