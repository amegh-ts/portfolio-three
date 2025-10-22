"use client";

import { motion } from "framer-motion";
import { useGameState } from "@/store/gameState";

export const UIOverlay = () => {
  const { activeSection } = useGameState();

  return (
    <div className="absolute top-0 left-0 p-4 text-white z-10">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-black/60 px-4 py-2 text-lg"
      >
        {activeSection || "Explore the world (WASD to drive)"}
      </motion.div>
    </div>
  );
};
