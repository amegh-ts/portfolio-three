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
  const update = (key: string, value: boolean) => {
    const store = useKeyboardControls.getState();
    if (key === "w") store.forward = value;
    if (key === "s") store.backward = value;
    if (key === "a") store.left = value;
    if (key === "d") store.right = value;
  };

  window.addEventListener("keydown", (e) => update(e.key.toLowerCase(), true));
  window.addEventListener("keyup", (e) => update(e.key.toLowerCase(), false));
}
