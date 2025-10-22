"use client";

import { Car } from "./Car";
import { Ground } from "./Ground";
import { SectionTrigger } from "./SectionTrigger";
import { CameraController } from "./CameraController";

export const Scene = () => {
  return (
    <>
      <Ground />
      <Car />
      <CameraController /> {/* camera follows car */}
      {/* Section zones */}
      <SectionTrigger position={[8, 0, 0]} label="About" />
      <SectionTrigger position={[-8, 0, 0]} label="Projects" />
      <SectionTrigger position={[0, 0, -10]} label="Contact" />
    </>
  );
};
