// components/SectionContent.tsx
"use client";

import { useGameState } from "@/store/gameState";

export const SectionContent = () => {
  const { activeSection } = useGameState();

  const content = {
    About: (
      <div>
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>
          I am a developer building interactive 3D portfolios with React Three
          Fiber.
        </p>
      </div>
    ),
    Projects: (
      <div>
        <h2 className="text-2xl font-bold">Projects</h2>
        <ul className="list-disc pl-5">
          <li>Portfolio Game (this one!)</li>
          <li>Next.js + Three.js apps</li>
          <li>Interactive UI components</li>
        </ul>
      </div>
    ),
    Contact: (
      <div>
        <h2 className="text-2xl font-bold">Contact</h2>
        <p>Email: example@portfolio.com</p>
        <p>LinkedIn: linkedin.com/in/example</p>
      </div>
    ),
  };

  if (!activeSection) return null;

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 text-white p-6 rounded-xl max-w-lg">
      {content[activeSection as keyof typeof content]}
    </div>
  );
};
