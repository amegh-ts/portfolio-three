"use client";
import { create } from "zustand";

type GameState = {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
};

export const useGameState = create<GameState>((set) => ({
  activeSection: null,
  setActiveSection: (section) => set({ activeSection: section }),
}));
